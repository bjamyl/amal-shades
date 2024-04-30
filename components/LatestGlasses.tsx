import React from "react";
import Latest from "./Latest";
import { Products } from "@/typings";
import { getProducts } from "@/sanity/sanity.query";

const LatestGlasses = async () => {
  const products: Products[] = await getProducts();

  return (
    <div>
      <Latest
        products={products}
        title="Newest arrivals"
        description="Our latest collection where classic and comtemporary styles converge
            in perfect harmony."
      />
    </div>
  );
};

export default LatestGlasses;
