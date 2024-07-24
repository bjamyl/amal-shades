"use client";
import { OrderProps } from "@/typings";
import { getSingleOrder } from "@/sanity/sanity.query";
import { formatCurrency } from "@/utils/formatCurrency";
import { BeatLoader } from "react-spinners";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Copy,
  MoreVertical,
  Truck,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect, useRef } from "react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

type Props = {
  params: {
    id: string;
  };
};

type IniOrderProps = {
  initialOrder: OrderProps;
};

const Order = ({ params }: Props, { initialOrder }: IniOrderProps) => {
  const [data, setData] = useState(initialOrder);
  const [checkShipped, setCheckShipped] = useState(false);
  const [checkPending, setCheckPending] = useState(true);
  const [dialogStatus, setDialogStatus] = useState(false);

  //Shipping settings
  const setShipCheckBox = () => {
    setCheckShipped(!checkShipped);
    setCheckPending(!checkPending);
  };
  const setPendingCheckBox = () => {
    setCheckPending(!checkPending);
    setCheckShipped(!checkShipped);
  };

  const openDialog = () => {
    setDialogStatus(true);
  };

  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      const order: OrderProps = await getSingleOrder(id);
      setData(order);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="h-screen border w-screen flex flex-col items-center justify-center z-50">
        <h2 className="text-5xl xl:text-7xl text-center text-[#008080]">
          Amal Shades <br />
          <BeatLoader size={50} color="#008080" speedMultiplier={0.4} />
        </h2>
      </div>
    );
  }
  return (
    <div className="max-w-[800px]">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order {data._id}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: {data._createdAt}</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button
              onClick={() => openDialog()}
              size="sm"
              variant="outline"
              className="h-8 gap-1"
            >
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Update Order
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="p-2 font-bold">
                  Order status
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem
                  checked={checkShipped}
                  onClick={() => setShipCheckBox()}
                >
                  Shipped
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={checkPending}
                  onClick={() => setPendingCheckBox()}
                >
                  Pending
                </DropdownMenuCheckboxItem>
                <DropdownMenuItem className="text-destructive">
                  Trash
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {data.items &&
                data.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {item.itemName} x <span>{item.quantity}</span>
                    </span>
                    <span>{formatCurrency(item.price)}</span>
                  </li>
                ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(data.total)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatCurrency(data.shipping)}</span>
              </li>

              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>{formatCurrency(data.total)}</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>{data.customer}</span>
                <span>{data.address}</span>
                <span>
                  {data.city}, {data.region}
                </span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                Same as shipping address
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>{data.customer}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{data.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{data.phone}</a>
                </dd>
              </div>
            </dl>
          </div>
        </CardContent>
        {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter> */}
        <AlertDialog open={dialogStatus}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Proceed to update order status?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will change the status of the order to{" "}
                {checkShipped ? "shipped" : "pending"}{""}
                {checkShipped
                  ? "and your customer will receive an email detailing this."
                  : "."} Do you wish to proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDialogStatus(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Card>
    </div>
  );
};

export default Order;
