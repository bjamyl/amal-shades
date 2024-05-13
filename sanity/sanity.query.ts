import { groq } from "next-sanity";
import { client } from "./lib/client";

const slugQuery = groq`     
*[_type == "product" && slug.current == $slug[0]]`;

export async function getSingleProduct(slug: string) {
  console.log(slug);
  return client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`);
}

const prodQuery = groq`
*[_type == "product"]`;

export async function getProducts() {
  return client.fetch(prodQuery);
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
  console.log("fetched");
  return client.fetch(banner);
}

const shipping = groq`
*[_type == "shipping"]`;

export async function getShippingRates() {
  return client.fetch(shipping);
}
