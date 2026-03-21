# Sets

## Definition
A set (serie) is a single attempt at performing a movement.

## Attributes

- **Movement**: The exercise being performed
- **Repetitions**: Number of times the movement is repeated
- **Weight/Load**: The weight used (can be 0 for bodyweight-only exercises)
- **Duration**: Time spent on the set (optional, for timed exercises)

## Notes

- Bodyweight exercises have a weight of 0 (or a special "bodyweight" marker)
- A session can have multiple sets of the same movement
- Duration is typically used for timed exercises (e.g., planks, hanging)

## CLI Commands

### Create a Set

```bash
workout sets create <movement_id> <repetitions> [--weight <kg>] [--duration <seconds>] [--session <session_id>]
```

Arguments:
- `movement_id`: ID of the movement (exercise)
- `repetitions`: Number of repetitions

Options:
- `--weight, -w`: Weight in kg (default: 0)
- `--duration, -d`: Duration in seconds (optional)
- `--session, -s`: Session ID to add the set to (optional)

Examples:
```bash
# Bodyweight push-ups
workout sets create push-ups 15

# Weighted squat
workout sets create squats 10 --weight 50

# Timed plank
workout sets create plank 1 --duration 60
```

### List Sets

```bash
workout sets list [--session <session_id>]
```

Options:
- `--session, -s`: Filter by session ID

Examples:
```bash
# List all sets
workout sets list

# List sets in a specific session
workout sets list --session abc123
```

### Get Set Details

```bash
workout sets get <set_id>
```

Arguments:
- `set_id`: ID of the set to retrieve

### Update a Set

```bash
workout sets update <set_id> [--repetitions <n>] [--weight <kg>] [--duration <seconds>]
```

Arguments:
- `set_id`: ID of the set to update

Options:
- `--repetitions, -r`: New repetition count
- `--weight, -w`: New weight in kg
- `--duration, -d`: New duration in seconds

Examples:
```bash
workout sets update abc123 --repetitions 12 --weight 55
```

### Delete a Set

```bash
workout sets delete <set_id>
```

Arguments:
- `set_id`: ID of the set to delete
