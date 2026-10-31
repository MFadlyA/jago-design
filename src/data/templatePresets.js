// ============================================================================
// TEMPLATE 3, 4, 5 PRESETS & INITIAL DATA
// ============================================================================

export const INITIAL_TEMPLATE_3 = {
  brandName: 'JAGO GAMES',
  logoCustom: null,
  logoZoom: 1,
  logoX: 0,
  logoY: 0,
  logoFit: 'contain',
  customBgOverlay: null,
  bgZoom: 1,
  bgX: 0,
  bgY: 0,
  bgFit: 'cover',
  themeStyle: 'luxury', // 'luxury' | 'darkPolygon'
  colors: {
    primary: { r: 223, g: 189, b: 112 }, // #dfbd70 (Champagne Gold)
    mesh: { r: 56, g: 189, b: 248 },     // #38bdf8 (Cyan)
    background: { r: 9, g: 13, b: 22 }   // #090d16
  },
  mainTitle: 'Q & A',
  subTitle: 'INFORMASI PEMBELIAN AKUN & GARANSI RESMI',
  ribbonLine1: 'INFO',
  ribbonLine2: 'RESMI',
  qas: [
    {
      id: 'qa-1',
      question: 'Apakah gamenya original dan downloadnya dimana?',
      answer:
        'Game original dan downloadnya langsung di aplikasi resmi gamenya dijual seperti Steam, Ubisoft Connect atau Epic Games.'
    },
    {
      id: 'qa-2',
      question: 'Apa itu sharing account?',
      answer:
        'Akun milik kita yang sudah beli gamenya, akan kita bagi id dan passwordnya. Jadi kalian bisa maenin game original, tanpa harus beli gamenya sendiri yang harganya bisa 20x lipat lebih mahal.'
    },
    {
      id: 'qa-3',
      question: 'Akun sharing apakah maenya gantian dan save gamenya bagaimana?',
      answer:
        'Akun sharing bisa maen kapan saja sepuasnya dengan mode offline. Setiap device punya progress atau save gamenya sendiri, jadi tidak akan menumpuk satu sama lain.'
    },
    {
      id: 'qa-4',
      question: 'Apakah bisa di update?',
      answer: 'Game original tentunya bisa di update seterusnya.'
    },
    {
      id: 'qa-5',
      question: 'Cara install gamenya bagaimana?',
      answer: 'Admin akan membantu proses instalasi sampai gamenya bisa dimainkan.'
    },
    {
      id: 'qa-6',
      question: 'Bisa di install di beberapa device?',
      answer: 'Beli 1 hanya untuk 1 device dan bergaransi selamanya.'
    }
  ],
  footerBadge: '100% GAME RESMI ORIGINAL • BERGARANSI SELAMANYA'
};

export const INITIAL_TEMPLATE_4 = {
  brandName: 'JAGO GAMES',
  gameTitle: 'EA SPORTS FC 25',
  themeStyle: 'luxury', // 'luxury' | 'retroStripes'
  colors: {
    primary: { r: 223, g: 189, b: 112 }, // #dfbd70 (Champagne Gold)
    minSpec: { r: 6, g: 182, b: 212 },   // #06b6d4 (Cyan)
    recSpec: { r: 245, g: 158, b: 11 },  // #f59e0b (Amber/Gold)
    background: { r: 9, g: 13, b: 22 }   // #090d16
  },
  logoCustom: null,
  logoZoom: 1,
  logoX: 0,
  logoY: 0,
  logoFit: 'contain',
  customBgOverlay: null,
  bgZoom: 1,
  bgX: 0,
  bgY: 0,
  bgFit: 'cover',
  hardwareLogos: {
    nvidia: true,
    ryzen: true,
    intel: true,
    rog: true
  },
  minimum: {
    title: 'MINIMUM REQUIREMENTS',
    os: 'WINDOWS 10/11 - 64-BIT (LATEST UPDATE)',
    processor: 'AMD RYZEN 5 1600 OR INTEL CORE I5 6600K',
    memory: '8 GB RAM',
    graphics: 'AMD RX 570 OR NVIDIA GTX 1050 TI',
    directx: 'VERSI 12',
    network: 'KONEKSI INTERNET BROADBAND',
    storage: '60 GB RUANG TERSEDIA'
  },
  recommended: {
    title: 'RECOMMENDED REQUIREMENTS',
    os: 'WINDOWS 10/11 - 64-BIT (LATEST UPDATE)',
    processor: 'AMD RYZEN 7 2700X OR INTEL CORE I7 6700',
    memory: '12 GB RAM',
    graphics: 'AMD RX 5600 XT OR NVIDIA GTX 1660',
    directx: 'VERSI 12',
    network: 'KONEKSI INTERNET BROADBAND',
    storage: '60 GB RUANG TERSEDIA'
  },
  footerNote: 'SPESIFIKASI DAPAT BERUBAH MENGIKUTI UPDATE PATCH DEVELOPER'
};

export const INITIAL_TEMPLATE_5 = {
  brandName: 'JAGO GAMES',
  gameTitle: 'EA SPORTS FC 25',
  themeStyle: 'luxury', // 'luxury' | 'retroStripes'
  colors: {
    primary: { r: 223, g: 189, b: 112 },   // #dfbd70 (Champagne Gold)
    frameGlow: { r: 223, g: 189, b: 112 }, // #dfbd70
    background: { r: 9, g: 13, b: 22 }     // #090d16
  },
  mainTitle: 'GAMEPLAY SCREENSHOT',
  subTitle: 'GRAFIK ASLI ULTRA & HIGHLIGHT MOMEN DALAM GAME',
  logoCustom: null,
  logoZoom: 1,
  logoX: 0,
  logoY: 0,
  logoFit: 'contain',
  customBgOverlay: null,
  bgZoom: 1,
  bgX: 0,
  bgY: 0,
  bgFit: 'cover',
  screenshots: [
    {
      id: 'ss-1',
      title: 'Duel Perebutan Bola',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      zoom: 1,
      x: 0,
      y: 0,
      fit: 'contain'
    },
    {
      id: 'ss-2',
      title: 'Atmosfer Megah Stadion',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      zoom: 1,
      x: 0,
      y: 0,
      fit: 'contain'
    },
    {
      id: 'ss-3',
      title: 'Lorong Pemain Masuk Lapangan',
      image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80',
      zoom: 1,
      x: 0,
      y: 0,
      fit: 'contain'
    },
    {
      id: 'ss-4',
      title: 'Selebrasi Gol Dramatis',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80',
      zoom: 1,
      x: 0,
      y: 0,
      fit: 'contain'
    }
  ],
  footerBadge: '100% REAL GAMEPLAY GRAPHICS • CAPTURED ON PC ULTRA 4K'
};

// Preset Spesifikasi untuk Game Populer
export const GAME_SPECS_PRESETS = [
  {
    name: 'EA Sports FC 25',
    title: 'EA SPORTS FC 25',
    minimum: {
      title: 'MINIMUM REQUIREMENTS',
      os: 'WINDOWS 10/11 - 64-BIT (LATEST UPDATE)',
      processor: 'AMD RYZEN 5 1600 OR INTEL CORE I5 6600K',
      memory: '8 GB RAM',
      graphics: 'AMD RX 570 OR NVIDIA GTX 1050 TI',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '60 GB RUANG TERSEDIA'
    },
    recommended: {
      title: 'RECOMMENDED REQUIREMENTS',
      os: 'WINDOWS 10/11 - 64-BIT (LATEST UPDATE)',
      processor: 'AMD RYZEN 7 2700X OR INTEL CORE I7 6700',
      memory: '12 GB RAM',
      graphics: 'AMD RX 5600 XT OR NVIDIA GTX 1660',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '60 GB RUANG TERSEDIA'
    },
    screenshots: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Black Myth: Wukong',
    title: 'BLACK MYTH: WUKONG',
    minimum: {
      title: 'MINIMUM REQUIREMENTS',
      os: 'WINDOWS 10 64-BIT',
      processor: 'INTEL CORE I5-6600 OR AMD RYZEN 5 1600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GTX 1060 (6GB) OR AMD RX 580 (8GB)',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '130 GB RUANG TERSEDIA (SSD DIREKOMENDASIKAN)'
    },
    recommended: {
      title: 'RECOMMENDED REQUIREMENTS',
      os: 'WINDOWS 10/11 64-BIT',
      processor: 'INTEL CORE I7-9700 OR AMD RYZEN 5 5500',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 2060 OR AMD RX 5700 XT / INTEL ARC A750',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '130 GB SSD RUANG TERSEDIA'
    },
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Cyberpunk 2077',
    title: 'CYBERPUNK 2077',
    minimum: {
      title: 'MINIMUM REQUIREMENTS',
      os: 'WINDOWS 10 64-BIT',
      processor: 'INTEL CORE I7-6700 OR AMD RYZEN 5 1600',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GTX 1060 (6GB) OR AMD RX 580 (8GB)',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '70 GB SSD RUANG TERSEDIA'
    },
    recommended: {
      title: 'RECOMMENDED REQUIREMENTS',
      os: 'WINDOWS 10/11 64-BIT',
      processor: 'INTEL CORE I7-12700 OR AMD RYZEN 7 7800X3D',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 2060 SUPER OR AMD RX 5700 XT',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '70 GB SSD RUANG TERSEDIA'
    },
    screenshots: [
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Elden Ring',
    title: 'ELDEN RING',
    minimum: {
      title: 'MINIMUM REQUIREMENTS',
      os: 'WINDOWS 10 64-BIT',
      processor: 'INTEL CORE I5-8400 OR AMD RYZEN 3 3300X',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GEFORCE GTX 1060 3GB OR AMD RADEON RX 580 4GB',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '60 GB RUANG TERSEDIA'
    },
    recommended: {
      title: 'RECOMMENDED REQUIREMENTS',
      os: 'WINDOWS 10/11 64-BIT',
      processor: 'INTEL CORE I7-8700K OR AMD RYZEN 5 3600X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GEFORCE GTX 1070 8GB OR AMD RADEON RX VEGA 56 8GB',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '60 GB RUANG TERSEDIA'
    },
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Enshrouded',
    title: 'ENSHROUDED',
    minimum: {
      title: 'MINIMUM REQUIREMENTS',
      os: 'WINDOWS 10 64-BIT',
      processor: 'INTEL CORE I5-6400 OR AMD RYZEN 5 1500X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GEFORCE GTX 1060 (6GB) OR AMD RADEON RX 580',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '60 GB RUANG TERSEDIA'
    },
    recommended: {
      title: 'RECOMMENDED REQUIREMENTS',
      os: 'WINDOWS 10/11 64-BIT',
      processor: 'INTEL CORE I7-8700 OR AMD RYZEN 7 2700X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GEFORCE RTX 2070 SUPER OR AMD RADEON RX 6700 XT',
      directx: 'VERSI 12',
      network: 'KONEKSI INTERNET BROADBAND',
      storage: '60 GB SSD RUANG TERSEDIA'
    },
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80'
    ]
  }
];
