const eslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'arrow-body-style' : ['warn', 'as-needed'],
    'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
    'react/jsx-closing-bracket-location': [2, {'selfClosing': 'after-props', 'nonEmpty': 'after-props'}],
    'react/prop-types': 'off',
  },
}


module.exports = eslintConfig
