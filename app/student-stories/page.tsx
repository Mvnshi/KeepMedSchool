import type { Metadata } from "next"
import Link from "next/link"
import { VoteIcon, ArrowLeft, Heart, Users, GraduationCap, MessageSquare, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Student Stories | Keep Med School Accessible",
  description:
    "Read powerful stories and watch video messages from medical students whose futures hang in the balance. These are the voices that would be silenced if federal loans for medical education are eliminated.",
}

interface StudentStory {
  id: string
  emoji: string
  title: string
  name: string
  school: string
  story: string
  submissionType?: "text" | "video"
  videoUrl?: string
}

const studentStories: StudentStory[] = [
  {
    id: "alex-m",
    emoji: "🧑‍⚕️",
    title: "If This Passes, I Can't Become a Doctor",
    name: "Alex M.",
    school: "SUNY Downstate",
    story: `I've dreamed of becoming a doctor since I was twelve. I come from a working-class family in Queens—my mom's a school bus driver, my dad's a retired sanitation worker. There's no way I could even think about medical school without federal loans.

I've already taken out $180,000 just to get through undergrad and my post-bacc. This bill would slam the door shut for people like me, not because we lack the grades or determination, but because we weren't born rich. I'm scared, honestly. I didn't come this far to get stopped by a bill that only helps the wealthy stay ahead.`,
    submissionType: "text",
  },
  {
    id: "maya-video",
    emoji: "👩‍⚕️",
    title: "My Journey from Rural America to Medical School",
    name: "Maya Chen",
    school: "University of Michigan Medical School",
    story:
      "In this video, I share my story of growing up in rural Michigan and how federal loans made it possible for me to pursue my dream of becoming a doctor to serve underserved communities.",
    submissionType: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video URL
  },
  {
    id: "anita-k",
    emoji: "👩‍⚕️",
    title: "I'm the First in My Family… and Maybe the Last",
    name: "Anita K.",
    school: "Howard University",
    story: `My parents immigrated from Nigeria and have worked every day of their lives to give me this chance. I'm the first in my entire family to make it this far—to even dream of becoming a physician.

When I told them about this bill, my dad just said, "How is this even allowed?" I didn't have an answer. If this passes, there's no backup. No rich uncle. No savings account. Just a dead-end. The thought that policy could erase everything we've fought for is devastating.`,
    submissionType: "text",
  },
  {
    id: "james-video",
    emoji: "🧓",
    title: "Why I Started Medical School at 32",
    name: "James Thompson",
    school: "Columbia University Vagelos College of Physicians and Surgeons",
    story:
      "Watch my story about taking an unconventional path to medicine and why federal loans were crucial for someone like me who couldn't afford to wait for family wealth.",
    submissionType: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video URL
  },
  {
    id: "luis-r",
    emoji: "👨‍⚕️",
    title: "We Need More Doctors — Not Fewer",
    name: "Luis R.",
    school: "University of California, San Francisco (UCSF)",
    story: `I'm Latino, gay, and from a small town where the nearest hospital is 45 minutes away. I want to go back to my community and provide care where it's desperately needed.

But this bill doesn't just threaten my future—it threatens the future of care in places like mine. It's already hard enough to get into med school. Take away financial aid, and you're telling whole populations: you're not wanted in medicine. That's not just wrong—it's dangerous.`,
    submissionType: "text",
  },
]

export default function StudentStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-200/80">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <VoteIcon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="font-bold text-base md:text-lg lg:text-2xl text-neutral-800 tracking-tight">
              Keep Med School Accessible
            </span>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-neutral-600 hover:text-primary text-xs md:text-sm"
            >
              <Link href="/submit-story">
                <MessageSquare className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Share Story</span>
                <span className="sm:hidden">Share</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-neutral-600 hover:text-primary text-xs md:text-sm"
            >
              <Link href="/">
                <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Back</span>
                <span className="sm:hidden">←</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-neutral-100 py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <Users className="mx-auto h-12 w-12 md:h-16 md:w-16 text-primary mb-4 md:mb-6" />
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight px-2">
                These Are the Voices That Would Be <span className="text-primary">Silenced</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-6 md:mb-8 px-2">
                Real stories and video messages from medical students whose dreams—and our healthcare system's
                future—hang in the balance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 px-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-primary hover:bg-brand-blue-dark text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 text-sm md:text-base"
                >
                  <Link
                    href="https://www.change.org/p/stop-the-bill-for-med-schooool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Sign the Petition
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-150 text-sm md:text-base"
                >
                  <Link href="/submit-story">
                    <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Add Your Voice
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <GraduationCap className="mx-auto h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 md:mb-4 px-2">
                  Behind Every Statistic is a Human Story
                </h2>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed px-2">
                  These students represent thousands more whose futures depend on accessible medical education.
                </p>
              </div>

              <div className="space-y-6 md:space-y-12">
                {studentStories.map((story, index) => (
                  <article
                    key={story.id}
                    className="bg-gradient-to-br from-white to-neutral-50 rounded-xl md:rounded-2xl shadow-medium border border-neutral-200 overflow-hidden"
                  >
                    <div className="p-4 md:p-8 lg:p-12">
                      <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="text-2xl md:text-4xl lg:text-5xl flex-shrink-0">{story.emoji}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight">
                              "{story.title}"
                            </h3>
                            {story.submissionType === "video" && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                <Video className="w-3 h-3 mr-1" />
                                Video
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col gap-1 md:gap-2 text-sm md:text-lg">
                            <span className="font-semibold text-primary">{story.name}</span>
                            <span className="text-neutral-600 text-xs md:text-base leading-relaxed">
                              {story.school}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Video Content */}
                      {story.submissionType === "video" && story.videoUrl && (
                        <div className="mb-6">
                          <div className="aspect-video rounded-lg overflow-hidden bg-neutral-100">
                            <iframe
                              src={story.videoUrl}
                              title={`Video story by ${story.name}`}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}

                      {/* Text Content */}
                      <div className="prose prose-sm md:prose-lg max-w-none">
                        {story.story.split("\n\n").map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-neutral-700 leading-relaxed mb-3 md:mb-4 last:mb-0 text-sm md:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {index < studentStories.length - 1 && (
                      <div className="px-4 md:px-8 lg:px-12 pb-4 md:pb-8">
                        <Separator className="bg-neutral-200" />
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 md:mt-16 text-center">
                <div className="bg-primary/10 border border-primary/20 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 md:mb-4 px-2">
                    Every Story Matters. Every Voice Counts.
                  </h3>
                  <p className="text-sm md:text-lg text-neutral-600 mb-6 md:mb-8 leading-relaxed px-2">
                    These students are fighting for their futures—and for the future of healthcare in America. Join them
                    by signing the petition and sharing your own story or video message.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 px-4">
                    <Button
                      size="lg"
                      asChild
                      className="w-full sm:w-auto bg-primary hover:bg-brand-blue-dark text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 text-sm md:text-base"
                    >
                      <Link
                        href="https://www.change.org/p/stop-the-bill-for-med-schooool"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Sign the Petition Now
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-150 text-sm md:text-base"
                    >
                      <Link href="/submit-story">
                        <Video className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Share Your Story
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Keep Med School Accessible</h4>
            <p className="text-xs md:text-sm leading-relaxed text-neutral-400 mb-4 md:mb-6 px-2">
              A grassroots movement dedicated to ensuring that the path to becoming a physician remains open to all
              qualified individuals, regardless of socioeconomic background.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-neutral-300 border-neutral-600 hover:bg-neutral-800 text-xs md:text-sm"
              >
                <Link href="/">Campaign Home</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-neutral-300 border-neutral-600 hover:bg-neutral-800 text-xs md:text-sm"
              >
                <Link href="/submit-story">Share Your Story</Link>
              </Button>
            </div>
          </div>
          <Separator className="bg-neutral-700 my-6 md:my-8" />
          <div className="text-center text-xs md:text-sm text-neutral-500 px-2">
            © {new Date().getFullYear()} KeepMedSchoolAccessible.org. All Rights Reserved.
            <br />
            <span className="text-xs mt-1 block">This is a fictional campaign for illustrative purposes.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
