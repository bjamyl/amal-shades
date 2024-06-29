"use client";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/context/OrderContext";
import { createOrder } from "@/sanity/sanity.query";
import { OrderProps, OrderRequestProps } from "@/typings";
import React from "react";

const Make = () => {
  let { order, setOrder } = useOrder();
  const orderReq: OrderRequestProps = {
    _type: "order",

    items: [
      { itemName: "Amity", price: 5, quantity: 2 },
      { itemName: "Amity", price: 5, quantity: 2 },
    ],
    total: 500,
    shipping: 20,
    customer: "John Snow",
    email: "john@snow.com",
    address: "Castle Black",
    region: "Winterfell",
    city: "Westeros",
    phone: "20000000000",
  };

  console.log(order)

  const makeReq = async () => {
    const res = await createOrder(orderReq);
    console.log(res);
  };
  return (
    <div>
      <Button onClick={makeReq}>Make request</Button>
    </div>
  );
};

export default Make;
