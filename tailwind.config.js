module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'var(--colour-primary-lighter)',
          light: 'var(--colour-primary-light',
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
        success: {
          DEFAULT: 'var(--colour-success-default)',
        },
        warning: {
          DEFAULT: 'var(--colour-warning-default)',
        },
        danger: {
          DEFAULT: 'var(--colour-danger-default)',
        },
        neutral: {
          DEFAULT: 'var(--colour-neutral-default)',
        },
        white: {
          DEFAULT: 'var(--colour-white-default)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
