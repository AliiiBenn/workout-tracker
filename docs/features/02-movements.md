# Movements

## Category
A category groups movements by type or training style.

Examples:
- **Calisthenics** - bodyweight exercises
- **Weightlifting** - barbell/dumbbell exercises
- **Cardio** - endurance exercises
- **HIIT** - high-intensity interval training

## Muscle Group & Sub-Muscle
Muscles are organized in a hierarchy:
- **Muscle Group**: Major muscle area (e.g., Chest, Back, Legs)
- **Sub-Muscle**: Specific muscle within the group (e.g., Chest → Upper Chest, Lower Chest)

Examples:
- **Chest** → Upper Chest, Lower Chest, Inner Chest, Outer Chest
- **Back** → Lats, Rhomboids, Trapezius
- **Legs** → Quadriceps, Hamstrings, Glutes, Calves
- **Shoulders** → Anterior, Lateral, Posterior

## Movement (Exercise)
A movement is a type of exercise associated with a category and targeting specific muscles.

Attributes:
- **Name**: The exercise name (e.g., Push-ups)
- **Category**: The training category
- **Muscle Group**: Primary muscle group targeted
- **Sub-Muscle**: Specific sub-muscle (optional)
- **Equipment**: Required equipment (optional)

Examples:
- **Push-ups** - Category: Calisthenics, Muscle Group: Chest
- **Pull-ups** - Category: Calisthenics, Muscle Group: Back
- **Squats** - Category: Weightlifting, Muscle Group: Legs
- **Bench Press** - Category: Weightlifting, Muscle Group: Chest

## Movement Evolution (Progression)
Movements can have relationships to other movements, representing progression paths:

- **Base Movement**: The foundational exercise
- **Progression**: A harder variation of the base movement
- **Regression**: An easier variation of the base movement

Examples:
- **Push-ups** (base) → Diamond Push-ups (progression) → Archer Push-ups (progression)
- **Pull-ups** (base) → Weighted Pull-ups (progression) → One-Arm Pull-ups (progression)
- **Squats** (base) → Bulgarian Split Squats (variation) → Jump Squats (progression)
- **Plank** (base) → Long Plank (progression) → Weighted Plank (progression)

## Movement Hierarchy

```
Category (e.g., Calisthenics)
    └── Muscle Group (e.g., Chest)
            └── Sub-Muscle (e.g., Upper Chest)
                    └── Movement (e.g., Push-ups)
                            ├── Progression: Diamond Push-ups
                            │       └── Progression: Archer Push-ups
                            │               └── Progression: One-Arm Push-ups
                            │
                            └── Regression: Knee Push-ups
                                    └── Regression: Incline Push-ups
```
