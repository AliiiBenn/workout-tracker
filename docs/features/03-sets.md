# Sets

## Definition
A set (serie) is a single attempt at performing a movement.

## Attributes

- **Movement**: The exercise being performed
- **Repetitions**: Number of times the movement is repeated
- **Weight/Load**: The weight used (can be 0 for bodyweight-only exercises)
- **Duration**: Time spent on the set (optional, for timed exercises)
- **RPE**: Rate of Perceived Exertion (1-10 scale, optional)
- **Rest Time**: Time rested before this set (in seconds, optional)
- **Is Warm-up**: Whether this is a warm-up set (boolean, default: false)

## Notes

- Bodyweight exercises have a weight of 0 (or a special "bodyweight" marker)
- A session can have multiple sets of the same movement
- Duration is typically used for timed exercises (e.g., planks, hanging)
- RPE (Rate of Perceived Exertion) scale: 1 (easy) to 10 (max effort)
- Warm-up sets are marked separately and don't count toward working sets

## CLI Commands

### Create a Set

```bash
workout sets create <movement_id> <repetitions> [--weight <kg>] [--duration <seconds>] [--rpe <1-10>] [--rest <seconds>] [--warmup] [--session <session_id>]
```

Arguments:
- `movement_id`: ID of the movement (exercise)
- `repetitions`: Number of repetitions

Options:
- `--weight, -w`: Weight in kg (default: 0)
- `--duration, -d`: Duration in seconds (optional, for timed exercises)
- `--rpe, -r`: Rate of Perceived Exertion 1-10 (optional)
- `--rest, -t`: Rest time before this set in seconds (optional)
- `--warmup, -u`: Mark as warm-up set (optional)
- `--session, -s`: Session ID to add the set to (optional)

Examples:
```bash
# Bodyweight push-ups
workout sets create push-ups 15

# Weighted squat with RPE
workout sets create squats 10 --weight 50 --rpe 8

# Warm-up set
workout sets create squats 10 --weight 40 --warmup

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
workout sets update <set_id> [--repetitions <n>] [--weight <kg>] [--duration <seconds>] [--rpe <1-10>] [--rest <seconds>] [--warmup | --no-warmup]
```

Arguments:
- `set_id`: ID of the set to update

Options:
- `--repetitions, -r`: New repetition count
- `--weight, -w`: New weight in kg
- `--duration, -d`: New duration in seconds
- `--rpe, -e`: New RPE (1-10)
- `--rest, -t`: New rest time in seconds
- `--warmup`: Mark as warm-up
- `--no-warmup`: Remove warm-up flag

Examples:
```bash
workout sets update abc123 --repetitions 12 --weight 55
workout sets update abc123 --rpe 9
```

### Delete a Set

```bash
workout sets delete <set_id>
```

Arguments:
- `set_id`: ID of the set to delete
