import React from 'react';

/**
 * Three playful orange ray strokes radiating from a heading
 * Exactly matching the reference image's doodle rays
 */
export const RayDoodle: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-[#E67A19]' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 38C12 28 18 20 28 14"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M22 42C26 32 34 24 44 20"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M6 24C12 20 18 16 26 12"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Hand-drawn playful 5-point doodle star
 */
export const StarDoodle: React.FC<{ className?: string }> = ({ className = 'w-10 h-10 text-[#F7C744]' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M32 6L39.5 24L58.5 24.5L43 36L48.5 54.5L32 42.5L15.5 54.5L21 36L5.5 24.5L24.5 24L32 6Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Loop squiggle doodle matching the one under the hero headline in reference
 */
export const LoopSquiggleDoodle: React.FC<{ className?: string }> = ({ className = 'w-16 h-16 text-[#F7C744]' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M36 12C48 10 60 22 56 38C52 54 36 62 26 50C18 40 28 26 42 34C54 42 64 62 58 72"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Playful smiling mascot face in rounded chocolate badge
 */
export const SmilingMascot: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <div
    className={`bg-[#542008] text-[#F5E8C7] rounded-full flex items-center justify-center p-2 shadow-sm ${className}`}
    aria-hidden="true"
  >
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Face circle */}
      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2.5" />
      {/* Left eye & right eye */}
      <circle cx="12" cy="15" r="2" fill="currentColor" />
      <circle cx="24" cy="15" r="2" fill="currentColor" />
      {/* Big joyful smile */}
      <path
        d="M12 21C13.5 25 22.5 25 24 21"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Rosy cheeks */}
      <circle cx="9" cy="20" r="1.5" fill="#E67A19" />
      <circle cx="27" cy="20" r="1.5" fill="#E67A19" />
    </svg>
  </div>
);

/**
 * Doodle dessert spoon with sweet droplet
 */
export const SpoonDoodle: React.FC<{ className?: string }> = ({ className = 'w-12 h-12 text-[#E67A19]' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="26" cy="22" rx="14" ry="10" transform="rotate(-30 26 22)" stroke="currentColor" strokeWidth="3.5" />
    <path d="M36 28L54 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    {/* Sweet drip */}
    <circle cx="16" cy="38" r="3" fill="currentColor" />
    <circle cx="10" cy="44" r="2" fill="currentColor" />
  </svg>
);

/**
 * Traditional Desi Milk Can / Matka pot doodle
 */
export const MilkMatkaDoodle: React.FC<{ className?: string }> = ({ className = 'w-14 h-14 text-[#542008]' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Traditional clay matka / milk vessel */}
    <ellipse cx="32" cy="14" rx="14" ry="4" stroke="currentColor" strokeWidth="3" />
    <path
      d="M20 15C16 24 10 32 10 42C10 52 20 58 32 58C44 58 54 52 54 42C54 32 48 24 44 15"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Inner decorative band */}
    <path d="M14 36C22 40 42 40 50 36" stroke="#E67A19" strokeWidth="2.5" strokeDasharray="3 3" />
    <text x="32" y="49" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
      MILK
    </text>
  </svg>
);

/**
 * Floating kulfi stick doodle outline
 */
export const KulfiStickDoodle: React.FC<{ className?: string }> = ({ className = 'w-10 h-16 text-[#E67A19]' }) => (
  <svg
    viewBox="0 0 40 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Kulfi conical body */}
    <path
      d="M8 38L15 8C16 4 24 4 25 8L32 38C33 42 7 42 8 38Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* Wooden stick */}
    <line x1="20" y1="40" x2="20" y2="65" stroke="#542008" strokeWidth="4" strokeLinecap="round" />
    {/* Cardamom flecks */}
    <circle cx="18" cy="20" r="1.5" fill="#542008" />
    <circle cx="23" cy="28" r="1.5" fill="#542008" />
  </svg>
);
