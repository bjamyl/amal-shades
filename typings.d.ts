import { Image, Slug } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Products extends SanityBase {
  _type: "product";
  title: string;
  slug: Slug;
  price: number;
  gallery: Image[];
  mainImage: Image;
  categories: string[];
  shape:string;
  description:string;
  size:string[];
  rim: string;
  color: string

}

interface TestimonialCardProps {
  message: string;
  name: string;
  image: Image;
}

interface BannerType {
  heading: string;
  subheading: string;
  gallery: Image[];
}
