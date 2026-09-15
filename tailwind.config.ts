import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Rich espresso-brown — the café's primary accent
        teal: {
          50: '#F2E7DA',
          100: '#E6D0B8',
          200: '#D2AE86',
          300: '#B98B5D',
          400: '#9C6F45',
          500: '#83582F',
          600: '#6B4423', // primary brand
          700: '#573619',
          800: '#3F2712',
          900: '#33200E',
          950: '#1F1309',
        },
        // Rich creamy ivory — the café's warm canvas
        cream: {
          50: '#FCF8EF',
          100: '#F8F0DE', // page canvas
          200: '#F0E4C7',
          300: '#E4D2A8',
          400: '#D6BD87',
        },
        // Warm gold accent (used sparingly)
        gold: {
          300: '#E2C77E',
          400: '#D4B05A',
          500: '#C9A24B',
          600: '#B0863A',
        },
        // Warm spice accent (kept rare)
        spice: {
          400: '#D2723B',
          500: '#C2622E',
          600: '#A44E22',
        },
        ink: {
          DEFAULT: '#1A1712',
          soft: '#3B352C',
          muted: '#6B6356',
        },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Nunito Variable"', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.75rem, 8vw, 7rem)',
        'fluid-title': 'clamp(2rem, 5vw, 4rem)',
        'fluid-section': 'clamp(1.75rem, 4vw, 3rem)',
      },
      borderRadius: {
        arch: '50% 50% 0.75rem 0.75rem / 35% 35% 0.75rem 0.75rem',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(51, 32, 14, 0.08), 0 8px 24px -8px rgba(51, 32, 14, 0.10)',
        lift: '0 12px 32px -8px rgba(51, 32, 14, 0.18), 0 4px 12px -4px rgba(51, 32, 14, 0.12)',
        deep: '0 24px 60px -16px rgba(31, 19, 9, 0.35)',
        'inner-cream': 'inset 0 1px 0 0 rgba(255,255,255,0.4)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'teal-radial': 'radial-gradient(ellipse at top, #573619 0%, #33200E 60%, #1F1309 100%)',
        'cream-glow': 'radial-gradient(ellipse at 50% 0%, #FCF8EF 0%, #F8F0DE 55%, #F0E4C7 100%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'soft-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'steam-rise': {
          '0%': { opacity: '0', transform: 'translateY(0) scaleX(1)' },
          '40%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-40px) scaleX(1.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'steam-rise': 'steam-rise 3.5s ease-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
