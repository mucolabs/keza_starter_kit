import { Checkbox } from '@mantine/core'
import { cn } from '~/utils/css'

export const CheckboxExtension = Checkbox.extend({
  classNames: {
    input: cn('border border-slate-200'),
  },
})
