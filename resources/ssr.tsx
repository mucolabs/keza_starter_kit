import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import ReactDOMServer from 'react-dom/server'
import { RouteName } from 'ziggy-js'
import { route } from '../vendor/tightenco/ziggy/src/js'
import { seo } from './config/seo'
import { ThemeProvider } from './theme'

const appName = import.meta.env.VITE_APP_NAME || seo.name

createServer((page) => {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title || seo.description} - ${appName}`,
    resolve(name) {
      return resolvePageComponent(
        `./views/pages/${name}.tsx`,
        import.meta.glob('./views/pages/**/*.tsx')
      )
    },
    setup: ({ App, props }) => {
      /* eslint-disable */
      // @ts-expect-error
      global.route<RouteName> = (name, params, absolute) =>
        route(name, params as any, absolute, {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location),
        })
      /* eslint-enable */

      return (
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      )
    },
  })
})
