# Sessions

## Overview
The sessions page displays all workout sessions in a paginated list with filtering and search capabilities.

## Components

### Filters
- **Date Range**: Filter by start and end date
- **Tags**: Filter by one or more tags
- **Search**: Search by session notes

### Session List
Each session card shows:
- Date and time
- Duration
- Number of sets
- Total volume
- Tags (as chips)
- Expand/collapse to see all sets

### Session Detail (Expanded View)
When clicking a session:
- Full list of sets with movement, reps, weight
- Notes
- Edit/Delete buttons

### Empty State
Message when no sessions match filters with:
- Link to start first workout

## Interactions
- Click session → Expand to see details
- Edit button → Open edit modal
- Delete button → Confirmation dialog then delete
- "New Session" button → Navigate to new session page
