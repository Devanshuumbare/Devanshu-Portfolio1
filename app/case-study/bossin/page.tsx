import CaseStudyLayout from "@/components/case-study-layout"
import StorySection from "@/components/story-section"
import IterationShowcase from "@/components/iteration-showcase"
import MetricsGrid from "@/components/metrics-grid"
import TimelineSection from "@/components/timeline-section"

export default function BossinCaseStudy() {
  return (
    <CaseStudyLayout
      title="Bossin"
      subtitle="Professional Networking & Career Platform"
      description="Designing a modern professional networking platform that connects ambitious professionals with opportunities and mentorship."
      heroImage="/bossin-hero.jpg"
      tags={["Professional Network", "Career Platform", "UI/UX Design"]}
      timeline="6 months"
      role="Lead Product Designer"
      team="Product Manager, 4 Developers, Data Analyst"
    >
      <StorySection
        sectionNumber={1}
        title="The Opportunity"
        subtitle="Reimagining professional networking"
      >
        <p className="text-white/70 mb-8">Traditional networking platforms felt outdated and impersonal. Young professionals needed a more authentic way to connect and grow their careers.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Market Gaps</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>Existing platforms felt corporate and impersonal</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>Limited mentorship and skill development features</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>Poor job matching and opportunity discovery</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>Lack of authentic professional community building</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <img
              src="/professional-networking-gap.png"
              alt="Gap in professional networking market"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm text-white/60 mt-4">
              Young professionals seeking more authentic networking experiences
            </p>
          </div>
        </div>
      </StorySection>

      <StorySection
        sectionNumber={2}
        title="User Research"
        subtitle="Understanding professional aspirations"
      >
        <p className="text-white/70 mb-8">Conducted extensive research with young professionals, career coaches, and industry leaders to understand networking behaviors.</p>
        
        <TimelineSection
          title="Research Framework"
          items={[
            {
              title: "Professional Interviews",
              description: "Interviewed 30 professionals across different industries",
              date: "4 weeks",
              image: "/professional-interviews.png",
            },
            {
              title: "Industry Expert Sessions", 
              description: "Consulted with 10 career coaches and HR leaders",
              date: "2 weeks",
              image: "/career-coach-insights.png",
            },
            {
              title: "Platform Audit",
              description: "Analyzed existing networking and career platforms", 
              date: "2 weeks",
              image: "/platform-analysis.png",
            },
          ]}
        />
      </StorySection>

      <StorySection
        sectionNumber={3}
        title="Design Strategy"
        subtitle="Building authentic professional connections"
      >
        <p className="text-white/70 mb-8">Created a platform that balances professional growth with authentic relationship building through innovative features.</p>
        
        <IterationShowcase
          title="Platform Development"
          iterations={[
            {
              title: "Core Networking",
              description: "Basic professional profiles and connection features",
              image: "/bossin-wireframes-v1.png",
              insights: ["Professional profiles", "Basic messaging", "Company pages"],
            },
            {
              title: "Career Growth", 
              description: "Added mentorship and skill development features",
              image: "/bossin-design-v2.png",
              insights: ["Mentorship matching", "Skill assessments", "Career pathways"],
            },
            {
              title: "Community Platform",
              description: "Full ecosystem with opportunities and community features",
              image: "/bossin-final.png", 
              insights: ["Smart job matching", "Industry communities", "Event networking"],
            },
          ]}
        />
      </StorySection>

      <StorySection
        sectionNumber={4}
        title="Professional Success"
        subtitle="Empowering career growth and connections"
      >
        <p className="text-white/70 mb-8">Bossin became the go-to platform for young professionals seeking authentic networking and career development opportunities.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Smart professional matching and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Integrated mentorship program with expert matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Industry-specific communities and discussion forums</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Career pathway guidance and skill assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Virtual and in-person networking event platform</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <img
              src="/bossin-final-dashboard.png"
              alt="Bossin professional networking platform"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-sm text-white/60 mt-4">
              The comprehensive professional networking and career growth platform
            </p>
          </div>
        </div>

        <MetricsGrid
          title="Career Impact"
          metrics={[
            { label: "Professional Connections", value: "50,000+", description: "Meaningful connections made" },
            { label: "Career Advancement", value: "78%", description: "Users reported career progress" },
            { label: "Mentorship Matches", value: "2,500+", description: "Successful mentor-mentee pairs" },
            { label: "Job Placements", value: "1,200+", description: "Jobs found through the platform" },
          ]}
        />
      </StorySection>
    </CaseStudyLayout>
  )
}