import React, { useContext, useEffect, useState } from "react";
import {
  ProductDetail,
  TextContent,
  CartItem,
  Wishlists,
} from "../contents/GlobalContext";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const { setText } = useContext(TextContent);
  const { productDetails } = useContext(ProductDetail);
  const { AddItemToCart, cartItem } = useContext(CartItem);
  const { wishlistItem, getItem } = useContext(Wishlists);
  const existItem = wishlistItem.find(
    (item) => item.product_id == productDetails.product_id
  );
  const IfexistItem = cartItem.find(
    (item) => item.product_id == productDetails.product_id
  );
  useEffect(() => {
    document.title = "Gadget Heaven || Product Details";
    setText("Product Details");
  }, []);
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
                if (IfexistItem) {
                  toast.warning("Already added");
                } else if (!productDetails.availability) {
                  toast.error("Product is out of stock");
                } else {
                  AddItemToCart(productDetails);
                }
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-white transition-all rounded-3xl bg-prime hover:opacity-95 active:scale-90"
            >
              Add to cart <MdOutlineShoppingCart />
            </button>
            <button
              onClick={() => {
                existItem
                  ? toast.error("Allready in wishlist")
                  : getItem(productDetails);
              }}
              className={`p-2 text-lg border rounded-full hover:bg-red-400 ${
                existItem
                  ? "bg-red-400 text-white border-transparent"
                  : "bg-transparent text-black tr-drop border-[#00000059]"
              } hover:text-white `}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
