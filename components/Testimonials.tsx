import { TestimonialCardProps } from "@/typings";
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from "@/sanity/sanity.query";

const Testimonials = async () => {
  const testimonials: TestimonialCardProps[] = await getTestimonials();
  return (
    <section className=" container__layout bg-[#F5F5FF]">
      <div className="layout__all">
        <h2 className="text-3xl">Reviews</h2>
        <p className="mt-3 mb-10 text-slate-600">
          Hear from our wonderful clients from all over Ghana and beyond
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {testimonials.map((item: TestimonialCardProps, i) => (
            <TestimonialCard
              image={item.image}
              message={item.message}
              name={item.name}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
