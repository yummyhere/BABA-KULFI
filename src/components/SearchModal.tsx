import React, { useState } from 'react';
import { X, Search, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { SIGNATURE_FLAVORS, STORE_INFO } from '../data/kulfiData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFlavor: (flavorId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectFlavor }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredFlavors = SIGNATURE_FLAVORS.filter((f) => {
    const q = searchTerm.toLowerCase();
    return (
      f.name.toLowerCase().includes(q) ||
      f.shortDesc.toLowerCase().includes(q) ||
      f.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Kulfi & Heritage"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-[#4A1D0A]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FFF9EE] rounded-[28px] border-4 border-[#542008] p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-[#542008]/50" />
          <input
            type="text"
            autoFocus
            placeholder="Search kulfi flavors, ingredients (khoya, pistachio...), or Sadar Chowk store..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-[#F5E8C7]/50 border border-[#542008]/20 focus:outline-none focus:ring-2 focus:ring-[#542008] text-sm text-[#542008] font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 text-[#542008]/50 hover:text-[#542008]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="mt-4 max-h-72 overflow-y-auto space-y-2">
          <div className="text-[11px] uppercase font-bold tracking-wider text-[#8C4B23] px-1">
            Matching Kulfi Flavors
          </div>
          {filteredFlavors.length > 0 ? (
            filteredFlavors.map((flavor) => (
              <button
                key={flavor.id}
                onClick={() => {
                  onSelectFlavor(flavor.id);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F5E8C7] border border-[#542008]/10 flex items-center justify-between group transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#542008] group-hover:text-[#E67A19] transition-colors">
                    {flavor.name}
                  </h4>
                  <p className="text-xs text-[#542008]/70 line-clamp-1">{flavor.shortDesc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#542008]/40 group-hover:text-[#E67A19] transition-colors" />
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-xs text-[#542008]/60">
              No matching flavors found for "{searchTerm}".
            </div>
          )}

          {/* Quick Store Info Match */}
          <div className="pt-2 border-t border-[#542008]/10 mt-3">
            <div className="text-[11px] uppercase font-bold tracking-wider text-[#8C4B23] px-1 mb-1">
              Store Location
            </div>
            <div className="p-3 rounded-xl bg-[#F5E8C7]/40 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#E67A19] shrink-0" />
              <div className="text-xs text-[#542008]">
                <strong className="block">{STORE_INFO.name}</strong>
                {STORE_INFO.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
