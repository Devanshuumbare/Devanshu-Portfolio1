import CaseStudyLayout from "@/components/case-study-layout"
import StoryFlow from "@/components/story-flow"
import ScrollSection from "@/components/scroll-section"
import StorySection from "@/components/story-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import TimelineSection from "@/components/timeline-section"
import ParallaxSection from "@/components/parallax-section"

export default function GreenOceanLogisticsCaseStudy() {
  return (
    <CaseStudyLayout
      title="Green Ocean Logistics"
      subtitle="Streamlining Global Supply Chain"
      description="Designing modules to connect with CFS providers and track orders with clean workflow for tracking, pricing, and order management."
      heroImage="/logistics-tracking-dashboard.png"
      tags={["Logistics", "Order Tracking", "Web App"]}
      timeline="10 weeks"
      role="UI/UX Designer"
      team="Solo Project"
    >
      <StoryFlow>
        {/* Problem Section */}
        <ScrollSection>
          <StorySection number="01" title="The Problem" subtitle="Complex logistics operations needed simplification">
            <ParallaxSection backgroundImage="/logistics-chaos.jpg" className="mb-8">
              <div className="bg-black/60 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-lg text-white/80">
                  Logistics companies were struggling with fragmented systems for tracking shipments, managing CFS
                  provider relationships, and providing real-time visibility to customers.
                </p>
              </div>
            </ParallaxSection>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Operational Challenges</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Manual tracking across multiple CFS providers</li>
                  <li>• Inconsistent pricing and quotation processes</li>
                  <li>• Poor visibility into shipment status</li>
                  <li>• Complex documentation workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Business Impact</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• 35% of shipments experienced delays</li>
                  <li>• Customer complaints increased by 40%</li>
                  <li>• Manual processes cost 25% more</li>
                  <li>• Lost business due to poor tracking</li>
                </ul>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        {/* Research Section */}
        <ScrollSection>
          <StorySection number="02" title="Research & Discovery" subtitle="Understanding the logistics ecosystem">
            <div className="mb-8">
              <img
                src="/logistics-research.jpg"
                alt="Logistics industry research and interviews"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">15 Stakeholders</h4>
                <p className="text-white/70">Logistics managers, CFS providers, and customers</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Process Mapping</h4>
                <p className="text-white/70">Documented 12 different workflow scenarios</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">System Analysis</h4>
                <p className="text-white/70">Analyzed 6 existing logistics platforms</p>
              </div>
            </div>

            <TimelineSection
              title="Research Process"
              items={[
                {
                  phase: "Week 1-2",
                  title: "Industry Research",
                  description: "Studied logistics workflows and pain points",
                },
                {
                  phase: "Week 3",
                  title: "Stakeholder Interviews",
                  description: "Interviewed logistics professionals and customers",
                },
                { phase: "Week 4", title: "Process Documentation", description: "Mapped current state workflows" },
                {
                  phase: "Week 5",
                  title: "Competitive Analysis",
                  description: "Analyzed existing logistics solutions",
                },
              ]}
            />
          </StorySection>
        </ScrollSection>

        {/* Design Process */}
        <ScrollSection>
          <StorySection number="03" title="Design Process" subtitle="Creating intuitive logistics workflows">
            <div className="mb-8">
              <img
                src="/logistics-wireframes.jpg"
                alt="Logistics platform wireframes and user flows"
                className="w-full rounded-lg"
              />
            </div>

            <IterationShowcase
              title="Design Evolution"
              iterations={[
                {
                  version: "v1.0",
                  title: "Complex Dashboard",
                  description: "Feature-heavy interface with all data visible",
                  image: "/logistics-dashboard-v1.jpg",
                  feedback: "Too overwhelming, users couldn't find key information quickly",
                },
                {
                  version: "v2.0",
                  title: "Simplified Views",
                  description: "Focused dashboards with progressive disclosure",
                  image: "/logistics-dashboard-v2.jpg",
                  feedback: "Better organization, but tracking flow still confusing",
                },
                {
                  version: "v3.0",
                  title: "Clean Workflow",
                  description: "Streamlined tracking with clear visual hierarchy",
                  image: "/logistics-tracking-dashboard.png",
                  feedback: "Perfect! Easy to track shipments and manage orders",
                },
              ]}
            />

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">Design Principles</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h5 className="font-semibold mb-2">Progressive Disclosure</h5>
                  <p className="text-white/70">Show essential information first, with detailed views on demand</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h5 className="font-semibold mb-2">Visual Status Indicators</h5>
                  <p className="text-white/70">Clear color coding and icons for shipment status at a glance</p>
                </div>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        {/* Final Solution */}
        <ScrollSection>
          <StorySection number="04" title="Final Solution" subtitle="Comprehensive logistics management platform">
            <div className="mb-8">
              <img
                src="/logistics-tracking-dashboard.png"
                alt="Final Green Ocean Logistics interface"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold mb-4">Core Features</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Real-time shipment tracking across CFS providers</li>
                  <li>• Automated pricing and quotation system</li>
                  <li>• Integrated order management workflow</li>
                  <li>• Customer portal for shipment visibility</li>
                  <li>• Document management and compliance</li>
                  <li>• Analytics and performance reporting</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Technical Innovation</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• API integration with multiple CFS providers</li>
                  <li>• Real-time data synchronization</li>
                  <li>• Mobile-responsive tracking interface</li>
                  <li>• Automated notification system</li>
                  <li>• Advanced search and filtering</li>
                  <li>• Export capabilities for reporting</li>
                </ul>
              </div>
            </div>

            <MetricsGrid
              title="Business Results"
              metrics={[
                { label: "Tracking Efficiency", value: "+80%", description: "Improvement in shipment visibility" },
                { label: "Processing Time", value: "-60%", description: "Reduction in order processing time" },
                {
                  label: "Customer Satisfaction",
                  value: "4.7/5",
                  description: "Average rating for tracking experience",
                },
                { label: "Operational Cost", value: "-30%", description: "Reduction in manual processing costs" },
              ]}
            />
          </StorySection>
        </ScrollSection>
      </StoryFlow>
    </CaseStudyLayout>
  )
}
