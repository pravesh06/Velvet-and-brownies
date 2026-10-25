import React from 'react';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: 'military_tech',
      title: '10+ Years',
      desc: 'Boutique master pastry artistry'
    },
    {
      icon: 'celebration',
      title: '25,000+',
      desc: 'Heirloom celebration cakes'
    },
    {
      icon: 'nutrition',
      title: '100% Pure',
      desc: 'Belgian cocoa & French dairy'
    },
    {
      icon: 'local_shipping',
      title: 'Climate Chilled',
      desc: 'Same-day pristine delivery'
    }
  ];

  return (
    <section className="w-full bg-[#f5f4ef] py-10 sm:py-12 border-b border-[#c0c8c4]/20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {trustPoints.map((item, index) => (
          <div
            key={index}
            className="bg-[#faf9f4] p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-[#c0c8c4]/30 flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-11 h-11 rounded-full bg-[#b2ebdc] text-[#356c60] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            </div>
            <div>
              <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#00261f]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#404846] mt-0.5 leading-snug">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
