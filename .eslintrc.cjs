module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react-refresh',
    'import',
    'node',
    'promise',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-simple-import-sort',
    'unused-imports',
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'no-var': 'error',
    'no-empty-static-block': 'error',
    'unused-imports/no-unused-imports': 'error',
    'require-await': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};