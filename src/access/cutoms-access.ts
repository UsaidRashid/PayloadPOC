import type { AccessArgs } from 'payload'

type Collection = 'pages' | 'posts'
type Action = 'create' | 'read' | 'update' | 'delete'

export const checkCustomAccess =
  (collection: Collection, action: Action) =>
  ({ req: { user }, data }: AccessArgs<any>) => {
    if (user?.role === 'admin') return true
    console.log('d->', data)
    const accessKey = user?.customAccess?.[collection]?.[action]
    switch (accessKey) {
      case 'yes':
        return true
      case 'no':
        return false
      case 'isOwner':
        return user?.id === data?.createdBy
    }
    return false
  }
