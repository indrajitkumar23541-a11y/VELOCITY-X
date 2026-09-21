// VELOCITY X - Complete 4-Step Cinematic Racing Flow & Hardware-Adaptive Engine
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Engine, HUDData, GameSummary } from './game/Engine';
import { StorageManager, CarConfig, GameStats } from './game/Storage';
import { PlayerControls } from './game/PlayerCar';
import { audioManager } from './game/AudioManager';
import { HapticsManager } from './game/HapticsManager';
import { tiltManager } from './game/TiltManager';
import { MobileHUD } from './components/MobileHUD';
import { MobileControls } from './components/MobileControls';
import { RearviewMirror } from './components/RearviewMirror';
import { GameOverModal } from './components/GameOverModal';
import { RotatePhonePrompt } from './components/RotatePhonePrompt';
import { InstallPrompt, triggerGlobalAppInstall } from './components/InstallPrompt';
import { LeaderboardModal } from './components/LeaderboardModal';
import { RainScreenOverlay } from './components/RainScreenOverlay';
import { UpdateNotification } from './components/UpdateNotification';
import {
  Volume2,
  VolumeX,
  Play,
  Trophy,
  Coins,
  Smartphone,
  Moon,
  Download,
  Sun,
  Lock,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Gauge
} from 'lucide-react';

export type GameState = 'SPLASH' | 'SELECT_TRACK' | 'SELECT_CAR' | 'COUNTDOWN' | 'RACING' | 'GARAGE' | 'GAME_OVER';

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Engine | null>(null);

  // Persistence State
  const [stats, setStats] = useState<GameStats>(() => StorageManager.getStats());
  const [cars, setCars] = useState<CarConfig[]>(() => StorageManager.getCars());
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [activeCar, setActiveCar] = useState<CarConfig>(() => {
    const saved = StorageManager.getCars();
    const currentStats = StorageManager.getStats();
    return saved.find(c => c.id === currentStats.selectedCarId) || saved[0];
  });

  // App & Flow States
  const [gameState, setGameState] = useState<GameState>('SPLASH');
  const [selectedTrack, setSelectedTrack] = useState<'NIGHT' | 'DAY'>('NIGHT');
  const [countdown, setCountdown] = useState<number | string | null>(null);
  const [splashTimerDone, setSplashTimerDone] = useState(false);
  const [splashProgress, setSplashProgress] = useState(0);

  const [isMuted, setIsMuted] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [tiltSteeringEnabled, setTiltSteeringEnabled] = useState<boolean>(() => {
    return StorageManager.getStats().tiltSteeringEnabled ?? false;
  });

  // Live In-Game HUD State
  const [hud, setHud] = useState<HUDData>({
    speedKmh: 0,
    gear: 1,
    rpm: 800,
    nitroPercent: 100,
    score: 0,
    distanceMeters: 0,
    combo: 1,
    comboTimerProgress: 0,
    pursuitActive: false,
    pursuitAlertIntensity: 0,
    policeDistance: 999,
    steerAxis: 0,
    tiltAngle: 0,
    tiltActive: false,
    weather: 'CLEAR',
    isLightningFlashing: false,
  });

  const [nearMissAlert, setNearMissAlert] = useState<{ text: string; combo: number; id: number } | null>(null);
  const [evadedBonus, setEvadedBonus] = useState<number | null>(null);
  const [founderMilestoneAlert, setFounderMilestoneAlert] = useState<string | null>(null);
  const [summary, setSummary] = useState<GameSummary | null>(null);

  // 1. Initialize Three.js Engine
  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, activeCar);
    engineRef.current = engine;

    engine.onHUDUpdate = (data) => {
      setHud(data);
    };

    engine.onNearMissAlert = (text, combo) => {
      setNearMissAlert({ text, combo, id: Date.now() });
    };

    engine.onPursuitEvadedAlert = (bonus) => {
      setEvadedBonus(bonus);
      setTimeout(() => setEvadedBonus(null), 3000);
    };

    engine.onFounderMilestone = (milestoneMeters) => {
      audioManager.playCoinUnlock();
      HapticsManager.nearMiss();
      setFounderMilestoneAlert(`👑 ${Math.round(milestoneMeters / 1000)},000M MILESTONE — INDRAJIT KUMAR FOUNDER ZONE`);
      setTimeout(() => setFounderMilestoneAlert(null), 4500);
    };

    engine.onGameOver = (runSummary) => {
      tiltManager.stop();
      setSummary(runSummary);
      setGameState('GAME_OVER');
      setStats(StorageManager.getStats());
    };

    return () => {
      tiltManager.stop();
      engine.destroy();
    };
  }, []);

  // 2. 8K Splash Screen Intro Timer & "Dhan-Dhan" Engine Audio
  useEffect(() => {
    if (gameState === 'SPLASH') {
      const triggerIntro = () => {
        audioManager.playCinematicIntroSound();
        window.removeEventListener('pointerdown', triggerIntro);
      };
      window.addEventListener('pointerdown', triggerIntro);
      audioManager.playCinematicIntroSound();

      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(100, (elapsed / 3.0) * 100);
        setSplashProgress(progress);
        if (elapsed >= 3.0) {
          clearInterval(interval);
          setSplashTimerDone(true);
        }
      }, 50);

      return () => {
        clearInterval(interval);
        window.removeEventListener('pointerdown', triggerIntro);
      };
    }
  }, [gameState]);

  // 3. Sync Car Configuration and Turntable Showroom Mode
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setCarConfig(activeCar);
      if (gameState === 'SELECT_CAR') {
        engineRef.current.setTurntableMode(true);
      } else {
        engineRef.current.setTurntableMode(false);
      }
    }
  }, [activeCar, gameState]);

  // Desktop Keyboard Controls (W/A/S/D / Arrows / Shift / Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'RACING' || !engineRef.current) return;
      const c = engineRef.current.controls;
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') c.steerLeft = true;
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') c.steerRight = true;
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') { c.throttle = true; c.brake = false; }
      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's' || e.key === ' ') { c.brake = true; c.throttle = false; }
      if (e.shiftKey) c.nitro = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!engineRef.current) return;
      const c = engineRef.current.controls;
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') c.steerLeft = false;
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') c.steerRight = false;
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') c.throttle = false;
      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's' || e.key === ' ') c.brake = false;
      if (!e.shiftKey) c.nitro = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // Step 1 -> Step 2: Play from Splash
  const handlePlayFromSplash = () => {
    HapticsManager.buttonTap();
    audioManager.unlock();
    document.documentElement.requestFullscreen().catch(() => {});
    setGameState('SELECT_TRACK');
  };

  // Step 2 -> Step 3: Select Track (Night vs Day)
  const handleSelectTrack = (track: 'NIGHT' | 'DAY') => {
    HapticsManager.buttonTap();
    setSelectedTrack(track);
    if (engineRef.current) {
      engineRef.current.setTrackEnvironment(track);
    }
    setGameState('SELECT_CAR');
  };

  // Step 3: Browse Cars in Showroom
  const handleNextCar = () => {
    HapticsManager.buttonTap();
    const nextIdx = (activeCarIndex + 1) % cars.length;
    setActiveCarIndex(nextIdx);
    setActiveCar(cars[nextIdx]);
  };

  const handlePrevCar = () => {
    HapticsManager.buttonTap();
    const prevIdx = (activeCarIndex - 1 + cars.length) % cars.length;
    setActiveCarIndex(prevIdx);
    setActiveCar(cars[prevIdx]);
  };

  // Unlock Locked Car with Coins
  const handleUnlockCar = (carId: string) => {
    const success = StorageManager.unlockCar(carId);
    if (success) {
      HapticsManager.crash();
      audioManager.playCoinUnlock();
      const updatedCars = StorageManager.getCars();
      const updatedStats = StorageManager.getStats();
      setCars(updatedCars);
      setStats(updatedStats);
      const unlocked = updatedCars.find(c => c.id === carId);
      if (unlocked) {
        setActiveCar(unlocked);
      }
    }
  };

  // Step 3 -> Step 4: Launch Race with 3-2-1-GO! Countdown
  const launchCountdownAndRace = useCallback(() => {
    HapticsManager.buttonTap();
    audioManager.unlock();
    if (engineRef.current) {
      engineRef.current.setTurntableMode(false);
      engineRef.current.setTrackEnvironment(selectedTrack);
    }

    setGameState('COUNTDOWN');
    setCountdown(3);
    audioManager.playCountdownBeep(false);

    setTimeout(() => {
      setCountdown(2);
      audioManager.playCountdownBeep(false);
    }, 1000);

    setTimeout(() => {
      setCountdown(1);
      audioManager.playCountdownBeep(false);
    }, 2000);

    setTimeout(() => {
      setCountdown('GO!');
      audioManager.playCountdownBeep(true);
      if (engineRef.current) {
        engineRef.current.start();
      }
      if (tiltSteeringEnabled) {
        tiltManager.start();
        tiltManager.calibrate();
      } else {
        tiltManager.stop();
      }
      setGameState('RACING');
      setTimeout(() => setCountdown(null), 700);
    }, 3000);
  }, [selectedTrack, tiltSteeringEnabled]);

  // Sound Toggle
  const toggleAudio = useCallback(() => {
    HapticsManager.buttonTap();
    audioManager.unlock();
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
  }, []);

  // Gyro Tilt Steering Mode Toggle
  const toggleTiltSteering = useCallback(async () => {
    HapticsManager.buttonTap();
    const nextState = !tiltSteeringEnabled;

    if (nextState) {
      const granted = await tiltManager.requestPermission();
      if (granted) {
        if (gameState === 'RACING') {
          tiltManager.start();
          tiltManager.calibrate();
        }
        setTiltSteeringEnabled(true);
        setStats(StorageManager.saveStats({ tiltSteeringEnabled: true }));
      } else {
        alert('Orientation sensors unavailable. Keeping touch buttons.');
      }
    } else {
      tiltManager.stop();
      if (engineRef.current) {
        engineRef.current.controls.steerAxis = 0;
      }
      setTiltSteeringEnabled(false);
      setStats(StorageManager.saveStats({ tiltSteeringEnabled: false }));
    }
  }, [tiltSteeringEnabled, gameState]);

  // Mobile Touch Controls Dispatcher
  const handleTouchControls = useCallback((changes: Partial<PlayerControls>) => {
    if (engineRef.current) {
      Object.assign(engineRef.current.controls, changes);
    }
  }, []);

  return (
    <div className="game-app-root">
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="webgl-canvas" />

      {/* Atmospheric Windshield Water Droplets & Lightning Flash */}
      <RainScreenOverlay
        isRaining={hud.weather === 'RAIN' && gameState === 'RACING'}
        isLightningFlashing={hud.isLightningFlashing}
      />

      {/* Over-The-Air Real-time Cloud Update Banner */}
      <UpdateNotification gameState={gameState} />

      {/* PWA 1-Tap Offline Standalone Game Installer */}
      <InstallPrompt />

      {/* Mobile Landscape Orientation Enforcement Overlay */}
      <RotatePhonePrompt />

      {/* =====================================================================
          STEP 1: 8K HERO SPLASH SCREEN ("Dhan-Dhan" Engine Roar + 3s Timer)
          ===================================================================== */}
      {gameState === 'SPLASH' && (
        <div className="splash-screen-overlay">
          <div className="splash-bg-image" />
          <div className="splash-vignette" />

          <div className="splash-content-card">
            <h1 className="splash-title">
              VELOCITY <span className="highlight">X</span>
            </h1>
            <p className="splash-subtitle">NEXT-GEN HIGHWAY PURSUIT</p>

            {!splashTimerDone ? (
              <div className="splash-loading-wrapper">
                <div className="engine-rev-badge">
                  <Zap size={15} className="rev-icon" />
                  <span>STARTING V8 ENGINES...</span>
                </div>
                <div className="splash-progress-track">
                  <div className="splash-progress-fill" style={{ width: `${splashProgress}%` }} />
                </div>
                <span className="splash-hint">TAP SCREEN FOR ENGINE SOUND</span>
              </div>
            ) : (
              <div className="splash-actions-group">
                <button className="splash-play-btn" onClick={handlePlayFromSplash}>
                  <Play size={26} fill="currentColor" />
                  <span>PLAY GAME</span>
                </button>

                <button
                  type="button"
                  className="splash-install-btn"
                  onClick={() => triggerGlobalAppInstall()}
                  title="Install Directly on Phone (Offline Flight Mode)"
                >
                  <Download size={18} />
                  <span>INSTALL STANDALONE APP</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          STEP 2: TRACK SELECTION SCREEN (Tokyo Cyber Night vs Golden Daylight)
          ===================================================================== */}
      {gameState === 'SELECT_TRACK' && (
        <div className="track-select-overlay">
          <div className="select-modal-container">
            <span className="track-super-title">STEP 1 OF 2</span>
            <h2 className="select-screen-title">CHOOSE HIGHWAY ATMOSPHERE</h2>
            <p className="select-screen-desc">Select your high-speed expressway environment</p>

            <div className="track-cards-grid">
              {/* Card 1: Tokyo Cyber Night */}
              <div
                className={`track-card night-card ${selectedTrack === 'NIGHT' ? 'active' : ''}`}
                onClick={() => handleSelectTrack('NIGHT')}
              >
                <div className="track-card-badge">RECOMMENDED • AAA VIEW</div>
                <div className="track-icon-wrap night-icon-wrap">
                  <Moon size={36} />
                </div>
                <h3 className="track-name">TOKYO CYBER NIGHT</h3>
                <p className="track-sub">
                  Wet reflective expressway, glowing streetlights, Japanese neon billboards & midnight rain atmosphere.
                </p>
                <div className="track-card-select-btn">
                  <span>SELECT NIGHT EXP-9</span>
                </div>
              </div>

              {/* Card 2: Golden Daylight Highway */}
              <div
                className={`track-card day-card ${selectedTrack === 'DAY' ? 'active' : ''}`}
                onClick={() => handleSelectTrack('DAY')}
              >
                <div className="track-card-badge">GOLDEN HOUR</div>
                <div className="track-icon-wrap day-icon-wrap">
                  <Sun size={36} />
                </div>
                <h3 className="track-name">GOLDEN DAYLIGHT</h3>
                <p className="track-sub">
                  Bright sunlit expressway, crisp long shadows, clear city skyline & high daytime visibility.
                </p>
                <div className="track-card-select-btn">
                  <span>SELECT SUNNY CRUISE</span>
                </div>
              </div>
            </div>

            <button
              className="back-step-btn"
              onClick={() => { HapticsManager.buttonTap(); setGameState('SPLASH'); }}
            >
              <ChevronLeft size={16} />
              <span>BACK TO TITLE</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          STEP 3: 3D CAR SHOWROOM & GARAGE (1 Free, Others Locked with Coins)
          ===================================================================== */}
      {gameState === 'SELECT_CAR' && (
        <div className="car-showroom-overlay">
          {/* Top Bar: Coin Balance & Back Button */}
          <div className="showroom-top-bar">
            <button
              className="showroom-back-btn"
              onClick={() => { HapticsManager.buttonTap(); setGameState('SELECT_TRACK'); }}
            >
              <ChevronLeft size={16} />
              <span>TRACKS</span>
            </button>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                type="button"
                className="showroom-back-btn"
                style={{ padding: '8px 12px' }}
                onClick={toggleAudio}
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              <button
                type="button"
                className="showroom-back-btn"
                style={{ padding: '8px 12px' }}
                onClick={() => setShowLeaderboard(true)}
                title="Leaderboard"
              >
                <Trophy size={16} />
              </button>

              <div className="coin-display-showroom">
                <Coins size={17} className="coin-icon" />
                <span>{stats.coins.toLocaleString()} <small>COINS</small></span>
              </div>
            </div>
          </div>

          {/* Center Carousel Navigation Arrows */}
          <div className="showroom-nav-controls">
            <button className="showroom-arrow-btn prev" onClick={handlePrevCar}>
              <ChevronLeft size={28} />
            </button>
            <button className="showroom-arrow-btn next" onClick={handleNextCar}>
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Card: Car Details, Stats, Steering Toggle & START RACE */}
          <div className="showroom-bottom-dock">
            <div className="showroom-car-meta">
              <div className="car-name-row">
                <span className="car-brand-tag">HYPERCAR SHOWROOM</span>
                <h3 className="showroom-car-name">{activeCar.name}</h3>
              </div>

              {/* Performance Stats */}
              <div className="showroom-stats-row">
                <div className="spec-item">
                  <Gauge size={13} />
                  <span>TOP SPEED</span>
                  <strong>{activeCar.topSpeedKmh} <small>KM/H</small></strong>
                </div>
                <div className="spec-item">
                  <Zap size={13} />
                  <span>ACCELERATION</span>
                  <strong>{activeCar.acceleration} <small>/10</small></strong>
                </div>
                <div className="spec-item">
                  <Shield size={13} />
                  <span>ARMOR</span>
                  <strong>{activeCar.armor} <small>/10</small></strong>
                </div>
              </div>

              {/* Mobile Steering Preference Selector (Phone Tilt vs Touch Pads) */}
              <div className="showroom-steering-selector">
                <span className="steering-sel-label">STEERING MODE:</span>
                <div className="steering-toggle-capsule">
                  <button
                    type="button"
                    className={`steer-opt-btn ${!tiltSteeringEnabled ? 'active' : ''}`}
                    onClick={() => {
                      if (tiltSteeringEnabled) toggleTiltSteering();
                    }}
                  >
                    <span>TOUCH BUTTONS</span>
                  </button>

                  <button
                    type="button"
                    className={`steer-opt-btn ${tiltSteeringEnabled ? 'active' : ''}`}
                    onClick={() => {
                      if (!tiltSteeringEnabled) toggleTiltSteering();
                    }}
                  >
                    <Smartphone size={13} />
                    <span>PHONE TILT (BUTTONS GAYAB)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Button: UNLOCK or START RACE */}
            <div className="showroom-actions-col">
              {!activeCar.unlocked ? (
                <button
                  className={`showroom-action-btn unlock-btn ${stats.coins >= activeCar.price ? 'can-afford' : 'disabled'}`}
                  disabled={stats.coins < activeCar.price}
                  onClick={() => handleUnlockCar(activeCar.id)}
                >
                  <Lock size={20} />
                  <span>UNLOCK FOR {activeCar.price.toLocaleString()} COINS</span>
                </button>
              ) : (
                <button className="showroom-action-btn start-race-btn" onClick={launchCountdownAndRace}>
                  <Play size={24} fill="currentColor" />
                  <span>START RACE</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          STEP 4: 3-2-1-GO! COUNTDOWN OVERLAY
          ===================================================================== */}
      {gameState === 'COUNTDOWN' && countdown !== null && (
        <div className="countdown-overlay">
          <div className={`countdown-digits ${countdown === 'GO!' ? 'go-text' : ''}`}>
            {countdown}
          </div>
        </div>
      )}

      {/* =====================================================================
          STEP 5: RACING HUD & ERGONOMIC CONTROLS (Zero-Overlap, Head-Hidden)
          ===================================================================== */}
      {gameState === 'RACING' && (
        <>
          {/* Tactical Rearview Mirror (Isolated at Top-Center) */}
          <RearviewMirror
            pursuitActive={hud.pursuitActive}
            policeDistance={hud.policeDistance}
            alertIntensity={hud.pursuitAlertIntensity}
          />

          {/* Symmetrical Left/Right Top Stats & Bottom Corner Speedometer */}
          <MobileHUD
            hud={hud}
            nearMissAlert={nearMissAlert}
            evadedBonus={evadedBonus}
          />

          {/* Milestone Founder Gantry Toast (Every 1,000m) */}
          {founderMilestoneAlert && (
            <div className="founder-milestone-banner">
              <div className="founder-milestone-tag">HIGHWAY MILESTONE</div>
              <div className="founder-milestone-title">{founderMilestoneAlert}</div>
              <div className="founder-milestone-sub">OFFICIAL ARCHITECT • INDRAJIT KUMAR</div>
            </div>
          )}

          {/* Smart Device Adaptive Touch Controls (Hidden on PC/Laptop, Left/Right Buttons Hidden on Tilt) */}
          <MobileControls
            onControlsChange={handleTouchControls}
            nitroPercent={hud.nitroPercent}
            isNitroActive={engineRef.current?.playerCar.isNitroActive || false}
            tiltSteeringEnabled={tiltSteeringEnabled}
            tiltAngle={hud.tiltAngle}
            steerAxis={hud.steerAxis}
            onCalibrateTilt={() => tiltManager.calibrate()}
            onToggleTiltMode={toggleTiltSteering}
          />
        </>
      )}

      {/* =====================================================================
          GAME OVER / BUSTED MODAL
          ===================================================================== */}
      {gameState === 'GAME_OVER' && summary && (
        <GameOverModal
          summary={summary}
          onRestart={() => {
            setGameState('SELECT_TRACK');
          }}
          onOpenGarage={() => setGameState('SELECT_CAR')}
          onOpenLeaderboard={() => setShowLeaderboard(true)}
        />
      )}

      {/* Global Leaderboard Modal */}
      {showLeaderboard && (
        <LeaderboardModal onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
};
