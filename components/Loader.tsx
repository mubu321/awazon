
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Loader: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-50 text-white">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-400"></div>
      <h2 className="text-2xl font-bold mt-8">{t('loader.thinking')}</h2>
      <p className="mt-2 text-center max-w-sm">{t('loader.generating')}</p>
    </div>
  );
};
