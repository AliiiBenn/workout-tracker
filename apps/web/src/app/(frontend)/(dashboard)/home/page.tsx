import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function HomePage() {
  const headersList = await headers()
  const session = await auth.api.getSession({
    headers: headersList,
  })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-mono font-bold">Welcome, {session?.user.name}</h1>
    </div>
  )
}
