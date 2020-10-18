module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-unresolved': 'off',
    'no-unused-components': 'off',
  },
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        'vue/no-unused-components': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};
