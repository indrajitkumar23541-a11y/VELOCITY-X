// VELOCITY X - PWA Offline App Install Prompt & Guide
import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Check, Copy } from 'lucide-react';
import { HapticsManager } from '../game/HapticsManager';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
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
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = async () => {
    HapticsManager.buttonTap();
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          setIsInstalled(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.warn('Install prompt error:', err);
        setShowGuideModal(true);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://172.16.4.169:3000';

  const handleCopyOrigin = () => {
    HapticsManager.buttonTap();
    navigator.clipboard.writeText(currentOrigin);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  if (isInstalled) return null;

  return (
    <>
      <button
        type="button"
        className="install-pwa-btn"
        onClick={handleInstallClick}
        title="Install VELOCITY X for 100% Offline 120 FPS Play"
      >
        <Download size={14} className="install-icon" />
        <span>INSTALL APP</span>
      </button>

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
              Install VELOCITY X as a standalone fullscreen game with offline cache & zero browser address bar!
            </p>

            <div className="install-steps-list">
              {/* Method 1: Chrome Menu */}
              <div className="install-step-item">
                <div className="step-badge">1</div>
                <div className="step-content">
                  <h4>Via Chrome Menu (Android)</h4>
                  <p>Phone me upar right corner me <strong>3 dots (⋮)</strong> par tap karein, fir <strong>"Add to Home screen"</strong> ya <strong>"Install app"</strong> chunein.</p>
                </div>
              </div>

              {/* Method 2: iPhone Safari */}
              <div className="install-step-item">
                <div className="step-badge">2</div>
                <div className="step-content">
                  <h4>Via Safari (iPhone / iOS)</h4>
                  <p>Safari ke bottom me <strong>Share Button (⎋)</strong> dabayein, fir scroll karke <strong>"Add to Home Screen"</strong> par tap karein.</p>
                </div>
              </div>

              {/* Method 3: Localhost Insecure Origin Bypass */}
              <div className="install-step-item highlight-step">
                <div className="step-badge">⚡</div>
                <div className="step-content">
                  <h4>Agar Chrome me "Install App" button na dikhe:</h4>
                  <p>Android Chrome LAN IP ko security reason se block karta hai. Use unlock karne ke liye:</p>
                  <ol className="mini-steps-list">
                    <li>Phone Chrome me open karein: <code>chrome://flags</code></li>
                    <li>Search karein: <code>unsafely-treat-insecure-origin-as-secure</code></li>
                    <li>Enable karke ye URL paste karein:</li>
                  </ol>
                  <div className="copy-url-row">
                    <code>{currentOrigin}</code>
                    <button type="button" className="copy-btn" onClick={handleCopyOrigin}>
                      {copiedUrl ? <Check size={14} color="#00f3ff" /> : <Copy size={14} />}
                      <span>{copiedUrl ? 'COPIED!' : 'COPY'}</span>
                    </button>
                  </div>
                  <p className="step-note">Relaunch dabate hi phone par direct 1-tap "Install App" prompt aa jayega!</p>
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
