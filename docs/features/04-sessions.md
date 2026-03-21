# Workout Sessions

## Definition
A workout session is a single training session containing multiple sets.

## Attributes

- **Date/Time**: When the workout took place
- **Sets**: A collection of sets performed
- **Notes**: Optional notes about the session

## Notes

- A session can have multiple sets of the same movement
- Sessions belong to a Training Register

## CLI Commands

### Create a Session

```bash
workout sessions create [--date <date>] [--notes <notes>]
```

Options:
- `--date, -d`: Date of the session (default: now)
- `--notes, -n`: Optional notes for the session

Examples:
```bash
# Create session for today
workout sessions create

# Create session with a specific date
workout sessions create --date 2024-01-15

# Create session with notes
workout sessions create --notes "Great workout, felt strong"
```

### List Sessions

```bash
workout sessions list [--limit <n>] [--offset <n>]
```

Options:
- `--limit, -l`: Number of sessions to return (default: 10)
- `--offset, -o`: Number of sessions to skip (for pagination)

Examples:
```bash
# List recent sessions
workout sessions list

# List 20 sessions
workout sessions list --limit 20
```

### Get Session Details

```bash
workout sessions get <session_id>
```

Arguments:
- `session_id`: ID of the session to retrieve

### Update a Session

```bash
workout sessions update <session_id> [--date <date>] [--notes <notes>]
```

Arguments:
- `session_id`: ID of the session to update

Options:
- `--date, -d`: New date for the session
- `--notes, -n`: New notes for the session

Examples:
```bash
workout sessions update abc123 --notes "Updated notes"
```

### Delete a Session

```bash
workout sessions delete <session_id>
```

Arguments:
- `session_id`: ID of the session to delete
