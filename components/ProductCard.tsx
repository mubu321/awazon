

import React from 'react';
import type { Product } from '../types';
import { StarIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';


interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="w-full h-48 sm:h-56 bg-gray-100 flex items-center justify-center">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 h-14 overflow-hidden">{product.name}</h3>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 flex-grow h-10 overflow-hidden">{product.description}</p>
        <div className="mt-auto">
            <p className="text-2xl font-bold text-gray-800 mb-4">G {product.price.toLocaleString()}</p>
            <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-yellow-500 text-gray-800 font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
            {t('productCard.addToCart')}
            </button>
        </div>
      </div>
    </div>
  );
};
