import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '900px',
      },
      colors: {
        navy: '#050B1A',
        'navy-2': '#0A1730',
        'navy-3': '#14213D',
        teal: '#00E5C7',
        'teal-2': '#00B8E6',
        'teal-dark': '#008F7A',
        violet: '#7C5CFF',
        gold: '#FFB547',
        rose: '#FF5C96',
        indigo: '#4361EE',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
        float2: 'float2 11s ease-in-out infinite',
        float3: 'float3 9s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        'bar-grow': 'barGrow 1.2s cubic-bezier(.22,1,.36,1) both',
        shimmer: 'shimmer 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        barGrow: {
          from: { height: '0%' },
          to: { height: '100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(0,229,199,.6), 0 8px 24px -6px rgba(0,229,199,.4)' 
          },
          '50%': { 
            boxShadow: '0 0 0 12px rgba(0,229,199,0), 0 8px 24px -6px rgba(0,229,199,.6)' 
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
