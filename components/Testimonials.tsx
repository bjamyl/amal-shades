import { TestimonialCardProps } from "@/typings";
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from "@/sanity/sanity.query";

const Testimonials = async () => {
  const testimonials: TestimonialCardProps[] = await getTestimonials();
  return (
    <section className=" container__layout bg-[#F5F5FF]">
      <div className="layout__all">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
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
