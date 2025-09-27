export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export interface GeneratedProductData {
    name: string;
    description: string;
    price: number;
}

// FIX: Exported CartItem interface to resolve import error in components/Cart.tsx
export interface CartItem extends Product {
  quantity: number;
}
