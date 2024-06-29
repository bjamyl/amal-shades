"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import { sendMail } from "@/utils/mail";
import MailCartItem from "@/components/MailCartItem";
import { OrderRequestProps, Products } from "@/typings";
import { makeOrder } from "@/utils/order";
const OrderConfirmed = () => {
  const {
    totalAmount,
    mail,
    cartItems,
    removeFromCart,
    address,
    city,
    customer,
    phone,
    region,
  } = useShoppingCart();

  const initialProducts: Products[] = [];

  const eurekaHTML = cartItems
    .map((item, i) => {
      return `<p>${MailCartItem(item, { initialProducts })}</p>`;
    })
    .join("");
  const send = async () => {
    await sendMail({
      to: mail,
      name: "Jamil",
      subject: "Order Confirmed",
      body: `<h3>Hello Jamil</h3> <p>Thank you for shopping with Amal! 
            Your order is being processed and you will receive an email when it is shipped!</p>
            <h4>Amount Paid: GHS${totalAmount}.00</h4>
            <p>You ordered for:</p>
            <div>
            ${eurekaHTML}
            
            </div>
            `,
    });
  };
  const newOrder: OrderRequestProps = {
    _type: "order",
    address,
    city,
    customer,
    email: mail,
    items: [],
    phone,
    region,
    shipping: 10,
    total: totalAmount,
  };
  const addOrder = async () => {
    await makeOrder(newOrder);
  };

  send();
  console.log(newOrder);
  cartItems.map((item) => removeFromCart(item.id));

  return (
    <section className="h-screen mx-6 flex items-center justify-center">
      <div className="">
        <h4 className="text-3xl font-bold">Thank you for your purchase!</h4>
        <p>Your order will be processed within 24 hours during working days</p>
        <Link href="/">
          <Button className="rounded-none mt-10">Back to shopping</Button>
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmed;
