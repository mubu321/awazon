import React from 'react';
import type { Product } from '../types';
import { StarIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductViewProps {
  product: Product;
  onBuy: () => void;
  onSkip: () => void;
}

export const ProductView: React.FC<ProductViewProps> = ({ product, onBuy, onSkip }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl mx-auto animate-fade-in">
      <div className="md:flex">
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-3 text-sm sm:text-base text-gray-600">{product.reviewCount.toLocaleString()} {t('productView.ratings')}</span>
            </div>
            <p className="text-gray-700 mb-6 text-base sm:text-lg">{product.description}</p>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">G {product.price.toLocaleString()}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            <button
              onClick={onBuy}
              className="w-full bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              {t('productView.buyNow')}
            </button>
            <button
              onClick={onSkip}
              className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-300"
            >
              {t('productView.skip')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
