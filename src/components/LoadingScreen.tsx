import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDurationMs = 2400
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  const steps = [
    'Tempering 70% Single-Origin Callebaut cocoa...',
    'Culturing slow-churned European butter...',
    'Infusing whole Bourbon vanilla bean pods...',
    'Polishing mirror glazes & 24k gold leaf...',
    'Welcome to Velvet & Brownies Atelier'
  ];

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 30;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / minDurationMs) * 100));
      setProgress(pct);

      const stepIdx = Math.min(
        steps.length - 1,
        Math.floor((pct / 100) * steps.length)
      );
      setCurrentStepIndex(stepIdx);

      if (elapsed >= minDurationMs) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsRendered(false);
            if (onComplete) onComplete();
          }, 600); // Wait for fade out animation
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDurationMs, onComplete]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#00261f] text-[#faf9f4] transition-all duration-700 ease-in-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0f3d34]/60 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#b99b5e]/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Emblem Frame */}
        <div className="relative mb-6">
          {/* Rotating golden luxury ring */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-[#e3c281]/40 animate-[spin_12s_linear_infinite]" />
          <div className="absolute -inset-1 rounded-full border border-[#c8a96a]/30 shadow-[0_0_25px_rgba(200,169,106,0.25)]" />

          {/* Logo container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#faf9f4] p-1.5 shadow-2xl border-2 border-[#ffdf9f] animate-in zoom-in-90 duration-700">
            <img
              src="/assets/aistudio/Velvet___Brownies_Bakery_Logo_a78587d1.png"
              alt="Velvet & Brownies Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Brand Title */}
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-white drop-shadow-sm">
          Velvet &amp; Brownies
        </h1>

        <p className="text-xs uppercase tracking-[0.25em] text-[#e3c281] font-medium mt-1">
          Haute Artisan Patisserie
        </p>

        {/* Progress Bar */}
        <div className="w-56 sm:w-64 mt-8 flex flex-col gap-2">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#b99b5e] via-[#ffdf9f] to-[#e3c281] rounded-full transition-all duration-75 shadow-[0_0_12px_rgba(227,194,129,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[11px] font-mono text-[#c0c8c4] px-0.5">
            <span>ATELIER STATUS</span>
            <span className="text-[#ffdf9f] font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Rotating Culinary Status */}
        <div className="h-6 mt-3 flex items-center justify-center">
          <p className="text-xs text-[#beecdf] font-light italic transition-opacity duration-300">
            {steps[currentStepIndex]}
          </p>
        </div>

        {/* Motto at Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full">
          <p className="text-[11px] uppercase tracking-widest text-[#717976]">
            Baked slow. Finished beautifully.
          </p>
        </div>
      </div>
    </div>
  );
};
