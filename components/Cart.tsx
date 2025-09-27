
import React from 'react';
import type { CartItem } from '../types';
import { CloseIcon } from './icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (productId: string) => void;
  onCheckout: () => void;
  balance: number;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onRemove, onCheckout, balance }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const canAfford = balance >= subtotal;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={onClose}>
      <div className="bg-white w-full max-w-md h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">G {item.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="p-4 border-t mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-bold">G {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">Your Balance:</span>
            <span className="text-sm">G {balance.toLocaleString()}</span>
          </div>
          {!canAfford && subtotal > 0 && (
            <p className="text-red-600 text-center mb-4 font-semibold">Insufficient funds to complete purchase.</p>
          )}
          <button
            onClick={onCheckout}
            disabled={cartItems.length === 0 || !canAfford}
            className="w-full bg-yellow-500 text-gray-800 font-bold py-3 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-yellow-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
