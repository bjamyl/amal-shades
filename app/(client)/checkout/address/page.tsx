"use client";
import Link from "next/link";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
  FormDescription
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState, useEffect } from "react";
import { getShippingRates } from "@/sanity/sanity.query";
import { ShippingRate } from "@/typings";
import { ClipLoader } from "react-spinners";

const formSchema = z.object({
  fullname: z.string().min(2),
  emailAddress: z.string().email(),
  phone:z.string().min(10, "Please provide a 10 digit phone number"),
  region: z.string(),
  city: z.string().min(2),
  address: z.string(),
});

const Address = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      region: "",
    },
  });
  //Declare router instance
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  let {
    totalAmount,
    saveTotalAmount,
    saveMail,
    saveRegion,
    saveCity,
    saveAddress,
    saveDelivery,
    savePhone,saveCustomer
  } = useShoppingCart();
  const [rates, setRates] = useState<ShippingRate[]>([]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log("submitted these values", {
      email: values.emailAddress,
      region: values.region,
      city: values.city,
      address: values.address,
    });

    const finalRate = parseInt(values.region.split(",")[1]);
    const region = values.region.split(",")[0];

    saveTotalAmount(totalAmount + finalRate);
    saveRegion(region);
    saveCity(values.city);
    saveAddress(values.address);
    saveMail(values.emailAddress);
    saveDelivery(finalRate);
    saveCustomer(values.fullname)
    savePhone(values.phone)
    router.push("/checkout");
  };

  useEffect(() => {
    const fetchData = async () => {
      const rates: ShippingRate[] = await getShippingRates();
      setRates(rates);
    };

    fetchData();
  }, []);

  return (
    <main className="h-screen flex flex-col justify-center items-center mx-6 xl:flex-row xl:mx-0">
      <div className="bg-[url('/images/happy.jpg')] bg-cover bg-center h-screen w-[55%] hidden xl:flex xl:flex-col xl:justify-center xl:items-center ">
        <div className="h-[80%] flex flex-col justify-between">
          <div>
            <h3 className="pl-20 text-white text-8xl font-bold mt-48">
              Hello! <br />
              Your shipment is almost on the way!
            </h3>
          </div>
          <p className="pl-20 text-gray-300 mt-20">
            2024 Amal Shades. All Rights Reserved
          </p>
        </div>
      </div>
      <section className="w-fit xl:w-[45%] items-center flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">Checkout: Address</h2>
          <p className="mb-10">Please provide your location and address</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-y-4 w"
            >
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="emailAddress"
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
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="02000000000"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormDescription>Make sure the number you provide is correct.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Region</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your region of residence" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {rates &&
                            rates.map((rate, i) => (
                              <SelectItem
                                value={`${rate.region},${rate.cost}`}
                                key={rate.region}
                              >
                                {rate.region}
                                <p className="text-sm font-bold">
                                  {formatCurrency(rate.cost)}
                                </p>
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>City/Town</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: Accra" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg: 123 Wakanda St"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="w-full mt-2 flex gap-4">
                {isLoading ? <ClipLoader color="white" size={16} /> : "Next"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default Address;
