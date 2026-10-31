import { DEFAULT_TEMPLATE_COLORS } from '../utils/colorUtils';
import { DEFAULT_ENSHROUDED_SVG_DATA } from './gamePresets';

// ============================================================================
// INITIAL DATA STATE FOR TEMPLATE 1 & TEMPLATE 2
// ============================================================================
export const INITIAL_TEMPLATE_1 = {
  brandName: 'JAGO GAMES',
  colors: { ...DEFAULT_TEMPLATE_COLORS.template1 },
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
  ribbonLine1: 'READY',
  ribbonLine2: 'STOCK',
  mainTitle: 'GAME RESMI ORIGINAL',
  subTitle: 'Pilihan Terbaik, Garansi Terpercaya!',
  showPs5Centerpiece: true,
  customCenterpiece: null,
  centerpieceZoom: 1,
  centerpieceX: 0,
  centerpieceY: 0,
  centerpieceFit: 'contain',
  podiumSlots: [
    { id: 'p1', image: null, zoom: 1, x: 0, y: 0, fit: 'contain' },
    { id: 'p2', image: null, zoom: 1, x: 0, y: 0, fit: 'contain' },
    { id: 'p3', image: null, zoom: 1, x: 0, y: 0, fit: 'contain' },
    { id: 'p4', image: null, zoom: 1, x: 0, y: 0, fit: 'contain' }
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
      y: 0,
      fit: 'contain'
    },
    {
      id: 'cat2',
      line1: 'PLAYSTATION 5',
      line2: '',
      hasPlusIcon: false,
      image: null,
      zoom: 1,
      x: 0,
      y: 0,
      fit: 'contain'
    },
    {
      id: 'cat3',
      line1: 'PLAYSTATION 4',
      line2: '',
      hasPlusIcon: false,
      image: null,
      zoom: 1,
      x: 0,
      y: 0,
      fit: 'contain'
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

export const INITIAL_TEMPLATE_2 = {
  brandName: 'JAGO GAMES',
  colors: { ...DEFAULT_TEMPLATE_COLORS.template2 },
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
  coverFit: 'contain',
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

