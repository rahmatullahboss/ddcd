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
│   │   └── appointments/route.ts
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