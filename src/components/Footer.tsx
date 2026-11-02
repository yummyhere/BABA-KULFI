import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/kulfiData';
import { GOOGLE_MAPS_URL, buildWhatsAppLink, PHONE_PRIMARY } from '../utils/kulfi';

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink(
    PHONE_PRIMARY,
    'Salam! I would like to get in touch with Baba Imam-ud-Din Ki Mashhoor Kulfi.'
  );

  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#542008]/15"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
        {/* Column 1: Brand & Socials (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl text-[#542008] tracking-wider">
              BABA KULFI
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#E67A19]">
              BABA IMAM-UD-DIN &bull; SINCE 1974
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#542008]/80 leading-relaxed max-w-sm">
            Bringing the authentic taste of traditional Jhang kulfi to generations since 1974. Famous liquid-milk khoya kulfi handcrafted with pure heritage ingredients.
          </p>

          {/* Social Icons (Matching Reference Circular Styling) */}
          <div className="flex items-center gap-2 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] flex items-center justify-center transition-colors text-xs font-bold"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] flex items-center justify-center transition-colors text-xs font-bold"
            >
              in
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] flex items-center justify-center transition-colors text-xs font-bold"
            >
              𝕏
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#1eb354] text-white flex items-center justify-center transition-colors text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Column 2: Company (lg:col-span-2) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#542008]">
            Company
          </h3>
          <ul className="space-y-2 text-xs font-medium text-[#542008]/80">
            <li>
              <a href="#story" className="hover:text-[#E67A19] transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#flavors" className="hover:text-[#E67A19] transition-colors">
                Our Kulfi
              </a>
            </li>
            <li>
              <a href="#bundle" className="hover:text-[#E67A19] transition-colors">
                Family Packs
              </a>
            </li>
            <li>
              <a href="#store-locator" className="hover:text-[#E67A19] transition-colors">
                Find Our Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Privacy & Info (lg:col-span-2) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#542008]">
            Information
          </h3>
          <ul className="space-y-2 text-xs font-medium text-[#542008]/80">
            <li>
              <a href="#story" className="hover:text-[#E67A19] transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#story" className="hover:text-[#E67A19] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[#E67A19] transition-colors">
                Customer Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#E67A19] transition-colors">
                FAQ & Catering
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact us (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#542008]">
            Contact us
          </h3>
          <ul className="space-y-2.5 text-xs text-[#542008]/85 font-medium">
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#E67A19] shrink-0" />
              <span>info@babakulfi-jhang.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#E67A19] shrink-0" />
              <a href="tel:+923032232010" className="hover:text-[#E67A19]">
                {STORE_INFO.phone1}
              </a>
              <span>/</span>
              <a href="tel:+923336750398" className="hover:text-[#E67A19]">
                {STORE_INFO.phone2}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E67A19] shrink-0 mt-0.5" />
              <span>{STORE_INFO.address}</span>
            </li>
            <li className="pt-1">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E67A19] hover:underline"
              >
                <span>View on Google map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="pt-8 border-t border-[#542008]/10 text-center">
        <p className="text-[11px] text-[#542008]/70 font-medium">
          &copy; 2026 Baba Imam-ud-Din Ki Mashhoor Kulfi. All Rights Reserved. &bull; Handcrafted in Jhang Sadar since 1974.
        </p>
      </div>
    </footer>
  );
};
