import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/patisserieData';
import { Product, ProductCategory } from '../types';

interface MenuCatalogProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  externalFilter?: string;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  onAddToCart,
  onSelectProduct,
  externalFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState(externalFilter || '');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');

  // Sync external search if passed from occasion buttons
  React.useEffect(() => {
    if (externalFilter !== undefined) {
      setSearchQuery(externalFilter);
    }
  }, [externalFilter]);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'cakes', label: 'Signature Cakes' },
    { id: 'brownies', label: 'Brownies' },
    { id: 'pastries', label: 'Pastries' },
    { id: 'cupcakes', label: 'Cupcakes' },
    { id: 'eggless', label: 'Eggless & Vegan' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat =
        activeCategory === 'all'
          ? true
          : activeCategory === 'eggless'
          ? item.dietary === 'Eggless' || item.dietary === 'Vegan' || item.cat === 'eggless'
          : item.cat === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.dietary.toLowerCase().includes(q) ||
        item.ingredients?.some((ing) => ing.toLowerCase().includes(q));

      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.id - a.id;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="menu" className="w-full py-16 sm:py-24 bg-[#faf9f4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b99b5e]">
              Freshly Curated Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#00261f] mt-1">
              The Daily Patisserie Menu
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#717976] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search truffle, red velvet, biscoff..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#efeee9] text-sm text-[#1b1c19] placeholder:text-[#717976] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 transition-all border border-transparent focus:border-[#c8a96a]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-[#717976] hover:text-[#1b1c19]"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2.5 rounded-full bg-[#efeee9] text-sm text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#00261f]/20 cursor-pointer border border-transparent focus:border-[#c8a96a]/40"
            >
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as ProductCategory)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#00261f] text-white shadow-sm'
                    : 'bg-[#efeee9] text-[#404846] hover:text-[#00261f] hover:bg-[#e9e8e3]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center flex flex-col items-center justify-center bg-[#efeee9]/40 rounded-3xl p-8 border border-dashed border-[#c0c8c4]">
            <span className="material-symbols-outlined text-4xl text-[#717976] mb-2">bakery_dining</span>
            <p className="font-serif text-xl text-[#00261f]">No confections match your filter</p>
            <p className="text-sm text-[#717976] mt-1 max-w-md">
              Try adjusting your query or reset filters to browse the full morning atelier batch.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#c8a96a]/25 hover:shadow-[0_12px_32px_-4px_rgba(15,61,52,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onSelectProduct(p)}
                    className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#efeee9] mb-4 cursor-pointer"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />

                    {/* Dietary badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#00261f] dark:bg-[#091512]/95 dark:text-[#ffdf9f] dark:border dark:border-[#c8a96a]/50 backdrop-blur-xs text-[11px] uppercase font-bold tracking-wider shadow-sm">
                      {p.dietary}
                    </span>

                    {/* Rating badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#00261f]/85 backdrop-blur-xs text-[#ffdf9f] text-[11px] font-semibold flex items-center gap-1 shadow-xs">
                      <span className="material-symbols-outlined text-[13px] text-[#ffdf9f]">
                        star
                      </span>
                      {p.rating.toFixed(1)}
                    </div>
                  </div>

                  {/* Metadata */}
                  <span className="text-[11px] font-medium text-[#717976] uppercase tracking-wider">
                    {p.weight}
                  </span>
                  <h3
                    onClick={() => onSelectProduct(p)}
                    className="font-serif text-[19px] font-semibold text-[#00261f] mt-0.5 line-clamp-1 hover:text-[#31685c] cursor-pointer transition-colors"
                  >
                    {p.name}
                  </h3>
                  <p className="text-[13px] text-[#404846] mt-1.5 line-clamp-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Footer / Price & Add */}
                <div className="mt-5 pt-3 border-t border-[#efeee9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#717976] uppercase tracking-wider block">
                      Artisan Price
                    </span>
                    <p className="font-serif text-[21px] font-semibold text-[#00261f] text-[#c8a96a]">
                      ₹{p.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAddToCart(p)}
                    className="px-4 py-2 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#31685c] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
