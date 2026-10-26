import React, { useState, useRef, useEffect } from 'react';
import {
  Upload,
  Download,
  Image as ImageIcon,
  Type,
  Sparkles,
  RotateCcw,
  Gamepad2,
  Layers,
  Wand2,
  ZoomIn,
  ZoomOut,
  Move,
  Trash2,
  CheckCircle2,
  Eye,
  Palette,
  X
} from 'lucide-react';

// ============================================================================
// PRESET GAME CATALOG (Artwork Default Enshrouded-style & Game Populer)
// ============================================================================
const PRESET_GAMES = [
  {
    name: 'Enshrouded',
    title: 'ENSHROUDED',
    genre: 'SURVIVAL ACTION RPG',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Black Myth: Wukong',
    title: 'BLACK MYTH',
    genre: 'ACTION RPG MYTHOLOGY',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Cyberpunk 2077',
    title: 'CYBERPUNK',
    genre: 'OPEN WORLD ACTION RPG',
    url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Elden Ring',
    title: 'ELDEN RING',
    genre: 'DARK FANTASY RPG',
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'God of War Ragnarök',
    title: 'GOD OF WAR',
    genre: 'NORSE MYTH ADVENTURE',
    url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'EA Sports FC 25',
    title: 'EA SPORTS FC',
    genre: 'FOOTBALL SIMULATION',
    url: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=85'
  }
];

// Default SVG Dark Fantasy Knight vs Glowing Blue Monster (Enshrouded-style)
const DEFAULT_ENSHROUDED_SVG_DATA = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" width="600" height="720">
  <defs>
    <radialGradient id="bgGlow" cx="65%" cy="38%" r="60%">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="45%" stop-color="#0f1c2e"/>
      <stop offset="100%" stop-color="#05080f"/>
    </radialGradient>
    <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="40%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <linearGradient id="woodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#784b2a"/>
      <stop offset="50%" stop-color="#4a2c18"/>
      <stop offset="100%" stop-color="#23140a"/>
    </linearGradient>
    <linearGradient id="armorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="600" height="720" fill="url(#bgGlow)"/>
  <ellipse cx="380" cy="360" rx="260" ry="180" fill="#38bdf8" opacity="0.08"/>
  <g opacity="0.85">
    <path d="M310 380 C290 260 330 160 410 150 C480 140 530 220 510 350 C490 420 460 470 310 380 Z" fill="#0b1524"/>
    <path d="M350 200 C280 120 220 140 190 190" stroke="#16263d" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M440 170 C480 90 540 110 570 160" stroke="#16263d" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M320 290 C250 260 220 310 200 350" stroke="#16263d" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M480 270 C540 250 570 290 580 340" stroke="#16263d" stroke-width="12" fill="none" stroke-linecap="round"/>
    <circle cx="388" cy="225" r="14" fill="url(#eyeGlow)"/>
    <circle cx="428" cy="222" r="14" fill="url(#eyeGlow)"/>
    <circle cx="388" cy="225" r="4" fill="#ffffff"/>
    <circle cx="428" cy="222" r="4" fill="#ffffff"/>
    <circle cx="515" cy="145" r="11" fill="url(#eyeGlow)"/>
    <circle cx="545" cy="142" r="11" fill="url(#eyeGlow)"/>
  </g>
  <g stroke="#29180d" stroke-width="8" fill="#3d2414">
    <rect x="35" y="160" width="18" height="360"/>
    <rect x="135" y="185" width="18" height="330"/>
    <rect x="20" y="210" width="160" height="16"/>
    <rect x="20" y="320" width="150" height="16"/>
    <line x1="45" y1="215" x2="140" y2="320" stroke="#4a2c18" stroke-width="10"/>
  </g>
  <g>
    <polygon points="10,550 590,520 590,710 10,710" fill="#170d06"/>
    <polygon points="20,565 560,530 580,565 30,605" fill="url(#woodGrad)" stroke="#170d06" stroke-width="3"/>
    <polygon points="15,610 575,570 590,615 25,660" fill="url(#woodGrad)" stroke="#170d06" stroke-width="3"/>
    <polygon points="30,660 585,620 595,675 40,715" fill="url(#woodGrad)" stroke="#170d06" stroke-width="3"/>
    <rect x="335" y="535" width="46" height="145" rx="4" fill="url(#woodGrad)" stroke="#170d06" stroke-width="3"/>
    <rect x="495" y="425" width="36" height="135" rx="3" fill="url(#woodGrad)" stroke="#170d06" stroke-width="3"/>
  </g>
  <g transform="translate(105, 255)">
    <path d="M55 75 C15 120 5 190 15 255 L115 255 Z" fill="#1e293b"/>
    <path d="M60 190 L130 195 L145 275 L105 280 L100 225 L50 235 Z" fill="url(#armorGrad)" stroke="#0f172a" stroke-width="3"/>
    <path d="M55 70 L135 75 L120 190 L50 185 Z" fill="url(#armorGrad)" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="52" cy="85" rx="26" ry="20" fill="url(#armorGrad)" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="135" cy="90" rx="24" ry="18" fill="url(#armorGrad)" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="98" cy="44" r="24" fill="#d6a887"/>
    <path d="M72 38 C72 14 124 14 124 38 C120 26 82 26 72 38 Z" fill="#1c1917"/>
    <line x1="15" y1="215" x2="85" y2="175" stroke="#784b2a" stroke-width="9" stroke-linecap="round"/>
    <rect x="4" y="195" width="22" height="38" rx="3" transform="rotate(-25 15 215)" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
  </g>
</svg>
`)}`;

// ============================================================================
// INITIAL DATA STATE FOR TEMPLATE 1 & TEMPLATE 2
// ============================================================================
const INITIAL_TEMPLATE_1 = {
  brandName: 'JAGO GAMES',
  logoCustom: null,
  customBgOverlay: null,
  ribbonLine1: 'READY',
  ribbonLine2: 'STOCK',
  mainTitle: 'GAME RESMI ORIGINAL',
  subTitle: 'Pilihan Terbaik, Garansi Terpercaya!',
  showPs5Centerpiece: true,
  customCenterpiece: null,
  podiumSlots: [
    { id: 'p1', image: null, zoom: 1, x: 0, y: 0 },
    { id: 'p2', image: null, zoom: 1, x: 0, y: 0 },
    { id: 'p3', image: null, zoom: 1, x: 0, y: 0 },
    { id: 'p4', image: null, zoom: 1, x: 0, y: 0 }
  ],
  collectionTitle: 'KOLEKSI GAME TERPOPULER',
  categories: [
    {
      id: 'cat1',
      line1: 'PC GAMES',
      line2: '(STEAM)',
      hasPlusIcon: true,
      image: null,
      zoom: 1,
      x: 0,
      y: 0
    },
    {
      id: 'cat2',
      line1: 'PLAYSTATION 5',
      line2: '',
      hasPlusIcon: false,
      image: null,
      zoom: 1,
      x: 0,
      y: 0
    },
    {
      id: 'cat3',
      line1: 'PLAYSTATION 4',
      line2: '',
      hasPlusIcon: false,
      image: null,
      zoom: 1,
      x: 0,
      y: 0
    }
  ],
  whyTitle: 'KENAPA HARUS DI JAGO GAMES?',
  features: [
    { id: 'f1', icon: 'shield-check', text: '100% ORIGINAL' },
    { id: 'f2', icon: 'headset-247', text: 'ADMIN SUPPORT 24/7' },
    { id: 'f3', icon: 'download-tray', text: 'FULL DLC & UPDATE' },
    { id: 'f4', icon: 'shield-split', text: 'GARANSI SEUMUR HIDUP' }
  ],
  bannerText: 'PROSES CEPAT TANPA RIBET',
  footerText: 'Syarat & Ketentuan Berlaku • Layanan Garansi Khusus Jago Games'
};

const INITIAL_TEMPLATE_2 = {
  brandName: 'JAGO GAMES',
  logoCustom: null,
  customBgOverlay: null,
  topPlaque: 'PC GAMES',
  ribbonLine1: 'READY',
  ribbonLine2: 'STOCK',
  mainTitle: 'GAME RESMI ORIGINAL',
  gameTitle: 'ENSHROUDED',
  gameSubtitle: 'SURVIVAL ACTION RPG',
  gameCover: DEFAULT_ENSHROUDED_SVG_DATA,
  coverZoom: 1,
  coverX: 0,
  coverY: 0,
  cardGlowColor: '#38bdf8',
  platforms: {
    ps5: true,
    xbox: true,
    pc: true,
    steam: true,
    epic: true,
    gog: true
  },
  features: [
    { id: 'sf1', text: 'ORIGINAL STEAM', highlight: '100%', icon: '100' },
    { id: 'sf2', text: 'BEBAS ANTRIAN', highlight: '', icon: 'users' },
    { id: 'sf3', text: 'FULL DLC', highlight: '', icon: 'check' },
    { id: 'sf4', text: 'GARANSI SEUMUR HIDUP', highlight: '', icon: 'shield' }
  ],
  bannerText: 'PROSES CEPAT TANPA RIBET'
};

// ============================================================================
// CUSTOM SVG ASSETS
// ============================================================================

// 1. Logo Bulat Jago Games
const JagoGamesCrestLogo = ({ brandName, customLogo, onClick, variant = 'circle' }) => {
  return (
    <div
      onClick={onClick}
      title="Klik untuk mengganti Logo Brand"
      className={`relative cursor-pointer group select-none transition-all duration-200 hover:scale-105 ${
        variant === 'square-box'
          ? 'w-[96px] h-[96px] bg-slate-950/90 p-1.5 rounded-lg border border-amber-500/30 shadow-2xl'
          : 'w-[98px] h-[98px]'
      }`}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)]">
        <defs>
          <linearGradient id="crestGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffdfa" />
            <stop offset="22%" stopColor="#f3deb0" />
            <stop offset="48%" stopColor="#9a722c" />
            <stop offset="74%" stopColor="#dfbd70" />
            <stop offset="100%" stopColor="#634515" />
          </linearGradient>
          <linearGradient id="crestGamepadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbf3d8" />
            <stop offset="50%" stopColor="#c59942" />
            <stop offset="100%" stopColor="#674712" />
          </linearGradient>
          <path id="jagoTextArc" d="M 21,64 A 39,39 0 1,1 99,64" />
        </defs>

        <circle cx="60" cy="60" r="56" fill="url(#crestGoldRim)" />
        <circle
          cx="60"
          cy="60"
          r="53"
          fill="none"
          stroke="#3d2a0d"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <circle cx="60" cy="60" r="49" fill="#090d16" stroke="url(#crestGoldRim)" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="43" fill="none" stroke="#b48c3b" strokeWidth="0.8" opacity="0.7" />

        {customLogo ? (
          <clipPath id="logoClip">
            <circle cx="60" cy="60" r="47" />
          </clipPath>
        ) : null}

        {customLogo ? (
          <image
            href={customLogo}
            x="13"
            y="13"
            width="94"
            height="94"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#logoClip)"
          />
        ) : (
          <>
            <text
              fill="url(#crestGoldRim)"
              fontSize="12.5"
              fontWeight="900"
              fontFamily="Cinzel, serif"
              letterSpacing="1.2"
              textAnchor="middle"
            >
              <textPath href="#jagoTextArc" startOffset="50%">
                {brandName}
              </textPath>
            </text>

            <g transform="translate(27, 47)">
              <path
                d="M14 10 C20 8 46 8 52 10 C60 13 65 28 60 37 C56 43 49 38 44 31 L22 31 C17 38 10 43 6 37 C1 28 6 13 14 10 Z"
                fill="url(#crestGamepadGrad)"
                stroke="#fef08a"
                strokeWidth="1"
              />
              <path d="M18 17 H22 V25 H18 Z M16 19 H24 V23 H16 Z" fill="#0f172a" />
              <circle cx="47" cy="17" r="1.8" fill="#0f172a" />
              <circle cx="51" cy="21" r="1.8" fill="#0f172a" />
              <circle cx="43" cy="21" r="1.8" fill="#0f172a" />
              <circle cx="47" cy="25" r="1.8" fill="#0f172a" />
              <circle cx="27" cy="27" r="4" fill="#382509" stroke="#dfbd70" strokeWidth="1" />
              <circle cx="39" cy="27" r="4" fill="#382509" stroke="#dfbd70" strokeWidth="1" />
            </g>
          </>
        )}
      </svg>
      <div className="absolute inset-0 rounded-full bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition backdrop-blur-sm">
        <Upload className="w-5 h-5 text-amber-200" />
      </div>
    </div>
  );
};

// 2. Top-Right Metallic Ribbon ("READY STOCK")
const ReadyStockRibbon = ({ line1, line2, onEditLine1, onEditLine2 }) => (
  <div className="relative w-[122px] h-[126px] -mt-8 mr-1 select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.9)]">
    <svg viewBox="0 0 130 135" className="w-full h-full">
      <defs>
        <linearGradient id="ribbonGoldBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7e5414" />
          <stop offset="22%" stopColor="#f3deb0" />
          <stop offset="48%" stopColor="#fffdfa" />
          <stop offset="72%" stopColor="#d8b870" />
          <stop offset="100%" stopColor="#5d3b0c" />
        </linearGradient>
        <linearGradient id="ribbonEdge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fefbf2" />
          <stop offset="50%" stopColor="#be9440" />
          <stop offset="100%" stopColor="#5d3b0c" />
        </linearGradient>
      </defs>
      <polygon
        points="8,0 122,0 122,130 65,108 8,130"
        fill="url(#ribbonGoldBody)"
        stroke="url(#ribbonEdge)"
        strokeWidth="2"
      />
      <polygon
        points="14,5 116,5 116,121 65,101 14,121"
        fill="none"
        stroke="#5d3b0c"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="116" cy="48" r="8" fill="#ffffff" filter="blur(5px)" opacity="0.6" />
    </svg>

    <div className="absolute inset-0 flex flex-col items-center justify-center pb-4 px-2 text-center">
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onEditLine1(e.currentTarget.textContent)}
        className="font-luxury font-black text-[21px] text-slate-950 tracking-wider leading-tight outline-none cursor-text"
      >
        {line1}
      </div>
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onEditLine2(e.currentTarget.textContent)}
        className="font-luxury font-black text-[21px] text-slate-950 tracking-wider leading-tight mt-0.5 outline-none cursor-text"
      >
        {line2}
      </div>
    </div>
  </div>
);

// 3. PS5 Console + Controller SVG
const RealisticPS5Centerpiece = () => (
  <svg
    viewBox="0 0 230 295"
    className="w-full h-full drop-shadow-[0_18px_24px_rgba(0,0,0,0.95)] select-none"
  >
    <defs>
      <linearGradient id="ps5LeftFin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="55%" stopColor="#f1f5f9" />
        <stop offset="85%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <linearGradient id="ps5RightFin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
      <linearGradient id="ps5CenterBlack" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="25%" stopColor="#090d16" />
        <stop offset="100%" stopColor="#020408" />
      </linearGradient>
      <linearGradient id="ps5BlueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="40%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    <ellipse cx="122" cy="266" rx="68" ry="12" fill="rgba(0,0,0,0.85)" />
    <ellipse cx="142" cy="260" rx="44" ry="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />

    <path
      d="M150 26 L186 42 L176 256 L146 258 Z"
      fill="url(#ps5RightFin)"
      stroke="#e2e8f0"
      strokeWidth="0.6"
    />
    <path
      d="M132 30 C150 30 172 38 175 45 L166 258 L130 258 Z"
      fill="url(#ps5CenterBlack)"
    />
    <path
      d="M136 36 L138 248"
      stroke="url(#ps5BlueGlow)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M168 45 L161 248"
      stroke="url(#ps5BlueGlow)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M96 42 C110 28 135 14 148 10 L143 260 C122 260 100 253 95 248 Z"
      fill="url(#ps5LeftFin)"
      stroke="#ffffff"
      strokeWidth="1"
    />
    <path d="M103 48 L108 46 L108 53 L103 54 Z" fill="#475569" opacity="0.65" />
    <path
      d="M174 140 C183 145 184 220 175 254 L166 256 L170 140 Z"
      fill="url(#ps5RightFin)"
    />
    <line x1="173" y1="158" x2="170" y2="242" stroke="#0f172a" strokeWidth="1.5" />

    {/* DualSense Controller */}
    <g transform="translate(18, 192)">
      <ellipse cx="56" cy="74" rx="48" ry="9" fill="rgba(0,0,0,0.85)" />
      <path
        d="M22 24 C26 10 38 8 56 8 C74 8 86 10 90 24 C96 44 102 64 92 71 C84 76 76 58 69 47 L43 47 C36 58 28 76 20 71 C10 64 16 44 22 24 Z"
        fill="url(#ps5LeftFin)"
        stroke="#cbd5e1"
        strokeWidth="1"
      />
      <path
        d="M20 71 C26 74 33 60 41 47 L71 47 C79 60 86 74 92 71 C86 58 80 40 74 36 C62 32 50 32 38 36 C32 40 26 58 20 71 Z"
        fill="#111827"
      />
      <path
        d="M39 10 L73 10 L69 26 L43 26 Z"
        fill="#f8fafc"
        stroke="#3b82f6"
        strokeWidth="0.9"
      />
      <path d="M29 19 H33 V27 H29 Z M27 21 H35 V25 H27 Z" fill="#94a3b8" />
      <circle cx="81" cy="19" r="1.8" fill="#94a3b8" />
      <circle cx="84" cy="23" r="1.8" fill="#94a3b8" />
      <circle cx="78" cy="23" r="1.8" fill="#94a3b8" />
      <circle cx="81" cy="27" r="1.8" fill="#94a3b8" />
      <circle cx="43" cy="36" r="6" fill="#090d16" stroke="#334155" strokeWidth="1.2" />
      <circle cx="69" cy="36" r="6" fill="#090d16" stroke="#334155" strokeWidth="1.2" />
      <circle cx="43" cy="36" r="3.5" fill="#1e293b" />
      <circle cx="69" cy="36" r="3.5" fill="#1e293b" />
    </g>
  </svg>
);

// 4. Placeholder Picture Icon
const GoldPlaceholderPictureIcon = ({ hasPlus = false }) => (
  <svg viewBox="0 0 90 75" className="w-16 h-14 drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]">
    <defs>
      <linearGradient id="iconGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffdfa" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8c6827" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="14"
      width="64"
      height="48"
      rx="6"
      fill="none"
      stroke="url(#iconGoldGrad)"
      strokeWidth="4"
    />
    <circle cx="30" cy="29" r="5.5" fill="url(#iconGoldGrad)" />
    <polygon points="16,56 33,38 47,56" fill="url(#iconGoldGrad)" />
    <polygon points="36,56 52,33 68,56" fill="url(#iconGoldGrad)" />

    {hasPlus && (
      <g>
        <circle cx="72" cy="14" r="11" fill="#0f172a" />
        <path
          d="M72 5 V23 M63 14 H81"
          stroke="url(#iconGoldGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </g>
    )}
  </svg>
);

// 5. Template 1 Capsule Icons
const T1CapsuleGoldIcon = ({ type }) => {
  return (
    <svg viewBox="0 0 44 44" className="w-9 h-9 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
      <defs>
        <linearGradient id="t1IconGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffdfa" />
          <stop offset="45%" stopColor="#dbc295" />
          <stop offset="100%" stopColor="#825c21" />
        </linearGradient>
      </defs>
      {type === 'shield-check' && (
        <>
          <path
            d="M22 4 L37 10 V21 C37 31 30 37 22 41 C14 37 7 31 7 21 V10 Z"
            fill="url(#t1IconGold)"
            stroke="#fef08a"
            strokeWidth="1.2"
          />
          <path
            d="M15 22 L20 27 L30 16"
            fill="none"
            stroke="#0f172a"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === 'headset-247' && (
        <>
          <path
            d="M9 24 V20 C9 12.8 14.8 7 22 7 C29.2 7 35 12.8 35 20 V24"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <rect x="6" y="21" width="6" height="11" rx="3" fill="url(#t1IconGold)" />
          <rect x="32" y="21" width="6" height="11" rx="3" fill="url(#t1IconGold)" />
          <path
            d="M35 30 C35 35 30 37 22 37"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <text
            x="22"
            y="26"
            textAnchor="middle"
            fill="url(#t1IconGold)"
            fontSize="9.5"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            24/7
          </text>
        </>
      )}
      {type === 'download-tray' && (
        <>
          <path
            d="M22 7 V27 M14 20 L22 28 L30 20"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 29 V36 H36 V29"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === 'shield-split' && (
        <>
          <path
            d="M22 4 L37 10 V21 C37 31 30 37 22 41 C14 37 7 31 7 21 V10 Z"
            fill="url(#t1IconGold)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          <path
            d="M22 6 V39 C15 35 9 30 9 21 V11.5 Z"
            fill="#5b3b0d"
            opacity="0.45"
          />
        </>
      )}
    </svg>
  );
};

// 6. Golden Clock Medallion
const GoldenClockMedallion = ({ variant = 't1', className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 120 120" className={`${className} drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)]`}>
    <defs>
      <linearGradient id="medallionRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffdfa" />
        <stop offset="25%" stopColor="#dbc295" />
        <stop offset="55%" stopColor="#674712" />
        <stop offset="80%" stopColor="#e2c275" />
        <stop offset="100%" stopColor="#3d2a0d" />
      </linearGradient>
      <radialGradient id="medallionFace" cx="45%" cy="38%" r="58%">
        <stop offset="0%" stopColor="#fdfbf7" />
        <stop offset="55%" stopColor="#be9440" />
        <stop offset="100%" stopColor="#674712" />
      </radialGradient>
    </defs>

    <circle cx="60" cy="60" r="56" fill="url(#medallionRim)" stroke="#fef08a" strokeWidth="1.2" />
    <circle cx="60" cy="60" r="49" fill="#13192b" stroke="url(#medallionRim)" strokeWidth="2.5" />
    <circle cx="60" cy="60" r="41" fill="url(#medallionRim)" />
    <circle
      cx="60"
      cy="60"
      r="36"
      fill="url(#medallionFace)"
      stroke="#3d2a0d"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />

    {variant === 't2' && (
      <g stroke="#674712" strokeWidth="2" opacity="0.6">
        <line x1="60" y1="27" x2="60" y2="33" />
        <line x1="60" y1="87" x2="60" y2="93" />
        <line x1="27" y1="60" x2="33" y2="60" />
        <line x1="87" y1="60" x2="93" y2="60" />
        <line x1="37" y1="37" x2="41" y2="41" />
        <line x1="83" y1="37" x2="79" y2="41" />
        <line x1="37" y1="83" x2="41" y2="79" />
        <line x1="83" y1="83" x2="79" y2="79" />
      </g>
    )}

    <g transform="translate(60, 60)">
      <polygon points="0,-24 3,0 -3,0" fill="#3d2a0d" />
      <polygon points="16,10 0,2 0,-3" fill="#3d2a0d" />
      <polygon points="-13,11 0,2 0,-2" fill="#674712" />
      <circle cx="0" cy="0" r="3.5" fill="#fef08a" stroke="#3d2a0d" strokeWidth="1.5" />
    </g>
  </svg>
);

// 7. Golden Crown Badge
const GoldenCrownCircleMedallion = () => (
  <svg viewBox="0 0 210 185" className="w-48 h-44 drop-shadow-[0_12px_25px_rgba(0,0,0,0.95)]">
    <defs>
      <radialGradient id="crownCircleBg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#fffdfa" />
        <stop offset="60%" stopColor="#d8b870" />
        <stop offset="100%" stopColor="#674712" />
      </radialGradient>
      <linearGradient id="crown3dGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="25%" stopColor="#f3deb0" />
        <stop offset="55%" stopColor="#be9440" />
        <stop offset="85%" stopColor="#674712" />
        <stop offset="100%" stopColor="#d4af37" />
      </linearGradient>
      <linearGradient id="crownBaseBand" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3d2a0d" />
        <stop offset="25%" stopColor="#d8b870" />
        <stop offset="50%" stopColor="#fffdfa" />
        <stop offset="75%" stopColor="#be9440" />
        <stop offset="100%" stopColor="#3d2a0d" />
      </linearGradient>
    </defs>

    <circle
      cx="100"
      cy="105"
      r="88"
      fill="url(#crownCircleBg)"
      stroke="#fef08a"
      strokeWidth="2.5"
    />
    <ellipse cx="100" cy="142" rx="64" ry="12" fill="rgba(0,0,0,0.55)" filter="blur(4px)" />

    <polygon points="52,115 68,58 92,98" fill="#784714" />
    <polygon points="148,115 132,58 108,98" fill="#784714" />
    <circle cx="68" cy="55" r="5.5" fill="#be9440" />
    <circle cx="132" cy="55" r="5.5" fill="#be9440" />

    <path
      d="M36 122 L25 56 L68 92 L100 34 L132 92 L175 56 L164 122 Z"
      fill="url(#crown3dGold)"
      stroke="#fffdfa"
      strokeWidth="1.2"
    />
    <circle cx="24" cy="52" r="7" fill="url(#crown3dGold)" />
    <circle cx="100" cy="29" r="8.5" fill="url(#crown3dGold)" />
    <circle cx="176" cy="52" r="7" fill="url(#crown3dGold)" />

    <rect
      x="34"
      y="118"
      width="132"
      height="17"
      rx="4"
      fill="url(#crownBaseBand)"
      stroke="#fef08a"
      strokeWidth="1.2"
    />
  </svg>
);

// 8. Platform Logos Bar
const PlatformLogosStrip = ({ platforms }) => (
  <div className="flex items-center justify-between px-2 pt-2.5 pb-0.5 text-white select-none">
    {platforms.ps5 && (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
          <path d="M9.5 4v14.5l3.5 1.2V7.5c0-.8.5-1.2 1.2-1 .8.2 1.3.9 1.3 1.7v5.3c2.2.7 4-.3 4-3.2 0-2.8-1.5-4.2-4.8-5.2L9.5 4zM4 16.8c-1.8.6-2.5 1.8-1.3 2.6 1.2.8 3.8.9 5.8.2v-2l-3.2.8c-.8.2-1.5 0-1.5-.4 0-.4.5-.7 1.4-1l2.3-.7v-1.8L4 16.8z" />
        </svg>
        <span className="font-sans font-bold text-[11px] tracking-widest">PS5</span>
      </div>
    )}

    {platforms.xbox && (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.8 14.8c-.8-1.8-2.5-3.8-4.8-5.5-2.3 1.7-4 3.7-4.8 5.5-1.4-1.3-2.2-3-2.2-4.8 0-2.4 1.3-4.5 3.2-5.7 1.1.5 2.4 1.4 3.8 2.7 1.4-1.3 2.7-2.2 3.8-2.7 1.9 1.2 3.2 3.3 3.2 5.7 0 1.8-.8 3.5-2.2 4.8z" />
        </svg>
        <span className="font-sans font-bold text-[11px] tracking-tight">XBOX</span>
      </div>
    )}

    {platforms.pc && (
      <div className="flex items-center gap-1">
        <span className="bg-white text-black font-black text-[9px] px-1 py-0.2 rounded-[2px] leading-tight">
          P
        </span>
        <span className="font-sans font-bold text-[11px]">PC</span>
      </div>
    )}

    {platforms.steam && (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
          <circle cx="12" cy="12" r="10" />
          <circle cx="15" cy="9" r="3" fill="#000" />
          <path d="M6 16l6-3" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="font-sans font-bold text-[10px] tracking-wide">STEAM</span>
      </div>
    )}

    {platforms.epic && (
      <div className="border border-white/80 px-1 py-0.2 leading-none text-center">
        <div className="font-sans font-black text-[7px] tracking-tighter">EPIC</div>
        <div className="font-sans font-bold text-[5px] tracking-widest">GAMES</div>
      </div>
    )}

    {platforms.gog && (
      <div className="flex items-center gap-0.5">
        <span className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[6px] font-bold">
          O
        </span>
        <span className="font-sans font-extrabold text-[11px] tracking-tight">GOG</span>
      </div>
    )}
  </div>
);

// ============================================================================
// MAIN STUDIO APPLICATION
// ============================================================================
export default function App() {
  const [activeTemplate, setActiveTemplate] = useState('template1'); // 'template1' | 'template2'
  const [posterTheme, setPosterTheme] = useState('calm'); // 'calm' (Minimalist Slate & Soft Champagne) | 'classic' (High-contrast Gold)
  const [t1Data, setT1Data] = useState(INITIAL_TEMPLATE_1);
  const [t2Data, setT2Data] = useState(INITIAL_TEMPLATE_2);
  const [activeSidebarTab, setActiveSidebarTab] = useState('images'); // 'images' | 'texts' | 'presets'
  const [selectedSlot, setSelectedSlot] = useState({
    template: 't1',
    type: 'podium',
    index: 0
  });
  const [zoom, setZoom] = useState(0.72);
  const [showParticles, setShowParticles] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showTips, setShowTips] = useState(true);

  const posterRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load html-to-image for HD PNG download
  useEffect(() => {
    if (!window.htmlToImage) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const triggerSlotUpload = (slotConfig) => {
    setSelectedSlot(slotConfig);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const applyImageToSlot = (imageUrl, targetSlot = selectedSlot) => {
    if (!targetSlot) return;

    if (targetSlot.template === 't1') {
      if (targetSlot.type === 'podium') {
        const updated = t1Data.podiumSlots.map((slot, i) =>
          i === targetSlot.index ? { ...slot, image: imageUrl, zoom: 1, x: 0, y: 0 } : slot
        );
        setT1Data({ ...t1Data, podiumSlots: updated });
      } else if (targetSlot.type === 'category') {
        const updated = t1Data.categories.map((cat, i) =>
          i === targetSlot.index ? { ...cat, image: imageUrl, zoom: 1, x: 0, y: 0 } : cat
        );
        setT1Data({ ...t1Data, categories: updated });
      } else if (targetSlot.type === 'logo') {
        setT1Data({ ...t1Data, logoCustom: imageUrl });
      } else if (targetSlot.type === 'centerpiece') {
        setT1Data({ ...t1Data, customCenterpiece: imageUrl });
      } else if (targetSlot.type === 'bgOverlay') {
        setT1Data({ ...t1Data, customBgOverlay: imageUrl });
      }
    } else if (targetSlot.template === 't2') {
      if (targetSlot.type === 'cover') {
        setT2Data({
          ...t2Data,
          gameCover: imageUrl,
          coverZoom: 1,
          coverX: 0,
          coverY: 0
        });
      } else if (targetSlot.type === 'logo') {
        setT2Data({ ...t2Data, logoCustom: imageUrl });
      } else if (targetSlot.type === 'bgOverlay') {
        setT2Data({ ...t2Data, customBgOverlay: imageUrl });
      }
    }
    showToast('Foto berhasil dipasang!');
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      applyImageToSlot(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const fillAllT1SampleImages = () => {
    setT1Data({
      ...t1Data,
      podiumSlots: t1Data.podiumSlots.map((s, idx) => ({
        ...s,
        image: PRESET_GAMES[idx % PRESET_GAMES.length].url,
        zoom: 1,
        x: 0,
        y: 0
      })),
      categories: t1Data.categories.map((c, idx) => ({
        ...c,
        image: PRESET_GAMES[(idx + 2) % PRESET_GAMES.length].url,
        zoom: 1,
        x: 0,
        y: 0
      }))
    });
    showToast('Semua slot poster diisi sampel game!');
  };

  const clearAllT1Images = () => {
    setT1Data({
      ...t1Data,
      podiumSlots: t1Data.podiumSlots.map((s) => ({ ...s, image: null, zoom: 1, x: 0, y: 0 })),
      categories: t1Data.categories.map((c) => ({ ...c, image: null, zoom: 1, x: 0, y: 0 }))
    });
    showToast('Tampilan slot dikembalikan ke Placeholder');
  };

  const handleDownloadPoster = async () => {
    if (!posterRef.current) return;
    setIsExporting(true);
    try {
      if (window.htmlToImage) {
        const dataUrl = await window.htmlToImage.toPng(posterRef.current, {
          quality: 1.0,
          pixelRatio: 2,
          cacheBust: true
        });
        const link = document.createElement('a');
        link.download = `JagoGames-${
          activeTemplate === 'template1' ? 'Poster-Katalog' : t2Data.gameTitle.replace(/\s+/g, '-')
        }.png`;
        link.href = dataUrl;
        link.click();
        showToast('Poster HD berhasil diunduh!');
      } else {
        showToast('Modul export sedang dimuat, coba lagi sebentar.');
      }
    } catch (err) {
      console.error(err);
      showToast('Gunakan gambar lokal/upload langsung jika URL terhambat CORS.');
    } finally {
      setIsExporting(false);
    }
  };

  const getSelectedSlotAdjustments = () => {
    if (!selectedSlot) return null;
    if (selectedSlot.template === 't1') {
      if (selectedSlot.type === 'podium') {
        const s = t1Data.podiumSlots[selectedSlot.index];
        return s && s.image
          ? {
              label: `Podium Slot #${selectedSlot.index + 1}`,
              zoom: s.zoom,
              x: s.x,
              y: s.y,
              onChange: (patch) => {
                const updated = [...t1Data.podiumSlots];
                updated[selectedSlot.index] = { ...s, ...patch };
                setT1Data({ ...t1Data, podiumSlots: updated });
              }
            }
          : null;
      }
      if (selectedSlot.type === 'category') {
        const c = t1Data.categories[selectedSlot.index];
        return c && c.image
          ? {
              label: `Kartu Koleksi #${selectedSlot.index + 1}`,
              zoom: c.zoom,
              x: c.x,
              y: c.y,
              onChange: (patch) => {
                const updated = [...t1Data.categories];
                updated[selectedSlot.index] = { ...c, ...patch };
                setT1Data({ ...t1Data, categories: updated });
              }
            }
          : null;
      }
    }
    if (selectedSlot.template === 't2' && selectedSlot.type === 'cover') {
      return {
        label: 'Cover Utama Game',
        zoom: t2Data.coverZoom,
        x: t2Data.coverX,
        y: t2Data.coverY,
        onChange: (patch) => {
          setT2Data({
            ...t2Data,
            coverZoom: patch.zoom ?? t2Data.coverZoom,
            coverX: patch.x ?? t2Data.coverX,
            coverY: patch.y ?? t2Data.coverY
          });
        }
      };
    }
    return null;
  };

  const activeAdjustments = getSelectedSlotAdjustments();

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Dynamic CSS Shaders for Calm vs Classic Themes */}
      <style>{`
        .font-luxury {
          font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
        }
        .font-serif-title {
          font-family: 'Playfair Display', 'Cinzel', Georgia, serif;
        }

        /* Calm Soft Champagne Theme (Default) */
        .theme-calm .gold-3d-heading {
          background: linear-gradient(180deg, #ffffff 0%, #f7eedb 25%, #dfbd70 58%, #8e6524 88%, #f2dfb1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 0px #2a1a06) drop-shadow(0 4px 10px rgba(0,0,0,0.85)) drop-shadow(0 0 10px rgba(223,189,112,0.25));
        }

        .theme-calm .gold-subtitle-glow {
          background: linear-gradient(180deg, #fdfbf7 0%, #edd9b5 50%, #c49c51 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.85)) drop-shadow(0 0 6px rgba(223,189,112,0.2));
        }

        .theme-calm .gold-metallic-rim {
          background: linear-gradient(135deg, #faf7ee 0%, #dfbd70 24%, #6e4c19 48%, #ebd39b 74%, #825a21 100%);
        }

        .theme-calm .gold-banner-plate {
          background: linear-gradient(90deg, #875c1b 0%, #f4e3be 22%, #fdfbf7 50%, #edd39a 78%, #785016 100%);
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -2px 4px rgba(90,45,12,0.6);
        }

        .theme-calm .capsule-double-gold {
          background: linear-gradient(180deg, rgba(28, 25, 20, 0.94) 0%, rgba(13, 16, 24, 0.98) 100%);
          border: 1.5px solid rgba(223, 189, 112, 0.55);
          box-shadow:
            0 0 0 2px rgba(13, 16, 24, 0.95),
            0 0 0 3px rgba(180, 140, 60, 0.28),
            inset 0 1px 8px rgba(245, 230, 179, 0.12),
            0 8px 18px rgba(0, 0, 0, 0.85);
        }

        /* Classic Vivid Gold Theme */
        .theme-classic .gold-3d-heading {
          background: linear-gradient(180deg, #ffffff 0%, #fef08a 28%, #eab308 58%, #92400e 88%, #fef08a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 0px #451a03) drop-shadow(0 5px 12px rgba(0,0,0,0.95)) drop-shadow(0 0 18px rgba(234,179,8,0.45));
        }

        .theme-classic .gold-subtitle-glow {
          background: linear-gradient(180deg, #fffbeb 0%, #fde047 50%, #ca8a04 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.95)) drop-shadow(0 0 10px rgba(234,179,8,0.4));
        }

        .theme-classic .gold-metallic-rim {
          background: linear-gradient(135deg, #fef9c3 0%, #eab308 22%, #713f12 48%, #fde047 74%, #92400e 100%);
        }

        .theme-classic .gold-banner-plate {
          background: linear-gradient(90deg, #b45309 0%, #fef08a 22%, #fffbeb 50%, #fde047 78%, #a16207 100%);
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(120,53,15,0.7);
        }

        .theme-classic .capsule-double-gold {
          background: linear-gradient(180deg, rgba(42, 35, 22, 0.92) 0%, rgba(14, 12, 9, 0.97) 100%);
          border: 1.5px solid rgba(234, 179, 8, 0.75);
          box-shadow:
            0 0 0 2px rgba(15, 12, 8, 0.95),
            0 0 0 3.5px rgba(202, 138, 4, 0.45),
            inset 0 1px 12px rgba(254, 240, 138, 0.2),
            0 10px 22px rgba(0, 0, 0, 0.9);
        }

        /* Geometry & Textures */
        .brushed-metal-panel {
          background:
            repeating-linear-gradient(
              -55deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 2px,
              transparent 2px,
              transparent 7px
            ),
            linear-gradient(180deg, #131722 0%, #0a0d14 100%);
        }

        .carbon-dots-pattern {
          background-image: radial-gradient(rgba(223, 189, 112, 0.15) 1px, transparent 1px);
          background-size: 6px 6px;
        }

        .skew-card-10 {
          transform: skewX(-9.5deg);
        }
        .unskew-card-10 {
          transform: skewX(9.5deg);
        }
      `}</style>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-slate-900 text-amber-200 font-medium px-4 py-3 rounded-2xl border border-amber-400/30 shadow-2xl backdrop-blur-md animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs">{toastMessage}</span>
        </div>
      )}

      {/* TOP HEADER BAR */}
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
        <div className="flex items-center bg-slate-950/70 p-1 rounded-xl border border-slate-800/80">
          <button
            onClick={() => {
              setActiveTemplate('template1');
              setSelectedSlot({ template: 't1', type: 'podium', index: 0 });
              setZoom(0.68);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTemplate === 'template1'
                ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Katalog 4 Game</span>
            <span className="sm:hidden">Katalog</span>
          </button>
          <button
            onClick={() => {
              setActiveTemplate('template2');
              setSelectedSlot({ template: 't2', type: 'cover' });
              setZoom(0.74);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTemplate === 'template2'
                ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Single Showcase</span>
            <span className="sm:hidden">Single</span>
          </button>
        </div>

        {/* Actions Toolbar */}
        <div className="flex items-center gap-2.5">
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
            onClick={() => {
              if (activeTemplate === 'template1') setT1Data(INITIAL_TEMPLATE_1);
              else setT2Data(INITIAL_TEMPLATE_2);
              showToast('Template dikembalikan ke pengaturan awal');
            }}
            title="Reset ke Template Awal"
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Download PNG Button */}
          <button
            onClick={handleDownloadPoster}
            disabled={isExporting}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold text-xs bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-slate-950 hover:brightness-105 active:scale-95 transition shadow-[0_4px_16px_rgba(217,119,6,0.22)] disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Mengekspor HD...' : 'Download HD'}</span>
          </button>
        </div>
      </header>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT CONTROL SIDEBAR */}
        <aside className="w-full lg:w-[370px] bg-[#0d121f] border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col h-auto lg:h-[calc(100vh-4rem)] shrink-0 select-none">
          {/* Sidebar Tabs */}
          <div className="p-3 border-b border-slate-800/70">
            <div className="grid grid-cols-3 gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
              <button
                onClick={() => setActiveSidebarTab('images')}
                className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
                  activeSidebarTab === 'images'
                    ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Slot Foto</span>
              </button>
              <button
                onClick={() => setActiveSidebarTab('texts')}
                className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
                  activeSidebarTab === 'texts'
                    ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                <span>Edit Teks</span>
              </button>
              <button
                onClick={() => setActiveSidebarTab('presets')}
                className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
                  activeSidebarTab === 'presets'
                    ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>Gaya & Efek</span>
              </button>
            </div>
          </div>

          {/* Sidebar Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Fine-Tuning Box (Active slot with uploaded image) */}
            {activeAdjustments && (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-200 flex items-center gap-1.5">
                    <Move className="w-3.5 h-3.5 text-amber-400" />
                    Posisi & Zoom: {activeAdjustments.label}
                  </span>
                  <button
                    onClick={() => activeAdjustments.onChange({ zoom: 1, x: 0, y: 0 })}
                    className="text-[11px] text-slate-400 hover:text-slate-200 underline"
                  >
                    Reset
                  </button>
                </div>
                <div className="space-y-2 text-[11px]">
                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Zoom</span>
                      <span className="font-mono text-slate-300">
                        {Math.round(activeAdjustments.zoom * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.8"
                      max="2.2"
                      step="0.05"
                      value={activeAdjustments.zoom}
                      onChange={(e) =>
                        activeAdjustments.onChange({ zoom: parseFloat(e.target.value) })
                      }
                      className="w-full accent-amber-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-400 block mb-1">Geser X</span>
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        step="2"
                        value={activeAdjustments.x}
                        onChange={(e) =>
                          activeAdjustments.onChange({ x: parseInt(e.target.value, 10) })
                        }
                        className="w-full accent-amber-400"
                      />
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-1">Geser Y</span>
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        step="2"
                        value={activeAdjustments.y}
                        onChange={(e) =>
                          activeAdjustments.onChange({ y: parseInt(e.target.value, 10) })
                        }
                        className="w-full accent-amber-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: IMAGE SLOTS */}
            {activeSidebarTab === 'images' && (
              <>
                {activeTemplate === 'template1' ? (
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
                        <button
                          onClick={() =>
                            triggerSlotUpload({ template: 't1', type: 'centerpiece' })
                          }
                          className="text-[11px] text-amber-300/80 hover:text-amber-200 hover:underline"
                        >
                          Ganti PS5
                        </button>
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
                                  className="w-full h-full object-cover"
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
                                className="text-[10px] text-slate-400 hover:text-slate-200"
                              >
                                Slot {idx + 1}
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
                                  className="w-full h-full object-cover"
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
                                  <Upload className="w-3 h-3" /> Upload Foto #{idx + 1}
                                </button>
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
                  </div>
                ) : (
                  /* TEMPLATE 2 IMAGE CONTROLS */
                  <div className="space-y-4">
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
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                            <Upload className="w-5 h-5 text-amber-300" />
                          </div>
                        </div>

                        <div className="flex-1 space-y-2">
                          <button
                            onClick={() => triggerSlotUpload({ template: 't2', type: 'cover' })}
                            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm hover:brightness-105 transition"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload Cover Game</span>
                          </button>

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
                                coverY: 0
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
                )}
              </>
            )}

            {/* TAB 2: TEXT EDITING */}
            {activeSidebarTab === 'texts' && (
              <div className="space-y-4">
                {activeTemplate === 'template1' ? (
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
                ) : (
                  /* TEMPLATE 2 TEXTS */
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
                )}
              </div>
            )}

            {/* TAB 3: GAYA & EFEK */}
            {activeSidebarTab === 'presets' && (
              <div className="space-y-4">
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
                      onClick={() =>
                        triggerSlotUpload({
                          template: activeTemplate === 'template1' ? 't1' : 't2',
                          type: 'bgOverlay'
                        })
                      }
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-300" />
                      Upload Background
                    </button>
                    {(t1Data.customBgOverlay || t2Data.customBgOverlay) && (
                      <button
                        onClick={() => {
                          if (activeTemplate === 'template1')
                            setT1Data({ ...t1Data, customBgOverlay: null });
                          else setT2Data({ ...t2Data, customBgOverlay: null });
                        }}
                        className="px-3 py-2 rounded-xl bg-red-500/20 text-red-300 text-xs font-semibold"
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
            )}
          </div>
        </aside>

        {/* RIGHT CANVAS WORKSPACE */}
        <main className="flex-1 canvas-grid-bg relative overflow-auto flex flex-col items-center justify-start p-4 sm:p-8 min-h-[calc(100vh-4rem)]">
          {/* Floating Canvas Controls Bar */}
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

          {/* SCALABLE POSTER ARTBOARD */}
          <div
            className={`transition-transform origin-top duration-150 rounded-[4px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-1 ring-white/10 ${
              posterTheme === 'calm' ? 'theme-calm' : 'theme-classic'
            }`}
            style={{ transform: `scale(${zoom})` }}
          >
            {activeTemplate === 'template1' ? (
              /* =================================================================
                 GAMBAR 1: KATALOG GAME 900x1200px (3:4)
                 ================================================================= */
              <div
                ref={posterRef}
                className="w-[900px] h-[1200px] relative overflow-hidden select-none bg-[#090d16] flex flex-col justify-between px-9 pt-7 pb-6"
              >
                {/* Optional Custom Background Image */}
                {t1Data.customBgOverlay && (
                  <img
                    src={t1Data.customBgOverlay}
                    alt="Custom Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                )}

                {/* BACKGROUND ARCHITECTURE */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  {/* Top Brushed Metal Wings */}
                  <div
                    className="absolute top-0 left-0 w-full h-[465px] brushed-metal-panel"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)'
                    }}
                  />

                  {/* Warm Sunburst Behind PS5 & Podium */}
                  <div
                    className="absolute top-[135px] left-1/2 -translate-x-1/2 w-[640px] h-[340px] rounded-full blur-3xl opacity-75"
                    style={{
                      background:
                        posterTheme === 'calm'
                          ? 'radial-gradient(circle, rgba(223, 189, 112, 0.35) 0%, rgba(180, 140, 60, 0.2) 42%, rgba(80, 50, 15, 0.08) 70%, transparent 100%)'
                          : 'radial-gradient(circle, rgba(254, 240, 138, 0.55) 0%, rgba(217, 119, 6, 0.32) 42%, rgba(120, 53, 15, 0.12) 70%, transparent 100%)'
                    }}
                  />

                  {/* Laser Lines */}
                  <svg viewBox="0 0 900 500" className="w-full h-[500px] absolute top-0 left-0 opacity-80">
                    <defs>
                      <linearGradient id="goldLaser" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fffdfa" />
                        <stop offset="50%" stopColor="#dfbd70" />
                        <stop offset="100%" stopColor="#674712" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="-20"
                      y1="125"
                      x2="255"
                      y2="375"
                      stroke="url(#goldLaser)"
                      strokeWidth="3"
                    />
                    <line
                      x1="-20"
                      y1="255"
                      x2="215"
                      y2="435"
                      stroke="url(#goldLaser)"
                      strokeWidth="2"
                    />
                    <line
                      x1="920"
                      y1="125"
                      x2="645"
                      y2="375"
                      stroke="url(#goldLaser)"
                      strokeWidth="3"
                    />
                    <line
                      x1="920"
                      y1="255"
                      x2="685"
                      y2="435"
                      stroke="url(#goldLaser)"
                      strokeWidth="2"
                    />
                    <line
                      x1="0"
                      y1="432"
                      x2="900"
                      y2="432"
                      stroke="#dfbd70"
                      strokeWidth="1.2"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Corner Accent */}
                  <div
                    className="absolute bottom-0 right-0 w-[320px] h-[220px]"
                    style={{
                      background: 'linear-gradient(135deg, transparent 48%, #0d121c 50%)',
                      borderTop: '1.5px solid #be9440'
                    }}
                  />

                  {/* Atmospheric Particles */}
                  {showParticles && (
                    <>
                      <div className="absolute bottom-[110px] -left-16 w-[360px] h-[260px] bg-slate-400/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-[95px] left-[220px] w-[420px] h-[180px] bg-slate-500/10 rounded-full blur-3xl" />
                      <div className="absolute top-[220px] left-[235px] w-2.5 h-2.5 rounded-full bg-amber-200/80 shadow-[0_0_8px_#fde047]" />
                      <div className="absolute top-[195px] right-[245px] w-3 h-3 rounded-full bg-amber-300/80 shadow-[0_0_10px_#fde047]" />
                      <div className="absolute top-[520px] left-[45px] w-2 h-2 rounded-full bg-amber-400/70 blur-[0.5px]" />
                      <div className="absolute top-[640px] right-[35px] w-2.5 h-2.5 rounded-full bg-amber-300/80 shadow-[0_0_6px_#dfbd70]" />
                    </>
                  )}
                </div>

                {/* ROW 1: TOP HEADER */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <JagoGamesCrestLogo
                      brandName={t1Data.brandName}
                      customLogo={t1Data.logoCustom}
                      onClick={() => triggerSlotUpload({ template: 't1', type: 'logo' })}
                    />

                    <ReadyStockRibbon
                      line1={t1Data.ribbonLine1}
                      line2={t1Data.ribbonLine2}
                      onEditLine1={(v) => setT1Data({ ...t1Data, ribbonLine1: v })}
                      onEditLine2={(v) => setT1Data({ ...t1Data, ribbonLine2: v })}
                    />
                  </div>

                  {/* Center Main Titles */}
                  <div className="text-center -mt-7">
                    <h1
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        setT1Data({ ...t1Data, mainTitle: e.currentTarget.textContent })
                      }
                      className="font-luxury font-extrabold text-[48px] tracking-[0.04em] gold-3d-heading uppercase leading-none outline-none cursor-text transition"
                    >
                      {t1Data.mainTitle}
                    </h1>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        setT1Data({ ...t1Data, subTitle: e.currentTarget.textContent })
                      }
                      className="font-serif-title font-bold text-[28px] gold-subtitle-glow tracking-wide mt-1 outline-none cursor-text transition"
                    >
                      {t1Data.subTitle}
                    </p>
                  </div>
                </div>

                {/* ROW 2: 3-TIER GOLD PODIUM + PS5 CENTERPIECE + 4 GAME SLOTS */}
                <div className="relative z-10 flex flex-col items-center justify-end h-[325px] -mt-1">
                  <div className="relative z-20 flex items-end justify-center mb-[-22px]">
                    {/* Slot #1 (Outer Left) */}
                    <div
                      onClick={() =>
                        triggerSlotUpload({ template: 't1', type: 'podium', index: 0 })
                      }
                      className="w-[100px] h-[126px] gold-metallic-rim p-[2.5px] shadow-[0_10px_25px_rgba(0,0,0,0.95)] cursor-pointer group relative -mr-1 mb-1 transition-transform hover:-translate-y-1"
                    >
                      <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
                        {t1Data.podiumSlots[0].image ? (
                          <img
                            src={t1Data.podiumSlots[0].image}
                            alt="Slot 1"
                            className="w-full h-full object-cover"
                            style={{
                              transform: `scale(${t1Data.podiumSlots[0].zoom}) translate(${t1Data.podiumSlots[0].x}px, ${t1Data.podiumSlots[0].y}px)`
                            }}
                          />
                        ) : (
                          <div className="text-center px-1 select-none">
                            <div className="font-luxury font-bold text-[17px] text-amber-200 tracking-wider leading-none">
                              IMAGE
                            </div>
                            <div className="font-luxury text-[9.5px] text-amber-300/80 tracking-wider mt-1">
                              PLACEHOLDER
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <Upload className="w-5 h-5 text-amber-300" />
                        </div>
                      </div>
                    </div>

                    {/* Slot #2 (Inner Left - Taller) */}
                    <div
                      onClick={() =>
                        triggerSlotUpload({ template: 't1', type: 'podium', index: 1 })
                      }
                      className="w-[116px] h-[152px] gold-metallic-rim p-[3px] shadow-[0_12px_28px_rgba(0,0,0,0.95)] cursor-pointer group relative z-10 mb-2.5 transition-transform hover:-translate-y-1"
                    >
                      <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
                        {t1Data.podiumSlots[1].image ? (
                          <img
                            src={t1Data.podiumSlots[1].image}
                            alt="Slot 2"
                            className="w-full h-full object-cover"
                            style={{
                              transform: `scale(${t1Data.podiumSlots[1].zoom}) translate(${t1Data.podiumSlots[1].x}px, ${t1Data.podiumSlots[1].y}px)`
                            }}
                          />
                        ) : (
                          <div className="text-center px-1 select-none">
                            <div className="font-luxury font-bold text-[20px] text-amber-200 tracking-wider leading-none">
                              IMAGE
                            </div>
                            <div className="font-luxury text-[11px] text-amber-300/80 tracking-wider mt-1">
                              PLACEHOLDER
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <Upload className="w-6 h-6 text-amber-300" />
                        </div>
                      </div>
                    </div>

                    {/* Centerpiece PS5 Console */}
                    {t1Data.showPs5Centerpiece && (
                      <div
                        onClick={() =>
                          triggerSlotUpload({ template: 't1', type: 'centerpiece' })
                        }
                        title="Klik untuk mengganti gambar konsol tengah"
                        className="w-[180px] h-[242px] -mx-5 z-30 cursor-pointer relative group"
                      >
                        {t1Data.customCenterpiece ? (
                          <img
                            src={t1Data.customCenterpiece}
                            alt="Centerpiece"
                            className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)]"
                          />
                        ) : (
                          <RealisticPS5Centerpiece />
                        )}
                      </div>
                    )}

                    {/* Slot #3 (Inner Right - Taller) */}
                    <div
                      onClick={() =>
                        triggerSlotUpload({ template: 't1', type: 'podium', index: 2 })
                      }
                      className="w-[114px] h-[146px] gold-metallic-rim p-[3px] shadow-[0_12px_28px_rgba(0,0,0,0.95)] cursor-pointer group relative z-10 mb-2 transition-transform hover:-translate-y-1"
                    >
                      <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
                        {t1Data.podiumSlots[2].image ? (
                          <img
                            src={t1Data.podiumSlots[2].image}
                            alt="Slot 3"
                            className="w-full h-full object-cover"
                            style={{
                              transform: `scale(${t1Data.podiumSlots[2].zoom}) translate(${t1Data.podiumSlots[2].x}px, ${t1Data.podiumSlots[2].y}px)`
                            }}
                          />
                        ) : (
                          <div className="text-center px-1 select-none">
                            <div className="font-luxury font-bold text-[19px] text-amber-200 tracking-wider leading-none">
                              IMAGE
                            </div>
                            <div className="font-luxury text-[10.5px] text-amber-300/80 tracking-wider mt-1">
                              PLACEHOLDER
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <Upload className="w-6 h-6 text-amber-300" />
                        </div>
                      </div>
                    </div>

                    {/* Slot #4 (Outer Right) */}
                    <div
                      onClick={() =>
                        triggerSlotUpload({ template: 't1', type: 'podium', index: 3 })
                      }
                      className="w-[98px] h-[126px] gold-metallic-rim p-[2.5px] shadow-[0_10px_25px_rgba(0,0,0,0.95)] cursor-pointer group relative -ml-1 mb-1 transition-transform hover:-translate-y-1"
                    >
                      <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-500/20">
                        {t1Data.podiumSlots[3].image ? (
                          <img
                            src={t1Data.podiumSlots[3].image}
                            alt="Slot 4"
                            className="w-full h-full object-cover"
                            style={{
                              transform: `scale(${t1Data.podiumSlots[3].zoom}) translate(${t1Data.podiumSlots[3].x}px, ${t1Data.podiumSlots[3].y}px)`
                            }}
                          />
                        ) : (
                          <div className="text-center px-1 select-none">
                            <div className="font-luxury font-bold text-[17px] text-amber-200 tracking-wider leading-none">
                              IMAGE
                            </div>
                            <div className="font-luxury text-[9.5px] text-amber-300/80 tracking-wider mt-1">
                              PLACEHOLDER
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <Upload className="w-5 h-5 text-amber-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3-Tier Podium */}
                  <div className="relative z-10 w-[560px] h-[94px]">
                    <svg viewBox="0 0 560 100" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,1)]">
                      <defs>
                        <linearGradient id="podiumCylinder" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3d2a0d" />
                          <stop offset="18%" stopColor="#be9440" />
                          <stop offset="36%" stopColor="#fffdfa" />
                          <stop offset="50%" stopColor="#7a5418" />
                          <stop offset="72%" stopColor="#dfbd70" />
                          <stop offset="88%" stopColor="#9a722c" />
                          <stop offset="100%" stopColor="#321f06" />
                        </linearGradient>
                        <linearGradient id="podiumTopSurface" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9a722c" />
                          <stop offset="50%" stopColor="#faf6ec" />
                          <stop offset="100%" stopColor="#7a5418" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M30 62 L530 62 L530 84 C530 95 30 95 30 84 Z"
                        fill="url(#podiumCylinder)"
                      />
                      <ellipse
                        cx="280"
                        cy="62"
                        rx="250"
                        ry="11"
                        fill="url(#podiumTopSurface)"
                        stroke="#dfbd70"
                        strokeWidth="1"
                      />

                      <path
                        d="M65 39 L495 39 L495 60 C495 70 65 70 65 60 Z"
                        fill="url(#podiumCylinder)"
                      />
                      <ellipse
                        cx="280"
                        cy="39"
                        rx="215"
                        ry="9.5"
                        fill="url(#podiumTopSurface)"
                        stroke="#dfbd70"
                        strokeWidth="1"
                      />

                      <path
                        d="M105 17 L455 17 L455 37 C455 46 105 46 105 37 Z"
                        fill="url(#podiumCylinder)"
                      />
                      <ellipse
                        cx="280"
                        cy="17"
                        rx="175"
                        ry="8"
                        fill="url(#podiumTopSurface)"
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>

                {/* ROW 3: KOLEKSI GAME TERPOPULER & 3 SKEWED CARDS */}
                <div className="relative z-10 flex flex-col items-center mt-1">
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setT1Data({ ...t1Data, collectionTitle: e.currentTarget.textContent })
                    }
                    className="font-luxury font-extrabold text-[33px] tracking-[0.05em] gold-3d-heading uppercase mb-3.5 outline-none cursor-text"
                  >
                    {t1Data.collectionTitle}
                  </h2>

                  <div className="grid grid-cols-3 gap-7 w-full px-6">
                    {t1Data.categories.map((cat, idx) => (
                      <div
                        key={cat.id}
                        className="skew-card-10 gold-metallic-rim p-[3.5px] rounded-[14px] shadow-[0_18px_35px_rgba(0,0,0,0.95)] relative group"
                      >
                        <div className="w-2.5 h-10 bg-amber-100/70 blur-[3px] absolute -left-1 top-1/3 pointer-events-none" />
                        <div className="w-2.5 h-10 bg-amber-100/70 blur-[3px] absolute -right-1 bottom-1/3 pointer-events-none" />

                        <div className="w-full h-[270px] rounded-[10px] bg-gradient-to-b from-[#1e2330] via-[#101420] to-[#080b13] border border-amber-500/30 flex flex-col justify-between overflow-hidden relative">
                          <div className="absolute inset-0 carbon-dots-pattern opacity-50 pointer-events-none" />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(0,0,0,0.85) 100%)'
                            }}
                          />

                          {/* Card Image Slot */}
                          <div
                            onClick={() =>
                              triggerSlotUpload({ template: 't1', type: 'category', index: idx })
                            }
                            className="flex-1 relative overflow-hidden cursor-pointer flex flex-col items-center justify-center p-3"
                          >
                            {cat.image ? (
                              <img
                                src={cat.image}
                                alt={cat.line1}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                  transform: `scale(${cat.zoom}) translate(${cat.x}px, ${cat.y}px)`
                                }}
                              />
                            ) : (
                              <div className="unskew-card-10 flex flex-col items-center text-center mt-3 select-none">
                                <GoldPlaceholderPictureIcon hasPlus={cat.hasPlusIcon} />
                                <p className="font-sans font-bold text-[10px] text-amber-100/90 tracking-wider uppercase leading-snug mt-2">
                                  ISI GAMBAR DISINI /
                                  <br />
                                  INSERT IMAGE HERE
                                </p>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                              <div className="unskew-card-10 flex flex-col items-center">
                                <Upload className="w-6 h-6 text-amber-300" />
                                <span className="text-[11px] font-bold text-white mt-1">
                                  Ganti Foto
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Card Label */}
                          <div className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-4 pb-3.5 px-2 text-center">
                            <div className="unskew-card-10 flex flex-col items-center justify-center min-h-[44px]">
                              <div
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const updated = [...t1Data.categories];
                                  updated[idx] = { ...cat, line1: e.currentTarget.textContent };
                                  setT1Data({ ...t1Data, categories: updated });
                                }}
                                className="font-luxury font-bold text-[19px] gold-subtitle-glow tracking-wider uppercase leading-tight outline-none cursor-text"
                              >
                                {cat.line1}
                              </div>
                              {cat.line2 && (
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => {
                                    const updated = [...t1Data.categories];
                                    updated[idx] = { ...cat, line2: e.currentTarget.textContent };
                                    setT1Data({ ...t1Data, categories: updated });
                                  }}
                                  className="font-luxury font-bold text-[18px] gold-subtitle-glow tracking-wider uppercase leading-tight outline-none cursor-text"
                                >
                                  {cat.line2}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROW 4: ARCHED TITLE & 4 CAPSULES */}
                <div className="relative z-10 flex flex-col items-center mt-1">
                  <div className="w-full h-[54px] -mb-1 flex items-center justify-center">
                    <svg viewBox="0 0 820 65" className="w-full h-full overflow-visible">
                      <defs>
                        <path id="whyArchCurve" d="M 40,56 Q 410,22 780,56" />
                        <linearGradient id="archGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="40%" stopColor="#f7eedb" />
                          <stop offset="80%" stopColor="#dfbd70" />
                          <stop offset="100%" stopColor="#875c1b" />
                        </linearGradient>
                      </defs>
                      <text
                        fill="url(#archGoldGrad)"
                        fontSize="33"
                        fontWeight="800"
                        fontFamily="Cinzel, serif"
                        letterSpacing="2"
                        textAnchor="middle"
                        style={{
                          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.95))'
                        }}
                      >
                        <textPath href="#whyArchCurve" startOffset="50%">
                          {t1Data.whyTitle}
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* 4 Feature Capsules */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 w-full px-3">
                    {t1Data.features.map((feat, idx) => (
                      <div
                        key={feat.id}
                        className="capsule-double-gold rounded-full px-5 py-2.5 flex items-center gap-3.5 relative overflow-hidden"
                      >
                        <div className="w-24 h-[1.5px] bg-amber-200/80 blur-[1px] absolute top-0 left-1/3 pointer-events-none" />
                        <div className="w-24 h-[1.5px] bg-amber-300/80 blur-[1px] absolute bottom-0 right-1/3 pointer-events-none" />

                        <T1CapsuleGoldIcon type={feat.icon} />

                        <span
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const updated = [...t1Data.features];
                            updated[idx] = { ...feat, text: e.currentTarget.textContent };
                            setT1Data({ ...t1Data, features: updated });
                          }}
                          className="font-luxury font-bold text-[19px] gold-subtitle-glow tracking-wider uppercase outline-none cursor-text"
                        >
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROW 5: BOTTOM BANNER WITH CLOCK MEDALLION & FOOTER */}
                <div className="relative z-10 mt-1">
                  <div className="relative flex items-center">
                    <div className="z-20 -mr-10 -my-3">
                      <GoldenClockMedallion variant="t1" className="w-[118px] h-[118px]" />
                    </div>

                    <div className="flex-1 gold-metallic-rim p-[3px] rounded-r-lg shadow-[0_12px_30px_rgba(0,0,0,0.95)]">
                      <div className="gold-banner-plate rounded-r-[5px] py-4 pl-12 pr-6 text-center border border-amber-900/40">
                        <div
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) =>
                            setT1Data({ ...t1Data, bannerText: e.currentTarget.textContent })
                          }
                          className="font-serif-title font-black text-[34px] text-slate-950 tracking-wider uppercase leading-none outline-none cursor-text"
                        >
                          {t1Data.bannerText}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setT1Data({ ...t1Data, footerText: e.currentTarget.textContent })
                    }
                    className="text-center font-serif-title text-[15.5px] text-amber-200/90 tracking-wide mt-2 outline-none cursor-text"
                  >
                    {t1Data.footerText}
                  </p>
                </div>
              </div>
            ) : (
              /* =================================================================
                 GAMBAR 2: SINGLE GAME SHOWCASE 960x960px (1:1)
                 ================================================================= */
              <div
                ref={posterRef}
                className="w-[960px] h-[960px] relative overflow-hidden select-none bg-[#090d16] flex flex-col justify-between p-9"
              >
                {/* Optional Custom Background */}
                {t2Data.customBgOverlay && (
                  <img
                    src={t2Data.customBgOverlay}
                    alt="Custom Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                )}

                {/* Background Decorations */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg viewBox="0 0 960 960" className="w-full h-full absolute inset-0">
                    <defs>
                      <linearGradient id="curveGoldLine" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f3deb0" />
                        <stop offset="50%" stopColor="#be9440" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 605,0 Q 475,450 695,860"
                      fill="none"
                      stroke="url(#curveGoldLine)"
                      strokeWidth="2.5"
                      opacity="0.75"
                    />
                    <line
                      x1="735"
                      y1="860"
                      x2="960"
                      y2="755"
                      stroke="url(#curveGoldLine)"
                      strokeWidth="2.5"
                      opacity="0.75"
                    />
                  </svg>

                  {/* Soft Blue Aura */}
                  <div
                    className="absolute top-[165px] left-[65px] w-[420px] h-[590px] rounded-xl blur-2xl opacity-60"
                    style={{
                      background: `radial-gradient(circle, ${t2Data.cardGlowColor}44 0%, transparent 72%)`
                    }}
                  />

                  {/* Atmosphere Smoke & Sparks */}
                  {showParticles && (
                    <>
                      <div className="absolute bottom-[105px] left-[20px] w-[580px] h-[220px] bg-slate-300/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-[135px] left-[180px] w-[460px] h-[160px] bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute top-[270px] left-[26px] w-2.5 h-2.5 rounded-full bg-amber-300/80 shadow-[0_0_8px_#fde047]" />
                      <div className="absolute top-[330px] left-[8px] w-3 h-4 rounded-full bg-amber-400/60 blur-[1px]" />
                      <div className="absolute top-[450px] left-[515px] w-2 h-2 rounded-full bg-amber-300/80" />
                    </>
                  )}
                </div>

                {/* ROW 1: TOP HEADER */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <JagoGamesCrestLogo
                      brandName={t2Data.brandName}
                      customLogo={t2Data.logoCustom}
                      onClick={() => triggerSlotUpload({ template: 't2', type: 'logo' })}
                      variant="square-box"
                    />

                    {/* Top Center Golden Trapezoid Plaque */}
                    <div className="relative -mt-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                      <svg viewBox="0 0 290 66" className="w-[285px] h-[64px]">
                        <defs>
                          <linearGradient id="plaqueGold" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7a5418" />
                            <stop offset="30%" stopColor="#f3deb0" />
                            <stop offset="50%" stopColor="#fffdfa" />
                            <stop offset="70%" stopColor="#d4af37" />
                            <stop offset="100%" stopColor="#674712" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 18,4 L 272,4 Q 284,4 280,16 L 262,54 Q 258,62 246,62 L 44,62 Q 32,62 28,54 L 10,16 Q 6,4 18,4 Z"
                          fill="url(#plaqueGold)"
                          stroke="#dfbd70"
                          strokeWidth="1.8"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pb-0.5">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) =>
                            setT2Data({ ...t2Data, topPlaque: e.currentTarget.textContent })
                          }
                          className="font-serif-title font-black text-[25px] text-slate-950 tracking-wider uppercase outline-none cursor-text"
                        >
                          {t2Data.topPlaque}
                        </span>
                      </div>
                    </div>

                    <ReadyStockRibbon
                      line1={t2Data.ribbonLine1}
                      line2={t2Data.ribbonLine2}
                      onEditLine1={(v) => setT2Data({ ...t2Data, ribbonLine1: v })}
                      onEditLine2={(v) => setT2Data({ ...t2Data, ribbonLine2: v })}
                    />
                  </div>

                  {/* Main Title */}
                  <div className="text-center -mt-3">
                    <h1
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        setT2Data({ ...t2Data, mainTitle: e.currentTarget.textContent })
                      }
                      className="font-serif-title font-extrabold text-[46px] tracking-[0.04em] gold-3d-heading uppercase leading-none outline-none cursor-text"
                    >
                      {t2Data.mainTitle}
                    </h1>
                  </div>
                </div>

                {/* ROW 2: 2-COLUMN SHOWCASE */}
                <div className="relative z-10 grid grid-cols-12 gap-6 items-center flex-1 my-2">
                  {/* Left Column: Game Cover Box */}
                  <div className="col-span-6 flex justify-center pl-4">
                    <div
                      className="w-[390px] h-[560px] rounded-[4px] bg-[#0c101c] p-4 flex flex-col justify-between relative"
                      style={{
                        border: `2px solid ${t2Data.cardGlowColor}`,
                        boxShadow: `0 0 24px ${t2Data.cardGlowColor}77, 0 0 6px ${t2Data.cardGlowColor}, inset 0 0 12px ${t2Data.cardGlowColor}22`
                      }}
                    >
                      <div className="text-center pt-1 pb-2">
                        <h2
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) =>
                            setT2Data({ ...t2Data, gameTitle: e.currentTarget.textContent })
                          }
                          className="font-luxury font-black text-[38px] gold-3d-heading tracking-[0.04em] uppercase leading-none outline-none cursor-text"
                        >
                          {t2Data.gameTitle}
                        </h2>
                        <p
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) =>
                            setT2Data({ ...t2Data, gameSubtitle: e.currentTarget.textContent })
                          }
                          className="font-luxury font-semibold text-[13px] text-amber-200 tracking-[0.26em] uppercase mt-2 outline-none cursor-text"
                        >
                          {t2Data.gameSubtitle}
                        </p>
                      </div>

                      {/* Cover Artwork */}
                      <div
                        onClick={() => triggerSlotUpload({ template: 't2', type: 'cover' })}
                        className="flex-1 rounded-[2px] overflow-hidden border border-slate-700/80 relative group cursor-pointer bg-slate-950"
                      >
                        <img
                          src={t2Data.gameCover}
                          alt={t2Data.gameTitle}
                          className="w-full h-full object-cover"
                          style={{
                            transform: `scale(${t2Data.coverZoom}) translate(${t2Data.coverX}px, ${t2Data.coverY}px)`
                          }}
                        />
                        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                          <Upload className="w-8 h-8 text-amber-300 mb-2" />
                          <span className="text-xs font-semibold text-slate-100 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-amber-400/40">
                            Ganti Cover Game
                          </span>
                        </div>
                      </div>

                      <PlatformLogosStrip platforms={t2Data.platforms} />
                    </div>
                  </div>

                  {/* Right Column: 4 Feature Capsules */}
                  <div className="col-span-6 flex flex-col justify-center space-y-6 pr-2">
                    {t2Data.features.map((feat, idx) => (
                      <div
                        key={feat.id}
                        className="capsule-double-gold rounded-full px-7 py-5 flex items-center justify-between relative overflow-hidden"
                      >
                        <div className="w-28 h-[2px] bg-amber-100/80 blur-[1px] absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" />
                        <div className="w-28 h-[2px] bg-amber-200/80 blur-[1px] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />

                        <div
                          className="w-32 h-full absolute left-1/3 skew-x-[-28deg] pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)'
                          }}
                        />

                        <span
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const updated = [...t2Data.features];
                            updated[idx] = { ...feat, text: e.currentTarget.textContent };
                            setT2Data({ ...t2Data, features: updated });
                          }}
                          className="font-serif-title font-bold text-[22px] gold-subtitle-glow tracking-wider uppercase outline-none cursor-text"
                        >
                          {feat.text}
                        </span>

                        <div className="shrink-0 flex items-center">
                          {idx === 0 && (
                            <span
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const updated = [...t2Data.features];
                                updated[idx] = {
                                  ...feat,
                                  highlight: e.currentTarget.textContent
                                };
                                setT2Data({ ...t2Data, features: updated });
                              }}
                              className="font-luxury font-black text-[31px] gold-3d-heading tracking-tight outline-none cursor-text"
                            >
                              {feat.highlight}
                            </span>
                          )}
                          {idx === 1 && (
                            <svg viewBox="0 0 64 46" className="w-14 h-10 drop-shadow-[0_0_8px_rgba(223,189,112,0.4)]">
                              <g fill="none" stroke="#f3deb0" strokeWidth="2.5">
                                <circle cx="32" cy="14" r="6" />
                                <path d="M20 36 C20 27 44 27 44 36 Z" />
                                <circle cx="16" cy="18" r="5" />
                                <path d="M6 38 C6 30 22 30 24 38 Z" />
                                <circle cx="48" cy="18" r="5" />
                                <path d="M40 38 C42 30 58 30 58 38 Z" />
                              </g>
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg viewBox="0 0 50 50" className="w-12 h-12 drop-shadow-[0_0_8px_rgba(223,189,112,0.4)]">
                              <circle
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                stroke="#f3deb0"
                                strokeWidth="3"
                              />
                              <path
                                d="M16 25 L23 32 L38 15"
                                fill="none"
                                stroke="#f3deb0"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {idx === 3 && (
                            <svg viewBox="0 0 50 54" className="w-12 h-12 drop-shadow-[0_0_10px_rgba(223,189,112,0.5)]">
                              <path
                                d="M25 4 L43 11 V25 C43 37 34 44 25 49 C16 44 7 37 7 25 V11 Z"
                                fill="none"
                                stroke="#f3deb0"
                                strokeWidth="3.2"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROW 3: BOTTOM BANNER */}
                <div className="relative z-10 flex items-center h-[105px] mt-1">
                  <div className="z-20 -ml-9 -mb-8 mr-[-45px]">
                    <GoldenCrownCircleMedallion />
                  </div>

                  <div className="flex-1 gold-metallic-rim p-[3px] rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
                    <div className="gold-banner-plate rounded-[5px] py-5 pl-14 pr-16 text-center border border-amber-900/40">
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          setT2Data({ ...t2Data, bannerText: e.currentTarget.textContent })
                        }
                        className="font-serif-title font-black text-[33px] text-slate-950 tracking-wider uppercase leading-none outline-none cursor-text"
                      >
                        {t2Data.bannerText}
                      </div>
                    </div>
                  </div>

                  <div className="z-20 -ml-14 -mb-6">
                    <GoldenClockMedallion variant="t2" className="w-[116px] h-[116px]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}