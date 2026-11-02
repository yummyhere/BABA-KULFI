import React from 'react';

interface KulfiVisualProps {
  flavor?: 'milk' | 'khoya' | 'pistachio' | 'saffron' | 'badam' | 'rose' | 'chocolate';
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'bundle';
  angle?: number;
  className?: string;
  hasGarnish?: boolean;
}

export const KulfiVisual: React.FC<KulfiVisualProps> = ({
  flavor = 'khoya',
  size = 'md',
  angle = 0,
  className = '',
  hasGarnish = true,
}) => {
  // Color presets for traditional kulfi varieties
  const flavorStyles = {
    milk: {
      bodyGradStart: '#FFFDF5',
      bodyGradMid: '#F6E5C0',
      bodyGradEnd: '#E6CAA0',
      shadowColor: '#C49F6E',
      pistachioCount: 8,
      saffron: false,
      frostHighlight: '#FFFFFF',
    },
    khoya: {
      bodyGradStart: '#FFF8E6',
      bodyGradMid: '#ECC88C',
      bodyGradEnd: '#CCA05B',
      shadowColor: '#B08038',
      pistachioCount: 12,
      saffron: true,
      frostHighlight: '#FFFDEB',
    },
    pistachio: {
      bodyGradStart: '#F3F9E2',
      bodyGradMid: '#D3E6AA',
      bodyGradEnd: '#A8C773',
      shadowColor: '#7C9B47',
      pistachioCount: 22,
      saffron: true,
      frostHighlight: '#FAFFF0',
    },
    saffron: {
      bodyGradStart: '#FFF6D9',
      bodyGradMid: '#FCD872',
      bodyGradEnd: '#E5A934',
      shadowColor: '#B87B12',
      pistachioCount: 14,
      saffron: true,
      frostHighlight: '#FFFDF5',
    },
    badam: {
      bodyGradStart: '#FFF9F0',
      bodyGradMid: '#ECD2BA',
      bodyGradEnd: '#C99E7D',
      shadowColor: '#966B4A',
      pistachioCount: 10,
      saffron: false,
      frostHighlight: '#FFFFFF',
    },
    rose: {
      bodyGradStart: '#FFF0F3',
      bodyGradMid: '#F7C6D2',
      bodyGradEnd: '#E28E9F',
      shadowColor: '#B8556B',
      pistachioCount: 8,
      saffron: false,
      frostHighlight: '#FFF5F7',
    },
    chocolate: {
      bodyGradStart: '#6D4328',
      bodyGradMid: '#4F2E19',
      bodyGradEnd: '#33190A',
      shadowColor: '#210F05',
      pistachioCount: 6,
      saffron: false,
      frostHighlight: '#8A5835',
    },
  };

  const style = flavorStyles[flavor] || flavorStyles.khoya;

  // Sizing styles
  const sizeMap = {
    sm: 'w-24 h-44',
    md: 'w-36 h-64',
    lg: 'w-48 h-80',
    bundle: 'w-28 h-60 md:w-32 md:h-72',
    hero: 'w-72 h-[420px] md:w-96 md:h-[540px] lg:w-[440px] lg:h-[620px]',
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`relative inline-block transition-transform duration-500 select-none ${currentSize} ${className}`}
      style={{
        transform: angle !== 0 ? `rotate(${angle}deg)` : undefined,
        filter: 'drop-shadow(0 20px 25px rgba(84, 32, 8, 0.22))',
      }}
    >
      <svg
        viewBox="0 0 200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label={`Authentic traditional ${flavor} kulfi on wooden stick`}
      >
        <defs>
          {/* Wooden stick realistic grain gradient */}
          <linearGradient id={`stickGrad-${flavor}`} x1="88" y1="210" x2="112" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9C6B38" />
            <stop offset="0.25" stopColor="#D8A96F" />
            <stop offset="0.5" stopColor="#E5BE8A" />
            <stop offset="0.85" stopColor="#B37C42" />
            <stop offset="1" stopColor="#7A4F23" />
          </linearGradient>

          {/* Kulfi conical body 3D radial/linear blend */}
          <linearGradient id={`kulfiBody-${flavor}`} x1="50" y1="20" x2="150" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor={style.bodyGradStart} />
            <stop offset="0.35" stopColor={style.bodyGradMid} />
            <stop offset="0.8" stopColor={style.bodyGradEnd} />
            <stop offset="1" stopColor={style.shadowColor} />
          </linearGradient>

          {/* Specular cylindrical cream highlight */}
          <linearGradient id={`highlightGrad-${flavor}`} x1="70" y1="20" x2="115" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor={style.frostHighlight} stopOpacity="0.85" />
            <stop offset="0.4" stopColor={style.frostHighlight} stopOpacity="0.4" />
            <stop offset="1" stopColor={style.frostHighlight} stopOpacity="0" />
          </linearGradient>

          {/* Traditional Rabri clotted milk swirl texture pattern */}
          <pattern id="rabriSwirl" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q 10 15, 20 20 T 40 20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <path d="M0 32 Q 10 27, 20 32 T 40 32" fill="none" stroke="rgba(84,32,8,0.06)" strokeWidth="1.2" />
          </pattern>
        </defs>

        {/* 1. WOODEN STICK */}
        <g id="wooden-stick">
          {/* Stick Shadow onto lower stick */}
          <rect x="91" y="220" width="18" height="125" rx="9" fill="#5A3515" opacity="0.4" />
          {/* Stick main body */}
          <rect x="90" y="210" width="20" height="135" rx="10" fill={`url(#stickGrad-${flavor})`} />
          {/* Wood grain grooves */}
          <line x1="95" y1="225" x2="95" y2="330" stroke="#875624" strokeWidth="1" strokeDasharray="12 4" opacity="0.6" />
          <line x1="104" y1="220" x2="104" y2="335" stroke="#F1D2A4" strokeWidth="1" strokeDasharray="20 6" opacity="0.7" />
          {/* Stick end bevel */}
          <ellipse cx="100" cy="342" rx="9" ry="3" fill="#693D14" />
        </g>

        {/* 2. KULFI BASE CONTACT SHADOW */}
        <ellipse cx="100" cy="225" rx="42" ry="14" fill="#3D1504" opacity="0.25" />

        {/* 3. MAIN KULFI CONICAL BODY */}
        <g id="kulfi-body">
          {/* Smooth tapered cone with rounded dome top */}
          <path
            d="
              M 58,222
              C 54,215 64,48 76,28
              C 84,14 116,14 124,28
              C 136,48 146,215 142,222
              C 138,230 62,230 58,222
              Z
            "
            fill={`url(#kulfiBody-${flavor})`}
          />

          {/* Rabri texture overlay */}
          <path
            d="
              M 58,222
              C 54,215 64,48 76,28
              C 84,14 116,14 124,28
              C 136,48 146,215 142,222
              C 138,230 62,230 58,222
              Z
            "
            fill="url(#rabriSwirl)"
          />

          {/* Melt rim / rounded bottom base lip */}
          <ellipse cx="100" cy="222" rx="42" ry="10" fill={style.shadowColor} opacity="0.4" />
          <ellipse cx="100" cy="220" rx="40" ry="9" fill={style.bodyGradMid} opacity="0.8" />

          {/* 3D Longitudinal Highlight streak */}
          <path
            d="
              M 72,35
              C 78,25 90,20 95,20
              C 92,70 85,160 82,216
              C 76,214 70,210 68,206
              C 72,150 70,80 72,35
              Z
            "
            fill={`url(#highlightGrad-${flavor})`}
          />

          {/* Soft Right rim backlight for realistic depth */}
          <path
            d="
              M 125,32
              C 135,50 142,160 138,218
              C 133,219 130,218 132,180
              C 135,120 128,50 125,32
              Z
            "
            fill="#FFFFFF"
            opacity="0.25"
          />

          {/* Creamy condensation droplets */}
          <circle cx="78" cy="95" r="2.5" fill="#FFFFFF" opacity="0.75" />
          <circle cx="82" cy="142" r="3" fill="#FFFFFF" opacity="0.7" />
          <circle cx="122" cy="110" r="2" fill="#FFFFFF" opacity="0.6" />
          <circle cx="118" cy="170" r="2.5" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* 4. GARNISHES (PISTACHIOS, ALMONDS, CARDAMOM, SAFFRON) */}
        {hasGarnish && (
          <g id="kulfi-garnishes">
            {/* Emerald green sliced pistachios */}
            <g id="pistachio-slivers">
              <ellipse cx="94" cy="46" rx="4" ry="2.2" transform="rotate(-25 94 46)" fill="#4E8C2B" stroke="#2B5414" strokeWidth="0.8" />
              <ellipse cx="108" cy="58" rx="4.5" ry="2.5" transform="rotate(35 108 58)" fill="#5EA832" stroke="#2B5414" strokeWidth="0.8" />
              <ellipse cx="86" cy="74" rx="5" ry="2.6" transform="rotate(-15 86 74)" fill="#478027" stroke="#234710" strokeWidth="0.8" />
              <ellipse cx="116" cy="88" rx="4.2" ry="2.2" transform="rotate(45 116 88)" fill="#68B837" stroke="#2B5414" strokeWidth="0.8" />
              <ellipse cx="96" cy="112" rx="5" ry="2.8" transform="rotate(-30 96 112)" fill="#54992E" stroke="#234710" strokeWidth="0.8" />
              <ellipse cx="80" cy="135" rx="4.5" ry="2.4" transform="rotate(20 80 135)" fill="#427A23" stroke="#234710" strokeWidth="0.8" />
              <ellipse cx="112" cy="148" rx="5" ry="2.6" transform="rotate(-40 112 148)" fill="#5DA632" stroke="#2B5414" strokeWidth="0.8" />
              <ellipse cx="90" cy="178" rx="4.8" ry="2.5" transform="rotate(15 90 178)" fill="#4E8C2B" stroke="#2B5414" strokeWidth="0.8" />
              <ellipse cx="120" cy="192" rx="4.2" ry="2.2" transform="rotate(-10 120 192)" fill="#68B837" stroke="#2B5414" strokeWidth="0.8" />
              <ellipse cx="76" cy="198" rx="4.5" ry="2.4" transform="rotate(35 76 198)" fill="#427A23" stroke="#234710" strokeWidth="0.8" />
              <ellipse cx="102" cy="206" rx="4" ry="2.2" transform="rotate(-20 102 206)" fill="#54992E" stroke="#234710" strokeWidth="0.8" />
            </g>

            {/* Saffron threads (Zafran strings) */}
            {style.saffron && (
              <g id="saffron-threads">
                <path d="M 88,52 Q 92,62, 90,70" stroke="#E63900" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M 104,78 Q 110,88, 106,98" stroke="#D93000" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M 94,130 Q 98,142, 92,152" stroke="#E63900" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M 108,165 Q 114,175, 110,185" stroke="#C42800" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </g>
            )}

            {/* Toasted almond bits & crushed green cardamom specks */}
            <g id="cardamom-crushed">
              <circle cx="82" cy="54" r="1.2" fill="#3D1D06" />
              <circle cx="104" cy="42" r="1.3" fill="#3D1D06" />
              <circle cx="118" cy="68" r="1.2" fill="#3D1D06" />
              <circle cx="76" cy="115" r="1.4" fill="#3D1D06" />
              <circle cx="126" cy="125" r="1.2" fill="#3D1D06" />
              <circle cx="98" cy="158" r="1.5" fill="#3D1D06" />
              <circle cx="84" cy="188" r="1.3" fill="#3D1D06" />
              <circle cx="114" cy="212" r="1.2" fill="#3D1D06" />
              {/* Toasted almond flakes */}
              <ellipse cx="102" cy="85" rx="3.5" ry="1.8" transform="rotate(10 102 85)" fill="#FFF4D6" stroke="#B88A58" strokeWidth="0.6" />
              <ellipse cx="98" cy="140" rx="3.8" ry="1.9" transform="rotate(-15 98 140)" fill="#FFF4D6" stroke="#B88A58" strokeWidth="0.6" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
