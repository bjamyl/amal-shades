import { groq } from "next-sanity";
import { client } from "./lib/client";
import { OrderItem, OrderProps, OrderRequestProps } from "@/typings";

const slugQuery = groq`     
*[_type == "product" && slug.current == $slug[0]]`;

export async function getSingleProduct(slug: string) {
  return client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`);
}

const prodQuery = groq`
*[_type == "product"]`;

export async function getProducts() {
  return client.fetch(prodQuery);
}

const menProdQuery = groq`
*[_type == "product" && "Men" in categories[]->title]`;

export async function getMenProds() {
  return client.fetch(menProdQuery);
}

const womenProdQuery = groq`
*[_type == "product" && "Women" in categories[]->title]`;

export async function getWomenProds() {
  return client.fetch(womenProdQuery);
}

const accessoriesQuery = groq`
*[_type == "product" && "Accessories" in categories[]->title]`;

export async function getAccessories() {
  return client.fetch(accessoriesQuery);
}

const testimonials = groq`
*[_type == "testimonial"]
`;

export async function getTestimonials() {
  return client.fetch(testimonials);
}

const banner = groq`
*[_type == "banner"]
`;

export async function getBanner() {
  return client.fetch(banner);
}

const shipping = groq`
*[_type == "shipping"]`;

export async function getShippingRates() {
  return client.fetch(shipping);
}

export async function updateStock(
  _id: string,
  quantity: number,
  stock: number
) {
  let finalStock = stock - quantity;
  return client.patch(_id).set({ stock: finalStock });
}

const orders = groq`
*[_type == "order"]`;
export async function getOrders() {
  return client.fetch(orders);
}

export async function getSingleOrder(id: string) {
  return client.fetch(`*[_type == "order" && _id == "${id}"][0]`);
}

//Creating an order
export async function createOrder(order: OrderRequestProps) {
  return client.create(order);
}
