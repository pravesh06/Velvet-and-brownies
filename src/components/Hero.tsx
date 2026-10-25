import React, { useState, useEffect } from 'react';
import { HERO_CAKE_IMAGE } from '../data/patisserieData';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Live ticking countdown timer for same-day cutoff
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 3, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative text-[#faf9f4] overflow-hidden shadow-2xl"
    >
      <BackgroundGradientAnimation
        containerClassName="pt-28 sm:pt-36 pb-20 md:pb-28"
        className="w-full"
        gradientBackgroundStart="rgb(0, 38, 31)"
        gradientBackgroundEnd="rgb(15, 61, 52)"
        firstColor="49, 104, 92"
        secondColor="185, 155, 94"
        thirdColor="15, 61, 52"
        fourthColor="200, 169, 106"
        fifthColor="71, 51, 0"
        pointerColor="178, 235, 220"
        size="75%"
        blendingValue="hard-light"
      >
        <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7 z-10">
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#b2ebdc]/15 border border-[#b2ebdc]/25 text-[#b5eedf] text-xs font-semibold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-[#ffdf9f]">auto_awesome</span>
            <span>Haute Patisserie &amp; Bespoke Confectionery</span>
          </div>

          <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] font-semibold text-[#faf9f4] leading-[1.12] tracking-tight">
            <span className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/75">
              Baked slow.
            </span>{' '}
            <br />
            <span className="italic font-normal text-[#ffdf9f] drop-shadow-sm">Finished beautifully.</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#efeee9]/90 max-w-xl font-light leading-relaxed">
            Artisanal handcrafted celebration cakes, fudgy molten brownies, and delicate French pastries made fresh daily in our bespoke studio with single-origin cocoa and European butter.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('custom-cakes')}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#31685c] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#b2ebdc] hover:text-[#00261f] transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Order a Cake
            </button>
            <button
              type="button"
              onClick={() => onNavigate('brownie-spotlight')}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent text-[#ffdf9f] font-semibold text-sm shadow-[0_0_0_1.5px_#e3c281] hover:bg-[#ffdf9f] hover:text-[#2c1f00] transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Explore Brownies
            </button>

            <div className="text-xs text-[#efeee9]/80 flex items-center gap-1.5 ml-1 bg-[#00261f]/40 backdrop-blur-xs px-3.5 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[18px] text-[#ffdf9f] animate-pulse">
                schedule
              </span>
              <span>
                Pre-orders for today close in{' '}
                <strong className="text-[#faf9f4] font-semibold font-mono">
                  {timeLeft.hours}h {String(timeLeft.minutes).padStart(2, '0')}m{' '}
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Cake Showcase */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] bg-[#00261f] border border-white/10 group">
            <img
              src={HERO_CAKE_IMAGE}
              alt="Exquisite three-tiered velvet cake decorated with edible 24k gold leaf flakes, rich glossy dark chocolate ganache drip, fresh wild blackberries, and sculpted sugar roses"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00261f]/85 via-transparent to-transparent pointer-events-none" />

            {/* Subtle Gold Foil Atelier Seal */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00261f]/80 backdrop-blur-md border border-[#c8a96a]/40 text-[#ffdf9f] text-[11px] font-semibold tracking-widest uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e3c281]" />
              Haute Reserve
            </div>
          </div>

          {/* Floating Patron Review Badge */}
          <div className="absolute -bottom-6 -left-3 sm:left-4 backdrop-blur-md bg-[#0f3d34]/95 text-[#faf9f4] p-4 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[300px] border border-[#c8a96a]/30">
            <div className="w-12 h-12 rounded-full bg-[#efeee9] flex items-center justify-center text-[#2c1f00] shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-[26px] text-[#b99b5e]">star</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#ffdf9f] text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[14px]">
                    star
                  </span>
                ))}
                <span className="ml-1 text-white font-semibold">4.9</span>
              </div>
              <p className="text-xs text-[#efeee9]/90 mt-0.5 leading-snug font-light">
                Freshly baked daily · 1,200+ celebratory patron reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      </BackgroundGradientAnimation>
    </section>
  );
};
