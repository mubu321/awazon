import React from 'react';
import { SearchIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../lib/translations';


interface HeaderProps {
  balance: number;
}

export const Header: React.FC<HeaderProps> = ({ balance }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <header className="bg-gray-800 text-white p-2 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white px-2">
          awazon
          <span className="text-yellow-400 text-xs font-normal align-top">.ai</span>
        </h1>
      </div>

      <div className="flex-grow mx-4 hidden sm:flex">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('header.searchPlaceholder')}
            className="w-full p-2 rounded-l-md text-black focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-r-md absolute right-0 top-0 h-full">
            <SearchIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 pr-4">
        <div className="relative">
            <select 
                value={language} 
                onChange={handleLanguageChange}
                className="bg-gray-700 text-white rounded-md py-1 pl-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                aria-label={t('language')}
            >
                <option value="en">English</option>
                <option value="ja">日本語</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <div className="text-right">
          <div className="text-xs">{t('header.balance')}</div>
          <div className="font-bold text-sm">G {balance.toLocaleString()}</div>
        </div>
      </div>
    </header>
  );
};
