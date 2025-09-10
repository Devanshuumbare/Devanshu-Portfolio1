"use client"

import Link from "next/link"
import { ArrowRight, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import { UnlockSystem } from "@/components/unlock-system"
import { useUnlockSystem } from "@/hooks/use-unlock-system"

export default function Page() {
  const { unlockProject, isProjectUnlocked, getUnlockProgress, resetProgress, isHydrated } = useUnlockSystem()

  // Show loading state until hydrated
  if (!isHydrated) {
    return (
      <main className="bg-neutral-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/70">Loading portfolio...</p>
        </div>
      </main>
    )
  }

  const projects = [
    {
      id: "eatofy",
      title: "Eatofy — Restaurant Software",
      subtitle: "POS & management system",
      imageSrc: "/modern-restaurant-pos.png",
      tags: ["UI/UX Design", "POS System", "Restaurant"],
      href: "/case-study/eatofy",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#f59e0b",
      unlockType: "click" as const,
    },
    {
      id: "gaming-ground",
      title: "Gaming Ground Software — Management System",
      subtitle: "Device & seat booking system",
      imageSrc: "/gaming-cafe-management-interface.png",
      tags: ["Dashboard Design", "Real-time Data", "Gaming"],
      href: "/case-study/gaming-ground",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#8b5cf6",
      unlockType: "sequence" as const,
    },
    {
      id: "edulearn",
      title: "EduLearn — Education Software",
      subtitle: "Educational platform design",
      imageSrc: "/educational-platform-interface.png",
      tags: ["Educational Platform", "User Experience", "Web"],
      href: "/case-study/edulearn",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
      unlockType: "puzzle" as const,
    },
    {
      id: "green-ocean-logistics",
      title: "Green Ocean Logistics — Logistics Software",
      subtitle: "Order tracking & management",
      imageSrc: "/logistics-tracking-dashboard.png",
      tags: ["Logistics", "Order Tracking", "Web App"],
      href: "/case-study/green-ocean-logistics",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#2563eb",
      unlockType: "drag" as const,
    },
    {
      id: "xtreme",
      title: "Xtreme — Gaming Café Management",
      subtitle: "Advanced gaming software",
      imageSrc: "/gaming-cafe-management-interface.png",
      tags: ["Gaming Software", "Session Monitoring", "UI/UX"],
      href: "/case-study/xtreme",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#ef4444",
      unlockType: "click" as const,
    },
    {
      id: "occasion",
      title: "Occasion — Event Planning Platform",
      subtitle: "Comprehensive event management",
      imageSrc: "/occasion-hero.jpg",
      tags: ["Event Planning", "UI/UX Design", "Web Platform"],
      href: "/case-study/occasion",
      priority: false,
      gradientFrom: "#1e1b4b",
      gradientTo: "#a855f7",
      unlockType: "occasion" as const,
    },
    {
      id: "crossplay-gaming",
      title: "Crossplay Gaming Cafe — Next-Gen Platform",
      subtitle: "Cross-platform gaming & tournaments",
      imageSrc: "/crossplay-gaming-hero.jpg",
      tags: ["Gaming Platform", "UI/UX Design", "Social Features"],
      href: "/case-study/crossplay-gaming",
      priority: false,
      gradientFrom: "#0c0a09",
      gradientTo: "#ec4899",
      unlockType: "gaming" as const,
    },
    {
      id: "bossin",
      title: "Bossin — Professional Networking",
      subtitle: "Career growth & networking platform",
      imageSrc: "/bossin-hero.jpg",
      tags: ["Professional Network", "Career Platform", "UI/UX Design"],
      href: "/case-study/bossin",
      priority: false,
      gradientFrom: "#1e3a8a",
      gradientTo: "#06b6d4",
      unlockType: "business" as const,
    },
    {
      id: "travel-website",
      title: "Wanderlust Travel — Personalized Planning",
      subtitle: "AI-powered travel experiences",
      imageSrc: "/travel-website-hero.jpg",
      tags: ["Travel Platform", "UI/UX Design", "Personalization"],
      href: "/case-study/travel-website",
      priority: false,
      gradientFrom: "#064e3b",
      gradientTo: "#f59e0b",
      unlockType: "travel" as const,
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">Devanshu Umbare</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["I design interfaces", "that users love"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  I'm a UI/UX Designer & Frontend Designer based in Kalyan, Maharashtra. I create intuitive
                  software solutions for restaurants, gaming, education, logistics, event planning, cross-platform
                  gaming, professional networking, and travel industries.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:Devanshuumber1000@gmail.com">
                      Hire me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                    <Link href="tel:+917030761682" className="flex items-center gap-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37a11.045 11.045 0 005.47 5.47l1.983-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call me
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-white/70">Projects Unlocked</p>
                    <button
                      onClick={resetProgress}
                      className="flex items-center gap-1 text-xs text-white/50 hover:text-white/70 transition-colors"
                    >
                      <RotateCcw className="h-3 w-3" />
                      Reset
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(getUnlockProgress() / projects.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {getUnlockProgress()}/{projects.length}
                    </span>
                  </div>
                </div>

                {/* Skills & Technologies */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">SKILLS & TECHNOLOGIES</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-lg font-bold text-white/25 sm:grid-cols-3">
                    <li>user research</li>
                    <li>wireframing</li>
                    <li>UI/UX Design</li>
                    <li>prototyping </li>
                    <li>typography</li>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Sketch</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <UnlockSystem
                key={p.id}
                projectId={p.id}
                unlockType={p.unlockType}
                isUnlocked={isProjectUnlocked(p.id)}
                onUnlock={() => unlockProject(p.id)}
              >
                <ProjectCard
                  title={p.title}
                  subtitle={p.subtitle}
                  imageSrc={p.imageSrc}
                  tags={p.tags}
                  href={isProjectUnlocked(p.id) ? p.href : "#"}
                  priority={p.priority}
                  gradientFrom={p.gradientFrom}
                  gradientTo={p.gradientTo}
                  imageContainerClassName="lg:h-full"
                  containerClassName="lg:h-[calc(100svh-2rem)]"
                  revealDelay={idx * 0.06}
                  isLocked={!isProjectUnlocked(p.id)}
                />
              </UnlockSystem>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
