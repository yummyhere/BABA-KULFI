import React from 'react';
import { KulfiVisual } from './KulfiVisual';
import { RayDoodle, StarDoodle, SpoonDoodle, LoopSquiggleDoodle } from './Doodles';

interface KulfiBundleProps {
  onOpenBundleModal: () => void;
}

export const KulfiBundle: React.FC<KulfiBundleProps> = ({ onOpenBundleModal }) => {
  // 7 fan sticks with slight angles matching the reference composition
  const fanSticks: { flavor: 'milk' | 'khoya' | 'pistachio' | 'saffron' | 'badam' | 'rose' | 'chocolate'; angle: number; yOffset: string }[] = [
    { flavor: 'saffron', angle: -65, yOffset: 'translate-y-8' },
    { flavor: 'milk', angle: -42, yOffset: 'translate-y-3' },
    { flavor: 'pistachio', angle: -20, yOffset: '-translate-y-1' },
    { flavor: 'khoya', angle: 0, yOffset: '-translate-y-3' },
    { flavor: 'rose', angle: 20, yOffset: '-translate-y-1' },
    { flavor: 'chocolate', angle: 42, yOffset: 'translate-y-3' },
    { flavor: 'badam', angle: 65, yOffset: 'translate-y-8' },
  ];

  return (
    <section
      id="bundle"
      aria-label="Kulfi Family Bundle Pack"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Decorative Doodles positioned around section (Matching Reference Screenshot) */}
      <div className="absolute top-8 right-10 sm:right-24 hidden md:block animate-float">
        <StarDoodle className="w-12 h-12 text-[#F7C744]" />
      </div>

      <div className="absolute top-1/2 left-4 sm:left-12 hidden lg:block animate-float-delayed">
        <LoopSquiggleDoodle className="w-16 h-16 text-[#F7C744]" />
      </div>

      <div className="absolute top-1/2 right-6 sm:right-16 hidden lg:block animate-float">
        <SpoonDoodle className="w-14 h-14 text-[#E67A19]" />
      </div>

      {/* Header Grid: Left Headline + Right Supporting Paragraph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12 sm:mb-16">
        {/* Left Column: Heading with Rays */}
        <div className="lg:col-span-7">
          <div className="flex items-start gap-2">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#542008] uppercase leading-[0.95] tracking-tight">
              <span>MAKE EVERY</span>
              <br />
              <span>GATHERING</span>
              <br />
              <span>A LITTLE SWEETER</span>
            </h2>
            <RayDoodle className="w-8 h-8 text-[#E67A19] shrink-0 mt-1" />
          </div>
        </div>

        {/* Right Column: Paragraph */}
        <div className="lg:col-span-5 lg:pt-3">
          <p className="text-sm sm:text-base text-[#542008]/85 font-medium leading-relaxed">
            Share the timeless taste of authentic Jhang kulfi with family and friends. From everyday treats to special gatherings, weddings, and Eid celebrations, our traditional kulfi brings everyone together.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs font-bold text-[#E67A19] uppercase tracking-wider bg-[#FFF9EE] px-3 py-1 rounded-full border border-[#542008]/10">
              Fresh Insulated Ice Packing
            </span>
            <span className="text-xs font-bold text-[#542008]/80">
              Bulk Catering Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Visual: Fan-like Arrangement of Multiple Traditional Kulfi Sticks (Matching Reference) */}
      <div className="relative mt-8 sm:mt-12 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
        {/* Kulfi Fan Wrapper */}
        <div className="relative flex items-end justify-center w-full max-w-4xl px-2 pt-6 pb-12">
          {fanSticks.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 hover:scale-110 hover:z-30 cursor-pointer ${item.yOffset} -mx-4 sm:-mx-6 md:-mx-8`}
              style={{
                zIndex: idx === 3 ? 20 : 10 + Math.abs(3 - idx),
              }}
              onClick={onOpenBundleModal}
            >
              <KulfiVisual
                flavor={item.flavor}
                size="bundle"
                angle={item.angle}
                className="drop-shadow-[0_15px_20px_rgba(84,32,8,0.22)]"
              />
            </div>
          ))}
        </div>

        {/* Central Overlapping Chocolate Brown CTA Button (Matching BUY NOW in Reference) */}
        <div className="relative z-30 -mt-10 sm:-mt-14">
          <button
            onClick={onOpenBundleModal}
            className="inline-flex items-center justify-center bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] font-display text-lg sm:text-xl uppercase tracking-widest px-10 sm:px-14 py-4 rounded-full shadow-[0_10px_25px_rgba(84,32,8,0.3)] hover:shadow-[0_15px_30px_rgba(230,122,25,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#E67A19]"
          >
            ORDER FOR YOUR FAMILY
          </button>
        </div>
      </div>
    </section>
  );
};
