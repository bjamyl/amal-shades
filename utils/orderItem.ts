"use client";
import { getProducts } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState, useEffect } from "react";

type CartItemProps = {
  id: string;
  quantity: number;
};

type ProductProps = {
  initialProducts: Products[];
};

export default function orderItem(
  { id, quantity }: CartItemProps,
  { initialProducts }: ProductProps
) {
  const [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    const fetchData = async () => {
      const products: Products[] = await getProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

  const item = products ? products.find((i) => i._id === id) : null;

  if (item == null) return null;

  const finalOrder = {
    itemName: item.title,
    quantity,
    price: item.price,
    stock: item.stock,
  };

  return finalOrder;
}
