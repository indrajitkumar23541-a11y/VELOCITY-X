// VELOCITY X - Premium AAA Esports Racing Cockpit HUD
import React, { useEffect, useState } from 'react';
import { HUDData } from '../game/Engine';
import { Zap, Flame, ShieldAlert, Award, Smartphone, CloudRain, Moon } from 'lucide-react';

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
      {/* 1. POLICE PURSUIT SCREEN VIGNETTE & BANNER */}
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
            <ShieldAlert size={16} className="strobe-icon" />
            <span>POLICE PURSUIT — WEAVE TRAFFIC TO EVADE!</span>
            <ShieldAlert size={16} className="strobe-icon" />
          </div>
        </div>
      )}

      {/* 2. EVADED CELEBRATION POPUP */}
      {evadedBonus !== null && (
        <div className="evaded-popup">
          <div className="evaded-badge">
            <Award size={26} className="gold-icon" />
            <div className="evaded-text">
              <h3>POLICE EVADED!</h3>
              <p>+{evadedBonus} REWARD BONUS</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. NEAR-MISS ELECTRIC ALERT POPUP */}
      {nearMissAlert && pulseNearMiss && (
        <div className="near-miss-alert">
          <div className="near-miss-pill">
            <Flame size={18} className="flame-icon" />
            <span className="text">{nearMissAlert.text}</span>
            {nearMissAlert.combo > 1 && (
              <span className="combo-tag">x{nearMissAlert.combo}</span>
            )}
          </div>
        </div>
      )}

      {/* 3.5 DANGER PROXIMITY HAZARD WARNING (Early Left/Right Swerve Cue) */}
      {hud.proximityWarning && (
        <div
          className={`proximity-hazard-overlay ${hud.proximityWarning.lane.toLowerCase()}-hazard ${
            hud.pursuitActive ? 'under-pursuit-banner' : ''
          }`}
        >
          <div className="proximity-hazard-pill">
            <span className="hazard-blip">⚠️</span>
            <span className="hazard-msg">
              {hud.proximityWarning.lane === 'SAME'
                ? `TRAFFIC AHEAD (${hud.proximityWarning.distance}m)`
                : hud.proximityWarning.lane === 'LEFT'
                ? `CAR ON LEFT (${hud.proximityWarning.distance}m)`
                : `CAR ON RIGHT (${hud.proximityWarning.distance}m)`}
            </span>
            <span className="hazard-hint">
              {hud.proximityWarning.lane === 'SAME'
                ? 'SWERVE LEFT/RIGHT'
                : hud.proximityWarning.lane === 'LEFT'
                ? 'KEEP RIGHT ▶'
                : '◀ KEEP LEFT'}
            </span>
          </div>
        </div>
      )}

      {/* 4. TOP-LEFT STATS CLUSTER (Flanking Rearview Mirror) */}
      <div className="top-hud-left">
        <div className="stat-card distance-card">
          <span className="stat-label">DISTANCE</span>
          <span className="stat-value">
            {hud.distanceMeters.toLocaleString()} <small>M</small>
          </span>
        </div>

        {hud.combo > 1 && (
          <div className="combo-meter-card">
            <div className="combo-val">x{hud.combo}</div>
            <div className="combo-bar-wrapper">
              <div
                className="combo-bar-fill"
                style={{ width: `${hud.comboTimerProgress * 100}%` }}
              />
            </div>
            <span className="combo-sub">COMBO</span>
          </div>
        )}
      </div>

      {/* 5. TOP-RIGHT STATS CLUSTER (Flanking Rearview Mirror) */}
      <div className="top-hud-right">
        <div className="stat-card score-card">
          <span className="stat-label">SCORE</span>
          <span className="stat-value">{hud.score.toLocaleString()}</span>
        </div>

        <div className={`stat-card weather-hud-chip ${hud.weather === 'RAIN' ? 'rain-active' : ''}`}>
          {hud.weather === 'RAIN' ? (
            <CloudRain size={13} className="weather-hud-icon rain" />
          ) : (
            <Moon size={13} className="weather-hud-icon moon" />
          )}
          <span className="weather-hud-text">{hud.weather}</span>
        </div>
      </div>

      {/* 6. BOTTOM-LEFT SPEEDOMETER & TACHOMETER INSTRUMENT WIDGET */}
      <div className="hud-bottom-left">
        <div className="speedometer-widget">
          <div className="radial-speed-track">
            <svg viewBox="0 0 100 100" className="radial-svg">
              {/* Background Arc */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#131b2a"
                strokeWidth="7"
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
                strokeWidth="7"
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

          {/* Gyro Tilt Sensor Status Chip */}
          {hud.tiltActive && (
            <div className="hud-gyro-chip">
              <Smartphone size={10} className="hud-gyro-icon" />
              <span>TILT {hud.tiltAngle > 0 ? `+${hud.tiltAngle}°` : `${hud.tiltAngle}°`}</span>
            </div>
          )}
        </div>
      </div>

      {/* 7. BOTTOM-RIGHT NITROUS CANISTER WIDGET */}
      <div className="hud-bottom-right">
        <div className="nos-widget">
          <div className="nos-header">
            <Zap size={13} className="nos-icon" />
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
