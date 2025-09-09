"use client"

import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CaseStudyLayoutProps {
  title: string
  subtitle: string
  heroImage: string
  tags: string[]
  children: ReactNode
  backHref?: string
  className?: string
}

export default function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  tags,
  children,
  backHref = "/",
  className,
}: CaseStudyLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-neutral-950 text-white", className)}>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <Link href={backHref} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="text-sm font-medium text-white/70">Case Study</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">{title}</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        </div>
      </section>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4">{children}</div>
    </div>
  )
}
