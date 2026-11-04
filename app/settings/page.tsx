"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Moon, Sun, Trash2, Bell, Lock, Info, ChevronRight } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated")
    if (!isAuth) {
      router.push("/signin")
      return
    }

    const darkMode = localStorage.getItem("darkMode") === "true"
    setIsDarkMode(darkMode)
    if (darkMode) {
      document.documentElement.classList.add("dark")
    }

    const notifPref = localStorage.getItem("notifications") !== "false"
    setNotifications(notifPref)
  }, [router])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))

    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleNotifications = () => {
    const newValue = !notifications
    setNotifications(newValue)
    localStorage.setItem("notifications", String(newValue))
  }

  const handleResetApp = () => {
    localStorage.removeItem("tasks")
    setShowResetConfirm(false)
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="flex-1">
        <div className="text-center py-4 border-b border-border">
          <h1 className="text-sm font-medium text-foreground">Settings</h1>
        </div>

        <div className="px-4 py-6">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Appearance</h3>
            <div className="bg-muted/30 rounded-xl overflow-hidden">
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isDarkMode ? (
                    <Moon className="w-5 h-5 text-[#4ade80]" />
                  ) : (
                    <Sun className="w-5 h-5 text-[#f59e0b]" />
                  )}
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Dark Mode</p>
                    <p className="text-xs text-muted-foreground">{isDarkMode ? "Enabled" : "Disabled"}</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full transition-colors ${isDarkMode ? "bg-[#4ade80]" : "bg-muted"}`}>
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform mt-0.5 ${
                      isDarkMode ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Notifications</h3>
            <div className="bg-muted/30 rounded-xl overflow-hidden">
              <button
                onClick={toggleNotifications}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#4ade80]" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Push Notifications</p>
                    <p className="text-xs text-muted-foreground">Get notified about tasks</p>
                  </div>
                </div>
                <div
                  className={`w-12 h-6 rounded-full transition-colors ${notifications ? "bg-[#4ade80]" : "bg-muted"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform mt-0.5 ${
                      notifications ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Security</h3>
            <div className="bg-muted/30 rounded-xl overflow-hidden">
              <button
                onClick={() => router.push("/reset-password")}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-foreground" />
                  <p className="text-sm font-medium text-foreground">Change Password</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Data</h3>
            <div className="bg-muted/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-[#ef4444]" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Reset App</p>
                    <p className="text-xs text-muted-foreground">Delete all tasks and data</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">About</h3>
            <div className="bg-muted/30 rounded-xl overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Info className="w-5 h-5 text-foreground" />
                  <p className="text-sm font-medium text-foreground">App Version</p>
                </div>
                <p className="text-xs text-muted-foreground ml-8">1.0.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-background rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-foreground mb-2">Reset App?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              This will permanently delete all your tasks and data. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setShowResetConfirm(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleResetApp} className="flex-1 bg-[#ef4444] hover:bg-[#dc2626] text-white">
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
