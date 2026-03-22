import { StateCreator } from "zustand"

export type Workout = {
  id: string
  name: string
  date: Date
  duration: number
  exercises: number
  volume: number
  tags: string[]
}

export type WorkoutDialogSlice = {
  // Dialog states
  isSheetOpen: boolean
  showExerciseDialog: boolean
  deletingWorkout: Workout | null
  editingWorkoutId: string | null

  // Actions
  setIsSheetOpen: (open: boolean) => void
  setShowExerciseDialog: (show: boolean) => void
  setDeletingWorkout: (workout: Workout | null) => void
  openEditSheet: (workout: Workout) => void
  openDeleteDialog: (workout: Workout) => void
  closeAllDialogs: () => void
}

export const createWorkoutDialogSlice: StateCreator<WorkoutDialogSlice, [], [], WorkoutDialogSlice> = (
  set
) => ({
  // Initial state
  isSheetOpen: false,
  showExerciseDialog: false,
  deletingWorkout: null,
  editingWorkoutId: null,

  // Actions
  setIsSheetOpen: (isSheetOpen) => set({ isSheetOpen }),
  setShowExerciseDialog: (showExerciseDialog) => set({ showExerciseDialog }),
  setDeletingWorkout: (deletingWorkout) => set({ deletingWorkout }),
  openEditSheet: (workout) =>
    set({
      isSheetOpen: true,
      deletingWorkout: null,
      editingWorkoutId: workout.id,
    }),
  openDeleteDialog: (workout) =>
    set({
      deletingWorkout: workout,
    }),
  closeAllDialogs: () =>
    set({
      isSheetOpen: false,
      showExerciseDialog: false,
      deletingWorkout: null,
      editingWorkoutId: null,
    }),
})
