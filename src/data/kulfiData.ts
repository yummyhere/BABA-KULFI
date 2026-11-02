/**
 * Data definitions and assets for Baba Imam-ud-Din Ki Mashhoor Kulfi
 */

export interface FlavorData {
  id: string;
  name: string;
  urduName: string;
  shortDesc: string;
  fullDesc: string;
  badgeText: string;
  priceNote: string;
  colorTheme: string;
  accentBg: string;
  garnishes: string[];
  ingredients: string[];
  originNote: string;
  stickAngle?: number;
  highlightColor?: string;
  rating: number;
}

export const SIGNATURE_FLAVORS: FlavorData[] = [
  {
    id: 'traditional-milk',
    name: 'TRADITIONAL MILK KULFI',
    urduName: 'روایتی دودھ والی قلفی',
    shortDesc: 'Classic rich milk kulfi made with pure liquid milk and traditional slow-cooked rabri.',
    fullDesc: 'Our original 1974 flagship recipe. Fresh full-cream buffalo milk is slow-simmered in open iron vessels for hours until it reduces to half its volume, naturally caramelizing the milk sugars. Lightly scented with green cardamom pods and frozen in traditional conical moulds.',
    badgeText: 'ASK FOR PRICE',
    priceNote: 'Standard & Large Sticks Available',
    colorTheme: '#FBF4E2',
    accentBg: '#E9D6A9',
    garnishes: ['Crushed Green Cardamom', 'Slow-Simmered Malai', 'Natural Caramel Hue'],
    ingredients: ['100% Pure Buffalo Milk', 'Unrefined Cane Sugar', 'Hand-crushed Cardamom', 'Traditional Rabri'],
    originNote: 'Handcrafted daily at Sadar Chowk since 1974 according to Baba Imam-ud-Din’s secret temperature timings.',
    rating: 4.9,
  },
  {
    id: 'khoya-kulfi',
    name: 'KHOYA KULFI',
    urduName: 'خالص کھویا قلفi',
    shortDesc: 'Creamy, authentic khoya kulfi with an ultra-rich, dense and velvety traditional taste.',
    fullDesc: 'The gold standard of Jhang’s dessert heritage. We prepare fresh, unadulterated khoya (slow-evaporated milk solids) every morning. The khoya lends an extraordinarily dense, non-icy, melt-in-the-mouth texture that has made Baba Imam-ud-Din a household name for over five decades.',
    badgeText: 'ASK FOR PRICE',
    priceNote: 'Most Popular Choice',
    colorTheme: '#F9EED4',
    accentBg: '#E7D3A4',
    garnishes: ['Pure Desi Khoya Crumbs', 'Caramelized Milk Flakes', 'Cardamom Essence'],
    ingredients: ['Fresh House-made Khoya', 'Condensed Milk Solids', 'Pure Desi Ghee Essence', 'Organic Sugar'],
    originNote: 'Jhang’s favorite treat for weddings, family reunions, and evening dessert strolls.',
    rating: 5.0,
  },
  {
    id: 'pistachio-kulfi',
    name: 'PISTACHIO KULFI',
    urduName: 'پستہ دار قلفی',
    shortDesc: 'Premium kulfi infused with toasted Peshawari pistachios and fragrant aromatic essences.',
    fullDesc: 'An indulgent royal delight. Whole premium emerald pistachios from Peshawar are lightly roasted to unlock their natural oils, then crushed and folded lavishly throughout the creamy khoya matrix, topped with sliced slivers for an irresistible nutty crunch.',
    badgeText: 'ASK FOR PRICE',
    priceNote: 'Royal Heritage Edition',
    colorTheme: '#F3EED6',
    accentBg: '#E1D4A1',
    garnishes: ['Sliced Peshawari Pistachios', 'Toasted Almond Slivers', 'Saffron Threads'],
    ingredients: ['Peshawari Green Pistachios', 'Rich Khoya Milk Base', 'Kewra Water Essence', 'Cardamom'],
    originNote: 'Loved by traveling dignitaries and families visiting Jhang from across Pakistan.',
    rating: 4.9,
  },
];

export const ALL_BUNDLE_FLAVORS = [
  { id: 'traditional-milk', name: 'Traditional Milk Kulfi', color: '#F7E7C8', tag: 'Classic 1974' },
  { id: 'khoya-kulfi', name: 'Pure Khoya Kulfi', color: '#EBD2A0', tag: 'Most Beloved' },
  { id: 'pistachio-kulfi', name: 'Roasted Pistachio Kulfi', color: '#D4E2AF', tag: 'Peshawari Pista' },
  { id: 'saffron-kulfi', name: 'Royal Zafrani Kulfi', color: '#FCE09B', tag: 'Pure Saffron' },
  { id: 'badami-kulfi', name: 'Crushed Almond Kulfi', color: '#F5E0C3', tag: 'Badami Malai' },
  { id: 'rose-kulfi', name: 'Gulab Falooda Kulfi', color: '#F8CAD2', tag: 'Rose Essence' },
  { id: 'choc-kulfi', name: 'Rich Cocoa Kulfi', color: '#BCA087', tag: 'Modern Twist' },
];

export const STORY_PHOTOS = [
  {
    title: 'Cute Malai Milk Kulfi',
    subtitle: 'Classic 1974 Whole Milk Recipe',
    url: '/assets/cartoon_kulfi_malai.svg',
    caption: 'Creamy slow-simmered milk with a sweet happy smile',
    aspect: 'aspect-square',
    offset: 'translate-y-0',
  },
  {
    title: 'Cute Royal Zafrani Kulfi',
    subtitle: 'Golden Saffron & Honey Sweetness',
    url: '/assets/cartoon_kulfi_zafran.svg',
    caption: 'Sunny zafran threads with a cute playful wink',
    aspect: 'aspect-[4/5]',
    offset: 'translate-y-6 md:translate-y-12',
  },
  {
    title: 'Cute Pistachio Shahi Kulfi',
    subtitle: 'Roasted Peshawari Pistachios',
    url: '/assets/cartoon_kulfi_pista.svg',
    caption: 'Minty-fresh pistachio crunch with a laughing kawaii face',
    aspect: 'aspect-square',
    offset: '-translate-y-2 md:-translate-y-4',
  },
  {
    title: 'Cute Pure Khoya Badami',
    subtitle: 'Slow-Cooked Desi Milk Solids',
    url: '/assets/cartoon_kulfi_khoya.svg',
    caption: 'Rich caramelized khoya & almonds with joyful starry eyes',
    aspect: 'aspect-[4/5]',
    offset: 'translate-y-4 md:translate-y-8',
  },
];

export const CUSTOMER_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Emily S. / Ayesha Khan',
    location: 'Lahore (Visiting Jhang)',
    rating: 5,
    text: 'Absolutely delicious! The authentic taste of traditional kulfi takes me back to childhood. You can taste the genuine slow-cooked rabri and pure milk!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    date: '2 days ago',
    tag: 'Authentic Taste',
  },
  {
    id: 'rev-2',
    author: 'Jacob M. / Farhan Qureshi',
    location: 'Jhang Sadar',
    rating: 5,
    text: 'The quality of their khoya kulfi is unmatched! I’ve been coming here for 18 years, and I’ve never been disappointed. The staff is always warm and welcoming.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    date: '1 week ago',
    tag: '18 Year Regular',
  },
  {
    id: 'rev-3',
    author: 'Sophia L. / Zainab Bibi',
    location: 'Faisalabad',
    rating: 5,
    text: 'An iconic taste that has been loved by generations. Every time we pass through Kotwali Road, stopping here is mandatory. The pistachio crunch is heavenly!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    date: '3 weeks ago',
    tag: 'Must Visit in Jhang',
  },
  {
    id: 'rev-4',
    author: 'Daniel R. / Tariq Mehmood',
    location: 'Islamabad',
    rating: 5,
    text: 'Hands down the best traditional kulfi in Pakistan! Rich, creamy, and made with 100% pure ingredients. Nothing beats the traditional taste of Baba Imam-ud-Din.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    date: '1 month ago',
    tag: '5 Star Heritage',
  },
];

export const STORE_INFO = {
  name: 'Baba Imam-ud-Din Ki Mashhoor Kulfi',
  established: 'Since 1974',
  address: 'Sadar Chowk, Kotwali Road, Jhang Sadar, Punjab, Pakistan',
  landmark: 'Near Historic Clock Tower & Main Bazar Entrance',
  phone1: '+92 303 2232010',
  phone2: '+92 333 6750398',
  hours: 'Open Daily: 11:00 AM – 1:30 AM (Midnight)',
  rating: '4.8 Stars (65 Verified Reviews)',
  specialties: ['Liquid-Milk Khoya Kulfi', 'Pistachio Malai Sticks', 'Traditional Matka Packs', 'Catering Orders'],
};
