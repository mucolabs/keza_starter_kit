import { Divider } from '@mantine/core'
import { cn } from '~/utils/css'

export const DividerExtension = Divider.extend({
  defaultProps: {
    classNames: { root: cn('border-dashed border-slate-200') },
  },
})
