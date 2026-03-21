# Goals

## Definition
Goals define targets to track progress and motivation.

## Goal Types

### Movement Goals
- Target weight for a specific movement
- Target reps for bodyweight exercises
- Target number of sets

### Frequency Goals
- Train X times per week
- Train Y sessions per month

### Consistency Goals
- Maintain a training streak
- Complete X sessions in a month

### Bodyweight Goals
- Target body weight
- Target weight change (gain/lose X kg)

## Attributes

- **Type**: Goal type (movement, frequency, consistency, bodyweight)
- **Target**: Target value
- **Current**: Current progress
- **Deadline**: Optional deadline
- **Movement**: Associated movement (for movement goals)
- **Notes**: Optional notes
- **Auto-Update**: Whether progress is calculated automatically (default: true)

## Data Relationships

Goals automatically connect to other data:

```
Goal (type: movement)
    └── movement_id → Movement
    └── Progress = MAX(weight OR reps FROM sets WHERE movement_id)

Goal (type: frequency)
    └── Period = week/month
    └── Progress = COUNT(sessions) IN current period

Goal (type: consistency)
    └── Progress = current_streak (consecutive weeks with ≥1 session)

Goal (type: bodyweight)
    └── Progress = latest bodyweight entry
```

## Automatic Updates

Goals update automatically based on workout data:

### Movement Goals

When a set is created/updated:
1. Get best performance (weight or reps) for that movement
2. Update all active movement goals for this movement
3. If target reached → auto-complete + trigger notification

### Frequency Goals

When a session is created:
1. Increment count for current period (week/month)
2. If target reached → auto-complete

When period changes (new week/month):
1. Reset counter for new period
2. Start fresh count

### Bodyweight Goals

When bodyweight is logged:
1. Update goal progress with latest entry
2. If target reached → auto-complete

## Schema Example

```json
{
  "goals": [
    {
      "id": "goal-1",
      "type": "movement",
      "target": 100,
      "current": 85,
      "unit": "kg",
      "movement_id": "bench-press",
      "deadline": "2024-03-31",
      "status": "active",
      "auto_update": true,
      "created_at": "2024-01-15"
    },
    {
      "id": "goal-2",
      "type": "frequency",
      "target": 4,
      "current": 2,
      "period": "week",
      "status": "active",
      "auto_update": true
    },
    {
      "id": "goal-3",
      "type": "bodyweight",
      "target": 70,
      "current": 72.5,
      "status": "active",
      "auto_update": true
    }
  ]
}
```

## CLI Commands

### Create a Goal

```bash
workout goals create <type> <target> [--movement <movement_id>] [--deadline <date>] [--notes <notes>]
```

Arguments:
- `type`: Goal type (movement, frequency, consistency, bodyweight)
- `target`: Target value

Options:
- `--movement, -m`: Movement ID (for movement goals)
- `--deadline, -d`: Deadline date
- `--notes, -n`: Notes

Examples:
```bash
# Goal to bench press 100kg
workout goals create movement 100 --movement "bench-press"

# Goal to do 20 pull-ups
workout goals create movement 20 --movement "pull-ups"

# Goal to train 4 times per week
workout goals create frequency 4

# Goal to reach 70kg bodyweight
workout goals create bodyweight 70
```

### List Goals

```bash
workout goals list [--status <status>]
```

Options:
- `--status, -s`: Filter by status (active, completed, failed)

### Get Goal Details

```bash
workout goals get <goal_id>
```

Shows:
- Target and current progress
- Percentage complete
- Deadline
- History

### Update Goal Progress

```bash
workout goals update <goal_id> --current <value>
```

Options:
- `--current, -c`: Current progress value

### Complete a Goal

```bash
workout goals complete <goal_id>
```

### Delete a Goal

```bash
workout goals delete <goal_id>
```

### Goal Progress Report

```bash
workout goals progress
```

Shows all active goals with progress percentages.
