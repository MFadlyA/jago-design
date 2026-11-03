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

export default function Template1Catalog2x1({
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
      className="w-[1400px] h-[700px] relative overflow-hidden select-none flex flex-col justify-between px-8 py-5"
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
          className="absolute top-0 left-0 w-full h-[300px] brushed-metal-panel"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)'
          }}
        />

        {/* Warm Sunburst Behind PS5 Podium */}
        <div
          className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[580px] h-[260px] rounded-full blur-3xl opacity-75"
          style={{
            background: `radial-gradient(circle, ${activePrimaryDerived.glow} 0%, rgba(${currentColors.primary?.r ?? 223}, ${currentColors.primary?.g ?? 189}, ${currentColors.primary?.b ?? 112}, 0.2) 42%, transparent 70%)`
          }}
        />

        {/* Laser Lines */}
        <svg viewBox="0 0 1400 400" className="w-full h-[400px] absolute top-0 left-0 opacity-75">
          <defs>
            <linearGradient id="goldLaser2x1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={activePrimaryDerived.superLight} />
              <stop offset="50%" stopColor={activePrimaryDerived.base} />
              <stop offset="100%" stopColor={activePrimaryDerived.darker} />
            </linearGradient>
          </defs>
          <line x1="-20" y1="80" x2="380" y2="280" stroke="url(#goldLaser2x1)" strokeWidth="3" />
          <line x1="-20" y1="180" x2="320" y2="340" stroke="url(#goldLaser2x1)" strokeWidth="2" />
          <line x1="1420" y1="80" x2="980" y2="280" stroke="url(#goldLaser2x1)" strokeWidth="3" />
          <line x1="1420" y1="180" x2="1040" y2="340" stroke="url(#goldLaser2x1)" strokeWidth="2" />
          <line x1="0" y1="330" x2="1400" y2="330" stroke={activePrimaryDerived.base} strokeWidth="1" opacity="0.35" />
        </svg>

        {/* Atmospheric Particles */}
        {showParticles && (
          <>
            <div className="absolute bottom-[50px] left-[50px] w-[320px] h-[180px] bg-slate-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[50px] right-[80px] w-[340px] h-[160px] bg-slate-500/10 rounded-full blur-3xl" />
            <div
              className="absolute top-[130px] left-[350px] w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ color: activePrimaryDerived.light, backgroundColor: activePrimaryDerived.light }}
            />
            <div
              className="absolute top-[120px] right-[380px] w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
              style={{ color: activePrimaryDerived.base, backgroundColor: activePrimaryDerived.base }}
            />
          </>
        )}
      </div>

      {/* 3-COLUMN ULTRA-WIDE BANNER LAYOUT */}
      <div className="relative z-10 grid grid-cols-12 gap-6 items-center h-full">
        {/* ================= COLUMN 1: BRANDING & TITLES (Width ~360px) ================= */}
        <div className="col-span-3 flex flex-col justify-between h-[630px] py-2">
          {/* Logo Brand */}
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

          {/* Titles */}
          <div className="my-auto space-y-2">
            <h1
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setT1Data({ ...t1Data, mainTitle: e.currentTarget.textContent })}
              className="font-luxury font-extrabold text-[32px] tracking-[0.04em] gold-3d-heading uppercase leading-tight outline-none cursor-text transition"
            >
              {t1Data.mainTitle}
            </h1>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setT1Data({ ...t1Data, subTitle: e.currentTarget.textContent })}
              className="font-serif-title font-bold text-[18px] gold-subtitle-glow tracking-wide outline-none cursor-text transition"
            >
              {t1Data.subTitle}
            </p>
          </div>

          {/* Bottom Banner Plate inside Left Column */}
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="z-20 -mr-5 -my-2">
                <GoldenClockMedallion variant="t1" className="w-[74px] h-[74px]" primaryDerived={activePrimaryDerived} />
              </div>
              <div className="flex-1 gold-metallic-rim p-[2px] rounded-r-lg shadow-[0_8px_20px_rgba(0,0,0,0.95)]">
                <div className="gold-banner-plate rounded-r-[4px] py-2 pl-7 pr-3 text-center border border-amber-900/40">
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setT1Data({ ...t1Data, bannerText: e.currentTarget.textContent })}
                    className="font-serif-title font-black text-[20px] text-slate-950 tracking-wider uppercase leading-none outline-none cursor-text"
                  >
                    {t1Data.bannerText}
                  </div>
                </div>
              </div>
            </div>

            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setT1Data({ ...t1Data, footerText: e.currentTarget.textContent })}
              className="text-left font-serif-title text-[11.5px] text-amber-200/90 tracking-wide outline-none cursor-text"
            >
              {t1Data.footerText}
            </p>
          </div>
        </div>

        {/* ================= COLUMN 2: CENTER HERO PODIUM 4 GAME + PS5 (Width ~580px) ================= */}
        <div className="col-span-5 flex flex-col items-center justify-between h-[630px] py-2">
          {/* Top Ribbon */}
          <div className="w-full flex justify-center">
            <ReadyStockRibbon
              line1={t1Data.ribbonLine1}
              line2={t1Data.ribbonLine2}
              primaryDerived={activePrimaryDerived}
              onEditLine1={(v) => setT1Data({ ...t1Data, ribbonLine1: v })}
              onEditLine2={(v) => setT1Data({ ...t1Data, ribbonLine2: v })}
            />
          </div>

          {/* 4 Games & PS5 & Podium */}
          <div className="relative z-10 flex flex-col items-center justify-end h-[360px] w-full">
            <div className="relative z-20 flex items-end justify-center mb-[-18px]">
              {/* Slot #1 */}
              <div
                onClick={() => triggerSlotUpload({ template: 't1', type: 'podium', index: 0 })}
                className="w-[96px] h-[122px] gold-metallic-rim p-[2px] shadow-[0_10px_22px_rgba(0,0,0,0.95)] cursor-pointer group relative -mr-1 mb-1 transition-transform hover:-translate-y-1"
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
                        className={`w-full h-full relative z-10 ${(t1Data.podiumSlots[0].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                        style={{
                          transform: `scale(${t1Data.podiumSlots[0].zoom}) translate(${t1Data.podiumSlots[0].x}px, ${t1Data.podiumSlots[0].y}px)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="text-center px-1 select-none">
                      <div className="font-luxury font-bold text-[15px] text-amber-200 tracking-wider leading-none">IMAGE</div>
                      <div className="font-luxury text-[8.5px] text-amber-300/80 tracking-wider mt-1">SLOT #1</div>
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Upload className="w-4 h-4 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Slot #2 */}
              <div
                onClick={() => triggerSlotUpload({ template: 't1', type: 'podium', index: 1 })}
                className="w-[110px] h-[146px] gold-metallic-rim p-[2.5px] shadow-[0_12px_26px_rgba(0,0,0,0.95)] cursor-pointer group relative z-10 mb-2 transition-transform hover:-translate-y-1"
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
                        className={`w-full h-full relative z-10 ${(t1Data.podiumSlots[1].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                        style={{
                          transform: `scale(${t1Data.podiumSlots[1].zoom}) translate(${t1Data.podiumSlots[1].x}px, ${t1Data.podiumSlots[1].y}px)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="text-center px-1 select-none">
                      <div className="font-luxury font-bold text-[18px] text-amber-200 tracking-wider leading-none">IMAGE</div>
                      <div className="font-luxury text-[10px] text-amber-300/80 tracking-wider mt-1">SLOT #2</div>
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Upload className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Centerpiece PS5 */}
              {t1Data.showPs5Centerpiece && (
                <div
                  onClick={() => {
                    setSelectedSlot({ template: 't1', type: 'centerpiece' });
                    triggerSlotUpload({ template: 't1', type: 'centerpiece' });
                  }}
                  title="Atur PS5"
                  className="w-[165px] h-[225px] -mx-4 z-30 cursor-pointer relative group"
                  style={{
                    transform: `scale(${t1Data.centerpieceZoom ?? 1}) translate(${t1Data.centerpieceX ?? 0}px, ${t1Data.centerpieceY ?? 0}px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  {t1Data.customCenterpiece ? (
                    <img
                      src={t1Data.customCenterpiece}
                      alt="Centerpiece"
                      className="w-full h-full object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.95)]"
                    />
                  ) : (
                    <RealisticPS5Centerpiece />
                  )}
                </div>
              )}

              {/* Slot #3 */}
              <div
                onClick={() => triggerSlotUpload({ template: 't1', type: 'podium', index: 2 })}
                className="w-[110px] h-[146px] gold-metallic-rim p-[2.5px] shadow-[0_12px_26px_rgba(0,0,0,0.95)] cursor-pointer group relative z-10 mb-2 transition-transform hover:-translate-y-1"
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
                        className={`w-full h-full relative z-10 ${(t1Data.podiumSlots[2].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                        style={{
                          transform: `scale(${t1Data.podiumSlots[2].zoom}) translate(${t1Data.podiumSlots[2].x}px, ${t1Data.podiumSlots[2].y}px)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="text-center px-1 select-none">
                      <div className="font-luxury font-bold text-[18px] text-amber-200 tracking-wider leading-none">IMAGE</div>
                      <div className="font-luxury text-[10px] text-amber-300/80 tracking-wider mt-1">SLOT #3</div>
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Upload className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Slot #4 */}
              <div
                onClick={() => triggerSlotUpload({ template: 't1', type: 'podium', index: 3 })}
                className="w-[96px] h-[122px] gold-metallic-rim p-[2px] shadow-[0_10px_22px_rgba(0,0,0,0.95)] cursor-pointer group relative -ml-1 mb-1 transition-transform hover:-translate-y-1"
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
                        className={`w-full h-full relative z-10 ${(t1Data.podiumSlots[3].fit ?? 'contain') === 'cover' ? 'object-cover' : 'object-contain'}`}
                        style={{
                          transform: `scale(${t1Data.podiumSlots[3].zoom}) translate(${t1Data.podiumSlots[3].x}px, ${t1Data.podiumSlots[3].y}px)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="text-center px-1 select-none">
                      <div className="font-luxury font-bold text-[15px] text-amber-200 tracking-wider leading-none">IMAGE</div>
                      <div className="font-luxury text-[8.5px] text-amber-300/80 tracking-wider mt-1">SLOT #4</div>
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Upload className="w-4 h-4 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Tier Podium */}
            <div className="relative z-10 w-[520px] h-[82px]">
              <svg viewBox="0 0 560 100" className="w-full h-full drop-shadow-[0_16px_25px_rgba(0,0,0,1)]">
                <defs>
                  <linearGradient id="podiumCyl2x1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={activePrimaryDerived.darker} />
                    <stop offset="18%" stopColor={activePrimaryDerived.dark} />
                    <stop offset="36%" stopColor={activePrimaryDerived.superLight} />
                    <stop offset="50%" stopColor={activePrimaryDerived.dark} />
                    <stop offset="72%" stopColor={activePrimaryDerived.base} />
                    <stop offset="88%" stopColor={activePrimaryDerived.dark} />
                    <stop offset="100%" stopColor={activePrimaryDerived.darker} />
                  </linearGradient>
                  <linearGradient id="podiumTop2x1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={activePrimaryDerived.dark} />
                    <stop offset="50%" stopColor={activePrimaryDerived.superLight} />
                    <stop offset="100%" stopColor={activePrimaryDerived.dark} />
                  </linearGradient>
                </defs>
                <path d="M30 62 L530 62 L530 84 C530 95 30 95 30 84 Z" fill="url(#podiumCyl2x1)" />
                <ellipse cx="280" cy="62" rx="250" ry="11" fill="url(#podiumTop2x1)" stroke={activePrimaryDerived.base} strokeWidth="1" />
                <path d="M65 39 L495 39 L495 60 C495 70 65 70 65 60 Z" fill="url(#podiumCyl2x1)" />
                <ellipse cx="280" cy="39" rx="215" ry="9.5" fill="url(#podiumTop2x1)" stroke={activePrimaryDerived.base} strokeWidth="1" />
                <path d="M105 17 L455 17 L455 37 C455 46 105 46 105 37 Z" fill="url(#podiumCyl2x1)" />
                <ellipse cx="280" cy="17" rx="175" ry="8" fill="url(#podiumTop2x1)" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3: CARDS & KEUNGGULAN (Width ~460px) ================= */}
        <div className="col-span-4 flex flex-col justify-between h-[630px] py-2">
          {/* 3 Skewed Cards */}
          <div>
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setT1Data({ ...t1Data, collectionTitle: e.currentTarget.textContent })}
              className="font-luxury font-extrabold text-[19px] tracking-[0.05em] gold-3d-heading uppercase mb-2 outline-none cursor-text text-center"
            >
              {t1Data.collectionTitle}
            </h2>

            <div className="grid grid-cols-3 gap-2.5 w-full">
              {t1Data.categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className="skew-card-10 gold-metallic-rim p-[2px] rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.95)] relative group"
                >
                  <div className="w-full h-[160px] rounded-[6px] bg-gradient-to-b from-[#1e2330] via-[#101420] to-[#080b13] border border-amber-500/30 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute inset-0 carbon-dots-pattern opacity-40 pointer-events-none" />

                    {/* Card Image */}
                    <div
                      onClick={() => triggerSlotUpload({ template: 't1', type: 'category', index: idx })}
                      className="flex-1 relative overflow-hidden cursor-pointer flex flex-col items-center justify-center p-1.5"
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
                        <div className="unskew-card-10 flex flex-col items-center text-center select-none">
                          <GoldPlaceholderPictureIcon hasPlus={cat.hasPlusIcon} />
                          <span className="font-sans font-bold text-[8px] text-amber-100/90 tracking-wider uppercase mt-1">
                            UPLOAD
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                        <Upload className="w-4 h-4 text-amber-300" />
                      </div>
                    </div>

                    {/* Card Label */}
                    <div className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-1.5 pb-1 px-1 text-center">
                      <div className="unskew-card-10 flex flex-col items-center justify-center">
                        <div
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const updated = [...t1Data.categories];
                            updated[idx] = { ...cat, line1: e.currentTarget.textContent };
                            setT1Data({ ...t1Data, categories: updated });
                          }}
                          className="font-luxury font-bold text-[12px] gold-subtitle-glow tracking-wider uppercase leading-tight outline-none cursor-text truncate max-w-full"
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
                            className="font-luxury font-bold text-[11px] gold-subtitle-glow tracking-wider uppercase leading-tight outline-none cursor-text truncate max-w-full"
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

          {/* 4 Feature Capsules */}
          <div>
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setT1Data({ ...t1Data, whyTitle: e.currentTarget.textContent })}
              className="font-luxury font-extrabold text-[17px] tracking-[0.05em] gold-3d-heading uppercase mb-2 outline-none cursor-text text-center"
            >
              {t1Data.whyTitle}
            </h2>

            <div className="grid grid-cols-2 gap-2 w-full">
              {t1Data.features.map((feat, idx) => (
                <div
                  key={feat.id}
                  className="capsule-double-gold rounded-full px-3 py-1.5 flex items-center gap-1.5 relative overflow-hidden"
                >
                  <T1CapsuleGoldIcon type={feat.icon} />
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const updated = [...t1Data.features];
                      updated[idx] = { ...feat, text: e.currentTarget.textContent };
                      setT1Data({ ...t1Data, features: updated });
                    }}
                    className="font-luxury font-bold text-[12px] gold-subtitle-glow tracking-wider uppercase outline-none cursor-text truncate"
                  >
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

