import React from 'react';
import { NavigationTab } from '../types';
import { ShieldCheck, Mail, ArrowRight, Award, CheckCircle2, MessageSquare, Lock } from 'lucide-react';
import { useLanguage } from '../translations';
import { DeomaxLogo } from './DeomaxLogo';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="cursor-pointer group inline-block bg-white/95 p-3 rounded-2xl border border-slate-700 shadow-md"
            >
              <DeomaxLogo size="md" />
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              珠海市迪迈斯精密电器有限公司专注于声学乐器、精密光学及工业微电子环境温湿度闭环控制系统的研发制造，彻底攻克冬季干燥开裂与夏季湿气霉变。
            </p>

            <div className="text-xs text-slate-300 bg-slate-800/90 p-3.5 rounded-xl border border-slate-700/80 space-y-1.5">
              <span className="font-bold text-white block">珠海市迪迈斯精密电器有限公司</span>
              <span className="text-[11px] text-slate-400 block font-sans">Zhuhai Deomax Precision Electrical Co., Ltd.</span>
              <div className="pt-1 border-t border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                <p className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-semibold flex-shrink-0">地址:</span>
                  <span>珠海市香洲区金鼎镇上栅村生晖大街18号上栅第二工业区</span>
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-0.5">
                  <p>
                    <span className="text-sky-400 font-semibold">手机:</span>{' '}
                    <a href="tel:1330299643" className="hover:text-white font-mono">1330299643</a>
                  </p>
                  <p>
                    <span className="text-sky-400 font-semibold">座机:</span>{' '}
                    <a href="tel:+867566903313" className="hover:text-white font-mono">+86-756-6903313</a>
                  </p>
                </div>
                <p>
                  <span className="text-sky-400 font-semibold">官网:</span>{' '}
                  <a href="https://www.deomax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-sky-300 underline font-mono">www.deomax.com</a>
                </p>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold block mb-0.5">
                品牌使命 Slogan
              </span>
              <p className="text-sm font-bold text-white tracking-wide">
                CONNECT. <span className="text-sky-400">BRILLIANT.</span> SMART.
              </p>
            </div>

            <div className="flex items-center space-x-2 pt-1 text-[11px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">CE / FCC / RoHS</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">Sensirion Inside</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">ISO 9001</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t?.footer?.nav || 'Navigation'}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.home || 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.products || 'Products'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('instruments')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.instruments || 'Instrument Cabinets'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dry-cabinets')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.dryCabinets || 'Electronic Dry Cabinets'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('order-board')} className="hover:text-sky-400 transition-colors text-sky-400 font-bold flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>产品订购留言板</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.applications || 'Applications'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.technology || 'Technology'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge & B2B */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t?.footer?.resources || 'Knowledge & Resources'}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('guides')} className="hover:text-sky-400 transition-colors">
                  Guitar Humidity Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guides')} className="hover:text-sky-400 transition-colors">
                  Violin &amp; String Instrument Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('oem-odm')} className="hover:text-sky-400 transition-colors text-sky-400 font-semibold">
                  OEM / ODM Private Label
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.about || 'About Us'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-sky-400 transition-colors">
                  {t?.nav?.contact || 'Contact'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="hover:text-blue-300 transition-colors text-slate-400 flex items-center gap-1 mt-2 pt-2 border-t border-slate-800">
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>管理员后台管理</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top SEO Keywords Cloud */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Precision Topics
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Deomax 恒湿柜</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">双向主动恒湿</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">45%–55% RH</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">吉他防裂恒湿</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">电子防潮箱</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">半导体冷热芯片</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {t?.footer?.rights || 'Zhuhai Deomax Precision Electrical Co., Ltd. All rights reserved.'}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Active Dual-Mode Closed-Loop Climate Technology</span>
            <span className="text-slate-500">Global DDP Shipping Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
