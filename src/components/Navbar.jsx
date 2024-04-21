import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar bg-transparent">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <Link to={'/'} className="text-[20px] text-white flex  justify-center items-center font-semibold mx-1">
      <lord-icon
    src="https://cdn.lordicon.com/pqavmhwu.json"
    trigger="hover"
    stroke="bold"
    style={{fontSize:'20px'}}>
</lord-icon>
        PolyVerse
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-200  group">
          <Link to={"/"} >
          {/* <lord-icon
    src="https://cdn.lordicon.com/qeltvbrs.json"
    trigger="morph"
    stroke="bold"
    state="morph-neighbourhood"
   >
</lord-icon> */}
            Home</Link>
        </li>
        <br />
        <span className="w-full h-[10px] bg-blue-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        {/* <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-200 mb-5">
              <Link to={"/"}>Home</Link>
            </li> */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-200 ml-10">
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-200 mb-2">
              <Link to={'/'}>Home</Link>
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-200 mt-3 ">
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
