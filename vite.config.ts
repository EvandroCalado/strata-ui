/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.test/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/{test,spec}.{ts,tsx}'],
      exclude: ['src/**/index.ts', 'src/**/stories.{ts,tsx}'],
    },
    include: ['src/**/{test,spec}.{ts,tsx}'],
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: 'src/components/index.ts',
      name: 'strata-ui',
      formats: ['es', 'cjs'],
      fileName: 'strata-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'style.css',
      },
    },
  },
});
