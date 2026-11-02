import React, { useState } from 'react';
import { Search, ShoppingBag, MessageCircle, Menu, X } from 'lucide-react';
import { buildWhatsAppLink, PHONE_PRIMARY } from '../utils/kulfi';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenBundle: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenBundle, cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = buildWhatsAppLink(
    PHONE_PRIMARY,
    'Salam! I am visiting your website and would like to inquire about Baba Imam-ud-Din Ki Mashhoor Kulfi.'
  );

  return (
    <header className="sticky top-3 sm:top-4 z-40 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full max-w-[1720px] mx-auto">
      {/* Full-width Floating Pill Container */}
      <nav
        aria-label="Main Navigation"
        className="w-full bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_30px_rgba(84,32,8,0.09)] border border-[#542008]/10 px-5 sm:px-8 lg:px-10 xl:px-14 py-3.5 flex items-center justify-between transition-all"
      >
        {/* Left Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-10 text-[13.5px] font-semibold text-[#542008]/85 tracking-wide">
          <a
            href="#home"
            className="hover:text-[#E67A19] transition-colors focus:outline-none focus:text-[#E67A19]"
          >
            Home
          </a>
          <a
            href="#flavors"
            className="hover:text-[#E67A19] transition-colors focus:outline-none focus:text-[#E67A19]"
          >
            Flavors
          </a>
          <a
            href="#story"
            className="hover:text-[#E67A19] transition-colors focus:outline-none focus:text-[#E67A19]"
          >
            About Us
          </a>
          <a
            href="#bundle"
            className="hover:text-[#E67A19] transition-colors focus:outline-none focus:text-[#E67A19]"
          >
            Our Kulfi
          </a>
        </div>

        {/* Center Logo */}
        <a
          href="#home"
          className="flex items-center justify-center text-center group focus:outline-none"
        >
          <span className="font-display text-2xl sm:text-3xl text-[#542008] tracking-wider leading-none group-hover:text-[#E67A19] transition-colors">
            BABA KULFI
          </span>
        </a>

        {/* Right Links & Action Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] font-semibold text-[#542008]/85 tracking-wide">
          <a
            href="#story"
            className="hover:text-[#E67A19] transition-colors focus:outline-none focus:text-[#E67A19]"
          >
            Our Story
          </a>
          <a
            href="#contact"
            className="hover:text-[#E67A19] transition-colors focus:outline-none focus:text-[#E67A19]"
          >
            Contact
          </a>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search kulfi flavors and store"
            className="p-1.5 text-[#542008] hover:text-[#E67A19] transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-[#542008]"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Direct WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="p-1.5 text-[#542008] hover:text-[#25D366] transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Bundle Cart Bag Trigger */}
          <button
            onClick={onOpenBundle}
            aria-label="Open family kulfi bundle selector"
            className="relative p-1.5 text-[#542008] hover:text-[#E67A19] transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-[#542008]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-[#E67A19] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount > 0 ? cartCount : '★'}
            </span>
          </button>
        </div>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 text-[#542008] hover:text-[#E67A19]"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBundle}
            aria-label="Open family kulfi bundle"
            className="relative p-2 text-[#542008] hover:text-[#E67A19]"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#542008] hover:text-[#E67A19] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden mt-2 bg-white/98 backdrop-blur-lg rounded-3xl p-5 shadow-xl border border-[#542008]/15 animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col gap-3 text-sm font-bold text-[#542008]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#F5E8C7] transition-colors"
            >
              Home
            </a>
            <a
              href="#flavors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#F5E8C7] transition-colors"
            >
              Flavors (Signature Kulfi)
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#F5E8C7] transition-colors"
            >
              Our Story (Since 1974)
            </a>
            <a
              href="#bundle"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#F5E8C7] transition-colors"
            >
              Family Gathering Pack
            </a>
            <a
              href="#store-locator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#F5E8C7] transition-colors"
            >
              Find Our Jhang Shop
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#F5E8C7] transition-colors"
            >
              Customer Reviews
            </a>

            <div className="pt-3 border-t border-[#542008]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBundle();
                }}
                className="w-full py-3 rounded-full bg-[#542008] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Customize Family Bundle
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: +92 303 2232010
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
