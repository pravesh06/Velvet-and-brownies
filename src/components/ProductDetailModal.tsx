import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setQty(1);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#00261f]/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#faf9f4] max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#c8a96a]/40 flex flex-col md:flex-row gap-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left / Top: Product Media */}
        <div className="md:w-1/2 relative bg-[#efeee9] aspect-square md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#00261f] uppercase tracking-wider shadow-xs">
            {product.dietary}
          </span>
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#00261f]/85 text-[#ffdf9f] text-xs font-semibold flex items-center gap-1 shadow-xs">
            <span className="material-symbols-outlined text-[14px]">star</span>
            {product.rating.toFixed(1)} / 5.0
          </div>
        </div>

        {/* Right / Content */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#efeee9]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#717976]">
                {product.weight} · {product.cat.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-[#717976] hover:text-[#1b1c19] p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h3 className="font-serif text-[22px] font-semibold text-[#00261f] mt-2">
              {product.name}
            </h3>

            <p className="text-xs sm:text-[13px] text-[#404846] mt-2 leading-relaxed">
              {product.desc}
            </p>

            {/* Ingredients list */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-3.5 pt-3 border-t border-[#efeee9]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#717976] block mb-1.5">
                  Artisanal Ingredients
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-[#efeee9] text-[11px] text-[#404846]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens & Storage */}
            <div className="mt-3 text-[11px] text-[#717976] space-y-1">
              {product.allergens && (
                <p>
                  <strong className="text-[#404846]">Allergens:</strong> {product.allergens}
                </p>
              )}
              {product.storage && (
                <p>
                  <strong className="text-[#404846]">Storage:</strong> {product.storage}
                </p>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-[#efeee9] flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-[#717976] uppercase tracking-wider block">
                Price
              </span>
              <p className="font-serif text-[22px] font-bold text-[#00261f]">
                ₹{(product.price * qty).toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#efeee9] rounded-full p-0.5">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-7 h-7 rounded-full bg-white text-[#00261f] flex items-center justify-center font-bold text-xs hover:bg-[#e9e8e3] cursor-pointer"
                >
                  -
                </button>
                <span className="text-xs font-bold text-[#00261f] px-2.5">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="w-7 h-7 rounded-full bg-[#00261f] text-white flex items-center justify-center font-bold text-xs hover:bg-[#0f3d34] cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="px-4 py-2.5 rounded-full bg-[#00261f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#31685c] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Add to Casket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
