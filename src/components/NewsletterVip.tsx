import React, { useState } from 'react';

interface NewsletterVipProps {
  onShowToast: (msg: string) => void;
}

export const NewsletterVip: React.FC<NewsletterVipProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    onShowToast('Welcome to the Velvet Club! Use code VIPWELCOME150 for ₹150 off.');
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#b2ebdc]/30 border-y border-[#31685c]/15">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#b99b5e]">
          The Patisserie Gazette
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f]">
          Join the Velvet Confectionary Club
        </h2>
        <p className="text-sm sm:text-base text-[#404846] max-w-lg leading-relaxed">
          Receive rare chocolate archive releases, seasonal tasting reservations, and an instant ₹150 privilege voucher upon registering your correspondence.
        </p>

        {!isSubscribed ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your correspondence email"
              required
              className="flex-1 px-5 py-3 rounded-full bg-[#faf9f4] text-sm text-[#1b1c19] placeholder:text-[#717976] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 shadow-xs border border-[#c0c8c4]/40"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0f3d34] transition-all shrink-0 shadow-md cursor-pointer active:scale-95"
            >
              Join Salon
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-2xl bg-[#faf9f4] border border-[#31685c]/30 text-xs sm:text-sm text-[#00261f] font-medium shadow-sm animate-in zoom-in-95">
            Thank you for joining. Welcome gift code{' '}
            <span className="font-bold font-mono text-[#31685c] underline px-1 py-0.5 bg-[#b2ebdc]/40 rounded-sm">
              VIPWELCOME150
            </span>{' '}
            has been generated for your next order.
          </div>
        )}
      </div>
    </section>
  );
};
