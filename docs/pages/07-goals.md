# Goals

## Overview
Track and manage training goals with visual progress indicators.

## Page Sections

### Header
- Page title: "Goals"
- "New Goal" button
- Filter tabs: All | Active | Completed | Failed

### Goal Cards
Each goal displays:
- **Type Icon**: Movement, Frequency, Consistency, Bodyweight
- **Title**: e.g., "Bench Press 100kg", "Train 4x/week"
- **Progress Bar**: Visual progress to target
- **Progress Text**: "75kg / 100kg (75%)"
- **Deadline**: Due date (if set)
- **Status Badge**: Active (blue), Completed (green), Failed (gray)
- **Created Date**: When goal was created
- **Actions**: Edit, Delete, Mark Complete

### Goal Types Display

#### Movement Goal
- Movement name
- Target value with unit (kg or reps)
- Current best performance
- History of attempts

#### Frequency Goal
- Target sessions per week/month
- Current count
- Sessions remaining this period

#### Consistency Goal
- Streak target
- Current streak
- Days remaining

#### Bodyweight Goal
- Target weight
- Current weight
- Difference (e.g., "-2.5kg to go")
- Mini chart showing trend

### Create Goal Modal
- Goal type selector (tabs or cards)
- Form fields based on type:
  - **Movement**: Select movement, target value (weight or reps), deadline
  - **Frequency**: Target per week or month, deadline
  - **Consistency**: Target streak days, deadline
  - **Bodyweight**: Target weight, deadline
- Notes field
- "Create" button

### Edit Goal Modal
- Same fields as create
- Pre-filled with current values
- "Save Changes" button

### Empty State
- When no goals exist
- "Create your first goal" CTA
- Brief explanation of why goals help

### Goal History Section (bottom)
- List of completed/failed goals
- Achievement date
- Original target
- Final value achieved

## Interactions

### Click Goal Card
- Expand to show detailed history
- Show progress chart over time
- Show related sessions

### Progress Auto-Update
- Goals auto-calculate progress from workout data
- "Movement" goals pull best performance from sessions
- "Frequency" goals pull session count

### Goal Completion
- Automatic detection when target reached
- Celebration animation
- Move to "Completed" tab

### Deadline Alerts
- Warning at 7 days before deadline
- Warning at 1 day before deadline
- Visual indicator for overdue goals
