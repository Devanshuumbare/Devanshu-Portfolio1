"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage?: string
  speed?: number
  className?: string
  overlay?: boolean
}

export default function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  className,
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !backgroundImage) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.scrollY
      const rate = scrolled * -speed

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        element.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, backgroundImage])

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <div
          ref={ref}
          className="absolute inset-0 -z-10 scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/40 -z-5" />}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
