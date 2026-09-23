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

      // Reload when new service worker takes over control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
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

      // Initial check after startup
      setTimeout(() => this.checkForUpdate(), 2500);
    } catch (err) {
      console.warn('[UpdateManager] Registration error:', err);
    }
  }

  /**
   * Actively queries the server for version.json and sw.js
   */
  public async checkForUpdate(): Promise<void> {
    if (!navigator.onLine) return;

    try {
      // 1. Direct version.json network check (bypasses browser heuristics)
      const res = await fetch(`./version.json?_t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const remote = await res.json();
        const currentTimestamp = typeof __BUILD_TIMESTAMP__ !== 'undefined' ? __BUILD_TIMESTAMP__ : '';
        if (remote.timestamp && currentTimestamp && remote.timestamp !== currentTimestamp) {
          console.log(`[UpdateManager] Newer build detected in cloud: ${remote.version} (${remote.timestamp}) vs local (${currentTimestamp})`);
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

    // 2. Check service worker byte hash
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

    if (this.registration?.waiting) {
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    } else {
      window.location.reload();
    }
  }

  public isUpdateReady(): boolean {
    return this.updateAvailable;
  }
}

export const updateManager = new UpdateManager();
