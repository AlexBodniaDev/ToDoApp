"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { TaskCard } from "@/components/task-card"
import { EmptyState } from "@/components/empty-state"

export interface Task {
  id: string
  title: string
  description: string
  items: string[]
  date?: string
  time?: string
  completed: boolean
}

export default function HomePage() {
  const router = useRouter()
  const [tasks, setTasks] = useState<Task[]>([])
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set())

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

  const handleAddTask = () => {
    router.push("/add-task")
  }

  const handleSelectTask = (taskId: string) => {
    setSelectedTasks((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(taskId)) {
        newSet.delete(taskId)
      } else {
        newSet.add(taskId)
      }
      return newSet
    })
  }

  const handleToggleComplete = (taskId: string) => {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const handleDeleteSelected = () => {
    const updatedTasks = tasks.filter((task) => !selectedTasks.has(task.id))
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    setSelectedTasks(new Set())
  }

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="flex-1">
        <div className="text-center py-4 border-b border-border">
          <h1 className="text-sm font-medium text-foreground">Home</h1>
        </div>

        <div className="px-4 py-6">
          {tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  isSelected={selectedTasks.has(task.id)}
                  onSelect={handleSelectTask}
                  onToggleComplete={handleToggleComplete}
                />
              ))}
            </div>
          )}
        </div>

        {selectedTasks.size > 0 && (
          <div className="fixed bottom-24 left-4 right-4 z-10">
            <Button
              onClick={handleDeleteSelected}
              className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-lg py-6 font-medium"
            >
              Delete
            </Button>
          </div>
        )}

        <button
          onClick={handleAddTask}
          className="fixed bottom-28 right-6 w-14 h-14 bg-[#4ade80] hover:bg-[#3bc970] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-20"
          aria-label="Add new task"
        >
          <Plus className="w-7 h-7 text-white" strokeWidth={3} />
        </button>
      </div>

      <BottomNav />
    </div>
  )
}
