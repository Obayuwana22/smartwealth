import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../data";
import { NavLink } from "react-router-dom";
import ContactBtn from "../components/ContactBtn";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div className="bg-primaryClr px-5 py-3 rounded-lg flex items-center justify-between lg:px-10 lg:py-5">
        <img src={logo} alt="logo" className="img w-32" />

        <div onClick={handleMenu} className="lg:hidden">
          <img src={menu} alt="menu icon" />
        </div>
        <ul className="lg:flex lg:gap-x-5 capitalize text-white hidden">
          {navLinks.map((navLink) => {
            const { id, href, text } = navLink;
            return (
              <li key={id} className="mb-2 tracking-wider ">
                <NavLink to={href}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block">
          <ContactBtn />
        </div>

        <div
          className={`flex flex-col justify-between h-screen z-10  absolute top-16 left-5 bg-primaryClr rounded-lg py-5 md:w-60 lg:hidden ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <ul className="flex flex-col capitalize text-white pr-20 pl-6  ">
            {navLinks.map((navLink) => {
              const { id, href, text } = navLink;
              return (
                <li key={id} className="mb-2 tracking-wider ">
                  <NavLink to={href}>{text}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className="mx-6">
            <ContactBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
