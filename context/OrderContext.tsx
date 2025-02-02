import { Order } from '@/constants/Order';
import React, { createContext, useState, ReactNode } from 'react';

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (orderId: string) => void;
  clearOrders: () => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  const removeOrder = (orderId: string) => {
    setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
  };

  const clearOrders = () => {
    setOrders([]);
  };

  const value: OrderContextType = {
    orders,
    addOrder,
    removeOrder,
    clearOrders,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};