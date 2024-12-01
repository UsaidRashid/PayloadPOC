import type { CollectionConfig, Field } from 'payload'

import { authenticated } from '../../access/authenticated'
import { isAdmin, isAdminOrEditor } from '@/utilities/auth'

const rbacOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
  { label: 'Yes, if its owner', value: 'isOwner' },
]
const rbacFields: Field[] = [
  {
    name: 'create',
    type: 'select',
    options: rbacOptions,
    defaultValue: 'isOwner',
  },
  {
    name: 'read',
    type: 'select',
    options: rbacOptions,
    defaultValue: 'isOwner',
  },
  {
    name: 'update',
    type: 'select',
    options: rbacOptions,
    defaultValue: 'isOwner',
  },
  {
    name: 'delete',
    type: 'select',
    options: rbacOptions,
    defaultValue: 'isOwner',
  },
]

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: isAdminOrEditor,
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
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
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],

      required: true,
      defaultValue: 'user',
    },

    {
      name: 'customAccess',
      type: 'group',

      fields: [
        {
          name: 'pages',
          type: 'group',
          fields: rbacFields,
        },
        {
          name: 'posts',
          type: 'group',
          fields: rbacFields,
        },
      ],
    },
  ],
  timestamps: true,
}
