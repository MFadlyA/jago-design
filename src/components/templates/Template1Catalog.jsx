import React from 'react';
import { Upload } from 'lucide-react';
import {
  JagoGamesCrestLogo,
  ReadyStockRibbon,
  RealisticPS5Centerpiece,
  GoldPlaceholderPictureIcon,
  T1CapsuleGoldIcon,
  GoldenClockMedallion
} from '../badges';

export default function Template1Catalog({
  t1Data,
  setT1Data,
  posterRef,
  artboardCssVars,
  activePrimaryDerived,
  currentColors,
  showParticles,
  triggerSlotUpload,
  setSelectedSlot
}) {
  return (
    <div
      ref={posterRef}
      style={{ backgroundColor: artboardCssVars['--tmpl-bg'] || '#090d16' }}
      className="w-[900px] h-[1200px] relative overflow-hidden select-none flex flex-col justify-between px-9 pt-7 pb-6"
    >
      {/* Optional Custom Background Image */}
      {t1Data.customBgOverlay && (
        <img
          src={t1Data.customBgOverlay}
          alt="Custom Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            transform: `scale(${t1Data.bgZoom ?? 1}) translate(${t1Data.bgX ?? 0}px, ${t1Data.bgY ?? 0}px)`,
            transformOrigin: 'center center'
          }}
        />
      )}

      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Brushed Metal Wings */}
        <div
          className="absolute top-0 left-0 w-full h-[465px] brushed-metal-panel"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)'
          }}
        />

        {/* Warm Sunburst Behind PS5 & Podium */}
        <div
          className="absolute top-[135px] left-1/2 -translate-x-1/2 w-[640px] h-[340px] rounded-full blur-3xl opacity-75"
          style={{
            background: `radial-gradient(circle, ${activePrimaryDerived.glow} 0%, rgba(${currentColors.primary?.r ?? 223}, ${currentColors.primary?.g ?? 189}, ${currentColors.primary?.b ?? 112}, 0.2) 42%, transparent 70%)`
          }}
        />

        {/* Laser Lines */}
        <svg viewBox="0 0 900 500" className="w-full h-[500px] absolute top-0 left-0 opacity-80">
          <defs>
            <linearGradient id="goldLaser" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={activePrimaryDerived.superLight} />
              <stop offset="50%" stopColor={activePrimaryDerived.base} />
              <stop offset="100%" stopColor={activePrimaryDerived.darker} />
            </linearGradient>
          </defs>
          <line
            x1="-20"
            y1="125"
            x2="255"
            y2="375"
            stroke="url(#goldLaser)"
            strokeWidth="3"
          />
          <line
            x1="-20"
            y1="255"
            x2="215"
            y2="435"
            stroke="url(#goldLaser)"
            strokeWidth="2"
          />
          <line
            x1="920"
            y1="125"
            x2="645"
            y2="375"
            stroke="url(#goldLaser)"
            strokeWidth="3"
          />
          <line
            x1="920"
            y1="255"
            x2="685"
            y2="435"
            stroke="url(#goldLaser)"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="432"
            x2="900"
            y2="432"
            stroke={activePrimaryDerived.base}
            strokeWidth="1.2"
            opacity="0.5"
          />
        </svg>

        {/* Corner Accent */}
        <div
          className="absolute bottom-0 right-0 w-[320px] h-[220px]"
          style={{
            background: 'linear-gradient(135deg, transparent 48%, #0d121c 50%)',
            borderTop: `1.5px solid ${activePrimaryDerived.base}`
          }}
        />

        {/* Atmospheric Particles */}
        {showParticles && (
          <>
            <div className="absolute bottom-[110px] -left-16 w-[360px] h-[260px] bg-slate-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[95px] left-[220px] w-[420px] h-[180px] bg-slate-500/10 rounded-full blur-3xl" />
            <div
              className="absolute top-[220px] left-[235px] w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ color: activePrimaryDerived.light, backgroundColor: activePrimaryDerived.light }}
            />
            <div
              className="absolute top-[195px] right-[245px] w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
              style={{ color: activePrimaryDerived.base, backgroundColor: activePrimaryDerived.base }}
            />
            <div
              className="absolute top-[520px] left-[45px] w-2 h-2 rounded-full blur-[0.5px]"
              style={{ backgroundColor: activePrimaryDerived.base }}
            />
            <div
              className="absolute top-[640px] right-[35px] w-2.5 h-2.5 rounded-full shadow-[0_0_6px_currentColor]"
              style={{ color: activePrimaryDerived.light, backgroundColor: activePrimaryDerived.light }}
            />
          </>
        )}
      </div>

      {/* ROW 1: TOP HEADER */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <JagoGamesCrestLogo
            brandName={t1Data.brandName}
            customLogo={t1Data.logoCustom}
            logoZoom={t1Data.logoZoom}
            logoX={t1Data.logoX}
            logoY={t1Data.logoY}
            logoFit={t1Data.logoFit || 'contain'}
            primaryDerived={activePrimaryDerived}
            onClick={() => {
              setSelectedSlot({ template: 't1', type: 'logo' });
              triggerSlotUpload({ template: 't1', type: 'logo' });
            }}
          />

          <ReadyStockRibbon
            line1={t1Data.ribbonLine1}
            line2={t1Data.ribbonLine2}
            primaryDerived={activePrimaryDerived}
            onEditLine1={(v) => setT1Data({ ...t1Data, ribbonLine1: v })}
            onEditLine2={(v) => setT1Data({ ...t1Data, ribbonLine2: v })}
          />
        </div>

        {/* Center Main Titles */}
        <div className="text-center -mt-7">
          <h1
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              setT1Data({ ...t1Data, mainTitle: e.currentTarget.textContent })
            }
            className="font-luxury font-extrabold text-[48px] tracking-[0.04em] gold-3d-heading uppercase leading-none outline-none cursor-text transition"
          >
            {t1Data.mainTitle}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              setT1Data({ ...t1Data, subTitle: e.currentTarget.textContent })
            }
            className="font-serif-title font-bold text-[28px] gold-subtitle-glow tracking-wide mt-1 outline-none cursor-text transition"
          >
            {t1Data.subTitle}
          </p>
        </div>
      </div>

      {/* ROW 2: 3-TIER GOLD PODIUM + PS5 CENTERPIECE + 4 GAME SLOTS */}
      <div className="relative z-10 flex flex-col items-center justify-end h-[325px] -mt-1">
        <div className="relative z-20 flex items-end justify-center mb-[-22px]">
          {/* Slot #1 (Outer Left) */}
          <div
            onClick={() =>
              triggerSlotUpload({ template: 't1', type: 'podium', index: 0 })
            }
            className="w-[100px] h-[126px] gold-metallic-rim p-[2.5px] shadow-[0_10px_25px_rgba(0,0,0,0.95)] cursor-pointer group relative -mr-1 mb-1 transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
              {t1Data.podiumSlots[0].image ? (
                <>
                  {(t1Data.podiumSlots[0].fit ?? 'contain') === 'contain' && (
                    <img
                      src={t1Data.podiumSlots[0].image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                    />
                  )}
                  <img
                    src={t1Data.podiumSlots[0].image}
                    alt="Slot 1"
                    className={`w-full h-full relative z-10 transition-transform ${(t1Data.podiumSlots[0].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                    style={{
                      transform: `scale(${t1Data.podiumSlots[0].zoom}) translate(${t1Data.podiumSlots[0].x}px, ${t1Data.podiumSlots[0].y}px)`
                    }}
                  />
                </>
              ) : (
                <div className="text-center px-1 select-none">
                  <div className="font-luxury font-bold text-[17px] text-amber-200 tracking-wider leading-none">
                    IMAGE
                  </div>
                  <div className="font-luxury text-[9.5px] text-amber-300/80 tracking-wider mt-1">
                    PLACEHOLDER
                  </div>
                </div>
              )}
              <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Upload className="w-5 h-5 text-amber-300" />
              </div>
            </div>
          </div>

          {/* Slot #2 (Inner Left - Taller) */}
          <div
            onClick={() =>
              triggerSlotUpload({ template: 't1', type: 'podium', index: 1 })
            }
            className="w-[116px] h-[152px] gold-metallic-rim p-[3px] shadow-[0_12px_28px_rgba(0,0,0,0.95)] cursor-pointer group relative z-10 mb-2.5 transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
              {t1Data.podiumSlots[1].image ? (
                <>
                  {(t1Data.podiumSlots[1].fit ?? 'contain') === 'contain' && (
                    <img
                      src={t1Data.podiumSlots[1].image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                    />
                  )}
                  <img
                    src={t1Data.podiumSlots[1].image}
                    alt="Slot 2"
                    className={`w-full h-full relative z-10 transition-transform ${(t1Data.podiumSlots[1].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                    style={{
                      transform: `scale(${t1Data.podiumSlots[1].zoom}) translate(${t1Data.podiumSlots[1].x}px, ${t1Data.podiumSlots[1].y}px)`
                    }}
                  />
                </>
              ) : (
                <div className="text-center px-1 select-none">
                  <div className="font-luxury font-bold text-[20px] text-amber-200 tracking-wider leading-none">
                    IMAGE
                  </div>
                  <div className="font-luxury text-[11px] text-amber-300/80 tracking-wider mt-1">
                    PLACEHOLDER
                  </div>
                </div>
              )}
              <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Upload className="w-6 h-6 text-amber-300" />
              </div>
            </div>
          </div>

          {/* Centerpiece PS5 Console */}
          {t1Data.showPs5Centerpiece && (
            <div
              onClick={() => {
                setSelectedSlot({ template: 't1', type: 'centerpiece' });
                triggerSlotUpload({ template: 't1', type: 'centerpiece' });
              }}
              title="Klik untuk memilih & mengatur konsol tengah"
              className="w-[180px] h-[242px] -mx-5 z-30 cursor-pointer relative group"
              style={{
                transform: `scale(${t1Data.centerpieceZoom ?? 1}) translate(${t1Data.centerpieceX ?? 0}px, ${t1Data.centerpieceY ?? 0}px)`,
                transformOrigin: 'center center'
              }}
            >
              {t1Data.customCenterpiece ? (
                <img
                  src={t1Data.customCenterpiece}
                  alt="Centerpiece"
                  className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)]"
                />
              ) : (
                <RealisticPS5Centerpiece />
              )}
            </div>
          )}

          {/* Slot #3 (Inner Right - Taller) */}
          <div
            onClick={() =>
              triggerSlotUpload({ template: 't1', type: 'podium', index: 2 })
            }
            className="w-[114px] h-[146px] gold-metallic-rim p-[3px] shadow-[0_12px_28px_rgba(0,0,0,0.95)] cursor-pointer group relative z-10 mb-2 transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
              {t1Data.podiumSlots[2].image ? (
                <>
                  {(t1Data.podiumSlots[2].fit ?? 'contain') === 'contain' && (
                    <img
                      src={t1Data.podiumSlots[2].image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                    />
                  )}
                  <img
                    src={t1Data.podiumSlots[2].image}
                    alt="Slot 3"
                    className={`w-full h-full relative z-10 transition-transform ${(t1Data.podiumSlots[2].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                    style={{
                      transform: `scale(${t1Data.podiumSlots[2].zoom}) translate(${t1Data.podiumSlots[2].x}px, ${t1Data.podiumSlots[2].y}px)`
                    }}
                  />
                </>
              ) : (
                <div className="text-center px-1 select-none">
                  <div className="font-luxury font-bold text-[19px] text-amber-200 tracking-wider leading-none">
                    IMAGE
                  </div>
                  <div className="font-luxury text-[10.5px] text-amber-300/80 tracking-wider mt-1">
                    PLACEHOLDER
                  </div>
                </div>
              )}
              <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Upload className="w-6 h-6 text-amber-300" />
              </div>
            </div>
          </div>

          {/* Slot #4 (Outer Right) */}
          <div
            onClick={() =>
              triggerSlotUpload({ template: 't1', type: 'podium', index: 3 })
            }
            className="w-[98px] h-[126px] gold-metallic-rim p-[2.5px] shadow-[0_10px_25px_rgba(0,0,0,0.95)] cursor-pointer group relative -ml-1 mb-1 transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
              {t1Data.podiumSlots[3].image ? (
                <>
                  {(t1Data.podiumSlots[3].fit ?? 'contain') === 'contain' && (
                    <img
                      src={t1Data.podiumSlots[3].image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                    />
                  )}
                  <img
                    src={t1Data.podiumSlots[3].image}
                    alt="Slot 4"
                    className={`w-full h-full relative z-10 transition-transform ${(t1Data.podiumSlots[3].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                    style={{
                      transform: `scale(${t1Data.podiumSlots[3].zoom}) translate(${t1Data.podiumSlots[3].x}px, ${t1Data.podiumSlots[3].y}px)`
                    }}
                  />
                </>
              ) : (
                <div className="text-center px-1 select-none">
                  <div className="font-luxury font-bold text-[17px] text-amber-200 tracking-wider leading-none">
                    IMAGE
                  </div>
                  <div className="font-luxury text-[9.5px] text-amber-300/80 tracking-wider mt-1">
                    PLACEHOLDER
                  </div>
                </div>
              )}
              <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Upload className="w-5 h-5 text-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* 3-Tier Podium */}
        <div className="relative z-10 w-[560px] h-[94px]">
          <svg viewBox="0 0 560 100" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,1)]">
            <defs>
              <linearGradient id="podiumCylinder" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={activePrimaryDerived.darker} />
                <stop offset="18%" stopColor={activePrimaryDerived.dark} />
                <stop offset="36%" stopColor={activePrimaryDerived.superLight} />
                <stop offset="50%" stopColor={activePrimaryDerived.dark} />
                <stop offset="72%" stopColor={activePrimaryDerived.base} />
                <stop offset="88%" stopColor={activePrimaryDerived.dark} />
                <stop offset="100%" stopColor={activePrimaryDerived.darker} />
              </linearGradient>
              <linearGradient id="podiumTopSurface" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={activePrimaryDerived.dark} />
                <stop offset="50%" stopColor={activePrimaryDerived.superLight} />
                <stop offset="100%" stopColor={activePrimaryDerived.dark} />
              </linearGradient>
            </defs>

            <path
              d="M30 62 L530 62 L530 84 C530 95 30 95 30 84 Z"
              fill="url(#podiumCylinder)"
            />
            <ellipse
              cx="280"
              cy="62"
              rx="250"
              ry="11"
              fill="url(#podiumTopSurface)"
              stroke={activePrimaryDerived.base}
              strokeWidth="1"
            />

            <path
              d="M65 39 L495 39 L495 60 C495 70 65 70 65 60 Z"
              fill="url(#podiumCylinder)"
            />
            <ellipse
              cx="280"
              cy="39"
              rx="215"
              ry="9.5"
              fill="url(#podiumTopSurface)"
              stroke={activePrimaryDerived.base}
              strokeWidth="1"
            />

            <path
              d="M105 17 L455 17 L455 37 C455 46 105 46 105 37 Z"
              fill="url(#podiumCylinder)"
            />
            <ellipse
              cx="280"
              cy="17"
              rx="175"
              ry="8"
              fill="url(#podiumTopSurface)"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* ROW 3: KOLEKSI GAME TERPOPULER & 3 SKEWED CARDS */}
      <div className="relative z-10 flex flex-col items-center mt-1">
        <h2
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            setT1Data({ ...t1Data, collectionTitle: e.currentTarget.textContent })
          }
          className="font-luxury font-extrabold text-[33px] tracking-[0.05em] gold-3d-heading uppercase mb-3.5 outline-none cursor-text"
        >
          {t1Data.collectionTitle}
        </h2>

        <div className="grid grid-cols-3 gap-7 w-full px-6">
          {t1Data.categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="skew-card-10 gold-metallic-rim p-[3.5px] rounded-[14px] shadow-[0_18px_35px_rgba(0,0,0,0.95)] relative group"
            >
              <div className="w-2.5 h-10 bg-amber-100/70 blur-[3px] absolute -left-1 top-1/3 pointer-events-none" />
              <div className="w-2.5 h-10 bg-amber-100/70 blur-[3px] absolute -right-1 bottom-1/3 pointer-events-none" />

              <div className="w-full h-[270px] rounded-[10px] bg-gradient-to-b from-[#1e2330] via-[#101420] to-[#080b13] border border-amber-500/30 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 carbon-dots-pattern opacity-50 pointer-events-none" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(0,0,0,0.85) 100%)'
                  }}
                />

                {/* Card Image Slot */}
                <div
                  onClick={() =>
                    triggerSlotUpload({ template: 't1', type: 'category', index: idx })
                  }
                  className="flex-1 relative overflow-hidden cursor-pointer flex flex-col items-center justify-center p-3"
                >
                  {cat.image ? (
                    <>
                      {(cat.fit ?? 'contain') === 'contain' && (
                        <img
                          src={cat.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
                        />
                      )}
                      <img
                        src={cat.image}
                        alt={cat.line1}
                        className={`absolute inset-0 w-full h-full relative z-10 ${(cat.fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                        style={{
                          transform: `scale(${cat.zoom}) translate(${cat.x}px, ${cat.y}px)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="unskew-card-10 flex flex-col items-center text-center mt-3 select-none">
                      <GoldPlaceholderPictureIcon hasPlus={cat.hasPlusIcon} />
                      <p className="font-sans font-bold text-[10px] text-amber-100/90 tracking-wider uppercase leading-snug mt-2">
                        ISI GAMBAR DISINI /
                        <br />
                        INSERT IMAGE HERE
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <div className="unskew-card-10 flex flex-col items-center">
                      <Upload className="w-6 h-6 text-amber-300" />
                      <span className="text-[11px] font-bold text-white mt-1">
                        Ganti Foto
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Label */}
                <div className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-4 pb-3.5 px-2 text-center">
                  <div className="unskew-card-10 flex flex-col items-center justify-center min-h-[44px]">
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const updated = [...t1Data.categories];
                        updated[idx] = { ...cat, line1: e.currentTarget.textContent };
                        setT1Data({ ...t1Data, categories: updated });
                      }}
                      className="font-luxury font-bold text-[19px] gold-subtitle-glow tracking-wider uppercase leading-tight outline-none cursor-text"
                    >
                      {cat.line1}
                    </div>
                    {cat.line2 && (
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const updated = [...t1Data.categories];
                          updated[idx] = { ...cat, line2: e.currentTarget.textContent };
                          setT1Data({ ...t1Data, categories: updated });
                        }}
                        className="font-luxury font-bold text-[18px] gold-subtitle-glow tracking-wider uppercase leading-tight outline-none cursor-text"
                      >
                        {cat.line2}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 4: ARCHED TITLE & 4 CAPSULES */}
      <div className="relative z-10 flex flex-col items-center mt-1">
        <div className="w-full h-[54px] -mb-1 flex items-center justify-center">
          <svg viewBox="0 0 820 65" className="w-full h-full overflow-visible">
            <defs>
              <path id="whyArchCurve" d="M 40,56 Q 410,22 780,56" />
              <linearGradient id="archGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor={activePrimaryDerived.light} />
                <stop offset="80%" stopColor={activePrimaryDerived.base} />
                <stop offset="100%" stopColor={activePrimaryDerived.dark} />
              </linearGradient>
            </defs>
            <text
              fill="url(#archGoldGrad)"
              fontSize="33"
              fontWeight="800"
              fontFamily="Cinzel, serif"
              letterSpacing="2"
              textAnchor="middle"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.95))'
              }}
            >
              <textPath href="#whyArchCurve" startOffset="50%">
                {t1Data.whyTitle}
              </textPath>
            </text>
          </svg>
        </div>

        {/* 4 Feature Capsules */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 w-full px-3">
          {t1Data.features.map((feat, idx) => (
            <div
              key={feat.id}
              className="capsule-double-gold rounded-full px-5 py-2.5 flex items-center gap-3.5 relative overflow-hidden"
            >
              <div
                className="w-24 h-[1.5px] blur-[1px] absolute top-0 left-1/3 pointer-events-none"
                style={{ backgroundColor: activePrimaryDerived.light }}
              />
              <div
                className="w-24 h-[1.5px] blur-[1px] absolute bottom-0 right-1/3 pointer-events-none"
                style={{ backgroundColor: activePrimaryDerived.base }}
              />

              <T1CapsuleGoldIcon type={feat.icon} />

              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const updated = [...t1Data.features];
                  updated[idx] = { ...feat, text: e.currentTarget.textContent };
                  setT1Data({ ...t1Data, features: updated });
                }}
                className="font-luxury font-bold text-[19px] gold-subtitle-glow tracking-wider uppercase outline-none cursor-text"
              >
                {feat.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 5: BOTTOM BANNER WITH CLOCK MEDALLION & FOOTER */}
      <div className="relative z-10 mt-1">
        <div className="relative flex items-center">
          <div className="z-20 -mr-10 -my-3">
            <GoldenClockMedallion variant="t1" className="w-[118px] h-[118px]" primaryDerived={activePrimaryDerived} />
          </div>

          <div className="flex-1 gold-metallic-rim p-[3px] rounded-r-lg shadow-[0_12px_30px_rgba(0,0,0,0.95)]">
            <div className="gold-banner-plate rounded-r-[5px] py-4 pl-12 pr-6 text-center border border-amber-900/40">
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  setT1Data({ ...t1Data, bannerText: e.currentTarget.textContent })
                }
                className="font-serif-title font-black text-[34px] text-slate-950 tracking-wider uppercase leading-none outline-none cursor-text"
              >
                {t1Data.bannerText}
              </div>
            </div>
          </div>
        </div>

        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            setT1Data({ ...t1Data, footerText: e.currentTarget.textContent })
          }
          className="text-center font-serif-title text-[15.5px] text-amber-200/90 tracking-wide mt-2 outline-none cursor-text"
        >
          {t1Data.footerText}
        </p>
      </div>
    </div>
  );
}

