# Dashboard

## Overview
The dashboard is the home page - the first thing the user sees. It provides a quick overview of training status and quick actions.

**Design principle:** In 3 seconds, user should know:
- What's next in their training
- How they're doing this week
- Their progress toward goals

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Welcome back, [Name]                          [Avatar]  │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ ┌──────────────────────┐ ┌──────────────────────────────┐ │
│ │ Next Workout         │ │ Quick Stats                  │ │
│ │ ┌──────────────────┐ │ │ ┌────────┐ ┌────┐ ┌───────┐ │ │
│ │ │ 📅 Tomorrow      │ │ │ │ 3/4    │ │750│ │ 2     │ │ │
│ │ │ Push Day         │ │ │ │sessions│ │kg  │ │weeks  │ │ │
│ │ │ 7:00 PM         │ │ │ └────────┘ └────┘ └───────┘ │ │
│ │ │ [Start Now]      │ │ │         [view all]          │ │
│ └──────────────────┘ │ │                              │ │
│                      │ └──────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Quick Actions                                           │ │
│ │ [🏋️ Start Workout]  [⚖️ Log Weight]  [📊 View Stats]   │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────┐ ┌───────────────────────────┐ │
│ │ Active Goals             │ │ Recent Sessions           │ │
│ │ ┌────────────────────┐  │ │ ┌──────────────────────┐  │ │
│ │ │ Bench 100kg        │  │ │ │ Jan 15 • Push Day    │  │ │
│ │ │ ████████░░ 85kg    │  │ │ │ 45 min • 1,250 kg   │  │ │
│ │ └────────────────────┘  │ │ └──────────────────────┘  │ │
│ │ ┌────────────────────┐  │ │ ┌──────────────────────┐  │ │
│ │ │ Pull-ups 15 reps   │  │ │ │ Jan 13 • Pull Day   │  │ │
│ │ │ ██████░░░░ 12 reps │  │ │ │ 50 min • 800 kg    │  │ │
│ │ └────────────────────┘  │ │ └──────────────────────┘  │ │
│ │         [+ View All]     │ │         [+ View All]       │ │
│ └──────────────────────────┘ └───────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────┐ ┌───────────────────────────┐ │
│ │ Bodyweight               │ │ Recent PRs                │ │
│ │ 75.2 kg                  │ │ ┌──────────────────────┐  │ │
│ │ ↓ 0.5 kg this week     │ │ │ Bench Press         │  │ │
│ │ ┌────────────────────┐  │ │ │ 80kg → 85kg        │  │ │
│ │ │    📈 Chart       │  │ │ └──────────────────────┘  │ │
│ │ └────────────────────┘  │ │ ┌──────────────────────┐  │ │
│ │   [+ Log Weight]        │ │ │ Squats               │  │ │
│ └──────────────────────────┘ │ │ 100kg → 110kg        │  │ │
│                             │ └──────────────────────┘  │ │
│                             └───────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Components

### Header
- **Welcome message**: "Welcome back, [Name]"
- **User Avatar**: Opens user menu (profile, settings, logout)

### Next Workout (Hero Section)
If there's a scheduled workout:
- **Date/Time**: When the next session is
- **Routine Name**: What workout is planned
- **Quick Action**: "Start Now" button

If NO scheduled workout:
- **Message**: "No workout planned"
- **CTA**: "Schedule a workout" or "Start freestyle workout"

### Quick Stats
4 key metrics:
- **Sessions this week**: "3/4" (sessions completed / target)
- **Weekly volume**: Total kg lifted this week
- **Current streak**: Consecutive weeks with training

### Quick Actions
Primary actions the user wants:
- **Start Workout**: Begin a new session immediately
- **Log Weight**: Record today's bodyweight
- **View Stats**: Go to stats page

### Active Goals
Top 2-3 active goals with:
- **Goal title**: What they're working toward
- **Progress bar**: Visual progress
- **Current/Target**: "85kg / 100kg"
- **View All**: Link to goals page

### Recent Sessions
Last 2-3 sessions with:
- **Date**: Day name
- **Name/Routine**: What type of workout
- **Duration & Volume**: Quick stats

### Bodyweight
- **Current weight**: Latest entry
- **Trend**: "↓ 0.5kg this week"
- **Mini chart**: Last 30 days
- **Quick log**: "Log Weight" button

### Recent PRs
- **Movement name**: e.g., "Bench Press"
- **Progress**: "80kg → 85kg"
- Shows recent personal records achieved

## Why This Design

| Component | Why |
|-----------|-----|
| Next workout first | User knows what's coming, can start immediately |
| Quick stats prominent | Instant view of weekly progress |
| Quick actions | Most common actions, one click away |
| Goals visible | Motivation, track progress |
| Recent sessions | Context of recent activity |
| Bodyweight | Regular tracking, quick access |
| Recent PRs | Celebrate wins, motivation |

## User Flows

### Start Workout Flow
1. User clicks "Start Workout"
2. Option: Start from routine OR freestyle
3. Redirects to session creation
4. User logs sets
5. Returns to dashboard after completion

### Log Weight Flow
1. User clicks "Log Weight" (or body weight card)
2. Quick modal opens with today's date pre-filled
3. User enters weight
4. Saves, dashboard updates

### View Stats Flow
1. User clicks "View Stats" or any stat card
2. Redirects to Stats page
3. More detailed analytics

## Responsive

**Desktop:** 2-column grid layout (as shown)

**Tablet:** Same layout, smaller cards

**Mobile:**
```
┌─────────────────────┐
│ [Name]    [Avatar]  │
├─────────────────────┤
│ [Start Workout]     │
├─────────────────────┤
│ Next: Tomorrow      │
│ Push Day    7PM    │
├─────────────────────┤
│ Stats: 3 | 750kg   │
├─────────────────────┤
│ Goals               │
│ [Goal 1 progress]  │
│ [Goal 2 progress]  │
├─────────────────────┤
│ Recent Sessions     │
│ [Session 1]         │
│ [Session 2]         │
└─────────────────────┘
```

Stack all sections vertically on mobile.
