import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { MenuCatalog } from './components/MenuCatalog';
import { BrownieSpotlight } from './components/BrownieSpotlight';
import { CustomCakeBuilder } from './components/CustomCakeBuilder';
import { HowItWorks } from './components/HowItWorks';
import { OccasionsGrid } from './components/OccasionsGrid';
import { CuratedGallery } from './components/CuratedGallery';
import { Testimonials } from './components/Testimonials';
import { PrivilegeCoupons } from './components/PrivilegeCoupons';
import { FaqAccordion } from './components/FaqAccordion';
import { DeliverySalon } from './components/DeliverySalon';
import { NewsletterVip } from './components/NewsletterVip';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ServiceModal } from './components/ServiceModal';
import { Toast } from './components/Toast';
import { FloatingActions } from './components/FloatingActions';
import { LoadingScreen } from './components/LoadingScreen';
import { CartItem, Product, CustomCakeConfig } from './types';
import { COUPONS } from './data/patisserieData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Theme state persisted in localStorage - defaults to 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vb_patisserie_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark'; // Default to dark theme
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('vb_patisserie_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      return next;
    });
  };

  // Cart state initialized with 3 delicacies reflecting original mockup
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-1',
      title: 'Midnight Belgian Truffle',
      price: 1450,
      variant: '0.5kg Cake',
      qty: 1
    },
    {
      id: 'cart-2',
      title: 'Salted Caramel Fudge Brownie',
      price: 160,
      variant: 'Single Piece',
      qty: 2
    },
    {
      id: 'cart-3',
      title: 'Tahitian Vanilla Mille-Feuille',
      price: 280,
      variant: 'Individual',
      qty: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [serviceModal, setServiceModal] = useState<{
    isOpen: boolean;
    title: string;
    notes: string;
  }>({
    isOpen: false,
    title: '',
    notes: ''
  });

  const [activeSection, setActiveSection] = useState('home');
  const [occasionFilter, setOccasionFilter] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('FIRST15');

  // Trigger toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [toastMessage]);

  // Scrollspy to set active navigation section
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'home',
        'menu',
        'custom-cakes',
        'gallery',
        'reviews',
        'contact'
      ];
      const scrollPos = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.title === product.name && item.variant === product.weight
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, qty: item.qty + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          title: product.name,
          price: product.price,
          variant: product.weight,
          qty: quantity,
          image: product.image
        }
      ];
    });
    showToast(`Added "${product.name}" (${quantity}x) to your tasting casket`);
  };

  const handleAddCustomBox = (boxDescription: string, price: number, size: number) => {
    setCart((prev) => [
      ...prev,
      {
        id: `box-${Date.now()}`,
        title: boxDescription,
        price,
        variant: `Assorted Box of ${size}`,
        qty: 1
      }
    ]);
    setIsCartOpen(true);
    showToast(`Bespoke Box of ${size} added to your patisserie casket!`);
  };

  const handleQuickAddBrownie = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.title === name && item.variant === 'Piece'
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `brownie-${Date.now()}`,
          title: name,
          price,
          variant: 'Piece',
          qty: 1
        }
      ];
    });
    showToast(`Added 1x ${name} to your tasting casket`);
  };

  const handleUpdateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from casket');
  };

  // Coupon handlers
  const handleCopyCoupon = (code: string) => {
    navigator.clipboard?.writeText(code);
    setAppliedCoupon(code);
    showToast(`Privilege code "${code}" copied and activated!`);
  };

  const handleApplyCoupon = (code: string) => {
    const valid = COUPONS.find((c) => c.code === code) || code === 'VIPWELCOME150';
    if (valid) {
      setAppliedCoupon(code);
      showToast(`Privilege code "${code}" successfully applied!`);
    } else {
      showToast(`Privilege code "${code}" is invalid or expired.`);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    showToast('Privilege voucher removed');
  };

  // Occasions filtering
  const handleSelectOccasion = (occName: string) => {
    setOccasionFilter(occName);
    handleNavigate('menu');
    showToast(`Displaying confectionery suited for: ${occName}`);
  };

  // Custom cake builder callback
  const handleSubmitCustomCake = (cake: CustomCakeConfig, total: number) => {
    const itemTitle = `Custom ${cake.occasion} Cake: ${cake.sponge} & ${cake.filling}`;
    setCart((prev) => [
      ...prev,
      {
        id: `custom-cake-${Date.now()}`,
        title: itemTitle,
        price: total,
        variant: `${cake.tier.split('(')[0]} · ${cake.frosting}`,
        qty: 1
      }
    ]);
    showToast(`Custom centerpiece cake added to your casket!`);
  };

  // Order finish
  const handleOrderSuccess = (orderId: string) => {
    setCart([]);
    showToast(`Order ${orderId} confirmed! Check email for live cold-chain tracking.`);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  // Grand total computation for checkout
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  let discount = 0;
  if (appliedCoupon === 'FIRST15') discount = Math.round(subtotal * 0.15);
  else if (appliedCoupon === 'WEEKENDTREAT' && subtotal >= 1500) discount = 280;
  else if (appliedCoupon === 'CORP20' && subtotal >= 3000) discount = Math.round(subtotal * 0.2);
  else if (appliedCoupon === 'VIPWELCOME150') discount = Math.min(subtotal, 150);

  const deliveryCost = cart.length === 0 ? 0 : subtotal >= 999 ? 0 : 75;
  const grandTotal = Math.max(0, subtotal - discount + deliveryCost);

  return (
    <div className="min-h-screen bg-[#faf9f4] dark:bg-[#070e0c] font-sans text-[#1b1c19] dark:text-[#f4f1ea] selection:bg-[#b2ebdc] selection:text-[#356c60] transition-colors duration-300 pb-20 xl:pb-0">
      {/* 0. HAUTE PATISSERIE LOADING SCREEN */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* 1. STICKY TOP HEADER */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="w-full">
        {/* 2. HERO SHOWCASE */}
        <Hero onNavigate={handleNavigate} />

        {/* 3. TRUST & PEDIGREE STRIP */}
        <TrustStrip />

        {/* 4. DAILY PATISSERIE MENU */}
        <MenuCatalog
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onSelectProduct={(p) => setSelectedProduct(p)}
          externalFilter={occasionFilter}
        />

        {/* 5. GRAND RESERVE BROWNIES & BESPOKE BOX BUILDER */}
        <BrownieSpotlight
          onAddCustomBox={handleAddCustomBox}
          onQuickAddBrownie={handleQuickAddBrownie}
        />

        {/* 6. CUSTOM CAKE ARCHITECTURAL BUILDER */}
        <CustomCakeBuilder
          onSubmitCustomCake={handleSubmitCustomCake}
          onOpenConsultationModal={(title, notes) =>
            setServiceModal({ isOpen: true, title, notes: notes || '' })
          }
        />

        {/* 7. JOURNEY / HOW IT WORKS */}
        <HowItWorks />

        {/* 10. CELEBRATORY OCCASIONS GRID */}
        <OccasionsGrid onSelectOccasion={handleSelectOccasion} />

        {/* 11. CURATED GALLERY WITH LIGHTBOX */}
        <CuratedGallery />

        {/* 12. CLIENT TESTIMONIALS */}
        <Testimonials />

        {/* 13. PRIVILEGE TASTING CODES */}
        <PrivilegeCoupons onCopyCoupon={handleCopyCoupon} />

        {/* 14. FREQUENTLY ASKED ENQUIRIES */}
        <FaqAccordion />

        {/* 15. COLD-CHAIN DELIVERY & SALON PRIVÉ */}
        <DeliverySalon onNavigateContact={() => handleNavigate('contact')} />

        {/* 16. THE PATISSERIE GAZETTE (VIP NEWSLETTER) */}
        <NewsletterVip onShowToast={showToast} />

        {/* 17. CONTACT & BOUTIQUE INQUIRY */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* 18. FOOTER */}
      <Footer onNavigate={handleNavigate} onShowToast={showToast} />

      {/* 19. SLIDE-IN CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />

      {/* 20. CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        grandTotal={grandTotal}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* 21. PRODUCT DETAIL MODAL */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 22. SERVICE / CONSULTATION MODAL */}
      <ServiceModal
        isOpen={serviceModal.isOpen}
        onClose={() => setServiceModal({ isOpen: false, title: '', notes: '' })}
        serviceTitle={serviceModal.title}
        initialNotes={serviceModal.notes}
        onSuccess={showToast}
      />

      {/* 23. TOAST NOTIFICATION */}
      <Toast message={toastMessage} />

      {/* 24. FLOATING WHATSAPP & SCROLL TO TOP */}
      <FloatingActions />
    </div>
  );
}
