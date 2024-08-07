import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants/index";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <h1 className="font-bold text-xl">Amal Shades</h1>
          <p className="text-base text-gray-700">
            Amal Shades 2024 <br /> All Rights Reserved
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="hidden md:block">
          @2024 Amal Shades. All Rights Reserved
        </p>
        <p>
          Built by{" "}
          <Link className="underline text-blue-600" target="_blank" href="https://jamilb.vercel.app/">
            Jamil
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
