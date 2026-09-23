import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const buildTimestamp = Date.now().toString();
const appVersion = '1.2.0';

function swVersionPlugin(timestamp: string): Plugin {
  return {
    name: 'sw-version-plugin',
    closeBundle() {
      const swPath = path.resolve(__dirname, 'dist/sw.js');
      if (fs.existsSync(swPath)) {
        let content = fs.readFileSync(swPath, 'utf-8');
        content = content.replace(/__BUILD_TIMESTAMP__/g, timestamp);
        fs.writeFileSync(swPath, content);
      }

      // Write version.json into dist for remote version checking
      const versionPath = path.resolve(__dirname, 'dist/version.json');
      const versionData = {
        version: appVersion,
        timestamp,
        buildDate: new Date().toISOString(),
      };
      fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2));

      // Also ensure public/version.json exists for dev/local sync
      const publicVersionPath = path.resolve(__dirname, 'public/version.json');
      fs.writeFileSync(publicVersionPath, JSON.stringify(versionData, null, 2));
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(buildTimestamp),
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [react(), swVersionPlugin(buildTimestamp)],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
  },
});
