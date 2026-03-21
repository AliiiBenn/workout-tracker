# Export & Reports

## Export Data

Export workout data to various formats.

### Export to Excel

```bash
workout export excel [--start-date <date>] [--end-date <date>] [--output <file>]
```

Options:
- `--start-date, -s`: Start date for export
- `--end-date, -e`: End date for export
- `--output, -o`: Output file path (default: workout_export.xlsx)

Examples:
```bash
# Export all data
workout export excel

# Export specific date range
workout export excel --start-date 2024-01-01 --end-date 2024-03-31

# Export to specific file
workout export excel --output my_workouts.xlsx
```

### Export to CSV

```bash
workout export csv [--start-date <date>] [--end-date <date>] [--output <file>]
```

### Export to JSON

```bash
workout export json [--output <file>]
```

## Reports

Generate specific reports.

### Session Summary Report

```bash
workout report sessions [--start-date <date>] [--end-date <date>]
```

Shows:
- Total number of sessions
- Total volume (weight × reps)
- Most performed movements
- Sessions by tag

### Progress Report

```bash
workout report progress <movement_id> [--weeks <n>]
```

Shows:
- Progression of weight/reps over time
- Personal records
- Charts (for web app)

### Muscle Group Report

```bash
workout report muscles [--start-date <date>] [--end-date <date>]
```

Shows:
- Volume per muscle group
- Training frequency per muscle group

### Bodyweight Report

```bash
workout report bodyweight [--weeks <n>]
```

Shows:
- Bodyweight trend over time
- Average, min, max weight in period

### Export Bodyweight to Excel

```bash
workout bodyweight export [--output <file>]
```
