import { groq } from "next-sanity";
import { client } from "./lib/client";

const slugQuery = groq`
*[_type == "product" && slug.current == $slug[0]]`;

export async function getSingleProduct(slug: string) {
  return client.fetch(slugQuery, { slug });
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
