import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Prescription procedure",
};

const SingleUsageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default SingleUsageLayout;
