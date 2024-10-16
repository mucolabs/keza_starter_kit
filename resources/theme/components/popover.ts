import { Popover } from '@mantine/core'
import { cn } from '~/utils/css'

export const PopoverExtension = Popover.extend({
  classNames: {
    dropdown: cn('shadow-card ring-1 ring-slate-200 rounded-xl border-none'),
  },
})
