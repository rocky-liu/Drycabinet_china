import React, { useState } from 'react';
import { CLIMATE_ZONES } from '../data/products';
import { Globe2, ShieldAlert, CheckCircle2, ArrowRight, Sun, CloudRain, Snowflake } from 'lucide-react';

export const ClimateZoneExplorer: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('variable');

  const currentZone = CLIMATE_ZONES.find(z => z.id === selectedZoneId) || CLIMATE_ZONES[0];

  return (
    <section id="climate-scenarios" className="py-20 bg-neutral-50/60 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Global Geographies & Climate Zones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Tailored Protection for Earth's Extreme Climates
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            A guitar in dry winter Arizona faces completely different physics than a camera lens in humid monsoon Singapore. Select your climate to see how RHVault provides continuous equilibrium.
          </p>
        </div>

        {/* Climate Zone Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CLIMATE_ZONES.map((zone) => {
            const isSelected = selectedZoneId === zone.id;
            return (
              <button
                key={zone.id}
                id={`zone-btn-${zone.id}`}
                onClick={() => setSelectedZoneId(zone.id)}
                className={`p-5 rounded-xl text-left transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-500'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-neutral-100">
                      {zone.id === 'humid' && <CloudRain className="w-5 h-5 text-sky-600" />}
                      {zone.id === 'dry' && <Sun className="w-5 h-5 text-amber-600" />}
                      {zone.id === 'variable' && <Snowflake className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                      {zone.rhCharacteristics}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-1">{zone.name}</h3>
                  <p className="text-xs text-neutral-500 line-clamp-2">{zone.regions}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-[11px] text-amber-800 font-medium">{zone.solutionMode}</span>
                  <span className={`text-xs ${isSelected ? 'text-amber-700 font-bold' : 'text-neutral-500'}`}>
                    {isSelected ? 'Active Profile' : 'Select Zone →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown for Selected Zone */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Target Geography Profile
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1 font-heading">{currentZone.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Dominant Regions: <span className="text-neutral-800 font-medium">{currentZone.regions}</span>
                </p>
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  {currentZone.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5 mb-3">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>Unmitigated Atmospheric Threats</span>
                </h4>
                <ul className="space-y-2">
                  {currentZone.threats.map((threat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-50 rounded-xl p-6 border border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-2">
                  Prescription Protocol
                </span>
                <div className="p-4 rounded-lg bg-white border border-neutral-200 mb-4 shadow-xs">
                  <span className="text-xs text-neutral-500 block">Target RH Calibration</span>
                  <span className="text-2xl font-bold text-emerald-700 font-heading">
                    {currentZone.recommendedRH}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Dual-direction module locks RH within ±1% precision regardless of season.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Low-E UV-shielding prevents temperature spikes caused by direct sun exposure.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Airtight magnetic gaskets isolate the chamber completely from regional damp/dry.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <span className="text-[11px] text-neutral-500 block mb-1 font-medium">
                  Autonomous Protection Mode
                </span>
                <span className="inline-block px-3 py-1 rounded bg-amber-100 border border-amber-200 text-amber-900 font-semibold text-xs">
                  {currentZone.solutionMode}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
