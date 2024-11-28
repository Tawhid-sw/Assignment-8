import React, { useContext, useEffect } from "react";
import NoData from "../assets/images/error.webp";
import { TextContent } from "../contents/GlobalContext";

const Statistcs = () => {
  const { setText } = useContext(TextContent);
  useEffect(() => {
    setText("Statistcs");
    document.title = "Gadget Haven || Statistcs";
  }, []);
  return (
    <div className="flex flex-col items-center py-20 ">
      <img src={NoData} alt="NoData" />
      <h1 className="mt-4 text-3xl font-bold text-gray-800 font-Inter">
        No Data Found
      </h1>
    </div>
  );
};

export default Statistcs;
