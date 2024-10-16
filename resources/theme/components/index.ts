import type { MantineThemeComponents } from '@mantine/core'
import { ButtonExtension } from './button'
import { CheckboxExtension } from './checkbox'
import { DividerExtension } from './divider'
import { InputExtension } from './input'
import { MenuDividerExtension } from './menu_divider'
import { PasswordInputExtension } from './password_input'
import { RadioExtension, RadioGroupExtension } from './radio'
import { TextInputExtension } from './text_input'

export const components: MantineThemeComponents = {
  Button: ButtonExtension,
  Input: InputExtension,
  Radio: RadioExtension,
  RadioGroup: RadioGroupExtension,
  TextInput: TextInputExtension,
  MenuDivider: MenuDividerExtension,
  PasswordInput: PasswordInputExtension,
  Divider: DividerExtension,
  Checkbox: CheckboxExtension,
}
