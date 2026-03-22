"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { AppHeader } from "@/components/headers/app-header"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-[360px] rounded-none border-border">
          <CardHeader className="space-y-1 pb-4 pt-6 px-6 border-b border-border">
            <CardTitle className="text-xl font-semibold tracking-tight">
              Sign In
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Enter your email to access your account.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6 pt-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="h-9 rounded-none"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-medium">
                    Password
                  </Label>
                  <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Forgot?
                  </Link>
                </div>
                <PasswordInput
                  id="password"
                  required
                  className="h-9"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 rounded-none"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-3 w-3 animate-spin rounded-none border-2 border-primary-foreground border-t-transparent" />
                    Authenticating...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-4 border-t border-border flex flex-col gap-4">
            <div className="text-center text-xs text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-foreground hover:underline underline-offset-4 transition-colors">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
