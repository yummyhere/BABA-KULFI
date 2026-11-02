import React from 'react';
import { X, Check, MessageCircle, Star, Sparkles } from 'lucide-react';
import { FlavorData } from '../data/kulfiData';
import { KulfiVisual } from './KulfiVisual';
import { buildWhatsAppLink, PHONE_PRIMARY } from '../utils/kulfi';

interface FlavorModalProps {
  flavor: FlavorData | null;
  onClose: () => void;
  onOpenBundleWithFlavor?: (flavorId: string) => void;
}

export const FlavorModal: React.FC<FlavorModalProps> = ({ flavor, onClose, onOpenBundleWithFlavor }) => {
  if (!flavor) return null;

  const visualFlavorKey =
    flavor.id.includes('milk') ? 'milk' :
    flavor.id.includes('pista') ? 'pistachio' :
    flavor.id.includes('saffron') ? 'saffron' : 'khoya';

  const orderMessage = `Salam! I would like to inquire about ordering ${flavor.name} from Baba Imam-ud-Din Ki Mashhoor Kulfi. Please share price and availability.`;
  const whatsappUrl = buildWhatsAppLink(PHONE_PRIMARY, orderMessage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="flavor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A1D0A]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFF9EE] rounded-[32px] border-4 border-[#542008] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close flavor details"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#542008] text-[#FFF9EE] flex items-center justify-center hover:bg-[#E67A19] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E67A19]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Visual Column */}
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#F5E8C7] rounded-3xl p-6 relative">
            <span className="absolute top-3 left-3 bg-[#E67A19] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Since 1974
            </span>
            <div className="py-2">
              <KulfiVisual flavor={visualFlavorKey} size="lg" angle={4} />
            </div>
            <div className="mt-3 flex items-center gap-1 bg-[#542008] text-[#F7C744] px-3 py-1 rounded-full text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{flavor.rating} / 5.0 Rating</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 flex flex-col">
            <span className="text-[#E67A19] font-bold text-sm tracking-widest uppercase">
              Jhang Heritage Recipe
            </span>
            <h2
              id="flavor-modal-title"
              className="text-2xl sm:text-3xl font-display text-[#542008] uppercase leading-tight mt-1"
            >
              {flavor.name}
            </h2>
            <p className="text-sm font-semibold text-[#8C4B23] font-urdu mt-0.5">
              {flavor.urduName}
            </p>

            <p className="text-sm text-[#542008]/90 mt-3 leading-relaxed">
              {flavor.fullDesc}
            </p>

            {/* Ingredients & Garnishes */}
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#542008] mb-1.5">
                Authentic Desi Ingredients:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {flavor.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-[#EAD5A5] text-[#542008] text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    <Check className="w-3 h-3 text-[#E67A19]" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Price Badge and Inquiry CTA */}
            <div className="mt-6 pt-4 border-t border-[#542008]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] uppercase font-bold text-[#8C4B23] block">
                  Pricing & Availability
                </span>
                <span className="text-lg font-display text-[#542008]">
                  {flavor.badgeText}
                </span>
                <span className="text-xs text-[#542008]/70 block">
                  {flavor.priceNote}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-[#542008]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
