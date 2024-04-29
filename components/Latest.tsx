import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Products } from "@/typings";
import ItemCard from "./ItemCard";

const query = groq`
*[_type == "product"]`;

const Latest = async () => {
  const products: Products[] = await client.fetch(query);
  return (
    <section className="my-10 layout__all">
      <h2 className="text-5xl md:text-center">NEW COLLECTION</h2>
      <p className="mt-3 md:text-center">
        Our latest collection where classic and comtemporary styles converge in
        perfect harmony.
      </p>
      <div className="mt-5 grid gap-x-4 grid-cols-2 md:grid-cols-3 md:gap-y-3 xl:grid-cols-4">
        {products.map((item: Products) => (
          <ItemCard product={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
