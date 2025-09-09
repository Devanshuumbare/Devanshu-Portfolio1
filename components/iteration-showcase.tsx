"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollSection from "./scroll-section"
import { cn } from "@/lib/utils"

interface Iteration {
  title: string
  description: string
  image: string
  insights?: string[]
}

interface IterationShowcaseProps {
  iterations: Iteration[]
  title?: string
  className?: string
}

function IterationShowcase({ iterations, title = "Design Evolution", className }: IterationShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextIteration = () => {
    setCurrentIndex((prev) => (prev + 1) % iterations.length)
  }

  const prevIteration = () => {
    setCurrentIndex((prev) => (prev - 1 + iterations.length) % iterations.length)
  }

  const currentIteration = iterations[currentIndex]

  return (
    <ScrollSection className={cn("mb-16", className)}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevIteration}
            disabled={iterations.length <= 1}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-white/70">
            {currentIndex + 1} of {iterations.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextIteration}
            disabled={iterations.length <= 1}
            className="rounded-full bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
          <img
            src={currentIteration.image || "/placeholder.svg"}
            alt={currentIteration.title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">{currentIteration.title}</h4>
          <p className="text-white/70">{currentIteration.description}</p>

          {currentIteration.insights && (
            <div>
              <h5 className="text-sm font-semibold text-white/80 mb-2">Key Insights:</h5>
              <ul className="space-y-1">
                {currentIteration.insights.map((insight, index) => (
                  <li key={index} className="text-sm text-white/60 flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {iterations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/30",
            )}
          />
        ))}
      </div>
    </ScrollSection>
  )
}

export default IterationShowcase
export { IterationShowcase }
