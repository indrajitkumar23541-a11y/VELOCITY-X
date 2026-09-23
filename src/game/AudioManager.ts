// VELOCITY X - 100% Procedural Web Audio API Sound Engine
// Zero external MP3 downloads - Instant 0ms latency, runs 100% offline

export class AudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.8;

  // Engine Audio Nodes
  private engineOsc1: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private engineSubOsc: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineGain: GainNode | null = null;

  // Nitro Audio Nodes
  private nitroNoiseNode: AudioBufferSourceNode | null = null;
  private nitroGain: GainNode | null = null;
  private nitroFilter: BiquadFilterNode | null = null;
  private isNitroPlaying: boolean = false;
  private nitroStopTimeout: number | null = null;
  private cachedWhiteNoiseBuffer: AudioBuffer | null = null;

  // Police Siren Nodes
  private sirenOsc: OscillatorNode | null = null;
  private sirenLfo: OscillatorNode | null = null;
  private sirenLfoGain: GainNode | null = null;
  private sirenGain: GainNode | null = null;
  private sirenPanner: StereoPannerNode | null = null;

  // Tire Skid Nodes
  private skidGain: GainNode | null = null;
  private isSkidPlaying: boolean = false;

  // Rain Sound Nodes
  private rainNoiseNode: AudioBufferSourceNode | null = null;
  private rainFilter: BiquadFilterNode | null = null;
  private rainGain: GainNode | null = null;
  private isRainPlaying: boolean = false;

  constructor() {
    // AudioContext will be initialized on first touch interaction
  }

  public init(): void {
    if (this.ctx) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.setupEngineSound();
      this.setupNitroSound();
      this.setupSirenSound();
      this.setupSkidSound();
      this.setupRainSound();
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  }

  public unlock(): void {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // -------------------------------------------------------------
  // Engine Sound: Multi-oscillator synthesis modulated by real-time RPM
  // -------------------------------------------------------------
  private setupEngineSound(): void {
    if (!this.ctx || !this.masterGain) return;

    // Primary engine oscillator (Sawtooth for mechanical grit)
    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'sawtooth';
    this.engineOsc1.frequency.setValueAtTime(55, this.ctx.currentTime);

    // Harmonic oscillator (Triangle for body tone)
    this.engineOsc2 = this.ctx.createOscillator();
    this.engineOsc2.type = 'triangle';
    this.engineOsc2.frequency.setValueAtTime(110, this.ctx.currentTime);

    // Sub oscillator (Square for low rumble)
    this.engineSubOsc = this.ctx.createOscillator();
    this.engineSubOsc.type = 'square';
    this.engineSubOsc.frequency.setValueAtTime(27.5, this.ctx.currentTime);

    // Lowpass filter to muffle when idling and roar when throttle open
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(3.5, this.ctx.currentTime);

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    // Connect nodes
    const engineMixer = this.ctx.createGain();
    engineMixer.gain.setValueAtTime(0.22, this.ctx.currentTime);

    this.engineOsc1.connect(this.engineFilter);
    this.engineOsc2.connect(this.engineFilter);
    this.engineSubOsc.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(engineMixer);
    engineMixer.connect(this.masterGain);

    this.engineOsc1.start();
    this.engineOsc2.start();
    this.engineSubOsc.start();
  }

  /**
   * Update engine sound based on throttle (0..1), RPM (800..8500), and speed (km/h)
   */
  public updateEngine(rpm: number, throttle: number, isRacing: boolean): void {
    if (!this.ctx || !this.engineGain || !this.engineOsc1 || !this.engineOsc2 || !this.engineSubOsc || !this.engineFilter) {
      return;
    }

    if (!isRacing) {
      this.engineGain.gain.setTargetAtTime(0.0, this.ctx.currentTime, 0.1);
      return;
    }

    // Target frequency calculation based on car RPM
    // 800 RPM -> ~45 Hz, 8500 RPM -> ~320 Hz
    const normalizedRPM = Math.max(0, Math.min(1, (rpm - 800) / 7700));
    const baseFreq = 48 + normalizedRPM * 240;

    const t = this.ctx.currentTime;
    this.engineOsc1.frequency.setTargetAtTime(baseFreq, t, 0.04);
    this.engineOsc2.frequency.setTargetAtTime(baseFreq * 1.5, t, 0.04);
    this.engineSubOsc.frequency.setTargetAtTime(baseFreq * 0.5, t, 0.04);

    // Open filter when throttle is pressed
    const cutoff = 300 + normalizedRPM * 1800 + throttle * 1200;
    this.engineFilter.frequency.setTargetAtTime(cutoff, t, 0.05);

    // Volume level
    const gainLevel = 0.35 + throttle * 0.45;
    this.engineGain.gain.setTargetAtTime(gainLevel, t, 0.05);
  }

  // -------------------------------------------------------------
  // Nitrous Oxide Boost (NOS)
  // -------------------------------------------------------------
  private setupNitroSound(): void {
    if (!this.ctx || !this.masterGain) return;

    this.nitroGain = this.ctx.createGain();
    this.nitroGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.nitroFilter = this.ctx.createBiquadFilter();
    this.nitroFilter.type = 'bandpass';
    this.nitroFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    this.nitroFilter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.nitroFilter.connect(this.nitroGain);
    this.nitroGain.connect(this.masterGain);
  }

  private getWhiteNoiseBuffer(): AudioBuffer | null {
    if (!this.ctx) return null;
    if (!this.cachedWhiteNoiseBuffer) {
      const bufferSize = this.ctx.sampleRate * 2; // 2 seconds
      this.cachedWhiteNoiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = this.cachedWhiteNoiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    }
    return this.cachedWhiteNoiseBuffer;
  }

  public startNitro(): void {
    if (!this.ctx || !this.nitroGain || !this.nitroFilter) return;

    if (this.nitroStopTimeout !== null) {
      clearTimeout(this.nitroStopTimeout);
      this.nitroStopTimeout = null;
    }

    this.isNitroPlaying = true;
    const t = this.ctx.currentTime;

    try {
      if (!this.nitroNoiseNode) {
        const buf = this.getWhiteNoiseBuffer();
        if (!buf) return;
        this.nitroNoiseNode = this.ctx.createBufferSource();
        this.nitroNoiseNode.buffer = buf;
        this.nitroNoiseNode.loop = true;
        this.nitroNoiseNode.connect(this.nitroFilter);
        this.nitroNoiseNode.start(t);
      }

      this.nitroGain.gain.cancelScheduledValues(t);
      this.nitroGain.gain.setValueAtTime(this.nitroGain.gain.value, t);
      this.nitroGain.gain.linearRampToValueAtTime(0.55, t + 0.12);
    } catch {
      // ignore
    }
  }

  public stopNitro(): void {
    if (!this.ctx || !this.nitroGain || !this.isNitroPlaying) return;

    this.isNitroPlaying = false;
    const t = this.ctx.currentTime;
    this.nitroGain.gain.cancelScheduledValues(t);
    this.nitroGain.gain.setValueAtTime(this.nitroGain.gain.value, t);
    this.nitroGain.gain.linearRampToValueAtTime(0, t + 0.18);

    if (this.nitroStopTimeout !== null) {
      clearTimeout(this.nitroStopTimeout);
    }
    this.nitroStopTimeout = window.setTimeout(() => {
      if (this.nitroNoiseNode && !this.isNitroPlaying) {
        try {
          this.nitroNoiseNode.stop();
          this.nitroNoiseNode.disconnect();
        } catch {
          // ignore
        }
        this.nitroNoiseNode = null;
      }
      this.nitroStopTimeout = null;
    }, 220);

    // Blow-off valve release "pshhhh"
    this.playBlowOffValve();
  }

  private playBlowOffValve(): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const buf = this.getWhiteNoiseBuffer();
      if (!buf) return;
      const noise = this.ctx.createBufferSource();
      noise.buffer = buf;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(2200, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start(t);
      noise.stop(t + 0.38);
    } catch {
      // ignore
    }
  }

  // -------------------------------------------------------------
  // Police Siren Engine: Dual-tone wailing siren with stereo panning
  // -------------------------------------------------------------
  private setupSirenSound(): void {
    if (!this.ctx || !this.masterGain) return;

    this.sirenOsc = this.ctx.createOscillator();
    this.sirenOsc.type = 'sawtooth';
    this.sirenOsc.frequency.setValueAtTime(800, this.ctx.currentTime);

    // LFO to modulate siren frequency up and down
    this.sirenLfo = this.ctx.createOscillator();
    this.sirenLfo.type = 'sine';
    this.sirenLfo.frequency.setValueAtTime(0.65, this.ctx.currentTime); // ~1.5 sec cycle

    this.sirenLfoGain = this.ctx.createGain();
    this.sirenLfoGain.gain.setValueAtTime(320, this.ctx.currentTime); // sweep between 480Hz and 1120Hz

    this.sirenLfo.connect(this.sirenLfoGain);
    this.sirenLfoGain.connect(this.sirenOsc.frequency);

    this.sirenGain = this.ctx.createGain();
    this.sirenGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Stereo panner for spatial audio as cruiser maneuvers
    if (this.ctx.createStereoPanner) {
      this.sirenPanner = this.ctx.createStereoPanner();
      this.sirenPanner.pan.setValueAtTime(0, this.ctx.currentTime);
      this.sirenOsc.connect(this.sirenGain);
      this.sirenGain.connect(this.sirenPanner);
      this.sirenPanner.connect(this.masterGain);
    } else {
      this.sirenOsc.connect(this.sirenGain);
      this.sirenGain.connect(this.masterGain);
    }

    this.sirenOsc.start();
    this.sirenLfo.start();
  }

  public updateSiren(isActive: boolean, distanceFactor: number, panX: number): void {
    if (!this.ctx || !this.sirenGain) return;

    const t = this.ctx.currentTime;

    if (isActive) {
      // Closer cruiser = louder siren
      const targetVol = Math.max(0, Math.min(0.65, (1 - distanceFactor) * 0.65));
      this.sirenGain.gain.setTargetAtTime(targetVol, t, 0.1);

      if (this.sirenPanner) {
        const clampedPan = Math.max(-0.85, Math.min(0.85, panX * 0.2));
        this.sirenPanner.pan.setTargetAtTime(clampedPan, t, 0.1);
      }
    } else {
      this.sirenGain.gain.setTargetAtTime(0, t, 0.3);
    }
  }

  // -------------------------------------------------------------
  // Tire Skid / Drifting SFX
  // -------------------------------------------------------------
  private setupSkidSound(): void {
    if (!this.ctx || !this.masterGain) return;

    this.skidGain = this.ctx.createGain();
    this.skidGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.skidGain.connect(this.masterGain);
  }

  public updateTireSkid(slipIntensity: number): void {
    if (!this.ctx || !this.skidGain) return;

    const t = this.ctx.currentTime;
    if (slipIntensity > 0.15) {
      if (!this.isSkidPlaying) {
        this.isSkidPlaying = true;
      }
      const vol = Math.min(0.4, (slipIntensity - 0.15) * 0.6);
      this.skidGain.gain.setTargetAtTime(vol, t, 0.05);
    } else {
      this.skidGain.gain.setTargetAtTime(0, t, 0.1);
      this.isSkidPlaying = false;
    }
  }

  // -------------------------------------------------------------
  // One-Shot SFX: Near Miss, Crash, Bonus Coin
  // -------------------------------------------------------------
  public playNearMiss(): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, t);
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.15);
      osc.frequency.exponentialRampToValueAtTime(220, t + 0.35);

      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.36);
    } catch {
      // ignore
    }
  }

  public playCrash(): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      // Deep bass punch
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      const t = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.4);

      oscGain.gain.setValueAtTime(0.8, t);
      oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.5);

      // Metal crunch noise
      const buf = this.getWhiteNoiseBuffer();
      if (buf) {
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, t);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.7, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.masterGain);

        noise.start(t);
        noise.stop(t + 0.65);
      }
    } catch {
      // ignore
    }
  }

  public playCoinPickup(): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, t); // B5
      osc.frequency.setValueAtTime(1318.51, t + 0.08); // E6

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.26);
    } catch {
      // ignore
    }
  }

  // -------------------------------------------------------------
  // Procedural Rain Hiss & Rolling Thunder Sound Synthesis
  // -------------------------------------------------------------
  private setupRainSound(): void {
    if (!this.ctx || !this.masterGain || this.isRainPlaying) return;
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.4;
      }

      this.rainNoiseNode = this.ctx.createBufferSource();
      this.rainNoiseNode.buffer = noiseBuffer;
      this.rainNoiseNode.loop = true;

      this.rainFilter = this.ctx.createBiquadFilter();
      this.rainFilter.type = 'bandpass';
      this.rainFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);
      this.rainFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.rainGain = this.ctx.createGain();
      this.rainGain.gain.setValueAtTime(0, this.ctx.currentTime);

      this.rainNoiseNode.connect(this.rainFilter);
      this.rainFilter.connect(this.rainGain);
      this.rainGain.connect(this.masterGain);

      this.rainNoiseNode.start();
      this.isRainPlaying = true;
    } catch (e) {
      console.warn('Rain sound init failed:', e);
    }
  }

  public startRain(): void {
    if (!this.ctx || !this.rainGain) {
      this.setupRainSound();
    }
    if (this.ctx && this.rainGain) {
      this.rainGain.gain.setTargetAtTime(0.32, this.ctx.currentTime, 0.4);
    }
  }

  public stopRain(): void {
    if (this.ctx && this.rainGain) {
      this.rainGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
    }
  }

  public playThunder(): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const t = this.ctx.currentTime;
      // Sub-bass rumble
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.exponentialRampToValueAtTime(28, t + 2.2);

      gain.gain.setValueAtTime(0.65, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 2.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 2.5);

      // Noise crackle burst
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.8);
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(t);
      noise.stop(t + 1.2);
    } catch {
      // ignore
    }
  }

  // 1. High-Octane 8K Cinematic V8 Engine Roar Intro ("Dhan-Dhan" Rev + Turbo BOV)
  public playCinematicIntroSound(): void {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      const t = this.ctx.currentTime;

      // Pulse 1: First heavy engine rev ("Dhan...")
      const rev1 = this.ctx.createOscillator();
      const rev1Gain = this.ctx.createGain();
      rev1.type = 'sawtooth';
      rev1.frequency.setValueAtTime(65, t);
      rev1.frequency.exponentialRampToValueAtTime(220, t + 0.35);
      rev1.frequency.exponentialRampToValueAtTime(80, t + 0.85);

      rev1Gain.gain.setValueAtTime(0.6, t);
      rev1Gain.gain.exponentialRampToValueAtTime(0.001, t + 0.95);

      rev1.connect(rev1Gain);
      rev1Gain.connect(this.masterGain);
      rev1.start(t);
      rev1.stop(t + 1.0);

      // Pulse 2: Second deep thunderous throttle surge ("...Dhan!")
      const rev2 = this.ctx.createOscillator();
      const rev2Gain = this.ctx.createGain();
      rev2.type = 'triangle';
      rev2.frequency.setValueAtTime(55, t + 0.9);
      rev2.frequency.exponentialRampToValueAtTime(260, t + 1.3);
      rev2.frequency.exponentialRampToValueAtTime(90, t + 1.9);

      rev2Gain.gain.setValueAtTime(0.001, t);
      rev2Gain.gain.setValueAtTime(0.7, t + 0.9);
      rev2Gain.gain.exponentialRampToValueAtTime(0.001, t + 2.1);

      rev2.connect(rev2Gain);
      rev2Gain.connect(this.masterGain);
      rev2.start(t + 0.9);
      rev2.stop(t + 2.2);

      // Sub-Bass 40Hz Chest Thump
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(45, t);
      sub.frequency.exponentialRampToValueAtTime(32, t + 1.8);
      subGain.gain.setValueAtTime(0.8, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 1.9);
      sub.connect(subGain);
      subGain.connect(this.masterGain);
      sub.start(t);
      sub.stop(t + 2.0);

      // Turbo Blow-Off Valve (Tssssshhh whoosh)
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.9);
      const bovBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = bovBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const bovSource = this.ctx.createBufferSource();
      bovSource.buffer = bovBuffer;
      const bovFilter = this.ctx.createBiquadFilter();
      bovFilter.type = 'bandpass';
      bovFilter.frequency.setValueAtTime(1800, t + 1.2);
      bovFilter.frequency.exponentialRampToValueAtTime(600, t + 2.1);

      const bovGain = this.ctx.createGain();
      bovGain.gain.setValueAtTime(0.001, t);
      bovGain.gain.setValueAtTime(0.5, t + 1.2);
      bovGain.gain.exponentialRampToValueAtTime(0.001, t + 2.2);

      bovSource.connect(bovFilter);
      bovFilter.connect(bovGain);
      bovGain.connect(this.masterGain);

      bovSource.start(t + 1.2);
      bovSource.stop(t + 2.3);
    } catch {
      // ignore
    }
  }

  // 2. High-Tech Countdown Beep (3, 2, 1, GO!)
  public playCountdownBeep(isFinal: boolean): void {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      const t = this.ctx.currentTime;

      if (!isFinal) {
        // High-pitched warning beep (880 Hz)
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        gain.gain.setValueAtTime(0.45, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(t);
        osc.stop(t + 0.2);
      } else {
        // Grand "GO!" Launch Chord + Sub-bass drop
        [523.25, 659.25, 783.99, 1046.5].forEach((freq) => {
          const chordOsc = this.ctx!.createOscillator();
          const chordGain = this.ctx!.createGain();
          chordOsc.type = 'triangle';
          chordOsc.frequency.setValueAtTime(freq, t);
          chordGain.gain.setValueAtTime(0.35, t);
          chordGain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);
          chordOsc.connect(chordGain);
          chordGain.connect(this.masterGain!);
          chordOsc.start(t);
          chordOsc.stop(t + 0.7);
        });

        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(80, t);
        sub.frequency.exponentialRampToValueAtTime(35, t + 0.5);
        subGain.gain.setValueAtTime(0.7, t);
        subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
        sub.connect(subGain);
        subGain.connect(this.masterGain);
        sub.start(t);
        sub.stop(t + 0.65);
      }
    } catch {
      // ignore
    }
  }

  // 3. Metallic Coin Purchase / Unlock Chime
  public playCoinUnlock(): void {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      [1046.5, 1318.51, 1567.98, 2093].forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + idx * 0.06);
        gain.gain.setValueAtTime(0.4, t + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(t + idx * 0.06);
        osc.stop(t + idx * 0.06 + 0.4);
      });
    } catch {
      // ignore
    }
  }

  /**
   * Immediately silence all ongoing game sounds (engine, nitro, siren, skid, rain)
   * Called on crash, busted, game over, or navigation back to garage/menu
   */
  public stopAllGameSounds(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    if (this.engineGain) {
      this.engineGain.gain.cancelScheduledValues(t);
      this.engineGain.gain.setValueAtTime(0, t);
    }

    if (this.nitroGain) {
      this.nitroGain.gain.cancelScheduledValues(t);
      this.nitroGain.gain.setValueAtTime(0, t);
      if (this.nitroNoiseNode) {
        try {
          this.nitroNoiseNode.stop();
          this.nitroNoiseNode.disconnect();
        } catch {
          // ignore
        }
        this.nitroNoiseNode = null;
      }
      this.isNitroPlaying = false;
    }

    if (this.sirenGain) {
      this.sirenGain.gain.cancelScheduledValues(t);
      this.sirenGain.gain.setValueAtTime(0, t);
    }

    if (this.skidGain) {
      this.skidGain.gain.cancelScheduledValues(t);
      this.skidGain.gain.setValueAtTime(0, t);
      this.isSkidPlaying = false;
    }

    if (this.rainGain) {
      this.rainGain.gain.cancelScheduledValues(t);
      this.rainGain.gain.setValueAtTime(0, t);
    }
  }
}

export const audioManager = new AudioManager();
