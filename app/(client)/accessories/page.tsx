import ItemCard from "@/components/ItemCard";


import { toast } from "sonner";
import { getAccessories, getProducts } from "@/sanity/sanity.query";
import { Products as Product } from "@/typings";

import Image from "next/image";


const Accessories = async () => {
  const products: Product[] = await getAccessories();



  return (
    <div>
      <div className="relative">
        <Image
          src="/images/accessories.jpg"
          alt="all-products"
          width={1280}
          height={720}
          className="brightness-50 w-screen xl:h-[60vh] object-cover h-[50vh]"
        />
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
          <h2 className="text-white font-bold text-2xl xl:text-6xl">
            All Accessories
          </h2>
          <p className="text-white mr-6 lg:mr-0">
            Shop from our catalog of accessories ranging from cases to cleaning
            kits and so much more
          </p>
        </div>
      </div>
      <section className="my-16 layout__all">
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3 md:gap-y-3 xl:grid-cols-4">
          {products.map((item: Product) => (
            <ItemCard product={item} key={item._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accessories;
