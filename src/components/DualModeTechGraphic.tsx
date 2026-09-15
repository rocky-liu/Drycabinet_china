import React, { useState } from 'react';
import { 
  ArrowDown, 
  ArrowUp, 
  Droplets, 
  Sun, 
  Check, 
  X, 
  ShieldCheck, 
  Sparkles,
  RefreshCcw,
  Zap,
  VolumeX,
  Lock,
  AlertTriangle
} from 'lucide-react';

export const DualModeTechGraphic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'comparison'>('flow');

  return (
    <section id="dual-mode-technology" className="py-20 bg-white text-neutral-900 relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Active Dual-Direction Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Not Just Dry. <span className="text-amber-600">Precisely Controlled.</span>
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            A traditional electronic dry cabinet only pulls moisture out. For delicate tonewoods and master instruments, that can be fatal. RHVault actively dehumidifies <em className="text-neutral-900 not-italic font-semibold">and</em> automatically humidifies to maintain absolute equilibrium.
          </p>

          {/* Toggle View */}
          <div className="inline-flex p-1 rounded-xl bg-neutral-100 border border-neutral-200 mt-6 shadow-xs">
            <button
              id="tech-tab-flow"
              onClick={() => setActiveTab('flow')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'flow'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Active Closed-Loop Diagram
            </button>
            <button
              id="tech-tab-comparison"
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'comparison'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Dry Cabinet vs. RHVault Dual-Mode
            </button>
          </div>
        </div>

        {activeTab === 'flow' ? (
          /* Active Closed Loop Visual Diagram */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Condition 1: High Humidity Dehumidification */}
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-800 flex items-center gap-1.5">
                    <ArrowDown className="w-4 h-4 text-amber-600" />
                    <span>Process A: Excess Moisture Removal</span>
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white border border-neutral-200 text-neutral-700 text-xs font-mono shadow-xs">
                    RH &gt; Set Point (e.g. 68% &gt; 45%)
                  </span>
                </div>

                <div className="flex items-center justify-center py-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-24 h-24 rounded-xl bg-white border border-amber-300 flex flex-col items-center justify-center p-3 text-center shadow-xs">
                      <span className="text-xs text-neutral-500">Ambient Air</span>
                      <span className="text-lg font-bold text-amber-600 font-mono">68% RH</span>
                      <span className="text-[10px] text-rose-600 mt-1 font-medium">Excess Damp</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-amber-800 mb-1 font-semibold">Thermoelectric Condensation</span>
                      <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-emerald-600 rotate-45"></div>
                      </div>
                    </div>

                    <div className="w-24 h-24 rounded-xl bg-emerald-50 border border-emerald-300 flex flex-col items-center justify-center p-3 text-center shadow-xs">
                      <span className="text-xs text-neutral-500">Cabinet Target</span>
                      <span className="text-lg font-bold text-emerald-700 font-mono">45% RH</span>
                      <span className="text-[10px] text-emerald-700 mt-1 font-medium">Stable Constant</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-neutral-700">
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                    <span>High-precision Sensirion probe detects ambient moisture rise above target threshold.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                    <span>Peltier solid-state freezing element condenses vapor into moisture and exhausts it safely.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></span>
                    <span>System drops to low-power idle the moment ±1% RH equilibrium is achieved.</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 text-[11px] text-neutral-500">
                Outcome: Prevents soundboard swelling, mold, fungal spores, and string corrosion.
              </div>
            </div>

            {/* Condition 2: Arid Dry Humidification */}
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-800 flex items-center gap-1.5">
                    <ArrowUp className="w-4 h-4 text-sky-600" />
                    <span>Process B: Automatic Micro-Mist Humidification</span>
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white border border-neutral-200 text-neutral-700 text-xs font-mono shadow-xs">
                    RH &lt; Set Point (e.g. 22% &lt; 45%)
                  </span>
                </div>

                <div className="flex items-center justify-center py-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-24 h-24 rounded-xl bg-white border border-sky-300 flex flex-col items-center justify-center p-3 text-center shadow-xs">
                      <span className="text-xs text-neutral-500">Ambient Air</span>
                      <span className="text-lg font-bold text-sky-700 font-mono">22% RH</span>
                      <span className="text-[10px] text-rose-600 mt-1 font-medium">Severe Arid</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-sky-800 mb-1 font-semibold">Piezo Ultrasonic Atomization</span>
                      <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-emerald-600 rotate-45"></div>
                      </div>
                    </div>

                    <div className="w-24 h-24 rounded-xl bg-emerald-50 border border-emerald-300 flex flex-col items-center justify-center p-3 text-center shadow-xs">
                      <span className="text-xs text-neutral-500">Cabinet Target</span>
                      <span className="text-lg font-bold text-emerald-700 font-mono">45% RH</span>
                      <span className="text-[10px] text-emerald-700 mt-1 font-medium">Stable Constant</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-neutral-700">
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"></span>
                    <span>Central heating or winter arid air causes room humidity to plunge under 35% RH.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"></span>
                    <span>Integrated 1.7MHz ultrasonic atomizer vaporizes pure water into sub-micron aerosol.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></span>
                    <span>Gentle convection fan circulates mist without droplet deposition on instruments.</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 text-[11px] text-neutral-500">
                Outcome: Completely eliminates soundboard cracks, fret sprout, and bridge separation.
              </div>
            </div>
          </div>
        ) : (
          /* Head to Head Comparison Table */
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-3 p-4 sm:p-6 bg-neutral-50 border-b border-neutral-200 text-xs sm:text-sm font-bold">
              <span className="text-neutral-500 uppercase tracking-wider">Storage Feature</span>
              <span className="text-neutral-700 text-center">Traditional Dry Cabinet</span>
              <span className="text-amber-800 text-center flex items-center justify-center gap-1 font-bold">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>RHVault Dual-Mode Vault</span>
              </span>
            </div>

            <div className="divide-y divide-neutral-200 text-xs sm:text-sm">
              <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
                <span className="font-medium text-neutral-800">Dehumidification Ability</span>
                <span className="text-center text-emerald-700 flex items-center justify-center gap-1 font-medium">
                  <Check className="w-4 h-4" /> Yes (Active)
                </span>
                <span className="text-center text-emerald-700 flex items-center justify-center gap-1 font-semibold">
                  <Check className="w-4 h-4" /> Yes (Solid-State)
                </span>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center bg-neutral-50/50">
                <span className="font-medium text-neutral-800">Humidification in Dry Seasons</span>
                <span className="text-center text-rose-600 flex items-center justify-center gap-1 font-medium">
                  <X className="w-4 h-4" /> None (Stays Bone-Dry)
                </span>
                <span className="text-center text-amber-800 flex items-center justify-center gap-1 font-bold">
                  <Check className="w-4 h-4 text-amber-600" /> Active Ultrasonic Mist
                </span>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
                <span className="font-medium text-neutral-800">Acoustic Guitar & Violin Safety</span>
                <span className="text-center text-rose-600 flex items-center justify-center gap-1 font-medium">
                  <AlertTriangle className="w-4 h-4 text-rose-500" /> High Cracking Risk in Winter
                </span>
                <span className="text-center text-emerald-700 flex items-center justify-center gap-1 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Crack-Free Guarantee
                </span>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center bg-neutral-50/50">
                <span className="font-medium text-neutral-800">Control Precision</span>
                <span className="text-center text-neutral-500">±5% to ±8% RH</span>
                <span className="text-center text-amber-800 font-mono font-bold">±1.0% RH (Sensirion)</span>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
                <span className="font-medium text-neutral-800">Studio Acoustic Noise</span>
                <span className="text-center text-neutral-500">30–45 dB (Fan buzz)</span>
                <span className="text-center text-emerald-700 font-semibold">&lt; 22 dB (Recording Silent)</span>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center bg-neutral-50/50">
                <span className="font-medium text-neutral-800">Glass & UV Protection</span>
                <span className="text-center text-neutral-500">Standard Float Glass</span>
                <span className="text-center text-neutral-800 font-medium">Low-E 99.2% UV-Blocking</span>
              </div>
            </div>
          </div>
        )}

        {/* Core Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center shadow-xs">
            <Zap className="w-5 h-5 text-amber-600 mx-auto mb-2" />
            <span className="block text-sm font-semibold text-neutral-900">Ultra-Low Power</span>
            <span className="text-xs text-neutral-500">Avg. 15W–25W consumption</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center shadow-xs">
            <VolumeX className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <span className="block text-sm font-semibold text-neutral-900">Whisper Quiet</span>
            <span className="text-xs text-neutral-500">&lt; 22dB studio recording rating</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center shadow-xs">
            <ShieldCheck className="w-5 h-5 text-sky-600 mx-auto mb-2" />
            <span className="block text-sm font-semibold text-neutral-900">Nitrocellulose Safe</span>
            <span className="text-xs text-neutral-500">No chemical reaction on fine finishes</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center shadow-xs">
            <Lock className="w-5 h-5 text-amber-600 mx-auto mb-2" />
            <span className="block text-sm font-semibold text-neutral-900">Biometric & RFID</span>
            <span className="text-xs text-neutral-500">Preservation + security in one</span>
          </div>
        </div>
      </div>
    </section>
  );
};
