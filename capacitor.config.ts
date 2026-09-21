import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.velocityx.cyberracer',
  appName: 'VELOCITY X',
  webDir: 'dist',
  backgroundColor: '#080b12',
  plugins: {
    ScreenOrientation: {
      orientation: 'landscape',
    },
    StatusBar: {
      overlaysWebView: true,
      style: 'DARK',
    },
  },
  android: {
    backgroundColor: '#080b12',
    allowMixedContent: true,
  },
  ios: {
    backgroundColor: '#080b12',
    contentInset: 'always',
  },
};

export default config;
