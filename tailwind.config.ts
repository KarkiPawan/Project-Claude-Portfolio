import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF5A0E',
        'brand-light': '#FFF2EC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
    },
  },
  plugins: [],
}

export default config
