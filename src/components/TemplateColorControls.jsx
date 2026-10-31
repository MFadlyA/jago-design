import React, { useState } from 'react';
import {
  RotateCcw,
  Sparkles,
  SlidersHorizontal,
  Check,
  Pipette
} from 'lucide-react';
import {
  clampRgb,
  rgbToHex,
  hexToRgb,
  DEFAULT_TEMPLATE_COLORS,
  QUICK_COLOR_PRESETS,
  QUICK_BG_PRESETS
} from '../utils/colorUtils';

export default function TemplateColorControls({
  activeTemplate,
  colors,
  onChangeColors,
  onResetColors,
  showToast
}) {
  const currentDefaults = DEFAULT_TEMPLATE_COLORS[activeTemplate] || DEFAULT_TEMPLATE_COLORS.template1;
  const currentColors = { ...currentDefaults, ...(colors || {}) };

  // Determine available color targets for the active template
  const getTargetOptions = () => {
    switch (activeTemplate) {
      case 'template1':
        return [
          { key: 'primary', label: 'Warna Utama (Gold)', desc: 'Judul 3D, border rim, pita, podium' },
          { key: 'background', label: 'Background', desc: 'Warna dasar kanvas poster' }
        ];
      case 'template2':
        return [
          { key: 'primary', label: 'Warna Utama (Gold)', desc: 'Judul 3D, plakat, pita, badge' },
          { key: 'cardGlow', label: 'Glow Card Game', desc: 'Aura bercahaya & border cover game' },
          { key: 'background', label: 'Background', desc: 'Warna dasar kanvas poster' }
        ];
      case 'template3':
        return [
          { key: 'primary', label: 'Warna Utama', desc: 'Judul 3D, card border, bullet Q&A' },
          { key: 'mesh', label: 'Polygon Mesh', desc: 'Garis wireframe & node jaring teknologi' },
          { key: 'background', label: 'Background', desc: 'Warna dasar kanvas poster' }
        ];
      case 'template4':
        return [
          { key: 'primary', label: 'Warna Header', desc: 'Plakat judul & aksen luxury' },
          { key: 'minSpec', label: 'Min Specs (Cyan)', desc: 'Aksen panel Minimum Requirements' },
          { key: 'recSpec', label: 'Rec Specs (Gold)', desc: 'Aksen panel Recommended Requirements' },
          { key: 'background', label: 'Background', desc: 'Warna dasar kanvas poster' }
        ];
      case 'template5':
        return [
          { key: 'primary', label: 'Warna Utama', desc: 'Judul 3D, plakat, logo rim' },
          { key: 'frameGlow', label: 'Frame Glow', desc: 'Aksen border slot screenshot' },
          { key: 'background', label: 'Background', desc: 'Warna dasar kanvas poster' }
        ];
      default:
        return [
          { key: 'primary', label: 'Warna Utama', desc: 'Aksen warna template' },
          { key: 'background', label: 'Background', desc: 'Warna dasar' }
        ];
    }
  };

  const targets = getTargetOptions();
  const [selectedTargetKey, setSelectedTargetKey] = useState(targets[0]?.key || 'primary');

  // Ensure valid selected target
  const activeTargetKey = targets.some((t) => t.key === selectedTargetKey)
    ? selectedTargetKey
    : targets[0]?.key || 'primary';

  const activeColorRgb = currentColors[activeTargetKey] || currentDefaults[activeTargetKey] || { r: 223, g: 189, b: 112 };
  const defaultColorRgb = currentDefaults[activeTargetKey] || { r: 223, g: 189, b: 112 };

  const currentHex = rgbToHex(activeColorRgb.r, activeColorRgb.g, activeColorRgb.b);
  const defaultHex = rgbToHex(defaultColorRgb.r, defaultColorRgb.g, defaultColorRgb.b);

  const isColorDefault =
    activeColorRgb.r === defaultColorRgb.r &&
    activeColorRgb.g === defaultColorRgb.g &&
    activeColorRgb.b === defaultColorRgb.b;

  // Handle direct RGB channel change
  const handleRgbChange = (channel, value) => {
    const clamped = clampRgb(value);
    const updatedRgb = {
      ...activeColorRgb,
      [channel]: clamped
    };
    const nextColors = {
      ...currentColors,
      [activeTargetKey]: updatedRgb
    };
    onChangeColors(nextColors);
  };

  // Handle Hex or Color Picker change
  const handleHexChange = (hexValue) => {
    const rgb = hexToRgb(hexValue);
    const nextColors = {
      ...currentColors,
      [activeTargetKey]: rgb
    };
    onChangeColors(nextColors);
  };

  // Reset only the current active target
  const handleResetCurrentTarget = () => {
    const nextColors = {
      ...currentColors,
      [activeTargetKey]: { ...defaultColorRgb }
    };
    onChangeColors(nextColors);
    if (showToast) {
      showToast(`Warna ${targets.find((t) => t.key === activeTargetKey)?.label} di-reset ke default`);
    }
  };

  // Reset ALL colors of the active template
  const handleResetAllTemplateColors = () => {
    onResetColors();
    if (showToast) {
      showToast('Semua warna template berhasil dikembalikan ke default!');
    }
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-4 shadow-xl">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-300" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
              Kustomisasi Warna (RGB)
              <span className="text-[9px] font-normal px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25">
                Live
              </span>
            </h3>
            <p className="text-[10px] text-slate-400 leading-none mt-0.5">
              Atur nilai Red, Green, Blue atau gunakan color picker
            </p>
          </div>
        </div>

        {/* Reset All Colors Button */}
        <button
          type="button"
          onClick={handleResetAllTemplateColors}
          title="Kembalikan semua warna template ini ke default asli"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-amber-300 border border-amber-400/25 text-[11px] font-semibold transition active:scale-95 shrink-0"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Default</span>
        </button>
      </div>

      {/* TARGET COLOR SELECTOR PILLS */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Pilih Bagian Warna:
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {targets.map((target) => {
            const isSelected = target.key === activeTargetKey;
            const targetRgb = currentColors[target.key] || currentDefaults[target.key] || { r: 223, g: 189, b: 112 };
            const targetHex = rgbToHex(targetRgb.r, targetRgb.g, targetRgb.b);

            return (
              <button
                key={target.key}
                type="button"
                onClick={() => setSelectedTargetKey(target.key)}
                className={`flex items-center gap-2 p-2 rounded-xl text-left border transition text-xs ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-400/50 text-amber-200 shadow-sm ring-1 ring-amber-400/30'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/40 hover:text-white'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full border border-white/30 shadow-sm shrink-0"
                  style={{
                    backgroundColor: targetHex,
                    boxShadow: `0 0 8px ${targetHex}88`
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[11px] truncate leading-tight">
                    {target.label}
                  </div>
                  <div className="text-[9px] text-slate-400 font-mono truncate">
                    {targetHex.toUpperCase()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE COLOR PREVIEW & QUICK ACTIONS */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Native Color Picker trigger */}
          <div className="relative group cursor-pointer">
            <input
              type="color"
              value={currentHex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              title="Klik untuk memilih warna langsung"
            />
            <div
              className="w-10 h-10 rounded-xl border-2 border-white/20 shadow-lg flex items-center justify-center transition-transform group-hover:scale-105"
              style={{
                backgroundColor: currentHex,
                boxShadow: `0 0 16px ${currentHex}66`
              }}
            >
              <Pipette className="w-4 h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] opacity-80 group-hover:opacity-100" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-white uppercase tracking-wider">
                {currentHex}
              </span>
              <span className="text-[10px] text-amber-400/80 font-mono">
                rgb({activeColorRgb.r}, {activeColorRgb.g}, {activeColorRgb.b})
              </span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              {targets.find((t) => t.key === activeTargetKey)?.desc}
            </div>
          </div>
        </div>

        {/* Current vs Default badge */}
        {!isColorDefault ? (
          <button
            type="button"
            onClick={handleResetCurrentTarget}
            className="text-[10px] font-semibold text-amber-300 hover:text-amber-200 underline shrink-0 flex items-center gap-1"
            title={`Kembalikan ke warna default (${defaultHex})`}
          >
            <RotateCcw className="w-2.5 h-2.5" />
            Reset ({defaultHex})
          </button>
        ) : (
          <span className="text-[10px] font-semibold text-emerald-400/90 flex items-center gap-1 shrink-0">
            <Check className="w-3 h-3" /> Default
          </span>
        )}
      </div>

      {/* RGB CHANNELS: SLIDERS & NUMERIC INPUTS */}
      <div className="space-y-3 pt-1">
        {/* RED (R) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-red-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              Red (R)
            </span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="255"
                value={activeColorRgb.r}
                onChange={(e) => handleRgbChange('r', e.target.value)}
                className="w-14 bg-slate-950 border border-slate-700/80 rounded-lg px-2 py-0.5 text-center text-xs font-mono font-bold text-slate-100 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={activeColorRgb.r}
            onChange={(e) => handleRgbChange('r', e.target.value)}
            style={{
              background: `linear-gradient(to right, rgb(0, ${activeColorRgb.g}, ${activeColorRgb.b}), rgb(255, ${activeColorRgb.g}, ${activeColorRgb.b}))`
            }}
            className="w-full h-2.5 rounded-lg appearance-none cursor-pointer outline-none border border-slate-800"
          />
        </div>

        {/* GREEN (G) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Green (G)
            </span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="255"
                value={activeColorRgb.g}
                onChange={(e) => handleRgbChange('g', e.target.value)}
                className="w-14 bg-slate-950 border border-slate-700/80 rounded-lg px-2 py-0.5 text-center text-xs font-mono font-bold text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={activeColorRgb.g}
            onChange={(e) => handleRgbChange('g', e.target.value)}
            style={{
              background: `linear-gradient(to right, rgb(${activeColorRgb.r}, 0, ${activeColorRgb.b}), rgb(${activeColorRgb.r}, 255, ${activeColorRgb.b}))`
            }}
            className="w-full h-2.5 rounded-lg appearance-none cursor-pointer outline-none border border-slate-800"
          />
        </div>

        {/* BLUE (B) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-sky-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
              Blue (B)
            </span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="255"
                value={activeColorRgb.b}
                onChange={(e) => handleRgbChange('b', e.target.value)}
                className="w-14 bg-slate-950 border border-slate-700/80 rounded-lg px-2 py-0.5 text-center text-xs font-mono font-bold text-slate-100 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={activeColorRgb.b}
            onChange={(e) => handleRgbChange('b', e.target.value)}
            style={{
              background: `linear-gradient(to right, rgb(${activeColorRgb.r}, ${activeColorRgb.g}, 0), rgb(${activeColorRgb.r}, ${activeColorRgb.g}, 255))`
            }}
            className="w-full h-2.5 rounded-lg appearance-none cursor-pointer outline-none border border-slate-800"
          />
        </div>
      </div>

      {/* QUICK PRESET PALETTES */}
      <div className="space-y-2 pt-2 border-t border-slate-800/60">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Preset Warna Populer:
          </span>
          <span className="text-[9px] text-slate-500">1-Klik Terapkan</span>
        </div>

        {activeTargetKey === 'background' ? (
          <div className="grid grid-cols-5 gap-1.5">
            {QUICK_BG_PRESETS.map((preset) => {
              const isMatch =
                activeColorRgb.r === preset.rgb.r &&
                activeColorRgb.g === preset.rgb.g &&
                activeColorRgb.b === preset.rgb.b;
              return (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => {
                    const nextColors = {
                      ...currentColors,
                      background: { ...preset.rgb }
                    };
                    onChangeColors(nextColors);
                    if (showToast) showToast(`Background diubah ke ${preset.name}`);
                  }}
                  title={`${preset.name} (${preset.hex})`}
                  className={`p-1.5 rounded-lg border text-center transition flex flex-col items-center gap-1 ${
                    isMatch
                      ? 'border-amber-400 bg-amber-500/20 ring-1 ring-amber-400/40'
                      : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-md border border-white/20"
                    style={{ backgroundColor: preset.hex }}
                  />
                  <span className="text-[9px] font-semibold text-slate-300 truncate w-full text-center">
                    {preset.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-1">
            {QUICK_COLOR_PRESETS.map((preset) => {
              const isMatch =
                activeColorRgb.r === preset.rgb.r &&
                activeColorRgb.g === preset.rgb.g &&
                activeColorRgb.b === preset.rgb.b;
              return (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => {
                    const nextColors = {
                      ...currentColors,
                      [activeTargetKey]: { ...preset.rgb }
                    };
                    onChangeColors(nextColors);
                    if (showToast) showToast(`Warna ${preset.name} diterapkan`);
                  }}
                  title={`${preset.name} (${preset.hex})`}
                  className={`p-1 rounded-lg border text-center transition flex flex-col items-center gap-1 ${
                    isMatch
                      ? 'border-amber-400 bg-amber-500/20 ring-1 ring-amber-400/40'
                      : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                    style={{
                      backgroundColor: preset.hex,
                      boxShadow: isMatch ? `0 0 8px ${preset.hex}` : 'none'
                    }}
                  />
                  <span className="text-[8px] font-semibold text-slate-300 truncate w-full text-center">
                    {preset.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

