# Digital Care - Next.js 15 Migration

This repository contains the migrated version of the Digital Care website to Next.js 15 with modern features and healthcare-specific optimizations.

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm
- A running PostgreSQL database instance

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd digital-care-nextjs15
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    - Create a new file named `.env` in the root of the project.
    - Copy the contents of `.env.example` into your new `.env` file.
    - Fill in the required values:
      - `DATABASE_URL`: Your main PostgreSQL connection string.
      - `DIRECT_URL`: Your direct database connection string (often the same as `DATABASE_URL`).
      - `NEXTAUTH_SECRET`: A secret key for NextAuth.js. You can generate a secure secret by running `openssl rand -base64 32` in your terminal.
      - `NEXT_PUBLIC_APP_URL`: Set this to `http://localhost:3000` for local development.

4.  **Run database migrations:**
    This command will apply the schema to your database, creating all necessary tables for the application to function.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running at `http://localhost:3000`.

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

### Phase 3: Healthcare-Specific Features
- Implement patient dashboard
- Add telemedicine integration
- Create healthcare-specific components and utilities

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
