import { createTheme, MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'
import { components } from './components'
import { foundations } from './foundations'

const theme = createTheme({
  components,
  ...foundations,
})

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={theme}>
      <Toaster richColors closeButton />
      {children}
    </MantineProvider>
  )
}
