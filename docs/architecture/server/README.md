# Server Architecture

## Overview

The server provides a clean API layer over the database. All operations are manually written functions - no ORM generators or auto-generated code.

## Structure

```
/app
  /api                # Core API layer (database operations)
    index.ts         # Main entry - exports api object
    /movements       # Movement operations
    /sessions        # Session operations
    /sets            # Set operations
    /bodyweight      # Bodyweight operations
    /tags            # Tag operations
    /routines        # Routine operations
    /goals           # Goal operations
    /scheduling      # Scheduling operations
    /programs        # Program operations
    /user            # User operations
    /unlocks         # Unlock operations
  /actions            # Next.js Server Actions wrapper
    index.ts         # Exports all actions
    /movements.ts    # Movement actions
    /sessions.ts      # Session actions
    /sets.ts          # Set actions
    ...
```

## API Usage

All operations are accessed through a single `api` object:

```typescript
import { api } from './api'

// Create a movement
const movement = await api.movements.create({
  name: 'Push-ups',
  category: 'calisthenics',
  muscleGroup: 'chest'
})

// Get all sessions
const sessions = await api.sessions.list({ limit: 10 })

// Create a set
const set = await api.sets.create({
  movementId: 'movement-123',
  repetitions: 12,
  weight: 0,
  sessionId: 'session-456'
})
```

## Technology Stack

### Backend
- **PayloadCMS** - Database and admin panel
- **Next.js** - Server and API

### Frontend
- **TanStack Query** - Data fetching and caching
- **TanStack Table** - Data tables with sorting and filtering
- **Zustand** - Client state management
- **nuqs** - URL query state management
- **better-auth** - Authentication

### CLI
- **Ink** or **Commander** - CLI framework (TBD)

## Design Principles

1. **Manual functions** - Each operation is explicitly written
2. **Consistent interface** - All modules follow the same pattern
3. **Type-safe** - Full TypeScript support
4. **PayloadCMS integration** - Uses Payload's database access
5. **Single entry point** - Everything accessible via `api` object
6. **Layer separation** - API for logic, Actions for Next.js integration
7. **Reusability** - API can be used by CLI, actions are for web only

## Actions Layer

The `actions` folder contains Next.js Server Actions that wrap the API layer.

```
Why separate?
├── api: Pure business logic, no framework dependencies
└── actions: Next.js server actions that call api internally
```

```typescript
// /app/actions/movements.ts

'use server'

import { api } from '../api'

export async function createMovement(data: {
  name: string
  category: string
  muscleGroup: string
}) {
  // Call the API layer
  return await api.movements.create(data)
}

export async function listMovements(options?: {
  limit?: number
  category?: string
}) {
  return await api.movements.list(options)
}

export async function deleteMovement(id: string) {
  return await api.movements.delete(id)
}
```

```typescript
// /app/actions/index.ts

export { createMovement, listMovements, deleteMovement } from './movements'
export { createSession, listSessions } from './sessions'
// ... exports from other modules
```

**Usage in components:**
```typescript
import { createMovement, listMovements } from '@/actions'

// In a server component or action handler
await createMovement({
  name: 'Push-ups',
  category: 'calisthenics',
  muscleGroup: 'chest'
})
```

## Example: Movements Module

```typescript
// /app/api/movements/index.ts

export interface Movement {
  id: string
  name: string
  category: string
  muscleGroup: string
  subMuscle?: string
  equipment?: string
}

export interface CreateMovementInput {
  name: string
  category: string
  muscleGroup: string
  subMuscle?: string
  equipment?: string
}

export interface ListMovementsOptions {
  limit?: number
  offset?: number
  category?: string
  muscleGroup?: string
}

export const movements = {
  async create(input: CreateMovementInput): Promise<Movement> {
    // Manually write the query
    const result = await payload.create({
      collection: 'movements',
      data: input
    })
    return result
  },

  async list(options: ListMovementsOptions = {}): Promise<Movement[]> {
    const { limit = 10, offset = 0, category, muscleGroup } = options

    const where: any = {}
    if (category) where.category = { equals: category }
    if (muscleGroup) where.muscleGroup = { equals: muscleGroup }

    const result = await payload.find({
      collection: 'movements',
      where,
      limit,
      offset
    })

    return result.docs
  },

  async get(id: string): Promise<Movement | null> {
    const result = await payload.findByID({
      collection: 'movements',
      id
    })
    return result || null
  },

  async update(id: string, input: Partial<CreateMovementInput>): Promise<Movement> {
    const result = await payload.update({
      collection: 'movements',
      id,
      data: input
    })
    return result
  },

  async delete(id: string): Promise<void> {
    await payload.delete({
      collection: 'movements',
      id
    })
  }
}
```

```typescript
// /app/api/index.ts

import { movements } from './movements'
import { sessions } from './sessions'
import { sets } from './sets'
// ... other modules

export const api = {
  movements,
  sessions,
  sets,
  // ... other modules
}
```

## Example: Using the API

```typescript
import { api } from './api'

// CLI would call these functions directly
async function main() {
  // Create a movement
  const pushups = await api.movements.create({
    name: 'Push-ups',
    category: 'calisthenics',
    muscleGroup: 'chest'
  })

  // List movements filtered by category
  const chestMovements = await api.movements.list({
    category: 'calisthenics',
    muscleGroup: 'chest'
  })

  console.log(chestMovements)
}

main()
```
