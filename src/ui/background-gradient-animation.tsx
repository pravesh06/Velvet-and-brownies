import React, { useEffect, useRef, useState } from 'react';

export interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export const BackgroundGradientAnimation: React.FC<BackgroundGradientAnimationProps> = ({
  gradientBackgroundStart = 'rgb(0, 38, 31)',
  gradientBackgroundEnd = 'rgb(15, 61, 52)',
  firstColor = '49, 104, 92', // Emerald
  secondColor = '185, 155, 94', // Warm Gold
  thirdColor = '15, 61, 52', // Deep Emerald
  fourthColor = '200, 169, 106', // Gilded Bronze
  fifthColor = '71, 51, 0', // Cocoa Amber
  pointerColor = '178, 235, 220', // Mint Glow
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className = '',
  interactive = true,
  containerClassName = ''
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--gradient-background-start', gradientBackgroundStart);
    el.style.setProperty('--gradient-background-end', gradientBackgroundEnd);
    el.style.setProperty('--first-color', firstColor);
    el.style.setProperty('--second-color', secondColor);
    el.style.setProperty('--third-color', thirdColor);
    el.style.setProperty('--fourth-color', fourthColor);
    el.style.setProperty('--fifth-color', fifthColor);
    el.style.setProperty('--pointer-color', pointerColor);
    el.style.setProperty('--size', size);
    el.style.setProperty('--blending-value', blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue
  ]);

  useEffect(() => {
    let animId: number;
    const move = () => {
      if (!interactiveRef.current) return;
      setCurX((prev) => prev + (tgX - prev) / 15);
      setCurY((prev) => prev + (tgY - prev) / 15);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      animId = requestAnimationFrame(move);
    };
    animId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animId);
  }, [curX, curY, tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full h-full overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ${containerClassName}`}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Background Animated Gradient Blobs */}
      <div
        className={`gradients-container absolute inset-0 w-full h-full pointer-events-none ${
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
        }`}
      >
        <div
          className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.85)_0,_rgba(var(--first-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-90"
        />
        <div
          className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-85"
        />
        <div
          className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.85)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-90"
        />
        <div
          className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.75)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-75"
        />
        <div
          className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-85"
        />

        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.6)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-65 pointer-events-none"
          />
        )}
      </div>

      {/* Children Foreground Content */}
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};
