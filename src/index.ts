import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import prettierConfig from 'eslint-config-prettier'
import a11yConfig from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const baseConfig = defineConfig(eslint.configs.recommended)

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
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
)

const reactConfig = defineConfig(
  { ...reactPlugin.configs.flat.recommended },
  reactHooksPlugin.configs.flat.recommended,
  a11yConfig.flatConfigs.strict,
  nextPlugin.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'jsx-a11y/alt-text': [
        'error',
        {
          elements: ['img', 'object', 'area', 'input[type="image"]'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
)

export default {
  next: defineConfig(baseConfig, reactConfig, typescriptConfig, prettierConfig),
  node: defineConfig(baseConfig, typescriptConfig, prettierConfig),
}
