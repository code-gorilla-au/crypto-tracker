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
        },
        secondary: {
          DEFAULT: 'var(--colour-secondary-default)',
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
