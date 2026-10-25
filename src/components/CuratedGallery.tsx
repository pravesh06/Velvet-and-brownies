import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, LIGHTBOX_DEFAULT_IMAGE } from '../data/patisserieData';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem
} from './kibo-ui/marquee';

export const CuratedGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'cakes' | 'brownies' | 'dessert-tables'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.cat === activeTab);

  // Divide items into two streams for rich double-marquee presentation
  const firstRow = filteredItems.slice(0, Math.ceil(filteredItems.length / 2));
  const secondRow = filteredItems.slice(Math.ceil(filteredItems.length / 2));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="w-full py-16 sm:py-24 bg-[#f5f4ef] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
              Atelier Visual Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
              Curated Works of Pâtisserie
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 bg-white rounded-full border border-[#c0c8c4]/40 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('marquee')}
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'marquee'
                    ? 'bg-[#00261f] text-white shadow-xs'
                    : 'text-[#404846] hover:text-[#00261f]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">view_carousel</span>
                Flow
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-[#00261f] text-white shadow-xs'
                    : 'text-[#404846] hover:text-[#00261f]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
                Grid
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'all', label: 'All' },
                { id: 'cakes', label: 'Cakes' },
                { id: 'brownies', label: 'Brownies' },
                { id: 'dessert-tables', label: 'Tables' }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#00261f] text-white shadow-xs'
                        : 'bg-white text-[#404846] hover:text-[#00261f] border border-[#c0c8c4]/30'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE PRESENTATION MODE */}
      {viewMode === 'marquee' ? (
        <div className="w-full mt-8 flex flex-col gap-6 relative">
          {/* Row 1: Leftward Flow */}
          <div className="relative w-full">
            <Marquee duration={38} pauseOnHover={true}>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
              <MarqueeContent repeat={3}>
                {(firstRow.length > 0 ? firstRow : filteredItems).map((item, idx) => (
                  <MarqueeItem key={`row1-${item.id}-${idx}`} className="w-64 sm:w-72 h-80 sm:h-88">
                    <div
                      onClick={() => openLightbox(filteredItems.indexOf(item))}
                      className="group cursor-pointer w-full h-full relative rounded-2xl overflow-hidden bg-[#efeee9] shadow-sm hover:shadow-xl border border-[#c8a96a]/30 transition-all duration-300"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = LIGHTBOX_DEFAULT_IMAGE;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00261f]/90 via-[#00261f]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffdf9f]">
                          {item.cat.replace('-', ' ')}
                        </span>
                        <h4 className="font-serif text-[17px] sm:text-[19px] font-semibold mt-1 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#c0c8c4] mt-1 line-clamp-1 font-light">
                          {item.details}
                        </p>
                        <span className="text-[11px] text-[#ffdf9f] mt-2 inline-flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-[15px]">zoom_in</span>
                          Inspect creation
                        </span>
                      </div>
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>

          {/* Row 2: Rightward Reverse Flow */}
          <div className="relative w-full">
            <Marquee duration={42} reverse={true} pauseOnHover={true}>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
              <MarqueeContent repeat={3} reverse={true}>
                {(secondRow.length > 0 ? secondRow : filteredItems).map((item, idx) => (
                  <MarqueeItem key={`row2-${item.id}-${idx}`} className="w-64 sm:w-72 h-80 sm:h-88">
                    <div
                      onClick={() => openLightbox(filteredItems.indexOf(item))}
                      className="group cursor-pointer w-full h-full relative rounded-2xl overflow-hidden bg-[#efeee9] shadow-sm hover:shadow-xl border border-[#c8a96a]/30 transition-all duration-300"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = LIGHTBOX_DEFAULT_IMAGE;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00261f]/90 via-[#00261f]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffdf9f]">
                          {item.cat.replace('-', ' ')}
                        </span>
                        <h4 className="font-serif text-[17px] sm:text-[19px] font-semibold mt-1 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#c0c8c4] mt-1 line-clamp-1 font-light">
                          {item.details}
                        </p>
                        <span className="text-[11px] text-[#ffdf9f] mt-2 inline-flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-[15px]">zoom_in</span>
                          Inspect creation
                        </span>
                      </div>
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>
        </div>
      ) : (
        /* GRID PRESENTATION MODE */
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-[#efeee9] shadow-xs border border-[#c0c8c4]/30"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = LIGHTBOX_DEFAULT_IMAGE;
                  }}
                />
                <div className="absolute inset-0 bg-[#00261f]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#ffdf9f]">
                    {item.cat.replace('-', ' ')}
                  </span>
                  <p className="font-serif text-sm sm:text-base font-semibold mt-0.5 line-clamp-2">
                    {item.title}
                  </p>
                  <span className="text-[11px] text-[#efeee9]/80 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                    View high-res
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#00261f]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-[#ffdf9f] p-2 rounded-full focus:outline-none cursor-pointer z-10"
            title="Close Lightbox (Esc)"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 sm:left-6 text-white/80 hover:text-[#ffdf9f] p-2 rounded-full focus:outline-none cursor-pointer z-10 hover:bg-white/10"
            title="Previous (Arrow Left)"
          >
            <span className="material-symbols-outlined text-[40px]">chevron_left</span>
          </button>

          {/* Content container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = LIGHTBOX_DEFAULT_IMAGE;
                }}
              />
            </div>
            <div className="text-center text-white max-w-xl px-4">
              <span className="text-xs uppercase tracking-widest text-[#ffdf9f] block mb-1">
                {lightboxIndex + 1} of {filteredItems.length} ·{' '}
                {filteredItems[lightboxIndex].cat.toUpperCase()}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#c0c8c4] mt-1.5 font-light">
                {filteredItems[lightboxIndex].details}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 sm:right-6 text-white/80 hover:text-[#ffdf9f] p-2 rounded-full focus:outline-none cursor-pointer z-10 hover:bg-white/10"
            title="Next (Arrow Right)"
          >
            <span className="material-symbols-outlined text-[40px]">chevron_right</span>
          </button>
        </div>
      )}
    </section>
  );
};
