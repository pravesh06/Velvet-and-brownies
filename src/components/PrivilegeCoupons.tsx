import React from 'react';
import { COUPONS } from '../data/patisserieData';

interface PrivilegeCouponsProps {
  onCopyCoupon: (code: string) => void;
}

export const PrivilegeCoupons: React.FC<PrivilegeCouponsProps> = ({ onCopyCoupon }) => {
  return (
    <section className="w-full py-12 sm:py-16 bg-[#e9e8e3] border-y border-[#c0c8c4]/30">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
              Exclusive Allocations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#00261f] mt-0.5">
              Privilege Tasting Codes
            </h3>
          </div>
          <span className="text-xs text-[#717976]">
            Click any voucher code to copy and apply directly
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COUPONS.map((cp) => (
            <div
              key={cp.code}
              className="bg-[#faf9f4] p-5 rounded-2xl shadow-xs border border-[#c0c8c4]/40 flex items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[11px] font-bold text-[#31685c] uppercase tracking-wider block">
                  {cp.tag}
                </span>
                <h4 className="font-serif text-[17px] font-semibold text-[#00261f] mt-0.5">
                  {cp.title}
                </h4>
                <p className="text-xs text-[#404846] mt-0.5">{cp.condition}</p>
              </div>

              <button
                type="button"
                onClick={() => onCopyCoupon(cp.code)}
                className="px-4 py-2 rounded-full bg-[#b2ebdc] text-[#356c60] text-xs font-bold uppercase tracking-wider hover:bg-[#31685c] hover:text-white transition-all cursor-pointer whitespace-nowrap shadow-xs active:scale-95"
                title={`Copy code ${cp.code}`}
              >
                {cp.code}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
