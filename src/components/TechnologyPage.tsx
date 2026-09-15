import React from 'react';
import { 
  Cpu, 
  Droplets, 
  Wind, 
  Activity, 
  ShieldCheck, 
  Zap, 
  VolumeX, 
  Gauge, 
  Layers,
  Sparkles,
  ArrowDown,
  ArrowUp
} from 'lucide-react';
import { DualModeTechGraphic } from './DualModeTechGraphic';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="py-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span>Proprietary Climate Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-neutral-900">
            Active Humidity Control Technology
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Engineered from the ground up for materials where moisture deficit is just as fatal as moisture excess. Explore how RHVault combines solid-state dehumidification with automated ultrasonic humidification in a single micro-chamber.
          </p>
        </div>

        {/* Embedded Interactive Closed-Loop Graphic */}
        <DualModeTechGraphic />

        {/* 6 Technology Deep Dives */}
        <div className="py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-neutral-900">
              The Six Pillars of RHVault Climate Engineering
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Every sub-assembly is engineered for silent, vibration-free, maintenance-free longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Dual Mode Reversible Engine */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  1. Dual-Mode Reversible Engine
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Unlike traditional single-purpose desiccant or compressor units, RHVault contains two opposed thermo-fluidic loops. The system switches seamlessly between moisture extraction and moisture injection based on real-time sensor feedback.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-amber-800 font-mono font-medium">
                Continuous 2-Way Lock
              </span>
            </div>

            {/* 2. Ultrasonic Piezo Atomization */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  2. Sub-Micron Ultrasonic Mist
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  A high-frequency 1.7MHz ceramic piezoelectric disk breaks purified water into microscopic 1–3 micron aerosol particles. The mist instantly evaporates into the internal airflow, increasing relative humidity without liquid condensation.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-sky-800 font-mono font-medium">
                Non-Wetting Molecular Vapor
              </span>
            </div>

            {/* 3. Solid-State Freezing Dehumidification */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  3. Thermoelectric Condensation Core
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Utilizes advanced Peltier semiconductor elements. Moisture condenses on the cold side and is channeled away into an external evaporation heat sink, producing zero vibration and 0 dB acoustic footprint.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-amber-800 font-mono font-medium">
                Compressor-Free Solid State
              </span>
            </div>

            {/* 4. Swiss Sensirion Sensors */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  4. Sensirion SHT4x Digital Probes
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Equipped with laboratory-calibrated Swiss Sensirion 4th-generation environmental sensors providing ±1.0% RH accuracy across the full 10% to 90% RH spectrum, with instantaneous 4-second response times.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-emerald-800 font-mono font-medium">
                ±1.0% RH Certified Precision
              </span>
            </div>

            {/* 5. Acoustic Whisper-Quiet */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                  <VolumeX className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  5. Studio-Grade Silence (&lt;22 dB)
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Magnetic levitation fluid-bearing micro-fans rotate at whisper speeds (&lt; 800 RPM), keeping internal chamber air homogenously mixed without emitting motor hum detectable by condenser microphones.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-sky-800 font-mono font-medium">
                Recording Studio Approved
              </span>
            </div>

            {/* 6. Low-E UV Acoustic Glazing */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  6. Low-E UV-Shielding Glass
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  4mm tempered architectural glass coated with micro-thin metallic silver films that block 99.2% of harmful ultraviolet rays, safeguarding vintage nitrocellulose lacquer and oil paintings from yellowing.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-amber-800 font-mono font-medium">
                99.2% Ultraviolet Attenuation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
