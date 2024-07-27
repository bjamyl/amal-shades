"use client";
import * as z from "zod";
import { getSingleProduct } from "@/sanity/sanity.query";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Products } from "@/typings";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "sonner";
import { urlForImage } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

const FormSchema = z.object({
  type: z.enum(["admin", "staff", "student"], {
    required_error: "You need to select a notification type.",
  }),
});

const Usage = () => {
  const { increaseCartQty } = useShoppingCart();
  const { slug } = useShoppingCart();
  const [data, setData] = useState<Products>();
  const [subtotal, setSubtotal] = useState(0); // Initialize subtotal here
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [isPhotoChromic, setIsPhotoChromic] = useState(false);
  const [isBlueLight, setIsBlueLight] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const product: Products = await getSingleProduct(slug);
      setData(product);
      setSubtotal(product.price); // Set initial subtotal
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

  const onSelectPhotochromic = () => {
    setSubtotal(data.price + 200);
    setIsBlueLight(false);
    setIsPhotoChromic(true);
    setStep(1);
  };

  const onSelectBluelight = () => {
    setSubtotal(data.price + 120);
    setIsPhotoChromic(false);
    setIsBlueLight(true);
    setStep(1);
  };

  const onSelectNo = () => {
    setSubtotal(data.price);
    setStep(0);
  };

  const addToCart = (
    id: string,
    name: string,
    usage: string,
    price: number,
    stock:number
  ) => {
    increaseCartQty(id, name, usage, price, stock);
    toast(`${name} has been added to cart`);

    router.back();
  };

  const lensCondition = () => {
    if (isBlueLight) {
      return (
        <span>
          an{" "}
          <span className="text-[#008080] font-medium">
            Anti-Blue Light filter
          </span>{" "}
          for your lens
        </span>
      );
    } else if (isPhotoChromic) {
      return (
        <span>
          a{" "}
          <span className="text-[#008080] font-medium">
            Photochromic filter
          </span>{" "}
          for your lens
        </span>
      );
    }
  };

  return (
    <section className="layout__all pt-20">
      <div>
        <div className="flex justify-between items-center gap-2 text-[#008080]">
          <IoMdArrowRoundBack
            size={20}
            className=" hover:cursor-pointer"
            onClick={() => router.back()}
          />
          <p className="text-xl font-medium">{data.title}</p>
        </div>
        <h3 className="text-3xl font-medium mt-6 text-[#008080]">
          Choose your usage
        </h3>
        <p className="text-slate-500">
          What are you getting these glasses for?
        </p>
        <div className="md:grid md:grid-cols-2 md:space-x-5">
          <div className="w-full  overflow-hidden border rounded-lg">
            <Image
              src={urlForImage(data.mainImage)}
              alt="product-image"
              height={700}
              width={1280}
              priority={true}
              className="object-cover w-full h-full"
            />
          </div>
          {step == 0 && (
            <div className="mt-5 md:mt-0 flex flex-col gap-6 ">
              <div className="p-4 border rounded-lg hover:cursor-pointer hover:bg-slate-50 max-w-[500px]">
                <p className="text-xl font-medium">Clear</p>
                <p className="text-slate-500 text-sm">
                  Glasses with transparent lens with no medications or
                  treatment.
                </p>
                <p className="text-xl mt-6 font-medium text-[#008080]">
                  +GHS0.00
                </p>
              </div>
              <div
                onClick={onSelectBluelight}
                className="p-4 border rounded-lg hover:cursor-pointer hover:bg-slate-50 max-w-[500px]"
              >
                <p className="text-xl font-medium">Anti-Blue Light Lens</p>
                <p className="text-slate-500 text-sm">
                  Lenses for filtering blue-violet light from exposure to
                  digital screens and the sun.
                </p>
                <p className="text-xl mt-6 font-medium text-[#008080]">
                  +GHS120.00
                </p>
              </div>
              <div
                onClick={onSelectPhotochromic}
                className="p-4 border rounded-lg hover:cursor-pointer hover:bg-slate-50 max-w-[500px]"
              >
                <p className="text-xl font-medium">Photochromic</p>
                <p className="text-slate-500 text-sm">
                  Lenses that darken automatically on exposure to the sun.
                </p>
                <p className="text-xl mt-6 font-medium text-[#008080]">
                  +GHS200.00
                </p>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="mt-5 md:mt-0">
              <p>You have selected {lensCondition()} </p>
              Confirm and add item to cart?
              <div className="space-x-4 mt-5">
                <Button
                  onClick={() =>
                    addToCart(
                      data._id,
                      data.title,
                      isPhotoChromic
                        ? "Photochromic"
                        : isBlueLight
                        ? "Anti-Blue Light"
                        : "Clear",
                      subtotal,
                      data.stock
                    )
                  }
                  className="rounded-none px-10 bg-[#008080]"
                >
                  Yes
                </Button>
                <Button
                  onClick={onSelectNo}
                  className="rounded-none px-10"
                  variant="outline"
                >
                  No
                </Button>
              </div>
            </div>
          )}
        </div>
        <p className="my-10 border-t pt-10">
          Subtotal:{" "}
          <span className="text-xl font-medium">
            {formatCurrency(subtotal)}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Usage;
