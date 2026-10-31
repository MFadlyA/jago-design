import React from 'react';
import {
  NvidiaRtxBadge,
  AmdRyzenBadge,
  IntelBadge,
  RogBadge
} from './HardwareLogos';
import { Cpu, Monitor, ShieldCheck } from 'lucide-react';
import { getDerivedColors, rgbToHex } from '../utils/colorUtils';


export default function Template4Requirements({
  t4Data,
  setT4Data,
  showParticles,
  posterRef,
  triggerSlotUpload,
  setSelectedSlot,
  JagoGamesCrestLogo,
  ReadyStockRibbon
}) {
  const isRetro = t4Data.themeStyle === 'retroStripes';

  const primaryDerived = getDerivedColors(t4Data.colors?.primary || { r: 223, g: 189, b: 112 });
  const minSpecRgb = t4Data.colors?.minSpec || { r: 6, g: 182, b: 212 };
  const minSpecHex = rgbToHex(minSpecRgb.r, minSpecRgb.g, minSpecRgb.b);
  const recSpecRgb = t4Data.colors?.recSpec || { r: 245, g: 158, b: 11 };
  const recSpecHex = rgbToHex(recSpecRgb.r, recSpecRgb.g, recSpecRgb.b);
  const bgRgb = t4Data.colors?.background || { r: 9, g: 13, b: 22 };
  const bgHex = rgbToHex(bgRgb.r, bgRgb.g, bgRgb.b);

  const updateSpec = (type, key, value) => {
    setT4Data({
      ...t4Data,
      [type]: {
        ...t4Data[type],
        [key]: value
      }
    });
  };

  return (
    <div
      ref={posterRef}
      style={isRetro ? {} : { backgroundColor: bgHex }}
      className={`w-[960px] h-[960px] relative overflow-hidden select-none flex flex-col justify-between ${
        isRetro
          ? 'bg-diagonal-retro-stripes p-7'
          : 'p-8'
      }`}
    >
      {/* Custom Background Overlay */}
      {t4Data.customBgOverlay && (
        <img
          src={t4Data.customBgOverlay}
          alt="Custom Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
          style={{
            transform: `scale(${t4Data.bgZoom ?? 1}) translate(${t4Data.bgX ?? 0}px, ${t4Data.bgY ?? 0}px)`,
            transformOrigin: 'center center'
          }}
        />
      )}

      {/* LUXURY BACKGROUND DECORATIONS (Shown when Luxury theme is active) */}
      {!isRetro && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-0 left-0 w-full h-[380px] brushed-metal-panel opacity-40"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
            }}
          />

          <div
            className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-35"
            style={{
              background: `radial-gradient(circle, ${primaryDerived.glow} 0%, transparent 70%)`
            }}
          />

          <svg viewBox="0 0 960 960" className="w-full h-full absolute inset-0 opacity-40">
            <line x1="20" y1="200" x2="300" y2="200" stroke={primaryDerived.base} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="660" y1="200" x2="940" y2="200" stroke={primaryDerived.base} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="480" y1="200" x2="480" y2="880" stroke={primaryDerived.base} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          </svg>

          {showParticles && (
            <>
              <div
                className="absolute top-[180px] left-[60px] w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ color: recSpecHex, backgroundColor: recSpecHex }}
              />
              <div
                className="absolute top-[220px] right-[65px] w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ color: minSpecHex, backgroundColor: minSpecHex }}
              />
              <div
                className="absolute bottom-[160px] left-[70px] w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: primaryDerived.base }}
              />
            </>
          )}
        </div>
      )}

      {/* RETRO INNER FRAME WRAPPER (Shown when Retro theme is active, matching reference 2) */}
      <div
        className={`w-full h-full flex flex-col justify-between relative z-10 ${
          isRetro
            ? 'border-[4.5px] border-slate-950 bg-transparent p-5'
            : ''
        }`}
      >
        {/* ROW 1: HEADER & HARDWARE LOGOS */}
        <div className="space-y-4">
          {/* Top Brand Bar */}
          <div className="flex items-center justify-between">
            <JagoGamesCrestLogo
              brandName={t4Data.brandName}
              customLogo={t4Data.logoCustom}
              logoZoom={t4Data.logoZoom}
              logoX={t4Data.logoX}
              logoY={t4Data.logoY}
              logoFit={t4Data.logoFit || 'contain'}
              primaryDerived={primaryDerived}
              onClick={() => {
                if (setSelectedSlot) setSelectedSlot({ template: 't4', type: 'logo' });
                triggerSlotUpload({ template: 't4', type: 'logo' });
              }}
              variant={isRetro ? 'square-box' : 'circle'}
            />

            {/* Game Title Plaque */}
            <div className="flex flex-col items-center">
              <div
                className={`px-8 py-2 rounded-xl text-center shadow-lg transition ${
                  isRetro
                    ? 'bg-slate-950 text-amber-300 border-2 border-slate-900'
                    : 'gold-metallic-rim p-[2px]'
                }`}
              >
                <div
                  className={`${isRetro ? '' : 'bg-slate-950/95 px-6 py-1.5 rounded-[10px] border'}`}
                  style={isRetro ? {} : { borderColor: `${primaryDerived.base}55` }}
                >
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setT4Data({ ...t4Data, gameTitle: e.currentTarget.textContent })
                    }
                    className={`font-luxury font-black text-[28px] tracking-[0.08em] uppercase outline-none cursor-text ${
                      isRetro ? 'text-amber-300 font-pixel text-[20px]' : 'gold-3d-heading'
                    }`}
                  >
                    {t4Data.gameTitle}
                  </span>
                </div>
              </div>
              <span
                style={isRetro ? {} : { color: primaryDerived.light }}
                className={`text-[12px] font-bold tracking-[0.2em] uppercase mt-1 ${isRetro ? 'text-slate-950 font-mono' : ''}`}
              >
                SYSTEM REQUIREMENTS SPECIFICATION
              </span>
            </div>

            <ReadyStockRibbon
              line1="PC GAME"
              line2="TESTED"
              primaryDerived={primaryDerived}
              onEditLine1={() => {}}
              onEditLine2={() => {}}
            />
          </div>

          {/* HARDWARE LOGOS STRIP (NVIDIA RTX, AMD RYZEN, INTEL, ROG) */}
          <div
            className={`flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border ${
              isRetro
                ? 'bg-slate-950/90 border-slate-950 shadow-md'
                : 'bg-slate-950/80 shadow-xl backdrop-blur-sm'
            }`}
            style={isRetro ? {} : { borderColor: `${primaryDerived.base}44` }}
          >
            {t4Data.hardwareLogos.nvidia && <NvidiaRtxBadge className="flex-1 justify-center" />}
            {t4Data.hardwareLogos.ryzen && <AmdRyzenBadge className="flex-1 justify-center" />}
            {t4Data.hardwareLogos.intel && <IntelBadge className="flex-1 justify-center" />}
            {t4Data.hardwareLogos.rog && <RogBadge className="flex-1 justify-center" />}
          </div>
        </div>

        {/* ROW 2: DUAL REQUIREMENTS PANELS (MINIMUM & RECOMMENDED) */}
        <div className="flex-1 grid grid-cols-2 gap-5 my-3 items-stretch">
          {/* 1. MINIMUM REQUIREMENTS PANEL */}
          <div
            className={`rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition ${
              isRetro
                ? 'bg-slate-950/85 border-[3px] border-slate-950 text-white shadow-xl'
                : 'bg-[#0c111e]/90 border backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.85)]'
            }`}
            style={isRetro ? {} : { borderColor: `${minSpecHex}4d` }}
          >
            {/* Top Accent Stripe */}
            <div
              className="w-full h-1 absolute top-0 left-0"
              style={{
                background: `linear-gradient(to right, ${minSpecHex}, rgba(${minSpecRgb.r}, ${minSpecRgb.g}, ${minSpecRgb.b}, 0.4), transparent)`
              }}
            />

            {/* Panel Title */}
            <div
              className="flex items-center gap-2.5 pb-3 border-b"
              style={{ borderColor: `${minSpecHex}33` }}
            >
              <Cpu className="w-6 h-6 shrink-0" style={{ color: minSpecHex }} />
              <h2
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateSpec('minimum', 'title', e.currentTarget.textContent)}
                style={{ color: minSpecHex }}
                className={`font-black text-[20px] tracking-wide uppercase outline-none cursor-text leading-tight ${
                  isRetro ? 'font-pixel text-[15px] pixel-text-shadow' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                }`}
              >
                {t4Data.minimum.title}
              </h2>
            </div>

            {/* Specs List */}
            <div className="space-y-3.5 my-auto text-[13.5px] leading-snug">
              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  OS:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'os', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.os}
                </span>
              </div>

              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  PROSESOR / CPU:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'processor', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.processor}
                </span>
              </div>

              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  MEMORI / RAM:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'memory', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.memory}
                </span>
              </div>

              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  GRAFIS / GPU:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'graphics', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.graphics}
                </span>
              </div>

              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  DIRECTX:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'directx', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.directx}
                </span>
              </div>

              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  JARINGAN:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'network', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.network}
                </span>
              </div>

              <div>
                <span
                  style={{ color: minSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  PENYIMPANAN:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('minimum', 'storage', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.minimum.storage}
                </span>
              </div>
            </div>

            <div
              className="pt-2 border-t text-[11px] font-bold uppercase tracking-wider"
              style={{ borderColor: `${minSpecHex}33`, color: minSpecHex }}
            >
              ESTIMASI: 1080P 30 FPS • LOW-MEDIUM SETTINGS
            </div>
          </div>

          {/* 2. RECOMMENDED REQUIREMENTS PANEL */}
          <div
            className={`rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition ${
              isRetro
                ? 'bg-slate-950/85 border-[3px] border-slate-950 text-white shadow-xl'
                : 'bg-[#0c111e]/90 border backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.85)]'
            }`}
            style={isRetro ? {} : { borderColor: `${recSpecHex}4d` }}
          >
            {/* Top Accent Stripe */}
            <div
              className="w-full h-1 absolute top-0 left-0"
              style={{
                background: `linear-gradient(to right, ${recSpecHex}, rgba(${recSpecRgb.r}, ${recSpecRgb.g}, ${recSpecRgb.b}, 0.4), transparent)`
              }}
            />

            {/* Panel Title */}
            <div
              className="flex items-center gap-2.5 pb-3 border-b"
              style={{ borderColor: `${recSpecHex}33` }}
            >
              <Monitor className="w-6 h-6 shrink-0" style={{ color: recSpecHex }} />
              <h2
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateSpec('recommended', 'title', e.currentTarget.textContent)}
                style={{ color: recSpecHex }}
                className={`font-black text-[20px] tracking-wide uppercase outline-none cursor-text leading-tight ${
                  isRetro ? 'font-pixel text-[15px] pixel-text-shadow' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                }`}
              >
                {t4Data.recommended.title}
              </h2>
            </div>

            {/* Specs List */}
            <div className="space-y-3.5 my-auto text-[13.5px] leading-snug">
              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  OS:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'os', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.os}
                </span>
              </div>

              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  PROSESOR / CPU:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'processor', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.processor}
                </span>
              </div>

              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  MEMORI / RAM:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'memory', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.memory}
                </span>
              </div>

              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  GRAFIS / GPU:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'graphics', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.graphics}
                </span>
              </div>

              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  DIRECTX:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'directx', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.directx}
                </span>
              </div>

              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  JARINGAN:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'network', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.network}
                </span>
              </div>

              <div>
                <span
                  style={{ color: recSpecHex }}
                  className={`font-black tracking-wide block ${isRetro ? '' : 'text-xs'}`}
                >
                  PENYIMPANAN:
                </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateSpec('recommended', 'storage', e.currentTarget.textContent)}
                  className="font-medium text-slate-100 outline-none cursor-text block mt-0.5"
                >
                  {t4Data.recommended.storage}
                </span>
              </div>
            </div>

            <div
              className="pt-2 border-t text-[11px] font-bold uppercase tracking-wider"
              style={{ borderColor: `${recSpecHex}33`, color: recSpecHex }}
            >
              ESTIMASI: 1080P 60+ FPS • HIGH-ULTRA SETTINGS
            </div>
          </div>
        </div>

        {/* ROW 3: FOOTER NOTE */}
        <div className={`py-2 px-4 rounded-xl flex items-center justify-between text-xs ${
          isRetro
            ? 'bg-slate-950/90 text-amber-300 border border-slate-900 font-mono'
            : 'bg-slate-950/80 border border-amber-500/25 text-slate-300'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                setT4Data({ ...t4Data, footerNote: e.currentTarget.textContent })
              }
              className="font-semibold tracking-wide outline-none cursor-text uppercase"
            >
              {t4Data.footerNote}
            </span>
          </div>

          <span className="font-bold text-amber-300/90 tracking-widest uppercase">
            JAGO GAMES TESTED
          </span>
        </div>
      </div>
    </div>
  );
}
