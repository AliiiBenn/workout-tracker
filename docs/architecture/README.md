# Architecture

This directory contains technical architecture documentation.

## Structure

- [database/](database/) - Database design and collections
- [server/](server/) - Server API architecture

## Technology Stack

### Backend
- **PayloadCMS** - Database and admin panel
- **Next.js** - Server and API

### Frontend (Web App)
- **TanStack Query** - Data fetching and caching
- **TanStack Table** - Data tables with sorting and filtering
- **Zustand** - Client state management
- **nuqs** - URL query state management
- **better-auth** - Authentication

### CLI
- **TBD** - CLI framework

## Database

We use **PayloadCMS** for the backend. See [database/DATABASE.md](database/DATABASE.md) for the list of collections.

## Server

The server provides a clean API layer over the database. All operations are manually written functions. See [server/README.md](server/README.md).

## Routes

### Authentication
- `/register` - User registration
- `/login` - User login
- `/forgot-password` - Password reset

### App
- `/home` - Main dashboard (after login)
- `/sessions` - Sessions list
- `/movements` - Movements library
- `/calendar` - Calendar view
- `/progressions` - Unlock tracking
- `/stats` - Analytics
- `/goals` - Goals management
- `/routines` - Routines management
- `/bodyweight` - Bodyweight tracking
- `/settings` - User settings

All app routes require authentication (redirect to `/login` if not logged in).
