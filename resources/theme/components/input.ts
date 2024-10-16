import { Input } from '@mantine/core'
import { cn } from '~/utils/css'

export const InputExtension = Input.extend({
  defaultProps: { size: 'md' },
  classNames: {
    wrapper: cn('group peer'),
    input:
      "outline-none outline-transparent border border-slate-200  focus:border-brand-500 focus:shadow-input placeholder:text-slate-400 group-data-[error='true']:border-red-600 group-data-[error='true']:shadow-invalid-input group-data-[error='true']:text-slate-800",
  },
})
