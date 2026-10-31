import React from 'react';
import { Upload } from 'lucide-react';

export const JagoGamesCrestLogo = ({
  brandName,
  customLogo,
  logoZoom = 1,
  logoX = 0,
  logoY = 0,
  logoFit = 'contain',
  onClick,
  variant = 'circle',
  primaryDerived
}) => {
  return (
    <div
      onClick={onClick}
      title="Klik untuk memilih & mengatur Logo Brand"
      className={`relative cursor-pointer group select-none transition-all duration-200 hover:scale-105 ${
        variant === 'square-box'
          ? 'w-[96px] h-[96px] bg-slate-950/90 p-1.5 rounded-lg border shadow-2xl'
          : 'w-[98px] h-[98px]'
      }`}
      style={variant === 'square-box' && primaryDerived ? { borderColor: `${primaryDerived.base}55` } : {}}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)]">
        <defs>
          <linearGradient id="crestGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryDerived?.superLight || '#fffdfa'} />
            <stop offset="22%" stopColor={primaryDerived?.light || '#f3deb0'} />
            <stop offset="48%" stopColor={primaryDerived?.dark || '#9a722c'} />
            <stop offset="74%" stopColor={primaryDerived?.base || '#dfbd70'} />
            <stop offset="100%" stopColor={primaryDerived?.darker || '#634515'} />
          </linearGradient>
          <linearGradient id="crestGamepadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={primaryDerived?.light || '#fbf3d8'} />
            <stop offset="50%" stopColor={primaryDerived?.base || '#c59942'} />
            <stop offset="100%" stopColor={primaryDerived?.darker || '#674712'} />
          </linearGradient>
          <path id="jagoTextArc" d="M 21,64 A 39,39 0 1,1 99,64" />
        </defs>

        <circle cx="60" cy="60" r="56" fill="url(#crestGoldRim)" />
        <circle
          cx="60"
          cy="60"
          r="53"
          fill="none"
          stroke={primaryDerived?.darker || '#3d2a0d'}
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <circle cx="60" cy="60" r="49" fill="#090d16" stroke="url(#crestGoldRim)" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="43" fill="none" stroke={primaryDerived?.base || '#b48c3b'} strokeWidth="0.8" opacity="0.7" />

        {customLogo ? (
          <clipPath id="logoClip">
            <circle cx="60" cy="60" r="47" />
          </clipPath>
        ) : null}

        {customLogo ? (
          <g clipPath="url(#logoClip)">
            <image
              href={customLogo}
              x="13"
              y="13"
              width="94"
              height="94"
              preserveAspectRatio={logoFit === 'cover' ? 'xMidYMid slice' : 'xMidYMid meet'}
              style={{
                transformOrigin: '60px 60px',
                transform: `scale(${logoZoom ?? 1}) translate(${logoX ?? 0}px, ${logoY ?? 0}px)`
              }}
            />
          </g>
        ) : (
          <>
            <text
              fill="url(#crestGoldRim)"
              fontSize="12.5"
              fontWeight="900"
              fontFamily="Cinzel, serif"
              letterSpacing="1.2"
              textAnchor="middle"
            >
              <textPath href="#jagoTextArc" startOffset="50%">
                {brandName}
              </textPath>
            </text>

            <g transform="translate(27, 47)">
              <path
                d="M14 10 C20 8 46 8 52 10 C60 13 65 28 60 37 C56 43 49 38 44 31 L22 31 C17 38 10 43 6 37 C1 28 6 13 14 10 Z"
                fill="url(#crestGamepadGrad)"
                stroke="#fef08a"
                strokeWidth="1"
              />
              <path d="M18 17 H22 V25 H18 Z M16 19 H24 V23 H16 Z" fill="#0f172a" />
              <circle cx="47" cy="17" r="1.8" fill="#0f172a" />
              <circle cx="51" cy="21" r="1.8" fill="#0f172a" />
              <circle cx="43" cy="21" r="1.8" fill="#0f172a" />
              <circle cx="47" cy="25" r="1.8" fill="#0f172a" />
              <circle cx="27" cy="27" r="4" fill="#382509" stroke="#dfbd70" strokeWidth="1" />
              <circle cx="39" cy="27" r="4" fill="#382509" stroke="#dfbd70" strokeWidth="1" />
            </g>
          </>
        )}
      </svg>
      <div className="absolute inset-0 rounded-full bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition backdrop-blur-sm">
        <Upload className="w-5 h-5 text-amber-200" />
      </div>
    </div>
  );
};

export default JagoGamesCrestLogo;

