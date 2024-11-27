import React, { useContext } from "react";
import { CartItem, Wishlists } from "../contents/GlobalContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const Wishlist = () => {
  const { wishlistItem, removeItem } = useContext(Wishlists);
  const { AddItemToCart } = useContext(CartItem);
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 font-Quicksand">
        Wishlist
      </h1>
      <div className="relative block w-full mt-8">
        {wishlistItem.map((item, index) => {
          return (
            <div
              key={item.product_title + index}
              className="justify-start w-full gap-3 px-4 py-3 mb-3 bg-white shadow-sm rounded-xl fx-row"
            >
              <img
                className="aspect-video object-cover rounded-lg w-[16%] "
                src={item.product_image}
                alt={item.product_title}
              />
              <div className="font-Quicksand">
                <h1 className="text-xl font-bold text-gray-800">
                  {item.product_title}
                </h1>
                <p className="pb-1 text-sm font-medium text-gray-500">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  $ : {item.price}
                </p>
                <button
                  onClick={() => {
                    AddItemToCart(item);
                    {
                      !newItem.availability && removeItem(item.product_id);
                    }
                  }}
                  className="gap-1 mt-2 px-2 py-1 text-[0.678rem] font-semibold text-white fx-row rounded-3xl bg-prime font-Quicksand tr-drop hover:opacity-85"
                >
                  Add to Cart <MdOutlineShoppingCart />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.product_id)}
                className="absolute text-3xl transition-opacity right-8 hover:opacity-70"
              >
                <IoIosCloseCircleOutline color="#cb963a" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
