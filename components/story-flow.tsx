"use client"

import { useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StoryStep {
  id: string
  title: string
  content: ReactNode
  backgroundImage?: string
  backgroundColor?: string
}

interface StoryFlowProps {
  steps: StoryStep[]
  className?: string
}

export default function StoryFlow({ steps, className }: StoryFlowProps) {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Calculate which step should be active based on scroll position
      const progress = scrollPosition / (documentHeight - windowHeight)
      const stepIndex = Math.floor(progress * steps.length)
      const clampedIndex = Math.max(0, Math.min(stepIndex, steps.length - 1))

      setActiveStep(clampedIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [steps.length])

  return (
    <div className={cn("relative", className)}>
      {/* Background transitions */}
      <div className="fixed inset-0 -z-10">
        {steps.map((step, index) => (
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
        {steps.map((step, index) => (
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
