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
          LIGHTER: 'var(--colour-primary-lighter)',
          LIGHT: 'var(--colour-primary-light',
          DEFAULT: 'var(--colour-primary-default)',
          DARK: 'var(--colour-primary-dark)',
          DARKER: 'var(--colour-primary-darker)',
        },
        accent: {
          LIGHTER: 'var(--colour-accent-lighter)',
          LIGHT: 'var(--colour-accent-light)',
          DEFAULT: 'var(--colour-accent-default)',
          DARK: 'var(--colour-accent-dark)',
          DARKER: 'var(--colour-accent-darker)',
        },
        dark: {
          LIGHTER: 'var(--colour-dark-lighter)',
          LIGHT: 'var(--colour-dark-light)',
          DEFAULT: 'var(--colour-dark-default)',
          DARK: 'var(--colour-dark-dark)',
          DARKER: 'var(--colour-dark-darker)',
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
