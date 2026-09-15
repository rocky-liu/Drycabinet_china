import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Droplets, 
  VolumeX, 
  Sliders, 
  CheckCircle2, 
  Building2, 
  UserCheck,
  ChevronRight,
  Eye
} from 'lucide-react';
import { NavigationTab } from '../types';
import { useLanguage } from '../translations';

interface HomeHeroProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectAudience?: (audience: 'b2c' | 'b2b') => void;
  audienceMode: 'b2c' | 'b2b';
  onOpenProductModal?: (product: any) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onNavigate,
  onSelectAudience,
  audienceMode
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200">
      {/* Subtle background radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Core Brand Value Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-xs font-medium text-slate-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="font-semibold text-slate-900">DEOMAX 迪迈斯精密电器</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-700 font-medium">双向主动恒湿 ±1% RH 闭环微气候系统</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.15] text-slate-950">
            {t?.hero?.title || 'Smart Humidity Control for Sensitive Instruments & Valuables'}
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {t?.hero?.subtitle || 'Automatically dehumidify when ambient humidity is too high, and humidify when the room becomes too dry.'}
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-cta-instruments"
              onClick={() => onNavigate('instruments')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>{t?.hero?.ctaExploreInstruments || '浏览乐器恒湿柜系列'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cta-order-board"
              onClick={() => onNavigate('order-board')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-sm tracking-wide border border-blue-200 transition-all flex items-center justify-center gap-2 shadow-2xs hover:scale-[1.02]"
            >
              <span>在线订购 / 留言咨询</span>
            </button>

            <button
              id="hero-cta-dry-cabinets"
              onClick={() => onNavigate('dry-cabinets')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm tracking-wide border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>{t?.hero?.ctaExploreDry || '光学工业防潮箱'}</span>
            </button>
          </div>

          {/* Quick Audience Entry Switch */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <span className="text-slate-500 uppercase tracking-wider font-semibold">服务通道:</span>
            <div className="flex gap-2">
              <button
                id="hero-gateway-individual"
                onClick={() => {
                  if (onSelectAudience) onSelectAudience('b2c');
                  onNavigate('instruments');
                }}
                className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                  audienceMode === 'b2c'
                    ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-2xs'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>个人音乐家与藏家</span>
              </button>

              <button
                id="hero-gateway-b2b"
                onClick={() => {
                  if (onSelectAudience) onSelectAudience('b2b');
                  onNavigate('oem-odm');
                }}
                className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                  audienceMode === 'b2b'
                    ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-2xs'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>琴行连锁、工业品牌 OEM / ODM</span>
              </button>
            </div>
          </div>
        </div>

        {/* Flagship Visual: Modern European/American Music Studio Showcase with Cabinet HUD */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xl group">
            {/* Main Studio Photography with Cabinets */}
            <div className="relative aspect-[16/9] w-full bg-neutral-950 overflow-hidden">
              <img
                src="https://www.guithome.com/hero-bg.png"
                alt="GuitHome luxury smart humidity control guitar storage cabinet"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/products/hero-bg.png';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent"></div>

              {/* Digital LED Display Overlay - Simulating High-Tech Cabinet Control Panel */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-neutral-950/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-neutral-700/80 shadow-2xl max-w-xs text-white">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300">
                      CLIMATE LOCK ACTIVE
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    ±1.0% RH
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                    45.0<span className="text-amber-400">%</span>
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">RH</span>
                  <span className="text-sm font-semibold text-neutral-300 ml-auto font-mono">21.5°C</span>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-800 text-[11px] text-neutral-300 flex items-center justify-between">
                  <span className="text-emerald-400 font-medium">Safe Acoustic Zone</span>
                  <span className="text-neutral-400">Zero Wood Drift</span>
                </div>
              </div>

              {/* Protected Assets Inside HUD Pill */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 bg-neutral-950/80 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-neutral-700 text-white">
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-200">
                  <span className="text-neutral-400 font-medium hidden sm:inline">Protected Assets:</span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-800/90 border border-neutral-700 text-amber-300 font-medium">
                    Acoustic Guitars
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-800/90 border border-neutral-700 text-neutral-200 font-medium">
                    Violins &amp; Bows
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-800/90 border border-neutral-700 text-neutral-200 font-medium">
                    Saxophones
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-800/90 border border-neutral-700 text-neutral-200 font-medium">
                    Cinema Lenses
                  </span>
                </div>

                <button
                  id="hero-view-demo-vault"
                  onClick={() => onNavigate('technology')}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>See How Dual-Mode Works</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Trust Badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Active Dual-Mode</h3>
              <p className="text-xs text-neutral-600 mt-0.5">Automated humidify + dehumidify</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">±1.0% Precision</h3>
              <p className="text-xs text-neutral-600 mt-0.5">Swiss Sensirion digital probes</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-lg bg-sky-100 text-sky-700 flex-shrink-0">
              <VolumeX className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">&lt;22 dB Studio Silent</h3>
              <p className="text-xs text-neutral-600 mt-0.5">Zero vibration in recording spaces</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">5-Year Warranty</h3>
              <p className="text-xs text-neutral-600 mt-0.5">Global factory replacement support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
