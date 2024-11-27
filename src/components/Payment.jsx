import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/images/Group.png";
import { useNavigate } from "react-router-dom";

const Payment = (data) => {
  const [savePayment, setSavePayment] = useState(() => {
    const price = localStorage.getItem("price");
    return price ? JSON.parse(price) : 0;
  });
  useEffect(() => {
    localStorage.setItem("price", JSON.parse(savePayment));
  }, [savePayment]);
  useEffect(() => {
    setSavePayment(data.price);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="top-0 left-0 w-full h-full fixed flex items-center justify-center bg-[#0000007f] z-10">
      <div className="flex flex-col items-center gap-3 px-4 py-8 bg-white shadow-md font-Quicksand rounded-2xl w-96">
        <img src={Logo} />
        <h1 className="text-xl font-bold ">Payment Successfull</h1>
        <hr className="h-[2px] bg-gray-400 w-full" />
        <p className="font-semibold text-gray-500">
          Thankyou for your purchasing.
        </p>
        <p className="font-semibold text-gray-600 font-Inter">
          Total : $ {savePayment}
        </p>
        <button
          onClick={() => {
            navigate("/");
            setSavePayment(0);
          }}
          className="w-full py-1 mt-2 text-lg bg-gray-200 font-Inter tr-drop hover:bg-slate-300 rounded-3xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Payment;
