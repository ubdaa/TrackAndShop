import React, { createContext, useState, ReactNode } from 'react';

export interface Article {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  ratings: number;
}

export interface CartItem {
  article: Article;
  quantity: number;
}

interface ShopContextType {
  articles: Article[];
  cart: CartItem[];
  setArticles: (data: Article[]) => void;
  addToCart: (article: Article, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (article: Article, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.article.id === article.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.article.id === article.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { article, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.article.id !== id));
  };

  const updateCartItem = (id: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.article.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const value: ShopContextType = {
    articles,
    cart,
    setArticles,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
