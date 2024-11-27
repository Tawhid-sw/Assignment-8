import React, { useContext, useEffect, useState } from "react";
import { TextContent, Display } from "../contents/GlobalContext";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const { Text } = useContext(TextContent);
  const { display, setDisplay } = useContext(Display);
  const location = useLocation();
  const [pdn, setPdn] = useState("");
  useEffect(() => {
    if (location.pathname === "/") {
      setPdn("bg-transparent pb-0");
    } else if (location.pathname === "/product-details") {
      setPdn("bg-prime pb-48");
    } else {
      setPdn("bg-prime pb-8");
    }
  }, [location.pathname]);

  return (
    <div className={`px-8 ${pdn}`}>
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
      {location.pathname === "/dashbord" && (
        <div className="flex items-center justify-center w-full gap-4 mt-4 text-white">
          <button
            onClick={() => setDisplay("cart")}
            className={`DisplayBtns ${
              display === "cart" && "bg-white text-prime"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setDisplay("wishlist")}
            className={`DisplayBtns ${
              display === "wishlist" && "bg-white text-prime"
            }`}
          >
            Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
