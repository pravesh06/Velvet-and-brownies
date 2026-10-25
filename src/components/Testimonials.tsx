import React from 'react';
import { TESTIMONIALS } from '../data/patisserieData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-16 sm:py-24 bg-[#faf9f4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header & Aggregate Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
              Verified Patron Praise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
              Words from Celebratory Tables
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#f5f4ef] px-5 py-3 rounded-2xl shadow-xs border border-[#c0c8c4]/30">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#00261f]">
              4.9 <span className="text-sm font-sans font-normal text-[#717976]">/ 5.0</span>
            </div>
            <div className="border-l border-[#c0c8c4]/40 pl-4">
              <div className="flex text-[#b99b5e]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[16px]">
                    star
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#404846] mt-0.5">Over 1,200 verified reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#f5f4ef] p-6 sm:p-7 rounded-2xl shadow-xs border border-[#c0c8c4]/30 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex text-[#b99b5e] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]">
                      star
                    </span>
                  ))}
                </div>
                <p className="font-serif text-sm sm:text-base text-[#1b1c19] italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c0c8c4]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-[16px] font-semibold text-[#00261f]">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-[#717976] block mt-0.5">{rev.event}</span>
                </div>
                <div className="flex items-center gap-1 text-[#31685c]" title={rev.date}>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
