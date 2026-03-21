# Movements

## Overview
The movements page shows the library of all movements (exercises) with their details and progression chains.

## Components

### Search & Filter
- **Search**: Search movements by name
- **Category Filter**: Filter by category (Calisthenics, Weightlifting, etc.)
- **Muscle Group Filter**: Filter by muscle group (Chest, Back, Legs, etc.)

### Movement List
Grid or list view of movements showing:
- Movement name
- Category badge
- Primary muscle group
- Equipment icon (if needed)

### Movement Card (Expanded/Modal)
When clicking a movement:
- Full name
- Category
- Muscle group and sub-muscles
- Equipment required
- Progression chain (base → progressions → regressions)
- History of sets using this movement

### Progression Chain Visualization
Shows the movement in context:
- Current level highlighted
- progressions (harder variations)
- regressions (easier variations)
- Click any to view details

## Interactions
- Click movement → Open detail modal
- Add movement button → Form to create new movement
- Edit button → Edit movement details
- Delete button → Confirmation (only if no sets use this movement)
