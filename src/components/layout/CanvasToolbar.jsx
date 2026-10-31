import React from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

export default function CanvasToolbar({
  showTips,
  setShowTips,
  zoom,
  setZoom,
  activeTemplate
}) {
  return (
    <div className="sticky top-2 z-30 flex items-center gap-3 bg-slate-900/85 backdrop-blur-md border border-slate-800/90 px-4 py-1.5 rounded-full mb-6 shadow-xl text-xs">
      {showTips && (
        <div className="flex items-center gap-2 text-slate-300 hidden md:flex">
          <span className="text-amber-400 font-medium">✨ Tips:</span>
          <span>Klik langsung gambar atau teks pada poster untuk mengedit</span>
          <button
            onClick={() => setShowTips(false)}
            className="text-slate-500 hover:text-slate-300 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="h-3 w-[1px] bg-slate-800 mx-1" />
        </div>
      )}

      {/* Zoom Controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setZoom((z) => Math.max(0.4, +(z - 0.08).toFixed(2)))}
          className="p-1 hover:bg-slate-800 rounded-lg text-slate-300 transition"
          title="Perkecil"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <span className="font-mono text-slate-300 w-12 text-center text-xs font-medium">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={() => setZoom((z) => Math.min(1.2, +(z + 0.08).toFixed(2)))}
          className="p-1 hover:bg-slate-800 rounded-lg text-slate-300 transition"
          title="Perbesar"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Zoom Presets */}
      <div className="flex items-center gap-1 pl-1 border-l border-slate-800">
        <button
          onClick={() => setZoom(activeTemplate === 'template1' ? 0.68 : 0.74)}
          className="px-2 py-0.5 rounded-md text-[11px] text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
        >
          Fit
        </button>
        <button
          onClick={() => setZoom(1)}
          className="px-2 py-0.5 rounded-md text-[11px] text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
        >
          100%
        </button>
      </div>
    </div>
  );
}

