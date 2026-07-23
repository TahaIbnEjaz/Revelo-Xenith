/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Revelo Xenith brand palette
        'rx-navy-deep': '#071B34',   // deepest background
        'rx-navy': '#0C2748',        // secondary background / cards
        'rx-blue': '#2563EB',        // primary accent (buttons, links)
        'rx-cyan': '#4FDFFF',        // glow / highlight accent
        'rx-charcoal': '#000000',    // pure black, second gradient stop for moving backgrounds
      },
      fontFamily: {
        // Poppins for display headings, Manrope for body text
        display: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'rx-gradient': 'linear-gradient(135deg, #071B34 0%, #0C2748 50%, #071B34 100%)',
        'rx-glow-gradient': 'linear-gradient(135deg, #2563EB 0%, #4FDFFF 100%)',
      },
      boxShadow: {
        'rx-glow': '0 0 40px rgba(79, 223, 255, 0.25)',
        'rx-glow-strong': '0 0 60px rgba(79, 223, 255, 0.4)',
        'rx-card': '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        'gradient-move': 'gradient-move 16s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
