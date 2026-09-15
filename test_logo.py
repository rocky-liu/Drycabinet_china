svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 928 248" width="100%" height="100%" fill="none">
  <defs>
    <!-- Vibrant Electric Blue to Royal Blue Gradient -->
    <linearGradient id="deomax-blue" x1="0%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#00B4FF" />
      <stop offset="45%" stop-color="#0072FF" />
      <stop offset="100%" stop-color="#004CE8" />
    </linearGradient>

    <!-- Clip path for D inner cutout -->
    <clipPath id="d-inner-clip">
      <path d="M 64 59 L 92 59 C 114 59, 126 73, 126 95 C 126 117, 114 131, 92 131 L 64 131 Z" />
    </clipPath>
  </defs>

  <g id="deomax-brand-logo">
    <!-- ==================== LETTER D ==================== -->
    <!-- Top Horizontal Bar with outer top-left corner -->
    <path d="M 40 35 L 94 35 C 132 35, 150 58, 150 95 C 150 132, 132 155, 94 155 L 40 155 L 40 76 L 64 76 L 64 131 L 92 131 C 114 131, 126 117, 126 95 C 126 73, 114 59, 92 59 L 40 59 L 40 35 Z" fill="#050811" />
    <!-- White stencil slot cut through the left stem between y=59 and y=76 -->
    <rect x="36" y="59" width="30" height="17" fill="#FFFFFF" opacity="1" />

    <!-- ==================== LETTER E ==================== -->
    <!-- 3 Stacking Bars with Grey Center -->
    <rect x="180" y="35" width="108" height="24" rx="2" fill="#050811" />
    <rect x="180" y="83" width="108" height="24" rx="2" fill="#8E8E93" />
    <rect x="180" y="131" width="108" height="24" rx="2" fill="#050811" />

    <!-- ==================== LETTER O ==================== -->
    <!-- Squircle / Rounded Tech O -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M 352 35 C 322 35, 314 55, 314 95 C 314 135, 322 155, 352 155 L 396 155 C 426 155, 434 135, 434 95 C 434 55, 426 35, 396 35 L 352 35 Z M 356 59 C 342 59, 338 69, 338 95 C 338 121, 342 131, 356 131 L 392 131 C 406 131, 410 121, 410 95 C 410 69, 406 59, 392 59 L 356 59 Z" fill="#050811" />

    <!-- ==================== LETTER M ==================== -->
    <!-- Sharp Electric Blue M -->
    <path d="M 458 155 L 458 35 L 484 35 L 519 108 L 554 35 L 580 35 L 580 155 L 556 155 L 556 74 L 528 132 L 510 132 L 482 74 L 482 155 Z" fill="url(#deomax-blue)" />

    <!-- ==================== LETTER A ==================== -->
    <!-- Chevron Legs with Center Dot -->
    <path d="M 606 155 L 654 35 L 678 35 L 726 155 L 700 155 L 688 123 L 644 123 L 632 155 Z M 666 69 L 652 103 L 680 103 Z" fill="url(#deomax-blue)" />
    <!-- Center Dot in the A -->
    <circle cx="666" cy="111" r="12" fill="url(#deomax-blue)" />

    <!-- ==================== LETTER X ==================== -->
    <!-- Crisp Crossing Diagonal X -->
    <path d="M 750 35 L 778 35 L 814 88 L 850 35 L 878 35 L 830 100 L 880 155 L 852 155 L 814 108 L 776 155 L 748 155 L 798 96 Z" fill="url(#deomax-blue)" />

    <!-- ==================== SLOGAN ==================== -->
    <!-- CONNECT. BRILLIANT. SMART. -->
    <text x="464" y="218" 
          text-anchor="middle" 
          font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" 
          font-weight="800" 
          font-size="21" 
          letter-spacing="0.42em">
      <tspan fill="#050811">CONNECT. </tspan>
      <tspan fill="url(#deomax-blue)">BRILLIANT. </tspan>
      <tspan fill="#050811">SMART.</tspan>
    </text>
  </g>
</svg>
'''

with open('public/deomax-logo.svg', 'w') as f:
    f.write(svg_content)

print("Saved SVG successfully!")
