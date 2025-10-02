#!/usr/bin/env node

/**
 * Script to set up production database
 * Run this script after deploying to production to set up the database
 */

const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);

async function setupDatabase() {
  console.log('Setting up production database...');
  
  try {
    // Generate Prisma client
    console.log('Generating Prisma client...');
    await execPromise('npx prisma generate');
    console.log('✓ Prisma client generated');
    
    // Run migrations
    console.log('Running database migrations...');
    const { stdout, stderr } = await execPromise('npx prisma migrate deploy');
    
    if (stderr) {
      console.error('Migration error:', stderr);
      process.exit(1);
    }
    
    console.log('✓ Database migrations completed');
    console.log(stdout);
    
    console.log('Production database setup completed successfully!');
  } catch (error) {
    console.error('Failed to set up production database:', error);
    process.exit(1);
  }
}

// Only run if this script is called directly
if (require.main === module) {
  setupDatabase();
}

module.exports = { setupDatabase };