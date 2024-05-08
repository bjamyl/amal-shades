"use client";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { getSingleProduct } from "@/sanity/sanity.query";
import { Products } from "@/typings";

import ProductSwiper from "@/components/ProductSwiper";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "@/components/Tabs";

type Props = {
  params: {
    slug: string;
  };
};

type ProductProps = {
  initialData: Products;
};

const Product = ({ params }: Props, { initialData }: ProductProps) => {
  const [data, setData] = useState(initialData);

  const slug = params.slug;
  useEffect(() => {
    const fetchData = async () => {
      const product: Products = await getSingleProduct(slug);
      setData(product);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="h-screen border w-screen flex flex-col items-center justify-center z-50">
        <h2 className="text-5xl xl:text-7xl text-center">
          Amal Shades <br />
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <section className="layout__all pt-20">
      <div className=" md:grid md:grid-cols-2 md:gap-x-8">
        <div className="">
          <ProductSwiper product={data} />
        </div>
        <div className="">
          <h1 className="text-lg mt-4 text-slate-600">{data.title}</h1>
          <h4 className="my-2 text-3xl font-semibold">
            {formatCurrency(data.price)}
          </h4>
          <div className="flex mb-5 items-center gap-2">
            <p className="font-bold">Quantity:</p>
            <Button
              variant="outline"
              className="bg-transparent rounded-none border-slate-300"
            >
              -
            </Button>
            <p>1</p>
            <Button
              variant="outline"
              className="bg-transparent rounded-none border-slate-300"
            >
              +
            </Button>
          </div>
          <Button className="rounded-none px-10">Add to cart </Button>
          <div className="mt-6">
            <Tabs product={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
