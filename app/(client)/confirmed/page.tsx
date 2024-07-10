"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import { sendMail } from "@/utils/mail";
import MailCartItem from "@/components/MailCartItem";
import { OrderItem, OrderRequestProps, Products } from "@/typings";
import { makeOrder } from "@/utils/order";
import { createOrder } from "@/sanity/sanity.query";
import { useEffect } from "react";
const OrderConfirmed = () => {
  const {
    totalAmount,
    mail,
    cartItems,
    removeFromCart,
    address,
    city,
    customer,
    phone,
    region,
    delivery,
  } = useShoppingCart();

  //Get all order items
  const orderItems: OrderItem[] = cartItems.map((item) => ({
    itemName: item.name,
    price: item.price,
    quantity: item.quantity,
  }));

  //Create a new order
  const newOrder: OrderRequestProps = {
    _type: "order",
    address,
    city,
    customer,
    email: mail,
    items: orderItems,
    phone,
    region,
    shipping: delivery,
    total: totalAmount,
  };

  //Pass the order into the post function

  //Use UseEffect to run these functions only once when the component is mounted
  useEffect(() => {
    const sendReq = async () => {
      try {
        // Perform the order creation only if cartItems exist
        if (cartItems.length > 0) {
          const res = await createOrder(newOrder);
          console.log("Order created:", res);
        }

        // Always clear cart items after order creation attempt
        cartItems.forEach((item) => removeFromCart(item.id));
      } catch (error) {
        console.error("Error creating order:", error);
      }
    };

    // Call sendReq when component mounts
    sendReq();
  }, []);

  return (
    <section className="h-screen mx-6 flex items-center justify-center">
      <div className="">
        <h4 className="text-3xl font-bold">Thank you for your purchase!</h4>
        <p>Your order will be processed within 24 hours during working days</p>
        <Link href="/">
          <Button variant="ghost" className="rounded-none mt-10">
            Back to shopping
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmed;
