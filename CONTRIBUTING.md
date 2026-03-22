# Contributing

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

## Git Workflow

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Commit with a descriptive message
4. Push and create a pull request
5. Wait for review before merging

## Code Style

- Use TypeScript for all new code
- Run `npm run lint` before committing
- Run `npm run generate:types` after modifying Payload collections
