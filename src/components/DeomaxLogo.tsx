import React from 'react';

interface DeomaxLogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
}

export const DeomaxLogo: React.FC<DeomaxLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  lightMode = false
}) => {
  // Dimension presets
  const heightClasses = {
    sm: variant === 'horizontal' ? 'h-7' : 'h-10',
    md: variant === 'horizontal' ? 'h-9' : 'h-14',
    lg: variant === 'horizontal' ? 'h-12' : 'h-20',
    xl: variant === 'horizontal' ? 'h-16' : 'h-28'
  }[size];

  if (variant === 'symbol') {
    return (
      <svg 
        viewBox="0 0 120 120" 
        className={`${heightClasses} w-auto aspect-square ${className}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sym-blue-v5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B8FF" />
            <stop offset="50%" stopColor="#0077FF" />
            <stop offset="100%" stopColor="#0048E6" />
          </linearGradient>
        </defs>
        {/* Modern Stencil D Mark */}
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M 16 12 L 68 12 A 48 48 0 0 1 116 60 A 48 48 0 0 1 68 108 L 16 108 L 16 50 L 36 50 L 36 88 L 68 88 A 28 28 0 0 0 96 60 A 28 28 0 0 0 68 32 L 16 32 L 16 12 Z" 
          fill="url(#sym-blue-v5)" 
        />
        {/* Silver Accent Bar */}
        <rect x="16" y="38" width="16" height="6" rx="2" fill="#8E8E93" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img 
        src="/deomax-logo.svg" 
        alt="DEOMAX - Connect. Brilliant. Smart." 
        className={`${heightClasses} w-auto object-contain drop-shadow-xs transition-transform duration-200`}
      />
    </div>
  );
};
