import { useState } from "react";
import { hamburgerOpen, hamburgerClose } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="padding-x py-5 top-0 shadow-sm fixed bg-pale-blue z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 hidden md:flex justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-website-orange transition duration-300 ease-in-out cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          <img
            src={nav ? hamburgerClose : hamburgerOpen}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={
            nav
              ? "z-10 fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
              : "z-10 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <figure className="py-8">
            <img
              src={headerLogo}
              alt="logo"
              width={129}
              height={29}
              className="w-[129px] h-[29px] m-auto"
            />
          </figure>

          <ul>
            {/* Mobile Navigation Items */}
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  onClick={handleNav}
                  href={item.href}
                  className="block font-montserrat p-4 border-b border-gray-600 leading-normal text-lg text-slate-gray hover:text-website-orange transition duration-300 ease-in-out cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={handleNav}
          className={nav ? "bg-[#00000081] z-[8] fixed inset-0 cursor-pointer" : "hidden"}
        ></div>
      </nav>
    </header>
  );
};

export default Nav;
