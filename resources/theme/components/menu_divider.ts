import { MenuDivider } from '@mantine/core'
import { cn } from '~/utils/css'

export const MenuDividerExtension = MenuDivider.extend({
  defaultProps: {
    classNames: { divider: cn('border-dashed border-slate-200') },
  },
})
