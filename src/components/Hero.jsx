import React, { useContext } from "react";
import BannerImage from "../assets/images/banner.jpg";
import { TextContent } from "../contents/GlobalContext";

const Hero = () => {
  const { Text } = useContext(TextContent);
  return (
    <div className="relative px-8 -translate-y-2">
      <div
        className=" bg-[#9538E2] flex items-center flex-col
       text-white px-8 pb-32 rounded-2xl -translate-y-6 text-center"
      >
        <button className="rounded-3xl px-8 py-2 text-lg font-Inter text-[#9538E2] bg-white font-bold my-6 transition-all hover:opacity-90 active:scale-90">
          Shop Now
        </button>
      </div>
      <div className="p-4 border-2 border-white rounded-3xl w-[75%] mx-auto -translate-y-40 bg-[#ffffff3e]">
        <img
          src={BannerImage}
          alt="banner"
          className="object-cover w-full mx-auto rounded-2xl aspect-video"
        />
      </div>
    </div>
  );
};

export default Hero;
