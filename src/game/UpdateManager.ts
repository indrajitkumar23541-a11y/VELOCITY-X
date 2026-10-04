// VELOCITY X - Automatic Cloud Update Manager (OTA Background Sync)
declare const __BUILD_TIMESTAMP__: string;
declare const __APP_VERSION__: string;

type UpdateCallback = () => void;

class UpdateManager {
  private registration: ServiceWorkerRegistration | null = null;
  private updateAvailable = false;
  private callbacks: Set<UpdateCallback> = new Set();
  private currentGameState: string = 'SPLASH';
  private pendingReload = false;
  private isRefreshing = false;

  constructor() {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      this.init();
    }
  }

  public setGameState(state: string): void {
    this.currentGameState = state;
    // If an update was downloaded while the player was racing, apply it now that race has finished
    if (this.pendingReload && state !== 'RACING') {
      this.applyUpdate();
    }
  }

  private async init(): Promise<void> {
    try {
      if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        if ('serviceWorker' in navigator) {
          const regs = await navigator.serviceWorker.getRegistrations();
          for (const reg of regs) {
            await reg.unregister();
          }
        }
        return;
      }

      // Register with relative path so it works across GitHub Pages, Vercel, and localhost
      const swUrl = './sw.js';
      this.registration = await navigator.serviceWorker.register(swUrl, {
        updateViaCache: 'none', // Always check network for sw.js byte differences
      });

      console.log('[UpdateManager] ServiceWorker registered with scope:', this.registration.scope);

      // Check if an update is already waiting to activate
      if (this.registration.waiting) {
        this.notifyUpdateReady();
      }

      // Listen for new updates discovered by the browser
      this.registration.addEventListener('updatefound', () => {
        const newWorker = this.registration?.installing;
        if (!newWorker) return;

        newWorker.addEventListener('statechange', () => {
          // If a new worker installed and we already had an active controller, this is an update!
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            this.notifyUpdateReady();
          }
        });
      });

      // Track whether there was an active controller when the page loaded
      let hadInitialController = Boolean(navigator.serviceWorker.controller);

      // Reload when new service worker takes over control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadInitialController) {
          // Initial service worker installation claiming this client — do not reload!
          hadInitialController = true;
          return;
        }
        if (!this.isRefreshing) {
          if (this.currentGameState === 'RACING') {
            this.pendingReload = true;
          } else {
            this.isRefreshing = true;
            window.location.reload();
          }
        }
      });

      // 1. Check for update when phone reconnects to internet
      window.addEventListener('online', () => {
        console.log('[UpdateManager] Device came ONLINE - checking for cloud updates...');
        this.checkForUpdate();
      });

      // 2. Check for update when app returns to foreground / phone unlocked
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.checkForUpdate();
        }
      });

      // 3. Periodic background check every 45 seconds while online
      window.setInterval(() => {
        if (navigator.onLine) {
          this.checkForUpdate();
        }
      }, 45000);

      // Initial check immediately after startup
      setTimeout(() => this.checkForUpdate(), 800);
    } catch (err) {
      console.warn('[UpdateManager] Registration error:', err);
    }
  }

  public getRemoteVersion(): string {
    return this.latestCloudVersion || (typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.3.4');
  }

  private latestCloudVersion: string = '';

  /**
   * Actively queries the server for version.json and sw.js
   */
  public async checkForUpdate(): Promise<void> {
    if (!navigator.onLine) return;
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return;
    }

    try {
      // 1. Direct version.json network check with cache-busting timestamp
      const versionUrl = typeof window !== 'undefined'
        ? `${new URL('version.json', window.location.href).href}?_t=${Date.now()}`
        : `./version.json?_t=${Date.now()}`;

      const res = await fetch(versionUrl, { cache: 'no-store' });
      if (res.ok) {
        const remote = await res.json();
        const currentTimestamp = typeof __BUILD_TIMESTAMP__ !== 'undefined' ? __BUILD_TIMESTAMP__ : '';
        const currentVersion = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '';

        if (remote.version) {
          this.latestCloudVersion = remote.version;
        }

        const isNewBuild = Boolean(remote.timestamp && currentTimestamp && remote.timestamp !== currentTimestamp);
        const isNewVersion = Boolean(remote.version && currentVersion && remote.version !== currentVersion);

        if (isNewBuild || isNewVersion) {
          console.log(`[UpdateManager] 🚀 Newer build detected in cloud: v${remote.version} (${remote.timestamp}) vs local v${currentVersion} (${currentTimestamp})`);
          if (this.registration) {
            await this.registration.update();
          }
          this.notifyUpdateReady();
          return;
        }
      }
    } catch {
      // Offline or network error
    }

    // 2. Check service worker byte hash directly
    if (this.registration) {
      try {
        await this.registration.update();
        if (this.registration.waiting) {
          this.notifyUpdateReady();
        }
      } catch (err) {
        console.warn('[UpdateManager] Check update error:', err);
      }
    }
  }

  /**
   * Subscribe to update notifications
   */
  public onUpdate(callback: UpdateCallback): () => void {
    this.callbacks.add(callback);
    if (this.updateAvailable) {
      callback();
    }
    return () => this.callbacks.delete(callback);
  }

  private notifyUpdateReady(): void {
    if (this.updateAvailable) return;
    console.log('[UpdateManager] ⚡ New game version downloaded and ready to apply!');
    this.updateAvailable = true;
    this.callbacks.forEach((cb) => cb());
  }

  /**
   * Tell waiting service worker to skipWaiting and trigger reload
   */
  public applyUpdate(): void {
    if (this.isRefreshing) return;
    this.isRefreshing = true;

    try {
      if (this.registration?.waiting) {
        this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    } catch {
      // ignore
    }

    // Short timeout ensures message is sent before hard page reload
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  public isUpdateReady(): boolean {
    return this.updateAvailable;
  }
}

export const updateManager = new UpdateManager();
