import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { TestimonialCardProps } from "@/typings";



const TestimonialCard = ({ message, name, image }: TestimonialCardProps) => {
  return (
    <div className="bg-[#F5F5FF] border p-8">
      <div className="flex flex-col justify-between gap-y-8">
        <p>{message}</p>
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-lg">{name}</p>
          </div>
          <Image
            src={urlForImage(image)}
            alt=""
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
