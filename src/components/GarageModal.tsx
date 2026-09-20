// VELOCITY X - Mobile 3D Garage Showroom & Customizer
import React, { useState } from 'react';
import { CarConfig, StorageManager } from '../game/Storage';
import { HapticsManager } from '../game/HapticsManager';
import { audioManager } from '../game/AudioManager';
import { Shield, Zap, Gauge, Crosshair, Check, Lock, Coins, X } from 'lucide-react';

interface GarageModalProps {
  cars: CarConfig[];
  selectedCarId: string;
  coins: number;
  onSelectCar: (car: CarConfig) => void;
  onClose: () => void;
  onUpdateCars: (cars: CarConfig[]) => void;
  onUpdateCoins: (coins: number) => void;
}

const PAINT_COLORS = [
  { name: 'Cyber Cyan', hex: '#00f3ff' },
  { name: 'Midnight Obsidian', hex: '#11141a' },
  { name: 'Crimson Flare', hex: '#ff0044' },
  { name: 'Liquid Gold', hex: '#e6c300' },
  { name: 'Toxic Lime', hex: '#22ff44' },
  { name: 'Ultraviolet', hex: '#a822ff' },
];

const UNDERGLOW_COLORS = [
  { name: 'Ice Blue', hex: '#00f3ff' },
  { name: 'Neon Pink', hex: '#ff0088' },
  { name: 'Emerald', hex: '#00ff66' },
  { name: 'Solar Amber', hex: '#ff9900' },
  { name: 'Ghost Purple', hex: '#9933ff' },
];

export const GarageModal: React.FC<GarageModalProps> = ({
  cars,
  selectedCarId,
  coins,
  onSelectCar,
  onClose,
  onUpdateCars,
  onUpdateCoins,
}) => {
  const [activeCarIndex, setActiveCarIndex] = useState(() => {
    const idx = cars.findIndex(c => c.id === selectedCarId);
    return idx >= 0 ? idx : 0;
  });

  const car = cars[activeCarIndex];

  const handleCarSwitch = (index: number) => {
    HapticsManager.buttonTap();
    setActiveCarIndex(index);
  };

  const handlePaintSelect = (hex: string) => {
    HapticsManager.buttonTap();
    StorageManager.updateCarCustomization(car.id, hex, car.underglowColor);
    const updated = StorageManager.getCars();
    onUpdateCars(updated);
    if (car.id === selectedCarId) {
      onSelectCar(updated[activeCarIndex]);
    }
  };

  const handleUnderglowSelect = (hex: string) => {
    HapticsManager.buttonTap();
    StorageManager.updateCarCustomization(car.id, car.color, hex);
    const updated = StorageManager.getCars();
    onUpdateCars(updated);
    if (car.id === selectedCarId) {
      onSelectCar(updated[activeCarIndex]);
    }
  };

  const handleUnlock = () => {
    if (coins >= car.price) {
      HapticsManager.buttonTap();
      audioManager.playCoinPickup();
      if (StorageManager.unlockCar(car.id)) {
        const updatedCars = StorageManager.getCars();
        const updatedStats = StorageManager.getStats();
        onUpdateCars(updatedCars);
        onUpdateCoins(updatedStats.coins);
        onSelectCar(updatedCars[activeCarIndex]);
      }
    }
  };

  const handleSelect = () => {
    HapticsManager.buttonTap();
    StorageManager.saveStats({ selectedCarId: car.id });
    onSelectCar(car);
    onClose();
  };

  return (
    <div className="garage-modal-overlay">
      <div className="garage-modal-card">
        {/* Header Bar */}
        <div className="garage-header">
          <div className="garage-title-wrap">
            <h2 className="garage-title">CYBER GARAGE</h2>
            <span className="garage-sub">SELECT & CUSTOMIZE VEHICLE</span>
          </div>

          <div className="coins-badge">
            <Coins size={18} className="coin-icon" />
            <span>{coins.toLocaleString()}</span>
          </div>

          <button className="close-btn" onClick={() => { HapticsManager.buttonTap(); onClose(); }}>
            <X size={22} />
          </button>
        </div>

        {/* Car Switcher Tabs */}
        <div className="car-tabs">
          {cars.map((c, idx) => (
            <button
              key={c.id}
              className={`car-tab-btn ${idx === activeCarIndex ? 'active' : ''}`}
              onClick={() => handleCarSwitch(idx)}
            >
              <span className="car-tab-name">{c.name}</span>
              {!c.unlocked && <Lock size={12} className="lock-icon" />}
            </button>
          ))}
        </div>

        {/* Car Specs & Preview Info */}
        <div className="car-detail-container">
          <div className="car-stats-panel">
            <div className="spec-row">
              <div className="spec-label">
                <Gauge size={16} />
                <span>TOP SPEED</span>
              </div>
              <span className="spec-value">{car.topSpeedKmh} KM/H</span>
            </div>

            <div className="spec-row">
              <div className="spec-label">
                <Zap size={16} />
                <span>ACCELERATION</span>
              </div>
              <div className="spec-bar-track">
                <div className="spec-bar-fill" style={{ width: `${(car.acceleration / 10) * 100}%` }} />
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-label">
                <Crosshair size={16} />
                <span>HANDLING</span>
              </div>
              <div className="spec-bar-track">
                <div className="spec-bar-fill" style={{ width: `${(car.handling / 10) * 100}%` }} />
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-label">
                <Shield size={16} />
                <span>ARMOR (VS POLICE)</span>
              </div>
              <div className="spec-bar-track">
                <div className="spec-bar-fill armor" style={{ width: `${(car.armor / 10) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Color & Underglow Customizer */}
          <div className="customizer-panel">
            <div className="palette-section">
              <span className="palette-label">METALLIC CLEARCOAT PAINT</span>
              <div className="swatches-row">
                {PAINT_COLORS.map(p => (
                  <button
                    key={p.hex}
                    className={`color-swatch ${car.color.toLowerCase() === p.hex.toLowerCase() ? 'selected' : ''}`}
                    style={{ backgroundColor: p.hex }}
                    onClick={() => handlePaintSelect(p.hex)}
                  >
                    {car.color.toLowerCase() === p.hex.toLowerCase() && <Check size={14} color="#fff" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="palette-section">
              <span className="palette-label">NEON RGB UNDERGLOW</span>
              <div className="swatches-row">
                {UNDERGLOW_COLORS.map(u => (
                  <button
                    key={u.hex}
                    className={`color-swatch underglow-swatch ${car.underglowColor.toLowerCase() === u.hex.toLowerCase() ? 'selected' : ''}`}
                    style={{ backgroundColor: u.hex, boxShadow: `0 0 10px ${u.hex}` }}
                    onClick={() => handleUnderglowSelect(u.hex)}
                  >
                    {car.underglowColor.toLowerCase() === u.hex.toLowerCase() && <Check size={14} color="#000" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button: Unlock / Select */}
        <div className="garage-footer">
          {car.unlocked ? (
            <button
              className={`primary-action-btn ${car.id === selectedCarId ? 'selected-btn' : ''}`}
              onClick={handleSelect}
            >
              {car.id === selectedCarId ? 'EQUIPPED & READY' : 'SELECT CAR'}
            </button>
          ) : (
            <button
              className={`primary-action-btn unlock-btn ${coins < car.price ? 'disabled' : ''}`}
              disabled={coins < car.price}
              onClick={handleUnlock}
            >
              <Lock size={16} />
              <span>UNLOCK FOR {car.price.toLocaleString()} COINS</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
