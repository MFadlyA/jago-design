// ============================================================================
// COLOR UTILITIES & DEFAULT RGB PRESETS FOR TEMPLATES
// ============================================================================

export const clampRgb = (val) => {
  const num = parseInt(val, 10);
  if (isNaN(num)) return 0;
  return Math.max(0, Math.min(255, num));
};

export const componentToHex = (c) => {
  const hex = clampRgb(c).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

export const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const hexToRgb = (hex) => {
  if (!hex) return { r: 0, g: 0, b: 0 };
  let cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  if (cleanHex.length !== 6) return { r: 0, g: 0, b: 0 };
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
};

/**
 * Given an {r, g, b} color, computes a rich palette of derived shades:
 * - base: rgb string
 * - hex: hex string (#...)
 * - light: ~40% lighter towards white
 * - superLight: ~75% lighter towards white (specular highlight)
 * - dark: rich dark shade (~45% brightness)
 * - darker: deep shadow shade (~22% brightness)
 * - glow: rgba with 0.35 opacity
 * - glowStrong: rgba with 0.75 opacity
 * - glowSubtle: rgba with 0.15 opacity
 */
export const getDerivedColors = (rgb) => {
  if (!rgb) rgb = { r: 223, g: 189, b: 112 };
  const r = clampRgb(rgb.r);
  const g = clampRgb(rgb.g);
  const b = clampRgb(rgb.b);

  const light = {
    r: Math.round(r + (255 - r) * 0.4),
    g: Math.round(g + (255 - g) * 0.4),
    b: Math.round(b + (255 - b) * 0.4)
  };

  const superLight = {
    r: Math.round(r + (255 - r) * 0.75),
    g: Math.round(g + (255 - g) * 0.75),
    b: Math.round(b + (255 - b) * 0.75)
  };

  const dark = {
    r: Math.round(r * 0.45),
    g: Math.round(g * 0.45),
    b: Math.round(b * 0.45)
  };

  const darker = {
    r: Math.round(r * 0.22),
    g: Math.round(g * 0.22),
    b: Math.round(b * 0.22)
  };

  return {
    r,
    g,
    b,
    base: `rgb(${r}, ${g}, ${b})`,
    hex: rgbToHex(r, g, b),
    light: `rgb(${light.r}, ${light.g}, ${light.b})`,
    lightRgb: light,
    superLight: `rgb(${superLight.r}, ${superLight.g}, ${superLight.b})`,
    superLightRgb: superLight,
    dark: `rgb(${dark.r}, ${dark.g}, ${dark.b})`,
    darkRgb: dark,
    darker: `rgb(${darker.r}, ${darker.g}, ${darker.b})`,
    darkerRgb: darker,
    glow: `rgba(${r}, ${g}, ${b}, 0.35)`,
    glowStrong: `rgba(${r}, ${g}, ${b}, 0.75)`,
    glowSubtle: `rgba(${r}, ${g}, ${b}, 0.15)`
  };
};

// ============================================================================
// DEFAULT COLORS PER TEMPLATE (Exact current colors of the project)
// ============================================================================
export const DEFAULT_TEMPLATE_COLORS = {
  template1: {
    primary: { r: 223, g: 189, b: 112 }, // #dfbd70 (Champagne Gold)
    background: { r: 9, g: 13, b: 22 }   // #090d16 (Deep Slate Blue)
  },
  template2: {
    primary: { r: 223, g: 189, b: 112 }, // #dfbd70 (Champagne Gold)
    cardGlow: { r: 56, g: 189, b: 248 }, // #38bdf8 (Sky Cyan Glow)
    background: { r: 9, g: 13, b: 22 }   // #090d16
  },
  template3: {
    primary: { r: 223, g: 189, b: 112 }, // #dfbd70
    mesh: { r: 56, g: 189, b: 248 },     // #38bdf8 (Wireframe mesh accent)
    background: { r: 9, g: 13, b: 22 }   // #090d16
  },
  template4: {
    primary: { r: 223, g: 189, b: 112 }, // #dfbd70
    minSpec: { r: 6, g: 182, b: 212 },   // #06b6d4 (Cyan)
    recSpec: { r: 245, g: 158, b: 11 },  // #f59e0b (Amber/Gold)
    background: { r: 9, g: 13, b: 22 }   // #090d16
  },
  template5: {
    primary: { r: 223, g: 189, b: 112 },   // #dfbd70
    frameGlow: { r: 223, g: 189, b: 112 }, // #dfbd70
    background: { r: 9, g: 13, b: 22 }     // #090d16
  }
};

// Quick 1-click popular palette presets for convenience
export const QUICK_COLOR_PRESETS = [
  { name: 'Emas Default', rgb: { r: 223, g: 189, b: 112 }, hex: '#dfbd70', label: 'Emas' },
  { name: 'Cyber Cyan', rgb: { r: 56, g: 189, b: 248 }, hex: '#38bdf8', label: 'Cyan' },
  { name: 'Emerald Green', rgb: { r: 34, g: 197, b: 94 }, hex: '#22c55e', label: 'Hijau' },
  { name: 'Crimson Ruby', rgb: { r: 239, g: 68, b: 68 }, hex: '#ef4444', label: 'Merah' },
  { name: 'Royal Violet', rgb: { r: 168, g: 85, b: 247 }, hex: '#a855f7', label: 'Ungu' },
  { name: 'Sunset Amber', rgb: { r: 249, g: 115, b: 22 }, hex: '#f97316', label: 'Oranye' },
  { name: 'Silver Platinum', rgb: { r: 226, g: 232, b: 240 }, hex: '#e2e8f0', label: 'Perak' }
];

export const QUICK_BG_PRESETS = [
  { name: 'Navy Asli', rgb: { r: 9, g: 13, b: 22 }, hex: '#090d16' },
  { name: 'Hitam Pekat', rgb: { r: 5, g: 7, b: 12 }, hex: '#05070c' },
  { name: 'Midnight Blue', rgb: { r: 11, g: 18, b: 34 }, hex: '#0b1222' },
  { name: 'Dark Charcoal', rgb: { r: 18, g: 18, b: 20 }, hex: '#121214' },
  { name: 'Deep Purple', rgb: { r: 20, g: 11, b: 30 }, hex: '#140b1e' }
];

/**
 * Builds artboard CSS variables and styles for an active template.
 */
export const buildArtboardCssVars = (colors) => {
  if (!colors) return {};
  const primaryDerived = getDerivedColors(colors.primary || DEFAULT_TEMPLATE_COLORS.template1.primary);
  const bg = colors.background || { r: 9, g: 13, b: 22 };

  return {
    '--tmpl-primary': primaryDerived.base,
    '--tmpl-primary-hex': primaryDerived.hex,
    '--tmpl-primary-light': primaryDerived.light,
    '--tmpl-primary-superlight': primaryDerived.superLight,
    '--tmpl-primary-dark': primaryDerived.dark,
    '--tmpl-primary-darker': primaryDerived.darker,
    '--tmpl-primary-glow': primaryDerived.glow,
    '--tmpl-primary-glow-strong': primaryDerived.glowStrong,
    '--tmpl-primary-glow-subtle': primaryDerived.glowSubtle,
    '--tmpl-bg': `rgb(${bg.r}, ${bg.g}, ${bg.b})`,
    '--tmpl-bg-hex': rgbToHex(bg.r, bg.g, bg.b)
  };
};

