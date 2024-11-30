import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      label: 'Alignment',
      name: 'align',
      type: 'select',
      options: [
        {
          label: 'None',
          //@ts-expect-error
          value: null,
        },
        { label: 'Right', value: 'right' },
        { label: 'Left', value: 'left' },
      ],
      defaultValue: null,
    },
  ],
}
