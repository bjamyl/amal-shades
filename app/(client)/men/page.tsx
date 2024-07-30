"use client"
import ItemCard from "@/components/ItemCard";
import { getMenProds } from "@/sanity/sanity.query";
import { Products as Product } from "@/typings";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Men =  () => {
  const [prods, setProds] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const products: Product[] = await getMenProds();
      setProds(products);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="relative">
        <Image
          src="/hero/men.jpg"
          alt="all-products"
          width={1280}
          height={720}
          className="brightness-50 w-screen xl:h-[85vh] md:object-md-center object-cover h-[75vh]"
        />
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
          <h2 className="text-white font-bold text-2xl xl:text-6xl">
            Men's Products
          </h2>
          <p className="text-white mr-6 lg:mr-0">Shop from our catalog of items selected for gents</p>
        </div>
      </div>
      <section className="my-16 layout__all">
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3 md:gap-y-3 xl:grid-cols-4">
          {prods.map((item: Product) => (
            <ItemCard product={item} key={item._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Men;
