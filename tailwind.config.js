/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Electric neon color palette
        electric: {
          blue: '#00F5FF',
          purple: '#8B5CF6',
          pink: '#F97CE6',
          green: '#00FFA1',
          yellow: '#FFE066',
        },
        // Dark theme optimized colors
        dark: {
          900: '#0A0A0B',
          800: '#1A1A1B',
          700: '#2A2A2B',
          600: '#3A3A3B',
          500: '#4A4A4B',
        },
        // Modern gradients
        cyber: {
          from: '#6366F1',
          via: '#8B5CF6',
          to: '#EC4899',
        },
        neon: {
          blue: 'rgba(0, 245, 255, 0.8)',
          purple: 'rgba(139, 92, 246, 0.8)',
          pink: 'rgba(249, 124, 230, 0.8)',
          green: 'rgba(0, 255, 161, 0.8)',
        }
      },
      fontSize: {
        // Ultra responsive typography
        'display-2xl': 'clamp(2.5rem, 8vw, 8rem)',
        'display-xl': 'clamp(2rem, 6vw, 6rem)',
        'display-lg': 'clamp(1.5rem, 4vw, 4rem)',
        'display-md': 'clamp(1.25rem, 3vw, 3rem)',
        'hero': 'clamp(3rem, 10vw, 12rem)',
        'mega': 'clamp(4rem, 12vw, 16rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        // Advanced scroll and interaction animations
        'glitch': 'glitch 0.3s ease-in-out',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'float-smooth': 'floatSmooth 8s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'parallax-slow': 'parallaxSlow 40s linear infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'magnetic-hover': 'magneticHover 0.3s ease-out',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'reveal-down': 'revealDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-reveal': 'scaleReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-reveal': 'slideReveal 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'text-reveal': 'textReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow-cycle': 'glowCycle 3s ease-in-out infinite',
        'spin-slow': 'spinSlow 8s linear infinite',
        'bounce-gentle': 'bounceGentle 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        neonPulse: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor)',
            opacity: '1' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 10px currentColor) drop-shadow(0 0 30px currentColor)',
            opacity: '0.8' 
          },
        },
        floatSmooth: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
          '75%': { transform: 'translateY(-30px) rotate(-1deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        parallaxSlow: {
          '0%': { transform: 'translateX(-100px) translateY(-100px)' },
          '100%': { transform: 'translateX(100px) translateY(100px)' },
        },
        aurora: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899)',
            transform: 'scale(1) rotate(0deg)',
          },
          '33%': { 
            background: 'linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B)',
            transform: 'scale(1.1) rotate(120deg)',
          },
          '66%': { 
            background: 'linear-gradient(45deg, #EC4899, #F59E0B, #6366F1)',
            transform: 'scale(0.9) rotate(240deg)',
          },
        },
        magneticHover: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0)) scale(1.05)' },
        },
        revealUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px) rotateX(90deg)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) rotateX(0deg)',
          },
        },
        revealDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-100px) rotateX(-90deg)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) rotateX(0deg)',
          },
        },
        scaleReveal: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8) rotateZ(-10deg)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) rotateZ(0deg)',
          },
        },
        slideReveal: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-100px) skewX(10deg)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0) skewX(0deg)',
          },
        },
        textReveal: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(50px)',
            filter: 'blur(10px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          },
        },
        glowCycle: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
          },
          '25%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.8)',
          },
          '75%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)',
          },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      screens: {
        'xs': '475px',
        '3xl': '1680px',
        '4xl': '2000px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px rgba(255, 255, 255, 0.3)',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px rgba(255, 255, 255, 0.3)',
        },
        '.bg-grid': {
          'background-image': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          'background-size': '20px 20px',
        },
        '.bg-grid-small': {
          'background-image': 'radial-gradient(circle, rgba(255,255,255,0.05) 0.5px, transparent 0.5px)',
          'background-size': '10px 10px',
        },
        '.transform-gpu': {
          'transform': 'translateZ(0)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.clip-path-polygon': {
          'clip-path': 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}