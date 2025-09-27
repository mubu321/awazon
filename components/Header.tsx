import React from 'react';
import { SearchIcon } from './icons';

interface HeaderProps {
  balance: number;
}

export const Header: React.FC<HeaderProps> = ({ balance }) => {
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
            placeholder="Search Awazon.ai"
            className="w-full p-2 rounded-l-md text-black focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-r-md absolute right-0 top-0 h-full">
            <SearchIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 pr-4">
        <div className="text-right">
          <div className="text-xs">Balance</div>
          <div className="font-bold text-sm">G {balance.toLocaleString()}</div>
        </div>
      </div>
    </header>
  );
};