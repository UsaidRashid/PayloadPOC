import type { AccessArgs } from 'payload'

export const isAdmin = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true
  }
  // Scenario #2 - Disallow all others
  return false
}

export const isAdminOrEditor = ({ req: { user } }: AccessArgs<any>) => {
  // Scenario #1 - Check if user has the 'admin' or  'editor'  role
  if (user && (user.role === 'admin' || user.role === 'editor')) {
    return true
  }
  // Scenario #2 - Disallow all others
  return false
}

export const isAdminOrSelf = ({ req: { user }, id }: AccessArgs<any>) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true
  }
  // Scenario #2 - Check if user is owner
  return user?.id === id
}

export const isAdminOrEditorFilter = ({ req: { user } }: AccessArgs<any>) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true
  }
  // Scenario #2 - Check if user is owner
  return (
    user?.role === 'editor' && {
      role: {
        equals: 'editor',
      },
    }
  )
}
