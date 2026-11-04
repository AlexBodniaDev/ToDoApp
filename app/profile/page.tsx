"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { User, Mail, Calendar, CheckCircle2, Clock, TrendingUp } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"

interface Task {
  id: string
  title: string
  description: string
  items: string[]
  date?: string
  time?: string
  completed: boolean
}

export default function ProfilePage() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    todayTasks: 0,
  })

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated")
    if (!isAuth) {
      router.push("/signin")
      return
    }

    const email = localStorage.getItem("userEmail") || "user@example.com"
    setUserEmail(email)

    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      const parsedTasks: Task[] = JSON.parse(savedTasks)
      setTasks(parsedTasks)

      const today = new Date().toISOString().split("T")[0]
      const completed = parsedTasks.filter((t) => t.completed).length
      const todayTasks = parsedTasks.filter((t) => t.date === today).length

      setStats({
        total: parsedTasks.length,
        completed,
        pending: parsedTasks.length - completed,
        todayTasks,
      })
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/signin")
  }

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="flex-1">
        <div className="text-center py-4 border-b border-border">
          <h1 className="text-sm font-medium text-foreground">Profile</h1>
        </div>

        <div className="px-4 py-6">
          <div className="bg-muted/30 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#4ade80] rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground mb-1">Welcome back!</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{userEmail}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Your Statistics</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4ade80]" />
                  <span className="text-xs text-muted-foreground">Total Tasks</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4ade80]" />
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#f59e0b]" />
                  <span className="text-xs text-muted-foreground">Pending</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#3b82f6]" />
                  <span className="text-xs text-muted-foreground">Today</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stats.todayTasks}</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#4ade80]" />
                <span className="text-sm font-medium text-foreground">Completion Rate</span>
              </div>
              <span className="text-lg font-bold text-[#4ade80]">{completionRate}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-[#4ade80] h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => router.push("/reset-password")}
              variant="outline"
              className="w-full justify-start h-12 text-foreground border-border"
            >
              Change Password
            </Button>
            <Button onClick={handleLogout} className="w-full h-12 bg-[#ef4444] hover:bg-[#dc2626] text-white">
              Logout
            </Button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
