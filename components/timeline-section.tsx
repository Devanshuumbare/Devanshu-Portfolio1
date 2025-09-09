"use client"

import type { ReactNode } from "react"
import ScrollSection from "./scroll-section"
import { cn } from "@/lib/utils"

interface TimelineItem {
  title: string
  description: string
  content?: ReactNode
  image?: string
  date?: string
}

interface TimelineSectionProps {
  items: TimelineItem[]
  title?: string
  className?: string
}

function TimelineSection({ items, title = "Design Process", className }: TimelineSectionProps) {
  return (
    <ScrollSection className={cn("mb-24", className)}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {items.map((item, index) => (
            <ScrollSection
              key={index}
              delay={index * 0.1}
              className={cn(
                "relative flex flex-col md:flex-row items-start gap-8",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-neutral-950" />

              {/* Content */}
              <div className="flex-1 ml-12 md:ml-0 md:w-1/2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  {item.date && <div className="text-sm font-mono text-white/60 mb-2">{item.date}</div>}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/70 mb-4">{item.description}</p>
                  {item.content && <div>{item.content}</div>}
                </div>
              </div>

              {/* Image */}
              {item.image && (
                <div className="flex-1 ml-12 md:ml-0 md:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </ScrollSection>
          ))}
        </div>
      </div>
    </ScrollSection>
  )
}

export default TimelineSection
export { TimelineSection }
