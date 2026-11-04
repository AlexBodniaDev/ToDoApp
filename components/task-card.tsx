"use client"

import type { Task } from "@/app/home/page"
import { CheckCircle2, Circle } from "lucide-react"

interface TaskCardProps {
  task: Task
  isSelected: boolean
  onSelect: (taskId: string) => void
  onToggleComplete?: (taskId: string) => void
}

export function TaskCard({ task, isSelected, onSelect, onToggleComplete }: TaskCardProps) {
  return (
    <div
      className={`bg-card rounded-2xl p-5 shadow-sm border-2 transition-colors ${
        isSelected ? "border-[#4ade80]" : "border-transparent"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className={`font-semibold text-foreground mb-3 ${task.completed ? "line-through opacity-60" : ""}`}>
            {task.title}
          </h3>
          <div className="space-y-1">
            {task.items.map((item, index) => (
              <p
                key={index}
                className={`text-sm text-foreground/80 ${task.completed ? "line-through opacity-60" : ""}`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {onToggleComplete && (
            <button
              onClick={() => onToggleComplete(task.id)}
              className="transition-transform hover:scale-110"
              aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
            >
              {task.completed ? (
                <CheckCircle2 className="w-6 h-6 text-[#4ade80]" />
              ) : (
                <Circle className="w-6 h-6 text-foreground/30 hover:text-[#4ade80]" />
              )}
            </button>
          )}

          <button
            onClick={() => onSelect(task.id)}
            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
              isSelected ? "bg-[#4ade80] border-[#4ade80]" : "border-foreground/30 hover:border-foreground/50"
            }`}
          >
            {isSelected && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 7L5.5 10.5L12 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
