"use client"
import {useEffect,  useState} from "react";
import Latest from "./Latest";
import { Products as Product } from "@/typings";
import { getProducts } from "@/sanity/sanity.query";

const LatestGlasses =  () => {
  const [prods, setProds]= useState<Product[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const products: Product[] = await getProducts();
      setProds(products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Latest
        products={prods}
        title="Newest arrivals"
        description="Our latest collection where classic and comtemporary styles converge
            in perfect harmony."
      />
    </div>
  );
};

export default LatestGlasses;
