import React, { useState } from 'react';
import { FAQS } from '../data/patisserieData';

export const FaqAccordion: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#faf9f4] dark:bg-[#070e0c] transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e] dark:text-[#ffdf9f]">
            Clarity &amp; Assurance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] dark:text-[#f4f1ea] mt-1">
            Frequently Asked Enquiries
          </h2>
        </div>

        <div className="max-w-3xl mx-auto w-full flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndices.includes(i);
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#f5f4ef] dark:bg-[#0c1815] border-[#c8a96a]/40 dark:border-[#c8a96a]/50 shadow-sm'
                    : 'bg-[#f5f4ef] dark:bg-[#0c1815]/80 border-[#c0c8c4]/30 dark:border-[#1e332c] hover:border-[#c8a96a]/30 dark:hover:border-[#c8a96a]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-[#efeee9] dark:hover:bg-[#142621] transition-colors"
                >
                  <span
                    className={`font-serif text-[16px] sm:text-[18px] font-semibold transition-colors ${
                      isOpen
                        ? 'text-[#00261f] dark:text-[#ffdf9f]'
                        : 'text-[#00261f] dark:text-[#f4f1ea]'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 text-[#00261f] dark:text-[#ffdf9f]'
                        : 'text-[#717976] dark:text-[#c8a96a]'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#404846] dark:text-[#c5d5cf] leading-relaxed border-t border-[#c0c8c4]/20 dark:border-[#1e332c] pt-3 animate-in fade-in-50 duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
