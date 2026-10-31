import React, { useState, useEffect } from 'react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="fixed bottom-22 sm:bottom-24 xl:bottom-6 right-4 sm:right-6 z-30 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none transition-all duration-300">
      {/* WhatsApp Concierge Trigger */}
      <a
        href="https://wa.me/9198220984?text=Hello%20Velvet%20%26%20Brownies%2C%20I%20would%20like%20to%20inquire%20about%20a%20patisserie%20order"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Atelier Concierge on WhatsApp"
        className="pointer-events-auto w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#b2ebdc] text-[#1c4b41] dark:bg-[#154d42] dark:text-[#a5f1de] shadow-[0_12px_28px_-4px_rgba(15,61,52,0.28),0_4px_12px_-2px_rgba(200,169,106,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-[#31685c]/30 dark:border-[#388574]/40"
        title="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-[24px] sm:text-[26px]">chat</span>
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#faf9f4] dark:bg-[#1a201e] text-[#404846] dark:text-[#e1e3e0] hover:text-[#00261f] dark:hover:text-[#c4a053] shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-[#efeee9] dark:hover:bg-[#252f2b] transition-all flex items-center justify-center border border-[#c0c8c4]/40 dark:border-[#2f3d37] cursor-pointer animate-in fade-in duration-200"
          title="Scroll to top"
        >
          <span className="material-symbols-outlined text-[20px]">north</span>
        </button>
      )}
    </aside>
  );
};
