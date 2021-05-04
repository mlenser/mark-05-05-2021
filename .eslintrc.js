module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:security/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'react/jsx-filename-extension': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    debug: true,
    project: ['tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'jest',
    'prefer-arrow',
    'prettier',
    'security',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/comma-dangle': 'off', // we want trailing commas in enums. See https://github.com/iamturns/eslint-config-airbnb-typescript/issues/147
    '@typescript-eslint/indent': 'off', // handled by prettier
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'consistent-return': 'off',
    curly: ['error', 'all'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/require-top-level-describe': 'error',
    'jest/valid-expect': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        singleReturnOnly: true,
      },
    ],
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-no-literals': [
      'off',
      {
        noStrings: false,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'security/detect-non-literal-regexp': 'off',
    'security/detect-object-injection': 'off',
    'security/detect-unsafe-regex': 'off',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
