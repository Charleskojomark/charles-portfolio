/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080C14',
          card: '#0F172A',
          surface: '#162238',
          border: '#1E293B',
          borderLight: '#334155',
          // Sharp blue palette
          blue: '#2563EB',
          'blue-bright': '#3B82F6',
          'blue-deep': '#1D4ED8',
          'blue-light': '#60A5FA',
          'blue-glow': 'rgba(37, 99, 235, 0.25)',
          teal: '#00D2FF',
          indigo: '#6366F1',
          green: '#10B981',
          amber: '#F59E0B',
          text: '#F8FAFC',
          muted: '#94A3B8',
          dim: '#475569',
          // Light Mode Specifics
          lightBg: '#FFFFFF',
          lightSurface: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
          lightBorderDark: '#CBD5E1',
          lightText: '#0F172A',
          lightMuted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -4px rgba(37, 99, 235, 0.35)',
        'glow-teal': '0 0 25px -4px rgba(0, 210, 255, 0.3)',
        'glow-green': '0 0 20px -4px rgba(16, 185, 129, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-light': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
