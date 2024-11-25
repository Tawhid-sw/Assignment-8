import React, { useContext } from "react";
import { SideNavigation } from "../contents/Navigation";
import { Categories } from "../contents/GlobalContext";

const Sidenav = () => {
  const { categories, setCategories } = useContext(Categories);
  return (
    <ul className=" py-3 overflow-hidden bg-gray-100 shadow-sm rounded-2xl border border-gray-200 w-[20%]">
      {SideNavigation.map((nav, index) => {
        return (
          <li
            key={nav.lable}
            onClick={() => {
              setCategories(nav.category);
            }}
            className={`px-4 py-2 cursor-pointer mb-1 ${
              categories === nav.category
                ? "border-l-4 border-prime bg-white font-bold"
                : "text-black bg-transparent"
            }  text-[1rem] font-medium font-Quicksand transition-all ease-in-out`}
          >
            {nav.lable}
          </li>
        );
      })}
    </ul>
  );
};

export default Sidenav;
