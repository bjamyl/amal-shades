import { Toaster } from "@/components/ui/sonner";
export const metadata = {
  title: "Amal Shades : Checkout",
};

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
};

export default CheckoutLayout;
