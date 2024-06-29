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
  shape: string;
  description: string;
  size: string[];
  rim: string;
  color: string;
  stock: number;
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

interface ShippingRate {
  region: string;
  cost: number;
}

interface OrderItem {
  itemName: string;
  price: number;
  quantity: number;
}

interface OrderProps extends SanityBase {
  _type: "order";
  items: OrderItem[];
  total: number;
  shipping: number;
  customer: string;
  email: string;
  address: string;
  region: string;
  city: string;
  phone: string;
}

interface OrderRequestProps {
  _type: "order";
  items: OrderItem[];
  total: number;
  shipping: number;
  customer: string;
  email: string;
  address: string;
  region: string;
  city: string;
  phone: string;
}
