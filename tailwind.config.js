/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['roboto']
    },
    colors: {
      'black-1': '#232323',
      'grey-1': '#444444',
      'grey-2': '#dddddd',
      'grey-3': '#d3d3d3',
      'white-1': '#ffffff',
      'green-1': '#55B481',
      'img-border-1': '#d9d9d9'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      gridTemplateRows: {
        10: 'repeat(10, minmax(0, 1fr))'
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10'
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10'
      },
      boxShadow: {
        'shadow-1': '0px 0px 10px 0px'
      }
    }
  },
  plugins: []
}
