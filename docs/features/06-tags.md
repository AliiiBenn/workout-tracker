# Tags/Labels

## Definition
Tags and labels are used to categorize workouts for better organization and filtering.

## Use Cases

- **Workout Type**: "push day", "pull day", "legs", "full body"
- **Training Style**: "strength", "hypertrophy", "endurance"
- **Location**: "home", "gym", "outdoor"
- **Feel**: "good", "bad", "average"

## Attributes

- **Name**: Tag name (e.g., "push day")
- **Color**: Optional color for visual identification

## CLI Commands

### Create a Tag

```bash
workout tags create <name> [--color <color>]
```

Arguments:
- `name`: Tag name

Options:
- `--color, -c`: Hex color code (e.g., "#FF5733")

Examples:
```bash
# Create tag
workout tags create "push day"

# Create tag with color
workout tags create "legs" --color "#33FF57"
```

### List Tags

```bash
workout tags list
```

### Add Tag to Session

```bash
workout sessions add-tag <session_id> <tag_name>
```

Arguments:
- `session_id`: ID of the session
- `tag_name`: Name of the tag to add

Examples:
```bash
workout sessions add-tag abc123 "push day"
```

### Remove Tag from Session

```bash
workout sessions remove-tag <session_id> <tag_name>
```

Arguments:
- `session_id`: ID of the session
- `tag_name`: Name of the tag to remove

### Delete a Tag

```bash
workout tags delete <name>
```

Arguments:
- `name`: Tag name to delete

### Filter Sessions by Tag

```bash
workout sessions list --tag <tag_name>
```

Options:
- `--tag, -t`: Filter by tag name

Examples:
```bash
workout sessions list --tag "push day"
```
