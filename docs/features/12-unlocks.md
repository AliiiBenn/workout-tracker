# Unlocks & Gamification

## Overview
Track movement progressions as "unlocks" to visualize progress and provide motivation.

## Concepts

### Movement Unlock
When a user achieves a harder progression of a movement, it gets "unlocked".

### Progression Chain
Each movement has a chain:
- **Locked**: Not yet achievable
- **Current**: Currently working on
- **Unlocked**: Achieved and mastered

### Unlock Conditions
- **Reps**: Achieve X reps in a single set
- **Weight**: Lift X kg
- **Consistency**: Complete X sessions with the movement
- **Time**: Hold for X seconds (for timed movements)

## Examples

### Push-ups Progression Chain
```
Knee Push-ups (Start - always unlocked)
    ↓
Push-ups (unlock at: 3×12 reps)
    ↓
Diamond Push-ups (unlock at: 3×10 reps)
    ↓
Archer Push-ups (unlock at: 3×8 reps each side)
    ↓
One-Arm Push-ups (unlock at: 3×5 reps each arm)
```

### Pull-ups Progression Chain
```
Dead Hang (unlock at: 30s hold)
    ↓
Scapular Pull-ups (unlock at: 3×10 reps)
    ↓
Pull-ups (unlock at: 3×8 reps)
    ↓
Weighted Pull-ups (unlock at: 3×6 reps with +10kg)
```

## Attributes

### Unlock
- **Movement**: The movement being unlocked
- **Condition**: What triggered the unlock
- **Unlocked At**: Date/time of unlock
- **Proof**: Set data that triggered the unlock

### User Progress
- **Current Level**: Where the user is in the progression
- **History**: All unlocks achieved
- **Next Target**: Next movement to unlock

## CLI Commands

### View Unlock Status

```bash
workout unlocks status [<movement_id>]
```

Shows:
- Current level in progression
- Unlocked movements
- Locked movements
- Next target

### Unlock Movement Manually

```bash
workout unlocks unlock <movement_id>
```

For admin/manual unlock (bypass conditions).

### Lock Movement

```bash
workout unlocks lock <movement_id>
```

Reset progress for a movement.

### List All Unlocks

```bash
workout unlocks list
```

Shows all unlocked movements with dates.

### Set Unlock Conditions

```bash
workout unlocks conditions <movement_id> <condition_type> <value>
```

Arguments:
- `movement_id`: Movement to set conditions for
- `condition_type`: reps, weight, consistency, time
- `value`: Target value

Examples:
```bash
workout unlocks conditions "push-ups" reps 12
workout unlocks conditions "pull-ups" weight 20
```

## Gamification Elements

### Achievement Badges (Future)
- First workout
- 10/50/100 sessions
- Streak milestones
- First unlock
- All movements in a category unlocked
