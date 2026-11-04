"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app, validate credentials
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true")
      router.push("/home")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-8">
        <div className="text-center mb-2">
          <h1 className="text-sm font-medium text-foreground">Sign in</h1>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Welcome!</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Our app will help you organize your tasks. Login or create an account to see what we prepared for you.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-8">
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

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-full border-2 border-foreground text-foreground hover:bg-foreground/5 bg-transparent"
                asChild
              >
                <Link href="/reset-password">Forgot Password?</Link>
              </Button>
              <Button
                type="submit"
                className="flex-1 rounded-full bg-[#4ade80] hover:bg-[#3bc970] text-white font-medium"
              >
                Sign in
              </Button>
            </div>

            <div className="text-center text-sm">
              <span className="text-foreground/70">Do not have an account? </span>
              <Link href="/register" className="text-foreground font-medium underline">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
