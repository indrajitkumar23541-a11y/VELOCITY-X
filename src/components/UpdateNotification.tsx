// VELOCITY X - Real-time Over-The-Air Update Toast Notification
import React, { useEffect, useState } from 'react';
import { updateManager } from '../game/UpdateManager';
import { HapticsManager } from '../game/HapticsManager';
import { RefreshCw, Sparkles, X } from 'lucide-react';
import { GameState } from '../App';

interface UpdateNotificationProps {
  gameState: GameState;
}

export const UpdateNotification: React.FC<UpdateNotificationProps> = ({ gameState }) => {
  const [updateReady, setUpdateReady] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const unsubscribe = updateManager.onUpdate(() => {
      setUpdateReady(true);
    });
    return unsubscribe;
  }, []);

  // Auto-reload timer if user is idling on any menu screen (not during RACING)
  useEffect(() => {
    if (!updateReady || isDismissed || gameState === 'RACING') return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          updateManager.applyUpdate();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [updateReady, isDismissed, gameState]);

  if (!updateReady || isDismissed) return null;

  const version = updateManager.getRemoteVersion();

  return (
    <div className="update-toast-overlay">
      <div className="update-toast-card">
        <div className="update-icon-wrap">
          <Sparkles size={20} className="update-sparkle-icon" />
        </div>

        <div className="update-info">
          <div className="update-title-row">
            <h4>⚡ GAME UPDATED (v{version})</h4>
            <span className="update-version-tag">NEW CARS</span>
          </div>
          <p className="update-desc">
            Koenigsegg Gemera, Regera & Agera RS added! {gameState !== 'RACING' ? `Restarting in ${countdown}s...` : 'Will update after current run.'}
          </p>
        </div>

        <div className="update-actions">
          <button
            type="button"
            className="update-reload-btn"
            onClick={() => {
              HapticsManager.buttonTap();
              updateManager.applyUpdate();
            }}
            aria-label="Restart to Apply Update"
          >
            <RefreshCw size={14} className="spin-slow" />
            <span>RESTART</span>
          </button>

          <button
            type="button"
            className="update-dismiss-btn"
            onClick={() => {
              HapticsManager.buttonTap();
              setIsDismissed(true);
            }}
            title="Update on next open"
            aria-label="Dismiss update notification"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
