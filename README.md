# Digital Care - IT Solutions Agency

This repository contains the migrated version of the Digital Care website to Next.js 15 with modern features and IT-specific optimizations.

## Project Overview

Digital Care is a modern IT solutions agency that provides web development, mobile applications, UI/UX design, and other technology services to businesses of all sizes. Our platform connects clients with skilled developers and designers to deliver innovative technology solutions.

## Migration Plan

### Phase 1: Project Analysis & Setup
- Analyze current repository structure
- Create Next.js 15 project with TypeScript
- Set up Tailwind CSS and shadcn/ui
- Implement project structure based on requirements

### Phase 2: Core Implementation
- Migrate existing HTML/CSS/JS content to Next.js components
- Implement App Router with all required layouts and pages
- Add modern Next.js 15 features (Server Components, Server Actions, etc.)

### Phase 3: IT-Specific Features
- Implement client dashboard
- Add project management features
- Create IT service components and utilities

### Phase 4: Advanced Features
- Implement authentication (NextAuth.js v5)
- Add database integration (PostgreSQL/Supabase)
- Implement state management (Zustand/TanStack Query)
- Add forms with React Hook Form + Zod

## Technology Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- NextAuth.js v5
- PostgreSQL/Supabase
- Zustand/TanStack Query
- React Hook Form + Zod
- Framer Motion
- Lucide React

## Deployment Notes
- `.env` files are excluded from git for security
- All packages have been upgraded to versions compatible with React 19
- Vercel deployment configured with appropriate build settings
- Database migrations must be run manually or through deployment scripts

### Post-Deployment Steps
After deploying to Vercel, you need to run database migrations:

1. **Using Vercel CLI:**
   ```bash
   vercel env pull
   npx prisma migrate deploy
   ```

2. **Using the API endpoint (development only):**
   POST request to `/api/migrate`

3. **Using GitHub Actions:**
   The workflow will automatically run after successful deployment

### Environment Variables Required for Production
- `DATABASE_URL`: Your production PostgreSQL connection string
- `DIRECT_URL`: Your direct database connection string (often the same as DATABASE_URL)
- `NEXTAUTH_SECRET`: A secret key for NextAuth.js
- `NEXT_PUBLIC_APP_URL`: Your production URL (e.g., https://your-app.vercel.app)
