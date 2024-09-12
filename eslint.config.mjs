// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';

export default tseslint.config(
    {
        ignores: ['**/dist/**']
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['test/**/*.{js,ts}'],
        ...jest.configs['flat/recommended'],
        rules: {
          ...jest.configs['flat/recommended'].rules,
          'jest/prefer-expect-assertions': 'off',
        },
    },
);
