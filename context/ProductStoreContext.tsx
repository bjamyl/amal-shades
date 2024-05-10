"use client";
import React, { useState } from "react";
import { useContext, createContext } from "react";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import { Products } from "@/typings";
import product from "@/sanity/schemaTypes/product";

type ProductStoreContext = {
  products: Products[];
  setProducts: 
};

const ProductStoreContext = createContext({} as ProductStoreContext);

export function useProductStore() {
  return useContext(ProductStoreContext);
}

export function ProductStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState([]);


  async function getSingleProduct(slug: string) {
    console.log(slug);
    return products.filter((product)=> product.slug === slug );
  }

  return (
    <ProductStoreContext.Provider value={{
        products,
    }}>
      {children}
    </ProductStoreContext.Provider>
  );
}
