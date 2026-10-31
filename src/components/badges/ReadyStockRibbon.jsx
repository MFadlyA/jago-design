import React from 'react';

export const ReadyStockRibbon = ({ line1, line2, onEditLine1, onEditLine2, primaryDerived }) => (
  <div className="relative w-[122px] h-[126px] -mt-8 mr-1 select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.9)]">
    <svg viewBox="0 0 130 135" className="w-full h-full">
      <defs>
        <linearGradient id="ribbonGoldBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryDerived?.darker || '#7e5414'} />
          <stop offset="22%" stopColor={primaryDerived?.light || '#f3deb0'} />
          <stop offset="48%" stopColor={primaryDerived?.superLight || '#fffdfa'} />
          <stop offset="72%" stopColor={primaryDerived?.base || '#d8b870'} />
          <stop offset="100%" stopColor={primaryDerived?.darker || '#5d3b0c'} />
        </linearGradient>
        <linearGradient id="ribbonEdge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={primaryDerived?.superLight || '#fefbf2'} />
          <stop offset="50%" stopColor={primaryDerived?.base || '#be9440'} />
          <stop offset="100%" stopColor={primaryDerived?.darker || '#5d3b0c'} />
        </linearGradient>
      </defs>
      <polygon
        points="8,0 122,0 122,130 65,108 8,130"
        fill="url(#ribbonGoldBody)"
        stroke="url(#ribbonEdge)"
        strokeWidth="2"
      />
      <polygon
        points="14,5 116,5 116,121 65,101 14,121"
        fill="none"
        stroke="#5d3b0c"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="116" cy="48" r="8" fill="#ffffff" filter="blur(5px)" opacity="0.6" />
    </svg>

    <div className="absolute inset-0 flex flex-col items-center justify-center pb-4 px-2 text-center">
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onEditLine1(e.currentTarget.textContent)}
        className="font-luxury font-black text-[21px] text-slate-950 tracking-wider leading-tight outline-none cursor-text"
      >
        {line1}
      </div>
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onEditLine2(e.currentTarget.textContent)}
        className="font-luxury font-black text-[21px] text-slate-950 tracking-wider leading-tight mt-0.5 outline-none cursor-text"
      >
        {line2}
      </div>
    </div>
  </div>
);

export default ReadyStockRibbon;

