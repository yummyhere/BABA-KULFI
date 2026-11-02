import React from 'react';
import { STORY_PHOTOS } from '../data/kulfiData';
import { RayDoodle, SmilingMascot, StarDoodle, KulfiStickDoodle } from './Doodles';

export const OurStory: React.FC = () => {
  return (
    <section
      id="story"
      aria-label="Our Story"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Decorative Star Doodle in corner */}
      <div className="absolute top-10 right-8 sm:right-16 hidden sm:block animate-float-delayed">
        <StarDoodle className="w-10 h-10 text-[#F7C744]" />
      </div>

      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto relative">
        {/* Playful Orange Ray Doodle above heading */}
        <div className="flex justify-center mb-1">
          <RayDoodle className="w-10 h-10 text-[#E67A19] transform -rotate-12" />
        </div>

        {/* Heading with Smiling Mascot */}
        <div className="inline-flex items-center justify-center gap-3">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#542008] uppercase tracking-wide">
            OUR STORY
          </h2>
          <SmilingMascot className="w-9 h-9 sm:w-11 sm:h-11" />
        </div>

        {/* Story Description */}
        <p className="mt-4 text-sm sm:text-base text-[#542008]/85 leading-relaxed font-medium px-4">
          Since 1974, Baba Imam-ud-Din Ki Mashhoor Kulfi has been bringing the authentic taste of traditional Jhang kulfi to generations of families. Crafted with rich liquid milk, pure khoya, and timeless recipes, every bite carries the warmth of our heritage.
        </p>
      </div>

      {/* 4 Asymmetrical Rounded Photo Grid (Matching Reference Layout) */}
      <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-start relative">
        {/* Floating Kulfi Doodle beside image 1 */}
        <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 hidden md:block animate-float">
          <KulfiStickDoodle className="w-12 h-20 text-[#E67A19]" />
        </div>

        {STORY_PHOTOS.map((photo, index) => (
          <div
            key={index}
            className={`group relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-lg border-2 border-[#542008]/10 bg-[#FAF2DF] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${photo.offset}`}
          >
            <div className={`w-full ${photo.aspect} overflow-hidden relative flex items-center justify-center bg-[#FAF2DF]`}>
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Warm sepia-amber heritage tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#542008]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <span className="text-white text-xs font-bold leading-snug drop-shadow-md">
                  {photo.caption}
                </span>
              </div>
            </div>

            {/* Subtle caption pill on mobile */}
            <div className="p-3 bg-white/80 backdrop-blur-sm sm:hidden text-center">
              <span className="text-[11px] font-bold text-[#542008] block truncate">
                {photo.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Heritage Stats Bar */}
      <div className="mt-14 sm:mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#542008]/10 shadow-sm max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div>
          <span className="font-display text-3xl sm:text-4xl text-[#542008] block">1974</span>
          <span className="text-xs uppercase font-bold text-[#8C4B23] tracking-wider">Established in Jhang</span>
        </div>
        <div>
          <span className="font-display text-3xl sm:text-4xl text-[#542008] block">100%</span>
          <span className="text-xs uppercase font-bold text-[#8C4B23] tracking-wider">Pure Liquid Milk</span>
        </div>
        <div>
          <span className="font-display text-3xl sm:text-4xl text-[#542008] block">4.8 ★</span>
          <span className="text-xs uppercase font-bold text-[#8C4B23] tracking-wider">65+ Google Reviews</span>
        </div>
        <div>
          <span className="font-display text-3xl sm:text-4xl text-[#542008] block">3rd Gen</span>
          <span className="text-xs uppercase font-bold text-[#8C4B23] tracking-wider">Master Craftsmen</span>
        </div>
      </div>
    </section>
  );
};
