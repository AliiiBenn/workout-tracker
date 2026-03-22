# Sessions

## Overview
The sessions page displays all workout sessions in a paginated list with filtering and search capabilities.

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [+ New Session]        Search [________]    Filters    │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Cards (Primary View)                                         │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│ │ Jan 15      │ │ Jan 16      │ │ Jan 18      │          │
│ │ Push Day    │ │ Pull Day    │ │ Legs       │          │
│ │ 45 min     │ │ 60 min     │ │ 55 min     │          │
│ │ 1,250 kg   │ │ 2,100 kg   │ │ 1,800 kg   │          │
│ └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ Charts                                                      │
│ ┌────────────────────┐ ┌────────────────────┐            │
│ │ Volume Chart       │ │ Sessions/Week       │            │
│ │ ████████           │ │ ████████           │            │
│ └────────────────────┘ └────────────────────┘            │
├─────────────────────────────────────────────────────────────┤
│ Table (Detailed View)                                       │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Date    │ Duration │ Sets │ Volume │ Tags │       │   │
│ │─────────│──────────│──────│────────│──────│ ...   │   │
│ │ Jan 15  │ 45 min  │ 12   │ 1,250 │ Push │       │   │
│ │ Jan 16  │ 60 min  │ 15   │ 2,100 │ Pull │       │   │
│ └─────────────────────────────────────────────────────┘   │
│                                                             │
│ [< Prev] 1 2 3 ... 5 [Next >]    Per page: [10 v]        │
└─────────────────────────────────────────────────────────────┘
```

## Views

The page has three sections stacked vertically:

1. **Cards** - Quick visual overview (primary)
2. **Charts** - Trends at a glance
3. **Table** - Detailed data

No view toggle needed - all three are always visible.

## Components

### Action Bar
- **New Session Button**: Creates new session
- **Search**: Searches across all sessions (notes, movements)
- **Filters**: Date range, tags

### Cards (Primary View)
Quick overview cards showing:
- **Date**: Day name, date
- **Title**: Session name or routine used
- **Duration**: Total session time
- **Volume**: Total weight lifted
- **Tags**: Colored badges

Click card → Opens session detail/edit view

### Charts
Always visible below cards:
- **Volume Chart**: Bar chart of volume per session
- **Sessions/Week**: Line chart of sessions per week
- Charts respect filter date range

### Table (Detailed View)
TanStack Table below charts:
- **Columns**: Date, Duration, Sets, Volume, Tags, Actions
- **Sortable**: Click column headers
- **Paginated**: Navigate pages
- **Search**: Filter within table
- **Row Click**: Expand to show sets

### Empty State
When no sessions exist or filters return nothing:
- Illustration or icon
- Message: "No sessions yet"
- CTA: "Start your first workout" button

## Session Detail/Edit View

When clicking a session (from cards or table), opens a detail view:

```
┌─────────────────────────────────────────────────────────────┐
│ Session Detail                                      [Close] │
├─────────────────────────────────────────────────────────────┤
│ Date:     [Jan 15, 2024            ] [Calendar]          │
│ Duration: [45 min                        ]                 │
│ Notes:    [__________________________]                     │
│ Tags:     [Push Day] [Strength]  [+ Add]                  │
├─────────────────────────────────────────────────────────────┤
│ Sets                                                      │
│ ┌─────────────────────────────────────────────────────────┐│
│ │ Movement    │ Sets │ Reps │ Weight │ RPE │       │    ││
│ │─────────────│──────│──────│────────│─────│       │    ││
│ │ Push-ups   │ 4    │ 12   │ 0 kg   │ 7   │ [x]  │    ││
│ │ Bench Press│ 3    │ 10   │ 60 kg  │ 8   │ [x]  │    ││
│ │ + Add Set                                              ││
│ └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│ [+ Add Movement                                           │
├─────────────────────────────────────────────────────────────┤
│              [Delete Session]      [Save Changes]           │
└─────────────────────────────────────────────────────────────┘
```

### What can be modified:
- **Date**: Change session date
- **Duration**: Edit session duration
- **Notes**: Add/edit session notes
- **Tags**: Add or remove tags
- **Sets**: Add, edit, or remove sets
- **Add Movement**: Add a new movement to the session

### Actions:
- **Save Changes**: Saves all modifications
- **Delete Session**: Deletes the session (with confirmation)
- **Close**: Closes the view (prompts if unsaved changes)

### New Session Button (+)
Opens a dialog to create a new session:

```
┌────────────────────────────────────────────┐
│ New Session                           [X]  │
├────────────────────────────────────────────┤
│ Date:     [Jan 15, 2024    ] [Calendar]   │
│                                           │
│ Routine:   [Select...        v]            │
│            (Optional - pre-fill exercises)│
│                                           │
│ Notes:     [____________________]          │
│            (Optional notes)                │
│                                           │
│ Tags:      [+ Add Tag           ]         │
│                                           │
├────────────────────────────────────────────┤
│              [Cancel]  [Create Session]   │
└────────────────────────────────────────────┘
```

**Fields:**
- **Date**: Date picker, defaults to today
- **Routine**: Optional dropdown to pre-fill with a routine's movements
- **Notes**: Optional textarea
- **Tags**: Add existing or create new tags

**Actions:**
- **Cancel**: Close dialog
- **Create Session**: Creates session, then redirects to log sets

### Click Session (Cards View)
- Expand/collapse to show sets
- Smooth animation

### Edit Button
- Opens edit modal (same as new session but pre-filled)
- Can modify: date, notes, tags
- Cannot modify sets (go to session detail for that)

### Delete Button
- Shows confirmation dialog
- "Delete session?" with session summary
- Confirm → deletes, shows success toast
- Cancel → closes dialog

### New Session Button
- Navigates to `/sessions/new`
- Or opens quick-add modal

## Interactions

### Cards & Table
- **Click**: Opens session detail/edit view
- **Edit**: Opens same view (or use edit button in view)
- **Delete**: Confirmation then delete

### Charts
- **Hover**: Show tooltip with exact values
- **Date Range**: Charts respect filter date range

### Table
- Same as Cards - click opens detail/edit view

## Filter State (URL)

Filters are stored in URL (nuqs):
```
/sessions?from=2024-01-01&to=2024-01-31&tags=push,strength
```

This allows:
- Shareable URLs
- Browser back/forward works
- Bookmark specific filters

## Why This Design

| Element | Why |
|---------|-----|
| Cards first | Quick visual scan of recent workouts |
| Charts below cards | Immediate insights, spot trends |
| Table last | For users who want detailed data |
| All visible | No clicking needed to see everything |
| Filters in URL | Shareable, bookmarkable |
| Global search | Quick find specific session |
| Volume display | Immediate sense of intensity |
| Dialog for new | Fast creation without page navigation |
