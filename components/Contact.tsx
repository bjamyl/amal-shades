"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClipLoader } from "react-spinners";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { sendMail } from "@/utils/mail";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().max(500),
});
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    await sendMail({
      to: values.email,
      name: values.firstName,
      subject: "Reaching out to Amal Shades",
      body: `
      <h3>
      Reaching out about something</h3>

      <p>

      ${values.message}
      </p>
      <p>
      My number: ${values.phone}.
      From: ${values.firstName}
      </p>
      `,
    });
    setIsLoading(false)
    toast("Thank you! We have got your message.")
  };

  return (
    <section className="container__layout">
      <div className="layout__all">
        <div className="grid lg:grid-cols-2 lg:gap-x-10">
          <div>
            <h2 className="text-[#1a4848] text-3xl md:text-5xl font-bold">
              Get in touch
            </h2>
            <p className="mt-3 mb-10 text-slate-600">
              Our friendly team would love to hear from you
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-y-4 w"
              >
                <div className="md:flex md:gap-x-5 lg:gap-x-10">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="md:flex md:gap-x-5 lg:gap-x-10">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="johndoe@amalshades.com"
                              {...field}
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0200112213"
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                <div className="md:flex md:gap-x-5 lg:gap-x-10"></div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what we can help you with"
                            className="resize-none md:w-1/2 lg:w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button
                  type="submit"
                  className="bg-[#1a4848] rounded-none mt-2 md:w-1/2 lg:w-full flex gap-4"
                >
                  {isLoading ? (
                    <ClipLoader color="white" size={16} />
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <div className="hidden lg:block w-full h-64 md:h-80 lg:h-[450px] xl:h-[650px] overflow-hidden">
            <Image
              src="/images/marquee/4.jpg"
              alt="contact-form-image"
              height={700}
              width={1280}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
