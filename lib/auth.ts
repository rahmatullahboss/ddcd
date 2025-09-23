import { auth } from '@/lib/auth-utils'
import type { User } from 'next-auth'

// Extend the User type to include role
interface UserWithRole extends User {
  role?: string
}

export const currentUser = async () => {
  const session = await auth()
  return session?.user
}

export const currentRole = async () => {
  const session = await auth()
  return (session?.user as UserWithRole)?.role
}

export const isAuthenticated = async () => {
  const session = await auth()
  return !!session
}