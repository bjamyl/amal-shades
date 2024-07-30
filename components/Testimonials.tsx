"use client";
import { TestimonialCardProps } from "@/typings";
import { getTestimonials } from "@/sanity/sanity.query";
import TestimonialsSwiper from "./TestimonialsSwiper";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import NewTestimonials from "./NewTestimonials";

const Testimonials = () => {
  const [data, setData] = useState<TestimonialCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const testimonials: TestimonialCardProps[] = await getTestimonials();
      setData(testimonials);
    };

    fetchData();
  }, []);
  return (
    <section className=" container__layout">
      <div className="layout__all flex flex-col text-center justify-center">
        <h2 className="text-[#1a4848] text-3xl md:text-5xl font-bold">
          What do our clients say?
        </h2>
        <p className="mt-3 mb-10 text-slate-600">
          Don't take our word for it. Trust our clients!
        </p>
        <NewTestimonials testimonials={data} />
      </div>
    </section>
  );
};

export default Testimonials;
