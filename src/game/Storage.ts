// VELOCITY X - Offline Local Storage, Save System & Global Leaderboard
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
  playerCallsign: string;
}

export interface LeaderboardEntry {
  id: string;
  rank?: number;
  callsign: string;
  score: number;
  distanceMeters: number;
  policeEvaded: number;
  carName: string;
  date: string;
  isPlayer?: boolean;
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
  playerCallsign: 'VIPER_01',
};

const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  { id: 'lb_1', callsign: 'CYBER_GHOST', score: 98450, distanceMeters: 12400, policeEvaded: 8, carName: 'Veloce GT', date: 'SEP 20' },
  { id: 'lb_2', callsign: 'NEO_VIPER', score: 84200, distanceMeters: 9850, policeEvaded: 6, carName: 'Apex Roadster', date: 'SEP 19' },
  { id: 'lb_3', callsign: 'TITAN_WARLORD', score: 71900, distanceMeters: 8200, policeEvaded: 5, carName: 'Titan V8', date: 'SEP 18' },
  { id: 'lb_4', callsign: 'NIGHT_STALKER', score: 58600, distanceMeters: 6900, policeEvaded: 4, carName: 'Veloce GT', date: 'SEP 17' },
  { id: 'lb_5', callsign: 'INDRAJIT_X', score: 48500, distanceMeters: 5600, policeEvaded: 3, carName: 'Apex Roadster', date: 'SEP 16' },
  { id: 'lb_6', callsign: 'SYNTH_PULSE', score: 38200, distanceMeters: 4400, policeEvaded: 2, carName: 'Veloce GT', date: 'SEP 15' },
  { id: 'lb_7', callsign: 'DRIFT_SPECTRE', score: 29400, distanceMeters: 3300, policeEvaded: 2, carName: 'Titan V8', date: 'SEP 14' },
  { id: 'lb_8', callsign: 'BLADE_RUNNER', score: 21600, distanceMeters: 2500, policeEvaded: 1, carName: 'Apex Roadster', date: 'SEP 12' },
  { id: 'lb_9', callsign: 'ZERO_COOL', score: 15300, distanceMeters: 1800, policeEvaded: 1, carName: 'Apex Roadster', date: 'SEP 10' },
  { id: 'lb_10', callsign: 'HIGHWAY_COP', score: 9200, distanceMeters: 1200, policeEvaded: 0, carName: 'Titan V8', date: 'SEP 08' },
];

const STATS_KEY = 'velocity_x_stats';
const CARS_KEY = 'velocity_x_cars';
const LEADERBOARD_KEY = 'velocity_x_leaderboard';

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

  // Leaderboard Persistence
  static getLeaderboard(): LeaderboardEntry[] {
    try {
      const data = localStorage.getItem(LEADERBOARD_KEY);
      if (data) {
        const list: LeaderboardEntry[] = JSON.parse(data);
        return list.sort((a, b) => b.score - a.score).slice(0, 10);
      }
    } catch {
      // ignore
    }
    return [...DEFAULT_LEADERBOARD];
  }

  static addLeaderboardScore(entry: Omit<LeaderboardEntry, 'id'>): LeaderboardEntry[] {
    const current = this.getLeaderboard();
    const newEntry: LeaderboardEntry = {
      ...entry,
      id: 'lb_' + Date.now(),
      isPlayer: true,
    };

    const combined = [...current, newEntry];
    const sorted = combined.sort((a, b) => b.score - a.score).slice(0, 10);

    try {
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(sorted));
    } catch {
      // ignore
    }

    return sorted;
  }
}
