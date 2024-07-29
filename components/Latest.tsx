import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Products } from "@/typings";
import ItemCard from "./ItemCard";
import { Button } from "./ui/button";

type LatestProps = {
  title: string;
  description: string;
  products: Products[]
};

const Latest = ({ title, description, products }: LatestProps) => {
  let prods = products.slice(0, 4);
  return (
    <section className="my-16 layout__all">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-start">
        <div>
          <h2 className="text-[#1a4848] text-3xl md:text-5xl font-bold">{title}</h2>
          <p className="mt-3 text-slate-600">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3 md:gap-y-3 xl:grid-cols-4">
        {prods.map((item: Products) => (
          <ItemCard product={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
