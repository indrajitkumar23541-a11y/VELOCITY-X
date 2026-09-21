// VELOCITY X - Main Application & Game State Orchestrator
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Engine, HUDData, GameSummary } from './game/Engine';
import { StorageManager, CarConfig, GameStats } from './game/Storage';
import { PlayerControls } from './game/PlayerCar';
import { audioManager } from './game/AudioManager';
import { HapticsManager } from './game/HapticsManager';
import { tiltManager } from './game/TiltManager';
import { WeatherType } from './game/WeatherManager';
import { MobileHUD } from './components/MobileHUD';
import { MobileControls } from './components/MobileControls';
import { RearviewMirror } from './components/RearviewMirror';
import { GarageModal } from './components/GarageModal';
import { GameOverModal } from './components/GameOverModal';
import { RotatePhonePrompt } from './components/RotatePhonePrompt';
import { InstallPrompt } from './components/InstallPrompt';
import { LeaderboardModal } from './components/LeaderboardModal';
import { RainScreenOverlay } from './components/RainScreenOverlay';
import { Volume2, VolumeX, Play, Wrench, Trophy, Coins, Smartphone, CloudRain, Moon } from 'lucide-react';

export type GameState = 'MENU' | 'RACING' | 'GARAGE' | 'GAME_OVER';

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Engine | null>(null);

  // Persistence State
  const [stats, setStats] = useState<GameStats>(() => StorageManager.getStats());
  const [cars, setCars] = useState<CarConfig[]>(() => StorageManager.getCars());
  const [activeCar, setActiveCar] = useState<CarConfig>(() => {
    const saved = StorageManager.getCars();
    const currentStats = StorageManager.getStats();
    return saved.find(c => c.id === currentStats.selectedCarId) || saved[0];
  });

  // App & Flow States
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [isMuted, setIsMuted] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [weather, setWeather] = useState<WeatherType>('CLEAR');
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
  const [summary, setSummary] = useState<GameSummary | null>(null);

  // Initialize Three.js Engine
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

  // Sync Car Configuration to Engine when modified
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setCarConfig(activeCar);
    }
  }, [activeCar]);

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

  // Start Race
  const startRace = useCallback(() => {
    HapticsManager.buttonTap();
    audioManager.unlock();
    setGameState('RACING');

    if (tiltSteeringEnabled) {
      tiltManager.start();
      tiltManager.calibrate();
    } else {
      tiltManager.stop();
    }

    if (engineRef.current) {
      engineRef.current.start();
    }
  }, [tiltSteeringEnabled]);

  // Sound Toggle
  const toggleAudio = useCallback(() => {
    HapticsManager.buttonTap();
    audioManager.unlock();
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
  }, []);

  // Dynamic Weather Toggle (Clear Night vs Cyber Rainstorm)
  const toggleWeather = useCallback(() => {
    HapticsManager.buttonTap();
    if (engineRef.current) {
      const next = engineRef.current.weatherManager.toggleWeather();
      setWeather(next);
    }
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
        alert('Device orientation sensors could not be accessed. Keeping touch buttons.');
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
        isRaining={hud.weather === 'RAIN'}
        isLightningFlashing={hud.isLightningFlashing}
      />

      {/* Mobile Portrait Detection Overlay */}
      <RotatePhonePrompt />

      {/* TOP HEADER CONTROLS (Mute, Weather, Gyro, Records, Install, Coin Balance) */}
      <header className="mobile-app-header">
        <div className="header-left">
          <button className="icon-btn" onClick={toggleAudio} title="Toggle Audio">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Weather Toggle */}
          <button
            className={`icon-btn weather-toggle-header ${weather === 'RAIN' ? 'rain-active' : ''}`}
            onClick={toggleWeather}
            title={weather === 'RAIN' ? 'Cyber Rain Active (Tap for Clear Night)' : 'Clear Night Active (Tap for Cyber Rain)'}
          >
            {weather === 'RAIN' ? <CloudRain size={18} color="#00f3ff" /> : <Moon size={18} />}
          </button>

          {/* Gyro Tilt Toggle */}
          <button
            className={`icon-btn tilt-toggle-header ${tiltSteeringEnabled ? 'tilt-active' : ''}`}
            onClick={toggleTiltSteering}
            title={tiltSteeringEnabled ? 'Gyro Tilt Active (Tap to switch to Touch)' : 'Touch Buttons Active (Tap to switch to Gyro Tilt)'}
          >
            <Smartphone size={17} />
            <span className="tilt-status-pill">{tiltSteeringEnabled ? 'GYRO' : 'TOUCH'}</span>
          </button>

          {/* Global Leaderboard Button */}
          <button
            className="icon-btn leaderboard-header-btn"
            onClick={() => { HapticsManager.buttonTap(); setShowLeaderboard(true); }}
            title="Global Leaderboard & World Records"
          >
            <Trophy size={18} />
          </button>

          <InstallPrompt />
        </div>

        <div className="header-right">
          <div className="coin-display">
            <Coins size={16} className="coin-icon" />
            <span>{stats.coins.toLocaleString()}</span>
          </div>
        </div>
      </header>

      {/* 1. TITLE / MENU SCREEN */}
      {gameState === 'MENU' && (
        <div className="menu-screen-overlay">
          <div className="menu-center-card">
            <div className="title-glow-wrap">
              <h1 className="game-title">
                VELOCITY <span className="highlight">X</span>
              </h1>
              <p className="game-subtitle">CYBER HIGHWAY POLICE PURSUIT</p>
            </div>

            {/* High Score & Selected Car Card */}
            <div className="menu-car-pill">
              <div className="car-pill-left">
                <span className="pill-sub">SELECTED VEHICLE</span>
                <span className="pill-name">{activeCar.name}</span>
              </div>
              <div className="car-pill-right">
                <span className="pill-sub">TOP RECORD</span>
                <span className="pill-val">
                  <Trophy size={14} className="trophy-icon" />
                  {stats.highScore.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Steering Mode & Weather Selectors */}
            <div className="menu-selectors-row">
              {/* Steering Mode Selector */}
              <div className="control-mode-selector">
                <span className="selector-label">STEERING SYSTEM</span>
                <div className="mode-toggle-pill">
                  <button
                    type="button"
                    className={`mode-pill-btn ${!tiltSteeringEnabled ? 'selected' : ''}`}
                    onClick={() => {
                      if (tiltSteeringEnabled) toggleTiltSteering();
                    }}
                  >
                    <span>TOUCH PADS</span>
                  </button>
                  <button
                    type="button"
                    className={`mode-pill-btn ${tiltSteeringEnabled ? 'selected' : ''}`}
                    onClick={() => {
                      if (!tiltSteeringEnabled) toggleTiltSteering();
                    }}
                  >
                    <Smartphone size={13} />
                    <span>GYRO TILT</span>
                  </button>
                </div>
              </div>

              {/* Weather Selector */}
              <div className="control-mode-selector weather-selector">
                <span className="selector-label">ATMOSPHERE</span>
                <div className="mode-toggle-pill">
                  <button
                    type="button"
                    className={`mode-pill-btn ${weather === 'CLEAR' ? 'selected' : ''}`}
                    onClick={() => {
                      if (weather !== 'CLEAR') toggleWeather();
                    }}
                  >
                    <Moon size={13} />
                    <span>CLEAR</span>
                  </button>
                  <button
                    type="button"
                    className={`mode-pill-btn ${weather === 'RAIN' ? 'selected' : ''}`}
                    onClick={() => {
                      if (weather !== 'RAIN') toggleWeather();
                    }}
                  >
                    <CloudRain size={13} />
                    <span>RAIN</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="menu-buttons-row">
              <button
                className="menu-btn leaderboard-btn"
                onClick={() => { HapticsManager.buttonTap(); setShowLeaderboard(true); }}
              >
                <Trophy size={20} />
                <span>RECORDS</span>
              </button>

              <button
                className="menu-btn garage-btn"
                onClick={() => { HapticsManager.buttonTap(); setGameState('GARAGE'); }}
              >
                <Wrench size={20} />
                <span>GARAGE</span>
              </button>

              <button className="menu-btn play-btn" onClick={startRace}>
                <Play size={24} fill="currentColor" />
                <span>START RACE</span>
              </button>
            </div>

            <div className="menu-tips">
              <span>{tiltSteeringEnabled ? 'PHYSICALLY TILT PHONE TO CARVE THROUGH HIGHWAY LANES' : 'TAP & HOLD LEFT / RIGHT TO WEAVE THROUGH TRAFFIC'}</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. RACING HUD & CONTROLS */}
      {gameState === 'RACING' && (
        <>
          {/* Tactical Rearview Mirror */}
          <RearviewMirror
            pursuitActive={hud.pursuitActive}
            policeDistance={hud.policeDistance}
            alertIntensity={hud.pursuitAlertIntensity}
          />

          {/* Speedometer, Nitro, Combo & Stats HUD */}
          <MobileHUD
            hud={hud}
            nearMissAlert={nearMissAlert}
            evadedBonus={evadedBonus}
          />

          {/* Dual-Thumb Ergonomic Mobile Touch Pedals / Gyro Instrument */}
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

      {/* 3. GARAGE CUSTOMIZER MODAL */}
      {gameState === 'GARAGE' && (
        <GarageModal
          cars={cars}
          selectedCarId={activeCar.id}
          coins={stats.coins}
          onSelectCar={(newCar) => setActiveCar(newCar)}
          onClose={() => setGameState('MENU')}
          onUpdateCars={(updated) => setCars(updated)}
          onUpdateCoins={(c) => setStats(prev => ({ ...prev, coins: c }))}
        />
      )}

      {/* 4. GAME OVER / BUSTED MODAL */}
      {gameState === 'GAME_OVER' && summary && (
        <GameOverModal
          summary={summary}
          onRestart={startRace}
          onOpenGarage={() => setGameState('GARAGE')}
          onOpenLeaderboard={() => setShowLeaderboard(true)}
        />
      )}

      {/* 5. GLOBAL LEADERBOARD MODAL */}
      {showLeaderboard && (
        <LeaderboardModal onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
};
