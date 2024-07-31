"use client";
import Link from "next/link";
import * as z from "zod";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import { sendMail } from "@/utils/mail";
import MailCartItem from "@/components/MailCartItem";
import { compileConfirmTemplate } from "@/utils/emailCompiler";
import { OrderItem, OrderProps, OrderRequestProps, Products } from "@/typings";
import { createOrder, updateStock } from "@/sanity/sanity.query";
import orderItem from "@/utils/orderItem";
import { useOrder } from "@/context/OrderContext";
import { makeOrder } from "@/utils/order";
import { ClipLoader } from "react-spinners";

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number must contain at least 10 characters"),
});

const Checkout = () => {
  const {
    totalAmount,
    mail,
    cartItems,
    address,
    city,
    customer,
    phone,
    region,
    delivery,
    saveCustomer,
    removeFromCart,
    savePhone,
  } = useShoppingCart();

  const router = useRouter();

  let isLoading = false;

  //Get all order items
  const orderItems: OrderItem[] = cartItems.map((item) => ({
    _type: "document",
    itemName: item.name,
    price: item.price,
    quantity: item.quantity,
    prescription: item.usage,
  }));

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

  if (!process.env.PAYSTACK_API_KEY) {
    throw new Error("PAYSTACK_API_KEY environment variable is not set");
  }
  // Paystack config
  const config = {
    reference: new Date().getTime().toString(),
    email: mail,
    currency: "GHS",
    amount: totalAmount * 100,
    publicKey: process.env.PAYSTACK_API_KEY,
  };

  //If payment is successful
  const onSuccess = () => {
    const fetch = async () => {
      await createOrder(newOrder);
    };

    const patchStock = async () => {
      const promises = cartItems.map((item) =>
        updateStock(item.id, item.quantity, item.stock)
      );
      await Promise.all(promises);
    };

    patchStock();
    fetch();
    cartItems.forEach((item) => removeFromCart(item.id));

    router.replace("/confirmed");
  };

  //If dialog is closed
  const onClose = () => {
    alert("Payment canceled");
  };

  //Init payment with config
  const initializePayment = usePaystackPayment(config);

  const handleSubmit = () => {
    initializePayment({
      onSuccess: onSuccess,
      onClose: onClose,
      config: config,
    });
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center mx-6 xl:flex-row xl:mx-0">
      <div className="bg-[url('/images/happy.jpg')] bg-cover bg-center h-screen w-[55%] hidden xl:flex xl:flex-col xl:justify-center xl:items-center ">
        <div className="h-[80%] flex flex-col justify-between">
          <div>
            <h3 className="pl-20 text-white text-8xl font-bold mt-48">
              Hello! <br />
              Your shipment is almost on the way!
            </h3>
          </div>
          <p className="pl-20 text-gray-300 mt-20">
            2024 Amal Shades. All Rights Reserved
          </p>
        </div>
      </div>
      <section className="w-fit xl:w-[45%] items-center flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">Checkout</h2>

          <Button onClick={handleSubmit} className="w-full mt-2 flex gap-4">
            {isLoading ? (
              <ClipLoader />
            ) : (
              <div className="flex gap-4">
                <FaMoneyCheckDollar size={22} /> Pay{" "}
                {formatCurrency(totalAmount)} with Paystack
              </div>
            )}
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
