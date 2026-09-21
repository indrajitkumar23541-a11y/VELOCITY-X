// VELOCITY X - Auto Landscape Orientation Lock & Virtual Widescreen Engine
import React, { useState, useEffect } from 'react';
import { Smartphone, RotateCw, Download, Play } from 'lucide-react';
import { triggerGlobalAppInstall } from './InstallPrompt';

export const RotatePhonePrompt: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isVirtualLandscape, setIsVirtualLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // If width < height, phone is being held in portrait
      const portrait = window.innerWidth < window.innerHeight;
      setIsPortrait(portrait);

      // If user physically rotated to landscape, remove virtual CSS rotation
      if (!portrait && document.body.classList.contains('force-virtual-landscape')) {
        document.body.classList.remove('force-virtual-landscape');
        setIsVirtualLandscape(false);
      }
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // If launched as standalone installed PWA/App, attempt landscape lock
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone && screen.orientation && 'lock' in screen.orientation) {
      (screen.orientation as any).lock('landscape').catch(() => {});
    }

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      document.body.classList.remove('force-virtual-landscape');
    };
  }, []);

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

  if (!isPortrait || isVirtualLandscape) return null;

  return (
    <div className="rotate-prompt-overlay">
      <div className="rotate-card">
        <div className="phone-rotate-anim">
          <Smartphone size={54} className="phone-icon" />
          <RotateCw size={26} className="rotate-spinner-icon" />
        </div>

        <h2 className="rotate-title">ROTATE YOUR PHONE</h2>
        <p className="rotate-desc">
          VELOCITY X is engineered for 4K widescreen landscape hypercar racing.
        </p>

        <div className="rotate-actions-group">
          {/* Primary 1-Tap Auto-Rotate Button */}
          <button
            type="button"
            className="auto-landscape-btn"
            onClick={handleForceLandscape}
          >
            <Play size={18} fill="currentColor" />
            <span>FORCE AUTO-LANDSCAPE</span>
          </button>

          {/* Quick Install Button */}
          <button
            type="button"
            className="portrait-install-action-btn"
            onClick={() => triggerGlobalAppInstall()}
          >
            <Download size={16} />
            <span>INSTALL APP (PERMANENT LANDSCAPE)</span>
          </button>
        </div>

        <div className="rotate-pill">OR TURN PHONE HORIZONTALLY</div>
      </div>
    </div>
  );
};
