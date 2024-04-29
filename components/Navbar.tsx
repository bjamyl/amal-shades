"use client";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { Twirl as Hamburger } from "hamburger-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="w-full fixed bg-white shadow-md z-10">
      <nav className="layout__all flex justify-between items-center py-6">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="text-xl font-bold">Amal Shades</h1>
        </Link>
        {/* Page Links */}
        <ul className=" gap-x-5 hover:cursor-pointer hidden lg:flex">
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-2">
          <div className="relative">
            <BsHandbag size={25} />
            <div className="bg-slate-300 rounded-full px-2 py-1  absolute top-4 left-3 text-sm">3</div>
          </div>
          <div className="lg:hidden">
            <Hamburger />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
