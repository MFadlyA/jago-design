import React from 'react';

export const RealisticPS5Centerpiece = () => (
  <svg
    viewBox="0 0 230 295"
    className="w-full h-full drop-shadow-[0_18px_24px_rgba(0,0,0,0.95)] select-none"
  >
    <defs>
      <linearGradient id="ps5LeftFin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="55%" stopColor="#f1f5f9" />
        <stop offset="85%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <linearGradient id="ps5RightFin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
      <linearGradient id="ps5CenterBlack" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="25%" stopColor="#090d16" />
        <stop offset="100%" stopColor="#020408" />
      </linearGradient>
      <linearGradient id="ps5BlueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="40%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    <ellipse cx="122" cy="266" rx="68" ry="12" fill="rgba(0,0,0,0.85)" />
    <ellipse cx="142" cy="260" rx="44" ry="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />

    <path
      d="M150 26 L186 42 L176 256 L146 258 Z"
      fill="url(#ps5RightFin)"
      stroke="#e2e8f0"
      strokeWidth="0.6"
    />
    <path
      d="M132 30 C150 30 172 38 175 45 L166 258 L130 258 Z"
      fill="url(#ps5CenterBlack)"
    />
    <path
      d="M136 36 L138 248"
      stroke="url(#ps5BlueGlow)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M168 45 L161 248"
      stroke="url(#ps5BlueGlow)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M96 42 C110 28 135 14 148 10 L143 260 C122 260 100 253 95 248 Z"
      fill="url(#ps5LeftFin)"
      stroke="#ffffff"
      strokeWidth="1"
    />
    <path d="M103 48 L108 46 L108 53 L103 54 Z" fill="#475569" opacity="0.65" />
    <path
      d="M174 140 C183 145 184 220 175 254 L166 256 L170 140 Z"
      fill="url(#ps5RightFin)"
    />
    <line x1="173" y1="158" x2="170" y2="242" stroke="#0f172a" strokeWidth="1.5" />

    {/* DualSense Controller */}
    <g transform="translate(18, 192)">
      <ellipse cx="56" cy="74" rx="48" ry="9" fill="rgba(0,0,0,0.85)" />
      <path
        d="M22 24 C26 10 38 8 56 8 C74 8 86 10 90 24 C96 44 102 64 92 71 C84 76 76 58 69 47 L43 47 C36 58 28 76 20 71 C10 64 16 44 22 24 Z"
        fill="url(#ps5LeftFin)"
        stroke="#cbd5e1"
        strokeWidth="1"
      />
      <path
        d="M20 71 C26 74 33 60 41 47 L71 47 C79 60 86 74 92 71 C86 58 80 40 74 36 C62 32 50 32 38 36 C32 40 26 58 20 71 Z"
        fill="#111827"
      />
      <path
        d="M39 10 L73 10 L69 26 L43 26 Z"
        fill="#f8fafc"
        stroke="#3b82f6"
        strokeWidth="0.9"
      />
      <path d="M29 19 H33 V27 H29 Z M27 21 H35 V25 H27 Z" fill="#94a3b8" />
      <circle cx="81" cy="19" r="1.8" fill="#94a3b8" />
      <circle cx="84" cy="23" r="1.8" fill="#94a3b8" />
      <circle cx="78" cy="23" r="1.8" fill="#94a3b8" />
      <circle cx="81" cy="27" r="1.8" fill="#94a3b8" />
      <circle cx="43" cy="36" r="6" fill="#090d16" stroke="#334155" strokeWidth="1.2" />
      <circle cx="69" cy="36" r="6" fill="#090d16" stroke="#334155" strokeWidth="1.2" />
      <circle cx="43" cy="36" r="3.5" fill="#1e293b" />
      <circle cx="69" cy="36" r="3.5" fill="#1e293b" />
    </g>
  </svg>
);

export default RealisticPS5Centerpiece;

