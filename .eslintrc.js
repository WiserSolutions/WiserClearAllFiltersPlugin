module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    $: false,
    $$: false,
    _: false,
    prism: false
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'script'
  },
  rules: {
    'indent': ['error', 2],
    'no-var': ['error'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
