module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-undef': 'off',
  },
};
