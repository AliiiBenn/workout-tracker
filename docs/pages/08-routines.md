# Routines

## Overview
Create, manage, and use workout templates (routines) for quick session starts.

## Page Sections

### Header
- Page title: "Routines"
- "New Routine" button
- Search bar
- Filter: All | Push | Pull | Legs | Full Body (tags)

### Routine Cards (Grid/List)
Each routine displays:
- **Name**: e.g., "Push Day A"
- **Description**: Brief description
- **Movement Count**: Number of exercises
- **Estimated Duration**: Based on movements
- **Tags**: Category tags
- **Last Used**: Date or "Never"
- **Actions**: Start, Edit, Delete

### Routine Detail View (Modal/Page)
When clicking a routine:
- Full name
- Description
- List of movements with:
  - Movement name
  - Target sets × reps
  - Notes per movement (e.g., "rest 90s")
  - Category/muscle group badges
- Total estimated time
- "Start Workout" button
- "Edit" button

### Create Routine Flow

#### Step 1: Basic Info
- Name input (required)
- Description textarea
- Tags selector (optional)

#### Step 2: Add Movements
- Search/select movements
- For each movement:
  - Select movement from dropdown
  - Target sets (number, default: 3)
  - Target reps (number, default: 10)
  - Optional notes
  - Remove button
- "Add another movement" button
- Drag to reorder

#### Step 3: Review
- Summary of routine
- Estimated duration
- "Create Routine" button

### Edit Routine Flow
- Same as create
- Pre-filled with current values
- Can add/remove/reorder movements
- "Save Changes" button

### Routine Templates (Library)
Pre-built routines user can import:
- "Beginner Full Body"
- "Push/Pull/Legs Split"
- "5/3/1"
- etc.

### Usage Analytics
Per routine:
- Times used
- Last used
- Average completion rate
- Most skipped movements

### Quick Start
From routine card:
- "Start" button → Creates session with routine pre-loaded
- Redirects to "Log Workout" page

## Integrations

### With Calendar
- Routines appear in "schedule" dropdown
- Drag routine to calendar to schedule

### With Goals
- Routines can be linked to goals
- Track progress using specific routine

## Interactions

### Drag & Drop
- Reorder movements within routine
- Drag from library to add

### Duplicate Routine
- "Duplicate" button on card
- Creates copy with "(Copy)" suffix

### Delete Confirmation
- Modal warning
- Shows if routine is scheduled in future
