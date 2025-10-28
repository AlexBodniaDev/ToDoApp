"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BottomNav } from "@/components/bottom-nav"
import { DatePicker } from "@/components/date-picker"
import { TimePicker } from "@/components/time-picker"

export default function AddTaskPage() {
  const router = useRouter()
  const [taskName, setTaskName] = useState("")
  const [description, setDescription] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleAddTask = () => {
    if (!taskName.trim()) return

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    const items = description
      .split("\n")
      .filter((item) => item.trim())
      .map((item, index) => `${index + 1}. ${item.trim()}`)

    const newTask = {
      id: Date.now().toString(),
      title: taskName,
      description,
      items: items.length > 0 ? items : ["1. " + taskName],
      date: selectedDate?.toLocaleDateString(),
      time: selectedTime,
      completed: false,
    }

    tasks.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    router.push("/home")
  }

  return (
    <>
      <div className="min-h-screen bg-background flex flex-col pb-20">
        <div className="flex-1">
          <div className="text-center py-4 border-b border-border">
            <h1 className="text-sm font-medium text-foreground">Add new task</h1>
          </div>

          <div className="px-4 py-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-1 text-foreground mb-6 hover:opacity-70"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back</span>
              </button>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name of Task:</label>
                  <Input
                    placeholder="Type here:"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="bg-muted border-0 placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Description:</label>
                  <Textarea
                    placeholder="Type here:"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-muted border-0 min-h-[120px] placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowDatePicker(true)}
                    className="flex-1 justify-between rounded-lg border-2 border-foreground text-foreground hover:bg-foreground/5"
                  >
                    <span>{selectedDate ? selectedDate.toLocaleDateString() : "Pick date"}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowTimePicker(true)}
                    className="flex-1 justify-between rounded-lg border-2 border-foreground text-foreground hover:bg-foreground/5"
                  >
                    <span>{selectedTime || "Pick time"}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  onClick={handleAddTask}
                  className="w-full bg-[#4ade80] hover:bg-[#3bc970] text-white rounded-lg py-6 font-medium"
                >
                  Add task
                </Button>
              </div>
            </div>
          </div>
        </div>

        <BottomNav />
      </div>

      {showDatePicker && (
        <DatePicker selectedDate={selectedDate} onSelect={setSelectedDate} onClose={() => setShowDatePicker(false)} />
      )}

      {showTimePicker && (
        <TimePicker selectedTime={selectedTime} onSelect={setSelectedTime} onClose={() => setShowTimePicker(false)} />
      )}
    </>
  )
}
