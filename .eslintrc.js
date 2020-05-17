module.exports = {
  root: true,
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'comma-dangle': ['error', 'always-multiline'],

    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      },
    }],
  },
  overrides: [
    {
      files: '*.d.ts',
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
};
