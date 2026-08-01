import eslintReact from '@eslint-react/eslint-plugin'
import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import prettierConfig from 'eslint-config-prettier'
import jsxA11yX from 'eslint-plugin-jsx-a11y-x'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const baseConfig = defineConfig(eslint.configs.recommended, {
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
  },
})

const typescriptConfig = defineConfig(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-invalid-void-type': [
        'error',
        {
          allowInGenericTypeArguments: true,
          allowAsThisParameter: true,
        },
      ],
      '@typescript-eslint/no-unnecessary-type-arguments': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
)

const reactConfig = defineConfig(
  eslintReact.configs['recommended-typescript'],
  jsxA11yX.configs.strict,
  {
    rules: {
      '@eslint-react/set-state-in-effect': 'off',
      'jsx-a11y-x/no-noninteractive-tabindex': 'off',
    },
  },
)

export default {
  node: defineConfig(baseConfig, typescriptConfig, prettierConfig),
  react: defineConfig(
    baseConfig,
    reactConfig,
    typescriptConfig,
    prettierConfig,
  ),
  next: defineConfig(
    baseConfig,
    reactConfig,
    nextPlugin.configs.recommended,
    typescriptConfig,
    prettierConfig,
  ),
}
