// VELOCITY X - Mobile Game Over & Post-Race Summary
import React from 'react';
import { GameSummary } from '../game/Engine';
import { HapticsManager } from '../game/HapticsManager';
import { RotateCcw, Wrench, Trophy, Coins, Flame, ShieldAlert, Compass } from 'lucide-react';

interface GameOverModalProps {
  summary: GameSummary;
  onRestart: () => void;
  onOpenGarage: () => void;
  onOpenTracks?: () => void;
  onOpenLeaderboard?: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  summary,
  onRestart,
  onOpenGarage,
  onOpenTracks,
  onOpenLeaderboard,
}) => {
  return (
    <div className="game-over-overlay">
      <div className="game-over-card">
        {/* Banner: BUSTED vs CRASHED */}
        <div className={`result-badge ${summary.isBusted ? 'badge-busted' : 'badge-crashed'}`}>
          {summary.isBusted ? (
            <>
              <ShieldAlert size={28} />
              <span>BUSTED BY POLICE</span>
            </>
          ) : (
            <>
              <Flame size={28} />
              <span>VEHICLE CRASHED</span>
            </>
          )}
        </div>

        {/* High Score Celebration */}
        {summary.isHighScore && (
          <div className="high-score-banner">
            <Trophy size={16} />
            <span>NEW ALL-TIME RECORD!</span>
          </div>
        )}

        {/* Score & Rewards Summary */}
        <div className="summary-metrics">
          <div className="summary-item main-score">
            <span className="label">FINAL SCORE</span>
            <span className="value">{summary.score.toLocaleString()}</span>
          </div>

          <div className="summary-grid">
            <div className="summary-item">
              <span className="label">DISTANCE</span>
              <span className="value">{summary.distanceMeters.toLocaleString()} m</span>
            </div>

            <div className="summary-item">
              <span className="label">NEAR-MISSES</span>
              <span className="value">{summary.nearMisses}</span>
            </div>

            <div className="summary-item">
              <span className="label">POLICE EVADED</span>
              <span className="value">{summary.policeEvaded}</span>
            </div>

            <div className="summary-item coin-reward">
              <span className="label">REWARD</span>
              <span className="value">
                <Coins size={15} className="coin-icon" />
                +{summary.coinsEarned}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="game-over-actions">
          <button
            type="button"
            className="action-btn garage-btn"
            aria-label="Return to Garage"
            onClick={() => {
              HapticsManager.buttonTap();
              onOpenGarage();
            }}
          >
            <Wrench size={18} />
            <span>GARAGE</span>
          </button>

          {onOpenLeaderboard && (
            <button
              type="button"
              className="action-btn leaderboard-action-btn"
              aria-label="View Leaderboard Hall of Fame"
              onClick={() => {
                HapticsManager.buttonTap();
                onOpenLeaderboard();
              }}
            >
              <Trophy size={18} />
              <span>RECORDS</span>
            </button>
          )}

          {onOpenTracks && (
            <button
              type="button"
              className="action-btn tracks-btn"
              aria-label="Choose Tracks"
              onClick={() => {
                HapticsManager.buttonTap();
                onOpenTracks();
              }}
            >
              <Compass size={18} />
              <span>TRACKS</span>
            </button>
          )}

          <button
            type="button"
            className="action-btn restart-btn"
            aria-label="Restart Race Again"
            onClick={() => {
              HapticsManager.buttonTap();
              onRestart();
            }}
          >
            <RotateCcw size={18} />
            <span>RACE AGAIN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
