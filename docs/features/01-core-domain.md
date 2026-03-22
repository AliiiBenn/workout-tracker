# Core Domain: Strength Training Tracking

## Core Concepts

### Training Register (Registre d'Entrainements)
A training register is a collection of workout sessions organized by time period. It serves as the complete log of all training history.

### Workout Session
A workout session is a single training session containing:
- **Date/Time**: When the workout took place
- **Sets**: A collection of sets performed
- **Notes**: Optional notes about the session
- **Part of**: A Training Register

### Set (Serie)
A set is a single attempt at an exercise. See `03-sets.md` for details.

## Relationships

```
Training Register
    └── Workout Session 1 (2024-01-15)
    │       └── Set 1 (Movement: Squats, 10 reps, 50kg)
    │       └── Set 2 (Movement: Squats, 8 reps, 60kg)
    │
    └── Workout Session 2 (2024-01-17)
            └── Set 1 (Movement: Push-ups, 15 reps, 0kg)
            └── Set 2 (Movement: Pull-ups, 8 reps, 0kg)
```

## Notes

- A session can have multiple sets of the same movement
- Movement details are defined in `02-movements.md`
- Set details and CLI commands are defined in `03-sets.md`
- Session details and CLI commands are defined in `04-sessions.md`
- Bodyweight tracking is defined in `05-bodyweight.md`
- Tags/labels are defined in `06-tags.md`
- Routines/templates are defined in `07-routines.md`
- Export and reports are defined in `08-export.md`
- Analysis and stats are defined in `09-analysis.md`
- Goals are defined in `10-goals.md`
- Scheduling and planning are defined in `11-scheduling.md`
- Unlocks & gamification are defined in `12-unlocks.md`
- User profile is defined in `13-profile.md`
