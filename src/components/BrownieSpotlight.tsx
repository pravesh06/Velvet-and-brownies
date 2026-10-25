import React, { useState } from 'react';
import { BROWNIE_FLAVORS } from '../data/patisserieData';

interface BrownieSpotlightProps {
  onAddCustomBox: (boxDescription: string, price: number, size: number) => void;
  onQuickAddBrownie: (name: string, price: number) => void;
}

export const BrownieSpotlight: React.FC<BrownieSpotlightProps> = ({
  onAddCustomBox,
  onQuickAddBrownie
}) => {
  const [boxSize, setBoxSize] = useState<number>(6);
  const [boxPrice, setBoxPrice] = useState<number>(750);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    fudge: 0,
    espresso: 0,
    hazelnut: 0,
    lotus: 0
  });

  const boxSizes = [
    { size: 6, price: 750, label: 'Box of 6 (₹750)' },
    { size: 9, price: 1050, label: 'Box of 9 (₹1,050)' },
    { size: 12, price: 1350, label: 'Box of 12 (₹1,350)' }
  ];

  const handleSelectBoxSize = (size: number, price: number) => {
    setBoxSize(size);
    setBoxPrice(price);
    setQuantities({ fudge: 0, espresso: 0, hazelnut: 0, lotus: 0 });
  };

  const totalFilled = Object.values(quantities).reduce((a, b) => a + b, 0);
  const remainingSlots = boxSize - totalFilled;

  const adjustQty = (flavorKey: string, delta: number) => {
    if (delta > 0 && totalFilled >= boxSize) {
      return;
    }
    const current = quantities[flavorKey] || 0;
    if (delta < 0 && current <= 0) return;

    setQuantities((prev) => ({
      ...prev,
      [flavorKey]: Math.max(0, current + delta)
    }));
  };

  const handleAddBox = () => {
    if (remainingSlots > 0) return;

    const parts: string[] = [];
    if (quantities.fudge > 0) parts.push(`${quantities.fudge} Double Fudge`);
    if (quantities.espresso > 0) parts.push(`${quantities.espresso} Espresso`);
    if (quantities.hazelnut > 0) parts.push(`${quantities.hazelnut} Hazelnut`);
    if (quantities.lotus > 0) parts.push(`${quantities.lotus} Lotus`);

    const boxTitle = `Bespoke Box of ${boxSize} (${parts.join(', ')})`;
    onAddCustomBox(boxTitle, boxPrice, boxSize);

    // Reset
    setQuantities({ fudge: 0, espresso: 0, hazelnut: 0, lotus: 0 });
  };

  return (
    <section
      id="brownie-spotlight"
      className="w-full bg-[#00261f] text-[#faf9f4] py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#0f3d34]/40 blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14 sm:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0f3d34] text-[#ffdf9f] text-xs uppercase tracking-widest font-semibold mb-3 border border-[#c8a96a]/30">
              The Dark Core Archive
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#faf9f4] leading-tight">
              Grand Reserve Fudgy Brownies
            </h2>
            <p className="text-[#efeee9]/90 text-base sm:text-lg mt-2.5 font-light leading-relaxed">
              Slow baked in small cast pans with 70% Single Origin Callebaut cocoa and Maldon crystal sea salt.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-[#0f3d34]/80 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b2ebdc] animate-pulse" />
            <span className="text-xs text-[#beecdf] tracking-wider uppercase font-medium">
              Served warm in-studio or sealed for nationwide transit
            </span>
          </div>
        </div>

        {/* 4 Brownie Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROWNIE_FLAVORS.map((b) => (
            <div
              key={b.key}
              className="bg-[#0f3d34] p-6 rounded-2xl flex flex-col justify-between h-full shadow-lg border border-[#c8a96a]/20 group hover:border-[#c8a96a]/50 transition-all duration-300"
            >
              <div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#00261f]">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] font-semibold text-[#ffdf9f] tracking-widest uppercase">
                  {b.badge}
                </span>
                <h3 className="font-serif text-[20px] font-semibold text-white mt-1 mb-2">
                  {b.name}
                </h3>
                <p className="text-xs text-[#c0c8c4] leading-relaxed">{b.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-serif text-[22px] font-semibold text-[#ffdf9f]">
                    ₹{b.unitPrice}
                  </span>
                  <span className="text-[11px] text-[#c0c8c4] ml-1">/ piece</span>
                </div>
                <button
                  type="button"
                  onClick={() => onQuickAddBrownie(b.name, b.unitPrice)}
                  className="p-2 rounded-full bg-[#31685c] hover:bg-[#b2ebdc] hover:text-[#00261f] text-white transition-colors cursor-pointer"
                  title="Add single piece"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Build-Your-Box Atelier */}
        <div className="bg-[#ffffff] dark:bg-[#0c1815] text-[#1b1c19] dark:text-[#f4f1ea] p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-[#c8a96a]/40 dark:border-[#c8a96a]/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#efeee9] dark:border-[#203630]">
            <div>
              <span className="text-xs font-bold text-[#31685c] dark:text-[#ffdf9f] uppercase tracking-widest">
                Custom Assortment Atelier
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#00261f] dark:text-[#f4f1ea] mt-1">
                Build Your Bespoke Brownie Box
              </h3>
              <p className="text-sm text-[#404846] dark:text-[#c5d5cf] mt-1">
                Select your gift casket volume, then tap flavor allotments to curate your personalized combination.
              </p>
            </div>

            {/* Box Size Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-[#efeee9] dark:bg-[#142621] rounded-full border border-[#c0c8c4]/30 dark:border-[#2d4941]">
              {boxSizes.map((s) => (
                <button
                  key={s.size}
                  type="button"
                  onClick={() => handleSelectBoxSize(s.size, s.price)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    boxSize === s.size
                      ? 'bg-[#00261f] dark:bg-[#c8a96a] text-white dark:text-[#091512] shadow-xs'
                      : 'text-[#404846] dark:text-[#c5d5cf] hover:text-[#00261f] dark:hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor Quantity Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
            {BROWNIE_FLAVORS.map((f) => {
              const count = quantities[f.key] || 0;
              return (
                <div
                  key={f.key}
                  className="p-5 rounded-2xl bg-[#f5f4ef] dark:bg-[#10201b] border border-[#efeee9] dark:border-[#203630] flex flex-col justify-between hover:border-[#c8a96a]/40 transition-colors"
                >
                  <div>
                    <h4 className="font-serif text-[17px] font-semibold text-[#00261f] dark:text-[#f4f1ea]">
                      {f.name}
                    </h4>
                    <p className="text-xs text-[#717976] dark:text-[#9eb1ab] mt-0.5">{f.desc.slice(0, 45)}...</p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#c0c8c4]/20 dark:border-[#203630]">
                    <button
                      type="button"
                      onClick={() => adjustQty(f.key, -1)}
                      disabled={count === 0}
                      className="w-9 h-9 rounded-full bg-white dark:bg-[#182e28] text-[#00261f] dark:text-[#ffdf9f] border border-transparent dark:border-[#c8a96a]/40 flex items-center justify-center font-bold hover:bg-[#e9e8e3] dark:hover:bg-[#223f37] disabled:opacity-30 disabled:cursor-not-allowed shadow-xs transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-serif text-[20px] font-bold text-[#00261f] dark:text-[#ffdf9f]">
                      {count}
                    </span>
                    <button
                      type="button"
                      onClick={() => adjustQty(f.key, 1)}
                      disabled={remainingSlots <= 0}
                      className="w-9 h-9 rounded-full bg-[#00261f] dark:bg-[#c8a96a] text-white dark:text-[#091512] flex items-center justify-center font-bold hover:bg-[#0f3d34] dark:hover:bg-[#e3c281] disabled:opacity-30 disabled:cursor-not-allowed shadow-xs transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Box Slot Representation */}
          <div className="mt-8 p-4 rounded-2xl bg-[#faf9f4] dark:bg-[#10201b] border border-[#c8a96a]/20 dark:border-[#c8a96a]/30">
            <span className="text-[11px] font-semibold text-[#717976] dark:text-[#c5d5cf] uppercase tracking-wider block mb-2">
              Bespoke Box Casket Arrangement ({totalFilled}/{boxSize} slots occupied)
            </span>
            <div className="grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-12 gap-2">
              {Array.from({ length: boxSize }).map((_, idx) => {
                // Find which flavor occupies this slot
                let currentSlot = 0;
                let assignedFlavor: (typeof BROWNIE_FLAVORS)[0] | null = null;
                for (const fl of BROWNIE_FLAVORS) {
                  const qty = quantities[fl.key] || 0;
                  if (idx < currentSlot + qty) {
                    assignedFlavor = fl;
                    break;
                  }
                  currentSlot += qty;
                }

                return (
                  <div
                    key={idx}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center border text-center transition-all ${
                      assignedFlavor
                        ? 'bg-[#0f3d34] dark:bg-[#1d4138] text-[#ffdf9f] border-[#c8a96a]/60 shadow-xs'
                        : 'bg-[#efeee9]/70 dark:bg-[#162923] text-[#717976] dark:text-[#8ea39c] border-dashed border-[#c0c8c4] dark:border-[#2d4941]'
                    }`}
                  >
                    {assignedFlavor ? (
                      <span className="material-symbols-outlined text-[18px]">
                        {assignedFlavor.icon}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#717976] dark:text-[#9eb1ab] font-bold">{idx + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 mt-4 border-t border-[#efeee9] dark:border-[#203630]">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-xs transition-colors ${
                  remainingSlots === 0
                    ? 'bg-[#31685c] dark:bg-[#c8a96a] text-white dark:text-[#091512]'
                    : 'bg-[#b2ebdc] dark:bg-[#1a3830] text-[#356c60] dark:text-[#a2ebd8]'
                }`}
              >
                {remainingSlots}
              </div>
              <div>
                <p className="text-sm font-bold text-[#00261f] dark:text-[#f4f1ea]">Slots remaining to fill</p>
                <p
                  className={`text-xs ${
                    remainingSlots === 0
                      ? 'text-[#31685c] dark:text-[#8ee0cd] font-semibold'
                      : 'text-[#717976] dark:text-[#9eb1ab]'
                  }`}
                >
                  {remainingSlots === 0
                    ? 'Box complete! Ready for chilled hand-tie sealing.'
                    : `Select ${remainingSlots} more brownie${
                        remainingSlots > 1 ? 's' : ''
                      } to finalize casket`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#00261f] dark:text-[#ffdf9f]">
                ₹{boxPrice}
              </span>
              <button
                type="button"
                onClick={handleAddBox}
                disabled={remainingSlots > 0}
                className={`px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md ${
                  remainingSlots === 0
                    ? 'bg-[#00261f] dark:bg-[#c8a96a] text-white dark:text-[#091512] dark:font-bold hover:bg-[#0f3d34] dark:hover:bg-[#dfc285] cursor-pointer transform hover:-translate-y-0.5'
                    : 'bg-[#c0c8c4] dark:bg-[#1a2d28] text-[#717976] dark:text-[#5e746d] cursor-not-allowed opacity-60'
                }`}
              >
                Add Box to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
