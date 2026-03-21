# Routines (Templates)

## Definition
A routine (template) is a reusable workout plan that defines which movements to perform.

## Attributes

- **Name**: Routine name (e.g., "Push Day", "Full Body A")
- **Description**: Optional description
- **Movements**: List of movements with target sets/reps
- **Notes**: Optional notes

## CLI Commands

### Create a Routine

```bash
workout routines create <name> [--description <description>]
```

Arguments:
- `name`: Routine name

Options:
- `--description, -d`: Description of the routine

Examples:
```bash
workout routines create "Push Day" --description "Chest, shoulders, triceps"
```

### Add Movement to Routine

```bash
workout routines add-movement <routine_id> <movement_id> [--sets <n>] [--reps <n>] [--notes <notes>]
```

Arguments:
- `routine_id`: ID of the routine
- `movement_id`: ID of the movement to add

Options:
- `--sets, -s`: Target number of sets (default: 3)
- `--reps, -r`: Target repetitions (default: 10)
- `--notes, -n`: Notes for this movement in the routine

Examples:
```bash
workout routines add-movement abc123 push-ups --sets 4 --reps 12
```

### List Routines

```bash
workout routines list
```

### Get Routine Details

```bash
workout routines get <routine_id>
```

Arguments:
- `routine_id`: ID of the routine

### Update Routine

```bash
workout routines update <routine_id> [--name <name>] [--description <description>]
```

### Delete Routine

```bash
workout routines delete <routine_id>
```

### Remove Movement from Routine

```bash
workout routines remove-movement <routine_id> <movement_id>
```

## Usage with Sessions

A routine can be used to start a new session:

```bash
workout sessions create --from-routine <routine_id>
```

This creates a new session pre-populated with the movements from the routine.
