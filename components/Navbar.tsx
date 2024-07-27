"use client";
import Link from "next/link";
import Modal from "./Modal";
import { BsHandbag } from "react-icons/bs";
import { Twirl as Hamburger } from "hamburger-react";
import { Button } from "./ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShoppingCart from "./ShoppingCart";

export const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="w-full fixed bg-white shadow-sm z-40">
      <nav className="layout__all relative flex justify-between items-center py-1 lg:py-4">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="text-xl font-bold z-50">Amal Shades</h1>
        </Link>
        {/* Page Links */}
        <ul className=" gap-x-5 hover:cursor-pointer hidden lg:flex">
          <Link href="/products">
            <li>All products</li>
          </Link>
          <Link href="/men">
            <li>Gents</li>
          </Link>
          <Link href="/women">
            <li>Ladies</li>
          </Link>
          <Link href="/accessories">
            <li>Accessories</li>
          </Link>
          <Link href="/about">
            <li>About us</li>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer"
          >
            <button className=" ">
              <BsHandbag size={23} />
            </button>
            <p className="bg-slate-300 h-5 w-5 absolute top-3 left-3 text-sm flex items-center justify-center rounded-full">
              {cartQuantity}
            </p>
          </div>
          <div className="lg:hidden z-50">
            <Hamburger onToggle={() => setIsNavOpen(!isNavOpen)} size={24} />
          </div>
        </div>
      </nav>
      {isNavOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.2 }}
            className="w-screen fixed z-40 h-fit bg-slate-50 lg:hidden  top-0 py-12"
          >
            <ul>
              <Link href="/products">
                <div className="py-5 border-b hover:bg-[#1F2937] hover:bg-opacity-25 cursor-pointer">
                  <li className="ml-[30px] text-lg font-medium">
                    All products
                  </li>
                </div>
              </Link>
              <Link href="/men">
                <div className="py-5 border-b hover:bg-[#1F2937] hover:bg-opacity-25 cursor-pointer">
                  <li className="ml-[30px] text-lg font-medium">Gents</li>
                </div>
              </Link>
              <Link href="/women">
                <div className="py-5 border-b hover:bg-[#1F2937] hover:bg-opacity-25 cursor-pointer">
                  <li className="ml-[30px] text-lg font-medium">Ladies</li>
                </div>
              </Link>
              <Link href="/accessories">
                <div className="py-5 border-b hover:bg-[#1F2937] hover:bg-opacity-25 cursor-pointer">
                  <li className="ml-[30px] text-lg font-medium">Accessories</li>
                </div>
              </Link>
              <Link href="/about">
                <div className="py-5 border-b hover:bg-[#1F2937] hover:bg-opacity-25 cursor-pointer">
                  <li className="ml-[30px] text-lg font-medium">About Us</li>
                </div>
              </Link>
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
      <AnimatePresence>
        <Modal isVisible={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <ShoppingCart initialProducts={[]} />
        </Modal>
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
