import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-16 py-12 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 font-Inter">
        Gadget Heaven
      </h1>
      <p className="mt-2 mb-3 text-lg font-semibold text-gray-700 font-Quicksand">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="h-[1.5px] w-full bg-gray-300 mb-6" />
      <div className="flex items-start w-full text-center fr justify-evenly">
        <ul>
          <h2 className="mb-3 text-2xl font-bold text-gray-800 font-Inter">
            Services
          </h2>
          <li>Product Support</li>
          <li>Order Tracking</li>
          <li>Shipping & Delivery</li>
          <li>Returns</li>
        </ul>
        <ul>
          <h2 className="mb-3 text-2xl font-bold text-gray-800 font-Inter">
            Company
          </h2>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul>
          <h2 className="mb-3 text-2xl font-bold text-gray-800 font-Inter">
            Legal
          </h2>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
