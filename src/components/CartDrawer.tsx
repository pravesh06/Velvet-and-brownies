import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  appliedCoupon: string | null;
  onApplyCoupon: (code: string) => void;
  onRemoveCoupon: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onCheckout,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon
}) => {
  const [couponInput, setCouponInput] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Calculate discount based on applied coupon
  let discount = 0;
  if (appliedCoupon === 'FIRST15') {
    discount = Math.round(subtotal * 0.15);
  } else if (appliedCoupon === 'WEEKENDTREAT' && subtotal >= 1500) {
    discount = 280;
  } else if (appliedCoupon === 'CORP20' && subtotal >= 3000) {
    discount = Math.round(subtotal * 0.2);
  } else if (appliedCoupon === 'VIPWELCOME150') {
    discount = Math.min(subtotal, 150);
  }

  const deliveryThreshold = 999;
  const isFreeDelivery = subtotal >= deliveryThreshold;
  const deliveryCost = items.length === 0 ? 0 : isFreeDelivery ? 0 : 75;
  const grandTotal = Math.max(0, subtotal - discount + deliveryCost);

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    onApplyCoupon(couponInput.trim().toUpperCase());
    setCouponInput('');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#00261f]/65 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Aside Drawer */}
      <aside
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-[#faf9f4] shadow-2xl z-50 transition-transform duration-300 flex flex-col justify-between border-l border-[#c8a96a]/30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#efeee9] flex items-center justify-between bg-[#faf9f4]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#00261f] text-[24px]">
              shopping_bag
            </span>
            <div>
              <h3 className="font-serif text-[19px] font-semibold text-[#00261f]">
                Your Patisserie Casket
              </h3>
              <span className="text-[11px] text-[#717976]">
                {items.length} {items.length === 1 ? 'creation' : 'creations'}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#efeee9] text-[#404846] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3 bg-[#f5f4ef] border-b border-[#efeee9] text-xs">
          {isFreeDelivery ? (
            <div className="flex items-center gap-1.5 text-[#31685c] font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Complimentary chilled dispatch unlocked!</span>
            </div>
          ) : (
            <div>
              <div className="flex justify-between text-[#404846] mb-1.5">
                <span>Add ₹{(deliveryThreshold - subtotal).toLocaleString()} for Free Delivery</span>
                <span>{Math.round((subtotal / deliveryThreshold) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#efeee9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#31685c] rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / deliveryThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items Scrollable List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-3">
          {items.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center text-[#717976]">
              <span className="material-symbols-outlined text-4xl text-[#c0c8c4] mb-2">
                cookie
              </span>
              <p className="font-serif text-lg text-[#00261f]">Your casket is empty</p>
              <p className="text-xs text-[#717976] mt-1">
                Explore our signature cakes and molten brownies to fill your box.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#c0c8c4]/30 shadow-2xs gap-3"
              >
                <div className="max-w-[210px]">
                  <h4 className="font-serif text-[15px] font-semibold text-[#00261f] line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-[#717976] block mt-0.5">
                    {item.variant} · ₹{item.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#efeee9] rounded-full p-0.5">
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="w-6 h-6 rounded-full bg-white text-[#00261f] flex items-center justify-center text-xs font-bold hover:bg-[#e9e8e3] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-[#00261f] px-2">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-6 h-6 rounded-full bg-[#00261f] text-white flex items-center justify-center text-xs font-bold hover:bg-[#0f3d34] cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#ba1a1a] hover:opacity-75 p-1"
                    title="Remove item"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Voucher & Totals Section */}
        <div className="p-5 sm:p-6 bg-[#f5f4ef] border-t border-[#efeee9] flex flex-col gap-3">
          {/* Coupon Input Form */}
          {appliedCoupon ? (
            <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#b2ebdc]/40 border border-[#31685c]/30 text-xs">
              <span className="font-semibold text-[#31685c]">
                Code "{appliedCoupon}" applied
              </span>
              <button
                type="button"
                onClick={onRemoveCoupon}
                className="text-[#ba1a1a] font-bold underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          ) : (
            <form onSubmit={handleCouponSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Privilege Code (e.g. FIRST15)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl bg-white text-xs text-[#1b1c19] focus:outline-none border border-[#c0c8c4]/40 uppercase placeholder:normal-case"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#00261f] text-white text-xs font-semibold uppercase hover:bg-[#0f3d34] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>
          )}

          {/* Ledger Calculation */}
          <div className="flex justify-between text-xs text-[#404846] pt-1">
            <span>Patisserie Subtotal:</span>
            <span className="font-semibold text-[#00261f]">₹{subtotal.toLocaleString()}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-xs text-[#31685c]">
              <span>Privilege Deduction:</span>
              <span className="font-semibold">-₹{discount.toLocaleString()}</span>
            </div>
          )}

          <div className="flex justify-between text-xs text-[#404846]">
            <span>Chilled Dispatch:</span>
            <span className="font-semibold">
              {deliveryCost === 0 ? 'FREE' : `₹${deliveryCost}`}
            </span>
          </div>

          <div className="flex justify-between font-serif text-[19px] font-semibold text-[#00261f] pt-2 border-t border-[#c0c8c4]/30">
            <span>Grand Total:</span>
            <span className="text-[#00261f]">₹{grandTotal.toLocaleString()}</span>
          </div>

          <button
            type="button"
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full mt-2 py-3.5 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0f3d34] transition-all shadow-md active:scale-98 cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  );
};
