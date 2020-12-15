module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      colors: {
        'accent-1': '#333',
      },
      height: {
        'fit': 'fit-content',
      },
      inset: {
        '50': '50%',
      },
      transitionProperty: {
        'position': 'top, left, bottom, right',
      },
      width: {
        'fit': 'fit-content',
      },
      zIndex: {
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      }
    },
  },
  variants: {},
  plugins: [],
}
