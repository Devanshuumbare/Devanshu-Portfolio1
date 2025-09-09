import CaseStudyLayout from "@/components/case-study-layout"
import StoryFlow from "@/components/story-flow"
import ScrollSection from "@/components/scroll-section"
import StorySection from "@/components/story-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import TimelineSection from "@/components/timeline-section"

export default function TravelWebsiteCaseStudy() {
  return (
    <CaseStudyLayout
      title="Wanderlust Travel"
      subtitle="Personalized Travel Planning Platform"
      description="Designing an intelligent travel platform that creates personalized itineraries and connects travelers with unique local experiences."
      heroImage="/travel-website-hero.jpg"
      tags={["Travel Platform", "UI/UX Design", "Personalization"]}
      timeline="4 months"
      role="Senior UX Designer"
      team="Product Manager, 3 Developers, Travel Expert"
    >
      <StoryFlow>
        <ScrollSection>
          <StorySection
            number="01"
            title="The Journey Begins"
            subtitle="Solving travel planning complexity"
            description="Modern travelers were overwhelmed by endless options and generic recommendations. They needed personalized, authentic travel experiences."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Travel Planning Pain Points</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Information overload from multiple travel websites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Generic recommendations lacking personal preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Difficulty finding authentic local experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Complex booking processes across multiple platforms</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/travel-planning-frustration.png"
                  alt="Travelers struggling with complex planning"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm text-white/60 mt-4">
                  Travelers overwhelmed by fragmented planning tools and generic options
                </p>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="02"
            title="Discovery & Research"
            subtitle="Understanding travel behaviors"
            description="Conducted comprehensive research with travelers, local guides, and travel industry experts to understand the complete journey."
          >
            <TimelineSection
              title="Research Expedition"
              items={[
                {
                  phase: "Traveler Interviews",
                  duration: "3 weeks",
                  description: "Interviewed 35 travelers across different demographics",
                  deliverables: ["Traveler personas", "Journey mapping", "Pain point analysis"],
                },
                {
                  phase: "Local Expert Consultation",
                  duration: "2 weeks",
                  description: "Consulted with 15 local guides and experience providers",
                  deliverables: ["Local insights", "Authentic experience catalog", "Cultural considerations"],
                },
                {
                  phase: "Platform Analysis",
                  duration: "2 weeks",
                  description: "Analyzed existing travel platforms and booking systems",
                  deliverables: ["Competitive landscape", "Feature gaps", "UX opportunities"],
                },
              ]}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/traveler-research.png"
                  alt="Travel behavior research sessions"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Travelers</h4>
                <p className="text-sm text-white/70">35 interviews revealed planning preferences</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/local-guide-insights.png"
                  alt="Local guide consultation sessions"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Local Experts</h4>
                <p className="text-sm text-white/70">15 guides shared authentic experience insights</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/travel-platform-analysis.png"
                  alt="Travel platform competitive analysis"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Platform Study</h4>
                <p className="text-sm text-white/70">Comprehensive travel industry analysis</p>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="03"
            title="Design Exploration"
            subtitle="Crafting personalized travel experiences"
            description="Designed an intelligent platform that learns from user preferences to create truly personalized travel recommendations and itineraries."
          >
            <IterationShowcase
              title="Platform Evolution"
              iterations={[
                {
                  version: "v1.0",
                  title: "Basic Travel Planner",
                  description: "Simple destination search and basic itinerary builder",
                  image: "/travel-wireframes-v1.png",
                  changes: ["Destination search", "Basic itinerary", "Hotel listings"],
                },
                {
                  version: "v2.0",
                  title: "Personalized Recommendations",
                  description: "Added AI-powered personalization and local experiences",
                  image: "/travel-design-v2.png",
                  changes: ["Preference learning", "Local experiences", "Smart recommendations"],
                },
                {
                  version: "v3.0",
                  title: "Complete Travel Ecosystem",
                  description: "Full platform with community features and seamless booking",
                  image: "/travel-final.png",
                  changes: ["Community reviews", "Integrated booking", "Travel companion matching"],
                },
              ]}
            />

            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Design Innovation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-500/30">
                    <h5 className="font-bold text-white mb-2">AI Personalization</h5>
                    <p className="text-white/70 text-sm">
                      Machine learning algorithms that adapt to travel preferences
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                    <h5 className="font-bold text-white mb-2">Local Experiences</h5>
                    <p className="text-white/70 text-sm">Curated authentic experiences from local experts</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                    <h5 className="font-bold text-white mb-2">Smart Itineraries</h5>
                    <p className="text-white/70 text-sm">
                      Dynamic itinerary optimization based on preferences and logistics
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30">
                    <h5 className="font-bold text-white mb-2">Community Insights</h5>
                    <p className="text-white/70 text-sm">
                      Traveler reviews and recommendations from similar preferences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="04"
            title="Travel Transformation"
            subtitle="Revolutionizing how people explore the world"
            description="The platform transformed travel planning from a stressful chore into an exciting journey of discovery and personalization."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Platform Features</h4>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span>AI-powered personalized travel recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Curated local experiences from verified guides</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Dynamic itinerary builder with smart optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated booking system for seamless reservations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Travel community with companion matching</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/travel-final-dashboard.png"
                  alt="Wanderlust travel platform dashboard"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-white/60 mt-4">
                  The personalized travel planning dashboard with AI recommendations
                </p>
              </div>
            </div>

            <MetricsGrid
              title="Travel Impact"
              metrics={[
                { label: "Planning Time Saved", value: "70%", description: "Reduction in travel planning time" },
                { label: "User Satisfaction", value: "4.9/5", description: "Average platform rating" },
                { label: "Local Experiences", value: "10,000+", description: "Authentic experiences available" },
                { label: "Happy Travelers", value: "25,000+", description: "Successful trips planned" },
              ]}
            />
          </StorySection>
        </ScrollSection>
      </StoryFlow>
    </CaseStudyLayout>
  )
}
