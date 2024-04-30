import { groq } from "next-sanity";
import { client } from "./lib/client";

const query = groq`
*[_type == "product" && slug.current == $slug[0]]`;

export async function getSingleProduct(slug: string) {
  return client.fetch(query, { slug });
}
