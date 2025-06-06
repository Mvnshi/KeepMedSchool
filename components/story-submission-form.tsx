"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MessageSquare, Send, CheckCircle2, ArrowLeft, Video, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitStory, type StoryState } from "@/app/actions"
import Link from "next/link"

const initialState: StoryState = {
  message: null,
  success: false,
}

export function StorySubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitStory, initialState)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [submissionType, setSubmissionType] = useState<"text" | "video">("text")
  const [showSuccess, setShowSuccess] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
      if (state.success) {
        setShowSuccess(true)
        formRef.current?.reset()
        setIsAnonymous(false)
        setSubmissionType("text")
      }
    }
  }, [state, toast])

  if (showSuccess) {
    return (
      <Card className="max-w-2xl mx-auto bg-white p-6 md:p-10 shadow-medium rounded-xl border-t-4 border-green-500">
        <CardHeader className="p-0 mb-6 text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <CardTitle className="text-3xl font-bold text-green-700">Thank You For Sharing!</CardTitle>
          <CardDescription className="text-neutral-600 mt-3 text-lg">
            Your {submissionType === "video" ? "video story" : "story"} has been submitted and will be reviewed before
            being displayed on the site.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              <strong>What happens next?</strong> Our team will review your submission to ensure it meets our community
              guidelines. Approved stories will appear in the "Student Voices" section to help amplify the impact of
              this campaign.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-primary hover:bg-brand-blue-dark text-primary-foreground"
            >
              Submit Another Story
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Campaign
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto bg-white p-6 md:p-10 shadow-medium rounded-xl border border-neutral-200">
      <CardHeader className="p-0 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="h-10 w-10 text-primary" />
          <div>
            <CardTitle className="text-3xl font-bold text-neutral-800">Share Your Story</CardTitle>
            <CardDescription className="text-neutral-600 mt-2 text-lg">
              Help others understand why accessible medical education matters
            </CardDescription>
          </div>
        </div>
        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
          <p className="text-sm text-neutral-700">
            <strong>Your voice matters.</strong> Share how this bill would impact you, your community, or why medical
            education accessibility is important. You can submit either a written story or a video message.
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <form ref={formRef} action={formAction} className="space-y-6">
          {/* Submission Type Selection */}
          <div>
            <Label className="text-neutral-700 font-medium text-sm mb-3 block">
              How would you like to share your story? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={submissionType}
              onValueChange={(value) => setSubmissionType(value as "text" | "video")}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-4 border border-neutral-200 rounded-lg hover:border-primary/50 transition-colors">
                <RadioGroupItem value="text" id="text" />
                <Label htmlFor="text" className="flex items-center gap-2 cursor-pointer flex-1">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Written Story</div>
                    <div className="text-xs text-neutral-500">Share your story in text</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border border-neutral-200 rounded-lg hover:border-primary/50 transition-colors">
                <RadioGroupItem value="video" id="video" />
                <Label htmlFor="video" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Video className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Video Message</div>
                    <div className="text-xs text-neutral-500">Record a video story</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
            <input type="hidden" name="submissionType" value={submissionType} />
          </div>

          {/* Story Content */}
          <div>
            <Label htmlFor="story" className="text-neutral-700 font-medium text-sm">
              Your Story {submissionType === "video" ? "(Brief description for video)" : ""}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="story"
              name="story"
              placeholder={
                submissionType === "video"
                  ? "Provide a brief description of what you discuss in your video..."
                  : "Share your perspective on why accessible medical education matters, how this bill would affect you or your community, or your experience as a medical student..."
              }
              rows={submissionType === "video" ? 3 : 6}
              required
              className="mt-1.5 py-3 px-4 text-base rounded-md border-neutral-border focus:ring-primary focus:border-primary"
            />
            <p className="text-xs text-neutral-500 mt-1">Maximum 500 characters</p>
            {state.errors?.story && <p className="text-sm text-red-500 mt-1">{state.errors.story[0]}</p>}
          </div>

          {/* Video URL Input (only shown for video submissions) */}
          {submissionType === "video" && (
            <div>
              <Label htmlFor="videoUrl" className="text-neutral-700 font-medium text-sm">
                Video URL <span className="text-red-500">*</span>
              </Label>
              <Input
                id="videoUrl"
                name="videoUrl"
                type="url"
                placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                required={submissionType === "video"}
                className="mt-1.5 py-3 px-4 text-base rounded-md border-neutral-border focus:ring-primary focus:border-primary"
              />
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>Video Guidelines:</strong>
                  <br />• Upload your video to YouTube, Vimeo, or similar platform
                  <br />• Keep videos under 3 minutes for best engagement
                  <br />• Ensure good audio quality and lighting
                  <br />• Paste the full URL here (e.g., https://youtube.com/watch?v=abc123)
                </p>
              </div>
              {state.errors?.videoUrl && <p className="text-sm text-red-500 mt-1">{state.errors.videoUrl[0]}</p>}
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isAnonymous"
              name="isAnonymous"
              checked={isAnonymous}
              onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
            />
            <Label htmlFor="isAnonymous" className="text-sm font-medium text-neutral-700">
              Submit anonymously (your name won't be displayed)
            </Label>
          </div>

          {!isAnonymous && (
            <div>
              <Label htmlFor="name" className="text-neutral-700 font-medium text-sm">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Full Name"
                required={!isAnonymous}
                className="mt-1.5 py-3 px-4 text-base rounded-md border-neutral-border focus:ring-primary focus:border-primary"
              />
              {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
            </div>
          )}

          <div>
            <Label htmlFor="affiliation" className="text-neutral-700 font-medium text-sm">
              School/Organization <span className="text-neutral-500">(Optional)</span>
            </Label>
            <Input
              id="affiliation"
              name="affiliation"
              type="text"
              placeholder="e.g., Harvard Medical School, Pre-med at UCLA, Resident at Johns Hopkins"
              className="mt-1.5 py-3 px-4 text-base rounded-md border-neutral-border focus:ring-primary focus:border-primary"
            />
            {state.errors?.affiliation && <p className="text-sm text-red-500 mt-1">{state.errors.affiliation[0]}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-neutral-700 font-medium text-sm">
              Email Address <span className="text-neutral-500">(Optional - for follow-up only)</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1.5 py-3 px-4 text-base rounded-md border-neutral-border focus:ring-primary focus:border-primary"
            />
            <p className="text-xs text-neutral-500 mt-1">Your email will never be displayed publicly</p>
            {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
          </div>

          {state.errors?._form && <p className="text-sm text-red-500 mt-1">{state.errors._form[0]}</p>}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="bg-primary hover:bg-brand-blue-dark text-primary-foreground text-lg font-semibold py-4 rounded-md shadow-sm transition-all duration-150 ease-in-out transform active:scale-[0.98] flex-1"
              disabled={isPending}
            >
              {isPending ? (
                "Submitting..."
              ) : (
                <>
                  {submissionType === "video" ? (
                    <Video className="mr-2.5 h-5 w-5" />
                  ) : (
                    <Send className="mr-2.5 h-5 w-5" />
                  )}
                  Submit {submissionType === "video" ? "Video Story" : "Story"}
                </>
              )}
            </Button>
            <Button variant="outline" asChild className="py-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Campaign
              </Link>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
