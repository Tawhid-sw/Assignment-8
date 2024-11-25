import React from "react";
import { Navigation } from "../contents/Navigation";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className={`block w-full px-8 ${
        location.pathname === "/" ? `pt-4 ` : `pt-0`
      } `}
    >
      <nav
        className={`justify-between px-8 py-4 font-Quicksand w-full fx-row ${
          location.pathname === "/"
            ? `bg-[#9538E2] text-white`
            : `bg-transparent text-black`
        } `}
      >
        <a href="/" className="text-xl font-bold">
          Gadget Heaven
        </a>
        <ul className="justify-center gap-6 -translate-x-12 fx-row">
          {Navigation.map((nav, index) => {
            return (
              <li key={nav + index}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-sm px-3 pt-2 pb-1 opacity-90 duration-200 transition-opacity hover:opacity-100 ${
                      isActive
                        ? "border-b-2 font-bold opacity-100"
                        : "border-none font-medium"
                    }`
                  }
                >
                  {nav.lable}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="gap-4 fx-row">
          <button className="w-btn before:content-['0']">
            <BsCart3 />
          </button>
          <button className="w-btn before:content-['0']">
            <FaRegHeart />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
