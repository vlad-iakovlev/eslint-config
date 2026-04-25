import eslintConfig from '@vlad-iakovlev/eslint-config'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['coverage', 'dist', 'prettier.config.js']),
  eslintConfig.node,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)
