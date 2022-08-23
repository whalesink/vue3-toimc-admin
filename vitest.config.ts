/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.spec.ts', '**/*.test.ts'],
    exclude: ['dist/**', 'build/**', 'mock/**', 'public', 'node_modules']
  }
})
