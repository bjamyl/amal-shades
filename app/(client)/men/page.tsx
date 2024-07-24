import ItemCard from "@/components/ItemCard";
import { getProducts } from "@/sanity/sanity.query";
import { Products as Product } from "@/typings";
import Image from "next/image";
import React from "react";

const Men = async () => {
  const products: Product[] = await getProducts();
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/menprods.jpg"
          alt="all-products"
          width={1280}
          height={720}
          className="brightness-50 w-screen xl:h-[60vh] object-cover"
        />
        <div className="absolute bottom-10 left-10">
          <h2 className="text-white font-bold text-2xl xl:text-6xl">
            Men's Products
          </h2>
          <p className="text-white">Shop from our catalog of items selected for gents</p>
        </div>
      </div>
      <section className="my-16 layout__all">
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3 md:gap-y-3 xl:grid-cols-4">
          {products.map((item: Product) => (
            <ItemCard product={item} key={item._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Men;
