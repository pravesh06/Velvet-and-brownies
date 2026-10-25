import React, { useState } from 'react';
import { BAKERS } from '../data/patisserieData';
import { BakerItem } from '../types';

interface OurBakersProps {
  onBookBakerConsultation: (baker: BakerItem) => void;
}

export const OurBakers: React.FC<OurBakersProps> = ({ onBookBakerConsultation }) => {
  const [activeDept, setActiveDept] = useState<string>('cakes');

  const deptTabs = [
    { id: 'cakes', label: 'Signature Cakes' },
    { id: 'brownies', label: 'Brownies & Bars' },
    { id: 'custom', label: 'Custom & Wedding' },
    { id: 'pastries', label: 'Viennoiserie' }
  ];

  const currentBakers = BAKERS[activeDept] || BAKERS.cakes;

  return (
    <section id="our-bakers" className="w-full py-16 sm:py-24 bg-[#f5f4ef]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header & Department Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
              Masters of the Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
              The Atelier Baker Profiles
            </h2>
          </div>
          <p className="text-sm text-[#404846] max-w-md leading-relaxed">
            Trained in Paris, Brussels, and Zurich, each brigade member brings singular devotion to crumb, temper, and texture.
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {deptTabs.map((t) => {
            const isActive = activeDept === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveDept(t.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#00261f] text-white shadow-xs'
                    : 'bg-[#faf9f4] text-[#404846] hover:text-[#00261f] hover:bg-[#efeee9] border border-[#c0c8c4]/30'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Baker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentBakers.map((b) => (
            <div
              key={b.id}
              className="bg-[#faf9f4] p-6 rounded-2xl shadow-xs border border-[#c0c8c4]/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Chef Portrait */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#efeee9] mb-4 relative">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                    {b.exp} Experience
                  </span>
                  <span className="text-xs font-bold text-[#b99b5e] flex items-center gap-0.5">
                    {b.rating}
                  </span>
                </div>

                <h3 className="font-serif text-[21px] font-semibold text-[#00261f] mt-1">
                  {b.name}
                </h3>
                <p className="text-xs font-semibold text-[#356c60] mt-0.5">{b.title}</p>

                <p className="text-xs text-[#717976] mt-3">
                  Specialty: <strong className="text-[#1b1c19]">{b.spec}</strong>
                </p>

                <p className="text-xs text-[#404846] mt-2 leading-relaxed italic">
                  "{b.bio}"
                </p>
              </div>

              <button
                type="button"
                onClick={() => onBookBakerConsultation(b)}
                className="mt-6 w-full py-2.5 rounded-full bg-[#efeee9] text-[#00261f] text-xs font-semibold uppercase tracking-wider hover:bg-[#00261f] hover:text-white transition-all cursor-pointer border border-[#c0c8c4]/40"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
