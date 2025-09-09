"use client"

import { useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StoryStep {
  id: string
  title?: string
  content: ReactNode
  backgroundImage?: string
  backgroundColor?: string
}

interface StoryFlowProps {
  steps?: StoryStep[]
  children?: ReactNode
  className?: string
}

export default function StoryFlow({ steps, children, className }: StoryFlowProps) {
  const [activeStep, setActiveStep] = useState(0)

  const hasSteps = Array.isArray(steps) && steps.length > 0

  // Only attach scroll logic when using steps mode
  useEffect(() => {
    if (!hasSteps) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const progress = scrollPosition / Math.max(1, documentHeight - windowHeight)
      const stepIndex = Math.floor(progress * steps!.length)
      const clampedIndex = Math.max(0, Math.min(stepIndex, steps!.length - 1))
      setActiveStep(clampedIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasSteps, steps])

  // Children mode: just render the children inside a container
  if (!hasSteps) {
    return <div className={cn("relative", className)}>{children}</div>
  }

  // Steps mode: render background transitions and step sections
  return (
    <div className={cn("relative", className)}>
      {/* Background transitions */}
      <div className="fixed inset-0 -z-10">
        {steps!.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === activeStep ? "opacity-100" : "opacity-0",
            )}
            style={{
              backgroundColor: step.backgroundColor || "transparent",
              backgroundImage: step.backgroundImage ? `url(${step.backgroundImage})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Story content */}
      <div className="relative z-10">
        {steps!.map((step, index) => (
          <section key={step.id} className="min-h-screen flex items-center justify-center px-4 py-16">
            <div
              className={cn(
                "max-w-4xl mx-auto transition-all duration-700",
                index === activeStep ? "opacity-100 transform translate-y-0" : "opacity-60 transform translate-y-8",
              )}
            >
              {step.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
