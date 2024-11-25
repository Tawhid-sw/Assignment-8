import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import { TextContent } from "../contents/GlobalContext";
import Sidenav from "../components/Sidenav";
import Products from "../components/Products";

const Home = () => {
  const { setText } = useContext(TextContent);
  useEffect(() => {
    document.title = "Gadget Heaven || Home";
    setText("Upgrade Your Tech Accessorize with Gadget Heaven Accessories");
  }, []);
  return (
    <main>
      <Hero />
      <h1 className="mb-8 text-5xl font-extrabold text-center -mt-[5.5rem] font-Quicksand">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex items-start justify-between gap-8 px-20 mb-8 sideNav-Products">
        <Sidenav />
        <Products />
      </div>
    </main>
  );
};

export default Home;
