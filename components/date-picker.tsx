"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DatePickerProps {
  selectedDate: Date | null
  onSelect: (date: Date) => void
  onClose: () => void
}

export function DatePicker({ selectedDate, onSelect, onClose }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate ? new Date(selectedDate) : new Date())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleDateSelect = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    onSelect(date)
  }

  const handleDone = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl w-full max-w-md">
        <div className="text-center py-4 border-b border-border">
          <h2 className="text-sm font-medium text-foreground">Pick Date</h2>
        </div>

        <div className="p-6">
          <button onClick={onClose} className="flex items-center gap-1 text-foreground mb-6 hover:opacity-70">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-foreground mb-4">Pick date:</label>

            <div className="bg-muted rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <button onClick={handlePrevMonth} className="p-1 hover:bg-background rounded">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-medium">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </span>
                <button onClick={handleNextMonth} className="p-1 hover:bg-background rounded">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-foreground/70">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={`empty-${index}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1
                  const isSelected =
                    selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === currentMonth.getMonth() &&
                    selectedDate.getFullYear() === currentMonth.getFullYear()

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateSelect(day)}
                      className={`aspect-square rounded-full flex items-center justify-center text-sm transition-colors ${
                        isSelected ? "bg-[#4ade80] text-white font-medium" : "hover:bg-background text-foreground"
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <Button
            onClick={handleDone}
            className="w-full bg-[#4ade80] hover:bg-[#3bc970] text-white rounded-lg py-6 font-medium"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  )
}
