import React from 'react';
import {
  Move,
  ZoomIn,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Upload
} from 'lucide-react';
import { getTemplateSlotOptions } from '../../utils/slotAdjustments';

export default function PhotoAdjustmentBox({
  activeTemplate,
  selectedSlot,
  setSelectedSlot,
  activeAdjustments,
  triggerSlotUpload
}) {
  return (
    <div className="bg-amber-500/5 border border-amber-500/25 rounded-2xl p-3.5 space-y-3 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-amber-200 flex items-center gap-1.5">
          <Move className="w-3.5 h-3.5 text-amber-400" />
          Atur Posisi & Zoom Foto
        </span>
        {activeAdjustments && (
          <button
            onClick={() => activeAdjustments.onChange({ zoom: 1, x: 0, y: 0, fit: 'contain' })}
            className="text-[11px] font-semibold text-slate-400 hover:text-amber-300 underline"
          >
            Reset (100%)
          </button>
        )}
      </div>

      {/* Quick Slot Selector Chips */}
      <div className="space-y-1">
        <span className="text-[10px] text-slate-400 font-medium">Pilih Field Foto:</span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {getTemplateSlotOptions(activeTemplate).map((opt) => {
            const isSelected =
              selectedSlot?.type === opt.type &&
              (opt.index === undefined || selectedSlot?.index === opt.index);
            return (
              <button
                key={opt.id}
                onClick={() => {
                  const newSlot = { template: opt.template, type: opt.type };
                  if (opt.index !== undefined) newSlot.index = opt.index;
                  setSelectedSlot(newSlot);
                }}
                className={`px-2 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap transition shrink-0 ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold ring-2 ring-amber-400/40 shadow-sm'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeAdjustments ? (
        <div className="space-y-3 pt-1 border-t border-amber-500/15 text-[11px]">
          <div className="flex items-center justify-between bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800">
            <span className="text-slate-400 text-[10px]">Target:</span>
            <span className="font-semibold text-amber-300 text-[11px] truncate">
              {activeAdjustments.label}
            </span>
          </div>

          {/* Mode Rasio Foto: Contain vs Cover */}
          <div className="flex items-center justify-between bg-slate-950/70 p-2 rounded-xl border border-slate-800">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-300 font-semibold">Mode Rasio:</span>
              <span className="text-[9px] text-slate-400">
                {(activeAdjustments.fit ?? 'contain') === 'cover'
                  ? 'Isi Frame (tepi terpotong)'
                  : 'Rasio Utuh (tanpa dipotong)'}
              </span>
            </div>
            <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
              <button
                type="button"
                onClick={() => activeAdjustments.onChange({ fit: 'contain' })}
                className={`px-2 py-1 rounded text-[10px] font-bold transition ${
                  (activeAdjustments.fit ?? 'contain') === 'contain'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Tampilkan foto utuh tanpa dipotong"
              >
                Rasio Utuh
              </button>
              <button
                type="button"
                onClick={() => activeAdjustments.onChange({ fit: 'cover' })}
                className={`px-2 py-1 rounded text-[10px] font-bold transition ${
                  activeAdjustments.fit === 'cover'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Isi frame penuh (tepi foto mungkin terpotong)"
              >
                Isi Frame
              </button>
            </div>
          </div>

          {/* Zoom Control */}
          <div>
            <div className="flex justify-between items-center text-slate-400 mb-1">
              <span className="flex items-center gap-1 font-medium">
                <ZoomIn className="w-3 h-3 text-amber-400" />
                Zoom Foto
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    activeAdjustments.onChange({
                      zoom: Math.max(0.3, parseFloat((activeAdjustments.zoom - 0.1).toFixed(2)))
                    })
                  }
                  className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xs"
                  title="Perkecil (-10%)"
                >
                  -
                </button>
                <span className="font-mono text-slate-200 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">
                  {Math.round(activeAdjustments.zoom * 100)}%
                </span>
                <button
                  onClick={() =>
                    activeAdjustments.onChange({
                      zoom: Math.min(3.5, parseFloat((activeAdjustments.zoom + 0.1).toFixed(2)))
                    })
                  }
                  className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xs"
                  title="Perbesar (+10%)"
                >
                  +
                </button>
              </div>
            </div>
            <input
              type="range"
              min="0.3"
              max="3.5"
              step="0.02"
              value={activeAdjustments.zoom}
              onChange={(e) =>
                activeAdjustments.onChange({ zoom: parseFloat(e.target.value) })
              }
              className="w-full accent-amber-400"
            />
          </div>

          {/* Geser X & Y Sliders */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="flex justify-between text-slate-400 mb-1 text-[10px]">
                <span>Geser X</span>
                <span className="font-mono text-slate-300">{activeAdjustments.x}px</span>
              </div>
              <input
                type="range"
                min="-250"
                max="250"
                step="1"
                value={activeAdjustments.x}
                onChange={(e) =>
                  activeAdjustments.onChange({ x: parseInt(e.target.value, 10) })
                }
                className="w-full accent-amber-400"
              />
            </div>
            <div>
              <div className="flex justify-between text-slate-400 mb-1 text-[10px]">
                <span>Geser Y</span>
                <span className="font-mono text-slate-300">{activeAdjustments.y}px</span>
              </div>
              <input
                type="range"
                min="-250"
                max="250"
                step="1"
                value={activeAdjustments.y}
                onChange={(e) =>
                  activeAdjustments.onChange({ y: parseInt(e.target.value, 10) })
                }
                className="w-full accent-amber-400"
              />
            </div>
          </div>

          {/* Directional Nudge Buttons (D-Pad style) */}
          <div className="flex items-center justify-between bg-slate-950/70 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400">Geser Presisi (10px):</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  activeAdjustments.onChange({ x: (activeAdjustments.x || 0) - 10 })
                }
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                title="Geser Kiri"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() =>
                  activeAdjustments.onChange({ y: (activeAdjustments.y || 0) - 10 })
                }
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                title="Geser Atas"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() =>
                  activeAdjustments.onChange({ y: (activeAdjustments.y || 0) + 10 })
                }
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                title="Geser Bawah"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() =>
                  activeAdjustments.onChange({ x: (activeAdjustments.x || 0) + 10 })
                }
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                title="Geser Kanan"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => activeAdjustments.onChange({ x: 0, y: 0 })}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-300 font-semibold"
                title="Tengah"
              >
                Center
              </button>
            </div>
          </div>

          {/* Quick Upload Button for Active Slot */}
          <button
            onClick={() => triggerSlotUpload(selectedSlot)}
            className="w-full py-1.5 px-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-slate-950 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 hover:brightness-105 transition shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Ganti / Upload Foto di Slot Ini</span>
          </button>
        </div>
      ) : (
        <p className="text-[11px] text-slate-500 italic">
          Klik salah satu chip di atas untuk mengatur foto.
        </p>
      )}
    </div>
  );
}

