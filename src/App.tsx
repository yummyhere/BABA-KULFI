import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { KulfiFlavors } from './components/KulfiFlavors';
import { KulfiBundle } from './components/KulfiBundle';
import { StoreLocator } from './components/StoreLocator';
import { Reviews } from './components/Reviews';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { FlavorModal } from './components/FlavorModal';
import { BundleModal } from './components/BundleModal';
import { SearchModal } from './components/SearchModal';
import { FlavorData, SIGNATURE_FLAVORS } from './data/kulfiData';
import { buildWhatsAppLink, PHONE_PRIMARY } from './utils/kulfi';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorData | null>(null);
  const [isBundleOpen, setIsBundleOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleExploreFlavors = () => {
    const el = document.getElementById('flavors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFlavorById = (id: string) => {
    const match = SIGNATURE_FLAVORS.find((f) => f.id === id);
    if (match) {
      setSelectedFlavor(match);
    }
  };

  const floatingWhatsAppUrl = buildWhatsAppLink(
    PHONE_PRIMARY,
    'Salam! I want to order authentic kulfi from Baba Imam-ud-Din Ki Mashhoor Kulfi Jhang.'
  );

  return (
    <div className="min-h-screen bg-[#F5E8C7] text-[#4A1D0A] flex flex-col selection:bg-[#E67A19] selection:text-white">
      {/* 1. Rounded Floating Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBundle={() => setIsBundleOpen(true)}
        cartCount={3}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onExploreFlavors={handleExploreFlavors} />

        {/* 3. Our Story Section */}
        <OurStory />

        {/* 4. Signature Kulfi Flavors Section */}
        <KulfiFlavors onSelectFlavor={(flavor) => setSelectedFlavor(flavor)} />

        {/* 5. Kulfi Family Bundle Pack Section */}
        <KulfiBundle onOpenBundleModal={() => setIsBundleOpen(true)} />

        {/* 6. Find Our Shop Section */}
        <StoreLocator />

        {/* 7. Customer Reviews Section */}
        <Reviews />

        {/* 8. Newsletter Section */}
        <Newsletter />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs font-bold uppercase tracking-wider group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Order</span>
        </a>
      </aside>

      {/* Modals */}
      <FlavorModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />

      <BundleModal
        isOpen={isBundleOpen}
        onClose={() => setIsBundleOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectFlavor={handleSelectFlavorById}
      />
    </div>
  );
}
