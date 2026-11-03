import React from 'react';
import { Sparkles, ArrowRight, Award } from 'lucide-react';
import { KulfiVisual } from './KulfiVisual';
import { LoopSquiggleDoodle, MilkMatkaDoodle } from './Doodles';

interface HeroProps {
  onExploreFlavors: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFlavors }) => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Upper Area: Intro Paragraph & Badges (Matching Reference) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative z-10">
        {/* Left Column: Intro Copy + CTA Button */}
        <div className="md:col-span-6 lg:col-span-5 max-w-md pt-2">
          <div className="flex items-center gap-3">
            <button
              onClick={onExploreFlavors}
              className="inline-flex items-center gap-2 bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#542008] cursor-pointer"
            >
              EXPLORE OUR KULFI
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Top Area: Playful Badges & Doodles (Matching Reference Layout) */}
        <div className="md:col-span-6 lg:col-span-7 flex justify-end items-center gap-4 sm:gap-6 pr-4 sm:pr-12">
          {/* Tilted Circle Badge 1: PURE KHOYA */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F7C744] text-[#542008] flex flex-col items-center justify-center p-2 text-center shadow-md transform -rotate-12 hover:rotate-0 transition-transform duration-300 select-none border-2 border-white/60">
            <span className="font-display text-xs sm:text-sm leading-tight uppercase">
              PURE KHOYA
            </span>
            <span className="text-[9px] font-extrabold tracking-tight uppercase text-[#E67A19]">
              100% DESI MILK
            </span>
          </div>

          {/* Tilted Circle Badge 2: SINCE 1974 */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5BE2C] text-[#542008] flex flex-col items-center justify-center p-2 text-center shadow-md transform rotate-6 hover:rotate-0 transition-transform duration-300 select-none border-2 border-white/60">
            <span className="font-display text-xs sm:text-sm leading-tight uppercase">
              SINCE 1974
            </span>
            <span className="text-[8px] font-bold uppercase text-[#542008]/80">
              ORIGINAL
            </span>
          </div>

          {/* Hand-drawn Milk Matka Doodle */}
          <div className="hidden sm:block transform rotate-6">
            <MilkMatkaDoodle className="w-16 h-16 text-[#542008]" />
          </div>
        </div>
      </div>

      {/* Main Dramatic Headline and Floating Kulfi (Matching Reference Composition) */}
      <div className="relative mt-4 sm:mt-8 min-h-[360px] sm:min-h-[460px] md:min-h-[520px] flex items-center">
        {/* Giant Condensed Headline (Anton font, filling width like WHERE EVERY SCOOP IS A SMILE) */}
        <div className="relative z-10 w-full lg:w-4/5 select-none">
          <h1 className="font-display text-[52px] sm:text-[84px] md:text-[110px] lg:text-[132px] leading-[0.88] text-[#542008] uppercase tracking-normal">
            <span className="block">WHERE EVERY</span>
            <span className="block text-[#542008]">BITE IS A</span>
            <span className="block text-[#542008]">TRADITION</span>
          </h1>

          {/* Playful Floating Labels Around Headline */}
          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] border border-[#542008]/15 text-[#542008] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E67A19]" />
              Sadar Chowk, Jhang
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7C744]/70 border border-[#542008]/15 text-[#542008] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#542008]" />
              50+ Years Heritage
            </span>
          </div>

          {/* Yellow Loop Squiggle Doodle (Positioned like the reference image under the title) */}
          <div className="mt-6 ml-24 sm:ml-40 animate-float">
            <LoopSquiggleDoodle className="w-14 h-14 sm:w-20 sm:h-20 text-[#F7C744]" />
          </div>
        </div>

        {/* Giant Floating Kulfi Image (Extending dramatically from the right side) */}
        <div className="absolute -right-10 sm:-right-6 md:right-0 lg:-right-4 top-[-20px] sm:top-[-40px] md:top-[-60px] z-20 pointer-events-none select-none">
          <div className="relative animate-float">
            {/* Giant realistic Pakistani khoya kulfi with emerald pistachios and wooden stick angled like ice cream cone in reference */}
            <KulfiVisual
              flavor="khoya"
              size="hero"
              angle={24}
              className="drop-shadow-[0_30px_35px_rgba(84,32,8,0.28)]"
            />

            {/* Floating pill badge attached to the kulfi */}
            <div className="absolute top-1/3 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg border border-[#542008]/15 flex items-center gap-2 transform -rotate-12">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#542008]">
                Authentic Khoya
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
