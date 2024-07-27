import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: "Prescription procedure",
};

const SingleUsageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
};

export default SingleUsageLayout;
