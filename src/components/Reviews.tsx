import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/kulfiData';
import { RayDoodle, SmilingMascot } from './Doodles';

export const Reviews: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : CUSTOMER_REVIEWS.length - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < CUSTOMER_REVIEWS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
    >
      {/* Header with Mascot and Rays (Matching Reference) */}
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-1">
          <RayDoodle className="w-9 h-9 text-[#E67A19] transform -rotate-6" />
        </div>

        <div className="flex items-center justify-center gap-3">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#542008] uppercase tracking-wide leading-tight">
            LOVE FROM OUR
            <br className="sm:hidden" /> KULFI-LOVING CUSTOMERS
          </h2>
        </div>

        {/* Mascot Face Icon floating to the right */}
        <div className="flex justify-center mt-2">
          <SmilingMascot className="w-10 h-10 transform rotate-12" />
        </div>

        {/* Business Rating Badge */}
        <div className="mt-4 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#542008]/10 shadow-sm text-xs font-bold text-[#542008]">
          <div className="flex items-center text-[#F7C744]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span>4.8 Stars (65 Reviews) &bull; Verified Jhang Heritage</span>
        </div>
      </div>

      {/* Reviews Cards Grid (Matching Reference Screenshot Cards) */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {CUSTOMER_REVIEWS.map((review) => (
          <div
            key={review.id}
            className="rounded-[28px] bg-[#EBD8AB] border border-[#542008]/15 p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
          >
            <div>
              {/* User Avatar + Name + Rating */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/80 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#542008] leading-tight">
                    {review.author}
                  </h4>
                  <div className="flex items-center text-[#E67A19] mt-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs text-[#542008]/90 leading-relaxed font-medium">
                "{review.text}"
              </p>
            </div>

            {/* Bottom Tag */}
            <div className="mt-4 pt-3 border-t border-[#542008]/10 flex items-center justify-between text-[11px] text-[#8C4B23] font-semibold">
              <span>{review.tag}</span>
              <span>{review.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Arrows Below (Matching Reference) */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#542008] hover:text-white text-[#542008] border border-[#542008]/20 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next review"
          className="w-10 h-10 rounded-full bg-[#542008] hover:bg-[#E67A19] text-white flex items-center justify-center transition-colors shadow-md focus:outline-none"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4">
        <span className="text-[11px] text-[#8C4B23]/70 italic">
          * Sample placeholder reviews for design representation based on 4.8-star business rating.
        </span>
      </div>
    </section>
  );
};
