import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius:{
        default: "var(--border)"
      },
      boxShadow: {
        active: "var(--shadow-active)",
        secondary: "var(--shadow-secondary)"
      },
      fontSize:{
        button: "var(--font-button)"
      },
      padding: {
        button: "var(--padding-button)"
      },
      colors: {
        background: "hsl(var(--background))",
        text: "hsl(var(--foreground-text))",
        idle: "hsl(var(--idle))",
        placeholder: "hsl(var(--placeholder))",
        heading: "hsl(var(--foreground-heading))",
        border: "hsl(var(--primary))",
        default: "hsl(var(--default))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--secondary-other))",
          foreground: "hsl(var(--secondary-other-foreground))"
        }
      }
    },
  },
  plugins: [plugin(function ({ addVariant }:{ addVariant:any }) {
        addVariant('child', '& > *');
        addVariant('last-child','& :last-child');
        addVariant('first-child','& :first-child');
        addVariant('child-hover', '& > *:hover');
    })],
}
export default config
