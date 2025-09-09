import { CaseStudyLayout } from "@/components/case-study-layout"
import { StoryFlow } from "@/components/story-flow"
import { ScrollSection } from "@/components/scroll-section"
import { StorySection } from "@/components/story-section"
import { IterationShowcase } from "@/components/iteration-showcase"
import { MetricsGrid } from "@/components/metrics-grid"
import { TimelineSection } from "@/components/timeline-section"
import { ParallaxSection } from "@/components/parallax-section"

export default function XtremeCaseStudy() {
  return (
    <CaseStudyLayout
      title="Xtreme"
      subtitle="Advanced Gaming Café Management"
      description="Designing advanced gaming café management software with integrated seat booking, game inventory, and active session monitoring."
      heroImage="/gaming-cafe-management-interface.png"
      tags={["Gaming Software", "Session Monitoring", "UI/UX"]}
      timeline="12 weeks"
      role="UI/UX Designer"
      team="Solo Project"
    >
      <StoryFlow>
        {/* Problem Section */}
        <ScrollSection>
          <StorySection number="01" title="The Problem" subtitle="Gaming cafés needed advanced management solutions">
            <ParallaxSection backgroundImage="/gaming-cafe-chaos.jpg" className="mb-8">
              <div className="bg-black/60 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-lg text-white/80">
                  Gaming cafés were struggling with outdated management systems that couldn't handle modern gaming
                  requirements, inventory tracking, and advanced session monitoring.
                </p>
              </div>
            </ParallaxSection>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Operational Issues</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Manual game inventory management</li>
                  <li>• No real-time session monitoring</li>
                  <li>• Complex seat booking conflicts</li>
                  <li>• Poor customer experience tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Business Impact</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• 25% revenue loss from overbooking</li>
                  <li>• Customer complaints about wait times</li>
                  <li>• Inefficient resource utilization</li>
                  <li>• Difficulty scaling operations</li>
                </ul>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        {/* Research Section */}
        <ScrollSection>
          <StorySection number="02" title="Research & Discovery" subtitle="Understanding the gaming café ecosystem">
            <div className="mb-8">
              <img
                src="/gaming-cafe-research.png"
                alt="Gaming café research and user interviews"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">8 Gaming Cafés</h4>
                <p className="text-white/70">Visited and analyzed operations across different locations</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">50+ Gamers</h4>
                <p className="text-white/70">Interviewed regular customers about their experience</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Competitive Analysis</h4>
                <p className="text-white/70">Studied 5 existing gaming café management systems</p>
              </div>
            </div>

            <TimelineSection
              title="Research Journey"
              items={[
                {
                  phase: "Week 1-2",
                  title: "Field Research",
                  description: "Observed gaming café operations and workflows",
                },
                {
                  phase: "Week 3",
                  title: "User Interviews",
                  description: "Spoke with café owners, staff, and customers",
                },
                { phase: "Week 4", title: "System Analysis", description: "Analyzed existing management solutions" },
                {
                  phase: "Week 5",
                  title: "Requirements Gathering",
                  description: "Defined feature requirements and priorities",
                },
              ]}
            />
          </StorySection>
        </ScrollSection>

        {/* Design Process */}
        <ScrollSection>
          <StorySection
            number="03"
            title="Design Process"
            subtitle="Creating the ultimate gaming management experience"
          >
            <div className="mb-8">
              <img
                src="/xtreme-wireframes.jpg"
                alt="Xtreme gaming software wireframes and prototypes"
                className="w-full rounded-lg"
              />
            </div>

            <IterationShowcase
              title="Design Evolution"
              iterations={[
                {
                  version: "v1.0",
                  title: "Basic Management",
                  description: "Simple booking system with basic monitoring",
                  image: "/xtreme-interface-v1.jpg",
                  feedback: "Lacked advanced features needed for modern gaming cafés",
                },
                {
                  version: "v2.0",
                  title: "Enhanced Features",
                  description: "Added inventory management and session tracking",
                  image: "/xtreme-interface-v2.jpg",
                  feedback: "Better functionality but interface was too complex",
                },
                {
                  version: "v3.0",
                  title: "Advanced Solution",
                  description: "Comprehensive system with intuitive interface",
                  image: "/gaming-cafe-management-interface.png",
                  feedback: "Perfect balance of features and usability!",
                },
              ]}
            />

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">Key Design Innovations</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h5 className="font-semibold mb-2">Real-time Dashboard</h5>
                  <p className="text-white/70">Live monitoring of all gaming stations with performance metrics</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h5 className="font-semibold mb-2">Smart Booking System</h5>
                  <p className="text-white/70">
                    AI-powered seat allocation to maximize utilization and customer satisfaction
                  </p>
                </div>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        {/* Final Solution */}
        <ScrollSection>
          <StorySection number="04" title="Final Solution" subtitle="Next-generation gaming café management">
            <div className="mb-8">
              <img
                src="/gaming-cafe-management-interface.png"
                alt="Final Xtreme gaming management interface"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold mb-4">Advanced Features</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Real-time session monitoring and analytics</li>
                  <li>• Intelligent seat booking and queue management</li>
                  <li>• Comprehensive game inventory tracking</li>
                  <li>• Customer loyalty and rewards system</li>
                  <li>• Staff performance monitoring</li>
                  <li>• Revenue optimization tools</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Technical Excellence</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Real-time data synchronization</li>
                  <li>• Cloud-based infrastructure</li>
                  <li>• Mobile app for customers</li>
                  <li>• Integration with gaming platforms</li>
                  <li>• Advanced reporting and analytics</li>
                  <li>• Scalable architecture for growth</li>
                </ul>
              </div>
            </div>

            <MetricsGrid
              title="Performance Results"
              metrics={[
                { label: "Revenue Increase", value: "+45%", description: "Through optimized seat utilization" },
                {
                  label: "Customer Satisfaction",
                  value: "4.9/5",
                  description: "Average rating for booking experience",
                },
                { label: "Operational Efficiency", value: "+70%", description: "Improvement in staff productivity" },
                { label: "Wait Time Reduction", value: "-55%", description: "Through intelligent queue management" },
              ]}
            />
          </StorySection>
        </ScrollSection>
      </StoryFlow>
    </CaseStudyLayout>
  )
}
