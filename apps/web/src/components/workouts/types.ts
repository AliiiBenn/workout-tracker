export type ExerciseSet = {
  reps: string
  weight: string
}

export type Exercise = {
  id: string
  name: string
  sets: ExerciseSet[]
}

export const availableExercises = [
  "Bench Press",
  "Squat",
  "Deadlift",
  "Overhead Press",
  "Barbell Row",
  "Pull-ups",
  "Dips",
  "Lunges",
  "Bicep Curls",
  "Tricep Extensions",
]
