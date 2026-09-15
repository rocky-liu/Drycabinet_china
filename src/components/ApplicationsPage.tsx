import React from 'react';
import { APPLICATIONS } from '../data/applications';
import { 
  Layers, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';

interface ApplicationsPageProps {
  onSelectApplicationModel: (modelName: string) => void;
  onNavigateToProducts: () => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({
  onSelectApplicationModel,
  onNavigateToProducts
}) => {
  return (
    <div className="py-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Multi-Domain Preservation Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-neutral-900">
            Applications &amp; Specialized Storage Fields
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            From vintage Brazilian rosewood tonewoods to diffraction-limited cinema optics and ultra-sensitive semiconductor ICs: explore how RHVault active microclimates protect high-value assets across global industries.
          </p>
        </div>

        {/* 6 Application Detail Cards */}
        <div className="space-y-12">
          {APPLICATIONS.map((app, index) => (
            <div 
              key={app.id} 
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Photo & Badge */}
                <div className={`lg:col-span-5 relative min-h-[280px] bg-neutral-100 ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}>
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback && target.src.includes('guithome.com')) {
                        const parts = target.src.split('/');
                        const filename = parts[parts.length - 1];
                        if (filename) {
                          target.dataset.triedFallback = 'true';
                          target.src = `/products/${filename}`;
                        }
                      }
                    }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md border border-neutral-200 text-amber-800 text-xs font-mono font-bold shadow-xs">
                    Target: {app.criticalRH}
                  </div>
                </div>

                {/* Content & Diagnostics */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-800 block mb-1">
                      {app.targetUsers}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-heading">
                      {app.name}
                    </h2>
                    <p className="text-sm font-medium text-neutral-600 mt-1">
                      {app.subtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80">
                        <span className="text-[10px] uppercase tracking-wider text-rose-700 font-bold flex items-center gap-1 mb-1">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Risk If Uncontrolled</span>
                        </span>
                        <p className="text-xs text-neutral-700 leading-relaxed">
                          {app.riskIfUncontrolled}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/80">
                        <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold flex items-center gap-1 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>RHVault Protective Outcome</span>
                        </span>
                        <p className="text-xs text-neutral-700 leading-relaxed">
                          {app.benefit}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-neutral-500">Recommended Units:</span>
                      {app.popularModels.map((model, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200 font-mono"
                        >
                          {model}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onNavigateToProducts}
                      className="text-xs font-bold text-neutral-900 hover:text-amber-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
