import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Flavour & Style',
      desc: 'Explore seasonal catalogs or commission custom tier structures designed for your celebration aesthetic.'
    },
    {
      num: '02',
      title: 'Bespoke Personalization',
      desc: 'Select allergen adjustments (eggless, vegan), specify gold leaf monogramming, and pick delivery windows.'
    },
    {
      num: '03',
      title: 'Slow Baked Fresh',
      desc: 'Mixed and slow-baked the exact morning of delivery using whole Madagascar beans and single-origin chocolates.'
    },
    {
      num: '04',
      title: 'Chilled Hand Delivery',
      desc: 'Handled with climate-monitored courier boxes to preserve flawless exterior glazes right up to presentation.'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#00261f] text-[#faf9f4] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14 relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ffdf9f]">
            Proven Haute Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mt-1">
            Our Journey to Your Table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-[#0f3d34] p-6 sm:p-7 rounded-2xl flex flex-col gap-3 relative border border-[#c8a96a]/20 group hover:border-[#c8a96a]/60 transition-colors"
            >
              <span className="font-serif text-3xl sm:text-4xl text-[#ffdf9f] font-semibold opacity-90">
                {st.num}
              </span>
              <h3 className="font-serif text-[20px] font-semibold text-white mt-1">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#c0c8c4] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
