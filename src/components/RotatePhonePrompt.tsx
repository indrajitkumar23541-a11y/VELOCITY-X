// VELOCITY X - Mobile Landscape Orientation Enforcement Overlay
import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import { triggerGlobalAppInstall } from './InstallPrompt';

export const RotatePhonePrompt: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // In mobile phones, window.innerWidth < window.innerHeight denotes portrait
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  if (!isPortrait) return null;

  return (
    <div className="rotate-prompt-overlay">
      <div className="rotate-card">
        <div className="phone-rotate-anim">
          <Smartphone size={56} className="phone-icon" />
        </div>
        <h2 className="rotate-title">ROTATE YOUR PHONE</h2>
        <p className="rotate-desc">
          VELOCITY X is engineered for high-octane widescreen landscape mobile racing.
        </p>
        <div className="rotate-pill">LANDSCAPE MODE ONLY</div>

        {/* Quick Install Button for Portrait Mobile */}
        <button
          type="button"
          className="portrait-install-action-btn"
          onClick={() => triggerGlobalAppInstall()}
        >
          <Smartphone size={16} />
          <span>📲 INSTALL APP FIRST</span>
        </button>
      </div>
    </div>
  );
};
