import React from 'react';

export const GoldenClockMedallion = ({ variant = 't1', className = 'w-28 h-28', primaryDerived }) => (
  <svg viewBox="0 0 120 120" className={`${className} drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)]`}>
    <defs>
      <linearGradient id="medallionRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={primaryDerived?.superLight || '#fffdfa'} />
        <stop offset="25%" stopColor={primaryDerived?.light || '#dbc295'} />
        <stop offset="55%" stopColor={primaryDerived?.dark || '#674712'} />
        <stop offset="80%" stopColor={primaryDerived?.base || '#e2c275'} />
        <stop offset="100%" stopColor={primaryDerived?.darker || '#3d2a0d'} />
      </linearGradient>
      <radialGradient id="medallionFace" cx="45%" cy="38%" r="58%">
        <stop offset="0%" stopColor={primaryDerived?.superLight || '#fdfbf7'} />
        <stop offset="55%" stopColor={primaryDerived?.base || '#be9440'} />
        <stop offset="100%" stopColor={primaryDerived?.darker || '#674712'} />
      </radialGradient>
    </defs>

    <circle cx="60" cy="60" r="56" fill="url(#medallionRim)" stroke={primaryDerived?.light || '#fef08a'} strokeWidth="1.2" />
    <circle cx="60" cy="60" r="49" fill="#13192b" stroke="url(#medallionRim)" strokeWidth="2.5" />
    <circle cx="60" cy="60" r="41" fill="url(#medallionRim)" />
    <circle
      cx="60"
      cy="60"
      r="36"
      fill="url(#medallionFace)"
      stroke={primaryDerived?.darker || '#3d2a0d'}
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />

    {variant === 't2' && (
      <g stroke={primaryDerived?.dark || '#674712'} strokeWidth="2" opacity="0.6">
        <line x1="60" y1="27" x2="60" y2="33" />
        <line x1="60" y1="87" x2="60" y2="93" />
        <line x1="27" y1="60" x2="33" y2="60" />
        <line x1="87" y1="60" x2="93" y2="60" />
        <line x1="37" y1="37" x2="41" y2="41" />
        <line x1="83" y1="37" x2="79" y2="41" />
        <line x1="37" y1="83" x2="41" y2="79" />
        <line x1="83" y1="83" x2="79" y2="79" />
      </g>
    )}

    <g transform="translate(60, 60)">
      <polygon points="0,-24 3,0 -3,0" fill={primaryDerived?.darker || '#3d2a0d'} />
      <polygon points="16,10 0,2 0,-3" fill={primaryDerived?.darker || '#3d2a0d'} />
      <polygon points="-13,11 0,2 0,-2" fill={primaryDerived?.dark || '#674712'} />
      <circle cx="0" cy="0" r="3.5" fill={primaryDerived?.light || '#fef08a'} stroke={primaryDerived?.darker || '#3d2a0d'} strokeWidth="1.5" />
    </g>
  </svg>
);

export default GoldenClockMedallion;

