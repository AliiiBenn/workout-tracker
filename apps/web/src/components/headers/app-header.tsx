"use client"

import { useSession, authClient } from "@/lib/auth-client"
import { Dumbbell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function AppHeader() {
  const { data: session } = useSession()
  const router = useRouter()
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const handleLogout = async () => {
    await authClient.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <header className="border-b border-border h-14">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6" />
          <span className="font-mono text-sm font-semibold tracking-tight">STRONG</span>
        </Link>
        <div className="flex items-center gap-2">
          {session ? (
            <>
              <Button variant="outline" asChild className="rounded-none">
                <Link href="/home">Dashboard</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 rounded-none cursor-pointer">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${encodeURIComponent(session.user.name || session.user.email)}`}
                      alt={session.user.name || session.user.email}
                    />
                    <AvatarFallback className="rounded-none">
                      {session.user.name?.[0] || session.user.email[0]}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-none">
                  <DropdownMenuItem
                    className="cursor-pointer text-red-500 focus:text-red-500"
                    onSelect={() => setShowLogoutDialog(true)}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="outline" asChild className="rounded-none">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="rounded-none">
                <Link href="/register">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>

      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="rounded-none">
          <DialogHeader>
            <DialogTitle>Log out</DialogTitle>
            <DialogDescription>
              Are you sure you want to log out?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowLogoutDialog(false)} className="rounded-none">
              Cancel
            </Button>
            <Button onClick={handleLogout} className="rounded-none">
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
