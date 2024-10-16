import type { Config } from 'tailwindcss/types/config'

export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.{blade.php,tsx,ts}',
    './resources/theme/**/*.{tsx,ts}',
    './resources/components/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'InterVariable Fallback'],
        pacifico: ['Pacifico', 'Pacifico Fallback'],
      },

      boxShadow: {
        'highlight': 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'input': '0 0 0 1px #417f62',
        'invalid-input': '0 0 0 1px #dc2626',
        'base':
          '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'dropdown':
          'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px',

        'card':
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
        'card-cta':
          'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
      },

      colors: {
        custom: {
          'custom-hsl': 'hsl(154, 12%, 45%)',
        },
        brand: {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#4338ca',
          '900': '#3730a3',
          '950': '#1e1b4b',
        },
      },
    },
  },

  plugins: [],
} satisfies Config
