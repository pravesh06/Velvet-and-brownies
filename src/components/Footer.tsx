import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleGazetteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onShowToast('Thank you for joining the Gazeteer. Private allocations will be dispatched.');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#00261f] text-white pt-16 sm:pt-20 pb-12 border-t border-[#c8a96a]/20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-[#c8a96a]/40 overflow-hidden shrink-0">
                <img
                  src="/assets/aistudio/Velvet___Brownies_Bakery_Logo_a78587d1.png"
                  alt="Velvet & Brownies Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-white">
                Velvet &amp; Brownies
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-[#c0c8c4] max-w-sm leading-relaxed font-light">
              Baked slow. Finished beautifully. Handcrafted viennoiserie, bespoke wedding centerpieces, and single-origin cocoa confections born from timeless European technique.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[11px] font-semibold text-[#ffdf9f] tracking-widest uppercase">
                Salon Privé &amp; Atelier
              </span>
            </div>
          </div>

          {/* Boutique Address */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-[17px] font-semibold text-white">
              Boutique Address
            </h4>
            <div className="flex flex-col gap-1 text-xs text-[#c0c8c4] leading-relaxed">
              <p className="text-white font-medium">Place de l'Atelier 18</p>
              <p>Heritage Quarter, Suite 4</p>
              <p>Metropolis, NY 10012</p>

              <div className="pt-3 flex flex-col gap-1">
                <p className="text-[#ffdf9f] text-[11px] font-semibold uppercase tracking-wider">
                  Salon Hours
                </p>
                <p>Tuesday – Saturday: 08:00 – 19:30</p>
                <p>Sunday Tasting: 09:00 – 16:00</p>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif text-[17px] font-semibold text-white">
              Departments
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#c0c8c4]">
              <li
                onClick={() => onNavigate('menu')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Morning Viennoiserie
              </li>
              <li
                onClick={() => onNavigate('brownie-spotlight')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Grand Reserve Brownies
              </li>
              <li
                onClick={() => onNavigate('custom-cakes')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Haute Custom Cakes
              </li>
              <li
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Private Tasting Salons
              </li>
              <li
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Corporate Gifting Caskets
              </li>
            </ul>
          </div>

          {/* The Gazeteer */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-[17px] font-semibold text-white">
              The Gazeteer
            </h4>
            <p className="text-xs text-[#c0c8c4] leading-relaxed">
              Receive seasonal tasting invitations, archive releases, and limited pastry batch allocations.
            </p>

            <form onSubmit={handleGazetteSubmit} className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-1 p-1 rounded-full bg-[#0f3d34] border border-[#c8a96a]/30">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your correspondence email"
                  className="w-full bg-transparent px-3.5 py-1.5 text-white placeholder:text-[#c0c8c4]/60 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-[#31685c] text-white text-xs font-semibold hover:bg-[#b2ebdc] hover:text-[#00261f] transition-colors shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </div>
              <span className="text-[10px] text-[#c0c8c4]/80 px-2 font-light">
                Reserve membership is complimentary and curated monthly.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="w-full pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#c0c8c4]">
          <p>© 2025 Velvet &amp; Brownies Artisan Patisserie Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onShowToast('Terms of Tasting: All confections are perishable.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Tasting
            </button>
            <button
              onClick={() => onShowToast('Atelier Privacy: Patron data is held in strict confidence.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Atelier Privacy
            </button>
            <button
              onClick={() => onShowToast('Culinary Hygiene: Triple-certified European sanitation standard.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Culinary Hygiene
            </button>
            <button
              onClick={() => onShowToast('Provenance: 70% Callebaut single-origin Belgian cocoa.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Provenance Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
