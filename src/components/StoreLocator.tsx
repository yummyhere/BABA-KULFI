import React, { useState } from 'react';
import { MapPin, Search, Navigation, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/kulfiData';
import { KulfiVisual } from './KulfiVisual';
import { RayDoodle } from './Doodles';
import { GOOGLE_MAPS_URL, buildWhatsAppLink, PHONE_PRIMARY } from '../utils/kulfi';

export const StoreLocator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('Sadar Chowk, Kotwali Road, Jhang Sadar');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const whatsappUrl = buildWhatsAppLink(
    PHONE_PRIMARY,
    `Salam! I want to visit Baba Imam-ud-Din Ki Mashhoor Kulfi at ${STORE_INFO.address}. Are you open now?`
  );

  return (
    <section
      id="store-locator"
      aria-label="Find Our Kulfi Shop"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Outer Card with Peeking Kulfis on Left and Right (Matching Reference Screenshot) */}
      <div className="relative rounded-[40px] sm:rounded-[56px] bg-[#EAD5A5] border border-[#542008]/15 px-6 py-16 sm:p-20 text-center shadow-md overflow-hidden">
        {/* Floating Peeking Kulfi on the Left Edge (Like the chocolate scoop in reference) */}
        <div className="absolute -left-12 sm:-left-16 bottom-0 sm:bottom-4 pointer-events-none select-none hidden md:block">
          <KulfiVisual
            flavor="khoya"
            size="lg"
            angle={-28}
            className="opacity-95 drop-shadow-[0_20px_25px_rgba(84,32,8,0.25)]"
          />
        </div>

        {/* Floating Peeking Kulfi on the Right Edge (Like the double scoop cone in reference) */}
        <div className="absolute -right-12 sm:-right-16 bottom-0 sm:bottom-4 pointer-events-none select-none hidden md:block">
          <KulfiVisual
            flavor="pistachio"
            size="lg"
            angle={25}
            className="opacity-95 drop-shadow-[0_20px_25px_rgba(84,32,8,0.25)]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Heading with Ray Doodle */}
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#542008] uppercase tracking-wide">
              FIND OUR KULFI SHOP
            </h2>
            <RayDoodle className="w-8 h-8 text-[#E67A19] transform rotate-12" />
          </div>

          <p className="text-sm sm:text-base text-[#542008]/85 font-medium leading-relaxed max-w-lg mx-auto">
            Looking for the original taste of Jhang's famous kulfi? Visit us and enjoy a timeless traditional treat right at Sadar Chowk.
          </p>

          {/* Interactive Search Bar (Matching Reference Layout) */}
          <form
            onSubmit={handleSearchSubmit}
            className="mt-8 sm:mt-10 max-w-xl mx-auto bg-white rounded-full p-2 pl-5 shadow-lg border border-[#542008]/15 flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search className="w-5 h-5 text-[#542008]/50 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, chowk or street..."
                aria-label="Shop location search"
                className="w-full text-xs sm:text-sm font-semibold text-[#542008] bg-transparent focus:outline-none placeholder:text-[#542008]/40"
              />
            </div>

            <div className="flex items-center gap-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Use current GPS location"
                aria-label="Locate on Google Maps"
                className="w-9 h-9 rounded-full bg-[#FAF2DF] hover:bg-[#542008] text-[#542008] hover:text-white flex items-center justify-center transition-colors shrink-0"
              >
                <Navigation className="w-4 h-4" />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] font-display text-sm tracking-wider uppercase px-6 py-2.5 rounded-full transition-colors shrink-0 shadow-md flex items-center gap-1.5"
              >
                <span>DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </form>

          {/* Verified Shop Location Card */}
          <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-[#542008]/15 text-left shadow-sm max-w-xl mx-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-[#E67A19] block">
                  Original Flagship Branch
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#542008] mt-0.5">
                  {STORE_INFO.name}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#25D366]/15 text-[#1a8e45] text-xs font-bold uppercase shrink-0 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Open Today
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#542008]/90 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E67A19] shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E67A19] shrink-0" />
                <span>{STORE_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E67A19] shrink-0" />
                <span>{STORE_INFO.phone1} &bull; {STORE_INFO.phone2}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#542008]/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`tel:${STORE_INFO.phone1.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#542008] hover:text-[#E67A19]"
              >
                <Phone className="w-3.5 h-3.5" /> Call: {STORE_INFO.phone1}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
