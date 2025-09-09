"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { animate, inView } from "motion"
import { cn } from "@/lib/utils"

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  intensity?: "soft" | "medium" | "strong"
  direction?: "up" | "down" | "left" | "right"
}

function ScrollSection({
  children,
  className,
  delay = 0,
  intensity = "medium",
  direction = "up",
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set intensity values
    const intensityMap = {
      soft: { translate: 20, blur: 8, scale: 0.98 },
      medium: { translate: 40, blur: 12, scale: 0.95 },
      strong: { translate: 60, blur: 16, scale: 0.92 },
    }

    const { translate, blur, scale } = intensityMap[intensity]

    // Set direction
    const directionMap = {
      up: `translateY(${translate}px)`,
      down: `translateY(-${translate}px)`,
      left: `translateX(${translate}px)`,
      right: `translateX(-${translate}px)`,
    }

    // Initial state
    element.style.opacity = "0"
    element.style.transform = `${directionMap[direction]} scale(${scale})`
    element.style.filter = `blur(${blur}px)`

    const cleanup = inView(element, () => {
      animate(
        element,
        {
          opacity: 1,
          transform: "translateY(0) translateX(0) scale(1)",
          filter: "blur(0px)",
        },
        {
          duration: 1.2,
          delay,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
      )
    })

    return cleanup
  }, [delay, intensity, direction])

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}

export default ScrollSection
export { ScrollSection }
