import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LANGUAGES, SupportedLanguage } from '../translations';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'compact' | 'full';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'full' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        id="language-switcher-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
      >
        <Globe className="w-3.5 h-3.5 text-amber-600" />
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="font-semibold text-slate-800">
          {variant === 'compact' ? currentOption.code.toUpperCase() : currentOption.nativeName}
        </span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-1.5 w-60 rounded-xl bg-white border border-slate-200 shadow-xl py-1.5 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
            <span>Select Language / 切换语言</span>
            <span className="text-amber-600 font-mono text-[10px]">10 Languages</span>
          </div>

          <div className="max-h-72 overflow-y-auto py-1">
            {LANGUAGES.map((opt) => {
              const isSelected = opt.code === language;
              return (
                <button
                  key={opt.code}
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full px-3 py-2 text-left flex items-center justify-between transition-colors ${
                    isSelected 
                      ? 'bg-amber-50/80 text-amber-900 font-bold' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{opt.flag}</span>
                    <div>
                      <div className="font-medium">{opt.nativeName}</div>
                      <div className="text-[10px] text-slate-500">{opt.name}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
