"use client"
import { QuoteIcon } from "lucide-react"

export interface StudentStory {
  id: string
  quote: string
  name: string
  affiliation: string
  submissionType?: "text" | "video"
  videoUrl?: string
}

interface StudentVoicesMarqueeProps {
  stories: StudentStory[]
  speed?: string
}

export function StudentVoicesMarquee({ stories }: StudentVoicesMarqueeProps) {
  // Early return with null check
  if (!stories || !Array.isArray(stories) || stories.length === 0) {
    return (
      <div className="w-full overflow-hidden bg-neutral-100 py-4">
        <div className="text-center text-neutral-500 py-8">No stories available at the moment.</div>
      </div>
    )
  }

  // More robust filtering with explicit type checking
  const validStories = stories.filter((story) => {
    try {
      return (
        story !== null &&
        story !== undefined &&
        typeof story === "object" &&
        typeof story.id === "string" &&
        story.id.length > 0 &&
        typeof story.quote === "string" &&
        story.quote.length > 0 &&
        typeof story.name === "string" &&
        story.name.length > 0 &&
        typeof story.affiliation === "string"
      )
    } catch (error) {
      console.warn("Error filtering story:", error)
      return false
    }
  })

  if (validStories.length === 0) {
    return (
      <div className="w-full overflow-hidden bg-neutral-100 py-4">
        <div className="text-center text-neutral-500 py-8">No valid stories available.</div>
      </div>
    )
  }

  // Duplicate stories exactly twice for seamless infinite loop
  const marqueeStories = [...validStories, ...validStories]

  return (
    <div className="w-full overflow-hidden bg-neutral-100 py-4">
      <div className="flex gap-6 animate-marquee-scroll" style={{ width: "200%" }}>
        {marqueeStories.map((story, index) => {
          // Additional safety check for each render
          if (!story?.id) {
            return null
          }

          try {
            const isVideo = story.submissionType === "video" && story.videoUrl

            return (
              <div
                key={`${story.id}-${index}`}
                className={`flex-shrink-0 ${isVideo ? "w-96 md:w-[28rem]" : "w-80 md:w-96"} p-6 bg-white rounded-lg shadow-subtle border border-neutral-200`}
              >
                {isVideo ? (
                  <div className="mb-4">
                    <video
                      className="w-full h-48 rounded-lg object-cover"
                      controls
                      preload="metadata"
                      poster="/placeholder.svg?height=192&width=384&text=Video+Story"
                    >
                      <source src={story.videoUrl} type="video/mp4" />
                      <source src={story.videoUrl} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <QuoteIcon className="h-8 w-8 text-primary/30 mb-3" aria-hidden="true" />
                )}

                <p className="text-md italic text-neutral-700 leading-relaxed mb-3 whitespace-normal">
                  "{story.quote || "No quote available"}"
                </p>
                <p className="text-sm font-semibold text-neutral-800 whitespace-normal">{story.name || "Anonymous"}</p>
                <p className="text-xs text-neutral-500 whitespace-normal">{story.affiliation || "No affiliation"}</p>

                {isVideo && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      📹 Video Story
                    </span>
                  </div>
                )}
              </div>
            )
          } catch (error) {
            console.warn("Error rendering story:", error)
            return null
          }
        })}
      </div>
    </div>
  )
}
