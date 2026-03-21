# Scheduling & Planning

## Overview
Plan and schedule workouts in advance. Supports single sessions, recurring schedules, and full programs.

## Concepts

### Scheduled Workout
A planned workout to be done at a specific date/time.

### Recurring Schedule
A workout that repeats on a schedule:
- **Weekly**: Same day each week (e.g., every Monday)
- **Custom**: Specific days of the week
- **Interval**: Every X days

### Program
A full training program containing multiple scheduled workouts:
- **Duration**: Number of weeks
- **Description**: Program overview
- **Sessions**: Ordered list of sessions

## Attributes

### Scheduled Workout
- **Date**: Planned date
- **Routine**: Associated routine (optional)
- **Notes**: Notes for this session
- **Status**: planned, completed, skipped

### Recurring Schedule
- **Routine**: The routine to repeat
- **Frequency**: weekly, custom, interval
- **Days**: Days of week (for custom)
- **Interval**: Days between (for interval)
- **Start Date**: When to start
- **End Date**: When to end (optional)

### Program
- **Name**: Program name
- **Description**: Program description
- **Duration**: Number of weeks
- **Sessions**: Ordered list of scheduled sessions

## CLI Commands

### Schedule a Single Workout

```bash
workout schedule create <date> [--routine <routine_id>] [--notes <notes>]
```

Arguments:
- `date`: Date for the workout (YYYY-MM-DD)

Options:
- `--routine, -r`: Routine ID to use
- `--notes, -n`: Notes

Examples:
```bash
workout schedule create 2024-01-20 --routine push-day
```

### Schedule Recurring Workout

```bash
workout schedule recurring <routine_id> <frequency> [--days <days>] [--interval <n>] [--end-date <date>]
```

Arguments:
- `routine_id`: Routine to schedule
- `frequency`: weekly, custom, interval

Options:
- `--days`: Comma-separated days (mon,tue,wed,etc.)
- `--interval`: Days between workouts (for interval)
- `--end-date, -e`: End date (optional)

Examples:
```bash
# Every Monday
workout schedule recurring push-day weekly --days mon

# Every 2 days
workout schedule recurring full-body interval --interval 2
```

### List Scheduled Workouts

```bash
workout schedule list [--from <date>] [--to <date>]
```

Options:
- `--from, -f`: Start date
- `--to, -t`: End date

### Create a Program

```bash
workout programs create <name> [--description <description>] [--weeks <n>]
```

Arguments:
- `name`: Program name

Options:
- `--description, -d`: Description
- `--weeks, -w`: Duration in weeks

### Add Session to Program

```bash
workout programs add-session <program_id> <routine_id> <week> <day>
```

Arguments:
- `program_id`: Program ID
- `routine_id`: Routine to use
- `week`: Week number
- `day`: Day of week

### List Programs

```bash
workout programs list
```

### Start Program

```bash
workout programs start <program_id>
```

Activates the program and schedules all sessions.

### Cancel Scheduled Workout

```bash
workout schedule cancel <schedule_id>
```

### Mark as Completed

```bash
workout schedule complete <schedule_id>
```
