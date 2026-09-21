// VELOCITY X - Atmospheric Camera Lens Water Droplets & Lightning Flash
import React from 'react';

interface RainScreenOverlayProps {
  isRaining: boolean;
  isLightningFlashing: boolean;
}

export const RainScreenOverlay: React.FC<RainScreenOverlayProps> = ({
  isRaining,
  isLightningFlashing,
}) => {
  if (!isRaining && !isLightningFlashing) return null;

  return (
    <div className="rain-screen-container">
      {/* 1. Full-Screen Lightning Electric Surge Overlay */}
      {isLightningFlashing && (
        <div className="lightning-flash-overlay" />
      )}

      {/* 2. Glass Condensation & Water Beads on Camera Lens */}
      {isRaining && (
        <div className="water-droplets-layer">
          <svg className="droplets-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="dropGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#88ccff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#08101a" stopOpacity="0.7" />
              </radialGradient>
              <filter id="dropBlur">
                <feGaussianBlur stdDeviation="0.2" />
              </filter>
            </defs>

            {/* Scattered Condensation Droplets */}
            <circle cx="8" cy="14" r="1.2" fill="url(#dropGrad)" />
            <circle cx="12" cy="18" r="0.8" fill="url(#dropGrad)" />
            <circle cx="22" cy="8" r="1.5" fill="url(#dropGrad)" className="sliding-drop-1" />
            <circle cx="34" cy="24" r="1.0" fill="url(#dropGrad)" />
            <circle cx="48" cy="12" r="1.8" fill="url(#dropGrad)" className="sliding-drop-2" />
            <circle cx="62" cy="16" r="0.9" fill="url(#dropGrad)" />
            <circle cx="75" cy="9" r="1.4" fill="url(#dropGrad)" className="sliding-drop-3" />
            <circle cx="88" cy="20" r="1.1" fill="url(#dropGrad)" />
            <circle cx="94" cy="35" r="1.6" fill="url(#dropGrad)" className="sliding-drop-1" />
            
            <circle cx="6" cy="65" r="1.4" fill="url(#dropGrad)" />
            <circle cx="15" cy="82" r="1.9" fill="url(#dropGrad)" className="sliding-drop-2" />
            <circle cx="28" cy="74" r="1.0" fill="url(#dropGrad)" />
            <circle cx="82" cy="78" r="1.7" fill="url(#dropGrad)" className="sliding-drop-3" />
            <circle cx="91" cy="62" r="1.2" fill="url(#dropGrad)" />
          </svg>
        </div>
      )}
    </div>
  );
};
