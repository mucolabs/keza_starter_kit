import { Select } from '@mantine/core'
import { cn } from '~/utils/css'

export const SelectExtension = Select.extend({
  classNames: {
    wrapper: cn('group peer'),
    input: cn(''),
  },
})
