import CaseStudyLayout from "@/components/case-study-layout"
import StorySection from "@/components/story-section"
import ScrollProgress from "@/components/scroll-progress"
import TimelineSection from "@/components/timeline-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import ImageComparison from "@/components/image-comparison"
import StickyNav from "@/components/sticky-nav"
import { Badge } from "@/components/ui/badge"

export default function EatofyCase() {
  const navItems = [
    { id: "problem", label: "Problem" },
    { id: "research", label: "Research" },
    { id: "design-process", label: "Design Process" },
    { id: "iterations", label: "Iterations" },
    { id: "final-solution", label: "Final Solution" },
    { id: "results", label: "Results" },
  ]

  const timelineItems = [
    {
      title: "User Research & Interviews",
      description:
        "Conducted interviews with 8 restaurant owners and 15 staff members to understand pain points in current POS systems.",
      date: "Week 1-2",
      image: "/restaurant-interview-notes.png",
    },
    {
      title: "Competitive Analysis",
      description:
        "Analyzed 5 major POS systems including Square, Toast, and Clover to identify gaps and opportunities.",
      date: "Week 2",
      image: "/competitive-analysis-dashboard.png",
    },
    {
      title: "Information Architecture",
      description:
        "Mapped out the complete system flow from order taking to payment processing and inventory management.",
      date: "Week 3",
      image: "/information-architecture-flowchart.png",
    },
    {
      title: "Wireframing & Prototyping",
      description: "Created low-fidelity wireframes and interactive prototypes to test core user flows.",
      date: "Week 4-5",
      image: "/restaurant-pos-wireframes.png",
    },
    {
      title: "Usability Testing",
      description: "Tested prototypes with 12 restaurant staff members and iterated based on feedback.",
      date: "Week 6",
      image: "/usability-testing-restaurant.png",
    },
    {
      title: "Visual Design & Handoff",
      description: "Developed the final visual design system and created detailed specifications for development.",
      date: "Week 7-8",
      image: "/restaurant-pos-final.png",
    },
  ]

  const iterations = [
    {
      title: "Initial Concept",
      description:
        "First iteration focused on cramming all features into a single screen, leading to cognitive overload.",
      image: "/cluttered-restaurant-pos-interface-v1.png",
      insights: [
        "Too many options visible at once",
        "Staff struggled to find basic functions",
        "Order flow was confusing and slow",
      ],
    },
    {
      title: "Simplified Layout",
      description: "Second iteration introduced tabbed navigation and grouped related functions together.",
      image: "/simplified-restaurant-pos-interface-v2.png",
      insights: [
        "Cleaner interface but still complex",
        "Tab switching slowed down order process",
        "Payment flow needed improvement",
      ],
    },
    {
      title: "Task-Focused Design",
      description: "Final iteration prioritized the most common tasks with a streamlined order-to-payment flow.",
      image: "/modern-restaurant-pos.png",
      insights: [
        "40% faster order processing",
        "Reduced training time from 2 days to 4 hours",
        "95% staff satisfaction rate",
      ],
    },
  ]

  const metrics = [
    {
      label: "Order Processing Speed",
      value: "40%",
      description: "Faster than previous system",
    },
    {
      label: "Training Time",
      value: "4 hours",
      description: "Reduced from 2 days",
    },
    {
      label: "Staff Satisfaction",
      value: "95%",
      description: "Positive feedback rate",
    },
    {
      label: "Error Reduction",
      value: "60%",
      description: "Fewer order mistakes",
    },
    {
      label: "Customer Wait Time",
      value: "25%",
      description: "Reduction in queue time",
    },
    {
      label: "Revenue Impact",
      value: "+18%",
      description: "Increase in daily sales",
    },
  ]

  return (
    <>
      <ScrollProgress />
      <StickyNav items={navItems} />

      <CaseStudyLayout
        title="Eatofy — Restaurant Software"
        subtitle="Designing an intuitive POS & management system that revolutionized restaurant operations"
        heroImage="/modern-restaurant-pos.png"
        tags={["UI/UX Design", "POS System", "Restaurant Tech", "B2B Software"]}
      >
        <StorySection
          id="problem"
          title="The Problem"
          subtitle="Restaurant staff were struggling with complex, slow POS systems that hindered service quality"
          sectionNumber={1}
          delay={0.1}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Pain Points Discovered:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Slow Order Processing:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Staff took 3-5 minutes per order due to complex navigation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">High Training Costs:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        New staff required 2 days of training to become proficient
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Frequent Errors:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        40% of orders had mistakes due to confusing interface
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Customer Frustration:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Long wait times led to negative reviews and lost revenue
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <img
                src="/frustrated-restaurant-staff.png"
                alt="Restaurant staff struggling with complex POS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </StorySection>

        <StorySection
          id="research"
          title="Research & Discovery"
          subtitle="Deep dive into restaurant operations to understand the real needs of staff and owners"
          sectionNumber={2}
          delay={0.2}
        >
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">23</div>
                <div className="text-sm font-medium mb-1">Interviews Conducted</div>
                <div className="text-xs text-white/60">8 owners, 15 staff members</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-400 mb-2">5</div>
                <div className="text-sm font-medium mb-1">Restaurants Observed</div>
                <div className="text-xs text-white/60">Different sizes and cuisines</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">120hrs</div>
                <div className="text-sm font-medium mb-1">Observation Time</div>
                <div className="text-xs text-white/60">Peak and off-peak hours</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Key Research Insights:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      Insight 1
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Speed is Everything</h4>
                      <p className="text-sm text-white/70">
                        During peak hours, every second counts. Staff prioritize speed over accuracy when the interface
                        is complex.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      Insight 2
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Muscle Memory Matters</h4>
                      <p className="text-sm text-white/70">
                        Experienced staff rely on muscle memory. Consistent button placement is crucial for efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      Insight 3
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Visual Hierarchy</h4>
                      <p className="text-sm text-white/70">
                        Most-used functions need to be immediately visible. Secondary features can be hidden in menus.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      Insight 4
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Error Recovery</h4>
                      <p className="text-sm text-white/70">
                        When mistakes happen, staff need quick ways to fix them without starting over.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        <TimelineSection id="design-process" items={timelineItems} title="Design Process" />

        <IterationShowcase id="iterations" title="Design Evolution" iterations={iterations} />

        <StorySection
          id="final-solution"
          title="Final Solution"
          subtitle="A streamlined POS system designed for speed, accuracy, and ease of use"
          sectionNumber={3}
          delay={0.3}
        >
          <div className="space-y-8">
            <ImageComparison
              beforeImage="/cluttered-restaurant-pos.png"
              afterImage="/modern-restaurant-pos.png"
              beforeLabel="Before: Complex Interface"
              afterLabel="After: Streamlined Design"
            />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Design Decisions:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Large Touch Targets:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Minimum 44px buttons for easy tapping during busy periods
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Color-Coded Categories:</strong>
                      <p className="text-white/70 text-sm mt-1">Visual grouping of menu items for faster recognition</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">One-Tap Actions:</strong>
                      <p className="text-white/70 text-sm mt-1">Most common tasks require only one tap to complete</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Clear Visual Feedback:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Immediate confirmation for all actions to prevent errors
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Staff using the new streamlined POS system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </StorySection>

        <MetricsGrid id="results" metrics={metrics} title="Impact & Results" />

        <StorySection
          title="Lessons Learned"
          subtitle="Key takeaways from designing for high-pressure environments"
          sectionNumber={4}
          delay={0.4}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400">What Worked Well</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Extensive user research led to accurate problem identification</li>
                <li>• Iterative testing with real staff prevented major usability issues</li>
                <li>• Focus on speed over features resonated with users</li>
                <li>• Simple visual hierarchy improved task completion rates</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Areas for Improvement</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Could have involved more diverse restaurant types in research</li>
                <li>• Initial prototypes were too feature-heavy</li>
                <li>• Accessibility considerations came late in the process</li>
                <li>• More time needed for edge case scenarios</li>
              </ul>
            </div>
          </div>
        </StorySection>
      </CaseStudyLayout>
    </>
  )
}
