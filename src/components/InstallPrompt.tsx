// VELOCITY X - PWA Offline App Install Prompt
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { HapticsManager } from '../game/HapticsManager';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
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
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // Guide for iOS Safari or browsers without beforeinstallprompt
      alert("To install on iOS or Android: Tap your browser's 'Share' or 'Menu' (⋮) icon, then tap 'Add to Home Screen'!");
    }
  };

  if (isInstalled) return null;

  return (
    <button className="install-pwa-btn" onClick={handleInstallClick} title="Install for 100% offline play">
      <Download size={14} className="install-icon" />
      <span>INSTALL APP</span>
    </button>
  );
};
