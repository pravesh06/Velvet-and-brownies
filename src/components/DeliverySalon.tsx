import React from 'react';
import { SALON_IMAGE } from '../data/patisserieData';

interface DeliverySalonProps {
  onNavigateContact: () => void;
}

export const DeliverySalon: React.FC<DeliverySalonProps> = ({ onNavigateContact }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f5f4ef] border-t border-[#c0c8c4]/20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Transit Standards */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
            Pristine Transit &amp; Salons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] leading-tight">
            Handled with White-Glove Precision
          </h2>
          <p className="text-sm sm:text-base text-[#404846] leading-relaxed">
            We never send our delicate mirror glazes through standard dispatch. Every centerpiece travels inside temperature-isolated vehicles with shock-dampening velvet pedestals calibrated between 14°C and 16°C.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-[#faf9f4] shadow-xs border border-[#c0c8c4]/30">
              <h4 className="font-serif text-[17px] font-semibold text-[#00261f]">
                Same-Day Zone
              </h4>
              <p className="text-xs text-[#404846] mt-1 leading-relaxed">
                Within 25km radius. Place before 4:00 PM for guaranteed 8:00 PM evening delivery.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#faf9f4] shadow-xs border border-[#c0c8c4]/30">
              <h4 className="font-serif text-[17px] font-semibold text-[#00261f]">
                Boutique Pickup
              </h4>
              <p className="text-xs text-[#404846] mt-1 leading-relaxed">
                Complimentary chill-chambers reserved in Suite 4 Heritage Quarter.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#b2ebdc]/30 border border-[#31685c]/20 flex items-center gap-4 mt-1">
            <span className="material-symbols-outlined text-[#31685c] text-[28px] shrink-0">
              alarm_on
            </span>
            <div>
              <p className="text-sm font-bold text-[#00261f]">Same-Day Courier Cutoff</p>
              <p className="text-xs text-[#404846]">
                Guaranteed dispatch slots refresh continuously until 16:00 daily.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Flagship Visual Card */}
        <div className="lg:col-span-6">
          <div
            className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl bg-cover bg-center relative border border-[#c0c8c4]/30"
            style={{ backgroundImage: `url('${SALON_IMAGE}')` }}
          >
            <div className="absolute inset-0 bg-[#00261f]/30 backdrop-brightness-95" />

            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#faf9f4]/95 backdrop-blur-md shadow-lg border border-[#c8a96a]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold text-[#31685c] uppercase tracking-wider">
                  Atelier Salon Privé
                </p>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#00261f]">
                  Heritage Quarter Flagship
                </h4>
                <p className="text-xs text-[#404846] mt-0.5">
                  Place de l'Atelier 18, Suite 4, Metropolis NY
                </p>
              </div>
              <button
                type="button"
                onClick={onNavigateContact}
                className="self-start sm:self-center px-5 py-2 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#31685c] transition-colors cursor-pointer whitespace-nowrap shadow-xs"
              >
                Directions &amp; Hours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
