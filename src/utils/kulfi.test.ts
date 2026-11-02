import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppLink,
  createBundleOrderMessage,
  calculateTotalSticks,
  calculateReviewStats,
  matchStoreQuery,
  PHONE_PRIMARY
} from './kulfi.ts';

test('buildWhatsAppLink generates valid wa.me link with cleaned phone digits and encoded query', () => {
  const link = buildWhatsAppLink('+92 303 2232010', 'Salam Baba Kulfi');
  assert.equal(link.startsWith('https://wa.me/923032232010?text='), true);
  assert.equal(link.includes('Salam%20Baba%20Kulfi'), true);
});

test('calculateTotalSticks sums all flavor quantities safely', () => {
  const items = [
    { quantity: 3 },
    { quantity: 4 },
    { quantity: 0 },
    { quantity: -2 }
  ];
  assert.equal(calculateTotalSticks(items), 7);
});

test('createBundleOrderMessage produces structured WhatsApp order with items and notes', () => {
  const message = createBundleOrderMessage(
    10,
    [
      { name: 'Traditional Milk Kulfi', quantity: 4 },
      { name: 'Khoya Kulfi', quantity: 4 },
      { name: 'Pistachio Kulfi', quantity: 2 },
      { name: 'Saffron Kulfi', quantity: 0 }
    ],
    'Please pack with dry ice for Sadar Chowk pickup'
  );

  assert.equal(message.includes('10 sticks'), true);
  assert.equal(message.includes('4x Traditional Milk Kulfi'), true);
  assert.equal(message.includes('4x Khoya Kulfi'), true);
  assert.equal(message.includes('2x Pistachio Kulfi'), true);
  assert.equal(message.includes('Saffron Kulfi'), false);
  assert.equal(message.includes('Please pack with dry ice for Sadar Chowk pickup'), true);
});

test('calculateReviewStats computes average and counts accurately', () => {
  const sampleReviews = [
    { id: '1', author: 'A', location: 'L', rating: 5, text: '', avatar: '', date: '' },
    { id: '2', author: 'B', location: 'L', rating: 5, text: '', avatar: '', date: '' },
    { id: '3', author: 'C', location: 'L', rating: 4, text: '', avatar: '', date: '' }
  ];
  const stats = calculateReviewStats(sampleReviews);
  assert.equal(stats.totalCount, 3);
  assert.equal(stats.fiveStarCount, 2);
  assert.equal(stats.average, 4.7);
});

test('matchStoreQuery recognizes Jhang and store landmarks', () => {
  assert.equal(matchStoreQuery('Kotwali Road'), true);
  assert.equal(matchStoreQuery('Jhang'), true);
  assert.equal(matchStoreQuery(''), true);
  assert.equal(matchStoreQuery('random non existing city xyz 999'), false);
});
