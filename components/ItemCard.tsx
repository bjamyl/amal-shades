import React from "react";
import { Button } from "./ui/button";
import { Image as Img } from "sanity";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { urlForImage } from "@/sanity/lib/image";
import { Products } from "@/typings";

type ItemCardProps = {
  id: string;
  title: string;
  price: number;
  imgDir: Img;
};

const ItemCard = ({ product }: {product:Products}) => {
  return (
    <div>
      
        <Image
          src={urlForImage(product.mainImage)}
          alt="product-image"
          height={700}
          width={1280}
          objectFit="contain"

          className="rounded-lg"
        />
      
      <p className="text-lg font-medium">{product.title}</p>
      <p className="mb-10 text-sm">{formatCurrency(product.price)}</p>

      <Button className="w-full rounded-none">Add to cart</Button>
    </div>
  );
};

export default ItemCard;
