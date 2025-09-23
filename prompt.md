

## 🚀 Complete Next.js 15 Migration Prompt for Digital Care

You are a senior Next.js migration specialist. Convert my digital-care repository from its current state to Next.js 15 with all modern features, best practices, and healthcare-specific optimizations.

Source repository: https://github.com/rahmatullahboss/digital-care

## 📋 Migration Requirements

### Phase 1: Project Analysis & Setup

#### 1.1 Core Technology Stack
```json
{
  "framework": "Next.js 15.0.3+",
  "react": "React 19 (RC or stable)",
  "typescript": "5.3+",
  "styling": "Tailwind CSS 3.4",
  "ui": "shadcn/ui components",
  "database": "PostgreSQL/Supabase (if backend needed)",
  "auth": "NextAuth.js v5 / Clerk",
  "state": "Zustand/TanStack Query",
  "forms": "React Hook Form + Zod",
  "animations": "Framer Motion",
  "icons": "Lucide React"
}
```

#### 1.2 New Project Structure
```
digital-care/
├── app/                         # App Router
│   ├── (auth)/                  # Auth group
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── (marketing)/              # Public pages
│   │   ├── page.tsx             # Home
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [service]/page.tsx
│   │   ├── doctors/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── contact/page.tsx
│   ├── (dashboard)/              # Protected routes
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── appointments/
│   │   │   ├── prescriptions/
│   │   │   └── medical-records/
│   │   └── profile/
│   ├── api/                     # API Routes
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── appointments/route.ts
│   │   └── webhook/stripe/route.ts
│   ├── layout.tsx                # Root layout
│   ├── globals.css
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── forms/                   # Form components
│   ├── layouts/                 # Layout components
│   └── features/                # Feature-specific
│       ├── appointment/
│       ├── doctor-card/
│       └── medical-record/
├── lib/
│   ├── actions/                 # Server Actions
│   │   ├── appointment.ts
│   │   ├── patient.ts
│   │   └── doctor.ts
│   ├── api/                     # API helpers
│   ├── db/                      # Database
│   │   ├── schema.ts
│   │   └── migrations/
│   ├── auth.ts                  # Auth config
│   ├── utils.ts                 # Utilities
│   └── constants.ts
├── hooks/                        # Custom hooks
├── types/                        # TypeScript types
├── public/                       # Static assets
└── config files...
```

### Phase 2: Next.js 15 Specific Features

#### 2.1 App Router Implementation
```typescript
// app/layout.tsx - Root Layout with Metadata
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Digital Care - Modern Healthcare Platform',
    template: '%s | Digital Care'
  },
  description: 'Access quality healthcare services online',
  keywords: ['healthcare', 'telemedicine', 'doctors', 'appointments'],
  authors: [{ name: 'Rahmatullah' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitalcare.com',
    siteName: 'Digital Care',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630
    }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@digitalcare'
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
```

#### 2.2 Server Components & Data Fetching
```typescript
// app/(marketing)/doctors/page.tsx - Server Component
import { Suspense } from 'react'
import { DoctorGrid } from '@/components/features/doctor-grid'
import { DoctorFilters } from '@/components/features/doctor-filters'
import { getDoctors } from '@/lib/actions/doctor'

export const metadata = {
  title: 'Our Doctors',
  description: 'Find and book appointments with our healthcare professionals'
}

// This runs on server
export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: { specialty?: string; location?: string }
}) {
  const doctors = await getDoctors(searchParams)

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Find a Doctor</h1>
      
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <DoctorFilters />
        </aside>
        
        <main className="lg:col-span-3">
          <Suspense fallback={<DoctorGridSkeleton />}>
            <DoctorGrid doctors={doctors} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

function DoctorGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg" />
      ))}
    </div>
  )
}
```

#### 2.3 Server Actions
```typescript
// lib/actions/appointment.ts
'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

const appointmentSchema = z.object({
  doctorId: z.string().uuid(),
  date: z.string().datetime(),
  reason: z.string().min(10),
  type: z.enum(['in-person', 'video', 'phone'])
})

export async function createAppointment(formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    redirect('/login')
  }

  const validatedFields = appointmentSchema.safeParse({
    doctorId: formData.get('doctorId'),
    date: formData.get('date'),
    reason: formData.get('reason'),
    type: formData.get('type')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  try {
    const appointment = await db.appointment.create({
      data: {
        ...validatedFields.data,
        patientId: session.user.id,
        status: 'pending'
      }
    })

    revalidatePath('/dashboard/appointments')
    redirect(`/dashboard/appointments/${appointment.id}/confirmation`)
  } catch (error) {
    return {
      error: 'Failed to create appointment'
    }
  }
}

export async function cancelAppointment(id: string) {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }

  await db.appointment.update({
    where: { 
      id,
      patientId: session.user.id 
    },
    data: { 
      status: 'cancelled',
      cancelledAt: new Date()
    }
  })

  revalidatePath('/dashboard/appointments')
}
```

#### 2.4 Route Handlers (API Routes)
```typescript
// app/api/appointments/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status')
    
    const appointments = await db.appointment.findMany({
      where: {
        patientId: session.user.id,
        ...(status && { status })
      },
      include: {
        doctor: true
      },
      orderBy: {
        date: 'asc'
      }
    })

    return NextResponse.json(appointments)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    
    const appointment = await db.appointment.create({
      data: {
        ...body,
        patientId: session.user.id
      }
    })

    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 400 }
    )
  }
}
```

### Phase 3: Healthcare-Specific Features

#### 3.1 Patient Dashboard
```typescript
// app/(dashboard)/dashboard/page.tsx
import { Suspense } from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { 
  AppointmentCard,
  PrescriptionList,
  HealthMetrics,
  QuickActions 
} from '@/components/features/dashboard'

export default async function DashboardPage() {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {session.user.name}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<CardSkeleton />}>
          <UpcomingAppointments userId={session.user.id} />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <ActivePrescriptions userId={session.user.id} />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <HealthMetrics userId={session.user.id} />
        </Suspense>
      </div>

      <QuickActions className="mt-8" />
    </div>
  )
}
```

#### 3.2 Telemedicine Integration
```typescript
// components/features/video-consultation.tsx
'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const VideoRoom = dynamic(
  () => import('./video-room'),
  { 
    ssr: false,
    loading: () => <VideoPlaceholder />
  }
)

export function VideoConsultation({ 
  appointmentId 
}: { 
  appointmentId: string 
}) {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    // Fetch video token
    fetchVideoToken(appointmentId).then(setToken)
  }, [appointmentId])

  if (!token) return <VideoPlaceholder />

  return <VideoRoom token={token} />
}
```

### Phase 4: Configuration Files

#### 4.1 next.config.ts
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    // Enable Partial Prerendering
    ppr: true,
    // Enable Server Actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Typed Routes
    typedRoutes: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },

  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
}

export default nextConfig
```

#### 4.2 package.json
```json
{
  "name": "digital-care",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:seed": "tsx prisma/seed.ts",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "next": "^15.0.3",
    "react": "^19.0.0-rc",
    "react-dom": "^19.0.0-rc",
    "@auth/prisma-adapter": "^1.0.0",
    "next-auth": "^5.0.0-beta",
    "@prisma/client": "^5.7.0",
    "@tanstack/react-query": "^5.0.0",
    "@hookform/resolvers": "^3.3.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "zustand": "^4.4.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.300.0",
    "date-fns": "^3.0.0",
    "recharts": "^2.10.0",
    "@radix-ui/react-alert-dialog": "^1.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-label": "^2.0.0",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-toast": "^1.1.0",
    "@vercel/analytics": "^1.1.0",
    "@vercel/speed-insights": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "eslint": "^8.55.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "prisma": "^5.7.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tsx": "^4.6.0",
    "@tailwindcss/forms": "^0.5.0",
    "@tailwindcss/typography": "^0.5.0"
  }
}
```

#### 4.3 Environment Variables
```bash
# .env.example
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Digital Care"

# Database (PostgreSQL/Supabase)
DATABASE_URL="postgresql://user:password@localhost:5432/digitalcare"
DIRECT_URL="postgresql://user:password@localhost:5432/digitalcare"

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Email (Resend/SendGrid)
EMAIL_FROM="noreply@digitalcare.com"
RESEND_API_KEY=

# File Upload (Uploadthing/Cloudinary)
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
CLOUDINARY_URL=

# Payment (Stripe)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Video Consultation (Twilio/Daily.co)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_API_KEY=
TWILIO_API_SECRET=

# SMS Notifications (optional)
TWILIO_PHONE_NUMBER=

# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_POSTHOG_KEY=
```

### Phase 5: Database Schema (Prisma)
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model User {
  id              String    @id @default(cuid())
  email           String    @unique
  emailVerified   DateTime?
  name            String?
  image           String?
  role            Role      @default(PATIENT)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  // Relations
  patient         Patient?
  doctor          Doctor?
  accounts        Account[]
  sessions        Session[]
}

model Patient {
  id              String    @id @default(cuid())
  userId          String    @unique
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  dateOfBirth     DateTime?
  phone           String?
  address         String?
  bloodGroup      String?
  allergies       String[]
  medications     String[]
  
  appointments    Appointment[]
  prescriptions   Prescription[]
  medicalRecords  MedicalRecord[]
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model Doctor {
  id              String    @id @default(cuid())
  userId          String    @unique
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  specialization  String
  qualification   String
  experience      Int
  consultationFee Decimal
  availability    Json
  
  appointments    Appointment[]
  prescriptions   Prescription[]
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model Appointment {
  id              String    @id @default(cuid())
  patientId       String
  patient         Patient   @relation(fields: [patientId], references: [id])
  doctorId        String
  doctor          Doctor    @relation(fields: [doctorId], references: [id])
  
  date            DateTime
  type            AppointmentType
  status          AppointmentStatus @default(PENDING)
  reason          String
  notes           String?
  
  prescription    Prescription?
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model Prescription {
  id              String    @id @default(cuid())
  appointmentId   String    @unique
  appointment     Appointment @relation(fields: [appointmentId], references: [id])
  patientId       String
  patient         Patient   @relation(fields: [patientId], references: [id])
  doctorId        String
  doctor          Doctor    @relation(fields: [doctorId], references: [id])
  
  medications     Json
  instructions    String
  validUntil      DateTime
  
  createdAt       DateTime  @default(now())
}

model MedicalRecord {
  id              String    @id @default(cuid())
  patientId       String
  patient         Patient   @relation(fields: [patientId], references: [id])
  
  type            String
  title           String
  description     String?
  files           String[]
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

enum Role {
  PATIENT
  DOCTOR
  ADMIN
}

enum AppointmentType {
  IN_PERSON
  VIDEO
  PHONE
}

enum AppointmentStatus {
  PENDING
  CONFIRMED
  COMPLETED
  CANCELLED
  NO_SHOW
}

// NextAuth models
model Account {
  // ... NextAuth Account model
}

model Session {
  // ... NextAuth Session model
}
```

### Phase 6: Performance & SEO

#### 6.1 Metadata Generation
```typescript
// app/(marketing)/services/[service]/page.tsx
import { notFound } from 'next/navigation'
import { getService } from '@/lib/actions/service'

export async function generateMetadata({ 
  params 
}: { 
  params: { service: string } 
}) {
  const service = await getService(params.service)
  
  if (!service) return {}

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      images: [service.image],
    },
  }
}

export async function generateStaticParams() {
  const services = await getServices()
  
  return services.map((service) => ({
    service: service.slug,
  }))
}
```

#### 6.2 Progressive Web App
```json
// public/manifest.json
{
  "name": "Digital Care Healthcare",
  "short_name": "Digital Care",
  "description": "Modern healthcare platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0070f3",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Phase 7: Testing & Deployment

#### 7.1 Testing Setup
```typescript
// __tests__/appointment.test.ts
import { createAppointment } from '@/lib/actions/appointment'
import { prismaMock } from '@/lib/prisma.mock'

describe('Appointment Actions', () => {
  it('should create appointment', async () => {
    const formData = new FormData()
    formData.set('doctorId', 'doctor-1')
    formData.set('date', '2024-01-01T10:00:00Z')
    formData.set('reason', 'Regular checkup')
    formData.set('type', 'in-person')

    const result = await createAppointment(formData)
    
    expect(result).toBeDefined()
    expect(prismaMock.appointment.create).toHaveBeenCalled()
  })
})
```

#### 7.2 Deployment Configuration
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@v3
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 📝 Migration Checklist

- [ ] Create fresh Next.js 15 project
- [ ] Setup TypeScript with strict mode
- [ ] Configure Tailwind CSS
- [ ] Setup Prisma with PostgreSQL
- [ ] Implement NextAuth v5
- [ ] Create app router structure
- [ ] Migrate all pages to app directory
- [ ] Convert to Server Components where possible
- [ ] Implement Server Actions
- [ ] Add loading and error boundaries
- [ ] Setup metadata and SEO
- [ ] Configure image optimization
- [ ] Implement caching strategies
- [ ] Add monitoring and analytics
- [ ] Setup CI/CD pipeline
- [ ] Deploy to Vercel
- [ ] Performance testing
- [ ] Security audit

## 🚀 Quick Start Commands
```bash
# Create new Next.js 15 project
npx create-next-app@latest digital-care --typescript --tailwind --app

# Install dependencies
npm install

# Setup database
npm run db:push
npm run db:seed

# Start development
npm run dev
```

Start migration by creating a new branch and implementing features incrementally. Test thoroughly at each step!
```

## 📌 Key Points:

1. **Modern Stack**: Next.js 15, React 19, Server Components, Server Actions
2. **Healthcare Features**: Appointments, Prescriptions, Telemedicine, Medical Records
3. **Performance**: PPR, Streaming, Optimized Images, Caching
4. **Security**: Authentication, Authorization, Data Protection
5. **SEO**: Dynamic metadata, Sitemap, Structured Data
6. **Developer Experience**: TypeScript, ESLint, Prettier, Testing

