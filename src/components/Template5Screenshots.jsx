import React from 'react';
import { PixelCameraIcon, RetroPixelSparkle } from './HardwareLogos';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';
import { getDerivedColors, rgbToHex } from '../utils/colorUtils';


export default function Template5Screenshots({
  t5Data,
  setT5Data,
  showParticles,
  posterRef,
  triggerSlotUpload,
  selectedSlot,
  setSelectedSlot,
  JagoGamesCrestLogo,
  ReadyStockRibbon
}) {
  const isRetro = t5Data.themeStyle === 'retroStripes';

  const primaryDerived = getDerivedColors(t5Data.colors?.primary || { r: 223, g: 189, b: 112 });
  const frameGlowRgb = t5Data.colors?.frameGlow || { r: 223, g: 189, b: 112 };
  const frameGlowHex = rgbToHex(frameGlowRgb.r, frameGlowRgb.g, frameGlowRgb.b);
  const bgRgb = t5Data.colors?.background || { r: 9, g: 13, b: 22 };
  const bgHex = rgbToHex(bgRgb.r, bgRgb.g, bgRgb.b);

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
      {t5Data.customBgOverlay && (
        <img
          src={t5Data.customBgOverlay}
          alt="Custom Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
          style={{
            transform: `scale(${t5Data.bgZoom ?? 1}) translate(${t5Data.bgX ?? 0}px, ${t5Data.bgY ?? 0}px)`,
            transformOrigin: 'center center'
          }}
        />
      )}

      {/* LUXURY BACKGROUND (When Luxury theme is active) */}
      {!isRetro && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-0 left-0 w-full h-[360px] brushed-metal-panel opacity-40"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
            }}
          />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full blur-3xl opacity-30"
            style={{
              background: `radial-gradient(circle, ${primaryDerived.glow} 0%, transparent 70%)`
            }}
          />

          <svg viewBox="0 0 960 960" className="w-full h-full absolute inset-0 opacity-40">
            <line x1="30" y1="120" x2="320" y2="120" stroke={primaryDerived.base} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="640" y1="120" x2="930" y2="120" stroke={primaryDerived.base} strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>

          {showParticles && (
            <>
              <div
                className="absolute top-[170px] left-[80px] w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ color: primaryDerived.light, backgroundColor: primaryDerived.light }}
              />
              <div
                className="absolute top-[200px] right-[85px] w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ color: frameGlowHex, backgroundColor: frameGlowHex }}
              />
              <div
                className="absolute bottom-[130px] left-[90px] w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: primaryDerived.base }}
              />
            </>
          )}
        </div>
      )}

      {/* RETRO INNER BORDER WRAPPER (Matching reference 3) */}
      <div
        className={`w-full h-full flex flex-col justify-between relative z-10 ${
          isRetro
            ? 'border-[4.5px] border-slate-950 bg-transparent p-5'
            : ''
        }`}
      >
        {/* ROW 1: HEADER WITH CAMERAS & 3D PIXEL / GOLD TITLE */}
        <div className="flex items-center justify-between">
          <JagoGamesCrestLogo
            brandName={t5Data.brandName}
            customLogo={t5Data.logoCustom}
            logoZoom={t5Data.logoZoom}
            logoX={t5Data.logoX}
            logoY={t5Data.logoY}
            logoFit={t5Data.logoFit || 'contain'}
            primaryDerived={primaryDerived}
            onClick={() => {
              if (setSelectedSlot) setSelectedSlot({ template: 't5', type: 'logo' });
              triggerSlotUpload({ template: 't5', type: 'logo' });
            }}
            variant={isRetro ? 'square-box' : 'circle'}
          />

          {/* Center Prominent Plaque (Matching Reference 3 with Pixel Cameras) */}
          <div className="flex flex-col items-center flex-1 max-w-[620px] mx-3">
            <div
              className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-between shadow-2xl relative transition ${
                isRetro
                  ? 'bg-slate-950 border-[3.5px] border-slate-900'
                  : 'gold-metallic-rim p-[2.5px]'
              }`}
            >
              <div
                className={`w-full flex items-center justify-between ${
                  isRetro ? '' : 'bg-slate-950/95 px-4 py-2 rounded-[9px] border'
                }`}
                style={isRetro ? {} : { borderColor: `${primaryDerived.base}55` }}
              >
                {/* Left Retro Camera & Sparkle */}
                <div className="relative shrink-0 flex items-center">
                  <div className="absolute -top-3 -left-3 z-10">
                    <RetroPixelSparkle className="w-6 h-6 text-yellow-300" />
                  </div>
                  <PixelCameraIcon className="w-14 h-11" />
                </div>

                {/* Center Title */}
                <div className="text-center px-2 flex-1">
                  <h1
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setT5Data({ ...t5Data, mainTitle: e.currentTarget.textContent })
                    }
                    className={`font-black tracking-[0.05em] uppercase outline-none cursor-text leading-tight ${
                      isRetro
                        ? 'font-pixel text-[24px] text-cyan-300 pixel-text-shadow'
                        : 'font-luxury text-[34px] gold-3d-heading'
                    }`}
                  >
                    {t5Data.mainTitle}
                  </h1>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setT5Data({ ...t5Data, gameTitle: e.currentTarget.textContent })
                    }
                    style={isRetro ? {} : { color: primaryDerived.light }}
                    className={`text-[12px] font-bold tracking-[0.25em] uppercase block mt-0.5 outline-none cursor-text ${
                      isRetro ? 'text-pink-400 font-pixel text-[11px]' : ''
                    }`}
                  >
                    {t5Data.gameTitle}
                  </span>
                </div>

                {/* Right Retro Camera & Sparkle */}
                <div className="relative shrink-0 flex items-center">
                  <div className="absolute -top-3 -right-3 z-10">
                    <RetroPixelSparkle className="w-6 h-6 text-yellow-300" />
                  </div>
                  <PixelCameraIcon className="w-14 h-11" />
                </div>
              </div>
            </div>
          </div>

          <ReadyStockRibbon
            line1="REAL"
            line2="PLAY"
            primaryDerived={primaryDerived}
            onEditLine1={() => {}}
            onEditLine2={() => {}}
          />
        </div>

        {/* ROW 2: 2x2 SCREENSHOT GRID (Matching Reference 3) */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 my-3 items-stretch">
          {t5Data.screenshots.map((slot, idx) => {
            const isSelected = selectedSlot?.template === 't5' && selectedSlot?.index === idx;

            return (
              <div
                key={slot.id || idx}
                onClick={() => setSelectedSlot({ template: 't5', type: 'screenshot', index: idx })}
                className={`relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-200 ${
                  isRetro
                    ? 'border-[5px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.8)]'
                    : 'gold-metallic-rim p-[3px] shadow-[0_12px_28px_rgba(0,0,0,0.95)]'
                } ${isSelected ? 'ring-4 ring-amber-400 scale-[1.01]' : 'hover:scale-[1.008]'}`}
              >
                <div className="w-full h-full bg-slate-950 relative overflow-hidden flex items-center justify-center">
                  {slot.image ? (
                    <>
                      {(slot.fit ?? 'contain') === 'contain' && (
                        <img
                          src={slot.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                        />
                      )}
                      <img
                        src={slot.image}
                        alt={slot.title || `Screenshot ${idx + 1}`}
                        className={`w-full h-full relative z-10 transition-transform ${(slot.fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                        style={{
                          transform: `scale(${slot.zoom || 1}) translate(${slot.x || 0}px, ${slot.y || 0}px)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <ImageIcon className="w-10 h-10 text-slate-500 mb-2" />
                      <span className="font-sans font-bold text-xs text-slate-300 uppercase tracking-wider">
                        Slot Screenshot #{idx + 1}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1">
                        Klik untuk upload foto
                      </span>
                    </div>
                  )}

                  {/* Corner Badge Label */}
                  <div
                    className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border text-[10px] font-bold tracking-wider uppercase pointer-events-none"
                    style={{
                      borderColor: `${frameGlowHex}55`,
                      color: primaryDerived.light
                    }}
                  >
                    #{idx + 1} {slot.title}
                  </div>

                  {/* Hover Upload Overlay */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerSlotUpload({ template: 't5', type: 'screenshot', index: idx });
                    }}
                    className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition backdrop-blur-[2px]"
                  >
                    <Upload className="w-8 h-8 text-amber-300 mb-1.5" />
                    <span className="text-xs font-bold text-slate-100 bg-slate-900/90 px-3 py-1 rounded-full border border-amber-400/50">
                      Ganti Foto #{idx + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROW 3: FOOTER WATERMARK / BADGE */}
        <div
          className={`py-2 px-5 rounded-xl flex items-center justify-between text-xs transition ${
            isRetro
              ? 'bg-slate-950/90 text-amber-300 border border-slate-900 font-mono shadow-md'
              : 'bg-slate-950/85 border text-slate-200 shadow-xl'
          }`}
          style={isRetro ? {} : { borderColor: `${primaryDerived.base}44` }}
        >
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-amber-400" />
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                setT5Data({ ...t5Data, footerBadge: e.currentTarget.textContent })
              }
              className="font-bold tracking-wider outline-none cursor-text uppercase"
            >
              {t5Data.footerBadge}
            </span>
          </div>

          <span className="font-extrabold text-amber-300 tracking-widest uppercase">
            JAGO GAMES STUDIO PC ULTRA
          </span>
        </div>
      </div>
    </div>
  );
}
