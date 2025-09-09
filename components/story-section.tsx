"use client"

import type { ReactNode } from "react"
import ScrollSection from "./scroll-section"
import { cn } from "@/lib/utils"

interface StorySectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  delay?: number
  sectionNumber?: number
}

function StorySection({ title, subtitle, children, className, delay = 0, sectionNumber }: StorySectionProps) {
  return (
    <ScrollSection delay={delay} className={cn("mb-24", className)}>
      <div className="mb-12">
        {sectionNumber && (
          <div className="text-sm font-mono text-white/40 mb-2">{String(sectionNumber).padStart(2, "0")}</div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
      <div className="space-y-8">{children}</div>
    </ScrollSection>
  )
}

export default StorySection
export { StorySection }
