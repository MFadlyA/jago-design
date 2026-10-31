import React from 'react';

export const PlatformLogosStrip = ({ platforms }) => (
  <div className="flex items-center justify-between px-2 pt-2.5 pb-0.5 text-white select-none">
    {platforms.ps5 && (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
          <path d="M9.5 4v14.5l3.5 1.2V7.5c0-.8.5-1.2 1.2-1 .8.2 1.3.9 1.3 1.7v5.3c2.2.7 4-.3 4-3.2 0-2.8-1.5-4.2-4.8-5.2L9.5 4zM4 16.8c-1.8.6-2.5 1.8-1.3 2.6 1.2.8 3.8.9 5.8.2v-2l-3.2.8c-.8.2-1.5 0-1.5-.4 0-.4.5-.7 1.4-1l2.3-.7v-1.8L4 16.8z" />
        </svg>
        <span className="font-sans font-bold text-[11px] tracking-widest">PS5</span>
      </div>
    )}

    {platforms.xbox && (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.8 14.8c-.8-1.8-2.5-3.8-4.8-5.5-2.3 1.7-4 3.7-4.8 5.5-1.4-1.3-2.2-3-2.2-4.8 0-2.4 1.3-4.5 3.2-5.7 1.1.5 2.4 1.4 3.8 2.7 1.4-1.3 2.7-2.2 3.8-2.7 1.9 1.2 3.2 3.3 3.2 5.7 0 1.8-.8 3.5-2.2 4.8z" />
        </svg>
        <span className="font-sans font-bold text-[11px] tracking-tight">XBOX</span>
      </div>
    )}

    {platforms.pc && (
      <div className="flex items-center gap-1">
        <span className="bg-white text-black font-black text-[9px] px-1 py-0.2 rounded-[2px] leading-tight">
          P
        </span>
        <span className="font-sans font-bold text-[11px]">PC</span>
      </div>
    )}

    {platforms.steam && (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
          <circle cx="12" cy="12" r="10" />
          <circle cx="15" cy="9" r="3" fill="#000" />
          <path d="M6 16l6-3" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="font-sans font-bold text-[10px] tracking-wide">STEAM</span>
      </div>
    )}

    {platforms.epic && (
      <div className="border border-white/80 px-1 py-0.2 leading-none text-center">
        <div className="font-sans font-black text-[7px] tracking-tighter">EPIC</div>
        <div className="font-sans font-bold text-[5px] tracking-widest">GAMES</div>
      </div>
    )}

    {platforms.gog && (
      <div className="flex items-center gap-0.5">
        <span className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[6px] font-bold">
          O
        </span>
        <span className="font-sans font-extrabold text-[11px] tracking-tight">GOG</span>
      </div>
    )}
  </div>
);

export default PlatformLogosStrip;

