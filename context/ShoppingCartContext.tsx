"use client";
import ShoppingCart from "@/components/ShoppingCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Products } from "@/typings";
import React, { useState } from "react";
import { useContext, createContext } from "react";

type ShoppingCartContext = {
  getItemQty: (id: string) => number;
  increaseCartQty: (id: string) => void;
  decreaseCartQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  totalAmount: number;
  setAmount: (total: number) => void;
  saveMail: (email: string) => void;
  mail: string;
  setShippingRates: (rates: number) => void;
  rate: number;
};

type CartItem = {
  id: string;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const [totalAmount, setTotalAmount] = useLocalStorage("total-amount", 0);
  const [mail, setMail] = useLocalStorage("amal-mail", "");
  const [rate, setRate] = useState(0);

  const setAmount = (total: number) => {
    setTotalAmount(total);
  };

  const saveMail = (email: string) => {
    setMail(email);
  };

  const setShippingRates = (rate: number) => {
    setRate(rate);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQty(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQty(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQty(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        cartItems,
        cartQuantity,
        totalAmount,
        setAmount,
        saveMail,
        mail,
        rate,
        setShippingRates,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
