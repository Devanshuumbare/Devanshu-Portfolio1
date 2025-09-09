import CaseStudyLayout from "@/components/case-study-layout"
import StorySection from "@/components/story-section"
import ScrollProgress from "@/components/scroll-progress"
import TimelineSection from "@/components/timeline-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import ImageComparison from "@/components/image-comparison"
import StickyNav from "@/components/sticky-nav"
import { Badge } from "@/components/ui/badge"

export default function GamingGroundCase() {
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
      title: "Gaming Cafe Immersion",
      description:
        "Spent 40+ hours in 6 different gaming cafes observing operations, customer behavior, and staff workflows.",
      date: "Week 1-2",
      image: "/gaming-cafe-research.png",
    },
    {
      title: "Stakeholder Interviews",
      description:
        "Interviewed 12 gaming cafe owners and 20 staff members to understand operational pain points and business goals.",
      date: "Week 2",
      image: "/gaming-cafe-interviews.png",
    },
    {
      title: "System Architecture",
      description:
        "Designed the technical architecture for real-time device monitoring, booking system, and performance analytics.",
      date: "Week 3",
      image: "/gaming-system-architecture.png",
    },
    {
      title: "Dashboard Wireframes",
      description:
        "Created wireframes for the main dashboard focusing on real-time data visualization and quick actions.",
      date: "Week 4",
      image: "/gaming-dashboard-wireframes.png",
    },
    {
      title: "Prototype Testing",
      description:
        "Tested interactive prototypes with gaming cafe staff during actual operations for real-world feedback.",
      date: "Week 5-6",
      image: "/gaming-prototype-testing.png",
    },
    {
      title: "Visual Design System",
      description: "Developed a gaming-inspired design system with dark themes and vibrant accent colors.",
      date: "Week 7",
      image: "/gaming-design-system.png",
    },
  ]

  const iterations = [
    {
      title: "Data-Heavy Dashboard",
      description: "First iteration tried to show all available data at once, creating information overload for staff.",
      image: "/gaming-dashboard-v1-cluttered.png",
      insights: [
        "Too much information caused decision paralysis",
        "Staff couldn't quickly identify urgent issues",
        "Real-time updates were distracting during busy periods",
      ],
    },
    {
      title: "Simplified Overview",
      description: "Second iteration focused on key metrics with expandable details, but lost important context.",
      image: "/gaming-dashboard-v2-minimal.png",
      insights: [
        "Cleaner but missing critical information",
        "Staff had to click too many times for details",
        "Lost the 'at-a-glance' operational overview",
      ],
    },
    {
      title: "Smart Prioritization",
      description: "Final iteration used intelligent alerts and contextual information display based on urgency.",
      image: "/gaming-cafe-management-interface.png",
      insights: [
        "50% faster issue identification and resolution",
        "Reduced cognitive load while maintaining visibility",
        "Staff satisfaction increased to 92%",
      ],
    },
  ]

  const metrics = [
    {
      label: "Issue Resolution Time",
      value: "65%",
      description: "Faster problem identification",
    },
    {
      label: "Booking Efficiency",
      value: "80%",
      description: "Increase in seat utilization",
    },
    {
      label: "Staff Productivity",
      value: "45%",
      description: "Improvement in task completion",
    },
    {
      label: "Customer Satisfaction",
      value: "4.8/5",
      description: "Average rating improvement",
    },
    {
      label: "Revenue Growth",
      value: "+32%",
      description: "Increase in monthly revenue",
    },
    {
      label: "Operational Costs",
      value: "-28%",
      description: "Reduction in manual processes",
    },
  ]

  return (
    <>
      <ScrollProgress />
      <StickyNav items={navItems} />

      <CaseStudyLayout
        title="Gaming Ground Software — Management System"
        subtitle="Designing a comprehensive gaming cafe management platform with real-time monitoring and intelligent automation"
        heroImage="/gaming-cafe-management-interface.png"
        tags={["Dashboard Design", "Real-time Data", "Gaming", "B2B Software"]}
      >
        <StorySection
          id="problem"
          title="The Challenge"
          subtitle="Gaming cafes struggled with manual processes, device downtime, and inefficient resource management"
          sectionNumber={1}
          delay={0.1}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Critical Operational Issues:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Device Downtime:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        15-20% of gaming stations were offline daily due to undetected issues
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Manual Booking Chaos:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Paper-based seat reservations led to double bookings and customer disputes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Staff Inefficiency:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Staff spent 40% of time on administrative tasks instead of customer service
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Revenue Loss:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Poor resource utilization resulted in 25% revenue loss during peak hours
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <img
                src="/chaotic-gaming-cafe.png"
                alt="Chaotic gaming cafe with manual processes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </StorySection>

        <StorySection
          id="research"
          title="Research & Discovery"
          subtitle="Deep dive into gaming cafe operations to understand the complex ecosystem of devices, customers, and staff"
          sectionNumber={2}
          delay={0.2}
        >
          <div className="space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-sm font-medium mb-1">Gaming Cafes</div>
                <div className="text-xs text-white/60">Different sizes & models</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">32</div>
                <div className="text-sm font-medium mb-1">Stakeholder Interviews</div>
                <div className="text-xs text-white/60">Owners, staff, customers</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-400 mb-2">40+</div>
                <div className="text-sm font-medium mb-1">Hours Observed</div>
                <div className="text-xs text-white/60">Peak & off-peak operations</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-orange-400 mb-2">150+</div>
                <div className="text-sm font-medium mb-1">Gaming Sessions</div>
                <div className="text-xs text-white/60">Analyzed for patterns</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Key Research Insights:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-purple-500/20 text-purple-300">
                      Insight 1
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Real-Time Visibility is Critical</h4>
                      <p className="text-sm text-white/70">
                        Staff need instant awareness of device status, customer needs, and operational issues to
                        maintain service quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-blue-500/20 text-blue-300">
                      Insight 2
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Automation Reduces Stress</h4>
                      <p className="text-sm text-white/70">
                        Automated booking, billing, and device monitoring significantly reduce staff workload and
                        errors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-green-500/20 text-green-300">
                      Insight 3
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Data-Driven Decisions</h4>
                      <p className="text-sm text-white/70">
                        Owners want detailed analytics on peak hours, popular games, and customer behavior to optimize
                        operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-orange-500/20 text-orange-300">
                      Insight 4
                    </Badge>
                    <div>
                      <h4 className="font-medium mb-1">Gaming-First Experience</h4>
                      <p className="text-sm text-white/70">
                        The interface should feel familiar to gaming enthusiasts while being professional for business
                        use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        <TimelineSection id="design-process" items={timelineItems} title="Design Process" />

        <IterationShowcase id="iterations" title="Dashboard Evolution" iterations={iterations} />

        <StorySection
          id="final-solution"
          title="Final Solution"
          subtitle="An intelligent gaming cafe management system with real-time monitoring and automated operations"
          sectionNumber={3}
          delay={0.3}
        >
          <div className="space-y-8">
            <ImageComparison
              beforeImage="/manual-gaming-cafe-operations.png"
              afterImage="/gaming-cafe-management-interface.png"
              beforeLabel="Before: Manual Operations"
              afterLabel="After: Intelligent Dashboard"
            />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Real-Time Device Monitoring:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Live status of all gaming stations with automatic issue detection
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Smart Booking System:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Automated seat allocation with customer preferences and peak hour optimization
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Performance Analytics:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Detailed insights on revenue, utilization, and customer behavior patterns
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-white">Staff Management:</strong>
                      <p className="text-white/70 text-sm mt-1">
                        Task assignment, performance tracking, and automated scheduling
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/gaming-cafe-dashboard-features.png"
                  alt="Gaming cafe dashboard showing real-time features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Gaming-Inspired Design Language</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-white">Dark Theme:</strong>
                  <p className="text-white/70 mt-1">
                    Reduces eye strain during long shifts and matches gaming aesthetics
                  </p>
                </div>
                <div>
                  <strong className="text-white">Vibrant Accents:</strong>
                  <p className="text-white/70 mt-1">Color-coded status indicators for quick visual recognition</p>
                </div>
                <div>
                  <strong className="text-white">Responsive Layout:</strong>
                  <p className="text-white/70 mt-1">Works seamlessly on tablets, desktops, and mobile devices</p>
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        <MetricsGrid id="results" metrics={metrics} title="Impact & Results" />

        <StorySection
          title="Lessons Learned"
          subtitle="Key insights from designing for the gaming industry"
          sectionNumber={4}
          delay={0.4}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400">What Worked Well</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Immersive research in actual gaming cafes provided authentic insights</li>
                <li>• Gaming-inspired design language resonated with both staff and customers</li>
                <li>• Real-time data visualization became the most valued feature</li>
                <li>• Automated processes significantly reduced operational overhead</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Areas for Improvement</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Initial prototypes were too complex for smaller gaming cafes</li>
                <li>• Could have better addressed mobile-first design earlier</li>
                <li>• Integration with existing POS systems needed more consideration</li>
                <li>• Customer-facing features could have been explored further</li>
              </ul>
            </div>
          </div>
        </StorySection>
      </CaseStudyLayout>
    </>
  )
}
