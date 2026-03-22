"use client"

import { useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { AppSidebar } from "@/components/sidebars/app-sidebar"
import { AppHeader } from "@/components/headers/app-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, isPending } = useSession()
  const router = useRouter()

  if (isPending) {
    return null
  }

  if (!session) {
    router.push("/login")
    return null
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
