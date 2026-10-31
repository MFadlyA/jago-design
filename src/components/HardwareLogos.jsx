import React from 'react';

// ============================================================================
// HARDWARE LOGOS & RETRO / POLYGON ASSETS
// ============================================================================

// 1. NVIDIA GEFORCE RTX BADGE
export const NvidiaRtxBadge = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-2 bg-[#000000] border border-[#76b900]/60 px-3 py-1.5 rounded-md shadow-md ${className}`}>
    {/* NVIDIA Eye / Claw Clawmark SVG */}
    <svg viewBox="0 0 100 80" className="h-6 w-auto fill-[#76b900]">
      <path d="M49.6 13.5c-15.6 0-30.8 7.3-39.7 19.3-1.6 2.2-1.3 5.3.7 7 1.8 1.6 4.7 1.4 6.3-.7 7.7-10.4 20.8-16.7 34.3-16.7 20.5 0 38.6 13.9 43.3 33.3.6 2.6 3.2 4.2 5.8 3.6 2.6-.6 4.2-3.2 3.6-5.8C98.4 29.8 76 13.5 49.6 13.5z" />
      <path d="M48.8 28.3c-10.4 0-20.2 5.4-25.5 14.1-1.3 2.1-.6 4.8 1.5 6.1 2.1 1.3 4.8.6 6.1-1.5 4-6.6 11.4-10.6 19.3-10.6 11.5 0 21.6 7.8 24.3 18.7.6 2.5 3.1 4.1 5.6 3.5 2.5-.6 4.1-3.1 3.5-5.6-3.6-14.4-17-24.7-32.2-24.7z" />
      <path d="M47.7 43.1c-5.2 0-9.9 3-12.1 7.7-1.1 2.2-.1 4.9 2.1 6 2.2 1.1 4.9.1 6-2.1 1-2.1 3.2-3.5 5.5-3.5 3.3 0 6.2 2.2 7 5.4.6 2.4 3 3.9 5.4 3.3 2.4-.6 3.9-3 3.3-5.4-1.7-6.7-7.7-11.4-14.7-11.4z" />
      <circle cx="47.5" cy="58" r="4.2" fill="#76b900" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-sans font-black text-[9px] tracking-widest text-[#76b900]">NVIDIA</span>
      <div className="flex items-center gap-1">
        <span className="font-sans font-black text-[12px] tracking-tight text-white">GEFORCE</span>
        <span className="font-sans font-black text-[13px] tracking-tight text-[#76b900]">RTX</span>
      </div>
    </div>
  </div>
);

// 2. AMD RYZEN BADGE
export const AmdRyzenBadge = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-2 bg-[#0d0d0d] border border-[#f36c21]/60 px-3 py-1.5 rounded-md shadow-md ${className}`}>
    {/* AMD Zen Ring SVG */}
    <svg viewBox="0 0 100 100" className="h-6 w-auto">
      <defs>
        <linearGradient id="ryzenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ed1c24" />
          <stop offset="100%" stopColor="#f7931e" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#ryzenGrad)" strokeWidth="12" strokeDasharray="190 70" />
      <polygon points="50,14 62,32 38,32" fill="#f7931e" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-sans font-black text-[9px] tracking-widest text-[#ed1c24]">AMD</span>
      <span className="font-sans font-black text-[14px] tracking-wider text-white">RYZEN</span>
    </div>
  </div>
);

// 3. INTEL CORE BADGE
export const IntelBadge = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-2 bg-[#001026] border border-[#0071c5]/70 px-3 py-1.5 rounded-md shadow-md ${className}`}>
    <svg viewBox="0 0 100 65" className="h-6 w-auto fill-[#0071c5]">
      {/* Intel Oval Swirl Ring */}
      <path
        d="M 90,32 C 90,48 55,58 24,54 C 10,52 2,42 6,32 C 11,20 40,8 74,10 C 86,11 92,20 90,32 Z"
        fill="none"
        stroke="#00c7fd"
        strokeWidth="4"
        strokeDasharray="220 40"
      />
      <text x="48" y="38" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">
        intel
      </text>
    </svg>
  </div>
);

// 4. ROG REPUBLIC OF GAMERS BADGE
export const RogBadge = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-2 bg-[#120408] border border-[#ff0033]/60 px-3 py-1.5 rounded-md shadow-md ${className}`}>
    {/* ROG Cyber Wing Eye Logo */}
    <svg viewBox="0 0 100 80" className="h-6 w-auto">
      <defs>
        <linearGradient id="rogRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4b6b" />
          <stop offset="50%" stopColor="#e60026" />
          <stop offset="100%" stopColor="#800014" />
        </linearGradient>
      </defs>
      <path
        d="M92 12 C78 20 62 30 46 45 C38 38 28 32 15 28 C28 36 38 46 44 56 C26 50 14 42 6 32 C12 48 30 64 52 68 C74 54 88 34 94 14 Z"
        fill="url(#rogRed)"
      />
      <polygon points="46,45 64,30 52,58" fill="#ffffff" opacity="0.4" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-sans font-black text-[8px] tracking-widest text-[#ff2a55]">REPUBLIC OF</span>
      <span className="font-sans font-black text-[10px] tracking-wider text-white">GAMERS</span>
    </div>
  </div>
);

// 5. RETRO PIXEL CAMERA (Matching Reference 3)
export const PixelCameraIcon = ({ className = 'w-12 h-10' }) => (
  <div className={`relative ${className} select-none`}>
    <svg viewBox="0 0 64 48" className="w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
      {/* Camera Body Dark Grey Base */}
      <rect x="6" y="10" width="52" height="34" rx="2" fill="#334155" stroke="#0f172a" strokeWidth="2.5" />
      {/* Top Shutter Bump */}
      <rect x="14" y="5" width="16" height="6" fill="#475569" stroke="#0f172a" strokeWidth="2" />
      {/* Flash / Light */}
      <rect x="42" y="5" width="10" height="5" fill="#fde047" stroke="#0f172a" strokeWidth="1.5" />
      {/* Outer Lens Ring */}
      <circle cx="32" cy="27" r="14" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
      {/* Middle Lens Ring (Cyan/Purple reflections) */}
      <circle cx="32" cy="27" r="10" fill="#38bdf8" />
      <circle cx="32" cy="27" r="7" fill="#0284c7" />
      <circle cx="32" cy="27" r="4" fill="#0c4a6e" />
      {/* Lens Reflection Highlight */}
      <ellipse cx="29" cy="24" rx="2" ry="1.2" fill="#ffffff" />
    </svg>
  </div>
);

// 6. RETRO PIXEL SPARKLE STAR (Matching Reference 3)
export const RetroPixelSparkle = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" className={`${className} animate-pulse drop-shadow-[0_0_8px_#fde047]`}>
    <polygon points="16,2 19,13 30,16 19,19 16,30 13,19 2,16 13,13" fill="#fde047" />
    <polygon points="16,6 18,14 26,16 18,18 16,26 14,18 6,16 14,14" fill="#ffffff" />
    <circle cx="16" cy="16" r="2" fill="#fff" />
  </svg>
);

// 7. DARK POLYGON MESH OVERLAY (Matching Reference 1)
export const DarkPolygonMeshOverlay = ({ opacity = 0.45, strokeColor = '#38bdf8', nodeColor = '#38bdf8' }) => (
  <svg viewBox="0 0 960 960" className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <radialGradient id="meshGlowCenter" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    <rect width="960" height="960" fill="url(#meshGlowCenter)" />

    {/* Wireframe Network Polygons */}
    <g stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.6">
      <polygon points="0,0 220,110 140,320 0,240" fill="rgba(255,255,255,0.015)" />
      <polygon points="220,110 520,60 440,280 140,320" fill="rgba(255,255,255,0.02)" />
      <polygon points="520,60 780,120 720,340 440,280" fill="rgba(255,255,255,0.01)" />
      <polygon points="780,120 960,0 960,260 720,340" fill="rgba(255,255,255,0.02)" />

      <polygon points="0,240 140,320 180,620 0,580" fill="rgba(255,255,255,0.02)" />
      <polygon points="140,320 440,280 480,590 180,620" fill="rgba(255,255,255,0.015)" />
      <polygon points="440,280 720,340 760,620 480,590" fill="rgba(255,255,255,0.025)" />
      <polygon points="720,340 960,260 960,560 760,620" fill="rgba(255,255,255,0.015)" />

      <polygon points="0,580 180,620 220,880 0,960" fill="rgba(255,255,255,0.01)" />
      <polygon points="180,620 480,590 460,900 220,880" fill="rgba(255,255,255,0.02)" />
      <polygon points="480,590 760,620 780,880 460,900" fill="rgba(255,255,255,0.015)" />
      <polygon points="760,620 960,560 960,960 780,880" fill="rgba(255,255,255,0.02)" />

      {/* Cross Diagonal Web Lines */}
      <line x1="220" y1="110" x2="480" y2="590" opacity="0.4" strokeDasharray="3 3" />
      <line x1="780" y1="120" x2="480" y2="590" opacity="0.4" strokeDasharray="3 3" />
      <line x1="140" y1="320" x2="760" y2="620" opacity="0.3" />
      <line x1="440" y1="280" x2="220" y2="880" opacity="0.3" strokeDasharray="2 2" />
    </g>

    {/* Glowing Nodes / Vertices */}
    <g fill={nodeColor}>
      <circle cx="220" cy="110" r="3" />
      <circle cx="520" cy="60" r="3.5" />
      <circle cx="780" cy="120" r="3" />
      <circle cx="140" cy="320" r="3.5" />
      <circle cx="440" cy="280" r="4" filter="drop-shadow(0 0 6px #38bdf8)" />
      <circle cx="720" cy="340" r="3.5" />
      <circle cx="180" cy="620" r="3" />
      <circle cx="480" cy="590" r="4.5" filter="drop-shadow(0 0 8px #38bdf8)" />
      <circle cx="760" cy="620" r="3.5" />
      <circle cx="220" cy="880" r="3" />
      <circle cx="460" cy="900" r="3.5" />
      <circle cx="780" cy="880" r="3" />
    </g>
  </svg>
);
