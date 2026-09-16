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
        'rx-charcoal': '#05070C',    // near-black navy
      },
      fontFamily: {
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
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        // Float & movement animations
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        'gradient-move': 'gradient-move 16s ease infinite',
        
        // Star & twinkle animations
        'star-flow': 'starFlow 12s linear infinite',
        'star-flow-slow': 'starFlow 20s linear infinite',
        'star-flow-fast': 'starFlow 7s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        // Movement keyframes
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

        // Star & twinkle keyframes
        starFlow: {
          '0%': { transform: 'translate(-10vw, -10vh)', opacity: '0.2' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(110vw, 110vh)', opacity: '0.1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      meteorShower: {
          '0%': { 
            // Start off-screen top-right, perfectly bright
            transform: 'translate(20vw, -10vh) rotate(-35deg)', 
            opacity: '1',
            // Define the tail color/length. Using rx-cyan as a tail glow.
            filter: 'drop-shadow(-5px -5px 10px #4FDFFF)'
          },
          '20%': {
            // Quickly become very bright and elongated (stretch effect)
            opacity: '1',
            transform: 'translate(10vw, 15vh) rotate(-35deg) scaleX(1.4)', 
            filter: 'drop-shadow(-8px -8px 15px #4FDFFF)'
          },
          '100%': { 
            // Fall to the bottom left, fading out completely
            transform: 'translate(-80vw, 110vh) rotate(-35deg) scaleX(1)', 
            opacity: '0',
            filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
          },
        },
    },
  },
  plugins: [],
};