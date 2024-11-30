import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { isAdmin } from '@/utilities/auth'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: isAdmin,
    create: isAdmin,
    delete: isAdmin,
    read: authenticated,
    update: isAdmin,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
  timestamps: true,
}
