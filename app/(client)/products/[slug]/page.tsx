"use client";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { getSingleProduct } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import ProductSwiper from "@/components/ProductSwiper";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  // Get context functions
  const {
    getItemQty,
    increaseCartQty,
    decreaseCartQty,
    removeFromCart,
    storeSlug,
  } = useShoppingCart();
  const quantity = data ? getItemQty(data._id) : 0;

  const slug = params.slug;
  useEffect(() => {
    const fetchData = async () => {
      const product: Products = await getSingleProduct(slug);
      setData(product);
      storeSlug(slug);
    };

    fetchData();
  }, []);

  const stockDisplay = () => {
    if (data.stock === 0) {
      return <p className="text-red-700 font-medium">Item is sold out</p>;
    } else if (data.stock < 4) {
      return (
        <p className="text-red-700 font-medium">
          Item is low in stock. <br /> {data.stock} units remaining
        </p>
      );
    } else {
      return null;
    }
  };

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

  return (
    <>
      <Navbar />
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
              data.stock < 1 ? (
                <Button disabled className="bg-[#1a4848] rounded-none px-10">
                  Select lenses
                </Button>
              ) : (
                <Link href={`/products/${slug}/usage`}>
                  <Button className="bg-[#1a4848] rounded-none px-10">
                    Select lenses
                  </Button>
                </Link>
              )
            ) : (
              <div>
                <Button
                  onClick={() => removeFromCart(data._id)}
                  className="rounded-none bg-[#1a4848] px-10"
                >
                  Remove from cart
                </Button>
              </div>
            )}
            <div>{stockDisplay()}</div>

            <div className="mt-6">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="account">Description</TabsTrigger>
                  <TabsTrigger value="password">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="account">{data.description}</TabsContent>
                <TabsContent value="password">
                  <div className="flex gap-x-6">
                    <ul className="font-bold space-y-3 text-[#008080]">
                      <li>Size:</li>
                      <li>Color:</li>
                      <li>Shape:</li>
                      <li>Rim:</li>
                    </ul>
                    <ul className="space-y-3 capitalize">
                      <li>{data.size[0]}</li>
                      <li>{data.color}</li>
                      <li>{data.shape}</li>
                      <li>{data.rim}</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
