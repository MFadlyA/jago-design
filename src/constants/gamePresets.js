// ============================================================================
// PRESET GAME CATALOG (Artwork Default Enshrouded-style & Game Populer)
// ============================================================================
export const PRESET_GAMES = [
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
export const DEFAULT_ENSHROUDED_SVG_DATA = `data:image/svg+xml;utf8,${encodeURIComponent(`
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

