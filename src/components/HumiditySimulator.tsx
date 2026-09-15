import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Droplets, 
  Flame, 
  Wind, 
  ShieldCheck, 
  ArrowRight,
  Info,
  RefreshCw,
  Gauge
} from 'lucide-react';

export const HumiditySimulator: React.FC = () => {
  const [rhValue, setRhValue] = useState<number>(45);
  const [selectedItem, setSelectedItem] = useState<'guitar' | 'violin' | 'saxophone' | 'optics'>('guitar');

  // Compute status and physics state
  const isExtremeDry = rhValue < 35;
  const isModerateDry = rhValue >= 35 && rhValue < 42;
  const isSafeZone = rhValue >= 42 && rhValue <= 55;
  const isModerateHumid = rhValue > 55 && rhValue <= 65;
  const isExtremeHumid = rhValue > 65;

  const itemData = {
    guitar: {
      name: 'Solid Wood Acoustic Guitar',
      safeRange: '45% – 50% RH',
      dryEffect: 'Soundboard sinks under bridge tension, string action buzzes against frets, sharp fret wires sprout past fingerboard binding. In extreme dry (<25%), soundboard and center-seam split.',
      safeEffect: 'Ideal acoustic resonance and string action. Wood moisture content sits at a stable 8.5%–9.0%. Perfect neck relief, smooth fingerboard edges.',
      humidEffect: 'Soundboard swells into a belly bulge, string action rises dramatically making guitar unplayable, lacquer hazes, internal glue softens and bracing loosens.'
    },
    violin: {
      name: 'Handcrafted Violin & Master Bow',
      safeRange: '45% – 50% RH',
      dryEffect: 'Animal hide glue cracks, soundpost falls, maple ribs pull away from spruce top. Mongolian horsehair contracts sharply and snaps antique Pernambuco bow tips.',
      safeEffect: 'Resonant harmonic projection, snug tuning pegs that turn smoothly without slipping, stabilized purfling and arched belly.',
      humidEffect: 'Pegs swell tight in pegbox and seize; neck projection angle drops; mould spots develop on antique varnish.'
    },
    saxophone: {
      name: 'Vintage Saxophone & Woodwinds',
      safeRange: '45% – 55% RH',
      dryEffect: 'Leather resonator pads harden, shrink and lose airtight seal. Cork tenons dry-rot. Grenadilla wood clarinet bodies develop irreversible lengthwise bore cracks.',
      safeEffect: 'Pads remain supple and create instantaneous leak-free seal. Wood bores stay micro-hydrated without stress cracks. Cane reeds ready to play.',
      humidEffect: 'Pad felt rots; green verdigris corrosion appears on pivot rods and brass springs; mold blooms inside the bore.'
    },
    optics: {
      name: 'Cinema Camera & Prime Lenses',
      safeRange: '35% – 42% RH',
      dryEffect: 'Below 25% RH, synthetic helical barrel lubricants dry out and migrate onto aperture blades. Rubber focus grips crack.',
      safeEffect: 'Fungal mycelium growth permanently blocked. Optical anti-reflective multi-coatings pristine. Barrel dampening remains fluid.',
      humidEffect: 'Aspergillus and Penicillium spores germinate rapidly above 60% RH. Fungal acid permanently dissolves glass coatings, ruining MTF resolution.'
    }
  };

  const currentItem = itemData[selectedItem];

  return (
    <section id="humidity-simulator" className="py-20 bg-neutral-50/70 border-y border-neutral-200 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Gauge className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Stress Test</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            What Happens to Your Asset Under Ambient Humidity?
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Slide the relative humidity (RH) to observe real-world physical deterioration versus the active dual-mode stabilization of <span className="text-neutral-900 font-semibold">RHVault</span>.
          </p>
        </div>

        {/* Item Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['guitar', 'violin', 'saxophone', 'optics'] as const).map((key) => (
            <button
              key={key}
              id={`sim-tab-${key}`}
              onClick={() => setSelectedItem(key)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                selectedItem === key
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200 shadow-xs'
              }`}
            >
              {itemData[key].name}
            </button>
          ))}
        </div>

        {/* The Simulator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-md">
          {/* Top Gauge Readout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200">
            <div>
              <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">
                Simulated Ambient Humidity
              </span>
              <div className="flex items-baseline space-x-3">
                <span className={`text-6xl font-extrabold tracking-tight font-heading ${
                  isSafeZone 
                    ? 'text-emerald-600' 
                    : isExtremeDry || isExtremeHumid 
                    ? 'text-rose-600' 
                    : 'text-amber-600'
                }`}>
                  {rhValue}%
                </span>
                <span className="text-lg text-neutral-500 font-medium">RH</span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="text-center sm:text-right">
              <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">
                Environmental Condition
              </span>
              <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-sm font-semibold ${
                isSafeZone
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : isExtremeDry || isExtremeHumid
                  ? 'bg-rose-50 border-rose-300 text-rose-800'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
              }`}>
                {isSafeZone ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Recommended Equilibrium Zone</span>
                  </>
                ) : isExtremeDry ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Critically Dry: Wood Cracking Risk</span>
                  </>
                ) : isModerateDry ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Dry Season: Fret Sprout & Buzz</span>
                  </>
                ) : isExtremeHumid ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Hazardous Damp: Mold & Swelling</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Moist: Action Swelling Zone</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="py-8">
            <div className="flex justify-between text-xs text-neutral-500 font-medium mb-2">
              <span className="text-rose-600 font-semibold">15% RH (Severe Winter Arid)</span>
              <span className="text-emerald-600 font-semibold">45%–50% Safe Target</span>
              <span className="text-rose-600 font-semibold">85% RH (Tropical Coastal Damp)</span>
            </div>

            <div className="relative">
              <input
                id="rh-range-slider"
                type="range"
                min="15"
                max="85"
                step="1"
                value={rhValue}
                onChange={(e) => setRhValue(Number(e.target.value))}
                className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              {/* Safe zone indicator strip on slider track */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 h-3 bg-emerald-500/20 rounded-full pointer-events-none border border-emerald-500/40"
                style={{ left: '42%', width: '16%' }}
                title="Safe Target Zone"
              ></div>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="text-xs text-neutral-500 self-center mr-1">Quick Presets:</span>
              <button
                id="preset-winter-dry"
                onClick={() => setRhValue(20)}
                className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-[11px] text-neutral-700 font-medium border border-neutral-200"
              >
                Winter Heated Room (20% RH)
              </button>
              <button
                id="preset-golden-rh"
                onClick={() => setRhValue(45)}
                className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-[11px] text-emerald-800 font-semibold"
              >
                RHVault Safe Target (45% RH)
              </button>
              <button
                id="preset-summer-humid"
                onClick={() => setRhValue(75)}
                className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-[11px] text-neutral-700 font-medium border border-neutral-200"
              >
                Monsoon/Summer Coastal (75% RH)
              </button>
            </div>
          </div>

          {/* Real-time Diagnostics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Impact on instrument */}
            <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-500" />
                <span>Physical State of {currentItem.name}</span>
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed min-h-[72px]">
                {isSafeZone 
                  ? currentItem.safeEffect 
                  : rhValue < 42 
                  ? currentItem.dryEffect 
                  : currentItem.humidEffect}
              </p>
            </div>

            {/* Active RHVault Response */}
            <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>RHVault Active Climate Response</span>
              </h3>
              
              {isSafeZone ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-700 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Micro-Environment Locked at {rhValue}% RH</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Dual-channel Sensirion probe continuously monitors internal ambient vapor. Both dehumidifier and ultrasonic atomizer in low-power idle (under 5W).
                  </p>
                </div>
              ) : rhValue < 42 ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sky-700 text-xs font-semibold">
                    <Droplets className="w-4 h-4 animate-bounce text-sky-600" />
                    <span>Automatic Ultrasonic Humidification Activated</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Active ultrasonic piezo generator introduces microscopic, cold molecular mist into circulation loop. Raises humidity safely back to <strong className="text-neutral-900">45% RH target</strong> without water drops touching tonewood.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-amber-800 text-xs font-semibold">
                    <Wind className="w-4 h-4 animate-pulse text-amber-600" />
                    <span>Automatic Thermoelectric Dehumidification Activated</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Solid-state condensation chip extracts excess airborne moisture vapor and exhausts it externally. Drops humidity safely back to <strong className="text-neutral-900">45% RH target</strong>, completely suppressing fungal spores.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
