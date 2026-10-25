import React from 'react';

export interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  duration?: number;
  gap?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className = '',
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  duration = 35,
  gap = '1.25rem'
}) => {
  return (
    <div
      style={
        {
          '--duration': `${duration}s`,
          '--gap': gap
        } as React.CSSProperties
      }
      className={`group relative flex overflow-hidden [gap:var(--gap)] ${
        vertical ? 'flex-col' : 'flex-row'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export interface MarqueeContentProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
}

export const MarqueeContent: React.FC<MarqueeContentProps> = ({
  children,
  className = '',
  reverse = false,
  pauseOnHover = true,
  repeat = 3
}) => {
  return (
    <div className="flex shrink-0 items-center [gap:var(--gap)]">
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 items-center justify-around [gap:var(--gap)] ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''} ${className}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export interface MarqueeItemProps {
  children: React.ReactNode;
  className?: string;
}

export const MarqueeItem: React.FC<MarqueeItemProps> = ({
  children,
  className = ''
}) => {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
};

export interface MarqueeFadeProps {
  side: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export const MarqueeFade: React.FC<MarqueeFadeProps> = ({
  side,
  className = ''
}) => {
  const sideClasses = {
    left: 'left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-[#f5f4ef] via-[#f5f4ef]/80 to-transparent',
    right: 'right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-[#f5f4ef] via-[#f5f4ef]/80 to-transparent',
    top: 'top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-[#f5f4ef] to-transparent',
    bottom: 'bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#f5f4ef] to-transparent'
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 ${sideClasses[side]} ${className}`}
    />
  );
};
