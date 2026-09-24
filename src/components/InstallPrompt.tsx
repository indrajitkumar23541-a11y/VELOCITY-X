// VELOCITY X - PWA Offline App Install Prompt & Guide
import React, { useState, useEffect, useCallback } from 'react';
import { Download, X, Smartphone, Check, Copy, Sparkles, ExternalLink } from 'lucide-react';
import { HapticsManager } from '../game/HapticsManager';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const triggerGlobalAppInstall = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('velocity-x-install-requested'));
  }
};

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    // Check if already running as installed standalone app
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    ) {
      setIsInstalled(true);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    const handleGlobalInstall = () => {
      handleInstallClick();
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('velocity-x-install-requested', handleGlobalInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('velocity-x-install-requested', handleGlobalInstall);
    };
  }, []);

  const handleInstallClick = useCallback(async () => {
    HapticsManager.buttonTap();
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          setIsInstalled(true);
          setShowBanner(false);
        } else {
          setShowGuideModal(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.warn('Install prompt error:', err);
        setShowGuideModal(true);
      }
    } else {
      setShowGuideModal(true);
    }
  }, [deferredPrompt]);

  const currentOrigin = typeof window !== 'undefined' ? window.location.href : 'https://indrajitkumar23541-a11y.github.io/VELOCITY-X/';

  const handleCopyOrigin = () => {
    HapticsManager.buttonTap();
    navigator.clipboard.writeText(currentOrigin);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Top Header Quick Install Button */}
      <button
        type="button"
        className="install-pwa-btn"
        onClick={handleInstallClick}
        title="Install VELOCITY X for 100% Offline 120 FPS Play"
      >
        <Download size={14} className="install-icon" />
        <span>INSTALL APP</span>
      </button>

      {/* Persistent Floating Install Banner at the Bottom */}
      {showBanner && (
        <div className="install-floating-banner">
          <div className="banner-left">
            <div className="banner-icon-glow">
              <Sparkles size={18} className="banner-sparkle" />
            </div>
            <div className="banner-text">
              <div className="banner-title">INSTALL VELOCITY X</div>
              <div className="banner-desc">Play offline in Flight Mode • 120 FPS • Temple Run Style</div>
            </div>
          </div>

          <div className="banner-actions">
            <button
              type="button"
              className="banner-install-btn"
              onClick={handleInstallClick}
            >
              <Download size={15} />
              <span>INSTALL NOW</span>
            </button>
            <button
              type="button"
              className="banner-dismiss-btn"
              onClick={() => { HapticsManager.buttonTap(); setShowBanner(false); }}
              title="Dismiss for now"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Interactive Install Guide Modal */}
      {showGuideModal && (
        <div className="install-modal-backdrop" onClick={() => setShowGuideModal(false)}>
          <div className="install-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="install-modal-header">
              <div className="modal-title-group">
                <Smartphone size={20} className="modal-header-icon" />
                <h3>INSTALL ON YOUR PHONE</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => { HapticsManager.buttonTap(); setShowGuideModal(false); }}
              >
                <X size={18} />
              </button>
            </div>

            <p className="install-modal-sub">
              VELOCITY X ko proper game app ki tarah open karein — bina browser URL bar ke, aur 100% offline Flight Mode me khele!
            </p>

            <div className="install-steps-list">
              {/* Platform 1: Android */}
              <div className="install-step-item highlight-step">
                <div className="step-badge">📱</div>
                <div className="step-content">
                  <h4>Android Phone & Tablet</h4>
                  <p>Chrome me <strong>"Install app"</strong> dabayein ya direct APK download karein:</p>
                  <a
                    href="https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases/download/v1.2.0/VELOCITY-X.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apk-download-link-btn"
                  >
                    <Download size={14} />
                    <span>Download Android APK (23 MB)</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Platform 2: Windows PC / Laptop */}
              <div className="install-step-item">
                <div className="step-badge">💻</div>
                <div className="step-content">
                  <h4>Windows PC & Laptop (Win 10 / 11)</h4>
                  <p>Browser me URL bar ke pass <strong>"Install App" (Computer Icon)</strong> dabayein, ya setup download karein:</p>
                  <a
                    href="https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apk-download-link-btn"
                    style={{ background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.3) 0%, rgba(0, 243, 255, 0.2) 100%)', borderColor: '#00d4ff' }}
                  >
                    <Download size={14} />
                    <span>Download Windows Setup (.exe)</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Platform 3: iPhone / iPad */}
              <div className="install-step-item">
                <div className="step-badge">🍏</div>
                <div className="step-content">
                  <h4>iPhone & iPad (iOS / iPadOS)</h4>
                  <p>Safari ke bottom me <strong>Share button (📤)</strong> dabayein, fir scroll karke <strong>"Add to Home Screen"</strong> chunein. Ye full-screen standalone app ban jayega!</p>
                </div>
              </div>

              {/* Platform 4: Mac */}
              <div className="install-step-item">
                <div className="step-badge">🍎</div>
                <div className="step-content">
                  <h4>MacBook & iMac (macOS)</h4>
                  <p>Safari me <strong>File ➔ "Add to Dock"</strong> karein ya Chrome me <strong>"Install VELOCITY X"</strong> par click karein.</p>
                </div>
              </div>

              {/* Share / Copy Link */}
              <div className="install-step-item">
                <div className="step-badge">🔗</div>
                <div className="step-content">
                  <h4>Universal Web Link (Share to Any Device)</h4>
                  <div className="copy-url-row">
                    <code>{currentOrigin}</code>
                    <button type="button" className="copy-btn" onClick={handleCopyOrigin}>
                      {copiedUrl ? <Check size={14} color="#00f3ff" /> : <Copy size={14} />}
                      <span>{copiedUrl ? 'COPIED!' : 'COPY'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="install-modal-done-btn"
              onClick={() => { HapticsManager.buttonTap(); setShowGuideModal(false); }}
            >
              GOT IT, LET'S RACE!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
