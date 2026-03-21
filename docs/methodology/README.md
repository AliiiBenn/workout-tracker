# Methodology

## Project Overview

This project is a workout tracking system with two interfaces:

### Web Dashboard
The primary interface for users to:
- Log workouts manually
- View workout history and statistics
- Track progress with charts and graphs
- Manage goals and routines
- Visualize calendar and scheduled workouts
- See overall training status

### AI Coach (CLI)
An optional AI agent that uses the CLI to help the user:
- Log sets, reps, and weights after each exercise
- Provide workout suggestions and progressions
- Analyze training patterns
- Act as a virtual coach

The agent is optional - the user can track workouts directly via the dashboard without using the agent.

## Architecture

```
┌─────────────────┐
│  Web Dashboard  │ ← Primary interface for user
└────────┬────────┘
         │
         ▼
    ┌─────────┐
    │   Data  │ ← Single source of truth
    └────┬────┘
         │
         ▼
    ┌─────────┐
    │   CLI   │ ← For AI agent + manual CLI usage
    └─────────┘
         │
         ▼
┌────────┴────────┐
│   AI Agent      │ ← Optional coach assistant
└─────────────────┘
```

## Principles

1. **Data is the source of truth** - Single storage, accessible by both dashboard and CLI
2. **Dashboard-first** - Primary interface for users
3. **CLI for automation** - Enables AI agent to interact with data
4. **Agent is optional** - User can track workouts without AI assistance
5. **Documentation first** - Features are specified before implementation
