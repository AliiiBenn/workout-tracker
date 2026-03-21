# Methodology

## Project Overview

This project is a workout tracking system with two interfaces:

### AI Agent (CLI)
An AI agent uses the CLI to track the user's workouts. The agent:
- Logs sets, reps, and weights after each exercise
- Creates and manages workout sessions
- Tracks progress and provides insights
- Uses analysis commands to understand training patterns

### User (Web Dashboard)
The user uses the web dashboard to:
- View workout history and statistics
- Track progress with charts and graphs
- Manage goals and routines
- Visualize calendar and scheduled workouts
- See their overall training status

## Architecture

```
┌─────────────────┐
│  AI Agent       │ ← Uses CLI to track workouts
└────────┬────────┘
         │
         ▼
    ┌─────────┐
    │   CLI   │ ← Source of truth
    └────┬────┘
         │
         ▼
    ┌─────────┐
    │   Data  │ ← SQLite/JSON storage
    └─────────┘
         │
         ▼
┌────────┴────────┐
│  Web Dashboard │ ← UI layer for user
└─────────────────┘
```

## Principles

1. **CLI is the source of truth** - All data operations go through CLI
2. **Agent-driven tracking** - AI agent logs workouts via CLI
3. **Dashboard for viewing** - User interacts mainly through visual interface
4. **Documentation first** - Features are specified before implementation
