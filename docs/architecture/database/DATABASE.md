# Database

## Technology

We use **PayloadCMS** as our backend.

PayloadCMS provides:
- REST and GraphQL APIs
- Admin panel for data management
- Authentication
- Type-safe collections

## Collections

| Collection | Purpose |
|------------|---------|
| **movements** | Exercise library (name, category, muscle groups, progressions) |
| **sessions** | Workout sessions (date, notes, status) |
| **sets** | Individual sets within sessions (movement, reps, weight, RPE, rest, warmup) |
| **bodyweight** | Bodyweight log entries (weight, date, notes) |
| **tags** | Tags for categorizing sessions |
| **routines** | Workout templates (name, movements, sets/reps) |
| **goals** | Training goals (type, target, progress, deadline) |
| **scheduled-workouts** | Planned future workouts |
| **programs** | Multi-week training programs |
| **user** | User profile (name, goals, experience, injuries) |
| **unlocks** | Movement unlock status (movement, unlocked, conditions) |
