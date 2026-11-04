"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert("Password reset link sent to your email!")
      router.push("/signin")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-sm font-medium text-foreground">Reset password</h1>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="flex justify-center mb-12">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="65" r="12" fill="#4ade80" />
              <rect x="30" y="50" width="10" height="20" rx="2" fill="#4ade80" />
              <circle cx="65" cy="35" r="12" fill="#4ade80" />
              <rect x="60" y="30" width="10" height="20" rx="2" fill="#4ade80" />
              <path d="M40 60L60 40" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <form onSubmit={handleReset} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Enter your email:</label>
              <Input
                type="email"
                placeholder="Type here:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-[#4ade80] placeholder:text-muted-foreground"
                required
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full rounded-full bg-[#4ade80] hover:bg-[#3bc970] text-white font-medium py-6"
              >
                Send to email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
