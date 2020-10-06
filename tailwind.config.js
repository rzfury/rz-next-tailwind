module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
    },
  },
  variants: {},
  plugins: [],
}
