import type { MantineThemeOverride } from '@mantine/core'
import { colors } from './colors'
import { variantColorResolver } from './variant_color_resolver'

export const foundations: MantineThemeOverride = {
  primaryColor: 'indigo',
  primaryShade: { light: 6 },
  activeClassName: '',
  defaultRadius: 'md',
  fontFamily: `'InterVariable', 'InterVariable Fallback'`,
  fontSmoothing: true,
  colors,
  variantColorResolver,
}
