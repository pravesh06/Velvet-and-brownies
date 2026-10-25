import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  grandTotal: number;
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  grandTotal,
  onOrderSuccess
}) => {
  const [recipient, setRecipient] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSlot, setTimeSlot] = useState('02:00 PM - 05:00 PM');
  const [paymentMethod, setPaymentMethod] = useState('UPI / Instant NetBanking');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `VB-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderId(id);
    setOrderConfirmed(true);
    onOrderSuccess(id);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#00261f]/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-[#faf9f4] max-w-lg w-full rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#c8a96a]/40 flex flex-col gap-5">
        {orderConfirmed ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#b2ebdc] text-[#356c60] flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#b99b5e] uppercase tracking-widest">
                Order Confirmed · {confirmedOrderId}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#00261f] mt-1">
                Dispatched to the Pastry Brigade
              </h3>
              <p className="text-xs sm:text-sm text-[#404846] mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, {recipient || 'valued patron'}. Your order is being freshly boxed in our chilled transit casket for delivery to {address || 'your address'} during {timeSlot}.
              </p>
            </div>

            <div className="w-full bg-[#f5f4ef] p-4 rounded-2xl border border-[#efeee9] text-left text-xs text-[#404846] space-y-1.5 my-2">
              <div className="flex justify-between">
                <span>Items Ordered:</span>
                <strong className="text-[#00261f]">{items.length} confections</strong>
              </div>
              <div className="flex justify-between">
                <span>Total Settled:</span>
                <strong className="text-[#00261f]">₹{grandTotal.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <strong className="text-[#00261f]">{paymentMethod}</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3.5 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0f3d34] transition-all cursor-pointer shadow-md"
            >
              Return to Patisserie Atelier
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-[#efeee9] pb-3">
              <div>
                <h3 className="font-serif text-[20px] font-semibold text-[#00261f]">
                  Complete Reservation
                </h3>
                <p className="text-xs text-[#717976]">
                  Total: ₹{grandTotal.toLocaleString()} (incl. chilled courier)
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[#717976] hover:text-[#1b1c19] p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Eleanor Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
                    Contact Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40 cursor-pointer"
                  >
                    <option>10:00 AM - 01:00 PM (Morning Batch)</option>
                    <option>02:00 PM - 05:00 PM (Afternoon Dispatch)</option>
                    <option>06:00 PM - 09:00 PM (Evening Salon Chilled)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
                  Delivery Destination Address
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Suite 401, West End Avenue, Metropolis NY"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40 cursor-pointer"
                >
                  <option>UPI / Instant NetBanking</option>
                  <option>Luxury Credit Card (Visa / Amex Concierge)</option>
                  <option>Cash upon White-Glove Hand-delivery</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-3 w-full py-3.5 rounded-full bg-[#31685c] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#00261f] transition-all shadow-md cursor-pointer"
              >
                Authorize &amp; Dispatch Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
