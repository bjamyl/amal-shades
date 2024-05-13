"use client";
import Link from "next/link";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
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

const formSchema = z.object({
  fullname: z.string().min(2),
  phoneNumber: z.string().min(10),
  city: z.string().min(2),
});

const Checkout = () => {
  const { totalAmount, mail } = useShoppingCart();

  // Paystack config
  const config = {
    reference: new Date().getTime().toString(),
    email: mail,
    currency: "GHS",
    amount: totalAmount * 100,
    publicKey: "pk_test_766ab4c20b6ba946429f6ec6ab47a57e3b0efeb0",
  };

  //If payment is successful
  const onSuccess = () => {
    console.log("successful");
  };

  //If dialog is closed
  const onClose = () => {
    console.log("closed");
  };

  //Init payment with config
  const initializePayment = usePaystackPayment(config);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    alert(mail);
    console.log("submitted these values", {
      fullname: values.fullname,
      phoneNnumber: values.phoneNumber,
      city: values.city,
    });

    initializePayment(onSuccess, onClose);
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
      <section className="w-fit border xl:w-[45%] items-center flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">Checkout</h2>
          <p className="mb-10">
            Please provide your information and shipping details
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-y-4 w"
            >
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Phone number"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>City/Town</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: Accra" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="w-full mt-2 flex gap-4">
                <FaMoneyCheckDollar size={22} /> Pay{" "}
                {formatCurrency(totalAmount)} with Paystack
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
