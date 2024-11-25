import React, { useContext, useState } from "react";
import { TextContent } from "../contents/GlobalContext";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const { Text } = useContext(TextContent);
  const location = useLocation();
  return (
    <div
      className={`px-8 ${
        location.pathname === "/" ? `bg-transparent pb-0` : `bg-prime pb-48`
      }`}
    >
      <div className="flex flex-col items-center w-full py-3 text-center text-white bg-prime">
        <h1
          className={`w-2/3 my-4  ${
            location.pathname === "/" ? `text-5xl` : `text-3xl`
          } font-bold leading-[1.5555] font-Inter`}
        >
          {Text}
        </h1>
        <p className="text-sm opacity-80 w-[48%]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default Banner;
