import React, { useContext, useEffect, useState } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { CartItem } from "../contents/GlobalContext";
import Payment from "./Payment";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, removeItem, setCartItem } = useContext(CartItem);
  const [payment, setPayment] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cartItem
      .reduce((sum, product) => sum + product.price, 0)
      .toFixed(2);
    setTotalPrice(price);
  }, [cartItem]);

  return (
    <>
      <div className="flex items-center justify-between w-full font-Quicksand">
        <h1 className="text-2xl font-bold text-gray-800 ">Cart</h1>
        <div className="flex items-center gap-4 text-sm font-bold">
          <p className="text-lg">Total coast : $ {totalPrice}</p>
          <button
            onClick={() =>
              setCartItem([...cartItem].sort((a, b) => b.price - a.price))
            }
            className="gap-1 px-4 py-2 bg-transparent border fx-row rounded-3xl border-prime tr-drop text-prime hover:opacity-90"
          >
            Sort by Price <HiOutlineAdjustments />
          </button>

          <button
            disabled={totalPrice == 0 ? true : false}
            onClick={() => {
              setPayment(true);
              setCartItem([]);
            }}
            className={`px-4 py-2 text-white bg-gradient-to-t from-[#639fee] to-prime rounded-3xl tr-drop hover:opacity-90 ${
              totalPrice == 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="relative block w-full mt-8">
        {cartItem.map((product, index) => {
          return (
            <div
              key={product.product_title + index}
              className="justify-start w-full gap-3 px-4 py-3 mb-3 bg-white shadow-sm rounded-xl fx-row"
            >
              <img
                className="aspect-video object-cover rounded-lg w-[15%] "
                src={product.product_image}
                alt={product.product_title}
              />
              <div className="font-Quicksand">
                <h1 className="text-xl font-bold text-gray-800">
                  {product.product_title}
                </h1>
                <p className="py-2 text-sm font-medium text-gray-500">
                  {product.description}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  $ : {product.price}
                </p>
              </div>
              <button
                onClick={() => removeItem(product.product_id)}
                className="absolute text-3xl transition-opacity right-8 hover:opacity-70"
              >
                <IoIosCloseCircleOutline color="#cb963a" />
              </button>
            </div>
          );
        })}
      </div>
      {payment && <Payment price={totalPrice} />}
    </>
  );
};

export default Cart;
