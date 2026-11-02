import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { SIGNATURE_FLAVORS, FlavorData } from '../data/kulfiData';
import { KulfiVisual } from './KulfiVisual';
import { RayDoodle } from './Doodles';

interface KulfiFlavorsProps {
  onSelectFlavor: (flavor: FlavorData) => void;
}

export const KulfiFlavors: React.FC<KulfiFlavorsProps> = ({ onSelectFlavor }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : SIGNATURE_FLAVORS.length - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < SIGNATURE_FLAVORS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="flavors"
      aria-label="Signature Kulfi Flavors"
      className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header with Rays and Navigation Arrows */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14 sm:mb-20">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#542008] uppercase tracking-wide">
            OUR SIGNATURE KULFI
          </h2>
          <RayDoodle className="w-8 h-8 text-[#E67A19] transform rotate-12" />
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous flavor"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#542008] hover:text-white text-[#542008] border border-[#542008]/20 flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#542008]"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next flavor"
            className="w-10 h-10 rounded-full bg-[#542008] hover:bg-[#E67A19] text-white flex items-center justify-center transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#E67A19]"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Large Product Cards (Matching Reference Layout Exactly) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-10">
        {SIGNATURE_FLAVORS.map((flavor, index) => {
          const visualKey =
            flavor.id.includes('milk') ? 'milk' :
            flavor.id.includes('pista') ? 'pistachio' : 'khoya';

          return (
            <div
              key={flavor.id}
              className="group relative flex flex-col items-center cursor-pointer"
              onClick={() => onSelectFlavor(flavor)}
            >
              {/* Arch-shaped Background Container (Matching Reference Arched Cards) */}
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-t-[140px] rounded-b-[32px] bg-[#EBD8AB] border border-[#542008]/10 shadow-[0_15px_30px_rgba(84,32,8,0.06)] flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-[#E5D1A0] group-hover:shadow-[0_20px_40px_rgba(84,32,8,0.12)]">
                {/* Floating Kulfi Product Image - Visually Extending ABOVE the Arch */}
                <div className="absolute -top-16 sm:-top-20 inset-x-0 flex justify-center transition-transform duration-500 ease-out group-hover:-translate-y-4">
                  <div className="relative">
                    <KulfiVisual
                      flavor={visualKey}
                      size="lg"
                      angle={index === 0 ? -4 : index === 1 ? 2 : 5}
                    />

                    {/* Circular Price Badge Overlapping Product (Matching Reference with 'ASK FOR PRICE') */}
                    <div className="absolute bottom-14 -right-1 w-16 h-16 rounded-full bg-[#F7C744] text-[#542008] border-2 border-white/90 shadow-md flex flex-col items-center justify-center text-center p-1 transform group-hover:scale-105 transition-transform select-none">
                      <span className="text-[7.5px] font-extrabold uppercase tracking-tight text-[#8C4B23] leading-tight">
                        RATE
                      </span>
                      <span className="font-display text-[10.5px] leading-tight text-[#542008] uppercase">
                        ASK FOR PRICE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Flavor Name and Short Description inside Card */}
                <div className="mt-auto pt-24 text-center z-10">
                  <h3 className="font-display text-lg text-[#542008] uppercase tracking-wide">
                    {flavor.name}
                  </h3>
                  <p className="text-xs text-[#542008]/80 font-medium line-clamp-2 px-2 mt-1">
                    {flavor.shortDesc}
                  </p>
                </div>
              </div>

              {/* Dark Brown Rounded Rectangular Product Label Button at Bottom (Matching Reference 'EXPLORE FLAVOR') */}
              <div className="w-full mt-4">
                <button
                  type="button"
                  aria-label={`Explore flavor: ${flavor.name}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#542008] group-hover:bg-[#E67A19] text-[#FFF9EE] font-display text-base tracking-widest uppercase text-center transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE FLAVOR</span>
                  <Sparkles className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore More Note */}
      <div className="mt-12 text-center">
        <p className="text-xs sm:text-sm font-semibold text-[#8C4B23] tracking-wide">
          All our kulfis are traditionally frozen in ice-and-salt earthenware chests for that authentic firm, crystal-free rabri texture.
        </p>
      </div>
    </section>
  );
};
