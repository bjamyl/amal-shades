"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { BannerType, Products } from "@/typings";
import { getBanner, getProducts } from "@/sanity/sanity.query";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type HeroProps = {
  initialData: BannerType[];
};

const Hero = ({ initialData }: HeroProps) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/banner");
      const newData = await res.json();
      setData(newData);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="h-screen border w-screen flex flex-col items-center justify-center z-50">
        <h2 className="text-5xl xl:text-7xl text-center">
          Amal Shades <br />
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <section className="relative">
      <Swiper
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        {data &&
          data[0].gallery.map((image, index) => (
            <SwiperSlide className="z-10" key={index}>
              <div className="w-screen h-[55vh] md:h-[65vh] lg:h-[75vh] xl:h-screen overflow-hidden">
                <img
                  src={urlForImage(image)}
                  alt="banner-image"
                  className="object-cover w-full h-full "
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute z-30 bottom-8 xl:bottom-36 xl:left-36 mx-6">
        <h1 className="text-5xl font-bold lg:text-7xl">
          {data && data[0].heading}
        </h1>
        <p className="mt-2 mb-5 lg:text-lg">{data && data[0].subheading}</p>
        <Button
          className="px-8 rounded-none bg-transparent border-slate-700 border-2"
          variant="outline"
        >
          Shop now
        </Button>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const res = await fetch("/api/banner");

  const initialData = await res.json();
  console.log(initialData);

  return { props: { initialData } as HeroProps };
}

export default Hero;
