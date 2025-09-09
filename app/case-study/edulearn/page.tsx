import CaseStudyLayout from "@/components/case-study-layout"
import StoryFlow from "@/components/story-flow"
import ScrollSection from "@/components/scroll-section"
import StorySection from "@/components/story-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import TimelineSection from "@/components/timeline-section"
import ParallaxSection from "@/components/parallax-section"

export default function EduLearnCaseStudy() {
  return (
    <CaseStudyLayout
      title="EduLearn"
      subtitle="Transforming Educational Management"
      description="Designing comprehensive platforms for schools, colleges, and coaching classes with seamless user experience."
      heroImage="/educational-platform-interface.png"
      tags={["Educational Platform", "User Experience", "Web Design"]}
      timeline="8 weeks"
      role="UI/UX Designer"
      team="Solo Project"
    >
      <StoryFlow>
        {/* Problem Section */}
        <ScrollSection>
          <StorySection
            number="01"
            title="The Problem"
            subtitle="Educational institutions struggled with fragmented systems"
          >
            <ParallaxSection backgroundImage="/frustrated-educators.jpg" className="mb-8">
              <div className="bg-black/60 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-lg text-white/80">
                  Educational institutions were using multiple disconnected systems for attendance, assignments, notes,
                  events, and student leave management, creating confusion and inefficiency.
                </p>
              </div>
            </ParallaxSection>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Pain Points</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Teachers spending 40% of time on administrative tasks</li>
                  <li>• Students missing important announcements and deadlines</li>
                  <li>• Parents having no visibility into their child's progress</li>
                  <li>• Institutions losing data due to paper-based systems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Business Impact</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• 60% increase in administrative overhead</li>
                  <li>• Poor communication leading to student dropouts</li>
                  <li>• Difficulty in tracking academic performance</li>
                  <li>• Compliance issues with educational regulations</li>
                </ul>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        {/* Research Section */}
        <ScrollSection>
          <StorySection number="02" title="Research & Discovery" subtitle="Understanding the educational ecosystem">
            <div className="mb-8">
              <img
                src="/education-research-interviews.jpg"
                alt="Research interviews with educators"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">12 Interviews</h4>
                <p className="text-white/70">Teachers, administrators, and students across 5 institutions</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">3 User Personas</h4>
                <p className="text-white/70">Teachers, students, and administrative staff</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Competitive Analysis</h4>
                <p className="text-white/70">Analyzed 8 existing educational platforms</p>
              </div>
            </div>

            <TimelineSection
              title="Research Timeline"
              items={[
                {
                  phase: "Week 1",
                  title: "Stakeholder Interviews",
                  description: "Conducted interviews with educators and administrators",
                },
                { phase: "Week 2", title: "Student Surveys", description: "Gathered feedback from 150+ students" },
                {
                  phase: "Week 3",
                  title: "Competitive Analysis",
                  description: "Analyzed existing educational platforms",
                },
                {
                  phase: "Week 4",
                  title: "User Journey Mapping",
                  description: "Mapped current workflows and pain points",
                },
              ]}
            />
          </StorySection>
        </ScrollSection>

        {/* Design Process */}
        <ScrollSection>
          <StorySection number="03" title="Design Process" subtitle="From wireframes to high-fidelity prototypes">
            <div className="mb-8">
              <img
                src="/education-wireframes.jpg"
                alt="EduLearn wireframes and user flows"
                className="w-full rounded-lg"
              />
            </div>

            <IterationShowcase
              title="Design Evolution"
              iterations={[
                {
                  version: "v1.0",
                  title: "Initial Wireframes",
                  description: "Basic layout with traditional navigation",
                  image: "/education-wireframes-v1.jpg",
                  feedback: "Too complex navigation, overwhelming for new users",
                },
                {
                  version: "v2.0",
                  title: "Simplified Interface",
                  description: "Streamlined navigation with role-based dashboards",
                  image: "/education-interface-v2.jpg",
                  feedback: "Better, but still needed clearer information hierarchy",
                },
                {
                  version: "v3.0",
                  title: "Final Design",
                  description: "Clean, intuitive interface with smart notifications",
                  image: "/educational-platform-interface.png",
                  feedback: "Perfect! Easy to use and visually appealing",
                },
              ]}
            />

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">Key Design Decisions</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h5 className="font-semibold mb-2">Role-Based Dashboards</h5>
                  <p className="text-white/70">
                    Different interfaces for teachers, students, and administrators to reduce cognitive load
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h5 className="font-semibold mb-2">Smart Notifications</h5>
                  <p className="text-white/70">Contextual alerts that don't overwhelm users but keep them informed</p>
                </div>
              </div>
            </div>
          </StorySection>
        </ScrollSection>

        {/* Final Solution */}
        <ScrollSection>
          <StorySection number="04" title="Final Solution" subtitle="A comprehensive educational management platform">
            <div className="mb-8">
              <img
                src="/educational-platform-interface.png"
                alt="Final EduLearn interface design"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Unified attendance management system</li>
                  <li>• Digital assignment submission and grading</li>
                  <li>• Centralized notes and resource sharing</li>
                  <li>• Event calendar and announcements</li>
                  <li>• Student leave management workflow</li>
                  <li>• Parent-teacher communication portal</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Technical Highlights</h4>
                <ul className="space-y-3 text-white/70">
                  <li>• Responsive design for all devices</li>
                  <li>• Real-time notifications and updates</li>
                  <li>• Offline capability for attendance</li>
                  <li>• Integration with existing school systems</li>
                  <li>• Advanced analytics and reporting</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>

            <MetricsGrid
              title="Impact & Results"
              metrics={[
                {
                  label: "Administrative Time Saved",
                  value: "65%",
                  description: "Reduction in manual administrative tasks",
                },
                { label: "User Adoption Rate", value: "92%", description: "Within first 3 months of deployment" },
                { label: "Student Engagement", value: "+45%", description: "Increase in assignment submission rates" },
                {
                  label: "Parent Satisfaction",
                  value: "4.8/5",
                  description: "Average rating for communication features",
                },
              ]}
            />
          </StorySection>
        </ScrollSection>
      </StoryFlow>
    </CaseStudyLayout>
  )
}
