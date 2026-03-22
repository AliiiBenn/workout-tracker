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

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
cd apps/web
npm install

# Copy environment variables
cp .env.example .env
```

### Environment Variables

Configure the following in your `.env` file:

```env
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Generate types
npm run generate:types

# Build for production
npm run build
```

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

## Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run generate:types # Generate Payload types
npm run test          # Run all tests
npm run test:int      # Run integration tests
npm run test:e2e      # Run end-to-end tests
```

## License

MIT
