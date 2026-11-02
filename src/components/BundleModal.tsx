import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, Package, Sparkles } from 'lucide-react';
import { ALL_BUNDLE_FLAVORS } from '../data/kulfiData';
import { createBundleOrderMessage, calculateTotalSticks, buildWhatsAppLink, PHONE_PRIMARY } from '../utils/kulfi';

interface BundleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BundleModal: React.FC<BundleModalProps> = ({ isOpen, onClose }) => {
  const [flavorCounts, setFlavorCounts] = useState<{ [key: string]: number }>({
    'traditional-milk': 4,
    'khoya-kulfi': 4,
    'pistachio-kulfi': 4,
    'saffron-kulfi': 0,
    'badami-kulfi': 0,
    'rose-kulfi': 0,
    'choc-kulfi': 0,
  });

  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  const totalSticks = calculateTotalSticks(
    Object.values(flavorCounts).map((q) => ({ quantity: q }))
  );

  const handleIncrement = (id: string) => {
    setFlavorCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id: string) => {
    setFlavorCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  };

  const handleSetPreset = (size: number) => {
    if (size === 6) {
      setFlavorCounts({
        'traditional-milk': 2,
        'khoya-kulfi': 2,
        'pistachio-kulfi': 2,
        'saffron-kulfi': 0,
        'badami-kulfi': 0,
        'rose-kulfi': 0,
        'choc-kulfi': 0,
      });
    } else if (size === 12) {
      setFlavorCounts({
        'traditional-milk': 4,
        'khoya-kulfi': 4,
        'pistachio-kulfi': 2,
        'saffron-kulfi': 2,
        'badami-kulfi': 0,
        'rose-kulfi': 0,
        'choc-kulfi': 0,
      });
    } else if (size === 24) {
      setFlavorCounts({
        'traditional-milk': 8,
        'khoya-kulfi': 8,
        'pistachio-kulfi': 4,
        'saffron-kulfi': 2,
        'badami-kulfi': 2,
        'rose-kulfi': 0,
        'choc-kulfi': 0,
      });
    }
  };

  const selectedList = ALL_BUNDLE_FLAVORS.map((f) => ({
    name: f.name,
    quantity: flavorCounts[f.id] || 0,
  })).filter((item) => item.quantity > 0);

  const orderMsg = createBundleOrderMessage(totalSticks, selectedList, customerNote);
  const whatsappUrl = buildWhatsAppLink(PHONE_PRIMARY, orderMsg);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bundle-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A1D0A]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FFF9EE] rounded-[32px] border-4 border-[#542008] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#542008]/15">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#E67A19] text-white">
                <Package className="w-4 h-4" />
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#E67A19]">
                Family Gathering Pack
              </span>
            </div>
            <h2
              id="bundle-modal-title"
              className="text-2xl sm:text-3xl font-display text-[#542008] uppercase leading-tight mt-1"
            >
              Custom Kulfi Bundle
            </h2>
            <p className="text-xs text-[#542008]/80 mt-1">
              Select your traditional sticks. We pack in insulated ice boxes for fresh enjoyment across Jhang.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close bundle modal"
            className="w-9 h-9 rounded-full bg-[#542008] text-[#FFF9EE] flex items-center justify-center hover:bg-[#E67A19] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset quick buttons */}
        <div className="pt-3 pb-2 flex items-center gap-2">
          <span className="text-xs font-bold text-[#542008]">Popular Packs:</span>
          <button
            onClick={() => handleSetPreset(6)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              totalSticks === 6
                ? 'bg-[#542008] text-white'
                : 'bg-[#F5E8C7] text-[#542008] hover:bg-[#EAD5A5]'
            }`}
          >
            6 Sticks
          </button>
          <button
            onClick={() => handleSetPreset(12)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              totalSticks === 12
                ? 'bg-[#542008] text-white'
                : 'bg-[#F5E8C7] text-[#542008] hover:bg-[#EAD5A5]'
            }`}
          >
            12 Sticks (Family)
          </button>
          <button
            onClick={() => handleSetPreset(24)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              totalSticks === 24
                ? 'bg-[#542008] text-white'
                : 'bg-[#F5E8C7] text-[#542008] hover:bg-[#EAD5A5]'
            }`}
          >
            24 Sticks (Party)
          </button>
        </div>

        {/* Flavor Selector List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1">
          {ALL_BUNDLE_FLAVORS.map((flavor) => {
            const count = flavorCounts[flavor.id] || 0;
            return (
              <div
                key={flavor.id}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#F5E8C7]/70 border border-[#542008]/10 hover:border-[#542008]/30 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: flavor.color }}
                    />
                    <span className="text-sm font-bold text-[#542008]">{flavor.name}</span>
                  </div>
                  <span className="text-[11px] text-[#8C4B23] font-medium ml-5 block">
                    {flavor.tag}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(flavor.id)}
                    aria-label={`Decrease ${flavor.name}`}
                    disabled={count === 0}
                    className="w-7 h-7 rounded-full bg-[#EAD5A5] text-[#542008] disabled:opacity-30 hover:bg-[#542008] hover:text-white flex items-center justify-center transition-colors font-bold"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-display text-base text-[#542008]">
                    {count}
                  </span>
                  <button
                    onClick={() => handleIncrement(flavor.id)}
                    aria-label={`Increase ${flavor.name}`}
                    className="w-7 h-7 rounded-full bg-[#542008] text-white hover:bg-[#E67A19] flex items-center justify-center transition-colors font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Customer Note */}
          <div className="mt-3">
            <label htmlFor="bundle-note" className="block text-xs font-bold text-[#542008] mb-1">
              Special Delivery / Pickup Note (Optional):
            </label>
            <input
              id="bundle-note"
              type="text"
              placeholder="e.g. Pickup at Sadar Chowk shop at 8:00 PM, extra dry ice"
              value={customerNote}
              onChange={(e) => setCustomerNote(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#542008]/20 focus:outline-none focus:ring-2 focus:ring-[#542008] text-[#542008] placeholder:text-[#542008]/40"
            />
          </div>
        </div>

        {/* Footer Summary & WhatsApp Order CTA */}
        <div className="pt-4 border-t border-[#542008]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs text-[#542008]/70 block">Total Bundle Sticks:</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-display text-[#542008]">{totalSticks}</span>
              <span className="text-xs font-bold text-[#E67A19]">Traditional Sticks</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={totalSticks === 0}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white shadow-lg transition-all ${
              totalSticks === 0
                ? 'bg-gray-400 pointer-events-none'
                : 'bg-[#542008] hover:bg-[#E67A19] active:scale-95'
            }`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Send Order to WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
