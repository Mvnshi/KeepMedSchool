import type { Metadata } from "next"
import Link from "next/link"
import { VoteIcon, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StorySubmissionForm } from "@/components/story-submission-form"

export const metadata: Metadata = {
  title: "Share Your Story | Keep Med School Accessible",
  description:
    "Share your perspective on why accessible medical education matters. Help amplify the voices of students, doctors, and advocates fighting to keep medical school accessible for all.",
}

export default function SubmitStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-200/80">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <VoteIcon className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg md:text-2xl text-neutral-800 tracking-tight">
              Keep Med School Accessible
            </span>
          </Link>
          <Button variant="outline" asChild className="text-neutral-600 hover:text-primary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Campaign
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Your Story Can Make a Difference</h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Share your perspective on why accessible medical education matters. Whether you're a current student,
              aspiring doctor, healthcare professional, or concerned citizen, your voice helps demonstrate the real
              impact of this legislation.
            </p>
          </div>

          <StorySubmissionForm />

          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-lg border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">Community Guidelines</h3>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li>• Keep stories respectful and focused on the issue of medical education accessibility</li>
              <li>• Share personal experiences or perspectives on how this bill would impact you or your community</li>
              <li>• Stories will be reviewed before being displayed to ensure they meet community standards</li>
              <li>• Anonymous submissions are welcome and encouraged if you prefer privacy</li>
              <li>• Your email address (if provided) will only be used for follow-up and will never be displayed</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} KeepMedSchoolAccessible.org. All Rights Reserved.</p>
          <p className="text-xs mt-1 text-neutral-500">This is a fictional campaign for illustrative purposes.</p>
        </div>
      </footer>
    </div>
  )
}
