import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'
import { watch } from 'vite-plugin-watch'

const ReactCompilerConfig = {
  target: '18', // '17' | '18' | '19'
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    laravel({
      input: [
        'resources/assets/css/app.css',
        'resources/assets/css/fonts.css',
        'resources/app.tsx',
      ],
      ssr: 'resources/ssr.tsx',
      refresh: true,
    }),

    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),

    watch({
      pattern: 'app/{Data,Enums,Pages}/**/*.php',
      command: 'php artisan typescript:transform',
      onInit: !isSsrBuild,
    }),
    watch({
      pattern: 'routes/*.php',
      command: 'php artisan ziggy:generate resources/routes/ziggy --types',
    }),
  ],
  resolve: {
    alias: {
      '~/': '/resources/',
    },
  },
}))
