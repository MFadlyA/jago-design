import React from 'react';
import {
  Sparkles,
  Eye,
  Upload,
  Trash2,
  Image as ImageIcon
} from 'lucide-react';
import { PRESET_GAMES } from '../../constants/gamePresets';

export function Template1ImagesControls({
  t1Data,
  setT1Data,
  selectedSlot,
  setSelectedSlot,
  triggerSlotUpload,
  showToast
}) {
  const fillAllT1SampleImages = () => {
    setT1Data({
      ...t1Data,
      podiumSlots: t1Data.podiumSlots.map((s, idx) => ({
        ...s,
        image: PRESET_GAMES[idx % PRESET_GAMES.length].url,
        zoom: 1,
        x: 0,
        y: 0,
        fit: 'contain'
      })),
      categories: t1Data.categories.map((c, idx) => ({
        ...c,
        image: PRESET_GAMES[(idx + 2) % PRESET_GAMES.length].url,
        zoom: 1,
        x: 0,
        y: 0,
        fit: 'contain'
      }))
    });
    showToast('Semua slot poster diisi sampel game!');
  };

  const clearAllT1Images = () => {
    setT1Data({
      ...t1Data,
      podiumSlots: t1Data.podiumSlots.map((s) => ({
        ...s,
        image: null,
        zoom: 1,
        x: 0,
        y: 0,
        fit: 'contain'
      })),
      categories: t1Data.categories.map((c) => ({
        ...c,
        image: null,
        zoom: 1,
        x: 0,
        y: 0,
        fit: 'contain'
      }))
    });
    showToast('Tampilan slot dikembalikan ke Placeholder');
  };

  return (
    <div className="space-y-4">
      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={fillAllT1SampleImages}
          className="py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-amber-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Isi Contoh Game
        </button>
        <button
          onClick={clearAllT1Images}
          className="py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
        >
          <Eye className="w-3.5 h-3.5 text-slate-400" />
          Mode Placeholder
        </button>
      </div>

      {/* 4 Podium Slots */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            4 Bingkai Podium (Atas)
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedSlot({ template: 't1', type: 'centerpiece' })}
              className="text-[11px] text-amber-300 hover:text-amber-200 underline"
            >
              Atur PS5
            </button>
            <button
              onClick={() => triggerSlotUpload({ template: 't1', type: 'centerpiece' })}
              className="text-[11px] text-slate-400 hover:text-slate-200"
            >
              Ganti PS5
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {t1Data.podiumSlots.map((slot, idx) => (
            <div key={slot.id} className="space-y-1">
              <div
                onClick={() =>
                  triggerSlotUpload({ template: 't1', type: 'podium', index: idx })
                }
                className={`aspect-[3/4] rounded-xl overflow-hidden border relative group cursor-pointer bg-slate-950 flex items-center justify-center transition ${
                  selectedSlot?.type === 'podium' && selectedSlot?.index === idx
                    ? 'border-amber-400 ring-2 ring-amber-400/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {slot.image ? (
                  <img
                    src={slot.image}
                    alt={`Slot ${idx + 1}`}
                    className="w-full h-full object-contain p-0.5"
                  />
                ) : (
                  <span className="text-[10px] text-center font-luxury text-slate-500 px-1 font-bold">
                    SLOT #{idx + 1}
                  </span>
                )}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition backdrop-blur-[2px]">
                  <Upload className="w-4 h-4 text-amber-300" />
                </div>
              </div>
              <div className="flex items-center justify-between px-0.5">
                <button
                  onClick={() =>
                    setSelectedSlot({ template: 't1', type: 'podium', index: idx })
                  }
                  className={`text-[10px] font-semibold transition ${
                    selectedSlot?.type === 'podium' && selectedSlot?.index === idx
                      ? 'text-amber-300 underline'
                      : 'text-slate-400 hover:text-amber-200'
                  }`}
                >
                  Atur #{idx + 1}
                </button>
                {slot.image && (
                  <button
                    onClick={() => {
                      const updated = [...t1Data.podiumSlots];
                      updated[idx] = { ...slot, image: null };
                      setT1Data({ ...t1Data, podiumSlots: updated });
                    }}
                    className="text-slate-500 hover:text-red-400 transition"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Skewed Cards */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          3 Kartu Koleksi Game (Bawah)
        </h3>
        <div className="space-y-2.5">
          {t1Data.categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() =>
                setSelectedSlot({ template: 't1', type: 'category', index: idx })
              }
              className={`flex items-center gap-3 bg-slate-950/70 p-2.5 rounded-xl border transition cursor-pointer ${
                selectedSlot?.type === 'category' && selectedSlot?.index === idx
                  ? 'border-amber-400/60 ring-1 ring-amber-400/20'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  triggerSlotUpload({
                    template: 't1',
                    type: 'category',
                    index: idx
                  });
                }}
                className="w-12 aspect-[3/4] rounded-lg overflow-hidden border border-slate-700/60 relative group shrink-0 bg-slate-900 flex items-center justify-center"
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.line1}
                    className="w-full h-full object-contain p-0.5"
                  />
                ) : (
                  <ImageIcon className="w-4 h-4 text-slate-500" />
                )}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <Upload className="w-3.5 h-3.5 text-amber-200" />
                </div>
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={cat.line1}
                    onChange={(e) => {
                      const updated = [...t1Data.categories];
                      updated[idx] = { ...cat, line1: e.target.value };
                      setT1Data({ ...t1Data, categories: updated });
                    }}
                    placeholder="Baris 1"
                    className="w-full bg-slate-900 border border-slate-700/70 rounded-lg px-2 py-1 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
                  />
                  <input
                    type="text"
                    value={cat.line2}
                    onChange={(e) => {
                      const updated = [...t1Data.categories];
                      updated[idx] = { ...cat, line2: e.target.value };
                      setT1Data({ ...t1Data, categories: updated });
                    }}
                    placeholder="Baris 2"
                    className="w-24 bg-slate-900 border border-slate-700/70 rounded-lg px-2 py-1 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
                  />
                </div>
                <div className="flex items-center justify-between pt-0.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerSlotUpload({
                          template: 't1',
                          type: 'category',
                          index: idx
                        });
                      }}
                      className="text-[11px] font-medium text-amber-300 hover:underline flex items-center gap-1"
                    >
                      <Upload className="w-3 h-3" /> Upload #{idx + 1}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSlot({
                          template: 't1',
                          type: 'category',
                          index: idx
                        });
                      }}
                      className="text-[11px] font-medium text-slate-400 hover:text-amber-200"
                    >
                      Atur
                    </button>
                  </div>
                  {cat.image && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const updated = [...t1Data.categories];
                        updated[idx] = { ...cat, image: null };
                        setT1Data({ ...t1Data, categories: updated });
                      }}
                      className="text-[11px] text-slate-500 hover:text-red-400 transition"
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Brand & Background for Template 1 */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Logo Brand & Background (T1)
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setSelectedSlot({ template: 't1', type: 'logo' });
              triggerSlotUpload({ template: 't1', type: 'logo' });
            }}
            className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" />
            <span>Upload Logo</span>
          </button>
          <button
            onClick={() => setSelectedSlot({ template: 't1', type: 'logo' })}
            className="py-2 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
          >
            Atur Logo
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
          <button
            onClick={() => {
              setSelectedSlot({ template: 't1', type: 'bgOverlay' });
              triggerSlotUpload({ template: 't1', type: 'bgOverlay' });
            }}
            className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" />
            <span>{t1Data.customBgOverlay ? 'Ganti BG' : 'Upload BG'}</span>
          </button>
          <button
            onClick={() => setSelectedSlot({ template: 't1', type: 'bgOverlay' })}
            className="py-2 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
          >
            Atur BG
          </button>
        </div>
        {t1Data.customBgOverlay && (
          <button
            onClick={() => {
              setT1Data({ ...t1Data, customBgOverlay: null, bgZoom: 1, bgX: 0, bgY: 0 });
              showToast('Background kustom dihapus');
            }}
            className="w-full text-[11px] text-red-400 hover:underline text-center"
          >
            Hapus Background Kustom
          </button>
        )}
      </div>
    </div>
  );
}

export function Template1TextsControls({ t1Data, setT1Data }) {
  return (
    <>
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Judul & Header
        </h3>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">
            Judul Utama
          </label>
          <input
            type="text"
            value={t1Data.mainTitle}
            onChange={(e) => setT1Data({ ...t1Data, mainTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Sub-Judul</label>
          <input
            type="text"
            value={t1Data.subTitle}
            onChange={(e) => setT1Data({ ...t1Data, subTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">
              Judul Koleksi
            </label>
            <input
              type="text"
              value={t1Data.collectionTitle}
              onChange={(e) =>
                setT1Data({ ...t1Data, collectionTitle: e.target.value })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
            />
          </div>
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">
              Judul Lengkung
            </label>
            <input
              type="text"
              value={t1Data.whyTitle}
              onChange={(e) => setT1Data({ ...t1Data, whyTitle: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-2.5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          4 Poin Keunggulan (Kapsul)
        </h3>
        {t1Data.features.map((feat, idx) => (
          <input
            key={feat.id}
            type="text"
            value={feat.text}
            onChange={(e) => {
              const updated = [...t1Data.features];
              updated[idx] = { ...feat, text: e.target.value };
              setT1Data({ ...t1Data, features: updated });
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
          />
        ))}
        <div className="pt-2">
          <label className="text-[11px] text-slate-400 block mb-1">
            Teks Banner Bawah
          </label>
          <input
            type="text"
            value={t1Data.bannerText}
            onChange={(e) => setT1Data({ ...t1Data, bannerText: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">
            Teks Syarat & Ketentuan
          </label>
          <input
            type="text"
            value={t1Data.footerText}
            onChange={(e) => setT1Data({ ...t1Data, footerText: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-amber-400/50"
          />
        </div>
      </div>
    </>
  );
}

