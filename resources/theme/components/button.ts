import { Button } from '@mantine/core'
import { cn } from '~/utils/css'

export const ButtonExtension = Button.extend({
  defaultProps: { size: 'sm', radius: 'md' },
  classNames: {
    root: "data-[size='xl']:rounded-xl data-[size='lg']:rounded-xl overflow-visible data-[size='md']:rounded-[10px]",
    loader: cn('[&>span]:animate-spin'),
    label: cn('data-[loading]:opacity-0'),
  },
})
