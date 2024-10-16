import '@mantine/core/styles.css'
import '~/assets/css/app.css'
import '~/assets/css/fonts.css'
import '~/bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { seo } from '~/config/seo'
import { ThemeProvider } from '~/theme'

const appName = import.meta.env.VITE_APP_NAME || seo.name

createInertiaApp({
  progress: { color: '#6366f1' },
  title(title) {
    return `${title || seo.description} - ${appName}`
  },
  resolve(name) {
    return resolvePageComponent(
      `./views/pages/${name}.tsx`,
      import.meta.glob('./views/pages/**/*.tsx')
    )
  },
  setup({ el, App, props }) {
    if (import.meta.env.DEV) {
      createRoot(el).render(
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      )
      return
    }

    hydrateRoot(
      el,
      <ThemeProvider>
        <App {...props} />
      </ThemeProvider>
    )
  },
})
