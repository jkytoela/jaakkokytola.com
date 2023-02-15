module.exports = {
  'overrides': [{
    'extends': [
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    'files': ['*.ts', '*.tsx'],
    'parserOptions': {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    }
  }],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  'plugins': ['@typescript-eslint'],
  'extends': ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  'rules': {
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],    
    '@typescript-eslint/consistent-type-imports': 'warn',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@next/next/no-img-element': 'off',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [{
          'pattern': 'react',
          'group': 'external',
          'position': 'before'
        }],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    '@typescript-eslint/comma-dangle': 'off',
    'import/prefer-default-export': 'off'
  }
}