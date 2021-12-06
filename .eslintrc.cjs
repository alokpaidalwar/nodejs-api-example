module.exports = {
  extends: ['airbnb-base', 'plugin:import/recommended', 'prettier'],
  rules: {
    'no-console': 'off',
    "no-underscore-dangle": 'off',
    "import/extensions": [
      "error",
      {
          "js": "ignorePackages"
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
