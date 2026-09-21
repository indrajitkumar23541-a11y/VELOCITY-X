import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function swVersionPlugin(): Plugin {
  return {
    name: 'sw-version-plugin',
    closeBundle() {
      const swPath = path.resolve(__dirname, 'dist/sw.js');
      const timestamp = Date.now().toString();
      if (fs.existsSync(swPath)) {
        let content = fs.readFileSync(swPath, 'utf-8');
        content = content.replace(/__BUILD_TIMESTAMP__/g, timestamp);
        fs.writeFileSync(swPath, content);
      }

      // Write version.json into dist for remote version checking
      const versionPath = path.resolve(__dirname, 'dist/version.json');
      const versionData = {
        version: `1.0.${timestamp.slice(-6)}`,
        timestamp,
        buildDate: new Date().toISOString(),
      };
      fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2));
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), swVersionPlugin()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
  },
});
