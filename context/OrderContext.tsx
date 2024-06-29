"use client";
import React, { createContext, useContext, useState } from "react";

// Define interfaces
interface OrderItem {
  itemName: string;
  price: number;
  quantity: number;
}

interface OrderRequestProps {
  _type: "order";
  items: OrderItem[];
  total: number;
  shipping: number;
  customer: string;
  email: string;
  address: string;
  region: string;
  city: string;
  phone: string;
}

// Define context type
interface OrderContextType {
  order: OrderRequestProps;
  setOrder: React.Dispatch<React.SetStateAction<OrderRequestProps>>;
}

// Create context
const OrderContext = createContext<OrderContextType>({
  order: {
    _type: "order",
    items: [],
    total: 0,
    shipping: 0,
    customer: "",
    email: "",
    address: "",
    region: "",
    city: "",
    phone: "",
  },
  setOrder: () => {},
});

// Custom hook to use context
export const useOrder = () => useContext(OrderContext);

// Provider component
export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrder] = useState<OrderRequestProps>({
    _type: "order",
    items: [],
    total: 0,
    shipping: 0,
    customer: "",
    email: "",
    address: "",
    region: "",
    city: "",
    phone: "",
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
