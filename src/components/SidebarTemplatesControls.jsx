import React from 'react';
import {
  Upload,
  Sparkles,
  RotateCcw,
  Plus,
  Trash2,
  Check,
  Cpu,
  Camera,
  HelpCircle
} from 'lucide-react';

import { GAME_SPECS_PRESETS, INITIAL_TEMPLATE_3 } from '../data/templatePresets';

// ============================================================================
// TEMPLATE 3 (Q & A) CONTROLS
// ============================================================================
export const Template3ImagesControls = ({
  t3Data,
  setT3Data,
  selectedSlot,
  setSelectedSlot,
  triggerSlotUpload,
  showToast
}) => (
  <div className="space-y-4">
    {/* Logo Brand Upload & Adjustment */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Logo Brand (Q&A)
        </h3>
        {setSelectedSlot && (
          <button
            onClick={() => setSelectedSlot({ template: 't3', type: 'logo' })}
            className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline"
          >
            Atur Posisi & Zoom
          </button>
        )}
      </div>
      <div className="flex gap-3 items-center">
        <div
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't3', type: 'logo' });
            triggerSlotUpload({ template: 't3', type: 'logo' });
          }}
          className={`w-16 h-16 rounded-xl border relative group cursor-pointer bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 ${
            selectedSlot?.template === 't3' && selectedSlot?.type === 'logo'
              ? 'border-amber-400 ring-2 ring-amber-400/30'
              : 'border-amber-500/40'
          }`}
        >
          {t3Data.logoCustom ? (
            <img src={t3Data.logoCustom} alt="Brand Logo" className="w-full h-full object-contain p-1" />
          ) : (
            <span className="text-[9px] font-luxury font-bold text-amber-200 text-center px-1">
              LOGO JAGO
            </span>
          )}
          <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
            <Upload className="w-4 h-4 text-amber-300" />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <button
            onClick={() => {
              if (setSelectedSlot) setSelectedSlot({ template: 't3', type: 'logo' });
              triggerSlotUpload({ template: 't3', type: 'logo' });
            }}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 transition"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Logo Brand</span>
          </button>
          <div className="flex items-center gap-2">
            {setSelectedSlot && (
              <button
                onClick={() => setSelectedSlot({ template: 't3', type: 'logo' })}
                className="flex-1 py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-amber-200 text-[11px] font-medium rounded-lg transition text-center"
              >
                Atur Posisi
              </button>
            )}
            {t3Data.logoCustom && (
              <button
                onClick={() =>
                  setT3Data({ ...t3Data, logoCustom: null, logoZoom: 1, logoX: 0, logoY: 0 })
                }
                className="py-1.5 px-2 text-slate-400 hover:text-red-400 text-[11px] transition"
              >
                Reset Logo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Background Kustom (Q&A) */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Background Kustom (Q&A)
        </h3>
        {t3Data.customBgOverlay && setSelectedSlot && (
          <button
            onClick={() => setSelectedSlot({ template: 't3', type: 'bgOverlay' })}
            className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline"
          >
            Atur Posisi & Zoom
          </button>
        )}
      </div>
      <p className="text-[11px] text-slate-400">
        Unggah foto latar belakang kustom untuk nuansa artboard yang lebih variatif:
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't3', type: 'bgOverlay' });
            triggerSlotUpload({ template: 't3', type: 'bgOverlay' });
          }}
          className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
        >
          <Upload className="w-3.5 h-3.5 text-amber-300" />
          <span>{t3Data.customBgOverlay ? 'Ganti Background' : 'Upload Background'}</span>
        </button>
        {t3Data.customBgOverlay && (
          <>
            {setSelectedSlot && (
              <button
                onClick={() => setSelectedSlot({ template: 't3', type: 'bgOverlay' })}
                className="py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
              >
                Atur
              </button>
            )}
            <button
              onClick={() => {
                setT3Data({ ...t3Data, customBgOverlay: null, bgZoom: 1, bgX: 0, bgY: 0 });
                showToast('Background kustom dihapus');
              }}
              className="px-3 py-2 rounded-xl bg-red-500/20 text-red-300 text-xs font-semibold hover:bg-red-500/30 transition"
            >
              Hapus
            </button>
          </>
        )}
      </div>
    </div>

    {/* Reset Default QA Button */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        Reset Pertanyaan
      </h3>
      <button
        onClick={() => {
          setT3Data({ ...t3Data, qas: INITIAL_TEMPLATE_3.qas });
          showToast('Daftar pertanyaan dikembalikan ke referensi awal');
        }}
        className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold flex items-center justify-center gap-2 transition"
      >
        <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
        <span>Reset ke 6 Pertanyaan Default</span>
      </button>
    </div>
  </div>
);

export const Template3TextsControls = ({ t3Data, setT3Data, showToast }) => {
  const addQA = () => {
    const newId = `qa-${Date.now()}`;
    setT3Data({
      ...t3Data,
      qas: [
        ...t3Data.qas,
        {
          id: newId,
          question: 'Pertanyaan Baru Anda?',
          answer: 'Jawaban detail penjelasan informasi di sini.'
        }
      ]
    });
    showToast('Pertanyaan baru ditambahkan!');
  };

  const removeQA = (idx) => {
    if (t3Data.qas.length <= 1) {
      showToast('Minimal harus ada 1 pertanyaan.');
      return;
    }
    const updated = t3Data.qas.filter((_, i) => i !== idx);
    setT3Data({ ...t3Data, qas: updated });
  };

  return (
    <div className="space-y-4">
      {/* Header Texts */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Judul & Header Q&A
        </h3>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Judul Utama</label>
          <input
            type="text"
            value={t3Data.mainTitle}
            onChange={(e) => setT3Data({ ...t3Data, mainTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Sub-Judul</label>
          <input
            type="text"
            value={t3Data.subTitle}
            onChange={(e) => setT3Data({ ...t3Data, subTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Badge Footer Bawah</label>
          <input
            type="text"
            value={t3Data.footerBadge}
            onChange={(e) => setT3Data({ ...t3Data, footerBadge: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400/50"
          />
        </div>
      </div>

      {/* List of Q&As */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Daftar Pertanyaan ({t3Data.qas.length})
          </h3>
          <button
            onClick={addQA}
            className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Tambah
          </button>
        </div>

        <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
          {t3Data.qas.map((qa, idx) => (
            <div
              key={qa.id || idx}
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 space-y-2 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-300">#{idx + 1} Pertanyaan</span>
                <button
                  onClick={() => removeQA(idx)}
                  className="text-slate-500 hover:text-red-400 transition p-1"
                  title="Hapus Pertanyaan"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <input
                type="text"
                value={qa.question}
                onChange={(e) => {
                  const updated = [...t3Data.qas];
                  updated[idx] = { ...qa, question: e.target.value };
                  setT3Data({ ...t3Data, qas: updated });
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-amber-100 focus:outline-none focus:border-amber-400/50"
                placeholder="Tulis pertanyaan..."
              />

              <textarea
                value={qa.answer}
                rows={3}
                onChange={(e) => {
                  const updated = [...t3Data.qas];
                  updated[idx] = { ...qa, answer: e.target.value };
                  setT3Data({ ...t3Data, qas: updated });
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400/50 resize-none leading-relaxed"
                placeholder="Tulis jawaban..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// TEMPLATE 4 (SYSTEM REQUIREMENTS) CONTROLS
// ============================================================================
export const Template4ImagesControls = ({
  t4Data,
  setT4Data,
  selectedSlot,
  setSelectedSlot,
  triggerSlotUpload,
  showToast
}) => (
  <div className="space-y-4">
    {/* 1-Click Game Presets */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        Preset Spesifikasi Game Populer
      </h3>
      <p className="text-[11px] text-slate-400 leading-snug">
        Pilih game untuk otomatis mengisi spesifikasi minimum & rekomendasi:
      </p>
      <div className="grid grid-cols-1 gap-2">
        {GAME_SPECS_PRESETS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setT4Data({
                ...t4Data,
                gameTitle: p.title,
                minimum: { ...p.minimum },
                recommended: { ...p.recommended }
              });
              showToast(`Spesifikasi ${p.name} diterapkan!`);
            }}
            className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition ${
              t4Data.gameTitle === p.title
                ? 'bg-amber-500/10 border-amber-400/50 text-amber-200'
                : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <span className="font-semibold text-xs">{p.name}</span>
            {t4Data.gameTitle === p.title && <Check className="w-3.5 h-3.5 text-amber-400" />}
          </button>
        ))}
      </div>
    </div>

    {/* Brand Logo Upload & Adjustment */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Logo Brand Poster
        </h3>
        {setSelectedSlot && (
          <button
            onClick={() => setSelectedSlot({ template: 't4', type: 'logo' })}
            className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline"
          >
            Atur Posisi & Zoom
          </button>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't4', type: 'logo' });
            triggerSlotUpload({ template: 't4', type: 'logo' });
          }}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition"
        >
          <Upload className="w-3.5 h-3.5 text-amber-300" />
          <span>Ganti Logo Brand</span>
        </button>
        {setSelectedSlot && (
          <button
            onClick={() => setSelectedSlot({ template: 't4', type: 'logo' })}
            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition ${
              selectedSlot?.template === 't4' && selectedSlot?.type === 'logo'
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-400/40'
                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}
          >
            Atur
          </button>
        )}
      </div>
      {t4Data.logoCustom && (
        <button
          onClick={() =>
            setT4Data({ ...t4Data, logoCustom: null, logoZoom: 1, logoX: 0, logoY: 0 })
          }
          className="w-full text-[11px] text-slate-400 hover:text-red-400 text-center transition"
        >
          Kembalikan ke Logo Default
        </button>
      )}
    </div>

    {/* Background Kustom (Spesifikasi) */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Background Kustom (Specs)
        </h3>
        {t4Data.customBgOverlay && setSelectedSlot && (
          <button
            onClick={() => setSelectedSlot({ template: 't4', type: 'bgOverlay' })}
            className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline"
          >
            Atur Posisi & Zoom
          </button>
        )}
      </div>
      <p className="text-[11px] text-slate-400">
        Pasang artwork background PC Game kesukaan Anda:
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't4', type: 'bgOverlay' });
            triggerSlotUpload({ template: 't4', type: 'bgOverlay' });
          }}
          className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
        >
          <Upload className="w-3.5 h-3.5 text-amber-300" />
          <span>{t4Data.customBgOverlay ? 'Ganti Background' : 'Upload Background'}</span>
        </button>
        {t4Data.customBgOverlay && (
          <>
            {setSelectedSlot && (
              <button
                onClick={() => setSelectedSlot({ template: 't4', type: 'bgOverlay' })}
                className="py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
              >
                Atur
              </button>
            )}
            <button
              onClick={() => {
                setT4Data({ ...t4Data, customBgOverlay: null, bgZoom: 1, bgX: 0, bgY: 0 });
                showToast('Background kustom dihapus');
              }}
              className="px-3 py-2 rounded-xl bg-red-500/20 text-red-300 text-xs font-semibold hover:bg-red-500/30 transition"
            >
              Hapus
            </button>
          </>
        )}
      </div>
    </div>
  </div>
);

export const Template4TextsControls = ({ t4Data, setT4Data }) => {
  const updateSpec = (type, field, val) => {
    setT4Data({
      ...t4Data,
      [type]: {
        ...t4Data[type],
        [field]: val
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Game Title & Footer Note */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Judul Game
        </h3>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Nama Judul Game</label>
          <input
            type="text"
            value={t4Data.gameTitle}
            onChange={(e) => setT4Data({ ...t4Data, gameTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400/50"
          />
        </div>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Catatan Bawah (Footer Note)</label>
          <input
            type="text"
            value={t4Data.footerNote}
            onChange={(e) => setT4Data({ ...t4Data, footerNote: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400/50"
          />
        </div>
      </div>

      {/* Minimum Requirements */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-2.5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          Minimum Requirements
        </h3>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">OS</label>
          <input
            type="text"
            value={t4Data.minimum.os}
            onChange={(e) => updateSpec('minimum', 'os', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Prosesor</label>
          <input
            type="text"
            value={t4Data.minimum.processor}
            onChange={(e) => updateSpec('minimum', 'processor', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Memori</label>
          <input
            type="text"
            value={t4Data.minimum.memory}
            onChange={(e) => updateSpec('minimum', 'memory', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Grafis</label>
          <input
            type="text"
            value={t4Data.minimum.graphics}
            onChange={(e) => updateSpec('minimum', 'graphics', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">DirectX</label>
          <input
            type="text"
            value={t4Data.minimum.directx}
            onChange={(e) => updateSpec('minimum', 'directx', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Jaringan</label>
          <input
            type="text"
            value={t4Data.minimum.network}
            onChange={(e) => updateSpec('minimum', 'network', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Penyimpanan</label>
          <input
            type="text"
            value={t4Data.minimum.storage}
            onChange={(e) => updateSpec('minimum', 'storage', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
      </div>

      {/* Recommended Requirements */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-2.5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Recommended Requirements
        </h3>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">OS</label>
          <input
            type="text"
            value={t4Data.recommended.os}
            onChange={(e) => updateSpec('recommended', 'os', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Prosesor</label>
          <input
            type="text"
            value={t4Data.recommended.processor}
            onChange={(e) => updateSpec('recommended', 'processor', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Memori</label>
          <input
            type="text"
            value={t4Data.recommended.memory}
            onChange={(e) => updateSpec('recommended', 'memory', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Grafis</label>
          <input
            type="text"
            value={t4Data.recommended.graphics}
            onChange={(e) => updateSpec('recommended', 'graphics', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">DirectX</label>
          <input
            type="text"
            value={t4Data.recommended.directx}
            onChange={(e) => updateSpec('recommended', 'directx', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Jaringan</label>
          <input
            type="text"
            value={t4Data.recommended.network}
            onChange={(e) => updateSpec('recommended', 'network', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-0.5">Penyimpanan</label>
          <input
            type="text"
            value={t4Data.recommended.storage}
            onChange={(e) => updateSpec('recommended', 'storage', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100"
          />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// TEMPLATE 5 (GAMEPLAY SCREENSHOTS) CONTROLS
// ============================================================================
export const Template5ImagesControls = ({
  t5Data,
  setT5Data,
  selectedSlot,
  setSelectedSlot,
  triggerSlotUpload,
  showToast
}) => (
  <div className="space-y-4">
    {/* 4 Screenshot Slots */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        4 Slot Screenshot (2x2 Grid)
      </h3>
      <div className="grid grid-cols-2 gap-2.5">
        {t5Data.screenshots.map((s, idx) => (
          <div key={s.id || idx} className="space-y-1">
            <div
              onClick={() => {
                setSelectedSlot({ template: 't5', type: 'screenshot', index: idx });
                triggerSlotUpload({ template: 't5', type: 'screenshot', index: idx });
              }}
              className={`aspect-[4/3] rounded-xl overflow-hidden border relative group cursor-pointer bg-slate-950 flex items-center justify-center transition ${
                selectedSlot?.template === 't5' && selectedSlot?.index === idx
                  ? 'border-amber-400 ring-2 ring-amber-400/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {s.image ? (
                <img src={s.image} alt={s.title} className="w-full h-full object-contain p-0.5" />
              ) : (
                <span className="text-[10px] text-slate-500 font-bold">SLOT #{idx + 1}</span>
              )}
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                <Upload className="w-4 h-4 text-amber-300" />
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <button
                onClick={() =>
                  setSelectedSlot({ template: 't5', type: 'screenshot', index: idx })
                }
                className="text-[10px] text-slate-400 hover:text-amber-300"
              >
                Atur #{idx + 1}
              </button>
              {s.image && (
                <button
                  onClick={() => {
                    const updated = [...t5Data.screenshots];
                    updated[idx] = { ...s, image: null };
                    setT5Data({ ...t5Data, screenshots: updated });
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

    {/* 1-Click Game Screenshot Presets */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        Preset Galeri Game
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {GAME_SPECS_PRESETS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setT5Data({
                ...t5Data,
                gameTitle: p.title,
                screenshots: p.screenshots.map((imgUrl, i) => ({
                  id: `ss-${i + 1}`,
                  title: `Scene ${i + 1}`,
                  image: imgUrl,
                  zoom: 1,
                  x: 0,
                  y: 0
                }))
              });
              showToast(`Galeri ${p.name} diterapkan!`);
            }}
            className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 text-left transition group"
          >
            <span className="text-[11px] font-semibold text-slate-300 group-hover:text-amber-200 block truncate">
              {p.name}
            </span>
          </button>
        ))}
      </div>
    </div>

    {/* Brand Logo & Background for Template 5 */}
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Logo Brand & Background Galeri
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't5', type: 'logo' });
            triggerSlotUpload({ template: 't5', type: 'logo' });
          }}
          className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
        >
          <Upload className="w-3.5 h-3.5 text-amber-300" />
          <span>Upload Logo</span>
        </button>
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't5', type: 'logo' });
          }}
          className="py-2 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
        >
          Atur Logo
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't5', type: 'bgOverlay' });
            triggerSlotUpload({ template: 't5', type: 'bgOverlay' });
          }}
          className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
        >
          <Upload className="w-3.5 h-3.5 text-amber-300" />
          <span>{t5Data.customBgOverlay ? 'Ganti BG' : 'Upload BG'}</span>
        </button>
        <button
          onClick={() => {
            if (setSelectedSlot) setSelectedSlot({ template: 't5', type: 'bgOverlay' });
          }}
          className="py-2 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
        >
          Atur BG
        </button>
      </div>
      {t5Data.customBgOverlay && (
        <button
          onClick={() => {
            setT5Data({ ...t5Data, customBgOverlay: null, bgZoom: 1, bgX: 0, bgY: 0 });
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

export const Template5TextsControls = ({ t5Data, setT5Data }) => (
  <div className="space-y-4">
    <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        Judul & Header Galeri
      </h3>
      <div>
        <label className="text-[11px] text-slate-400 block mb-1">Judul Utama</label>
        <input
          type="text"
          value={t5Data.mainTitle}
          onChange={(e) => setT5Data({ ...t5Data, mainTitle: e.target.value })}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400/50"
        />
      </div>
      <div>
        <label className="text-[11px] text-slate-400 block mb-1">Nama Judul Game</label>
        <input
          type="text"
          value={t5Data.gameTitle}
          onChange={(e) => setT5Data({ ...t5Data, gameTitle: e.target.value })}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400/50"
        />
      </div>
      <div>
        <label className="text-[11px] text-slate-400 block mb-1">Badge Footer</label>
        <input
          type="text"
          value={t5Data.footerBadge}
          onChange={(e) => setT5Data({ ...t5Data, footerBadge: e.target.value })}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400/50"
        />
      </div>
    </div>
  </div>
);

// ============================================================================
// TEMPLATE THEME STYLE SWITCHERS (TAB 3: GAYA & EFEK)
// ============================================================================
export const TemplateThemeStyleSelector = ({
  activeTemplate,
  t3Data,
  setT3Data,
  t4Data,
  setT4Data,
  t5Data,
  setT5Data,
  showToast
}) => {
  if (activeTemplate === 'template3') {
    return (
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Gaya Tampilan Q & A
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setT3Data({ ...t3Data, themeStyle: 'luxury' });
              showToast('Tema Jago Luxury Gold diterapkan');
            }}
            className={`p-3 rounded-xl border text-left transition ${
              t3Data.themeStyle === 'luxury'
                ? 'bg-amber-500/10 border-amber-400/50 text-amber-200'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="text-xs font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Jago Luxury
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Emas & Slate elegan khas Jago Games</p>
          </button>

          <button
            onClick={() => {
              setT3Data({ ...t3Data, themeStyle: 'darkPolygon' });
              showToast('Tema Dark Polygon Mesh diterapkan');
            }}
            className={`p-3 rounded-xl border text-left transition ${
              t3Data.themeStyle === 'darkPolygon'
                ? 'bg-sky-500/10 border-sky-400/50 text-sky-200'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="text-xs font-bold flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              Polygon Mesh
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Jaring kawat poligon seperti referensi</p>
          </button>
        </div>
      </div>
    );
  }

  if (activeTemplate === 'template4') {
    return (
      <div className="space-y-4">
        <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Gaya Tampilan Spesifikasi
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setT4Data({ ...t4Data, themeStyle: 'luxury' });
                showToast('Tema Jago Luxury Gold diterapkan');
              }}
              className={`p-3 rounded-xl border text-left transition ${
                t4Data.themeStyle === 'luxury'
                  ? 'bg-amber-500/10 border-amber-400/50 text-amber-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              <div className="text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Jago Luxury
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Gaya obsidian emas khas Jago Games</p>
            </button>

            <button
              onClick={() => {
                setT4Data({ ...t4Data, themeStyle: 'retroStripes' });
                showToast('Tema Retro Arcade Stripes diterapkan');
              }}
              className={`p-3 rounded-xl border text-left transition ${
                t4Data.themeStyle === 'retroStripes'
                  ? 'bg-pink-500/10 border-pink-400/50 text-pink-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              <div className="text-xs font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-pink-400" />
                Retro Stripes
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Garis diagonal warna-warni referensi</p>
            </button>
          </div>
        </div>

        {/* Hardware Badges Toggles */}
        <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Tampilkan Logo Hardware
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {['nvidia', 'ryzen', 'intel', 'rog'].map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={t4Data.hardwareLogos[brand]}
                  onChange={(e) =>
                    setT4Data({
                      ...t4Data,
                      hardwareLogos: {
                        ...t4Data.hardwareLogos,
                        [brand]: e.target.checked
                      }
                    })
                  }
                  className="accent-amber-400"
                />
                <span className="font-bold uppercase text-slate-300">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeTemplate === 'template5') {
    return (
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Gaya Tampilan Galeri Screenshot
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setT5Data({ ...t5Data, themeStyle: 'luxury' });
              showToast('Tema Jago Luxury Gold diterapkan');
            }}
            className={`p-3 rounded-xl border text-left transition ${
              t5Data.themeStyle === 'luxury'
                ? 'bg-amber-500/10 border-amber-400/50 text-amber-200'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="text-xs font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Jago Luxury
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Bingkai emas obsidian mewah</p>
          </button>

          <button
            onClick={() => {
              setT5Data({ ...t5Data, themeStyle: 'retroStripes' });
              showToast('Tema Retro Arcade Stripes diterapkan');
            }}
            className={`p-3 rounded-xl border text-left transition ${
              t5Data.themeStyle === 'retroStripes'
                ? 'bg-pink-500/10 border-pink-400/50 text-pink-200'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="text-xs font-bold flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-pink-400" />
              Retro Stripes
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Garis warna-warni & kamera pixel</p>
          </button>
        </div>
      </div>
    );
  }

  return null;
};
