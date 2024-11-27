import React, { useContext, useEffect, useState } from "react";
import { TextContent, Display } from "../contents/GlobalContext";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashbord = () => {
  const { setText } = useContext(TextContent);
  const { display } = useContext(Display);
  useEffect(() => {
    setText("Dashboard");
    document.title = "Gadget Haven || Dashboard";
  });
  return (
    <div className="block w-full px-20 py-12 bg-gray-100 ">
      {display === "cart" && <Cart />}
      {display === "wishlist" && <Wishlist />}
    </div>
  );
};

export default Dashbord;
