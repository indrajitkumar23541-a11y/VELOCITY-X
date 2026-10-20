// VELOCITY X - Auto Landscape Orientation Lock & Portrait Play Engine
import React, { useState, useEffect, useCallback } from 'react';
import { Smartphone, RotateCw, Download, Play, X } from 'lucide-react';
import { triggerGlobalAppInstall } from './InstallPrompt';

export const RotatePhonePrompt: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isVirtualLandscape, setIsVirtualLandscape] = useState(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('vx_portrait_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  const checkOrientation = useCallback(() => {
    // Only apply on touch/mobile devices; desktop browsers with narrow windows shouldn't be blocked
    const isTouchOrMobile =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isTouchOrMobile) {
      setIsPortrait(false);
      return;
    }

    const portrait = window.innerWidth < window.innerHeight;
    setIsPortrait(portrait);

    // If user physically rotated to landscape, remove virtual CSS rotation
    if (!portrait && document.body.classList.contains('force-virtual-landscape')) {
      document.body.classList.remove('force-virtual-landscape');
      setIsVirtualLandscape(false);
      window.dispatchEvent(new Event('resize'));
    }
  }, []);

  useEffect(() => {
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener('change', checkOrientation);
    }

    // If launched as standalone installed PWA/App, attempt landscape lock
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone && screen.orientation && 'lock' in screen.orientation) {
      (screen.orientation as any).lock('landscape').catch(() => {});
    }

    return () => {
      window.removeEventListener('resize', checkOrientation);
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener('change', checkOrientation);
      }
      document.body.classList.remove('force-virtual-landscape');
    };
  }, [checkOrientation]);

  const handlePlayInPortrait = () => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem('vx_portrait_dismissed', 'true');
    } catch {
      // storage unavailable
    }
    document.body.classList.remove('force-virtual-landscape');
    setIsVirtualLandscape(false);
    window.dispatchEvent(new Event('resize'));
  };

  const handleForceLandscape = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
      if (screen.orientation && 'lock' in screen.orientation) {
        await (screen.orientation as any).lock('landscape');
        return;
      }
    } catch {
      // Browser rejected physical lock (e.g. user OS auto-rotate disabled)
    }

    // Apply seamless 90-degree virtual landscape CSS transform
    const body = document.body;
    body.classList.add('force-virtual-landscape');
    setIsVirtualLandscape(true);
    setIsPortrait(false);
    window.dispatchEvent(new Event('resize'));
  };

  if (!isPortrait || isVirtualLandscape || isDismissed) return null;

  return (
    <div className="rotate-prompt-overlay" role="dialog" aria-modal="true" aria-label="Orientation suggestion">
      <div className="rotate-card">
        {/* Top-Right Dismiss Button */}
        <button
          type="button"
          className="rotate-close-btn"
          onClick={handlePlayInPortrait}
          title="Close and play in portrait"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="phone-rotate-anim">
          <Smartphone size={52} className="phone-icon" />
          <RotateCw size={24} className="rotate-spinner-icon" />
        </div>

        <h2 className="rotate-title">LANDSCAPE RECOMMENDED</h2>
        <p className="rotate-desc">
          VELOCITY X is optimized for widescreen racing. You can play in portrait or turn your phone horizontally.
        </p>

        <div className="rotate-actions-group">
          {/* Primary Action: Immediate Portrait Play */}
          <button
            type="button"
            className="play-portrait-btn"
            onClick={handlePlayInPortrait}
            aria-label="PLAY IN PORTRAIT - Race Immediately"
          >
            <Play size={18} fill="currentColor" />
            <span>PLAY IN PORTRAIT (RACE NOW)</span>
          </button>

          {/* Secondary Action: Force Fullscreen Landscape */}
          <button
            type="button"
            className="auto-landscape-btn"
            onClick={handleForceLandscape}
            aria-label="FORCE AUTO-LANDSCAPE - Fullscreen Mode"
          >
            <RotateCw size={16} />
            <span>FORCE AUTO-LANDSCAPE</span>
          </button>

          {/* Quick Install Button */}
          <button
            type="button"
            className="portrait-install-action-btn"
            onClick={() => triggerGlobalAppInstall()}
            aria-label="INSTALL APP - Add to Home Screen"
          >
            <Download size={15} />
            <span>INSTALL APP (PERMANENT LANDSCAPE)</span>
          </button>
        </div>

        <div className="rotate-pill">💡 TIP: TURN ON AUTO-ROTATE IN PHONE SETTINGS</div>
      </div>
    </div>
  );
};
