
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-50 text-white">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-400"></div>
      <h2 className="text-2xl font-bold mt-8">Awazon.ai is thinking...</h2>
      <p className="mt-2">Generating unique, never-before-seen products just for you!</p>
    </div>
  );
};
