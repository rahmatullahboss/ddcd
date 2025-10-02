# Database Setup and Migration Guide

## Overview

This project uses Prisma with PostgreSQL for database management. The database schema is defined in `prisma/schema.prisma` and migrations are managed by Prisma's migration system.

## Local Development Setup

1. **Environment Variables**
   Create a `.env` file in the root of the project with the following variables:
   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   NEXTAUTH_SECRET="your-secret-key"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

2. **Run Initial Migration**
   ```bash
   npm run db:migrate
   ```

## Production Deployment

### Vercel Deployment Process

1. **Set Environment Variables in Vercel**
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add all required environment variables

2. **Automatic Migration on Vercel**
   The `vercel-build` script in package.json automatically runs migrations during the build process:
   ```bash
   "vercel-build": "prisma generate && prisma migrate deploy && next build"
   ```

3. **Manual Migration (Alternative)**
   If you prefer to run migrations manually after deployment:
   ```bash
   npm run db:deploy
   ```

## Migration Commands

| Command | Description |
|---------|-------------|
| `npm run db:migrate` | Create and run new migrations (development) |
| `npm run db:deploy` | Apply pending migrations to database (production) |
| `npm run db:setup` | Complete setup for production database |

## Troubleshooting

### Common Issues

1. **Migration conflicts**
   If you encounter migration conflicts, you may need to reset your database:
   ```bash
   npx prisma migrate reset
   ```

2. **Connection errors**
   Verify your DATABASE_URL is correctly formatted:
   ```
   postgresql://username:password@host:port/database_name
   ```

3. **Permission errors**
   Ensure your database user has the necessary permissions to create tables and modify the database schema.

## Security Notes

- Never commit database credentials to version control
- Use strong, unique passwords for production databases
- Regularly backup your production database
- Use connection pooling for better performance in production