import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { availableExercises } from "./types"

type ExerciseDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (exerciseName: string) => void
}

export function ExerciseDialog({ open, onOpenChange, onSelect }: ExerciseDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Select Exercise</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          {availableExercises.map((exercise) => (
            <Button
              key={exercise}
              variant="outline"
              className="justify-start rounded-none"
              onClick={() => onSelect(exercise)}
            >
              {exercise}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
