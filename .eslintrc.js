module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'no-plusplus': 'off',
    'import/no-named-as-default': 0,
    'no-underscore-dangle': 'off',
    'global-require': 0,
    'no-nested-ternary': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'no-tabs': 0,
    'react/jsx-indent': 0,
  },
};
