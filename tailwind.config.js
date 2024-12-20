/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        custom_xs: '375px',
        custom_xxs: '640px',
        lg: '1024px',
        custom_xl: '1440px',
        custom_xll: '1600px',
        custom_xxl: '1920px'
      },
      colors: {
        turquoise: '#43E8B3',
        blueElectric: '#3651F3',
        yellow: '#FFB839',
        green: '#1BA137',
        blue: '#0E174C'
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1rem'
          }
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem'
          }
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem'
          }
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.75rem'
          }
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.75rem'
          }
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem'
          }
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.25rem'
          }
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '2.5rem'
          }
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '1'
          }
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '1'
          }
        ],
        '7xl': [
          '4.5rem',
          {
            lineHeight: '1'
          }
        ],
        '8xl': [
          '6rem',
          {
            lineHeight: '1'
          }
        ],
        '9xl': [
          '8rem',
          {
            lineHeight: '1'
          }
        ],
        '1sm': [
          '15px',
          {
            lineHeight: '15px',
            letterSpacing: '-0.408px',
            fontWeight: '500'
          }
        ],
        '1xl': [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '0.35px',
            fontWeight: '700'
          }
        ],
        '1.5xl': [
          '22px',
          {
            lineHeight: '15px',
            letterSpacing: '-0.408px',
            fontWeight: '500'
          }
        ],
        '2.5xl': [
          '29px',
          {
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '28px',
            letterSpacing: '-0.408px'
          }
        ],
        '6.5xl': [
          '42px',
          {
            fontWeight: '700',
            lineHeight: '46px',
            letterSpacing: '0.35px'
          }
        ]
      },
      boxShadow: {
        lg: '0px 4px 48px 0px rgba(255, 255, 255, 0.25)'
      }
    }
  },
  plugins: []
}
