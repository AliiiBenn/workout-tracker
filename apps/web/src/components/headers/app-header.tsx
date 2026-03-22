import { Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AppHeader() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6" />
          <span className="font-mono text-sm font-semibold tracking-tight">STRONG</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="rounded-none">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="rounded-none">
            <Link href="/register">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
