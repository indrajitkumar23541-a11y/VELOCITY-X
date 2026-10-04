import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));
const buildTimestamp = Date.now().toString();
const appVersion = pkg.version || '1.3.4';

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

function htmlHeadersPlugin(): Plugin {
  return {
    name: 'html-headers-plugin',
    configureServer(server) {
      server.middlewares.use((_req, res, next) => {
        const orig = res.setHeader.bind(res);
        res.setHeader = function (key: string, val: any) {
          if (typeof key === 'string' && key.toLowerCase() === 'content-type' && typeof val === 'string' && val.includes('text/html')) {
            val = 'text/html; charset=utf-8';
          }
          return orig(key, val);
        };
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((_req, res, next) => {
        const orig = res.setHeader.bind(res);
        res.setHeader = function (key: string, val: any) {
          if (typeof key === 'string' && key.toLowerCase() === 'content-type' && typeof val === 'string' && val.includes('text/html')) {
            val = 'text/html; charset=utf-8';
          }
          return orig(key, val);
        };
        next();
      });
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
  plugins: [react(), swVersionPlugin(buildTimestamp), htmlHeadersPlugin()],
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          vendor: ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
  },
});
