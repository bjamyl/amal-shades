"use client";
import ShoppingCart from "@/components/ShoppingCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Products } from "@/typings";
import React, { useState } from "react";
import { useContext, createContext } from "react";

type ShoppingCartContext = {
  getItemQty: (id: string) => number;
  increaseCartQty: (id: string, name: string, usage:string, price: number) => void;
  decreaseCartQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  totalAmount: number;
  saveTotalAmount: (total: number) => void;
  saveMail: (email: string) => void;
  mail: string;
  setShippingRates: (rates: number) => void;
  rate: number;
  slug: string;
  storeSlug: (slug: string) => void;
  address: string;
  saveAddress: (address: string) => void;
  region: string;
  saveRegion: (region: string) => void;
  city: string;
  saveCity: (city: string) => void;
  phone: string;
  savePhone: (phone: string) => void;
  customer: string;
  saveCustomer: (customer: string) => void;
  delivery: number;
  saveDelivery: (shipping: number) => void;
};

type CartItem = {
  id: string;
  name: string;
  usage:string;
  quantity: number;
  price: number;
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
  const [slug, setSlug] = useLocalStorage("current-slug", "");
  const [address, setAddress] = useLocalStorage("address", "");
  const [region, setRegion] = useLocalStorage("region", "");
  const [city, setCity] = useLocalStorage("city", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [customer, setCustomer] = useLocalStorage("customer", "");
  const [delivery, setDelivery] = useLocalStorage("shipping", 0);

  const saveCustomer = (customer: string) => {
    setCustomer(customer);
  };

  const saveDelivery = (shipping: number) => {
    setDelivery(shipping);
  };

  const saveAddress = (address: string) => {
    setAddress(address);
  };

  const saveRegion = (region: string) => {
    setRegion(region);
  };

  const saveCity = (city: string) => {
    setCity(city);
  };

  const savePhone = (phone: string) => {
    setPhone(phone);
  };

  const storeSlug = (slug: string) => {
    setSlug(slug);
  };

  const saveTotalAmount = (total: number) => {
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

  function increaseCartQty(id: string, name: string,usage:string, price: number, ) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, name,usage, price, quantity: 1 }];
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
        saveTotalAmount,
        saveMail,
        mail,
        rate,
        setShippingRates,
        slug,
        storeSlug,
        city,
        saveCity,
        address,
        saveAddress,
        phone,
        savePhone,
        region,
        saveRegion,
        customer,
        saveCustomer,
        delivery,
        saveDelivery,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
