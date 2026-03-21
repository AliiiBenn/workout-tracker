# CLI Commands

All available commands for the workout tracker CLI.

## Table of Contents

- [Sets](#sets)
- [Sessions](#sessions)
- [Movements](#movements)
- [Bodyweight](#bodyweight)
- [Tags](#tags)
- [Routines](#routines)
- [Goals](#goals)
- [Scheduling](#scheduling)
- [Programs](#programs)
- [Analysis](#analysis)
- [Export](#export)
- [Unlocks](#unlocks)

---

## Sets

```bash
# Create a set
workout sets create <movement_id> <repetitions> [--weight <kg>] [--duration <seconds>] [--session <session_id>]

# List sets
workout sets list [--session <session_id>]

# Get set details
workout sets get <set_id>

# Update a set
workout sets update <set_id> [--repetitions <n>] [--weight <kg>] [--duration <seconds>]

# Delete a set
workout sets delete <set_id>
```

---

## Sessions

```bash
# Create a session
workout sessions create [--date <date>] [--notes <notes>]

# List sessions
workout sessions list [--limit <n>] [--offset <n>]

# Get session details
workout sessions get <session_id>

# Update a session
workout sessions update <session_id> [--date <date>] [--notes <notes>]

# Delete a session
workout sessions delete <session_id>

# Add tag to session
workout sessions add-tag <session_id> <tag_name>

# Remove tag from session
workout sessions remove-tag <session_id> <tag_name>

# Create session from routine
workout sessions create --from-routine <routine_id>
```

---

## Movements

```bash
# Create a movement
workout movements create <name> --category <category> --muscle-group <group> [--sub-muscle <sub>] [--equipment <eq>]

# List movements
workout movements list [--category <category>] [--muscle-group <group>]

# Get movement details
workout movements get <movement_id>

# Update a movement
workout movements update <movement_id> [--name <name>] [--category <category>]

# Delete a movement
workout movements delete <movement_id>

# Add progression
workout movements add-progression <movement_id> <progression_movement_id> [--type <type>]

# Remove progression
workout movements remove-progression <movement_id> <progression_movement_id>
```

---

## Bodyweight

```bash
# Log bodyweight
workout bodyweight log <weight> [--date <date>] [--notes <notes>]

# List bodyweight history
workout bodyweight list [--limit <n>] [--offset <n>]

# Get latest bodyweight
workout bodyweight latest

# Update bodyweight entry
workout bodyweight update <entry_id> [--weight <kg>] [--notes <notes>]

# Delete bodyweight entry
workout bodyweight delete <entry_id>

# Export bodyweight
workout bodyweight export [--output <file>]
```

---

## Tags

```bash
# Create a tag
workout tags create <name> [--color <color>]

# List tags
workout tags list

# Delete a tag
workout tags delete <name>
```

---

## Routines

```bash
# Create a routine
workout routines create <name> [--description <description>]

# Add movement to routine
workout routines add-movement <routine_id> <movement_id> [--sets <n>] [--reps <n>] [--notes <notes>]

# List routines
workout routines list

# Get routine details
workout routines get <routine_id>

# Update routine
workout routines update <routine_id> [--name <name>] [--description <description>]

# Delete routine
workout routines delete <routine_id>

# Remove movement from routine
workout routines remove-movement <routine_id> <movement_id>
```

---

## Goals

```bash
# Create a goal
workout goals create <type> <target> [--movement <movement_id>] [--deadline <date>] [--notes <notes>]

# List goals
workout goals list [--status <status>]

# Get goal details
workout goals get <goal_id>

# Update goal progress
workout goals update <goal_id> --current <value>

# Complete a goal
workout goals complete <goal_id>

# Delete a goal
workout goals delete <goal_id>

# Goal progress report
workout goals progress
```

---

## Scheduling

```bash
# Schedule a single workout
workout schedule create <date> [--routine <routine_id>] [--notes <notes>]

# Schedule recurring workout
workout schedule recurring <routine_id> <frequency> [--days <days>] [--interval <n>] [--end-date <date>]

# List scheduled workouts
workout schedule list [--from <date>] [--to <date>]

# Cancel scheduled workout
workout schedule cancel <schedule_id>

# Mark as completed
workout schedule complete <schedule_id>
```

---

## Programs

```bash
# Create a program
workout programs create <name> [--description <description>] [--weeks <n>]

# Add session to program
workout programs add-session <program_id> <routine_id> <week> <day>

# List programs
workout programs list

# Start program
workout programs start <program_id>
```

---

## Analysis

```bash
# Volume analysis
workout analysis volume [--movement <movement_id>] [--start-date <date>] [--end-date <date>]

# Personal records
workout analysis prs [--movement <movement_id>]

# Frequency analysis
workout analysis frequency [--by <muscle|movement|tag>] [--weeks <n>]

# Progression analysis
workout analysis progression <movement_id> [--weeks <n>]

# Muscle group distribution
workout analysis muscle-distribution [--start-date <date>] [--end-date <date>]

# Session stats
workout analysis session <session_id>

# Athlete summary
workout analysis summary [--weeks <n>]
```

---

## Export

```bash
# Export to Excel
workout export excel [--start-date <date>] [--end-date <date>] [--output <file>]

# Export to CSV
workout export csv [--start-date <date>] [--end-date <date>] [--output <file>]

# Export to JSON
workout export json [--output <file>]

# Session summary report
workout report sessions [--start-date <date>] [--end-date <date>]

# Progress report
workout report progress <movement_id> [--weeks <n>]

# Muscle group report
workout report muscles [--start-date <date>] [--end-date <date>]

# Bodyweight report
workout report bodyweight [--weeks <n>]
```

---

## Unlocks

```bash
# View unlock status
workout unlocks status [<movement_id>]

# Unlock movement manually
workout unlocks unlock <movement_id>

# Lock movement
workout unlocks lock <movement_id>

# List all unlocks
workout unlocks list

# Set unlock conditions
workout unlocks conditions <movement_id> <condition_type> <value>
```
