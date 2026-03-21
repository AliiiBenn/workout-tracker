# Bodyweight Tracking

## Definition
Track body weight over time to monitor changes and progress.

## Attributes

- **Weight**: Body weight in kg
- **Date**: Date of the measurement
- **Notes**: Optional notes (e.g., "morning weight", "before/after meal")

## CLI Commands

### Log Bodyweight

```bash
workout bodyweight log <weight> [--date <date>] [--notes <notes>]
```

Arguments:
- `weight`: Weight in kg

Options:
- `--date, -d`: Date of the measurement (default: today)
- `--notes, -n`: Optional notes

Examples:
```bash
# Log today's weight
workout bodyweight log 75

# Log weight with date
workout bodyweight log 74.5 --date 2024-01-15

# Log with notes
workout bodyweight log 75.2 --notes "morning weight"
```

### List Bodyweight History

```bash
workout bodyweight list [--limit <n>] [--offset <n>]
```

Options:
- `--limit, -l`: Number of entries to return (default: 30)
- `--offset, -o`: Number of entries to skip

Examples:
```bash
# List recent weigh-ins
workout bodyweight list

# List last 7 days
workout bodyweight list --limit 7
```

### Get Latest Bodyweight

```bash
workout bodyweight latest
```

### Update Bodyweight Entry

```bash
workout bodyweight update <entry_id> [--weight <kg>] [--notes <notes>]
```

Arguments:
- `entry_id`: ID of the entry to update

Options:
- `--weight, -w`: New weight
- `--notes, -n`: New notes

### Delete Bodyweight Entry

```bash
workout bodyweight delete <entry_id>
```

Arguments:
- `entry_id`: ID of the entry to delete
