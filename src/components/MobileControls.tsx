// VELOCITY X - Ergonomic Dual-Thumb Touch Controls for All Mobile Devices
import React, { useCallback, useRef } from 'react';
import { PlayerControls } from '../game/PlayerCar';
import { HapticsManager } from '../game/HapticsManager';
import { Zap } from 'lucide-react';

interface MobileControlsProps {
  onControlsChange: (controls: Partial<PlayerControls>) => void;
  nitroPercent: number;
  isNitroActive: boolean;
}

export const MobileControls: React.FC<MobileControlsProps> = ({
  onControlsChange,
  nitroPercent,
  isNitroActive,
}) => {
  const activeSteerRef = useRef<'left' | 'right' | null>(null);

  // Left Thumb: Steering Handlers
  const handleSteerStart = useCallback((direction: 'left' | 'right') => {
    activeSteerRef.current = direction;
    HapticsManager.buttonTap();
    onControlsChange({
      steerLeft: direction === 'left',
      steerRight: direction === 'right',
    });
  }, [onControlsChange]);

  const handleSteerEnd = useCallback(() => {
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

  return (
    <div className="mobile-controls-container">
      {/* LEFT THUMB ZONE: Dual Steering Pads */}
      <div className="touch-zone left-zone">
        <button
          className="touch-btn steer-btn left-steer"
          onPointerDown={(e) => { e.preventDefault(); handleSteerStart('left'); }}
          onPointerUp={(e) => { e.preventDefault(); handleSteerEnd(); }}
          onPointerCancel={(e) => { e.preventDefault(); handleSteerEnd(); }}
          onPointerLeave={(e) => { e.preventDefault(); handleSteerEnd(); }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="btn-label">LEFT</span>
        </button>

        <button
          className="touch-btn steer-btn right-steer"
          onPointerDown={(e) => { e.preventDefault(); handleSteerStart('right'); }}
          onPointerUp={(e) => { e.preventDefault(); handleSteerEnd(); }}
          onPointerCancel={(e) => { e.preventDefault(); handleSteerEnd(); }}
          onPointerLeave={(e) => { e.preventDefault(); handleSteerEnd(); }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
          <span className="btn-label">RIGHT</span>
        </button>
      </div>

      {/* RIGHT THUMB ZONE: Gas Pedal, Brake, and Glowing NOS Button */}
      <div className="touch-zone right-zone">
        {/* NOS Rocket Button */}
        <button
          className={`touch-btn nos-btn ${isNitroActive ? 'nos-active' : ''} ${nitroPercent < 5 ? 'nos-depleted' : ''}`}
          onPointerDown={(e) => { e.preventDefault(); handleNitroStart(); }}
          onPointerUp={(e) => { e.preventDefault(); handleNitroEnd(); }}
          onPointerCancel={(e) => { e.preventDefault(); handleNitroEnd(); }}
          onPointerLeave={(e) => { e.preventDefault(); handleNitroEnd(); }}
        >
          <Zap className="nos-icon" size={26} />
          <span className="nos-label">NOS</span>
          <div className="nos-ring" style={{ opacity: nitroPercent / 100 }} />
        </button>

        {/* Brake Pedal */}
        <button
          className="touch-btn pedal-btn brake-pedal"
          onPointerDown={(e) => { e.preventDefault(); handleBrakeStart(); }}
          onPointerUp={(e) => { e.preventDefault(); handleBrakeEnd(); }}
          onPointerCancel={(e) => { e.preventDefault(); handleBrakeEnd(); }}
          onPointerLeave={(e) => { e.preventDefault(); handleBrakeEnd(); }}
        >
          <span className="pedal-label">BRAKE</span>
        </button>

        {/* Gas / Race Pedal */}
        <button
          className="touch-btn pedal-btn gas-pedal"
          onPointerDown={(e) => { e.preventDefault(); handleThrottleStart(); }}
          onPointerUp={(e) => { e.preventDefault(); handleThrottleEnd(); }}
          onPointerCancel={(e) => { e.preventDefault(); handleThrottleEnd(); }}
          onPointerLeave={(e) => { e.preventDefault(); handleThrottleEnd(); }}
        >
          <span className="pedal-label">GAS</span>
        </button>
      </div>
    </div>
  );
};
