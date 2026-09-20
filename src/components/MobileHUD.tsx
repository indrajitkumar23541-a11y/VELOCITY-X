// VELOCITY X - Mobile High-Octane HUD & Speedometer
import React, { useEffect, useState } from 'react';
import { HUDData } from '../game/Engine';
import { Zap, Flame, ShieldAlert, Award } from 'lucide-react';

interface MobileHUDProps {
  hud: HUDData;
  nearMissAlert: { text: string; combo: number; id: number } | null;
  evadedBonus: number | null;
}

export const MobileHUD: React.FC<MobileHUDProps> = ({
  hud,
  nearMissAlert,
  evadedBonus,
}) => {
  const [pulseNearMiss, setPulseNearMiss] = useState(false);

  useEffect(() => {
    if (nearMissAlert) {
      setPulseNearMiss(true);
      const timer = setTimeout(() => setPulseNearMiss(false), 800);
      return () => clearTimeout(timer);
    }
  }, [nearMissAlert]);

  // Speedometer needle / progress calculation (0 to 320 km/h)
  const speedRatio = Math.min(1, hud.speedKmh / 300);
  const rpmRatio = Math.min(1, Math.max(0, (hud.rpm - 800) / 7700));

  return (
    <div className="mobile-hud-root">
      {/* 1. POLICE PURSUIT RED & BLUE FLASHING SCREEN VIGNETTE */}
      {hud.pursuitActive && (
        <div
          className="police-strobe-vignette"
          style={{
            boxShadow:
              hud.pursuitAlertIntensity > 0.5
                ? 'inset 0 0 80px 20px rgba(255, 0, 40, 0.75)'
                : 'inset 0 0 80px 20px rgba(0, 100, 255, 0.75)',
          }}
        >
          <div className="pursuit-banner">
            <ShieldAlert size={18} className="strobe-icon" />
            <span>POLICE PURSUIT — OUTRUN OR WEAVE TRAFFIC!</span>
            <ShieldAlert size={18} className="strobe-icon" />
          </div>
        </div>
      )}

      {/* 2. EVADED CELEBRATION POPUP */}
      {evadedBonus !== null && (
        <div className="evaded-popup">
          <div className="evaded-badge">
            <Award size={28} className="gold-icon" />
            <div className="evaded-text">
              <h3>POLICE EVADED!</h3>
              <p>+{evadedBonus} BONUS REWARD</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. NEAR-MISS ELECTRIC ALERT POPUP */}
      {nearMissAlert && pulseNearMiss && (
        <div className="near-miss-alert">
          <div className="near-miss-pill">
            <Flame size={20} className="flame-icon" />
            <span className="text">{nearMissAlert.text}</span>
            {nearMissAlert.combo > 1 && (
              <span className="combo-tag">x{nearMissAlert.combo}</span>
            )}
          </div>
        </div>
      )}

      {/* 4. TOP STATS BAR: Distance & Score */}
      <div className="top-stats-bar">
        <div className="stat-card distance-card">
          <span className="stat-label">DISTANCE</span>
          <span className="stat-value">{hud.distanceMeters.toLocaleString()} <small>M</small></span>
        </div>

        {/* Combo Multiplier Badge */}
        {hud.combo > 1 && (
          <div className="combo-meter-card">
            <div className="combo-val">x{hud.combo}</div>
            <div className="combo-bar-wrapper">
              <div
                className="combo-bar-fill"
                style={{ width: `${hud.comboTimerProgress * 100}%` }}
              />
            </div>
            <span className="combo-sub">COMBO STREAK</span>
          </div>
        )}

        <div className="stat-card score-card">
          <span className="stat-label">SCORE</span>
          <span className="stat-value">{hud.score.toLocaleString()}</span>
        </div>
      </div>

      {/* 5. BOTTOM COCKPIT CLUSTER: Speedometer, Gear, RPM, NOS */}
      <div className="bottom-cluster">
        {/* Analog + Digital Speedometer */}
        <div className="speedometer-widget">
          <div className="radial-speed-track">
            <svg viewBox="0 0 100 100" className="radial-svg">
              {/* Background Arc */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#171e2e"
                strokeWidth="8"
                strokeDasharray="198"
                strokeDashoffset="33"
                strokeLinecap="round"
              />
              {/* Active Colored Arc */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#speedGrad)"
                strokeWidth="8"
                strokeDasharray="198"
                strokeDashoffset={198 - speedRatio * 165}
                strokeLinecap="round"
                className="speed-needle-circle"
              />
              <defs>
                <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f3ff" />
                  <stop offset="65%" stopColor="#ffaa00" />
                  <stop offset="100%" stopColor="#ff0055" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Digital Readout */}
            <div className="speed-center-readout">
              <span className="digital-speed">{hud.speedKmh}</span>
              <span className="unit-label">KM/H</span>
            </div>
          </div>

          {/* Gear & RPM Bar */}
          <div className="gear-rpm-bar">
            <div className="gear-badge">
              <span className="gear-sub">GEAR</span>
              <span className="gear-num">{hud.gear}</span>
            </div>
            <div className="rpm-linear-track">
              <div
                className={`rpm-fill ${rpmRatio > 0.85 ? 'redline' : ''}`}
                style={{ width: `${rpmRatio * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* NOS Nitrogen Canister Level */}
        <div className="nos-widget">
          <div className="nos-header">
            <Zap size={14} className="nos-icon" />
            <span>NITROUS</span>
            <span className="nos-val">{hud.nitroPercent}%</span>
          </div>
          <div className="nos-tube-wrapper">
            <div
              className={`nos-tube-fill ${hud.nitroPercent < 15 ? 'low' : ''}`}
              style={{ width: `${hud.nitroPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
