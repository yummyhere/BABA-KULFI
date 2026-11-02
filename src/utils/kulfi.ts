/**
 * Utility functions and data logic for Baba Imam-ud-Din Ki Mashhoor Kulfi
 */

export interface KulfiFlavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  priceNote: string;
  image: string;
  category: 'classic' | 'special' | 'royal';
  ingredients: string[];
  specs: {
    milkSource: string;
    khoyaPurity: string;
    sweetness: string;
    texture: string;
  };
}

export interface BundleItem {
  flavorId: string;
  name: string;
  count: number;
  unitPrice?: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
  tag?: string;
}

export const PHONE_PRIMARY = '+923032232010';
export const PHONE_SECONDARY = '+923336750398';
export const PHONE_DISPLAY_1 = '+92 303 2232010';
export const PHONE_DISPLAY_2 = '+92 333 6750398';
export const ADDRESS_TEXT = 'Sadar Chowk, Kotwali Road, Jhang Sadar, Pakistan';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Sadar+Chowk+Kotwali+Road+Jhang+Sadar+Pakistan';

/**
 * Generates a direct WhatsApp click-to-chat URL with pre-filled message
 */
export function buildWhatsAppLink(
  phone: string = PHONE_PRIMARY,
  message: string = 'Salam! I would like to inquire about Baba Imam-ud-Din Ki Mashhoor Kulfi.'
): string {
  // Strip non-numeric except leading plus, or clean to plain digits for wa.me
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Formats a Family Bundle WhatsApp order message
 */
export function createBundleOrderMessage(
  bundleSize: number,
  selectedFlavors: { name: string; quantity: number }[],
  customerNote: string = ''
): string {
  const flavorLines = selectedFlavors
    .filter((f) => f.quantity > 0)
    .map((f) => `• ${f.quantity}x ${f.name}`)
    .join('\n');

  let text = `Salam Baba Kulfi Team!\nI would like to order a Family Gathering Kulfi Bundle (${bundleSize} sticks):\n\n${flavorLines}`;
  if (customerNote.trim()) {
    text += `\n\nSpecial Note: ${customerNote.trim()}`;
  }
  text += `\n\nPlease let me know the price and delivery/pickup availability in Jhang. Shukriya!`;
  return text;
}

/**
 * Calculates total sticks in a bundle selection
 */
export function calculateTotalSticks(items: { quantity: number }[]): number {
  return items.reduce((sum, item) => sum + (Math.max(0, item.quantity) || 0), 0);
}

/**
 * Calculates review summary stats from a list of reviews
 */
export function calculateReviewStats(reviews: ReviewItem[]): {
  average: number;
  totalCount: number;
  fiveStarCount: number;
} {
  if (!reviews || reviews.length === 0) {
    return { average: 4.8, totalCount: 65, fiveStarCount: 58 };
  }
  const totalCount = reviews.length;
  const totalScore = reviews.reduce((sum, r) => sum + r.rating, 0);
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const average = Number((totalScore / totalCount).toFixed(1));
  return { average, totalCount, fiveStarCount };
}

/**
 * Filters store/branch landmarks or directions query
 */
export function matchStoreQuery(query: string): boolean {
  if (!query || query.trim() === '') return true;
  const q = query.toLowerCase().trim();
  const keywords = ['jhang', 'sadar', 'kotwali', 'chowk', 'punjab', 'pakistan', 'baba', 'kulfi', 'store', 'shop'];
  return keywords.some((kw) => q.includes(kw)) || 'sadar chowk, kotwali road, jhang sadar'.includes(q);
}
