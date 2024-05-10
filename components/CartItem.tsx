import { useShoppingCart } from "@/context/ShoppingCartContext";
import { urlForImage } from "@/sanity/lib/image";
import { getProducts } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { formatCurrency } from "@/utils/formatCurrency";

type CartItemProps = {
  id: string;
  quantity: number;
};

type ProductProps = {
  initialProducts: Products[];
};

const CartItem = (
  { id, quantity }: CartItemProps,
  { initialProducts }: ProductProps
) => {
  const [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    const fetchData = async () => {
      const products: Products[] = await getProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

  const { removeFromCart } = useShoppingCart();

  const item = products ? products.find((i) => i._id === id) : null;

  if (item == null) return null;

  return (
    <div className="flex justify-between">
      <div className="flex gap-x-2 xl:gap-x-6">
        <div className="w-24 lg:w-40 lg:h-40 h-24 overflow-hidden border">
          <Image
            src={urlForImage(item.gallery[0])}
            alt="product-image"
            height={700}
            width={1280}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm xl:text-base text-slate-500">{item.title}</p>
            <p className="xl:text-2xl">{formatCurrency(item.price)}</p>
          </div>
          <Button variant="outline" className="rounded-none">
            Remove
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-x-6 justify-between">
        <h4 className="text-xl font-bold">
          {formatCurrency(quantity * item.price)}
        </h4>
        <div className="flex items-center">
          <Button className="rounded-none">-</Button>
          <p className="px-2">{quantity}</p>
          <Button className="rounded-none">+</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
