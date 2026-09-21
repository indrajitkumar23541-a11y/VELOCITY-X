// VELOCITY X - Automatic Cloud Update Manager (OTA Background Sync)
type UpdateCallback = () => void;

class UpdateManager {
  private registration: ServiceWorkerRegistration | null = null;
  private updateAvailable = false;
  private callbacks: Set<UpdateCallback> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      this.init();
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
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      // 1. Check for update when phone reconnects to internet
      window.addEventListener('online', () => {
        console.log('[UpdateManager] Device came ONLINE - checking for cloud updates...');
        this.checkForUpdate();
      });

      // 2. Check for update when app returns to foreground
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.checkForUpdate();
        }
      });

      // 3. Periodic background check every 60 seconds while online
      window.setInterval(() => {
        if (navigator.onLine) {
          this.checkForUpdate();
        }
      }, 60000);

      // Initial check after startup
      setTimeout(() => this.checkForUpdate(), 3000);
    } catch (err) {
      console.warn('[UpdateManager] Registration error:', err);
    }
  }

  /**
   * Actively queries the server for a newer sw.js byte hash
   */
  public async checkForUpdate(): Promise<void> {
    if (!this.registration || !navigator.onLine) return;
    try {
      await this.registration.update();
      console.log('[UpdateManager] Checked GitHub cloud for updates');
    } catch (err) {
      console.warn('[UpdateManager] Check update error:', err);
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
    console.log('[UpdateManager] ⚡ New game version downloaded and ready to apply!');
    this.updateAvailable = true;
    this.callbacks.forEach((cb) => cb());
  }

  /**
   * Tell waiting service worker to skipWaiting and trigger reload
   */
  public applyUpdate(): void {
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
