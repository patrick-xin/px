import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ["var(--font-code)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent1: 'rgb(var(--color-accent1) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent2) / <alpha-value>)',
        accent3: 'rgb(var(--color-accent3) / <alpha-value>)',
        neutralDark: 'rgb(var(--color-neutral-dark) / <alpha-value>)',
        neutralLight: 'rgb(var(--color-neutral-light) / <alpha-value>)',
        neutralBackground: 'rgb(var(--color-neutral-background) / <alpha-value>)',
        neutralForeground: 'rgb(var(--color-neutral-foreground) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
