// VELOCITY X - Global Cyber Highway Leaderboard & Hall of Fame
import React, { useState } from 'react';
import { Trophy, X, Flame, ShieldAlert, User, Check } from 'lucide-react';
import { LeaderboardEntry, StorageManager } from '../game/Storage';
import { HapticsManager } from '../game/HapticsManager';

interface LeaderboardModalProps {
  onClose: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ onClose }) => {
  const [entries] = useState<LeaderboardEntry[]>(() => StorageManager.getLeaderboard());
  const [stats, setStats] = useState(() => StorageManager.getStats());
  const [callsignInput, setCallsignInput] = useState(stats.playerCallsign);
  const [isEditingCallsign, setIsEditingCallsign] = useState(false);

  const handleSaveCallsign = (e: React.FormEvent) => {
    e.preventDefault();
    HapticsManager.buttonTap();
    const clean = callsignInput.trim().toUpperCase().slice(0, 14) || 'VIPER_01';
    StorageManager.saveStats({ playerCallsign: clean });
    setStats(prev => ({ ...prev, playerCallsign: clean }));
    setIsEditingCallsign(false);
  };

  return (
    <div className="leaderboard-backdrop" onClick={onClose}>
      <div className="leaderboard-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="leaderboard-header">
          <div className="leaderboard-title-group">
            <Trophy size={26} className="trophy-gold" />
            <div>
              <h2>GLOBAL HALL OF FAME</h2>
              <p className="subtitle">HIGHWAY PURSUIT WORLD RECORDS</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => { HapticsManager.buttonTap(); onClose(); }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Player Profile & Callsign Bar */}
        <div className="player-callsign-bar">
          <div className="callsign-left">
            <User size={16} className="callsign-icon" />
            <span className="callsign-label">DRIVER CALLSIGN:</span>
            {isEditingCallsign ? (
              <form onSubmit={handleSaveCallsign} className="callsign-form">
                <input
                  type="text"
                  value={callsignInput}
                  onChange={(e) => setCallsignInput(e.target.value.toUpperCase())}
                  maxLength={14}
                  autoFocus
                  className="callsign-input"
                />
                <button type="submit" className="save-callsign-btn">
                  <Check size={14} />
                </button>
              </form>
            ) : (
              <span className="player-name-badge" onClick={() => setIsEditingCallsign(true)}>
                {stats.playerCallsign}
                <small className="edit-hint">(EDIT)</small>
              </span>
            )}
          </div>

          <div className="callsign-right">
            <span className="personal-best-label">YOUR TOP:</span>
            <span className="personal-best-val">{stats.highScore.toLocaleString()} PTS</span>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>RANK</th>
                <th>DRIVER</th>
                <th>VEHICLE</th>
                <th>DISTANCE</th>
                <th>EVADED</th>
                <th className="score-th">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((item, index) => {
                const rank = index + 1;
                const isTop3 = rank <= 3;
                return (
                  <tr
                    key={item.id || index}
                    className={`leaderboard-row ${item.isPlayer ? 'player-row' : ''} ${isTop3 ? 'top3-row' : ''}`}
                  >
                    <td className="rank-td">
                      {rank === 1 && <span className="rank-badge gold">#1</span>}
                      {rank === 2 && <span className="rank-badge silver">#2</span>}
                      {rank === 3 && <span className="rank-badge bronze">#3</span>}
                      {rank > 3 && <span className="rank-num">#{rank}</span>}
                    </td>
                    <td className="driver-td">
                      <span className="driver-name">{item.callsign}</span>
                      {item.isPlayer && <span className="you-pill">YOU</span>}
                    </td>
                    <td className="vehicle-td">{item.carName}</td>
                    <td className="distance-td">{item.distanceMeters.toLocaleString()}m</td>
                    <td className="evaded-td">
                      {item.policeEvaded > 0 ? (
                        <span className="evaded-count">
                          <ShieldAlert size={12} />
                          {item.policeEvaded}
                        </span>
                      ) : (
                        <span className="zero-evaded">-</span>
                      )}
                    </td>
                    <td className="score-td">
                      <span className="score-digits">{item.score.toLocaleString()}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="leaderboard-footer">
          <div className="footer-tip">
            <Flame size={14} className="flame-tip-icon" />
            <span>EARN NEAR-MISS COMBOS & EVADE POLICE TO CLIMB THE RANKS</span>
          </div>
          <button
            type="button"
            className="leaderboard-race-btn"
            onClick={() => { HapticsManager.buttonTap(); onClose(); }}
          >
            LET'S RACE
          </button>
        </div>
      </div>
    </div>
  );
};
