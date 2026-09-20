// VELOCITY X - Top-Center Tactical Rearview Mirror
import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface RearviewMirrorProps {
  pursuitActive: boolean;
  policeDistance: number;
  alertIntensity: number;
}

export const RearviewMirror: React.FC<RearviewMirrorProps> = ({
  pursuitActive,
  policeDistance,
  alertIntensity,
}) => {
  return (
    <div className={`rearview-mirror-container ${pursuitActive ? 'mirror-pursuit' : ''}`}>
      <div className="mirror-frame">
        <div className="mirror-glass">
          {/* Subtle Road Horizon Reflection */}
          <div className="mirror-road" />

          {/* Approaching Police Cruiser Silhouettes */}
          {pursuitActive && (
            <div
              className="mirror-cruiser-wrapper"
              style={{
                transform: `scale(${Math.min(1.8, Math.max(0.4, (80 - policeDistance) / 40))})`,
                opacity: Math.max(0.3, Math.min(1, (100 - policeDistance) / 60)),
              }}
            >
              <div className="mirror-cruiser">
                <div className="cruiser-roof-lightbar">
                  <span className={`strobe-dot red-strobe ${alertIntensity > 0.5 ? 'lit' : ''}`} />
                  <span className={`strobe-dot blue-strobe ${alertIntensity <= 0.5 ? 'lit' : ''}`} />
                </div>
                <div className="cruiser-grille" />
                <div className="cruiser-headlights">
                  <span className="beam" />
                  <span className="beam" />
                </div>
              </div>
            </div>
          )}

          {/* Pursuit Distance Badge */}
          {pursuitActive && (
            <div className="mirror-distance-badge">
              <ShieldAlert size={12} className="shield-icon" />
              <span>{policeDistance}m</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
