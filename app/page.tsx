import type React from "react"
export const dynamic = "force-dynamic"

import Link from "next/link"
import {
  VoteIcon,
  PenSquare,
  DollarSign,
  Ban,
  Hospital,
  Ambulance,
  UsersRound,
  TrendingDown,
  CheckCircle,
  Newspaper,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  QuoteIcon as BlockQuoteIcon,
  BookOpen,
  MessageCircle,
  Users,
  MessageSquare,
  Eye,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { StudentVoicesMarquee, type StudentStory } from "@/components/student-voices-marquee"

// Fictional student stories data with proper type safety and validation
const studentStories: StudentStory[] = [
  {
    id: "story-1",
    quote:
      "Federal loans aren't just funding my education; they're investing in the health of communities that desperately need doctors like me.",
    name: "Dr. Aisha Khan",
    affiliation: "Rural Health Advocate, Class of '26",
  },
  {
    id: "story-2",
    quote:
      "Coming from a low-income family, medical school felt like an impossible dream. This bill would make it so for countless others.",
    name: "Marcus Chen",
    affiliation: "Aspiring Pediatrician, M1 Student",
  },
  {
    id: "story-3",
    quote:
      "Diversity in medicine is crucial for equitable care. Removing financial aid options disproportionately silences voices we need to hear.",
    name: "Sofia Ramirez",
    affiliation: "Public Health Researcher, MD-PhD Candidate",
  },
  {
    id: "story-4",
    quote:
      "The path to becoming a physician is already a marathon of dedication and sacrifice. Let's not add an insurmountable financial hurdle.",
    name: "Ben Carter",
    affiliation: "Emergency Medicine Resident",
  },
  {
    id: "story-5",
    quote:
      "Every signature on this petition is a vote for a future where talent and passion, not wealth, define who can heal.",
    name: "Olivia Park",
    affiliation: "Future Surgeon, Student Activist",
  },
  {
    id: "story-6",
    quote:
      "This isn't just about student debt; it's about the future of patient care and who gets to provide it. We must act.",
    name: "Dr. Emily Sato",
    affiliation: "Internal Medicine Attending",
  },
].filter((story) => story && story.id && story.quote && story.name) // Additional filtering

async function getSignatureCount(): Promise<number> {
  // Replace with actual implementation to fetch signature count
  // This is a placeholder to avoid the "undeclared variable" error
  return 0
}

export default async function KeepMedSchoolAccessiblePage() {
  let signatureCount = 0

  try {
    signatureCount = await getSignatureCount()
  } catch (error) {
    console.error("Error fetching signature count:", error)
    // Fallback to 0 if there's an error
  }

  const ActionCard = ({
    href,
    icon: Icon,
    title,
    children,
    isExternal = true,
  }: {
    href: string
    icon: React.ElementType
    title: string
    children: React.ReactNode
    isExternal?: boolean
  }) => (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block p-6 bg-white rounded-xl shadow-subtle hover:shadow-medium transition-all duration-300 ease-in-out border border-neutral-border hover:border-primary/50"
    >
      <Icon className="h-10 w-10 mb-5 text-primary transition-colors group-hover:text-brand-blue-dark" />
      <h3 className="text-xl font-semibold mb-2 text-neutral-800 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{children}</p>
    </Link>
  )

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
          <nav className="hidden md:flex gap-2">
            <Button
              variant="ghost"
              asChild
              className="text-neutral-muted hover:text-primary hover:bg-primary/10 px-4 py-2 text-base"
            >
              <Link href="#whats-happening">The Issue</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-neutral-muted hover:text-primary hover:bg-primary/10 px-4 py-2 text-base"
            >
              <Link href="#why-this-matters">Why It Matters</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-neutral-muted hover:text-primary hover:bg-primary/10 px-4 py-2 text-base"
            >
              <Link href="/student-stories">Stories</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-neutral-muted hover:text-primary hover:bg-primary/10 px-4 py-2 text-base"
            >
              <Link href="#take-action">Take Action</Link>
            </Button>
          </nav>
          <Button
            asChild
            className="bg-primary hover:bg-brand-blue-dark text-primary-foreground font-semibold px-3 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base shadow-sm hover:shadow-md transition-all duration-150"
          >
            <Link
              href="https://www.change.org/p/stop-the-bill-for-med-schooool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PenSquare className="mr-1 md:mr-2 h-4 md:h-5 w-4 md:w-5" />
              <span className="hidden sm:inline">Sign Petition</span>
              <span className="sm:hidden">Sign</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-100 section-padding">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
              Don't Let Them Lock the Doors to Medical School.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-300 max-w-3xl mx-auto mb-12 font-light">
              A new bill threatens to eliminate federal loans for medical students. This isn't just about education;
              it's about <strong className="text-primary/80 font-semibold">your future doctor</strong>,{" "}
              <strong className="text-primary/80 font-semibold">your family's access to care</strong>, and the{" "}
              <strong className="text-primary/80 font-semibold">health of your community</strong>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="xl"
                asChild
                className="bg-primary hover:bg-brand-blue-dark text-primary-foreground text-xl px-10 py-7 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105"
              >
                <Link
                  href="https://www.change.org/p/stop-the-bill-for-med-schooool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PenSquare className="mr-2.5 h-6 w-6" />
                  Sign the Petition Now
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                asChild
                className="text-white border-white/80 bg-white/10 hover:bg-white hover:text-neutral-900 hover:border-white text-xl px-10 py-7 rounded-lg font-semibold transition-all duration-150"
              >
                <Link href="#whats-happening">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 1: What's Happening? */}
        <section id="whats-happening" className="section-padding bg-white">
          <div className="container-narrow mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900">
              The <span className="text-primary">"One Big Beautiful Bill":</span> A Threat to Your Health
            </h2>
            <div className="space-y-8 text-lg text-neutral-700 leading-relaxed">
              <p>
                The U.S. Congress is considering a bill, ominously titled the{" "}
                <strong className="text-neutral-800">"One Big Beautiful Bill,"</strong> which proposes the complete
                elimination of federal loan programs for medical students. If passed, this would devastate access to
                medical education for countless aspiring doctors from middle-class and low-income backgrounds,
                effectively making medicine a profession reserved for the wealthy.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-6 mt-10">Key Facts: The Stark Reality</h3>
                <ul className="space-y-5">
                  {[
                    {
                      icon: DollarSign,
                      text: "<span class='font-semibold'>86% of medical students</span> rely on federal loans to fund their education.",
                    },
                    {
                      icon: Ban,
                      text: "Without loans, aspiring doctors will be <span class='font-semibold'>priced out before they ever begin.</span>",
                    },
                    {
                      icon: Hospital,
                      text: "The healthcare system already faces critical shortages—<span class='font-semibold'>this bill will exacerbate them.</span>",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                      <item.icon className="h-7 w-7 mr-4 mt-1 text-primary flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item.text }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Official Opposition</h3>
                <div className="border-l-4 border-primary pl-6 py-4 bg-primary/10 rounded-r-md">
                  <p className="italic text-neutral-700">
                    The Association of American Medical Colleges (AAMC) has issued a formal statement warning that this
                    bill could{" "}
                    <strong className="text-neutral-800">
                      dramatically reduce the diversity and size of the physician workforce
                    </strong>
                    , impacting patient care nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-0 bg-neutral-200" />

        {/* Section 2: Why This Matters */}
        <section id="why-this-matters" className="section-padding bg-neutral-100">
          <div className="container-narrow mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900">
              Your Health is On The Line: Why This Bill Affects Everyone
            </h2>
            <div className="space-y-8 text-lg text-neutral-700 leading-relaxed">
              <p>If this dangerous bill passes, the consequences are far-reaching and dire:</p>
              <ul className="space-y-5">
                {[
                  {
                    icon: Ambulance,
                    text: "This Bill <span class='font-semibold text-primary'>Snatches Away Future Doctors</span> from rural and underserved areas where they're needed most.",
                  },
                  {
                    icon: UsersRound,
                    text: "It <span class='font-semibold'>disproportionately impacts</span> first-generation students, women, and individuals from BIPOC communities, hindering diversity in medicine.",
                  },
                  {
                    icon: TrendingDown,
                    text: "It will likely <span class='font-semibold'>increase the cost of healthcare</span> for everyone due to a shrinking supply of physicians.",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start p-4 bg-white rounded-lg border border-neutral-200 shadow-subtle"
                  >
                    <item.icon className="h-8 w-8 mr-4 mt-1 text-primary flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </li>
                ))}
              </ul>
              <div className="pt-10">
                <blockquote className="relative p-8 bg-white border-l-4 border-primary shadow-medium rounded-r-lg">
                  <BlockQuoteIcon className="absolute top-4 left-4 h-10 w-10 text-primary/20 transform -translate-x-1 -translate-y-1" />
                  <p className="text-2xl italic text-neutral-700 leading-snug font-medium">
                    "The only thing this bill guarantees is that wealth, not merit, determines who gets to be a doctor."
                  </p>
                  <footer className="mt-6 text-md text-neutral-500">— Anonymous MD Student, Future Physician</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-0 bg-neutral-200" />

        {/* Section 3: Add Your Voice (Petition Form) */}
        <section id="sign-petition" className="section-padding bg-gradient-to-b from-white to-neutral-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                Your Signature is Power. <span className="text-primary">Stop This Bill.</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                We're uniting students, educators, healthcare professionals, and concerned citizens like you. Every
                signature sends a clear message to Washington: We demand accessible medical education for all.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Your voice, combined with thousands of others, will pressure lawmakers to reject this devastating bill.
                Together, we can protect the future of medicine and ensure that talent, not wealth, determines who
                becomes a doctor.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 mb-12">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                    Sign the Official Petition on Change.org
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Join thousands of supporters who have already signed the petition to stop this dangerous bill. Your
                    signature will be delivered directly to Congress.
                  </p>
                  <Button
                    size="xl"
                    asChild
                    className="bg-primary hover:bg-brand-blue-dark text-primary-foreground text-xl px-12 py-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-150 transform hover:scale-105"
                  >
                    <Link
                      href="https://www.change.org/p/stop-the-bill-for-med-schooool"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PenSquare className="mr-3 h-6 w-6" />
                      Sign the Petition on Change.org
                    </Link>
                  </Button>
                  <p className="text-sm text-neutral-500 mt-4">
                    You'll be redirected to Change.org to complete your signature
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  "Help us demonstrate the national impact of this bill.",
                  "Protect the future generation of doctors.",
                  "Defend equal access to education and opportunity.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-4 bg-white rounded-lg border border-neutral-200 shadow-subtle"
                  >
                    <CheckCircle className="h-6 w-6 mr-3 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-0 bg-neutral-200" />

        {/* Section: Student Voices Marquee */}
        <section id="student-voices-marquee" className="section-padding bg-neutral-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Users className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Hear Their Stories</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                The voices of those directly affected highlight the urgency of this issue.
              </p>
            </div>
            <div className="text-center mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-brand-blue-dark text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-150"
                >
                  <Link href="/submit-story">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Share Your Story
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150"
                >
                  <Link href="/student-stories">
                    <Eye className="mr-2 h-5 w-5" />
                    Read Full Stories
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-neutral-500">Help amplify student voices in this campaign</p>
            </div>
            {studentStories && studentStories.length > 0 ? (
              <StudentVoicesMarquee stories={studentStories} />
            ) : (
              <div className="text-center text-neutral-500 py-8">Stories are currently being loaded...</div>
            )}
          </div>
        </section>

        <Separator className="my-0 bg-neutral-200" />

        {/* Section 4: Learn More & Take Action */}
        <section id="take-action" className="section-padding bg-neutral-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900">
              Learn More & Take Concrete Action
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ActionCard
                href="https://rules.house.gov/sites/evo-subsites/rules.house.gov/files/documents/2025_budget_rec_rh_xml.pdf"
                icon={BookOpen}
                title="Read the Full Bill Text"
              >
                Understand the proposed legislation in detail and its direct implications.
              </ActionCard>
              <ActionCard
                href="https://www.aamc.org/advocacy-policy/washington-highlights/house-passes-reconciliation-legislation-aamc-health-education-priorities"
                icon={Newspaper}
                title="AAMC's Official Statement"
              >
                See the formal position of the Association of American Medical Colleges.
              </ActionCard>
              <ActionCard
                href="https://www.senate.gov/senators/senators-contact.htm"
                icon={Phone}
                title="Contact Your Senator"
              >
                Call or email your senators directly to voice your opposition to this bill.
              </ActionCard>
              <ActionCard
                href="https://www.house.gov/representatives/find-your-representative"
                icon={MessageCircle}
                title="Contact Your Representative"
              >
                Make your voice heard directly by those who can vote on this bill.
              </ActionCard>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Keep Med School Accessible</h4>
              <p className="text-sm leading-relaxed text-neutral-400">
                A grassroots movement dedicated to ensuring that the path to becoming a physician remains open to all
                qualified individuals, regardless of socioeconomic background.
                <br />
                <br />
                Buffalo Roots. National Impact.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Contact & Connect</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary/80" />
                  <a href="mailto:keepmedschoolopen@gmail.com" className="hover:text-white transition-colors">
                    keepmedschoolopen@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary/80" />
                  Buffalo, NY (Campaign Origin)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow the Movement</h4>
              <div className="flex space-x-5">
                {[
                  { href: "https://twitter.com/keepmedschoolopen", icon: Twitter, label: "Twitter" },
                  { href: "https://www.instagram.com/keepmedschoolopen/", icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/company/keepmedschoolopen/", icon: Linkedin, label: "LinkedIn" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <item.icon className="h-7 w-7" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Separator className="bg-neutral-700" />
          <div className="text-center text-sm text-neutral-500 pt-10">
            © {new Date().getFullYear()} KeepMedSchoolAccessible.org. All Rights Reserved.
            <br />
            <span className="text-xs mt-1 block">Demo by mvnshi.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
