import React from 'react';
import { ZoomIn, ZoomOut, X, LayoutGrid } from 'lucide-react';

export default function CanvasToolbar({
  showTips,
  setShowTips,
  zoom,
  setZoom,
  activeTemplate,
  t1Data,
  setT1Data
}) {
  const getFitZoom = () => {
    if (activeTemplate === 'template1') {
      const ratio = t1Data?.catalogRatio || '3:4';
      if (ratio === '16:9') return 0.70;
      if (ratio === '1:1') return 0.70;
      if (ratio === '2:1') return 0.64;
      return 0.68;
    }
    return 0.74;
  };

  const handleRatioChange = (ratio) => {
    if (!setT1Data) return;
    setT1Data((prev) => ({ ...prev, catalogRatio: ratio }));
    if (ratio === '3:4') setZoom(0.68);
    else if (ratio === '16:9') setZoom(0.70);
    else if (ratio === '1:1') setZoom(0.70);
    else if (ratio === '2:1') setZoom(0.64);
  };

  return (
    <div className="sticky top-2 z-30 flex items-center gap-3 bg-slate-900/85 backdrop-blur-md border border-slate-800/90 px-4 py-1.5 rounded-full mb-6 shadow-xl text-xs flex-wrap justify-center">
      {/* Template 1 Aspect Ratio Switcher */}
      {activeTemplate === 'template1' && (
        <div className="flex items-center gap-1 pr-2 border-r border-slate-800">
          <span className="text-[11px] text-slate-400 font-medium mr-1 hidden sm:inline-flex items-center gap-1">
            <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
            Rasio:
          </span>
          {[
            { id: '3:4', label: '3:4' },
            { id: '16:9', label: '16:9' },
            { id: '1:1', label: '1:1' },
            { id: '2:1', label: '2:1' }
          ].map((r) => {
            const active = (t1Data?.catalogRatio || '3:4') === r.id;
            return (
              <button
                key={r.id}
                onClick={() => handleRatioChange(r.id)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition ${
                  active
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
                title={`Ubah aspek rasio ke ${r.label}`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      )}

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
          onClick={() => setZoom(getFitZoom())}
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

