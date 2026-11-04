"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password && password === confirmPassword) {
      localStorage.setItem("isAuthenticated", "true")
      router.push("/home")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-sm font-medium text-foreground">Register</h1>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <form onSubmit={handleRegister} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Enter your email:</label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Type here:"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-[#4ade80] placeholder:text-muted-foreground"
                  required
                />
                {email && <Check className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4ade80]" />}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Enter your password:</label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Type here:"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-[#4ade80] placeholder:text-muted-foreground"
                  required
                />
                {password && <Check className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4ade80]" />}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Confirm your password:</label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Type here:"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-[#4ade80] placeholder:text-muted-foreground"
                  required
                />
                {confirmPassword && (
                  <Check className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4ade80]" />
                )}
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full rounded-full bg-[#4ade80] hover:bg-[#3bc970] text-white font-medium py-6"
              >
                Done
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
