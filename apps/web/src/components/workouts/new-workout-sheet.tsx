"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Plus, X, GripVertical } from "lucide-react"
import { Exercise, ExerciseSet } from "./types"

type NewWorkoutSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddExercise: () => void
  exercises: Exercise[]
  workoutName: string
  notes: string
  setWorkoutName: (name: string) => void
  setNotes: (notes: string) => void
  addExercise: (exerciseName: string) => void
  removeExercise: (id: string) => void
  addSet: (exerciseId: string) => void
  updateSet: (exerciseId: string, setIndex: number, field: "reps" | "weight", value: string) => void
  removeSet: (exerciseId: string, setIndex: number) => void
  title?: string
}

export function NewWorkoutSheet({
  open,
  onOpenChange,
  onAddExercise,
  exercises,
  workoutName,
  notes,
  setWorkoutName,
  setNotes,
  addExercise,
  removeExercise,
  addSet,
  updateSet,
  removeSet,
  title = "New Workout",
}: NewWorkoutSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[500px] sm:max-w-none rounded-none overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {title === "Edit Workout"
              ? "Modify your workout session. Update exercises and sets below."
              : "Create a new workout session. Add exercises and sets below."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Workout Name</Label>
            <Input
              id="name"
              placeholder="e.g., Push Day A"
              className="rounded-none"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any notes about this workout..."
              className="rounded-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Added Exercises */}
          {exercises.length > 0 && (
            <div className="border-t pt-4 mt-4 space-y-4">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="border rounded-none p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                      <span className="font-medium">{exercise.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeExercise(exercise.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {exercise.sets.map((set, setIndex) => (
                      <div key={setIndex} className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground w-6">{setIndex + 1}</span>
                        <Input
                          placeholder="Reps"
                          className="h-8 rounded-none"
                          value={set.reps}
                          onChange={(e) => updateSet(exercise.id, setIndex, "reps", e.target.value)}
                        />
                        <Input
                          placeholder="kg"
                          className="h-8 rounded-none w-20"
                          value={set.weight}
                          onChange={(e) => updateSet(exercise.id, setIndex, "weight", e.target.value)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeSet(exercise.id, setIndex)}
                          disabled={exercise.sets.length === 1}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 rounded-none"
                      onClick={() => addSet(exercise.id)}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add Set
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Exercise Button */}
          <div className="border-t pt-4 mt-4">
            <Button
              variant="outline"
              className="w-full rounded-none"
              onClick={onAddExercise}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Exercise
            </Button>
          </div>
        </div>
        <SheetFooter className="mt-8">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-none">
            Cancel
          </Button>
          <Button className="rounded-none">Start Workout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
