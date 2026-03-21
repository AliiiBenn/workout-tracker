# Analysis

## Stats & Insights

### Volume Analysis

Total volume = sum of (weight × reps) for all sets

```bash
workout analysis volume [--movement <movement_id>] [--start-date <date>] [--end-date <date>]
```

Options:
- `--movement, -m`: Filter by specific movement
- `--start-date, -s`: Start date
- `--end-date, -e`: End date

### Personal Records (PRs)

Track best lifts per movement.

```bash
workout analysis prs [--movement <movement_id>]
```

Shows:
- Heaviest weight for weighted movements
- Most reps for bodyweight movements
- Date of each PR

### Frequency Analysis

```bash
workout analysis frequency [--by <muscle|movement|tag>] [--weeks <n>]
```

Options:
- `--by`: Group by muscle group, movement, or tag (default: movement)
- `--weeks, -w`: Number of weeks to analyze (default: 4)

Shows:
- How often each muscle/movement is trained
- Rest days between sessions

### Progression Analysis

```bash
workout analysis progression <movement_id> [--weeks <n>]
```

Shows:
- Weight progression over time
- Rep progression over time
- Estimated 1RM (One Rep Max) trend

### Muscle Group Distribution

```bash
workout analysis muscle-distribution [--start-date <date>] [--end-date <date>]
```

Shows:
- Percentage of volume per muscle group
- Visual chart (for web app)

### Session Stats

```bash
workout analysis session <session_id>
```

Shows:
- Total sets
- Total volume
- Duration (if tracked)
- Movements worked
- Muscle groups targeted

### Athlete Summary

```bash
workout analysis summary [--weeks <n>]
```

Shows overall training summary:
- Total sessions
- Total volume
- Most trained movements
- Muscle groups worked
- Workout frequency
