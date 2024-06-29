"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { BannerType } from "@/typings";
import { getBanner } from "@/sanity/sanity.query";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { BeatLoader } from "react-spinners";

const Hero = () => {
  const [data, setData] = useState<BannerType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const banner: BannerType[] = await getBanner();
      setData(banner);
    };

    fetchData();
  }, []);

  if (!data || data.length === 0) {
    return (
      <div className="h-screen border w-screen flex flex-col items-center justify-center z-50">
        <h2 className="text-5xl xl:text-7xl font-bold text-[#008080] text-center">
          Amal Shades <br />
          <BeatLoader size={50} color="#008080" speedMultiplier={0.4}/>
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
        <h1 className="text-[#1a4848] text-5xl font-bold lg:text-7xl">
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

export default Hero;
