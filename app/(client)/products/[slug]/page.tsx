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
    slug: string;
  };
};

const Product = async ({ params }: Props) => {
  const slug = params.slug;
  const product: Products = await getSingleProduct(slug);

  return (
    <section className="layout__all pt-20">
      <div className="w-full h-64 overflow-hidden border rounded-lg">
          <Image
            src={urlForImage(product.mainImage)}
            alt="product-image"
            height={700}
            width={1280}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          
        </div>
      <h1>{product.title}</h1>
    </section>
  );
};

export default Product;
