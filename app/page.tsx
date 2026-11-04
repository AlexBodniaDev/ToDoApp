"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function SplashScreen() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      router.push("/signin")
    }, 2500)

    return () => clearTimeout(timer)
  }, [router])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#2d3748] flex items-center justify-center">
      <div className="flex flex-col items-center gap-0 animate-fade-in">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          {/* Pencil icon - tilted at 45 degrees */}
          <g transform="translate(100, 50) rotate(-45)">
            <rect x="-4" y="-30" width="8" height="50" rx="4" fill="none" stroke="#4ade80" strokeWidth="3" />
            <path d="M -4 20 L 0 30 L 4 20 Z" fill="#4ade80" />
            <line x1="0" y1="-25" x2="0" y2="15" stroke="#4ade80" strokeWidth="2" />
          </g>

          {/* ToDo text */}
          <text
            x="100"
            y="130"
            textAnchor="middle"
            fill="#4ade80"
            fontSize="42"
            fontWeight="500"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-0.5"
          >
            ToDo
          </text>

          {/* Wavy underline */}
          <path
            d="M 40 145 Q 55 140, 70 145 T 100 145 T 130 145 T 160 145"
            stroke="#4ade80"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
