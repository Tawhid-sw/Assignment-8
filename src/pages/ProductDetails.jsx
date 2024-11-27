import React, { useContext, useEffect } from "react";
import {
  ProductDetail,
  TextContent,
  CartItem,
} from "../contents/GlobalContext";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const { setText } = useContext(TextContent);
  const { productDetails } = useContext(ProductDetail);
  const { AddItemToCart } = useContext(CartItem);
  useEffect(() => {
    document.title = "Gadget Heaven || Product Details";
    setText("Product Details");
  }, []);
  console.log(productDetails);
  return (
    <div className="flex items-center justify-center block w-full">
      <div className="flex items-start gap-4 w-[70%] p-6 rounded-3xl bg-white -translate-y-44">
        <img
          src={productDetails.product_image}
          alt={productDetails.product_title}
          className="object-cover w-[50%] aspect-square rounded-2xl "
        />
        <div className="flex flex-col items-start gap-3 font-Quicksand">
          <h1
            className={`${
              productDetails.product_title.length >= 25
                ? "text-2xl"
                : "text-3xl"
            } font-bold text-gray-900`}
          >
            {productDetails.product_title}
          </h1>
          <p className="text-lg font-semibold text-gray-800 ">
            Price : ${productDetails.price}
          </p>

          <span
            className={`text-sm font-bold px-3 py-1 ${
              productDetails.availability == true ? "bg-prime" : "bg-red-600"
            }  text-white rounded-3xl`}
          >
            {productDetails.availability == true ? "In Stock" : "Out of Stock"}
          </span>
          <p className="font-medium text-gray-500">
            {productDetails.description}
          </p>
          <p className="text-lg font-bold text-gray-800 ">Specification:</p>
          <ul className="pl-5">
            {productDetails.Specification.map((info, index) => {
              return (
                <li
                  className="mb-1 text-lg font-medium text-gray-700 list-decimal"
                  key={index}
                >
                  {info}
                </li>
              );
            })}
          </ul>
          <span className="flex items-center gap-1 text-lg font-medium">
            Rating :
            <FaStar color="#bfd52f" />
            {productDetails.rating}
          </span>
          <div className="flex items-center gap-4 ">
            <button
              onClick={() => {
                AddItemToCart(productDetails);
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-white transition-all rounded-3xl bg-prime hover:opacity-95 active:scale-90"
            >
              Add to cart <MdOutlineShoppingCart />
            </button>
            <button className="p-2 text-lg border border-[#00000059] rounded-full transition-all active:scale-90 hover:bg-red-400 hover:text-white hover:border-white">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
