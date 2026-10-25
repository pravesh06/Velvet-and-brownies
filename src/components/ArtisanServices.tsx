import React from 'react';
import { SERVICES } from '../data/patisserieData';
import { ServiceItem } from '../types';

interface ArtisanServicesProps {
  onEnquireService: (service: ServiceItem) => void;
}

export const ArtisanServices: React.FC<ArtisanServicesProps> = ({ onEnquireService }) => {
  return (
    <section id="services" className="w-full py-16 sm:py-24 bg-[#faf9f4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
            Specialized Hospitality
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
            Artisan Culinary Services
          </h2>
          <p className="text-sm sm:text-base text-[#404846] mt-2 leading-relaxed">
            From multi-tiered wedding statements to private tasting salons and corporate signature hampers.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-[#f5f4ef] p-6 sm:p-7 rounded-2xl border border-[#c0c8c4]/30 flex flex-col justify-between hover:shadow-[0_12px_28px_rgba(0,38,31,0.06)] hover:border-[#c8a96a]/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                    {s.price}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#efeee9] text-[#00261f] flex items-center justify-center group-hover:bg-[#b2ebdc] transition-colors">
                    <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                  </div>
                </div>

                <h3 className="font-serif text-[20px] font-semibold text-[#00261f] mb-2 group-hover:text-[#31685c] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#404846] leading-relaxed">{s.desc}</p>

                <div className="mt-4 flex items-center gap-2 text-[#b99b5e] text-xs font-medium">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>{s.perk}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onEnquireService(s)}
                className="mt-6 self-start px-5 py-2.5 rounded-full bg-white text-[#00261f] text-xs font-semibold uppercase tracking-wider hover:bg-[#00261f] hover:text-white transition-all shadow-xs border border-[#c0c8c4]/40 cursor-pointer"
              >
                Enquire Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
