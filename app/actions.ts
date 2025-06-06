"use server"

import { kv } from "@vercel/kv"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// --- STUDENT STORY SUBMISSION LOGIC ---
// Update the StorySchema to include video support
const StorySchema = z.object({
  story: z
    .string()
    .min(10, { message: "Story must be at least 10 characters." })
    .max(500, { message: "Story is too long (max 500 characters)." }),
  name: z.string().max(100, { message: "Name too long." }).optional(),
  affiliation: z.string().max(150, { message: "Affiliation too long." }).optional(),
  isAnonymous: z.boolean().default(false),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email too long." })
    .optional(),
  submissionType: z.enum(["text", "video"]).default("text"),
  videoUrl: z.string().url().optional(),
})

// Update StoryState to include video-related errors
export interface StoryState {
  message?: string | null
  success?: boolean
  errors?: {
    story?: string[]
    name?: string[]
    affiliation?: string[]
    email?: string[]
    submissionType?: string[]
    videoUrl?: string[]
    _form?: string[]
  }
}

// Update submitStory function to handle video submissions
export async function submitStory(prevState: StoryState, formData: FormData): Promise<StoryState> {
  const isAnonymous = formData.get("isAnonymous") === "on"
  const submissionType = (formData.get("submissionType") as string) || "text"

  const validatedFields = StorySchema.safeParse({
    story: formData.get("story"),
    name: isAnonymous ? "" : formData.get("name"),
    affiliation: formData.get("affiliation"),
    isAnonymous: isAnonymous,
    email: formData.get("email"),
    submissionType: submissionType,
    videoUrl: submissionType === "video" ? formData.get("videoUrl") : undefined,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    }
  }

  const { story, name, affiliation, email, videoUrl } = validatedFields.data

  // If not anonymous, name is required
  if (!isAnonymous && (!name || name.trim().length < 2)) {
    return {
      errors: { name: ["Name is required when not submitting anonymously."] },
      message: "Please provide your name or choose to submit anonymously.",
      success: false,
    }
  }

  // For video submissions, ensure video URL is provided
  if (submissionType === "video" && (!videoUrl || videoUrl.trim().length === 0)) {
    return {
      errors: { videoUrl: ["Video URL is required for video submissions."] },
      message: "Please provide a valid video URL.",
      success: false,
    }
  }

  const storySubmission = {
    id: `story-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    quote: story,
    name: isAnonymous ? "Anonymous Student" : name || "Anonymous Student",
    affiliation: affiliation || "Medical Student",
    isAnonymous: isAnonymous,
    email: email || "",
    submissionType: submissionType,
    videoUrl: videoUrl || null,
    submittedAt: new Date().toISOString(),
    status: "pending",
  }

  try {
    await kv.lpush("student_stories", JSON.stringify(storySubmission))
    revalidatePath("/")
    revalidatePath("/submit-story")
    revalidatePath("/student-stories")

    const displayName = isAnonymous ? "Anonymous" : name || "Anonymous"
    const submissionTypeText = submissionType === "video" ? "video story" : "story"
    return {
      message: `Thank you, ${displayName}! Your ${submissionTypeText} has been submitted and will be reviewed before being displayed.`,
      success: true,
    }
  } catch (error) {
    console.error("Error saving story to KV:", error)
    return {
      message: "An unexpected error occurred while submitting your story. Please try again later.",
      success: false,
      errors: { _form: ["Submission failed due to a server error."] },
    }
  }
}

export async function getSubmittedStories(): Promise<any[]> {
  try {
    const stories = await kv.lrange("student_stories", 0, -1)
    return stories
      .map((story) => {
        try {
          return JSON.parse(story as string)
        } catch {
          return null
        }
      })
      .filter(Boolean)
  } catch (error) {
    console.error("Error fetching submitted stories:", error)
    return []
  }
}
