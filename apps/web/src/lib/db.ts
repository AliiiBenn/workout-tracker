import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

// Use the same DATABASE_URL as PayloadCMS
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const db = drizzle(pool)
