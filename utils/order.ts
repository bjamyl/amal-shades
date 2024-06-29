"use server";

import { OrderRequestProps } from "@/typings";
import { createOrder } from "@/sanity/sanity.query";

export async function makeOrder(order: OrderRequestProps) {
  try {
    const res = await createOrder(order);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
