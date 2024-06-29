import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="container__layout">
      <div className="layout__all">
        <div className="md:grid md:grid-cols-2 md:gap-x-10">
          <div>
            <h2 className="text-[#1a4848] text-3xl md:text-5xl font-bold">
              Frequently asked questions
            </h2>
            <p className="mt-3 mb-10 text-slate-600">
              We have some answers to some of your most burning questions.
            </p>
          </div>
          <div className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do the frames have UV LENS in them already?
                </AccordionTrigger>
                <AccordionContent>
                  NO, All frames are plain, albeit, they can be used for all
                  types of prescription purposes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I have to pay an extra 118 cedis if l have already payed
                  253 cedis for a photochromic lens?
                </AccordionTrigger>
                <AccordionContent>
                  No, the price includes the price of any frame you'll choose,
                  and comes with a case and lens cleaning kit
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What's the price for a prescription lens?
                </AccordionTrigger>
                <AccordionContent>
                  There's no fixed price for a prescription lens, since no two
                  prescriptions are ever the same. The price of your
                  prescription will depend on your lens number.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How long does medication take ?
                </AccordionTrigger>
                <AccordionContent>It takes 1-2 business days.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you deliver nationwide?</AccordionTrigger>
                <AccordionContent>
                  Yes, we deliver nationwide and worldwide at a fee
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Where are you located?</AccordionTrigger>
                <AccordionContent>
                  We are an online shop and operate solely online.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Can I have both photochromic and UV Light lens in one frame ??
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can, that's a blueblock lens.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
