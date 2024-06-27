module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      '@vue/eslint-config-standard'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
    }
  };
  