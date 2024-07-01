import { BiSearchAlt2 } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import React from 'react';

const NavbarLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block relative py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  hover-border"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="framer.svg" className="h-8" alt="Posteraxe Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Posteraxe
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-4">
            <a href="/search">
              <BiSearchAlt2 className="text-black" size={24} />
            </a>
            <a href="/cart">
              <BiCart className="cursor-pointer text-black" size={24} />
            </a>
          </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavbarLink href="/shop">Shop</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/about">About</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/news">News</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/contact">Contact</NavbarLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
