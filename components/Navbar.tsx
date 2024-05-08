"use client";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { Twirl as Hamburger } from "hamburger-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="w-full fixed bg-white shadow-sm z-40">
      <nav className="layout__all flex justify-between items-center py-1 lg:py-4">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="text-xl font-bold">Amal Shades</h1>
        </Link>
        {/* Page Links */}
        <ul className=" gap-x-5 hover:cursor-pointer hidden lg:flex">
          <li>All products</li>
          <li>Gents</li>
          <li>Ladies</li>
          <li>About Us</li>
        </ul>
        <div className="flex justify-center items-center gap-2">
          <div className="relative cursor-pointer">
            <BsHandbag size={23} />
            <p className="bg-slate-300 h-5 w-5 absolute top-3 left-3 text-sm flex items-center justify-center rounded-full">3</p>
          </div>
          <div className="lg:hidden">
            <Hamburger size={24}/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
