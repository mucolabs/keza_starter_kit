import { Textarea } from '@mantine/core'
import { cn } from '~/utils/css'

export const TextareaExtension = Textarea.extend({
  classNames: {
    wrapper: cn('group peer'),
    input:
      "outline-none outline-transparent border border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:shadow-input placeholder:text-slate-500 group-data-[error='true']:border-red-600 group-data-[error='true']:shadow-invalid-input group-data-[error='true']:text-slate-800",
    description: cn("peer-data-[error='true']:hidden"),
    error: 'text-red-600',
    label: cn('text-slate-800 font-medium'),
  },
})
