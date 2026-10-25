import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-6 z-50 bg-[#00261f] text-white px-5 py-3 rounded-full shadow-2xl text-xs font-semibold flex items-center gap-2.5 border border-[#c8a96a]/40 animate-in slide-in-from-bottom-5 duration-300"
    >
      <span className="material-symbols-outlined text-[18px] text-[#ffdf9f]">
        verified
      </span>
      <span>{message}</span>
    </div>
  );
};
