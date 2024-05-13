import React from "react";
import { Button } from "./ui/button";
import { Image as Img } from "sanity";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Products } from "@/typings";

const ItemCard = ({ product }: { product: Products }) => {
  const productSlug = product.slug.current;
  console.log(productSlug);
  return (
    <Link href={`products/${productSlug}`} className="border">
      <div className="full ">
        <div className="w-full h-64 overflow-hidden">
          <Image
            src={urlForImage(product.mainImage)}
            alt="product-image"
            height={700}
            width={1280}
            className="object-cover w-full h-full"
          />
        </div>

        <p className="px-4 text-xl pt-2 font-medium">{product.title}</p>
        <p className="px-4 pb-4  text-slate-700">
          {formatCurrency(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ItemCard;
