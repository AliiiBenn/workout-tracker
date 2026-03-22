# User Profile

## Definition
User profile contains personal information to customize the training experience.

## Attributes

- **Name**: User's name
- **Goals**: Training objectives (strength, hypertrophy, endurance, etc.)
- **Experience Level**: Beginner, Intermediate, Advanced
- **Injuries/Limitations**: Physical limitations to consider
- **Weight**: Current bodyweight (auto-linked to bodyweight tracking)
- **Height**: For body composition context
- **Notes**: Any additional notes

## CLI Commands

### Create/Update Profile

```bash
workout profile set <field> <value>
```

Fields:
- `--name, -n`: User name
- `--goals, -g`: Comma-separated goals
- `--level, -l`: Experience level (beginner/intermediate/advanced)
- `--injuries, -i`: Injuries or limitations

Examples:
```bash
workout profile set --name "John"
workout profile set --goals "strength,hypertrophy"
workout profile set --level "intermediate"
workout profile set --injuries "left knee pain"
```

### View Profile

```bash
workout profile get
```

### Delete Profile

```bash
workout profile delete
```
