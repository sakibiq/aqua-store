/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#009FE3',
        navy: '#0A3B5C',
        offwhite: '#F7F8FA',
        skyblue: '#DDF4FF',
        cyan: '#BDEFFF',
        hoverblu: '#007FBC',
        muted: '#6B7A89',
        border: '#D8E2EA',
        trust: '#3AB97A',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 5s 1s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease both',
        pulse2: 'pulse2 2s infinite',
      },
    },
  },
  plugins: [],
}
