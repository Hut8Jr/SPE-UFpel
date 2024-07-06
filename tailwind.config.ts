import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary-blue': '#0B4499',
        'brand-dark-blue': '#163C76',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addComponents({
        '.heading-1': {
          fontSize: '3rem',
          fontWeight: '700',
        },
        '.heading-2': {
          fontSize: '2.25rem',
          fontWeight: '600',
        },
        '.subtitle-1': {
          fontSize: '1.5rem',
          fontWeight: '600',
        },
        '.subtitle-2': {
          fontSize: '1.25rem',
          fontWeight: '600',
        },
        '.paragraph-1': {
          fontSize: '0.875rem',
          fontWeight: '600',
        },
        '.paragraph-2': {
          fontSize: '0.875rem',
          fontWeight: '400',
        },
        '.caption': {
          fontSize: '0.6875rem',
          fontWeight: '300',
        },
        '.container': {
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 1.125rem',
        },
      })
    }),
  ],
}
export default config
