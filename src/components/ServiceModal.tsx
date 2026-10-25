import React, { useState } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  initialNotes?: string;
  onSuccess: (msg: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  initialNotes = '',
  onSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(initialNotes);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(`Consultation requested for "${serviceTitle}". Concierge will reply within 2 hours.`);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#00261f]/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-[#faf9f4] max-w-md w-full rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#c8a96a]/40 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-[#efeee9] pb-3">
          <div>
            <span className="text-[10px] font-bold text-[#31685c] uppercase tracking-wider">
              Atelier Salon Consultation
            </span>
            <h3 className="font-serif text-[19px] font-semibold text-[#00261f]">
              {serviceTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#717976] hover:text-[#1b1c19] p-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-[#404846] leading-relaxed">
          Our senior pastry brigade and event concierge will connect with you to review guest scale, dietary accommodations, and tasting schedule.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 mt-1">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Eleanor Vance"
              className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1">
              Phone / WhatsApp
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
              Event Date, Guest Scale &amp; Vision
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. November 14th gala, 45 guests, prefer eggless raspberry & chocolate themes..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-transparent focus:border-[#c8a96a]/40"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0f3d34] transition-all shadow-md cursor-pointer"
          >
            Confirm Consultation Request
          </button>
        </form>
      </div>
    </div>
  );
};
