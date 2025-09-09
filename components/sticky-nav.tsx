"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
}

interface StickyNavProps {
  items: NavItem[]
  className?: string
}

export default function StickyNav({ items, className }: StickyNavProps) {
  const [activeSection, setActiveSection] = useState(items[0]?.id || "")

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(items[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className={cn("fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block", className)}>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 block",
                  activeSection === item.id ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60",
                )}
                title={item.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
