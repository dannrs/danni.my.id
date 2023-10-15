/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            h1: {
              fontFamily: 'Barlow',
              fontSize: '1.875rem',
              marginBottom: '0.5rem',
              letterSpacing: '-0.025rem',
              fontWeight: '800',
              color: 'hsl(var(--foreground-2))',
              scrollMargin: '4.5rem'
            },
            h2: {
              fontFamily: 'Barlow',
              fontSize: '1.5rem',
              marginTop: '1.5em',
              marginBottom: '0.75rem',
              letterSpacing: '-0.025rem',
              fontWeight: '700',
              color: 'hsl(var(--foreground-2))',
              scrollMargin: '4.5rem'
            },
            h3: {
              fontFamily: 'Barlow',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'hsl(var(--foreground-2))',
              marginTop: '1.4em',
              scrollMargin: '4.5rem'
            },
            h4: {
              fontFamily: 'Barlow',
              fontWeight: '700',
              color: 'hsl(var(--foreground-2))',
              marginTop: '1.3em',
              scrollMargin: '4.5rem'
            },
            img: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem'
            },
            picture: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem'
            },
            video: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem'
            },
          }
        }
      },
      fontSize: {
        '3xl': [
          '2rem',
          {
            lineHeight: '2.25rem'
          }
        ]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        blur: 'hsl(var(--blur) / 0.9)',
        background: 'hsl(var(--background))',
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          2: 'hsl(var(--foreground-2))',
          3: 'hsl(var(--foreground-3))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          2: 'hsl(var(--muted-2))',
          3: 'hsl(var(--muted-3))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['InterVariable', ...fontFamily.sans],
        heading: ['Barlow', ...fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
