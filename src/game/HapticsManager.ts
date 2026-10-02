// VELOCITY X - Mobile Physical Haptic Feedback Engine
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

export class HapticsManager {
  private static enabled = true;

  static setEnabled(val: boolean) {
    this.enabled = val;
  }

  static isEnabled(): boolean {
    return this.enabled;
  }

  /** Light 15ms tick on near-miss */
  static async nearMiss() {
    if (!this.enabled) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
      return;
    } catch {
      // Fallback to web Vibration API
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(18);
      } catch {
        // ignore
      }
    }
  }

  /** Pulsing rumble when nitro boost is held */
  static async nitroPulse() {
    if (!this.enabled) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
      return;
    } catch {
      // Fallback
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([25, 20, 25]);
      } catch {
        // ignore
      }
    }
  }

  /** Police ram / PIT maneuver bump */
  static async policeImpact() {
    if (!this.enabled) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Heavy });
      return;
    } catch {
      // Fallback
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([60, 30, 80]);
      } catch {
        // ignore
      }
    }
  }

  /** Heavy crash crunch */
  static async crash() {
    if (!this.enabled) return;
    try {
      await Haptics.notification({ type: NotificationType.Error });
      return;
    } catch {
      // Fallback
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([120, 50, 200]);
      } catch {
        // ignore
      }
    }
  }

  /** UI button click tap */
  static async buttonTap() {
    if (!this.enabled) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
      return;
    } catch {
      // Fallback
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch {
        // ignore
      }
    }
  }
}
