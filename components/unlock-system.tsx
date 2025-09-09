"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Lock,
  Unlock,
  Star,
  Target,
  Puzzle,
  Trophy,
  Calendar,
  Gamepad2,
  Briefcase,
  MapPin,
  Heart,
  Users,
  Plane,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface UnlockSystemProps {
  projectId: string
  unlockType: "click" | "sequence" | "puzzle" | "drag" | "occasion" | "gaming" | "business" | "travel"
  isUnlocked: boolean
  onUnlock: () => void
  children: React.ReactNode
}

export function UnlockSystem({ projectId, unlockType, isUnlocked, onUnlock, children }: UnlockSystemProps) {
  const [showUnlockChallenge, setShowUnlockChallenge] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)

  const handleUnlockAttempt = () => {
    if (isUnlocked) return
    setShowUnlockChallenge(true)
  }

  const handleUnlockSuccess = () => {
    setIsUnlocking(true)
    setTimeout(() => {
      onUnlock()
      setShowUnlockChallenge(false)
      setIsUnlocking(false)
    }, 800)
  }

  return (
    <div className="relative">
      {children}

      {/* Lock Overlay */}
      {!isUnlocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/80 backdrop-blur-sm">
          <div className="text-center">
            <div
              className="mx-auto mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 transition-transform hover:scale-110 active:scale-95"
              onClick={handleUnlockAttempt}
            >
              <Lock className="h-8 w-8 text-black" />
            </div>
            <p className="text-sm text-white/70">Click to unlock this project</p>
          </div>
        </div>
      )}

      {/* Floating Unlock Icons */}
      {!isUnlocked && (
        <div className="absolute -right-2 -top-2 z-20">
          <div
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg transition-transform hover:scale-110 active:scale-95 animate-pulse"
            onClick={handleUnlockAttempt}
          >
            <Star className="h-6 w-6 text-white" />
          </div>
        </div>
      )}

      {/* Unlock Challenge Modal */}
      {showUnlockChallenge && (
        <UnlockChallenge
          type={unlockType}
          onSuccess={handleUnlockSuccess}
          onClose={() => setShowUnlockChallenge(false)}
          isUnlocking={isUnlocking}
        />
      )}
    </div>
  )
}

interface UnlockChallengeProps {
  type: "click" | "sequence" | "puzzle" | "drag" | "occasion" | "gaming" | "business" | "travel"
  onSuccess: () => void
  onClose: () => void
  isUnlocking: boolean
}

function UnlockChallenge({ type, onSuccess, onClose, isUnlocking }: UnlockChallengeProps) {
  const [progress, setProgress] = useState(0)
  const [sequence, setSequence] = useState<number[]>([])
  const [targetSequence] = useState([1, 3, 2, 4])
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [gameScore, setGameScore] = useState(0)
  const [businessConnections, setBusinessConnections] = useState<string[]>([])
  const [selectedDestination, setSelectedDestination] = useState<string>("")

  useEffect(() => {
    if (type === "click") {
      // Simple click challenge - auto success after animation
      setTimeout(onSuccess, 500)
    }
  }, [type, onSuccess])

  const handleSequenceClick = (num: number) => {
    const newSequence = [...sequence, num]
    setSequence(newSequence)

    if (newSequence.length === targetSequence.length) {
      if (JSON.stringify(newSequence) === JSON.stringify(targetSequence)) {
        onSuccess()
      } else {
        // Reset on wrong sequence
        setTimeout(() => setSequence([]), 500)
      }
    }
  }

  const renderChallenge = () => {
    switch (type) {
      case "click":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 animate-spin">
              <Unlock className="h-10 w-10 text-white" />
            </div>
            <p className="text-white">Unlocking...</p>
          </div>
        )

      case "sequence":
        return (
          <div className="text-center">
            <p className="mb-4 text-white">Click the numbers in order: 1 → 3 → 2 → 4</p>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => handleSequenceClick(num)}
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold transition-all",
                    sequence.includes(num) ? "bg-green-500 text-white" : "bg-white/20 text-white hover:bg-white/30",
                  )}
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-white/70">
              Progress: {sequence.length}/{targetSequence.length}
            </p>
          </div>
        )

      case "puzzle":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
              <Puzzle className="h-10 w-10 text-white" />
            </div>
            <p className="mb-4 text-white">Solve the puzzle!</p>
            <button
              onClick={onSuccess}
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-white transition-transform hover:scale-105"
            >
              I solved it!
            </button>
          </div>
        )

      case "drag":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500">
              <Target className="h-10 w-10 text-white" />
            </div>
            <p className="mb-4 text-white">Drag to unlock!</p>
            <button
              onClick={onSuccess}
              className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 text-white transition-transform hover:scale-105"
            >
              Unlock
            </button>
          </div>
        )

      case "occasion":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <p className="mb-4 text-white">Plan the perfect occasion! Select a special date:</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {["Valentine's Day", "Birthday", "Wedding", "Anniversary", "Graduation", "Baby Shower"].map(
                (occasion) => (
                  <button
                    key={occasion}
                    onClick={() => {
                      setSelectedDate(occasion)
                      setTimeout(onSuccess, 500)
                    }}
                    className="rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    <Heart className="mx-auto mb-1 h-4 w-4" />
                    {occasion}
                  </button>
                ),
              )}
            </div>
          </div>
        )

      case "gaming":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
              <Gamepad2 className="h-10 w-10 text-white" />
            </div>
            <p className="mb-4 text-white">Gaming Challenge! Hit the targets to unlock:</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[1, 2, 3, 4].map((target) => (
                <button
                  key={target}
                  onClick={() => {
                    setGameScore((prev) => prev + 1)
                    if (gameScore + 1 >= 3) {
                      setTimeout(onSuccess, 500)
                    }
                  }}
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold transition-all",
                    gameScore >= target
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:scale-110",
                  )}
                >
                  🎯
                </button>
              ))}
            </div>
            <p className="text-sm text-white/70">Score: {gameScore}/3</p>
          </div>
        )

      case "business":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <p className="mb-4 text-white">Build your network! Connect with professionals:</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["CEO", "Designer", "Developer", "Manager"].map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    const newConnections = [...businessConnections, role]
                    setBusinessConnections(newConnections)
                    if (newConnections.length >= 3) {
                      setTimeout(onSuccess, 500)
                    }
                  }}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm transition-all",
                    businessConnections.includes(role)
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105",
                  )}
                >
                  <Users className="mx-auto mb-1 h-4 w-4" />
                  {role}
                </button>
              ))}
            </div>
            <p className="text-sm text-white/70">Connections: {businessConnections.length}/3</p>
          </div>
        )

      case "travel":
        return (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <p className="mb-4 text-white">Choose your dream destination:</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { name: "Paris", icon: "🗼" },
                { name: "Tokyo", icon: "🏯" },
                { name: "Bali", icon: "🏝️" },
                { name: "NYC", icon: "🗽" },
              ].map((destination) => (
                <button
                  key={destination.name}
                  onClick={() => {
                    setSelectedDestination(destination.name)
                    setTimeout(onSuccess, 500)
                  }}
                  className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-sm text-white transition-transform hover:scale-105"
                >
                  <Plane className="mx-auto mb-1 h-4 w-4" />
                  <div className="text-lg">{destination.icon}</div>
                  {destination.name}
                </button>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl border border-white/10">
        <button onClick={onClose} className="absolute right-4 top-4 text-white/50 hover:text-white">
          ✕
        </button>

        {isUnlocking ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 animate-pulse">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <p className="text-white">Project Unlocked! 🎉</p>
          </div>
        ) : (
          renderChallenge()
        )}
      </div>
    </div>
  )
}
