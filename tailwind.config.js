module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'var(--colour-primary-lighter)',
          light: 'var(--colour-primary-light)',
          DEFAULT: 'var(--colour-primary-default)',
          dark: 'var(--colour-primary-dark)',
          darker: 'var(--colour-primary-darker)',
        },
        accent: {
          lighter: 'var(--colour-accent-lighter)',
          light: 'var(--colour-accent-light)',
          DEFAULT: 'var(--colour-accent-default)',
          dark: 'var(--colour-accent-dark)',
          darker: 'var(--colour-accent-darker)',
        },
        dark: {
          lighter: 'var(--colour-dark-lighter)',
          light: 'var(--colour-dark-light)',
          DEFAULT: 'var(--colour-dark-default)',
          dark: 'var(--colour-dark-dark)',
          darker: 'var(--colour-dark-darker)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
