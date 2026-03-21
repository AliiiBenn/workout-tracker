# Calendar

## Overview
A calendar view to visualize past and planned workouts, similar to an agenda.

## Views

### Month View (Default)
- Calendar grid showing the current month
- Days with workouts highlighted
- Color-coded: green (completed), blue (planned), gray (skipped)

### Week View
- Horizontal view of the week
- More detail visible per day

### Day View
- Detailed view of a single day
- Shows all scheduled and completed workouts

## Components

### Calendar Grid
Each day cell shows:
- Date number
- Workout indicator (dot or small badge)
- Completed workouts count
- Planned workouts count

### Day Cell (Expanded/Hover)
- Workout name
- Routine used (if any)
- Time (if set)
- Status indicator

### Navigation
- Previous/Next month/week buttons
- "Today" button to jump to current date
- Date picker to jump to specific date

### Sidebar (or Panel)
- Upcoming scheduled workouts (next 7 days)
- Quick actions:
  - Add single workout
  - Start program

## Interactions

### Click on Day
Opens day detail view with:
- List of all workouts for that day
- "Add workout" button
- Click workout to view details

### Drag & Drop (optional)
- Drag scheduled workout to another date to reschedule

### Click Scheduled Workout
- View details
- Edit button
- Mark as completed
- Delete button

## Visual Indicators

- **Green**: Completed workout
- **Blue**: Planned workout
- **Gray**: Skipped workout
- **Orange**: Active program day
- **Purple**: Rest day (if configured)

## Program Overlay
When a program is active:
- Show program name in header
- Highlight days according to program schedule
- Option to view program details
