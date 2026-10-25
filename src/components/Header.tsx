import React, { useState, useEffect } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  onNavigate,
  theme,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'custom-cakes', label: 'Custom Cakes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f4]/75 dark:bg-[#071310]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,38,31,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/50 dark:border-[#223832]/70 py-2.5'
          : 'bg-[#faf9f4]/60 dark:bg-[#071310]/70 backdrop-blur-lg shadow-[0_2px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.3)] border-b border-white/40 dark:border-[#223832]/50 py-3.5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick('home', e)}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/70 dark:bg-[#12221e]/80 backdrop-blur-md flex items-center justify-center shadow-[0_2px_10px_rgba(200,169,106,0.22)] transition-transform duration-300 group-hover:scale-105 border border-white/80 dark:border-[#2f4941] overflow-hidden shrink-0">
            <img
              src="/assets/aistudio/Velvet___Brownies_Bakery_Logo_a78587d1.png"
              alt="Velvet & Brownies Logo"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <span className="font-serif text-[20px] sm:text-[22px] font-semibold tracking-normal text-[#00261f] dark:text-[#f4f1ea] whitespace-nowrap">
            Velvet &amp; Brownies
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-white/45 dark:bg-[#10201c]/70 backdrop-blur-md rounded-full border border-white/70 dark:border-[#253f38]/70 shadow-[0_2px_12px_rgba(0,38,31,0.04)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  isActive
                    ? 'bg-[#0f3d34]/90 dark:bg-[#1a443b] text-[#beecdf] dark:text-[#beecdf] font-semibold shadow-xs backdrop-blur-xs'
                    : 'text-[#404846] dark:text-[#a0b5ae] hover:text-[#00261f] dark:hover:text-[#f4f1ea] hover:bg-white/60 dark:hover:bg-[#182d27]/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark Theme Toggle Button on Navigation Bar */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={theme === 'dark' ? 'Switch to Light Ivory Theme' : 'Switch to Dark Velvet Theme'}
            className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/40 dark:bg-[#152420]/80 backdrop-blur-md hover:bg-white/75 dark:hover:bg-[#1e342e] text-[#00261f] dark:text-[#ffdf9f] border border-white/60 dark:border-[#2f4941] transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-2xs group focus:outline-none"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-500 group-hover:rotate-45">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
            <span className="hidden sm:inline text-xs font-semibold tracking-wide">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Cart Icon */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Open Tasting Cart"
            className="relative p-2 rounded-full text-[#00261f] dark:text-[#f4f1ea] bg-white/40 dark:bg-[#152420]/80 backdrop-blur-md hover:bg-white/75 dark:hover:bg-[#1e342e] border border-white/60 dark:border-[#2f4941] transition-all flex items-center justify-center cursor-pointer group shadow-2xs"
          >
            <span className="material-symbols-outlined text-[24px] group-hover:scale-105 transition-transform">
              shopping_bag
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-[#0f3d34] dark:bg-[#1a443b] text-[#beecdf] text-[11px] font-bold leading-5 text-center shadow-xs animate-in zoom-in-75">
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Now Pill CTA */}
          <a
            href="#menu"
            onClick={(e) => handleLinkClick('menu', e)}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide text-[#00261f] dark:text-[#f4f1ea] bg-white/30 dark:bg-[#152420]/60 backdrop-blur-md hover:bg-[#b2ebdc]/50 dark:hover:bg-[#1e3e37] transition-all duration-300 shadow-[0_0_0_1.5px_#b99b5e] hover:shadow-[0_0_0_2px_#00261f] dark:hover:shadow-[0_0_0_2px_#ffdf9f]"
          >
            Order Now
          </a>

          {/* Profile Avatar / Quick Info */}
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            title="Atelier Salon Concierge"
            className="w-8 h-8 rounded-full bg-[#00261f] dark:bg-[#16362e] flex items-center justify-center shrink-0 text-white hover:bg-[#0f3d34] dark:hover:bg-[#1f4a3f] transition-colors cursor-pointer shadow-2xs"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="xl:hidden p-2 rounded-full bg-white/40 dark:bg-[#152420]/80 backdrop-blur-md hover:bg-white/75 dark:hover:bg-[#1e342e] text-[#00261f] dark:text-[#f4f1ea] border border-white/60 dark:border-[#2f4941] focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf9f4]/95 dark:bg-[#0a1613]/95 backdrop-blur-2xl border-t border-white/50 dark:border-[#223832] px-6 py-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#0f3d34] dark:bg-[#1a443b] text-[#beecdf] font-semibold'
                    : 'text-[#404846] dark:text-[#a0b5ae] hover:bg-white/60 dark:hover:bg-[#152420]'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Theme Toggle Row */}
            <div className="pt-3 mt-2 border-t border-white/30 dark:border-[#223832] flex items-center justify-between">
              <span className="text-xs text-[#717976] dark:text-[#8fa19b] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  {theme === 'dark' ? 'dark_mode' : 'light_mode'}
                </span>
                Theme Mode
              </span>
              <button
                type="button"
                onClick={onToggleTheme}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-white/60 dark:bg-[#152420] text-[#00261f] dark:text-[#ffdf9f] border border-white/80 dark:border-[#2f4941] flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
                {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
              </button>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#717976] dark:text-[#8fa19b]">Tasting Salon Open</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="text-xs font-semibold text-[#00261f] dark:text-[#b2ebdc] underline cursor-pointer"
              >
                View Cart ({cartCount})
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

