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
    <aside className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Concierge Trigger */}
      <a
        href="https://wa.me/?text=Hello%20Velvet%20%26%20Brownies%2C%20I%20would%20like%20to%20inquire%20about%20a%20patisserie%20order"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Atelier Concierge on WhatsApp"
        className="pointer-events-auto w-13 h-13 rounded-full bg-[#b2ebdc] text-[#356c60] shadow-[0_12px_32px_-4px_rgba(15,61,52,0.22),0_4px_12px_-2px_rgba(200,169,106,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-[#31685c]/30"
        title="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-[26px]">chat</span>
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#faf9f4] text-[#404846] hover:text-[#00261f] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#efeee9] transition-all flex items-center justify-center border border-[#c0c8c4]/40 cursor-pointer animate-in fade-in duration-200"
          title="Scroll to top"
        >
          <span className="material-symbols-outlined text-[20px]">north</span>
        </button>
      )}
    </aside>
  );
};
