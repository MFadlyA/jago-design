import React from 'react';
import { DarkPolygonMeshOverlay } from './HardwareLogos';
import { HelpCircle, ShieldCheck } from 'lucide-react';
import { getDerivedColors, rgbToHex } from '../utils/colorUtils';


export default function Template3QA({
  t3Data,
  setT3Data,
  showParticles,
  posterRef,
  triggerSlotUpload,
  setSelectedSlot,
  JagoGamesCrestLogo,
  ReadyStockRibbon
}) {
  const isPolygon = t3Data.themeStyle === 'darkPolygon';

  const primaryDerived = getDerivedColors(t3Data.colors?.primary || { r: 223, g: 189, b: 112 });
  const meshRgb = t3Data.colors?.mesh || { r: 56, g: 189, b: 248 };
  const meshHex = rgbToHex(meshRgb.r, meshRgb.g, meshRgb.b);
  const bgRgb = t3Data.colors?.background || { r: 9, g: 13, b: 22 };
  const bgHex = rgbToHex(bgRgb.r, bgRgb.g, bgRgb.b);

  const updateQA = (index, field, value) => {
    const updated = [...t3Data.qas];
    updated[index] = { ...updated[index], [field]: value };
    setT3Data({ ...t3Data, qas: updated });
  };

  return (
    <div
      ref={posterRef}
      style={{ backgroundColor: bgHex }}
      className={`w-[960px] h-[960px] relative overflow-hidden select-none flex flex-col justify-between p-8`}
    >
      {/* Custom BG Overlay */}
      {t3Data.customBgOverlay && (
        <img
          src={t3Data.customBgOverlay}
          alt="Custom Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
          style={{
            transform: `scale(${t3Data.bgZoom ?? 1}) translate(${t3Data.bgX ?? 0}px, ${t3Data.bgY ?? 0}px)`,
            transformOrigin: 'center center'
          }}
        />
      )}

      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Wireframe Polygon Mesh Overlay */}
        <DarkPolygonMeshOverlay
          opacity={isPolygon ? 0.65 : 0.35}
          strokeColor={isPolygon ? meshHex : primaryDerived.base}
          nodeColor={isPolygon ? meshHex : primaryDerived.light}
        />

        {/* Top Brushed Metal Wing Banner */}
        <div
          className="absolute top-0 left-0 w-full h-[320px] brushed-metal-panel opacity-40"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)'
          }}
        />

        {/* Ambient Glow Center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full blur-3xl pointer-events-none opacity-40"
          style={{
            background: isPolygon
              ? `radial-gradient(circle, rgba(${meshRgb.r}, ${meshRgb.g}, ${meshRgb.b}, 0.25) 0%, transparent 70%)`
              : `radial-gradient(circle, ${primaryDerived.glow} 0%, transparent 70%)`
          }}
        />

        {/* Golden Laser Accents */}
        <svg viewBox="0 0 960 960" className="w-full h-full absolute inset-0 opacity-40">
          <line x1="40" y1="90" x2="280" y2="90" stroke={primaryDerived.base} strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="680" y1="90" x2="920" y2="90" stroke={primaryDerived.base} strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {showParticles && (
          <>
            <div
              className="absolute top-[160px] left-[70px] w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ color: primaryDerived.light, backgroundColor: primaryDerived.light }}
            />
            <div
              className="absolute top-[210px] right-[80px] w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ color: meshHex, backgroundColor: meshHex }}
            />
            <div
              className="absolute bottom-[140px] left-[90px] w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ color: primaryDerived.base, backgroundColor: primaryDerived.base }}
            />
            <div
              className="absolute bottom-[160px] right-[100px] w-2 h-2 rounded-full"
              style={{ backgroundColor: meshHex, opacity: 0.8 }}
            />
          </>
        )}
      </div>

      {/* ROW 1: HEADER WITH BRAND LOGO, 3D TITLE & RIBBON */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <JagoGamesCrestLogo
            brandName={t3Data.brandName}
            customLogo={t3Data.logoCustom}
            logoZoom={t3Data.logoZoom}
            logoX={t3Data.logoX}
            logoY={t3Data.logoY}
            logoFit={t3Data.logoFit || 'contain'}
            primaryDerived={primaryDerived}
            onClick={() => {
              if (setSelectedSlot) setSelectedSlot({ template: 't3', type: 'logo' });
              triggerSlotUpload({ template: 't3', type: 'logo' });
            }}
          />

          {/* Center 3D Plaque / Heading */}
          <div className="flex flex-col items-center -mt-2">
            <div className="relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)]">
              <div className="px-8 py-2 rounded-full gold-metallic-rim p-[2px] shadow-lg">
                <div
                  className="bg-slate-950/90 px-8 py-1.5 rounded-full flex items-center gap-3 border"
                  style={{ borderColor: `${primaryDerived.base}55` }}
                >
                  <HelpCircle className="w-6 h-6" style={{ color: primaryDerived.light }} />
                  <h1
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setT3Data({ ...t3Data, mainTitle: e.currentTarget.textContent })
                    }
                    className="font-luxury font-black text-[38px] gold-3d-heading tracking-[0.12em] uppercase leading-none outline-none cursor-text"
                  >
                    {t3Data.mainTitle}
                  </h1>
                </div>
              </div>
            </div>

            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                setT3Data({ ...t3Data, subTitle: e.currentTarget.textContent })
              }
              style={{ color: primaryDerived.light }}
              className="font-serif-title font-semibold text-[13px] tracking-[0.24em] uppercase mt-2 outline-none cursor-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              {t3Data.subTitle}
            </p>
          </div>

          <ReadyStockRibbon
            line1={t3Data.ribbonLine1}
            line2={t3Data.ribbonLine2}
            primaryDerived={primaryDerived}
            onEditLine1={(v) => setT3Data({ ...t3Data, ribbonLine1: v })}
            onEditLine2={(v) => setT3Data({ ...t3Data, ribbonLine2: v })}
          />
        </div>
      </div>

      {/* ROW 2: MAIN Q&A CENTRAL CARD (Elevated with Glassmorphism & Metallic Borders) */}
      <div className="relative z-10 flex-1 my-3 flex flex-col justify-center">
        <div
          className="w-full bg-[#0c111e]/90 backdrop-blur-md rounded-2xl p-6 border shadow-[0_20px_50px_rgba(0,0,0,0.95)] relative overflow-hidden"
          style={{ borderColor: `${primaryDerived.base}44` }}
        >
          {/* Subtle Top & Bottom Gold Edge Shimmer */}
          <div
            className="w-48 h-[2px] absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              background: `linear-gradient(to right, transparent, ${primaryDerived.light}, transparent)`
            }}
          />
          <div
            className="w-48 h-[2px] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              background: `linear-gradient(to right, transparent, ${primaryDerived.light}, transparent)`
            }}
          />

          {/* 6 Questions & Answers List */}
          <div className="space-y-4">
            {t3Data.qas.map((item, idx) => (
              <div
                key={item.id || idx}
                className="group relative pl-6 pr-3 py-1.5 rounded-xl border border-transparent hover:border-amber-500/25 hover:bg-slate-900/50 transition duration-150"
              >
                {/* Question Bullet Diamond */}
                <div
                  className="absolute left-1 top-2.5 w-2.5 h-2.5 rotate-45 shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${primaryDerived.light}, ${primaryDerived.base})`,
                    boxShadow: `0 0 6px ${primaryDerived.base}`
                  }}
                />

                {/* Question Line */}
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateQA(idx, 'question', e.currentTarget.textContent)}
                  style={{ color: primaryDerived.light }}
                  className="font-sans font-bold text-[17px] tracking-wide outline-none cursor-text leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                >
                  {item.question}
                </div>

                {/* Answer Line */}
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateQA(idx, 'answer', e.currentTarget.textContent)}
                  className="font-sans font-medium text-[14px] text-slate-200/95 leading-snug mt-1 outline-none cursor-text"
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 3: FOOTER BRAND SEAL & GUARANTEE BANNER */}
      <div className="relative z-10 flex items-center justify-between h-[65px] px-2">
        {/* Left Side: Guarantee Badge */}
        <div className="flex items-center gap-2" style={{ color: primaryDerived.light }}>
          <ShieldCheck className="w-5 h-5" style={{ color: primaryDerived.light }} />
          <span className="font-sans font-bold text-xs tracking-wider uppercase">
            GARANSI SEUMUR HIDUP
          </span>
        </div>

        {/* Center: Brand Pill */}
        <div className="gold-metallic-rim p-[1.5px] rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.8)]">
          <div className="bg-slate-950 px-6 py-2 rounded-full flex items-center gap-2">
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                setT3Data({ ...t3Data, footerBadge: e.currentTarget.textContent })
              }
              style={{ color: primaryDerived.light }}
              className="font-luxury font-bold text-[12.5px] tracking-[0.16em] uppercase outline-none cursor-text"
            >
              {t3Data.footerBadge}
            </span>
          </div>
        </div>

        {/* Right Side: Admin Support */}
        <div className="text-right">
          <span className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-widest block">
            JAGO STUDIO CS
          </span>
          <span
            className="font-sans font-black text-xs tracking-wider"
            style={{ color: primaryDerived.light }}
          >
            SUPPORT AKTIF 24/7
          </span>
        </div>
      </div>
    </div>
  );
}
