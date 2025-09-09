import CaseStudyLayout from "@/components/case-study-layout"
import StoryFlow from "@/components/story-flow"
import ScrollSection from "@/components/scroll-section"
import StorySection from "@/components/story-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import TimelineSection from "@/components/timeline-section"

export default function OccasionCaseStudy() {
  return (
    <CaseStudyLayout
      title="Occasion"
      subtitle="Event Planning & Management Platform"
      description="Designing a comprehensive platform for seamless event planning, vendor coordination, and guest management."
      heroImage="/occasion-hero.jpg"
      tags={["Event Planning", "UI/UX Design", "Web Platform"]}
      timeline="4 months"
      role="Lead UI/UX Designer"
      team="Product Manager, 2 Developers, QA Engineer"
    >
      <StoryFlow>
        <ScrollSection>
          <StorySection
            number="01"
            title="The Problem"
            subtitle="Event planning chaos"
            description="Event planners struggled with fragmented tools, poor vendor communication, and manual guest management processes."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Key Pain Points</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Multiple disconnected tools for different aspects of planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Poor communication channels with vendors and clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Manual RSVP tracking and guest management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Lack of real-time budget tracking and expense management</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/event-planning-chaos.png"
                  alt="Event planners struggling with multiple tools"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm text-white/60 mt-4">Event planners juggling multiple tools and spreadsheets</p>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="02"
            title="Research & Discovery"
            subtitle="Understanding the event planning ecosystem"
            description="I conducted extensive research with event planners, vendors, and clients to understand the complete workflow."
          >
            <TimelineSection
              title="Research Process"
              items={[
                {
                  phase: "User Interviews",
                  duration: "2 weeks",
                  description: "Interviewed 12 event planners and 8 vendors",
                  deliverables: ["User personas", "Journey maps", "Pain point analysis"],
                },
                {
                  phase: "Competitive Analysis",
                  duration: "1 week",
                  description: "Analyzed 6 existing event planning platforms",
                  deliverables: ["Feature comparison", "UX audit", "Market gaps"],
                },
                {
                  phase: "Stakeholder Workshops",
                  duration: "1 week",
                  description: "Collaborative sessions with business stakeholders",
                  deliverables: ["Requirements document", "Success metrics", "MVP scope"],
                },
              ]}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/event-planner-interviews.png"
                  alt="Event planner interviews"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Event Planners</h4>
                <p className="text-sm text-white/70">12 interviews revealed workflow inefficiencies</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/vendor-research.png"
                  alt="Vendor research sessions"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Vendors</h4>
                <p className="text-sm text-white/70">8 vendors shared communication challenges</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/client-feedback.png"
                  alt="Client feedback sessions"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-white mb-2">Clients</h4>
                <p className="text-sm text-white/70">15 clients wanted better transparency</p>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="03"
            title="Design Process"
            subtitle="From wireframes to high-fidelity designs"
            description="I created a comprehensive design system that unified all aspects of event planning into one cohesive platform."
          >
            <IterationShowcase
              title="Design Evolution"
              iterations={[
                {
                  version: "v1.0",
                  title: "Initial Wireframes",
                  description: "Basic layout focusing on core functionality",
                  image: "/occasion-wireframes-v1.png",
                  changes: ["Simple dashboard layout", "Basic vendor directory", "Manual task tracking"],
                },
                {
                  version: "v2.0",
                  title: "Enhanced UX",
                  description: "Improved user flows and added collaboration features",
                  image: "/occasion-design-v2.png",
                  changes: ["Integrated communication hub", "Real-time collaboration", "Advanced filtering"],
                },
                {
                  version: "v3.0",
                  title: "Final Design",
                  description: "Polished interface with comprehensive event management",
                  image: "/occasion-final.png",
                  changes: ["Smart vendor matching", "Automated workflows", "Mobile-first design"],
                },
              ]}
            />

            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Key Design Decisions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white mb-2">Unified Dashboard</h5>
                    <p className="text-white/70 text-sm">Single view of all events, tasks, and communications</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white mb-2">Smart Vendor Matching</h5>
                    <p className="text-white/70 text-sm">AI-powered recommendations based on event requirements</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white mb-2">Real-time Collaboration</h5>
                    <p className="text-white/70 text-sm">Live updates and communication between all stakeholders</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white mb-2">Mobile-first Approach</h5>
                    <p className="text-white/70 text-sm">Optimized for on-the-go event management</p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        <ScrollSection>
          <StorySection
            number="04"
            title="Final Solution"
            subtitle="A comprehensive event planning ecosystem"
            description="The final platform streamlined the entire event planning process from initial concept to post-event analysis."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Core Features</h4>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Unified event dashboard with timeline view</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Smart vendor marketplace with ratings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Automated guest management and RSVP tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Real-time budget tracking and expense management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated communication hub for all stakeholders</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <img
                  src="/occasion-final-dashboard.png"
                  alt="Final Occasion platform dashboard"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-white/60 mt-4">The final dashboard providing comprehensive event overview</p>
              </div>
            </div>

            <MetricsGrid
              title="Impact & Results"
              metrics={[
                { label: "Planning Time Reduced", value: "65%", description: "Average time to plan events" },
                { label: "Vendor Response Rate", value: "89%", description: "Improved communication efficiency" },
                { label: "Client Satisfaction", value: "4.8/5", description: "Average rating from event clients" },
                { label: "Platform Adoption", value: "200+", description: "Event planners using the platform" },
              ]}
            />
          </StorySection>
        </ScrollSection>
      </StoryFlow>
    </CaseStudyLayout>
  )
}
