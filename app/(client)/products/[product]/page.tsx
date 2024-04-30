import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getSingleProduct } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  params: {
    product: string;
  };
};

const Product = async ({ params }: Props) => {
  const slug = params.product;
  const product: Products = await getSingleProduct(slug);

  return (
    <section className="xl:flex justify-center py-16 pt-72 xl:mt-8 md:h-screen">
      <div className="mx-4 xl:w-[1290px]">
        <div className="grid gap-4 lg:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2">
          <div>
            {/* <Image
              src={urlForImage(product.mainImage)}
              width={50}
              height={50}
              layout="responsive"
              alt="image"
              objectFit="contain"
              className="rounded-xl xl:w-[80%] bg-slate-200"
            /> */}
          </div>
          <div className="space-y-2">
            <h2 className="text-gray-700 text-lg xl:text-xl">
              {product.title}
            </h2>
            <p className="font-bold text-2xl xl:text-4xl">{product.price}</p>
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>Nice Product</p>
            <div className="flex items-center gap-2 py-2">
              <h3 className="font-bold">Quantity:</h3>
              <div className="flex items-center">
                <button className="border px-4 py-1">-</button>
                <p className="px-4">{}</p>
                <button className="border px-4 py-1">+</button>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <button className="bg-blue-500 px-6 py-1 text-white xl:text-lg">
                Add to Cart
              </button>
              <Button className="border px-6 py-1 text-blue-500 xl:text-lg">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
