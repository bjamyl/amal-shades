import { useEffect, useState } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "@/utils/formatCurrency";
import { Products } from "@/typings";
import { getProducts } from "@/sanity/sanity.query";
import { Button } from "./ui/button";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

type ProductProps = {
  initialProducts: Products[];
};

const ShoppingCart = ({ initialProducts }: ProductProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    const fetchData = async () => {
      const products: Products[] = await getProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

  const { cartItems, setAmount } = useShoppingCart();

  let totalAmount = cartItems.reduce((total, cartItem) => {
    const item = products ? products.find((i) => i._id === cartItem.id) : null;
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  setAmount(totalAmount);

  return (
    <div className="h-[75vh] w-full rounded-lg overflow-y-scroll no-scrollbar bg-white xl:w-[65vw]">
      <h2 className="p-2 md:p-4  font-bold text-2xl ">Shopping Cart</h2>
      <div className="w-full h-[0.5px] bg-slate-200 my-6"></div>
      <div className="p-2 md:p-4  flex flex-col gap-y-6">
        {cartItems.length === 0 ? (
          <div>
            <p>NO ITEMS IN CART</p>
          </div>
        ) : (
          cartItems.map((item, i) => <CartItem key={i} {...item} />)
        )}
      </div>
      <div className="bg-slate-50 p-2 md:p-4 flex items-end gap-x-10  md:gap-x-0 fixed justify-between bottom-0  h-20 w-full">
        <div>
          <p className="text-slate-500">Subtotal</p>
          <p className="text-xl lg:text-2xl">{formatCurrency(totalAmount)}</p>
        </div>
        {cartItems.length === 0 ? (
          <Button variant="outline" className="rounded-none">
            Cart is empty.
          </Button>
        ) : (
          <Link href="/checkout/address">
            <Button
              onClick={() => setIsLoading(true)}
              className="rounded-none md:px-10 md:py-5"
            >
              {isLoading ? (
                <ClipLoader speedMultiplier={0.5} color="white" size={16} />
              ) : (
                "Checkout"
              )}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
