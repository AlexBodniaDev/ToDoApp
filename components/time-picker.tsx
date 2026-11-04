"use client"

import { useState, useEffect } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimePickerProps {
  selectedTime: string
  onSelect: (time: string) => void
  onClose: () => void
}

export function TimePicker({ selectedTime, onSelect, onClose }: TimePickerProps) {
  const [hours, setHours] = useState("12")
  const [minutes, setMinutes] = useState("00")

  useEffect(() => {
    if (selectedTime) {
      const [h, m] = selectedTime.split(":")
      setHours(h)
      setMinutes(m)
    }
  }, [selectedTime])

  const handleDone = () => {
    onSelect(`${hours}:${minutes}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl w-full max-w-md">
        <div className="text-center py-4 border-b border-border">
          <h2 className="text-sm font-medium text-foreground">Pick Time</h2>
        </div>

        <div className="p-6">
          <button onClick={onClose} className="flex items-center gap-1 text-foreground mb-6 hover:opacity-70">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-foreground mb-4">Pick time:</label>

            <div className="bg-muted rounded-xl p-8">
              <div className="flex items-center justify-center gap-4">
                <select
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="text-4xl font-medium bg-transparent border-b-2 border-foreground/20 focus:border-[#4ade80] outline-none text-center w-20"
                >
                  {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0")).map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
                <span className="text-4xl font-medium">:</span>
                <select
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="text-4xl font-medium bg-transparent border-b-2 border-foreground/20 focus:border-[#4ade80] outline-none text-center w-20"
                >
                  {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")).map((minute) => (
                    <option key={minute} value={minute}>
                      {minute}
                    </option>
                  ))}
                </select>
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
