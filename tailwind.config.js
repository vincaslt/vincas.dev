module.exports = {
  purge: ['src/**/*.tsx', 'public/**/*.html'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#00ff00',
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
};
