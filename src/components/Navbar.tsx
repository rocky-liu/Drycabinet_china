import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { useLanguage } from '../translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DeomaxLogo } from './DeomaxLogo';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  FileText, 
  Layers, 
  ChevronDown, 
  Sparkles,
  PhoneCall,
  Sliders,
  Building2,
  UserCheck,
  MessageSquare,
  Lock
} from 'lucide-react';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  audienceMode: 'b2c' | 'b2b';
  onToggleAudience: (mode: 'b2c' | 'b2b') => void;
  inquiryCount: number;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  audienceMode,
  onToggleAudience,
  inquiryCount,
  onOpenInquiry
}) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; badge?: string }[] = [
    { id: 'home', label: t?.nav?.home || 'Home' },
    { id: 'products', label: t?.nav?.products || 'Products' },
    { id: 'instruments', label: t?.nav?.instruments || 'Instrument Cabinets', badge: 'Dual-Mode' },
    { id: 'order-board', label: '订购留言板', badge: 'HOT' },
    { id: 'applications', label: t?.nav?.applications || 'Applications' },
    { id: 'technology', label: t?.nav?.technology || 'Technology' },
    { id: 'guides', label: t?.nav?.guides || 'Humidity Guide' },
    { id: 'oem-odm', label: t?.nav?.oem || 'OEM / ODM', badge: 'B2B' },
    { id: 'about', label: t?.nav?.about || 'About Us' },
    { id: 'admin', label: '后台管理' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro-bar for Audience Switcher (B2C vs B2B) & Value Prop */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="font-semibold text-white">DEOMAX 双向闭环恒湿存储系统:</span>
            <span className="hidden sm:inline text-slate-400">工业级半导体除湿 + 超声微雾加湿 · 精度 ±1.0% RH</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-slate-400 text-[11px] hidden md:inline">服务通道:</span>
            <div className="inline-flex p-0.5 rounded-lg bg-slate-800 border border-slate-700">
              <button
                id="audience-b2c-btn"
                onClick={() => onToggleAudience('b2c')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1 ${
                  audienceMode === 'b2c' 
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xs font-semibold' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-3 h-3" />
                个人与大师琴房
              </button>
              <button
                id="audience-b2b-btn"
                onClick={() => onToggleAudience('b2b')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1 ${
                  audienceMode === 'b2b' 
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xs font-semibold' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Building2 className="w-3 h-3" />
                全球品牌 OEM / 经销采购
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Official Deomax Brand Logo */}
          <div 
            onClick={() => onSelectTab('home')}
            className="flex items-center cursor-pointer group py-1"
          >
            <DeomaxLogo size="md" className="group-hover:scale-[1.02] transition-transform" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs tracking-wide font-medium transition-all relative flex items-center space-x-1 ${
                  currentTab === item.id 
                    ? 'text-blue-700 bg-blue-50/80 border border-blue-200/80 shadow-xs font-bold' 
                    : item.id === 'admin'
                    ? 'text-slate-500 hover:text-blue-600 hover:bg-slate-100'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {item.id === 'admin' && <Lock className="w-3 h-3 text-slate-400" />}
                {item.id === 'order-board' && <MessageSquare className="w-3 h-3 text-blue-600" />}
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    item.badge === 'HOT'
                      ? 'bg-blue-600 text-white animate-pulse'
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher in Top Right */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* 10-Language Switcher */}
            <LanguageSwitcher />

            {/* Quick Order Message Board Button */}
            <button
              onClick={() => onSelectTab('order-board')}
              className="px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>订购留言</span>
            </button>

            <button
              id="header-inquiry-btn"
              onClick={onOpenInquiry}
              className="relative px-3 py-2 rounded-xl bg-white border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-slate-950 text-xs font-medium transition-all flex items-center space-x-1.5 shadow-2xs"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>{t?.nav?.quote || '询价单'}</span>
              {inquiryCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-blue-600 text-white font-bold text-[10px]">
                  {inquiryCount}
                </span>
              )}
            </button>

            <button
              id="header-cta-quote"
              onClick={() => onSelectTab('contact')}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              {audienceMode === 'b2b' ? 'OEM / ODM 询价' : (t?.nav?.getQuote || '联系工程部')}
            </button>
          </div>

          {/* Mobile menu trigger + Mobile Language Switcher */}
          <div className="flex xl:hidden items-center space-x-2">
            <LanguageSwitcher />

            <button
              onClick={onOpenInquiry}
              className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 relative shadow-2xs"
              aria-label="Quote Basket"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              {inquiryCount > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-blue-600 text-white font-bold text-[10px]">
                  {inquiryCount}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-900 focus:outline-none shadow-2xs"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === item.id 
                  ? 'bg-blue-50 text-blue-900 font-bold border border-blue-200' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2">
                {item.id === 'order-board' && <MessageSquare className="w-4 h-4 text-blue-600" />}
                {item.id === 'admin' && <Lock className="w-4 h-4 text-slate-500" />}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onSelectTab('order-board');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-semibold text-center text-sm"
            >
              产品订购留言板
            </button>
            <button
              onClick={() => {
                onSelectTab('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold text-center text-sm shadow-md shadow-blue-500/20"
            >
              {audienceMode === 'b2b' ? 'OEM / ODM 询价对接' : '联系迪迈斯工程师'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

