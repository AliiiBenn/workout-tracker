import { useMemo } from "react"
import { useWorkoutStore } from "@/stores/workout"

// Types
export type WorkoutData = {
  id: string
  name: string
  date: Date
  duration: number
  exercises: number
  volume: number
  tags: string[]
}

// Dummy data
const dummyWorkouts: WorkoutData[] = [
  {
    id: "1",
    name: "Push Day A",
    date: new Date("2024-03-20"),
    duration: 65,
    exercises: 6,
    volume: 4500,
    tags: ["push", "strength"],
  },
  {
    id: "2",
    name: "Pull Day B",
    date: new Date("2024-03-18"),
    duration: 55,
    exercises: 5,
    volume: 3200,
    tags: ["pull", "hypertrophy"],
  },
  {
    id: "3",
    name: "Legs Day",
    date: new Date("2024-03-15"),
    duration: 75,
    exercises: 8,
    volume: 6800,
    tags: ["legs", "strength"],
  },
  {
    id: "4",
    name: "Upper Body",
    date: new Date("2024-03-13"),
    duration: 45,
    exercises: 4,
    volume: 2100,
    tags: ["upper", "hiit"],
  },
  {
    id: "5",
    name: "Push Day B",
    date: new Date("2024-03-11"),
    duration: 60,
    exercises: 6,
    volume: 4100,
    tags: ["push"],
  },
  {
    id: "6",
    name: "Pull Day A",
    date: new Date("2024-03-09"),
    duration: 50,
    exercises: 5,
    volume: 2800,
    tags: ["pull"],
  },
  {
    id: "7",
    name: "Full Body",
    date: new Date("2024-03-07"),
    duration: 70,
    exercises: 10,
    volume: 5500,
    tags: ["full", "strength"],
  },
  {
    id: "8",
    name: "Legs Day",
    date: new Date("2024-03-05"),
    duration: 80,
    exercises: 9,
    volume: 7200,
    tags: ["legs", "hypertrophy"],
  },
  {
    id: "9",
    name: "Push Day A",
    date: new Date("2024-03-03"),
    duration: 55,
    exercises: 5,
    volume: 3800,
    tags: ["push"],
  },
  {
    id: "10",
    name: "Pull Day B",
    date: new Date("2024-03-01"),
    duration: 50,
    exercises: 5,
    volume: 2900,
    tags: ["pull"],
  },
  {
    id: "11",
    name: "Upper Body",
    date: new Date("2024-02-28"),
    duration: 45,
    exercises: 4,
    volume: 2000,
    tags: ["upper"],
  },
  {
    id: "12",
    name: "Legs Day",
    date: new Date("2024-02-25"),
    duration: 85,
    exercises: 10,
    volume: 7500,
    tags: ["legs", "strength"],
  },
]

// Hook
export function useWorkouts() {
  const { search, tag, pageSize, pageIndex, sorting } = useWorkoutStore()

  const filteredWorkouts = useMemo(() => {
    let result = [...dummyWorkouts]

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (w) =>
          w.name.toLowerCase().includes(searchLower) ||
          w.tags.some((t) => t.toLowerCase().includes(searchLower))
      )
    }

    // Filter by tag
    if (tag !== "all") {
      result = result.filter((w) => w.tags.includes(tag))
    }

    // Sort
    if (sorting.length > 0) {
      const { id, desc } = sorting[0]
      result.sort((a, b) => {
        const aVal = a[id as keyof typeof a]
        const bVal = b[id as keyof typeof b]
        if (aVal < bVal) return desc ? 1 : -1
        if (aVal > bVal) return desc ? -1 : 1
        return 0
      })
    }

    return result
  }, [search, tag, sorting])

  const paginatedWorkouts = useMemo(() => {
    const start = pageIndex * pageSize
    return filteredWorkouts.slice(start, start + pageSize)
  }, [filteredWorkouts, pageIndex, pageSize])

  const totalPages = Math.ceil(filteredWorkouts.length / pageSize)

  const getWorkoutById = (id: string) => dummyWorkouts.find((w) => w.id === id)

  const deleteWorkout = (id: string) => {
    console.log("Delete workout:", id)
    // TODO: Implement actual deletion
  }

  const createWorkout = (data: Partial<WorkoutData>) => {
    console.log("Create workout:", data)
    // TODO: Implement actual creation
  }

  const updateWorkout = (id: string, data: Partial<WorkoutData>) => {
    console.log("Update workout:", id, data)
    // TODO: Implement actual update
  }

  return {
    workouts: paginatedWorkouts,
    totalWorkouts: filteredWorkouts.length,
    totalPages,
    getWorkoutById,
    deleteWorkout,
    createWorkout,
    updateWorkout,
  }
}
