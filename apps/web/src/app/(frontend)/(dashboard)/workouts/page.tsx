"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { WorkoutStats, WorkoutList, NewWorkoutSheet, ExerciseDialog } from "@/components/workouts"
import { useWorkoutStore } from "@/stores/workout"
import { useWorkouts } from "@/hooks/use-workouts"
import { Plus } from "lucide-react"

export default function WorkoutsPage() {
  const store = useWorkoutStore()
  const { deleteWorkout } = useWorkouts()

  const handleConfirmDelete = () => {
    if (store.deletingWorkout) {
      deleteWorkout(store.deletingWorkout.id)
      store.setDeletingWorkout(null)
    }
  }

  const handleAddExercise = (exerciseName: string) => {
    const newExercise = {
      id: Date.now().toString(),
      name: exerciseName,
      sets: [{ reps: "", weight: "" }],
    }
    store.addExercise(newExercise)
    store.setShowExerciseDialog(false)
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-mono font-bold">Workouts</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Track and manage your training sessions
          </p>
        </div>
        <Button className="rounded-none" onClick={() => store.setIsSheetOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Workout
        </Button>
      </div>

      {/* Stats */}
      <WorkoutStats />

      {/* Workouts List */}
      <WorkoutList />

      {/* New Workout Sheet */}
      <NewWorkoutSheet
        open={store.isSheetOpen}
        onOpenChange={store.setIsSheetOpen}
        onAddExercise={() => store.setShowExerciseDialog(true)}
        exercises={store.exercises}
        workoutName={store.workoutName}
        notes={store.notes}
        setWorkoutName={store.setWorkoutName}
        setNotes={store.setNotes}
        addExercise={handleAddExercise}
        removeExercise={store.removeExercise}
        addSet={store.addSet}
        updateSet={store.updateSet}
        removeSet={store.removeSet}
        title={store.editingWorkoutId ? "Edit Workout" : "New Workout"}
      />

      {/* Exercise Selection Dialog */}
      <ExerciseDialog
        open={store.showExerciseDialog}
        onOpenChange={store.setShowExerciseDialog}
        onSelect={handleAddExercise}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!store.deletingWorkout} onOpenChange={() => store.setDeletingWorkout(null)}>
        <DialogContent className="rounded-none">
          <DialogHeader>
            <DialogTitle>Delete Workout</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{store.deletingWorkout?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => store.setDeletingWorkout(null)} className="rounded-none">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete} className="rounded-none">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
