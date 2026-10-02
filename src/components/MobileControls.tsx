// VELOCITY X - Adaptive Device Touch & Gyro Controls (Hidden on PC/Laptop)
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { PlayerControls } from '../game/PlayerCar';
import { HapticsManager } from '../game/HapticsManager';
import { Zap, RotateCcw, Smartphone } from 'lucide-react';

interface MobileControlsProps {
  onControlsChange: (controls: Partial<PlayerControls>) => void;
  nitroPercent: number;
  isNitroActive: boolean;
  tiltSteeringEnabled?: boolean;
  tiltAngle?: number;
  steerAxis?: number;
  onCalibrateTilt?: () => void;
  onToggleTiltMode?: () => void;
}

export const MobileControls: React.FC<MobileControlsProps> = ({
  onControlsChange,
  nitroPercent,
  isNitroActive,
  tiltSteeringEnabled = false,
  tiltAngle = 0,
  onCalibrateTilt,
}) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const activeSteerRef = useRef<'left' | 'right' | null>(null);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsTouchDevice(hasTouch);
    };
    checkTouch();
  }, []);

  // Left Thumb: Steering Handlers
  const handleSteerStart = useCallback((direction: 'left' | 'right') => {
    activeSteerRef.current = direction;
    HapticsManager.buttonTap();
    onControlsChange({
      steerLeft: direction === 'left',
      steerRight: direction === 'right',
    });
  }, [onControlsChange]);

  const handleSteerEnd = useCallback((direction?: 'left' | 'right') => {
    if (direction && activeSteerRef.current !== direction) {
      return; // An opposite direction was activated, do not cancel it
    }
    activeSteerRef.current = null;
    onControlsChange({
      steerLeft: false,
      steerRight: false,
    });
  }, [onControlsChange]);

  // Right Thumb: Throttle / Brake / NOS Handlers
  const handleThrottleStart = useCallback(() => {
    HapticsManager.buttonTap();
    onControlsChange({ throttle: true, brake: false });
  }, [onControlsChange]);

  const handleThrottleEnd = useCallback(() => {
    onControlsChange({ throttle: false });
  }, [onControlsChange]);

  const handleBrakeStart = useCallback(() => {
    HapticsManager.buttonTap();
    onControlsChange({ brake: true, throttle: false });
  }, [onControlsChange]);

  const handleBrakeEnd = useCallback(() => {
    onControlsChange({ brake: false });
  }, [onControlsChange]);

  const handleNitroStart = useCallback(() => {
    if (nitroPercent > 5) {
      HapticsManager.nitroPulse();
      onControlsChange({ nitro: true });
    }
  }, [nitroPercent, onControlsChange]);

  const handleNitroEnd = useCallback(() => {
    onControlsChange({ nitro: false });
  }, [onControlsChange]);

  // If user is on PC / Laptop with mouse/keyboard, HIDE ALL TOUCH CONTROLS!
  if (!isTouchDevice) {
    return null;
  }

  return (
    <div className={`mobile-controls-container ${tiltSteeringEnabled ? 'tilt-active' : 'touch-active'}`}>
      {/* LEFT ZONE: Shown ONLY when Touch Buttons mode is selected.
          When Phone Tilt mode is selected, buttons completely DISAPPEAR! */}
      <div className="touch-zone left-zone">
        {tiltSteeringEnabled ? (
          <div className="tilt-active-hint">
            <button
              type="button"
              className="tilt-calibrate-badge"
              onClick={(e) => {
                e.preventDefault();
                HapticsManager.buttonTap();
                if (onCalibrateTilt) onCalibrateTilt();
              }}
              title="Calibrate Center Angle"
              aria-label="Calibrate Tilt Center Angle"
            >
              <Smartphone size={13} className="tilt-icon-anim" />
              <span>TILT {tiltAngle > 0 ? `+${tiltAngle}°` : `${tiltAngle}°`}</span>
              <RotateCcw size={11} className="recenter-sub" />
            </button>
          </div>
        ) : (
          <div className="steer-buttons-group">
            <button
              className="touch-btn steer-btn left-steer"
              aria-label="Steer Left"
              onPointerDown={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
                handleSteerStart('left');
              }}
              onPointerUp={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
                handleSteerEnd('left');
              }}
              onPointerCancel={(e) => {
                e.preventDefault();
                handleSteerEnd('left');
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span className="btn-label">LEFT</span>
            </button>

            <button
              className="touch-btn steer-btn right-steer"
              aria-label="Steer Right"
              onPointerDown={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
                handleSteerStart('right');
              }}
              onPointerUp={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
                handleSteerEnd('right');
              }}
              onPointerCancel={(e) => {
                e.preventDefault();
                handleSteerEnd('right');
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="btn-label">RIGHT</span>
            </button>
          </div>
        )}
      </div>

      {/* RIGHT THUMB ZONE: Pedals (NOS, Brake, Gas) with ergonomic bottom clearance */}
      <div className="touch-zone right-zone">
        {/* NOS Rocket Button */}
        <button
          className={`touch-btn nos-btn ${isNitroActive ? 'nos-active' : ''} ${nitroPercent < 5 ? 'nos-depleted' : ''}`}
          aria-label="Activate Nitro Boost"
          onPointerDown={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
            handleNitroStart();
          }}
          onPointerUp={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
            handleNitroEnd();
          }}
          onPointerCancel={(e) => {
            e.preventDefault();
            handleNitroEnd();
          }}
        >
          <Zap className="nos-icon" size={24} />
          <span className="nos-label">NOS</span>
          <div className="nos-ring" style={{ opacity: nitroPercent / 100 }} />
        </button>

        {/* Brake Pedal */}
        <button
          className="touch-btn pedal-btn brake-pedal"
          aria-label="Brake and Reverse"
          onPointerDown={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
            handleBrakeStart();
          }}
          onPointerUp={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
            handleBrakeEnd();
          }}
          onPointerCancel={(e) => {
            e.preventDefault();
            handleBrakeEnd();
          }}
        >
          <span className="pedal-label">BRAKE</span>
        </button>

        {/* Gas / Race Pedal */}
        <button
          className="touch-btn pedal-btn gas-pedal"
          aria-label="Accelerate Throttle"
          onPointerDown={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
            handleThrottleStart();
          }}
          onPointerUp={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
            handleThrottleEnd();
          }}
          onPointerCancel={(e) => {
            e.preventDefault();
            handleThrottleEnd();
          }}
        >
          <span className="pedal-label">GAS</span>
        </button>
      </div>
    </div>
  );
};
