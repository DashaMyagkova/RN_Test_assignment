module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    '@react-native',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'error',
    'prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/prop-types': ['error'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@svgs', './src/assets/svgs'],
        ['@pngs', './src/assets/pngs'],
        ['@atoms', './src/components/atoms'],
        ['@molecules', './src/components/molecules'],
        ['@organisms', './src/components/organisms'],
        ['@navigation', './src/navigation'],
        ['@screens', './src/screens'],
        ['@store', './src/store'],
        ['@styles', './src/styles'],
        ['@constants', './src/constants'],
        ['@hocs', './src/hocs'],
      ],
    },
  },
};
