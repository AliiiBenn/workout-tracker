# Design Guidelines

## Aesthetic Direction

### Overall Style
- **Terminal-inspired** - Clean, technical, developer-focused
- **Vercel-like** - Professional, minimal, data-dense
- **No rounded corners** - Sharp edges everywhere (0px border-radius)
- **Borders everywhere** - Sections separated by visible borders

### Color Palette
- **Background**: Dark (`#09090b` or similar via `bg-background`)
- **Surface**: Slightly lighter dark for cards
- **Borders**: Subtle borders to separate sections (`border-border`)
- **Text**: White/light gray for readability
- **Accents**: Minimal use of accent colors for emphasis only

### Layout Principles
- **Borders between sections** - Every section has a border separator
- **No rounded corners** - Use `rounded-none` everywhere
- **Dense information** - More data, less whitespace
- **Tight spacing** - Minimal padding, compact layouts
- **Grid layouts** - Clear column/row divisions via borders

## Terminal Aesthetic

The app should feel like a modern CLI tool but for workout tracking:

- **Monospace elements** - Use monospace font for numbers, stats
- **Data-first** - Information hierarchy is clear
- **Minimal decorations** - No shadows, no gradients, no fluff
- **High contrast** - Clear text visibility on dark background

### Code Inspiration

```tsx
// Section with border separator - like Vercel
<section className="p-8 border-b border-border">
  {/* Content */}
</section>

// Card with no rounded corners
<div className="border border-border p-4 rounded-none">
  {/* Content */}
</div>

// Button with sharp edges
<Button className="rounded-none">Action</Button>

// Grid with border dividers
<div className="grid grid-cols-3 divide-x divide-border border border-border">
  {/* Columns */}
</div>
```

## Components

### Sections
Every major section uses borders:
- Page header with border-bottom
- Cards separated by borders
- Lists with border-between items

### Badges
Use minimal badges:
- `rounded-none`
- `border-border`
- Small padding
- Colored backgrounds for categories/status

### Buttons
- `rounded-none` always
- Border-based styling
- Minimal hover effects

### Cards
- Sharp corners: `rounded-none`
- Border: `border border-border`
- No shadows
- Hover: subtle background change

### Charts
- shadcn/ui charts
- Dark theme compatible
- Minimal styling
- Border separators

### Tables
- TanStack Table
- `rounded-none`
- Border between rows
- Sticky headers with border
- Search and filters integrated

## Page Structure Example

```tsx
<div className="flex flex-col w-full">
  {/* Header */}
  <section className="p-6 border-b border-border">
    <h1>Page Title</h1>
  </section>

  {/* Stats Grid */}
  <section className="grid grid-cols-4 border-b border-border">
    <div className="p-4 border-r border-border">Stat 1</div>
    <div className="p-4 border-r border-border">Stat 2</div>
    <div className="p-4 border-r border-border">Stat 3</div>
    <div className="p-4">Stat 4</div>
  </section>

  {/* Content Cards */}
  <section className="grid grid-cols-3 gap-0 divide-x divide-border border-b border-border">
    <Card className="rounded-none border-0 border-r border-border">...</Card>
    <Card className="rounded-none border-0 border-r border-border">...</Card>
    <Card className="rounded-none border-0">...</Card>
  </section>

  {/* Table */}
  <section className="border-b border-border">
    <Table className="rounded-none">...</Table>
  </section>
</div>
```

## Principles

1. **Border-first** - Use borders to define structure
2. **No rounded corners** - `rounded-none` everywhere
3. **Dark background** - `bg-background` as primary
4. **Terminal vibes** - Monospace for data, clean lines
5. **Data density** - More info, less empty space
6. **Minimal decoration** - No shadows, no gradients
7. **Consistency** - Same patterns across all pages
8. **Performance** - Fast, responsive UI

## Design Checklist

- [ ] All buttons use `rounded-none`
- [ ] All cards use `rounded-none` and `border-border`
- [ ] Sections have `border-b border-border` separators
- [ ] Grid layouts use `divide-x` and `divide-y`
- [ ] Background is always dark (`bg-background`)
- [ ] No shadows anywhere
- [ ] No gradients
- [ ] Minimal animations (subtle only)
- [ ] Monospace for numbers/stats
