import React from 'react';

export const GoldenCrownCircleMedallion = ({ primaryDerived }) => (
  <svg viewBox="0 0 210 185" className="w-48 h-44 drop-shadow-[0_12px_25px_rgba(0,0,0,0.95)]">
    <defs>
      <radialGradient id="crownCircleBg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#fffdfa" />
        <stop offset="60%" stopColor={primaryDerived?.base || '#d8b870'} />
        <stop offset="100%" stopColor={primaryDerived?.darker || '#674712'} />
      </radialGradient>
      <linearGradient id="crown3dGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="25%" stopColor={primaryDerived?.light || '#f3deb0'} />
        <stop offset="55%" stopColor={primaryDerived?.base || '#be9440'} />
        <stop offset="85%" stopColor={primaryDerived?.dark || '#674712'} />
        <stop offset="100%" stopColor={primaryDerived?.darker || '#d4af37'} />
      </linearGradient>
      <linearGradient id="crownBaseBand" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={primaryDerived?.darker || '#3d2a0d'} />
        <stop offset="25%" stopColor={primaryDerived?.light || '#d8b870'} />
        <stop offset="50%" stopColor="#fffdfa" />
        <stop offset="75%" stopColor={primaryDerived?.base || '#be9440'} />
        <stop offset="100%" stopColor={primaryDerived?.darker || '#3d2a0d'} />
      </linearGradient>
    </defs>

    <circle
      cx="100"
      cy="105"
      r="88"
      fill="url(#crownCircleBg)"
      stroke={primaryDerived?.light || '#fef08a'}
      strokeWidth="2.5"
    />
    <ellipse cx="100" cy="142" rx="64" ry="12" fill="rgba(0,0,0,0.55)" filter="blur(4px)" />

    <polygon points="52,115 68,58 92,98" fill={primaryDerived?.dark || '#784714'} />
    <polygon points="148,115 132,58 108,98" fill={primaryDerived?.dark || '#784714'} />
    <circle cx="68" cy="55" r="5.5" fill={primaryDerived?.base || '#be9440'} />
    <circle cx="132" cy="55" r="5.5" fill={primaryDerived?.base || '#be9440'} />

    <path
      d="M36 122 L25 56 L68 92 L100 34 L132 92 L175 56 L164 122 Z"
      fill="url(#crown3dGold)"
      stroke="#fffdfa"
      strokeWidth="1.2"
    />
    <circle cx="24" cy="52" r="7" fill="url(#crown3dGold)" />
    <circle cx="100" cy="29" r="8.5" fill="url(#crown3dGold)" />
    <circle cx="176" cy="52" r="7" fill="url(#crown3dGold)" />

    <rect
      x="34"
      y="118"
      width="132"
      height="17"
      rx="4"
      fill="url(#crownBaseBand)"
      stroke={primaryDerived?.light || '#fef08a'}
      strokeWidth="1.2"
    />
  </svg>
);

export default GoldenCrownCircleMedallion;

