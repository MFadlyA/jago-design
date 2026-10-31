import React from 'react';
import { Palette, Sparkles, Upload } from 'lucide-react';
import TemplateColorControls from '../TemplateColorControls';
import { TemplateThemeStyleSelector } from '../SidebarTemplatesControls';

export default function SidebarPresetsTab({
  activeTemplate,
  colors,
  onChangeColors,
  onResetColors,
  t1Data,
  setT1Data,
  t2Data,
  setT2Data,
  t3Data,
  setT3Data,
  t4Data,
  setT4Data,
  t5Data,
  setT5Data,
  posterTheme,
  setPosterTheme,
  showParticles,
  setShowParticles,
  triggerSlotUpload,
  showToast
}) {
  const hasCustomBg =
    t1Data.customBgOverlay ||
    t2Data.customBgOverlay ||
    t3Data.customBgOverlay ||
    t4Data.customBgOverlay ||
    t5Data.customBgOverlay;

  const handleUploadBg = () => {
    let t = 't1';
    if (activeTemplate === 'template2') t = 't2';
    else if (activeTemplate === 'template3') t = 't3';
    else if (activeTemplate === 'template4') t = 't4';
    else if (activeTemplate === 'template5') t = 't5';
    triggerSlotUpload({ template: t, type: 'bgOverlay' });
  };

  const handleClearBg = () => {
    if (activeTemplate === 'template1') setT1Data({ ...t1Data, customBgOverlay: null });
    else if (activeTemplate === 'template2') setT2Data({ ...t2Data, customBgOverlay: null });
    else if (activeTemplate === 'template3') setT3Data({ ...t3Data, customBgOverlay: null });
    else if (activeTemplate === 'template4') setT4Data({ ...t4Data, customBgOverlay: null });
    else if (activeTemplate === 'template5') setT5Data({ ...t5Data, customBgOverlay: null });
    showToast('Background kustom dihapus');
  };

  return (
    <div className="space-y-4">
      {/* 1. Kustomisasi Warna Template (RGB) */}
      <TemplateColorControls
        activeTemplate={activeTemplate}
        colors={colors}
        onChangeColors={onChangeColors}
        onResetColors={onResetColors}
        showToast={showToast}
      />

      {/* Specific Template Style Selector */}
      <TemplateThemeStyleSelector
        activeTemplate={activeTemplate}
        t3Data={t3Data}
        setT3Data={setT3Data}
        t4Data={t4Data}
        setT4Data={setT4Data}
        t5Data={t5Data}
        setT5Data={setT5Data}
        showToast={showToast}
      />

      {/* Theme Palette Switcher */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Palet Warna Poster
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setPosterTheme('calm')}
            className={`p-3 rounded-xl border text-left transition ${
              posterTheme === 'calm'
                ? 'bg-amber-500/10 border-amber-400/40 text-amber-200'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="text-xs font-bold flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              Champagne Kalem
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-snug">
              Warna elegan, nyaman di mata, tidak menyilaukan.
            </p>
          </button>

          <button
            onClick={() => setPosterTheme('classic')}
            className={`p-3 rounded-xl border text-left transition ${
              posterTheme === 'classic'
                ? 'bg-amber-500/10 border-amber-400/40 text-amber-200'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="text-xs font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              Emas Klasik
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-snug">
              Emas kontras tinggi gaya poster asli.
            </p>
          </button>
        </div>
      </div>

      {/* Background Custom Upload */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Background Kustom (Opsional)
        </h3>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Unggah gambar latar belakang kustom jika Anda ingin mengganti tekstur bawaan:
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleUploadBg}
            className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" />
            Upload Background
          </button>
          {hasCustomBg && (
            <button
              onClick={handleClearBg}
              className="px-3 py-2 rounded-xl bg-red-500/20 text-red-300 text-xs font-semibold hover:bg-red-500/30 transition"
            >
              Hapus
            </button>
          )}
        </div>
      </div>

      {/* Particle Toggle */}
      <div className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4">
        <label className="flex items-center justify-between cursor-pointer">
          <div>
            <span className="text-xs font-semibold text-slate-200 block">
              Efek Atmosfer & Bara
            </span>
            <span className="text-[11px] text-slate-400">
              Tampilkan partikel kabut dan kilauan lembut
            </span>
          </div>
          <input
            type="checkbox"
            checked={showParticles}
            onChange={(e) => setShowParticles(e.target.checked)}
            className="accent-amber-400 w-4 h-4 rounded"
          />
        </label>
      </div>
    </div>
  );
}

