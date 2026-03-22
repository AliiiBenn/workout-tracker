# Workout Tracker

A terminal-inspired workout tracking platform for serious athletes. Built with Next.js, PayloadCMS, and PostgreSQL.

## Features

- **Movements** - Exercise library with categories, muscle groups, and progressions
- **Sets** - Individual set tracking (reps, weight, RPE, rest time)
- **Sessions** - Workout session management
- **Bodyweight** - Bodyweight tracking over time
- **Routines** - Workout templates
- **Goals** - Training goal setting and tracking
- **Programs** - Multi-week training programs
- **Analytics** - Progress tracking and statistics

## Tech Stack

- **Frontend**: React 19, Next.js 16, Tailwind CSS 4, shadcn/ui
- **Backend**: PayloadCMS 3.80, PostgreSQL (Neon)
- **Language**: TypeScript
- **Testing**: Vitest, Playwright

## Quick Start

See [CONTRIBUTING.md](CONTRIBUTING.md) for installation and development setup.

## Project Structure

```
.
├── apps/
│   └── web/              # Next.js + PayloadCMS application
├── packages/
│   └── cli/              # CLI package (planned)
├── docs/                 # Project documentation
│   ├── architecture/     # Technical architecture
│   ├── design/           # Design guidelines
│   └── features/         # Feature specifications
└── .github/
    └── workflows/        # CI/CD workflows
```

## Design

The application follows a terminal-inspired, data-dense aesthetic:

- Dark background (`#09090b`)
- No rounded corners
- Visible borders everywhere
- Monospace fonts for numbers and stats

See [`docs/design/`](docs/design/) for more details.

## License

MIT - See [LICENSE](LICENSE) for details.
