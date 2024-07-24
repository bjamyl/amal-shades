"use client"
import { getSingleProduct } from "@/sanity/sanity.query";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Products } from "@/typings";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const Usage = () => {
  const { slug } = useShoppingCart();
  const [data, setData] = useState<Products>();

  useEffect(() => {
    const fetchData = async () => {
      const product: Products = await getSingleProduct(slug);
      setData(product);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="h-screen border w-screen flex flex-col items-center justify-center z-50">
        <h2 className="text-5xl xl:text-7xl text-center text-[#008080]">
          Amal Shades <br />
          <BeatLoader size={50} color="#008080" speedMultiplier={0.4} />
        </h2>
      </div>
    );
  }
  return (
    <section className="layout__all pt-20">
      <div>
        <div className="flex items-center gap-2 text-[#008080]">
          <IoMdArrowRoundBack size={20}/>
          Back to {data.title}
        </div>
        {data.title}

        

      </div>
    </section>
  );
};

export default Usage;
