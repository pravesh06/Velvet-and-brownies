import React from 'react';
import { OCCASIONS } from '../data/patisserieData';

interface OccasionsGridProps {
  onSelectOccasion: (occasionName: string) => void;
}

export const OccasionsGrid: React.FC<OccasionsGridProps> = ({ onSelectOccasion }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#faf9f4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
              Milestone Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
              Confections for Every Gala
            </h2>
          </div>
          <p className="text-sm text-[#404846] max-w-sm leading-relaxed">
            Tap an occasion to immediately filter current atelier availability and curated assortments.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {OCCASIONS.map((occ) => (
            <button
              key={occ.name}
              type="button"
              onClick={() => onSelectOccasion(occ.name)}
              className="group p-5 rounded-2xl bg-[#f5f4ef] hover:bg-[#b2ebdc]/35 border border-[#c0c8c4]/30 hover:border-[#31685c]/40 transition-all text-left flex flex-col justify-between h-40 sm:h-44 shadow-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[32px] text-[#31685c] group-hover:scale-110 transition-transform">
                {occ.icon}
              </span>
              <div>
                <h3 className="font-serif text-[18px] font-semibold text-[#00261f]">
                  {occ.name}
                </h3>
                <span className="text-xs text-[#717976] mt-0.5 block">{occ.count}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
