import type { AccessArgs } from 'payload'

export const isAdmin = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true
  }
  // Scenario #3 - Disallow all others
  return false
}

export const isAdminOrEditor = ({ req: { user } }: AccessArgs<any>) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && (user.role === 'admin' || user.role === 'editor')) {
    return true
  }
  // Scenario #3 - Disallow all others
  return false
}
