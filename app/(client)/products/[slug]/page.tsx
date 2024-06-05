"use client";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { getSingleProduct } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { BeatLoader } from "react-spinners";

import ProductSwiper from "@/components/ProductSwiper";
import React, { useEffect, useState } from "react";
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
        <h2 className="text-5xl xl:text-7xl text-center text-[#008080]">
          Amal Shades <br />
          <BeatLoader size={50} color="#008080" speedMultiplier={0.4} />
        </h2>
      </div>
    );
  }

  // Get context functions
  const { getItemQty, increaseCartQty, decreaseCartQty, removeFromCart } =
    useShoppingCart();
  const quantity = data ? getItemQty(data._id) : 0;

  return (
    <section className="layout__all pt-20">
      <div className=" md:grid md:grid-cols-2 md:gap-x-8">
        <div className="">
          <ProductSwiper product={data} />
        </div>
        <div className="">
          <h1 className="text-lg mt-4 text-slate-600">{data.title}</h1>
          <h4 className="my-2 text-3xl font-semibold text-[#1a4848]">
            {formatCurrency(data.price)}
          </h4>
          {quantity === 0 ? (
            <Button
              onClick={() => increaseCartQty(data._id)}
              className="bg-[#1a4848] rounded-none px-10"
            >
              Select lenses
            </Button>
          ) : (
            <div>
              {/* <div className="flex mb-5 items-center gap-2">
                <p className="font-bold text-[#1a4848]">Quantity:</p>
                <Button
                  onClick={() => decreaseCartQty(data._id)}
                  variant="outline"
                  className="bg-transparent rounded-none border-slate-300"
                >
                  -
                </Button>
                <p className="text-[#1a4848]">{quantity}</p>
                <Button
                  onClick={() => increaseCartQty(data._id)}
                  variant="outline"
                  className="bg-transparent rounded-none border-slate-300"
                >
                  +
                </Button>
              </div> */}
              <Button
                onClick={() => removeFromCart(data._id)}
                className="rounded-none bg-[#1a4848] px-10"
              >
                Remove from cart
              </Button>
            </div>
          )}

          <div className="mt-6">
            <Tabs product={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
