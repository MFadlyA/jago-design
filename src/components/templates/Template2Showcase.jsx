import React from 'react';
import { Upload } from 'lucide-react';
import {
  JagoGamesCrestLogo,
  ReadyStockRibbon,
  PlatformLogosStrip,
  GoldenCrownCircleMedallion,
  GoldenClockMedallion
} from '../badges';

export default function Template2Showcase({
  t2Data,
  setT2Data,
  posterRef,
  artboardCssVars,
  activePrimaryDerived,
  showParticles,
  triggerSlotUpload,
  setSelectedSlot
}) {
  return (
    <div
      ref={posterRef}
      style={{ backgroundColor: artboardCssVars['--tmpl-bg'] || '#090d16' }}
      className="w-[960px] h-[960px] relative overflow-hidden select-none bg-[#090d16] flex flex-col justify-between p-9"
    >
      {/* Optional Custom Background */}
      {t2Data.customBgOverlay && (
        <img
          src={t2Data.customBgOverlay}
          alt="Custom Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            transform: `scale(${t2Data.bgZoom ?? 1}) translate(${t2Data.bgX ?? 0}px, ${t2Data.bgY ?? 0}px)`,
            transformOrigin: 'center center'
          }}
        />
      )}

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg viewBox="0 0 960 960" className="w-full h-full absolute inset-0">
          <defs>
            <linearGradient id="curveGoldLine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={activePrimaryDerived ? activePrimaryDerived.light : "#f3deb0"} />
              <stop offset="50%" stopColor={activePrimaryDerived ? activePrimaryDerived.base : "#be9440"} />
              <stop offset="100%" stopColor={activePrimaryDerived ? activePrimaryDerived.dark : "#d4af37"} />
            </linearGradient>
          </defs>
          <path
            d="M 605,0 Q 475,450 695,860"
            fill="none"
            stroke="url(#curveGoldLine)"
            strokeWidth="2.5"
            opacity="0.75"
          />
          <line
            x1="735"
            y1="860"
            x2="960"
            y2="755"
            stroke="url(#curveGoldLine)"
            strokeWidth="2.5"
            opacity="0.75"
          />
        </svg>

        {/* Soft Blue Aura */}
        <div
          className="absolute top-[165px] left-[65px] w-[420px] h-[590px] rounded-xl blur-2xl opacity-60"
          style={{
            background: `radial-gradient(circle, ${t2Data.cardGlowColor}44 0%, transparent 72%)`
          }}
        />

        {/* Atmosphere Smoke & Sparks */}
        {showParticles && (
          <>
            <div className="absolute bottom-[105px] left-[20px] w-[580px] h-[220px] bg-slate-300/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[135px] left-[180px] w-[460px] h-[160px] bg-white/5 rounded-full blur-2xl" />
            <div className="absolute top-[270px] left-[26px] w-2.5 h-2.5 rounded-full bg-amber-300/80 shadow-[0_0_8px_#fde047]" />
            <div className="absolute top-[330px] left-[8px] w-3 h-4 rounded-full bg-amber-400/60 blur-[1px]" />
            <div className="absolute top-[450px] left-[515px] w-2 h-2 rounded-full bg-amber-300/80" />
          </>
        )}
      </div>

      {/* ROW 1: TOP HEADER */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <JagoGamesCrestLogo
            brandName={t2Data.brandName}
            customLogo={t2Data.logoCustom}
            logoZoom={t2Data.logoZoom}
            logoX={t2Data.logoX}
            logoY={t2Data.logoY}
            logoFit={t2Data.logoFit || 'contain'}
            primaryDerived={activePrimaryDerived}
            onClick={() => {
              setSelectedSlot({ template: 't2', type: 'logo' });
              triggerSlotUpload({ template: 't2', type: 'logo' });
            }}
            variant="square-box"
          />

          {/* Top Center Golden Trapezoid Plaque */}
          <div className="relative -mt-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
            <svg viewBox="0 0 290 66" className="w-[285px] h-[64px]">
              <defs>
                <linearGradient id="plaqueGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={activePrimaryDerived ? activePrimaryDerived.dark : "#7a5418"} />
                  <stop offset="30%" stopColor={activePrimaryDerived ? activePrimaryDerived.light : "#f3deb0"} />
                  <stop offset="50%" stopColor={activePrimaryDerived ? activePrimaryDerived.superLight : "#fffdfa"} />
                  <stop offset="70%" stopColor={activePrimaryDerived ? activePrimaryDerived.base : "#d4af37"} />
                  <stop offset="100%" stopColor={activePrimaryDerived ? activePrimaryDerived.darker : "#674712"} />
                </linearGradient>
              </defs>
              <path
                d="M 18,4 L 272,4 Q 284,4 280,16 L 262,54 Q 258,62 246,62 L 44,62 Q 32,62 28,54 L 10,16 Q 6,4 18,4 Z"
                fill="url(#plaqueGold)"
                stroke={activePrimaryDerived ? activePrimaryDerived.base : "#dfbd70"}
                strokeWidth="1.8"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pb-0.5">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  setT2Data({ ...t2Data, topPlaque: e.currentTarget.textContent })
                }
                className="font-serif-title font-black text-[25px] text-slate-950 tracking-wider uppercase outline-none cursor-text"
              >
                {t2Data.topPlaque}
              </span>
            </div>
          </div>

          <ReadyStockRibbon
            line1={t2Data.ribbonLine1}
            line2={t2Data.ribbonLine2}
            primaryDerived={activePrimaryDerived}
            onEditLine1={(v) => setT2Data({ ...t2Data, ribbonLine1: v })}
            onEditLine2={(v) => setT2Data({ ...t2Data, ribbonLine2: v })}
          />
        </div>

        {/* Main Title */}
        <div className="text-center -mt-3">
          <h1
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              setT2Data({ ...t2Data, mainTitle: e.currentTarget.textContent })
            }
            className="font-serif-title font-extrabold text-[46px] tracking-[0.04em] gold-3d-heading uppercase leading-none outline-none cursor-text"
          >
            {t2Data.mainTitle}
          </h1>
        </div>
      </div>

      {/* ROW 2: 2-COLUMN SHOWCASE */}
      <div className="relative z-10 grid grid-cols-12 gap-6 items-center flex-1 my-2">
        {/* Left Column: Game Cover Box */}
        <div className="col-span-6 flex justify-center pl-4">
          <div
            className="w-[390px] h-[560px] rounded-[4px] bg-[#0c101c] p-4 flex flex-col justify-between relative"
            style={{
              border: `2px solid ${t2Data.cardGlowColor}`,
              boxShadow: `0 0 24px ${t2Data.cardGlowColor}77, 0 0 6px ${t2Data.cardGlowColor}, inset 0 0 12px ${t2Data.cardGlowColor}22`
            }}
          >
            <div className="text-center pt-1 pb-2">
              <h2
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  setT2Data({ ...t2Data, gameTitle: e.currentTarget.textContent })
                }
                className="font-luxury font-black text-[38px] gold-3d-heading tracking-[0.04em] uppercase leading-none outline-none cursor-text"
              >
                {t2Data.gameTitle}
              </h2>
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  setT2Data({ ...t2Data, gameSubtitle: e.currentTarget.textContent })
                }
                style={{ color: activePrimaryDerived ? activePrimaryDerived.light : undefined }}
                className="font-luxury font-semibold text-[13px] text-amber-200 tracking-[0.26em] uppercase mt-2 outline-none cursor-text"
              >
                {t2Data.gameSubtitle}
              </p>
            </div>

            {/* Cover Artwork */}
            <div
              onClick={() => triggerSlotUpload({ template: 't2', type: 'cover' })}
              className="flex-1 rounded-[2px] overflow-hidden border border-slate-700/80 relative group cursor-pointer bg-slate-950 flex items-center justify-center"
            >
              {(t2Data.coverFit ?? 'contain') === 'contain' && (
                <img
                  src={t2Data.gameCover}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                />
              )}
              <img
                src={t2Data.gameCover}
                alt={t2Data.gameTitle}
                className={`w-full h-full relative z-10 transition-transform ${(t2Data.coverFit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                style={{
                  transform: `scale(${t2Data.coverZoom}) translate(${t2Data.coverX}px, ${t2Data.coverY}px)`
                }}
              />
              <div className="absolute inset-0 z-20 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                <Upload className="w-8 h-8 text-amber-300 mb-2" />
                <span className="text-xs font-semibold text-slate-100 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-amber-400/40">
                  Ganti Cover Game
                </span>
              </div>
            </div>

            <PlatformLogosStrip platforms={t2Data.platforms} />
          </div>
        </div>

        {/* Right Column: 4 Feature Capsules */}
        <div className="col-span-6 flex flex-col justify-center space-y-6 pr-2">
          {t2Data.features.map((feat, idx) => (
            <div
              key={feat.id}
              className="capsule-double-gold rounded-full px-7 py-5 flex items-center justify-between relative overflow-hidden"
            >
              <div className="w-28 h-[2px] bg-amber-100/80 blur-[1px] absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" />
              <div className="w-28 h-[2px] bg-amber-200/80 blur-[1px] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />

              <div
                className="w-32 h-full absolute left-1/3 skew-x-[-28deg] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)'
                }}
              />

              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const updated = [...t2Data.features];
                  updated[idx] = { ...feat, text: e.currentTarget.textContent };
                  setT2Data({ ...t2Data, features: updated });
                }}
                className="font-serif-title font-bold text-[22px] gold-subtitle-glow tracking-wider uppercase outline-none cursor-text"
              >
                {feat.text}
              </span>

              <div className="shrink-0 flex items-center">
                {idx === 0 && (
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const updated = [...t2Data.features];
                      updated[idx] = {
                        ...feat,
                        highlight: e.currentTarget.textContent
                      };
                      setT2Data({ ...t2Data, features: updated });
                    }}
                    className="font-luxury font-black text-[31px] gold-3d-heading tracking-tight outline-none cursor-text"
                  >
                    {feat.highlight}
                  </span>
                )}
                {idx === 1 && (
                  <svg viewBox="0 0 64 46" className="w-14 h-10" style={{ filter: `drop-shadow(0 0 8px ${activePrimaryDerived?.glow || 'rgba(223,189,112,0.4)'})` }}>
                    <g fill="none" stroke={activePrimaryDerived ? activePrimaryDerived.light : "#f3deb0"} strokeWidth="2.5">
                      <circle cx="32" cy="14" r="6" />
                      <path d="M20 36 C20 27 44 27 44 36 Z" />
                      <circle cx="16" cy="18" r="5" />
                      <path d="M6 38 C6 30 22 30 24 38 Z" />
                      <circle cx="48" cy="18" r="5" />
                      <path d="M40 38 C42 30 58 30 58 38 Z" />
                    </g>
                  </svg>
                )}
                {idx === 2 && (
                  <svg viewBox="0 0 50 50" className="w-12 h-12" style={{ filter: `drop-shadow(0 0 8px ${activePrimaryDerived?.glow || 'rgba(223,189,112,0.4)'})` }}>
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke={activePrimaryDerived ? activePrimaryDerived.light : "#f3deb0"}
                      strokeWidth="3"
                    />
                    <path
                      d="M16 25 L23 32 L38 15"
                      fill="none"
                      stroke={activePrimaryDerived ? activePrimaryDerived.light : "#f3deb0"}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {idx === 3 && (
                  <svg viewBox="0 0 50 54" className="w-12 h-12" style={{ filter: `drop-shadow(0 0 10px ${activePrimaryDerived?.glow || 'rgba(223,189,112,0.5)'})` }}>
                    <path
                      d="M25 4 L43 11 V25 C43 37 34 44 25 49 C16 44 7 37 7 25 V11 Z"
                      fill="none"
                      stroke={activePrimaryDerived ? activePrimaryDerived.light : "#f3deb0"}
                      strokeWidth="3.2"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 3: BOTTOM BANNER */}
      <div className="relative z-10 flex items-center h-[105px] mt-1">
        <div className="z-20 -ml-9 -mb-8 mr-[-45px]">
          <GoldenCrownCircleMedallion primaryDerived={activePrimaryDerived} />
        </div>

        <div className="flex-1 gold-metallic-rim p-[3px] rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
          <div className="gold-banner-plate rounded-[5px] py-5 pl-14 pr-16 text-center border border-amber-900/40">
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                setT2Data({ ...t2Data, bannerText: e.currentTarget.textContent })
              }
              className="font-serif-title font-black text-[33px] text-slate-950 tracking-wider uppercase leading-none outline-none cursor-text"
            >
              {t2Data.bannerText}
            </div>
          </div>
        </div>

        <div className="z-20 -ml-14 -mb-6">
          <GoldenClockMedallion variant="t2" className="w-[116px] h-[116px]" primaryDerived={activePrimaryDerived} />
        </div>
      </div>
    </div>
  );
}

