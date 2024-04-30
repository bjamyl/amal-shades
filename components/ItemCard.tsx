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
  const productSlug = product.slug.toString(); 
  return (
    <Link href={`products/shai`}>
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

        <p className="text-lg font-medium">{product.title}</p>
        <p className="mb-10 text-sm">{formatCurrency(product.price)}</p>

        <Button variant="outline" className="w-full border-2">
          Add to cart
        </Button>
      </div>
    </Link>
  );
};

export default ItemCard;
