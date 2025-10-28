"use client"

import { usePathname, useRouter } from "next/navigation"
import { Search, Home, User, Settings } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { icon: Search, label: "Search", path: "/search" },
    { icon: Home, label: "Home", path: "/home" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-3 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <Icon
                className={`w-6 h-6 ${isActive ? "text-[#4ade80]" : "text-foreground"}`}
                fill={isActive ? "#4ade80" : "none"}
              />
              <span className={`text-xs ${isActive ? "text-[#4ade80] font-medium" : "text-foreground"}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
