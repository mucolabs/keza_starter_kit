import { Radio, RadioGroup } from '@mantine/core'
import { cn } from '~/utils/css'

export const RadioExtension = Radio.extend({
  defaultProps: { size: 'md' },
  classNames: {
    error: 'text-red-600',
    radio: cn('border-slate-200 checked:border-transparent'),
    label: cn('text-slate-800 font-medium'),
  },
})

export const RadioGroupExtension = RadioGroup.extend({
  classNames: {
    error: 'text-red-600 mt-2',
    label: cn('text-slate-800 font-medium'),
  },
})
