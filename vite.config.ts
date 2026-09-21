import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
  }
});
