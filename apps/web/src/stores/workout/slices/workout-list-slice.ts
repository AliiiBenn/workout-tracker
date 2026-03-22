import { StateCreator } from "zustand"
import { SortingState } from "@tanstack/react-table"

export type WorkoutListSlice = {
  // Filters
  search: string
  tag: string
  pageSize: number
  pageIndex: number
  sorting: SortingState

  // Selection
  selectedWorkoutId: string | null

  // Actions
  setSearch: (search: string) => void
  setTag: (tag: string) => void
  setPageSize: (pageSize: number) => void
  setPageIndex: (pageIndex: number) => void
  setSorting: (sorting: SortingState | ((prev: SortingState) => SortingState)) => void
  setSelectedWorkoutId: (id: string | null) => void
}

export const createWorkoutListSlice: StateCreator<WorkoutListSlice, [], [], WorkoutListSlice> = (set) => ({
  // Initial state
  search: "",
  tag: "all",
  pageSize: 5,
  pageIndex: 0,
  sorting: [],
  selectedWorkoutId: null,

  // Actions
  setSearch: (search) => set({ search, pageIndex: 0 }),
  setTag: (tag) => set({ tag, pageIndex: 0 }),
  setPageSize: (pageSize) => set({ pageSize, pageIndex: 0 }),
  setPageIndex: (pageIndex) => set({ pageIndex }),
  setSorting: (sorting) =>
    set((state) => ({
      sorting: typeof sorting === "function" ? sorting(state.sorting) : sorting,
    })),
  setSelectedWorkoutId: (selectedWorkoutId) => set({ selectedWorkoutId }),
})
