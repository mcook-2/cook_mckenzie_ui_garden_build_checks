// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      '.config/',
      '.husky/',
      '.storybook/',
      '.vscode/',
      'node_modules/',
      'storybook-static/',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      '*.config.json'
    ]
  }
);