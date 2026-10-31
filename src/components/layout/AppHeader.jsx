import React from 'react';
import {
  Gamepad2,
  Layers,
  HelpCircle,
  Cpu,
  Camera,
  Palette,
  RotateCcw,
  Download
} from 'lucide-react';

export default function AppHeader({
  activeTemplate,
  setActiveTemplate,
  setSelectedSlot,
  setZoom,
  setActiveSidebarTab,
  posterTheme,
  setPosterTheme,
  showToast,
  activePrimaryDerived,
  onResetTemplate,
  onDownloadPoster,
  isExporting
}) {
  return (
    <header className="h-16 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Brand / Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-200/20 to-amber-500/10 border border-amber-400/30 p-0.5 flex items-center justify-center shadow-sm">
          <Gamepad2 className="w-5 h-5 text-amber-300" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display font-bold text-base text-slate-100 tracking-tight">
              JAGO STUDIO
            </h1>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-amber-300/90 border border-amber-500/20">
              PRO CREATOR
            </span>
          </div>
          <p className="text-[11px] text-slate-400 hidden sm:block">
            Editor Poster & Banner Game Interaktif
          </p>
        </div>
      </div>

      {/* Template Switcher (Segmented Control) */}
      <div className="flex items-center bg-slate-950/70 p-1 rounded-xl border border-slate-800/80 overflow-x-auto max-w-full">
        <button
          onClick={() => {
            setActiveTemplate('template1');
            setSelectedSlot({ template: 't1', type: 'podium', index: 0 });
            setZoom(0.68);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeTemplate === 'template1'
              ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Katalog 4 Game</span>
          <span className="xl:hidden">Katalog</span>
        </button>
        <button
          onClick={() => {
            setActiveTemplate('template2');
            setSelectedSlot({ template: 't2', type: 'cover' });
            setZoom(0.74);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeTemplate === 'template2'
              ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Gamepad2 className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Single Showcase</span>
          <span className="xl:hidden">Single</span>
        </button>
        <button
          onClick={() => {
            setActiveTemplate('template3');
            setSelectedSlot({ template: 't3', type: 'logo' });
            setZoom(0.74);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeTemplate === 'template3'
              ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Q & A Info</span>
          <span className="xl:hidden">Q&A</span>
        </button>
        <button
          onClick={() => {
            setActiveTemplate('template4');
            setSelectedSlot({ template: 't4', type: 'logo' });
            setZoom(0.74);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeTemplate === 'template4'
              ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Spesifikasi PC</span>
          <span className="xl:hidden">Specs</span>
        </button>
        <button
          onClick={() => {
            setActiveTemplate('template5');
            setSelectedSlot({ template: 't5', type: 'screenshot', index: 0 });
            setZoom(0.74);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeTemplate === 'template5'
              ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Gameplay Galeri</span>
          <span className="xl:hidden">Galeri</span>
        </button>
      </div>

      {/* Actions Toolbar */}
      <div className="flex items-center gap-2.5">
        {/* Quick RGB Colors Button */}
        <button
          onClick={() => {
            setActiveSidebarTab('presets');
          }}
          title="Buka Kustomisasi Warna RGB Template"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 text-xs font-medium transition"
        >
          <div
            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
            style={{
              backgroundColor: activePrimaryDerived.hex,
              boxShadow: `0 0 6px ${activePrimaryDerived.hex}88`
            }}
          />
          <span className="hidden md:inline">Warna RGB</span>
        </button>

        {/* Quick Palette Mode Toggle */}
        <button
          onClick={() => {
            const next = posterTheme === 'calm' ? 'classic' : 'calm';
            setPosterTheme(next);
            showToast(
              next === 'calm'
                ? 'Warna Kalem: Champagne & Slate diaktifkan'
                : 'Warna Klasik: Emas Kontras Tinggi diaktifkan'
            );
          }}
          title="Ganti Palet Warna Poster"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 text-xs font-medium transition"
        >
          <Palette className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">
            {posterTheme === 'calm' ? 'Warna Kalem' : 'Emas Klasik'}
          </span>
        </button>

        {/* Reset Button */}
        <button
          onClick={onResetTemplate}
          title="Reset ke Template Awal"
          className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Download PNG Button */}
        <button
          onClick={onDownloadPoster}
          disabled={isExporting}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold text-xs bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-slate-950 hover:brightness-105 active:scale-95 transition shadow-[0_4px_16px_rgba(217,119,6,0.22)] disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isExporting ? 'Mengekspor HD...' : 'Download HD'}</span>
        </button>
      </div>
    </header>
  );
}

