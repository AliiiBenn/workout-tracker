"use client"

import { create } from "zustand"
import {
  createWorkoutListSlice,
  WorkoutListSlice,
  createWorkoutFormSlice,
  WorkoutFormSlice,
  createWorkoutDialogSlice,
  WorkoutDialogSlice,
} from "./slices"

export type WorkoutStore = WorkoutListSlice & WorkoutFormSlice & WorkoutDialogSlice

export const useWorkoutStore = create<WorkoutStore>()((...args) => ({
  ...createWorkoutListSlice(...args),
  ...createWorkoutFormSlice(...args),
  ...createWorkoutDialogSlice(...args),
}))
