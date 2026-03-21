# Progressions (Unlocks)

## Overview
Visualize movement progression chains and track unlock status for each.

## Components

### Category Filter
- Filter by category (Calisthenics, Weightlifting, etc.)
- "All" option

### Progression Cards
Each movement shows:
- Movement name
- Current status: 🔒 Locked | 🔓 Current | ✅ Unlocked
- Progress to next unlock (progress bar)
- Unlock conditions

### Progression Chain Visualization
For each movement family:
```
Knee Push-ups (✅ Unlocked)
    ↓
Push-ups (🔓 Current) [██████░░░░] 60%
    ↓
Diamond Push-ups (🔒 Locked)
    ↓
Archer Push-ups (🔒 Locked)
```

Shows:
- All levels in the chain
- Current status for each
- Progress percentage for current level
- Requirements to unlock next level

### Progress Summary
- Total movements unlocked
- Unlocks this month
- Current streak of unlocks
- Category breakdown

## Interactions

### Click Movement
Opens detail view:
- Full progression chain
- History of attempts
- Best performance
- Unlock requirements
- "Manual unlock" button (admin)

### Hover on Locked Movement
Shows requirements tooltip:
- "Unlock at: 3×12 push-ups"
- "Or: 50 total push-up reps this week"

### Filter by Status
- Show all
- Show only current
- Show only unlocked
- Show only locked

## Gamification Display

### Unlock Notifications
When a movement is unlocked:
- Celebratory animation
- Badge/achievement popup
- Added to unlocked list

### Progress Indicators
- Visual chain connecting progressions
- Glowing effect on current level
- Checkmarks on completed levels
