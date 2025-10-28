"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, X } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { TaskCard } from "@/components/task-card"

interface Task {
  id: string
  title: string
  description: string
  items: string[]
  date?: string
  time?: string
  completed: boolean
}

export default function SearchPage() {
  const router = useRouter()
  const [tasks, setTasks] = useState<Task[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated")
    if (!isAuth) {
      router.push("/signin")
      return
    }

    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [router])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTasks([])
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = tasks.filter((task) => {
      const titleMatch = task.title.toLowerCase().includes(query)
      const descriptionMatch = task.description.toLowerCase().includes(query)
      const itemsMatch = task.items.some((item) => item.toLowerCase().includes(query))
      return titleMatch || descriptionMatch || itemsMatch
    })

    setFilteredTasks(filtered)
  }, [searchQuery, tasks])

  const handleToggleComplete = (taskId: string) => {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="flex-1">
        <div className="text-center py-4 border-b border-border">
          <h1 className="text-sm font-medium text-foreground">Search</h1>
        </div>

        <div className="px-4 py-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="mt-6">
            {searchQuery.trim() === "" ? (
              <div className="text-center py-12">
                <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Start typing to search your tasks</p>
              </div>
            ) : filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No tasks found</p>
                <p className="text-sm text-muted-foreground mt-2">Try a different search term</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Found {filteredTasks.length} task{filteredTasks.length !== 1 ? "s" : ""}
                </p>
                {filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    isSelected={false}
                    onSelect={() => {}}
                    onToggleComplete={handleToggleComplete}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
