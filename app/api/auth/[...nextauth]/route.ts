import NextAuth from 'next-auth'
import type { NextAuthConfig, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { z } from 'zod'

// Extend the User type to include role
interface UserWithRole extends User {
  role?: string
}

// Extend the Session type to include role
interface SessionWithRole {
  user: UserWithRole
}

// Mock user data for demonstration
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In a real app, this would be hashed
    role: 'patient'
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah@digitalcare.com',
    password: 'doctor123', // In a real app, this would be hashed
    role: 'doctor'
  }
]

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6)
          })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          
          // In a real app, you would query your database here
          const user = users.find(u => u.email === email && u.password === password)
          
          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role
            } as UserWithRole
          }
        }
        
        return null
      }
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as UserWithRole).role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        ;(session.user as UserWithRole).role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)