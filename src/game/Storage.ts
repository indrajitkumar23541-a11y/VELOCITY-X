// VELOCITY X - Offline Local Storage & Save System

export interface CarConfig {
  id: string;
  name: string;
  type: 'roadster' | 'gt' | 'muscle';
  price: number;
  unlocked: boolean;
  topSpeedKmh: number;
  acceleration: number;
  handling: number;
  armor: number;
  color: string;
  underglowColor: string;
}

export interface GameStats {
  highScore: number;
  coins: number;
  totalNearMisses: number;
  totalPoliceEvaded: number;
  selectedCarId: string;
  audioVolume: number;
  hapticsEnabled: boolean;
  tiltSteeringEnabled: boolean;
}

const DEFAULT_CARS: CarConfig[] = [
  {
    id: 'apex_roadster',
    name: 'Apex Roadster',
    type: 'roadster',
    price: 0,
    unlocked: true,
    topSpeedKmh: 240,
    acceleration: 9.2,
    handling: 9.5,
    armor: 6.0,
    color: '#00f3ff', // Cyber Cyan
    underglowColor: '#00f3ff',
  },
  {
    id: 'veloce_gt',
    name: 'Veloce GT Supercar',
    type: 'gt',
    price: 3500,
    unlocked: false,
    topSpeedKmh: 295,
    acceleration: 9.8,
    handling: 8.8,
    armor: 5.5,
    color: '#ff0055', // Crimson Flare
    underglowColor: '#ff0055',
  },
  {
    id: 'titan_v8',
    name: 'Titan V8 Muscle',
    type: 'muscle',
    price: 5000,
    unlocked: false,
    topSpeedKmh: 260,
    acceleration: 8.5,
    handling: 7.5,
    armor: 9.5, // High impact resistance against police rams
    color: '#e6c300', // Liquid Gold
    underglowColor: '#ffaa00',
  }
];

const DEFAULT_STATS: GameStats = {
  highScore: 0,
  coins: 500, // starting bonus
  totalNearMisses: 0,
  totalPoliceEvaded: 0,
  selectedCarId: 'apex_roadster',
  audioVolume: 0.8,
  hapticsEnabled: true,
  tiltSteeringEnabled: false,
};

const STATS_KEY = 'velocity_x_stats';
const CARS_KEY = 'velocity_x_cars';

export class StorageManager {
  static getStats(): GameStats {
    try {
      const data = localStorage.getItem(STATS_KEY);
      if (data) {
        return { ...DEFAULT_STATS, ...JSON.parse(data) };
      }
    } catch {
      // ignore
    }
    return { ...DEFAULT_STATS };
  }

  static saveStats(stats: Partial<GameStats>): GameStats {
    const current = this.getStats();
    const updated = { ...current, ...stats };
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    return updated;
  }

  static getCars(): CarConfig[] {
    try {
      const data = localStorage.getItem(CARS_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return DEFAULT_CARS.map(dc => {
          const found = parsed.find((p: CarConfig) => p.id === dc.id);
          return found ? { ...dc, ...found } : dc;
        });
      }
    } catch {
      // ignore
    }
    return DEFAULT_CARS;
  }

  static saveCars(cars: CarConfig[]): void {
    try {
      localStorage.setItem(CARS_KEY, JSON.stringify(cars));
    } catch {
      // ignore
    }
  }

  static unlockCar(carId: string): boolean {
    const stats = this.getStats();
    const cars = this.getCars();
    const car = cars.find(c => c.id === carId);

    if (car && !car.unlocked && stats.coins >= car.price) {
      stats.coins -= car.price;
      car.unlocked = true;
      this.saveStats(stats);
      this.saveCars(cars);
      return true;
    }
    return false;
  }

  static updateCarCustomization(carId: string, color: string, underglowColor: string): void {
    const cars = this.getCars();
    const car = cars.find(c => c.id === carId);
    if (car) {
      car.color = color;
      car.underglowColor = underglowColor;
      this.saveCars(cars);
    }
  }
}
