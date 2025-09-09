"use client"

import ScrollSection from "./scroll-section"
import { cn } from "@/lib/utils"

interface Metric {
  label: string
  value: string
  description?: string
}

interface MetricsGridProps {
  metrics: Metric[]
  title?: string
  className?: string
}

export default function MetricsGrid({ metrics, title = "Impact & Results", className }: MetricsGridProps) {
  return (
    <ScrollSection className={cn("mb-16", className)}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
            <div className="text-sm font-medium text-white/80 mb-1">{metric.label}</div>
            {metric.description && <div className="text-xs text-white/60">{metric.description}</div>}
          </div>
        ))}
      </div>
    </ScrollSection>
  )
}
