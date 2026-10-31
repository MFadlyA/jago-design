import React from 'react';
import { Upload } from 'lucide-react';
import { PRESET_GAMES, DEFAULT_ENSHROUDED_SVG_DATA } from '../../constants/gamePresets';

export function Template2ImagesControls({
  t2Data,
  setT2Data,
  setSelectedSlot,
  triggerSlotUpload,
  showToast
}) {
  return (
    <div className="space-y-4">
      {/* Cover Box Game */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Cover Box Game (Template 2)
        </h3>
        <div className="flex gap-3.5 items-start">
          <div
            onClick={() => triggerSlotUpload({ template: 't2', type: 'cover' })}
            className="w-24 aspect-[3/4] rounded-xl overflow-hidden border border-sky-400/60 relative group cursor-pointer shrink-0 bg-slate-950"
          >
            <img
              src={t2Data.gameCover}
              alt="Cover"
              className="w-full h-full object-contain p-1"
            />
            <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
              <Upload className="w-5 h-5 text-amber-300" />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex gap-2">
              <button
                onClick={() => triggerSlotUpload({ template: 't2', type: 'cover' })}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Cover</span>
              </button>
              <button
                onClick={() => setSelectedSlot({ template: 't2', type: 'cover' })}
                className="py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
              >
                Atur
              </button>
            </div>

            <button
              onClick={() =>
                setT2Data({
                  ...t2Data,
                  gameCover: DEFAULT_ENSHROUDED_SVG_DATA,
                  gameTitle: 'ENSHROUDED',
                  gameSubtitle: 'SURVIVAL ACTION RPG',
                  coverZoom: 1,
                  coverX: 0,
                  coverY: 0
                })
              }
              className="w-full py-1.5 px-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 text-xs font-medium transition"
            >
              Reset ke Enshrouded
            </button>
          </div>
        </div>
      </div>

      {/* Logo Brand & Background for Template 2 */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Logo Brand & Background (T2)
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setSelectedSlot({ template: 't2', type: 'logo' });
              triggerSlotUpload({ template: 't2', type: 'logo' });
            }}
            className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" />
            <span>Upload Logo</span>
          </button>
          <button
            onClick={() => setSelectedSlot({ template: 't2', type: 'logo' })}
            className="py-2 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
          >
            Atur Logo
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
          <button
            onClick={() => {
              setSelectedSlot({ template: 't2', type: 'bgOverlay' });
              triggerSlotUpload({ template: 't2', type: 'bgOverlay' });
            }}
            className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" />
            <span>{t2Data.customBgOverlay ? 'Ganti BG' : 'Upload BG'}</span>
          </button>
          <button
            onClick={() => setSelectedSlot({ template: 't2', type: 'bgOverlay' })}
            className="py-2 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
          >
            Atur BG
          </button>
        </div>
        {t2Data.customBgOverlay && (
          <button
            onClick={() => {
              setT2Data({ ...t2Data, customBgOverlay: null, bgZoom: 1, bgX: 0, bgY: 0 });
              showToast('Background kustom dihapus');
            }}
            className="w-full text-[11px] text-red-400 hover:underline text-center"
          >
            Hapus Background Kustom
          </button>
        )}
      </div>

      {/* Quick Game Presets */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Preset Game Populer
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {PRESET_GAMES.map((g, i) => (
            <button
              key={i}
              onClick={() => {
                setT2Data({
                  ...t2Data,
                  gameCover: g.url,
                  gameTitle: g.title,
                  gameSubtitle: g.genre,
                  coverZoom: 1,
                  coverX: 0,
                  coverY: 0,
                  coverFit: 'contain'
                });
                showToast(`Preset ${g.name} diterapkan!`);
              }}
              className="group text-left rounded-xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition bg-slate-950"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={g.url}
                  alt={g.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-[10px] font-semibold text-slate-300 p-1.5 truncate">
                {g.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Template2TextsControls({ t2Data, setT2Data }) {
  return (
    <>
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Judul & Header Game
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Plakat Atas</label>
            <input
              type="text"
              value={t2Data.topPlaque}
              onChange={(e) => setT2Data({ ...t2Data, topPlaque: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
            />
          </div>
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Judul Poster</label>
            <input
              type="text"
              value={t2Data.mainTitle}
              onChange={(e) => setT2Data({ ...t2Data, mainTitle: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
            />
          </div>
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">
            Nama Judul Game
          </label>
          <input
            type="text"
            value={t2Data.gameTitle}
            onChange={(e) => setT2Data({ ...t2Data, gameTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Genre Game</label>
          <input
            type="text"
            value={t2Data.gameSubtitle}
            onChange={(e) => setT2Data({ ...t2Data, gameSubtitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400/50"
          />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-2.5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          4 Poin Fitur & Banner
        </h3>
        {t2Data.features.map((feat, idx) => (
          <div key={feat.id} className="flex gap-2">
            <input
              type="text"
              value={feat.text}
              onChange={(e) => {
                const updated = [...t2Data.features];
                updated[idx] = { ...feat, text: e.target.value };
                setT2Data({ ...t2Data, features: updated });
              }}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
            />
            {idx === 0 && (
              <input
                type="text"
                value={feat.highlight}
                onChange={(e) => {
                  const updated = [...t2Data.features];
                  updated[idx] = { ...feat, highlight: e.target.value };
                  setT2Data({ ...t2Data, features: updated });
                }}
                className="w-20 bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400/50 text-center"
              />
            )}
          </div>
        ))}

        <div className="pt-2">
          <label className="text-[11px] text-slate-400 block mb-1">
            Banner Bawah
          </label>
          <input
            type="text"
            value={t2Data.bannerText}
            onChange={(e) => setT2Data({ ...t2Data, bannerText: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400/50"
          />
        </div>
      </div>
    </>
  );
}

