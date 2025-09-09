import { CaseStudyLayout } from "@/components/case-study-layout"
import { StoryFlow } from "@/components/story-flow"
import { ScrollSection } from "@/components/scroll-section"
import { StorySection } from "@/components/story-section"
import { IterationShowcase } from "@/components/iteration-showcase"
import { MetricsGrid } from "@/components/metrics-grid"
import { TimelineSection } from "@/components/timeline-section"

export default function CrossplayGamingCaseStudy() {
  return (
    <CaseStudyLayout
      title="Crossplay Gaming Cafe"
      subtitle="Next-Gen Gaming Cafe Management"
      description="Designing an advanced gaming cafe platform with cross-platform gaming support, tournament management, and social features."
      heroImage="/crossplay-gaming-hero.jpg"
      tags={["Gaming Platform", "UI/UX Design", "Social Features"]}
      timeline="5 months"
      role="Senior UI/UX Designer"
      team="Product Manager, 3 Developers, Game Designer"
    >
      <StoryFlow>
        <ScrollSection>
          <StorySection
            number="01"
            title="The Challenge"
            subtitle="Evolving gaming cafe experience"
            description="Modern gamers wanted cross-platform play, social features, and tournament capabilities that traditional gaming cafes couldn't provide."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Gaming Industry Shifts</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Rise of cross-platform gaming and mobile integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Demand for competitive tournaments and esports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Social gaming and community building features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Integration with streaming platforms and content creation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/modern-gaming-trends.png"
                  alt="Modern gaming trends and user expectations"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm text-white/60 mt-4">
                  Gaming community demanding more social and competitive features
                </p>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="02"
            title="Research & Strategy"
            subtitle="Understanding the gaming community"
            description="Deep dive into gaming behaviors, cafe operations, and emerging trends in competitive gaming."
          >
            <TimelineSection
              title="Research Methodology"
              items={[
                {
                  phase: "Gamer Interviews",
                  duration: "3 weeks",
                  description: "Interviewed 25 regular cafe visitors and competitive gamers",
                  deliverables: ["Gamer personas", "Gaming journey maps", "Feature prioritization"],
                },
                {
                  phase: "Cafe Operations Study",
                  duration: "2 weeks",
                  description: "Analyzed 8 gaming cafes and their management systems",
                  deliverables: ["Operational workflows", "Pain point analysis", "Revenue optimization"],
                },
                {
                  phase: "Competitive Gaming Analysis",
                  duration: "2 weeks",
                  description: "Studied esports platforms and tournament management",
                  deliverables: ["Feature benchmarking", "Tournament UX patterns", "Social features audit"],
                },
              ]}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/gamer-research.png"
                  alt="Gaming community research"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Gamer Insights</h4>
                <p className="text-sm text-white/70">25 interviews revealed social gaming preferences</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/cafe-operations.png"
                  alt="Gaming cafe operations analysis"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Cafe Operations</h4>
                <p className="text-sm text-white/70">8 cafes studied for operational efficiency</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/esports-analysis.png"
                  alt="Esports platform analysis"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Esports Platforms</h4>
                <p className="text-sm text-white/70">Competitive gaming feature analysis</p>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="03"
            title="Design Innovation"
            subtitle="Creating the ultimate gaming experience"
            description="Designed a comprehensive platform that bridges traditional gaming cafes with modern esports and social gaming."
          >
            <IterationShowcase
              title="Platform Evolution"
              iterations={[
                {
                  version: "v1.0",
                  title: "Basic Gaming Hub",
                  description: "Traditional cafe management with basic gaming features",
                  image: "/crossplay-wireframes-v1.png",
                  changes: ["Simple seat booking", "Basic game library", "Time tracking"],
                },
                {
                  version: "v2.0",
                  title: "Social Gaming Platform",
                  description: "Added social features and cross-platform support",
                  image: "/crossplay-design-v2.png",
                  changes: ["Friend systems", "Cross-platform play", "Achievement tracking"],
                },
                {
                  version: "v3.0",
                  title: "Esports Ecosystem",
                  description: "Full tournament management and streaming integration",
                  image: "/crossplay-final.png",
                  changes: ["Tournament brackets", "Live streaming", "Spectator mode"],
                },
              ]}
            />

            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Innovation Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                    <h5 className="font-bold text-white mb-2">Cross-Platform Gaming</h5>
                    <p className="text-white/70 text-sm">Seamless gaming across PC, console, and mobile devices</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                    <h5 className="font-bold text-white mb-2">Tournament Engine</h5>
                    <p className="text-white/70 text-sm">Automated bracket generation and match management</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                    <h5 className="font-bold text-white mb-2">Social Gaming Hub</h5>
                    <p className="text-white/70 text-sm">Team formation, friend challenges, and community events</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30">
                    <h5 className="font-bold text-white mb-2">Streaming Integration</h5>
                    <p className="text-white/70 text-sm">Built-in streaming tools and spectator features</p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="04"
            title="The Gaming Revolution"
            subtitle="Transforming the gaming cafe experience"
            description="The platform revolutionized how gaming cafes operate and how gamers connect, compete, and create content."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Platform Features</h4>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Cross-platform gaming with unified profiles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Automated tournament management system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Social features with team formation tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated streaming and content creation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Advanced analytics and performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/crossplay-final-dashboard.png"
                  alt="Crossplay gaming platform dashboard"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-white/60 mt-4">
                  The comprehensive gaming dashboard with tournament and social features
                </p>
              </div>
            </div>

            <MetricsGrid
              title="Gaming Impact"
              metrics={[
                { label: "User Engagement", value: "+180%", description: "Average session duration increase" },
                { label: "Tournament Participation", value: "75%", description: "Of users joined tournaments" },
                { label: "Revenue Growth", value: "+120%", description: "Cafe revenue improvement" },
                { label: "Community Size", value: "5,000+", description: "Active gaming community members" },
              ]}
            />
          </StorySection>
        </ScrollSection>
      </StoryFlow>
    </CaseStudyLayout>
  )
}
