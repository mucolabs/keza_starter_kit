import { PasswordInput } from '@mantine/core'
import { cn } from '~/utils/css'

export const PasswordInputExtension = PasswordInput.extend({
  defaultProps: {
    size: 'sm',
    inputWrapperOrder: ['label', 'input', 'error', 'description'],
  },
  classNames: {
    wrapper: cn('group peer'),

    input:
      "outline-none outline-transparent border border-slate-200 hover:border-slate-300  focus-within:border-brand-500 focus-within:hover:border-brand-500 focus-within:shadow-input placeholder:text-slate-500 group-data-[error='true']:border-red-600 group-data-[error='true']:shadow-invalid-input group-data-[error='true']:text-slate-800",

    description: cn("peer-data-[error='true']:hidden mt-1 text-xs"),
    error: 'text-red-600 mt-1',
    label: cn('text-slate-800 mb-1 font-medium'),
  },
})
