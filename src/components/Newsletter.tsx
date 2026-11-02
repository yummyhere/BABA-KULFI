import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';
import { KulfiVisual } from './KulfiVisual';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setIsSubscribed(true);
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden text-center"
    >
      {/* Floating Kulfi on Bottom Left Corner (Matching Reference Screenshot) */}
      <div className="absolute -left-10 sm:-left-12 bottom-[-40px] pointer-events-none select-none hidden sm:block animate-float">
        <KulfiVisual
          flavor="saffron"
          size="lg"
          angle={-32}
          className="drop-shadow-[0_20px_25px_rgba(84,32,8,0.22)]"
        />
      </div>

      {/* Floating Kulfi on Bottom Right Corner (Matching Reference Screenshot) */}
      <div className="absolute -right-10 sm:-right-12 bottom-[-40px] pointer-events-none select-none hidden sm:block animate-float-delayed">
        <KulfiVisual
          flavor="milk"
          size="lg"
          angle={32}
          className="drop-shadow-[0_20px_25px_rgba(84,32,8,0.22)]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#542008] uppercase tracking-wide leading-tight">
          GET OUR KULFI UPDATES
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-[#542008]/85 font-medium leading-relaxed max-w-lg mx-auto">
          Stay connected with the latest flavors, seasonal specials, and delicious updates from our kulfi family. Handcrafted with love in Jhang since 1974.
        </p>

        {isSubscribed ? (
          <div className="mt-8 p-6 rounded-3xl bg-white/95 border-2 border-[#25D366] shadow-md max-w-md mx-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-center gap-2 text-[#1a8e45] font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              Shukriya! You’re on the VIP Kulfi List
            </div>
            <p className="text-xs text-[#542008]/80 mt-1">
              We'll send you our exclusive seasonal specials and Eid festival release dates.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-lg mx-auto bg-white rounded-full p-2 pl-6 shadow-xl border border-[#542008]/15 flex items-center justify-between gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Enter your email address"
              aria-label="Email for kulfi updates"
              className="w-full text-xs sm:text-sm font-medium text-[#542008] bg-transparent focus:outline-none placeholder:text-[#542008]/45"
            />

            <button
              type="submit"
              className="bg-[#542008] hover:bg-[#E67A19] text-[#FFF9EE] font-display text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 shrink-0 shadow-md flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#E67A19] cursor-pointer"
            >
              <span>SUBSCRIBE NOW</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {errorMsg && (
          <p className="mt-2 text-xs text-red-600 font-bold">{errorMsg}</p>
        )}
      </div>
    </section>
  );
};
