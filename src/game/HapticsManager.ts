// VELOCITY X - Mobile Physical Haptic Feedback Engine

export class HapticsManager {
  private static enabled = true;

  static setEnabled(val: boolean) {
    this.enabled = val;
  }

  static isEnabled(): boolean {
    return this.enabled;
  }

  /** Light 15ms tick on near-miss */
  static nearMiss() {
    if (!this.enabled || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      navigator.vibrate(18);
    } catch {
      // ignore
    }
  }

  /** Pulsing rumble when nitro boost is held */
  static nitroPulse() {
    if (!this.enabled || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      navigator.vibrate([25, 20, 25]);
    } catch {
      // ignore
    }
  }

  /** Police ram / PIT maneuver bump */
  static policeImpact() {
    if (!this.enabled || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      navigator.vibrate([60, 30, 80]);
    } catch {
      // ignore
    }
  }

  /** Heavy crash crunch */
  static crash() {
    if (!this.enabled || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      navigator.vibrate([120, 50, 200]);
    } catch {
      // ignore
    }
  }

  /** UI button click tap */
  static buttonTap() {
    if (!this.enabled || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      navigator.vibrate(10);
    } catch {
      // ignore
    }
  }
}
