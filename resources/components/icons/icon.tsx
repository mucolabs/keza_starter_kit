import { type SVGProps } from 'react'
import { cn } from '~/utils/css'
import { type IconName } from './sprite'

const sizes = {
  'default': 'w-[1em] h-[1em]', // font size
  'xs': 'w-3 h-3',
  'sm': 'w-5 h-5',
  'md': 'w-5 h-5',
  'lg': 'w-6 h-6',
  'xl': 'w-7 h-7',
  '2xl': 'w-14 h-14',
  '3xl': 'w-21 h-21',
  '4xl': 'w-28 h-28',
  '5xl': 'w-35 h-35',
  '6xl': 'w-42 h-42',
} as const

type Size = keyof typeof sizes

export type IconProps = SVGProps<SVGSVGElement> & {
  name?: IconName
  size?: Size
}

export function Icon(props: IconProps) {
  const { name, size = 'default', className, ...rest } = props

  return (
    <svg
      {...rest}
      className={cn('inline h-4 w-4 self-center', sizes[size], className)}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  )
}
