import type { StaticImageData } from 'next/image'

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  align?: string | null
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
    align,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
          'flex  gap-x-2 items-center *:flex-1 *:shrink-0': align !== null,
          'flex-row-reverse': align === 'right',
        },
        className,
      )}
    >
      <Media
        imgClassName={cn(
          'border border-border rounded-[0.8rem] ',
          {
            'w-[50%] object-cover': align !== null,
          },
          imgClassName,
        )}
        resource={media}
        src={staticImage}
      />
      {caption && (
        <div
          className={cn(
            {
              'mt-6': align === null,
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText content={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
