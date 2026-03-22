"use client"

import { Home, Dumbbell, Calendar, Target, TrendingUp, Settings, Folder, Search, ListTodo, CalendarRange, Scale, Trophy, Timer, Weight, Tag, Download } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const overviewItems = [
  {
    title: "Dashboard",
    url: "/home",
    icon: Home,
  },
]

const trainingItems = [
  {
    title: "Workouts",
    url: "/workouts",
    icon: Dumbbell,
  },
  {
    title: "Routines",
    url: "/routines",
    icon: ListTodo,
  },
  {
    title: "Programs",
    url: "/programs",
    icon: CalendarRange,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
]

const libraryItems = [
  {
    title: "Exercises",
    url: "/exercises",
    icon: Folder,
  },
  {
    title: "Equipment",
    url: "/equipment",
    icon: Weight,
  },
  {
    title: "Tags",
    url: "/tags",
    icon: Tag,
  },
]

const trackingItems = [
  {
    title: "Goals",
    url: "/goals",
    icon: Target,
  },
  {
    title: "Progress",
    url: "/progress",
    icon: TrendingUp,
  },
  {
    title: "Bodyweight",
    url: "/bodyweight",
    icon: Scale,
  },
  {
    title: "Personal Records",
    url: "/records",
    icon: Trophy,
  },
]

const toolsItems = [
  {
    title: "Rest Timer",
    url: "/timer",
    icon: Timer,
  },
  {
    title: "Export",
    url: "/export",
    icon: Download,
  },
]

const bottomMenuItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

function SidebarGroupComponent({ title, items }: { title: string; items: typeof overviewItems }) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-2">{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  className={cn(
                    "flex items-center gap-2 rounded-none",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="border-b border-border h-14">
        <Link href="/home" className="flex items-center gap-2 px-2 py-1">
          <Dumbbell className="h-6 w-6" />
          <span className="font-mono text-sm font-semibold tracking-tight">STRONG</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="px-2 py-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="h-8 rounded-none pl-8 bg-background"
              />
            </div>
          </div>
        </SidebarGroup>
        <SidebarGroupComponent title="Overview" items={overviewItems} />
        <SidebarGroupComponent title="Training" items={trainingItems} />
        <SidebarGroupComponent title="Library" items={libraryItems} />
        <SidebarGroupComponent title="Tracking" items={trackingItems} />
        <SidebarGroupComponent title="Tools" items={toolsItems} />
      </SidebarContent>
      <SidebarFooter className="border-t border-border">
        <SidebarMenu>
          {bottomMenuItems.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 rounded-none"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
