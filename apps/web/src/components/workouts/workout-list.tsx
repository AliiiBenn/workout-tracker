"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { format } from "date-fns"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, ChevronLeft, ChevronRight, Dumbbell, Edit, Trash2 } from "lucide-react"
import { useWorkoutStore } from "@/stores/workout"
import { useWorkouts, WorkoutData } from "@/hooks/use-workouts"

const tagOptions = ["all", "push", "pull", "legs", "upper", "full", "strength", "hypertrophy", "hiit"]

export function WorkoutList() {
  const store = useWorkoutStore()
  const { workouts, totalWorkouts, totalPages } = useWorkouts()

  const columns: ColumnDef<WorkoutData>[] = React.useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <span
            className="font-medium cursor-pointer hover:underline"
            onClick={() => store.openEditSheet(row.original)}
          >
            {row.getValue("name")}
          </span>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => format(row.getValue("date") as Date, "MMM dd, yyyy"),
      },
      {
        accessorKey: "duration",
        header: "Duration",
        cell: ({ row }) => `${row.getValue("duration")} min`,
      },
      {
        accessorKey: "exercises",
        header: "Exercises",
        cell: ({ row }) => row.getValue("exercises"),
      },
      {
        accessorKey: "volume",
        header: "Volume",
        cell: ({ row }) => `${(row.getValue("volume") as number).toLocaleString()} kg`,
      },
      {
        accessorKey: "tags",
        header: "Tags",
        cell: ({ row }) => (
          <div className="flex gap-1 flex-wrap">
            {(row.getValue("tags") as string[]).map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs bg-secondary rounded-none">
                {tag}
              </span>
            ))}
          </div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const workout = row.original
          return (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={(e) => {
                  e.stopPropagation()
                  store.openEditSheet(workout)
                }}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none text-destructive hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  store.openDeleteDialog(workout)
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )
        },
      },
    ],
    [store]
  )

  const table = useReactTable({
    data: workouts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: store.sorting,
    },
    onSortingChange: store.setSorting,
  })

  return (
    <div>
      <h2 className="text-lg font-mono font-semibold mb-4">Recent Workouts</h2>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search workouts..."
            value={store.search}
            onChange={(e) => store.setSearch(e.target.value)}
            className="pl-8 rounded-none"
          />
        </div>
        <select
          className="h-8 w-[180px] rounded-none border border-input bg-background px-3 py-1 text-sm"
          value={store.tag}
          onChange={(e) => store.setTag(e.target.value)}
        >
          {tagOptions.map((tag) => (
            <option key={tag} value={tag}>
              {tag === "all" ? "All Tags" : tag}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <Card className="rounded-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-muted/50 cursor-pointer"
                  onClick={() => store.openEditSheet(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <div className="flex flex-col items-center text-muted-foreground py-8">
                    <Dumbbell className="h-12 w-12 mb-4 opacity-50" />
                    <p>No workouts found</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {store.pageIndex * store.pageSize + 1} to{" "}
          {Math.min((store.pageIndex + 1) * store.pageSize, totalWorkouts)} of {totalWorkouts} workouts
        </div>
        <div className="flex items-center gap-2">
          <select
            className="h-8 w-[80px] rounded-none border border-input bg-background px-2 py-1 text-sm"
            value={store.pageSize.toString()}
            onChange={(e) => store.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size.toString()}>
                {size}
              </option>
            ))}
          </select>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => store.setPageIndex(store.pageIndex - 1)}
              disabled={store.pageIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => store.setPageIndex(store.pageIndex + 1)}
              disabled={store.pageIndex >= totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
