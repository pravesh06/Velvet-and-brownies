import React, { useState } from 'react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    purpose: 'Custom Celebration Cake',
    date: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast('Thank you. Atelier concierge will reply before sundown.');
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        purpose: 'Custom Celebration Cake',
        date: '',
        notes: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-[#faf9f4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Boutique Information */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
            Boutique Correspondences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f]">
            Plan Your Visit or Inquiry
          </h2>
          <p className="text-sm sm:text-base text-[#404846] leading-relaxed">
            Whether you require consultation for a 5-tier wedding display or wish to reserve our private tasting table for your celebration brigade.
          </p>

          <div className="flex flex-col gap-5 pt-4">
            <div className="flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#31685c] mt-0.5 text-[22px]">
                pin_drop
              </span>
              <div>
                <p className="text-sm font-bold text-[#00261f]">Heritage Quarter Flagship</p>
                <p className="text-xs sm:text-[13px] text-[#404846] mt-0.5">
                  Place de l'Atelier 18, Suite 4, Metropolis NY 10012
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#31685c] mt-0.5 text-[22px]">
                schedule
              </span>
              <div>
                <p className="text-sm font-bold text-[#00261f]">Salon Tasting Hours</p>
                <p className="text-xs sm:text-[13px] text-[#404846] mt-0.5 leading-relaxed">
                  Tuesday – Saturday: 08:00 – 19:30 <br />
                  Sunday Tasting: 09:00 – 16:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#31685c] mt-0.5 text-[22px]">
                call
              </span>
              <div>
                <p className="text-sm font-bold text-[#00261f]">Concierge Line</p>
                <p className="text-xs sm:text-[13px] text-[#404846] mt-0.5">
                  +1 (212) 555-CAKE (Toll Free Concierge)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-[#f5f4ef] p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#c0c8c4]/30 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#b2ebdc] text-[#356c60] flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#00261f]">
                Atelier Request Dispatched
              </h3>
              <p className="text-sm text-[#404846] max-w-md">
                Our chef brigade and maître d' have received your event notes. Expect personal correspondence within two hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Eleanor Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-[#c0c8c4]/30 focus:border-[#c8a96a]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="eleanor@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-[#c0c8c4]/30 focus:border-[#c8a96a]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                    Inquiry Purpose
                  </label>
                  <select
                    value={form.purpose}
                    onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-[#c0c8c4]/30 focus:border-[#c8a96a]/50 cursor-pointer"
                  >
                    <option>Custom Celebration Cake</option>
                    <option>Grand Wedding Tasting</option>
                    <option>Corporate Gifting Program</option>
                    <option>Private Masterclass Booking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                    Event Date (if known)
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-[#c0c8c4]/30 focus:border-[#c8a96a]/50 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404846] mb-1.5">
                  Confectionary Notes &amp; Guest Count
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Tell us about your flavor preferences, dietary requirements, and delivery arrangements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 border border-[#c0c8c4]/30 focus:border-[#c8a96a]/50"
                />
              </div>

              <button
                type="submit"
                className="self-start px-8 py-3.5 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0f3d34] transition-all shadow-md cursor-pointer active:scale-95"
              >
                Send Atelier Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
