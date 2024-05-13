import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const OrderConfirmed = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="">
        <h4 className="text-3xl font-bold">Thank you for your purchase!</h4>
        <p>Your order will be processed within 24 hours during working days</p>
        <Link href="/">
          <Button className="rounded-none mt-10">Back to shopping</Button>
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmed;
