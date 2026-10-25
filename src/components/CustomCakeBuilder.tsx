import React, { useState } from 'react';
import { CustomCakeConfig } from '../types';

interface CustomCakeBuilderProps {
  onSubmitCustomCake: (cake: CustomCakeConfig, total: number) => void;
  onOpenConsultationModal: (title: string, details?: string) => void;
}

export const CustomCakeBuilder: React.FC<CustomCakeBuilderProps> = ({
  onSubmitCustomCake,
  onOpenConsultationModal
}) => {
  const [config, setConfig] = useState<CustomCakeConfig>({
    occasion: 'Birthday',
    occPrice: 0,
    tier: 'Single Tier 0.5kg (6-8 Guests)',
    tierPrice: 1450,
    sponge: 'Belgian Dark Chocolate',
    spongePrice: 0,
    filling: 'Wild Forest Berry Compote',
    fillingPrice: 200,
    frosting: 'Swiss Meringue Buttercream',
    frostingPrice: 0,
    plaque: '',
    date: ''
  });

  const occasions = [
    { label: 'Birthday', price: 0, icon: 'cake' },
    { label: 'Wedding', price: 500, icon: 'favorite' },
    { label: 'Anniversary', price: 200, icon: 'sentiment_very_satisfied' },
    { label: 'Milestone Gala', price: 300, icon: 'emoji_events' }
  ];

  const tiers = [
    {
      label: 'Single Tier 0.5kg (6-8 Guests)',
      title: '0.5 kg',
      sub: '6-8 intimate servings',
      price: 1450
    },
    {
      label: 'Single Tier 1.0kg (12-16 Guests)',
      title: '1.0 kg',
      sub: '12-16 grand servings',
      price: 2650
    },
    {
      label: 'Double Tier 2.0kg (25-35 Guests)',
      title: '2.0 kg (2-Tier)',
      sub: '25-35 gala guests',
      price: 4800
    }
  ];

  const sponges = [
    { name: 'Belgian Dark Chocolate', label: 'Belgian Dark', desc: '70% Callebaut', price: 0 },
    { name: 'Madagascar Vanilla Bean', label: 'Vanilla Bean', desc: 'Bourbon pods', price: 0 },
    { name: 'Red Velvet Silk', label: 'Red Velvet', desc: 'Buttermilk crumb', price: 150 },
    { name: 'Opera Almond Genoise', label: 'Almond Genoise', desc: 'Almond joconde', price: 250 }
  ];

  const fillings = [
    {
      name: 'Wild Forest Berry Compote',
      label: 'Wild Forest Berry',
      desc: 'Raspberry & blueberry compote (+₹200)',
      price: 200
    },
    {
      name: 'Salted Butter Caramel Crunch',
      label: 'Salted Caramel Crunch',
      desc: 'Breton butter pearls (+₹250)',
      price: 250
    },
    {
      name: 'Dark Praline Gianduja Ganache',
      label: 'Dark Praline Ganache',
      desc: 'Hazelnut velvet (+₹350)',
      price: 350
    }
  ];

  const frostings = [
    {
      name: 'Swiss Meringue Buttercream',
      label: 'Swiss Buttercream',
      desc: 'Silky smooth ivory (+₹0)',
      price: 0
    },
    {
      name: 'Glossy Mirror Glaze & Gold Leaf',
      label: 'Mirror Glaze & Gold',
      desc: '24k gold leaf (+₹350)',
      price: 350
    },
    {
      name: 'Rustic Semi-Naked Botanical',
      label: 'Semi-Naked Botanical',
      desc: 'Floral elegance (+₹150)',
      price: 150
    }
  ];

  const totalPrice =
    config.tierPrice +
    config.occPrice +
    config.spongePrice +
    config.fillingPrice +
    config.frostingPrice;

  const handleSubmit = () => {
    onSubmitCustomCake(config, totalPrice);
    onOpenConsultationModal(
      `Bespoke ${config.occasion} Cake (${config.tier.split('(')[0]})`,
      `Configuration: ${config.sponge} with ${config.filling}, ${config.frosting}. Inscription: "${config.plaque || 'None'}". Needed on: ${config.date || 'TBD'}. Estimated: ₹${totalPrice.toLocaleString()}.`
    );
  };

  return (
    <section id="custom-cakes" className="w-full py-16 sm:py-24 bg-[#f5f4ef] border-y border-[#c0c8c4]/20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
            Bespoke Architectural Atelier
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
            Design Your Centerpiece Cake
          </h2>
          <p className="text-sm sm:text-base text-[#404846] mt-2 leading-relaxed">
            Tailored proportions, noble sponges, and edible floral finishings. Complete each step to calculate your instant quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Step 1: Occasion */}
            <div className="bg-[#faf9f4] p-6 rounded-2xl shadow-xs border border-[#c0c8c4]/30">
              <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                Step 1
              </span>
              <h3 className="font-serif text-[19px] font-semibold text-[#00261f] mt-1 mb-4">
                Select the Occasion
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {occasions.map((occ) => {
                  const isSelected = config.occasion === occ.label;
                  return (
                    <button
                      key={occ.label}
                      type="button"
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          occasion: occ.label,
                          occPrice: occ.price
                        }))
                      }
                      className={`p-3.5 rounded-xl text-left flex flex-col gap-1 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0f3d34] text-white shadow-sm ring-1 ring-[#c8a96a]'
                          : 'bg-[#efeee9] text-[#1b1c19] hover:bg-[#e9e8e3]'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined ${
                          isSelected ? 'text-[#ffdf9f]' : 'text-[#31685c]'
                        }`}
                      >
                        {occ.icon}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold">{occ.label}</span>
                      {occ.price > 0 && (
                        <span className="text-[10px] opacity-80">+₹{occ.price}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Servings & Tiers */}
            <div className="bg-[#faf9f4] p-6 rounded-2xl shadow-xs border border-[#c0c8c4]/30">
              <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                Step 2
              </span>
              <h3 className="font-serif text-[19px] font-semibold text-[#00261f] mt-1 mb-4">
                Servings &amp; Architectural Tiers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tiers.map((tier) => {
                  const isSelected = config.tier === tier.label;
                  return (
                    <button
                      key={tier.label}
                      type="button"
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          tier: tier.label,
                          tierPrice: tier.price
                        }))
                      }
                      className={`p-4 rounded-xl text-left flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0f3d34] text-white shadow-sm ring-1 ring-[#c8a96a]'
                          : 'bg-[#efeee9] text-[#1b1c19] hover:bg-[#e9e8e3]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-[18px] font-semibold block">
                          {tier.title}
                        </span>
                        <p
                          className={`text-xs mt-0.5 ${
                            isSelected ? 'text-[#beecdf]' : 'text-[#717976]'
                          }`}
                        >
                          {tier.sub}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold mt-4 ${
                          isSelected ? 'text-[#ffdf9f]' : 'text-[#b99b5e]'
                        }`}
                      >
                        ₹{tier.price.toLocaleString()} base
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sponge Flavor */}
            <div className="bg-[#faf9f4] p-6 rounded-2xl shadow-xs border border-[#c0c8c4]/30">
              <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                Step 3
              </span>
              <h3 className="font-serif text-[19px] font-semibold text-[#00261f] mt-1 mb-4">
                Gourmet Sponge Foundation
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sponges.map((sp) => {
                  const isSelected = config.sponge === sp.name;
                  return (
                    <button
                      key={sp.name}
                      type="button"
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          sponge: sp.name,
                          spongePrice: sp.price
                        }))
                      }
                      className={`p-3.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0f3d34] text-white shadow-sm ring-1 ring-[#c8a96a]'
                          : 'bg-[#efeee9] text-[#1b1c19] hover:bg-[#e9e8e3]'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold block">{sp.label}</span>
                      <span
                        className={`text-[11px] block mt-0.5 ${
                          isSelected ? 'text-[#beecdf]' : 'text-[#717976]'
                        }`}
                      >
                        {sp.desc}
                      </span>
                      {sp.price > 0 && (
                        <span
                          className={`text-[11px] font-semibold mt-1 block ${
                            isSelected ? 'text-[#ffdf9f]' : 'text-[#b99b5e]'
                          }`}
                        >
                          +₹{sp.price}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Fillings & Mousses */}
            <div className="bg-[#faf9f4] p-6 rounded-2xl shadow-xs border border-[#c0c8c4]/30">
              <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                Step 4
              </span>
              <h3 className="font-serif text-[19px] font-semibold text-[#00261f] mt-1 mb-4">
                Luxe Interlayer Filling
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {fillings.map((fl) => {
                  const isSelected = config.filling === fl.name;
                  return (
                    <button
                      key={fl.name}
                      type="button"
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          filling: fl.name,
                          fillingPrice: fl.price
                        }))
                      }
                      className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0f3d34] text-white shadow-sm ring-1 ring-[#c8a96a]'
                          : 'bg-[#efeee9] text-[#1b1c19] hover:bg-[#e9e8e3]'
                      }`}
                    >
                      <span className="text-sm font-bold block">{fl.label}</span>
                      <p
                        className={`text-xs mt-1 ${
                          isSelected ? 'text-[#beecdf]' : 'text-[#717976]'
                        }`}
                      >
                        {fl.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5 & 6: Finishings, Plaque Inscription & Date */}
            <div className="bg-[#faf9f4] p-6 rounded-2xl shadow-xs border border-[#c0c8c4]/30 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#31685c] uppercase tracking-wider">
                  Step 5
                </span>
                <h3 className="font-serif text-[19px] font-semibold text-[#00261f] mt-1 mb-4">
                  Frosting Aesthetic &amp; Finish
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {frostings.map((fr) => {
                    const isSelected = config.frosting === fr.name;
                    return (
                      <button
                        key={fr.name}
                        type="button"
                        onClick={() =>
                          setConfig((prev) => ({
                            ...prev,
                            frosting: fr.name,
                            frostingPrice: fr.price
                          }))
                        }
                        className={`p-3.5 rounded-xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#0f3d34] text-white shadow-sm ring-1 ring-[#c8a96a]'
                            : 'bg-[#efeee9] text-[#1b1c19] hover:bg-[#e9e8e3]'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-bold block">{fr.label}</span>
                        <span
                          className={`text-xs block mt-0.5 ${
                            isSelected ? 'text-[#beecdf]' : 'text-[#717976]'
                          }`}
                        >
                          {fr.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Plaque text and date picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#c0c8c4]/20">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                    Custom Inscription on Sugar Plaque
                  </label>
                  <input
                    type="text"
                    value={config.plaque}
                    onChange={(e) =>
                      setConfig((prev) => ({ ...prev, plaque: e.target.value }))
                    }
                    placeholder="e.g. Happy 30th Birthday Alistair"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                    Celebration Date Needed
                  </label>
                  <input
                    type="date"
                    value={config.date}
                    onChange={(e) =>
                      setConfig((prev) => ({ ...prev, date: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Summary Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#faf9f4] p-6 sm:p-7 rounded-3xl shadow-lg border border-[#c8a96a]/40 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#c0c8c4]/20">
                <h3 className="font-serif text-[20px] font-semibold text-[#00261f]">
                  Atelier Cake Summary
                </h3>
                <span className="text-[11px] font-bold text-[#b99b5e] uppercase tracking-wider">
                  Bespoke
                </span>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-[#404846]">
                <div className="flex justify-between items-center">
                  <span>Occasion:</span>
                  <strong className="text-[#1b1c19] font-medium">{config.occasion}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Weight / Scale:</span>
                  <strong className="text-[#1b1c19] font-medium">
                    {config.tier.split('(')[0]}
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sponge Foundation:</span>
                  <strong className="text-[#1b1c19] font-medium text-right max-w-[160px] truncate">
                    {config.sponge}
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Interlayer Filling:</span>
                  <strong className="text-[#1b1c19] font-medium text-right max-w-[160px] truncate">
                    {config.filling}
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Aesthetic Finish:</span>
                  <strong className="text-[#1b1c19] font-medium text-right max-w-[160px] truncate">
                    {config.frosting}
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sugar Plaque:</span>
                  <span className="text-[#00261f] italic font-medium max-w-[150px] truncate">
                    {config.plaque ? `"${config.plaque}"` : 'None specified'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Target Date:</span>
                  <strong className="text-[#1b1c19] font-medium">
                    {config.date || 'Flexible / To be confirmed'}
                  </strong>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c0c8c4]/30 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#717976] uppercase tracking-wider block">
                    Estimated Quote
                  </span>
                  <p className="font-serif text-[26px] font-bold text-[#00261f]">
                    ₹{totalPrice.toLocaleString()}
                  </p>
                </div>
                <span className="text-xs text-[#31685c] font-semibold">Taxes included</span>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-full bg-[#00261f] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#0f3d34] transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Submit Custom Request
              </button>

              <p className="text-[11px] text-[#717976] text-center leading-relaxed">
                Chef consultation, sketch rendering, and dietary allergen verification included upon request submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
