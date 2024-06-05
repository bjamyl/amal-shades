"use client";
import { TestimonialCardProps } from "@/typings";
import { getTestimonials } from "@/sanity/sanity.query";
import TestimonialsSwiper from "./TestimonialsSwiper";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const Testimonials = () => {
  const [data, setData] = useState<TestimonialCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const testimonials: TestimonialCardProps[] = await getTestimonials();
      setData(testimonials);
    };

    fetchData();
  }, []);

  if (!data || data.length === 0) {
    return (
      <section className=" container__layout">
        <div className="layout__all flex flex-col text-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold">What do our clients say?</h2>
          <p className="mt-3 mb-10 text-slate-600">
            Don't take our word for it. Trust our clients!
          </p>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex border flex-col  items-center space-y-8 p-6">
              <p className="text-slate-600 md:text-lg max-w-[500px]"></p>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium md:text-lg">
                    <BeatLoader
                      size={20}
                      color="#008080"
                      speedMultiplier={0.4}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className=" container__layout">
      <div className="layout__all flex flex-col text-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold">What do our clients say?</h2>
        <p className="mt-3 mb-10 text-slate-600">
          Don't take our word for it. Trust our clients!
        </p>
        <TestimonialsSwiper testimonials={data} />
      </div>
    </section>
  );
};

export default Testimonials;
