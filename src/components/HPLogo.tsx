import React from 'react';

interface HPLogoProps {
  className?: string;
  size?: number;
}

export const HPLogo: React.FC<HPLogoProps> = ({ className = '', size = 44 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Hasya Patel HP Monogram Logo"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(226,29,47,0.35)] select-none transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="hpWhiteGrad" x1="40" y1="40" x2="130" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#D4D4D4" />
          </linearGradient>

          <linearGradient id="hpRedGrad" x1="90" y1="40" x2="160" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2E44" />
            <stop offset="50%" stopColor="#E21D2F" />
            <stop offset="100%" stopColor="#B31221" />
          </linearGradient>

          <linearGradient id="hpSwooshGrad" x1="20" y1="160" x2="180" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E21D2F" />
            <stop offset="60%" stopColor="#FF384D" />
            <stop offset="100%" stopColor="#E21D2F" />
          </linearGradient>
        </defs>

        {/* Left Coding Bracket '<' */}
        <path
          d="M 38 88 L 22 100 L 38 112"
          stroke="#E21D2F"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Coding Bracket '/>' */}
        <g transform="translate(142, 114)">
          <path
            d="M 12 6 L 2 24"
            stroke="#E21D2F"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 16 10 L 28 20 L 16 30"
            stroke="#E21D2F"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LETTER 'H' (White / Silver with subtle facets) --- */}
        {/* H - Left Stem */}
        <polygon
          points="56,42 76,32 76,160 56,170"
          fill="url(#hpWhiteGrad)"
        />
        {/* H - Left Stem highlight / facet */}
        <polygon
          points="56,42 66,37 66,165 56,170"
          fill="#FFFFFF"
          opacity="0.6"
        />

        {/* H - Crossbar */}
        <polygon
          points="76,96 112,96 112,114 76,114"
          fill="url(#hpWhiteGrad)"
        />

        {/* H - Right Stem (upper part visible behind P) */}
        <polygon
          points="112,32 132,42 132,96 112,96"
          fill="url(#hpWhiteGrad)"
        />

        {/* --- LETTER 'P' (Bold Red with angled finish) --- */}
        {/* P - Vertical Stem */}
        <polygon
          points="92,42 112,42 112,168 98,180 92,174"
          fill="url(#hpRedGrad)"
        />

        {/* P - Upper Loop */}
        <path
          d="M 106 42 L 138 42 C 160 42 172 56 172 74 C 172 92 158 106 136 106 L 106 106 Z"
          fill="url(#hpRedGrad)"
        />
        {/* P - Inner Loop Cutout */}
        <path
          d="M 116 58 L 134 58 C 146 58 152 64 152 74 C 152 84 144 90 134 90 L 116 90 Z"
          fill="#050505"
        />

        {/* --- ORBITAL DYNAMIC SWOOSH (Red curve looping across H and P) --- */}
        <path
          d="M 28 158 C 42 168 70 148 108 116 C 144 86 166 54 168 40 C 170 34 164 36 156 42 C 122 68 84 104 52 136 C 36 152 24 154 28 158 Z"
          fill="url(#hpSwooshGrad)"
        />
        <path
          d="M 148 44 C 168 46 176 56 168 76 C 164 84 154 94 142 104"
          stroke="#E21D2F"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};
