import { StateCreator } from "zustand"

export type ExerciseSet = {
  reps: string
  weight: string
}

export type Exercise = {
  id: string
  name: string
  sets: ExerciseSet[]
}

export type WorkoutFormSlice = {
  // Form state
  workoutName: string
  notes: string
  exercises: Exercise[]
  editingWorkoutId: string | null

  // Actions
  setWorkoutName: (name: string) => void
  setNotes: (notes: string) => void
  addExercise: (exercise: Exercise) => void
  removeExercise: (id: string) => void
  updateExercise: (id: string, exercise: Exercise) => void
  addSet: (exerciseId: string) => void
  updateSet: (exerciseId: string, setIndex: number, field: "reps" | "weight", value: string) => void
  removeSet: (exerciseId: string, setIndex: number) => void
  setEditingWorkoutId: (id: string | null) => void
  resetForm: () => void
}

const initialExercises: Exercise[] = []

export const createWorkoutFormSlice: StateCreator<WorkoutFormSlice, [], [], WorkoutFormSlice> = (set) => ({
  // Initial state
  workoutName: "",
  notes: "",
  exercises: initialExercises,
  editingWorkoutId: null,

  // Actions
  setWorkoutName: (workoutName) => set({ workoutName }),
  setNotes: (notes) => set({ notes }),
  addExercise: (exercise) =>
    set((state) => ({ exercises: [...state.exercises, exercise] })),
  removeExercise: (id) =>
    set((state) => ({
      exercises: state.exercises.filter((e) => e.id !== id),
    })),
  updateExercise: (id, exercise) =>
    set((state) => ({
      exercises: state.exercises.map((e) => (e.id === id ? exercise : e)),
    })),
  addSet: (exerciseId) =>
    set((state) => ({
      exercises: state.exercises.map((e) =>
        e.id === exerciseId ? { ...e, sets: [...e.sets, { reps: "", weight: "" }] } : e
      ),
    })),
  updateSet: (exerciseId, setIndex, field, value) =>
    set((state) => ({
      exercises: state.exercises.map((e) => {
        if (e.id === exerciseId) {
          const newSets = [...e.sets]
          newSets[setIndex] = { ...newSets[setIndex], [field]: value }
          return { ...e, sets: newSets }
        }
        return e
      }),
    })),
  removeSet: (exerciseId, setIndex) =>
    set((state) => ({
      exercises: state.exercises.map((e) => {
        if (e.id === exerciseId) {
          return { ...e, sets: e.sets.filter((_, i) => i !== setIndex) }
        }
        return e
      }),
    })),
  setEditingWorkoutId: (editingWorkoutId) => set({ editingWorkoutId }),
  resetForm: () =>
    set({
      workoutName: "",
      notes: "",
      exercises: initialExercises,
      editingWorkoutId: null,
    }),
})
