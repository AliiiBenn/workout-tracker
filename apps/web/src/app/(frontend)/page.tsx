import { AppHeader } from "@/components/headers/app-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, TrendingUp, Calendar, Target, Flame, Trophy, Activity } from "lucide-react"

export default async function HomePage() {
  return (
    <>
      <AppHeader />
      <div className="max-w-5xl mx-auto border-x border-border">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6 max-w-2xl">
              Track your training with precision
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              The terminal-inspired workout tracker for serious athletes.
              Log sets, analyze progress, and crush your goals.
            </p>
            <div className="flex gap-4">
              <Button asChild className="rounded-none">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-none">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-6">
                <Dumbbell className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Log Workouts</h3>
                <p className="text-sm text-muted-foreground">
                  Track every set, rep, and weight with precision.
                </p>
              </div>
              <div className="p-6">
                <TrendingUp className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Analyze Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize your gains with detailed charts and stats.
                </p>
              </div>
              <div className="p-6">
                <Calendar className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Plan Training</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule sessions and follow structured routines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="grid grid-cols-2 divide-x divide-y divide-border">
            <div className="p-6">
              <Target className="h-6 w-6 mb-4" />
              <h3 className="font-semibold mb-2">Set Goals</h3>
              <p className="text-sm text-muted-foreground">
                Define your targets and track your journey toward achieving them.
              </p>
            </div>
            <div className="p-6">
              <Flame className="h-6 w-6 mb-4" />
              <h3 className="font-semibold mb-2">Build Streaks</h3>
              <p className="text-sm text-muted-foreground">
                Stay consistent with workout streaks and unlock achievements.
              </p>
            </div>
            <div className="p-6">
              <Trophy className="h-6 w-6 mb-4" />
              <h3 className="font-semibold mb-2">Track PRs</h3>
              <p className="text-sm text-muted-foreground">
                Record your personal records and celebrate your progress.
              </p>
            </div>
            <div className="p-6">
              <Activity className="h-6 w-6 mb-4" />
              <h3 className="font-semibold mb-2">Monitor Health</h3>
              <p className="text-sm text-muted-foreground">
                Track bodyweight and other metrics over time.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to start?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of athletes tracking their progress.
            </p>
            <Button asChild className="rounded-none">
              <Link href="/register">Create Free Account</Link>
            </Button>
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5" />
                <span className="font-mono text-sm font-semibold tracking-tight">STRONG</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Built for athletes who demand precision.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
