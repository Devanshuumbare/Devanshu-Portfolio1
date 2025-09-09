"use client"

import { useState, useEffect } from "react"

export function useUnlockSystem() {
  const [unlockedProjects, setUnlockedProjects] = useState<Set<string>>(new Set(["eatofy"]))
  const [isHydrated, setIsHydrated] = useState(false)

  // Load unlocked projects from localStorage on mount
  useEffect(() => {
    setIsHydrated(true)
    const saved = localStorage.getItem("unlockedProjects")
    if (saved) {
      try {
        setUnlockedProjects(new Set(JSON.parse(saved)))
      } catch (error) {
        console.error("Failed to parse unlocked projects:", error)
        setUnlockedProjects(new Set(["eatofy"]))
      }
    }
  }, [])

  // Save to localStorage whenever unlocked projects change (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("unlockedProjects", JSON.stringify(Array.from(unlockedProjects)))
    }
  }, [unlockedProjects, isHydrated])

  const unlockProject = (projectId: string) => {
    setUnlockedProjects((prev) => new Set([...prev, projectId]))
  }

  const isProjectUnlocked = (projectId: string) => {
    return unlockedProjects.has(projectId)
  }

  const getUnlockProgress = () => {
    return unlockedProjects.size
  }

  const resetProgress = () => {
    setUnlockedProjects(new Set(["eatofy"]))
  }

  return {
    unlockedProjects,
    unlockProject,
    isProjectUnlocked,
    getUnlockProgress,
    resetProgress,
    isHydrated,
  }
}
