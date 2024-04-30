import { getProducts } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import React from "react";
import Latest from "./Latest";

const LatestAccessories = async () => {
  const products: Products[] = await getProducts();

  return (
    <div>
      <Latest
        products={products}
        title="Best Accessories"
        description="Our collection has the best and most sought after glasses care materials and accessories"
      />
    </div>
  );
};

export default LatestAccessories;
