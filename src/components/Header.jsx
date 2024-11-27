import React, { useContext, useEffect, useState } from "react";
import { Navigation } from "../contents/Navigation";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { CartItem, Wishlists, Display } from "../contents/GlobalContext";

const Header = () => {
  const { cartItem } = useContext(CartItem);
  const { wishlistItem } = useContext(Wishlists);
  const { setDisplay } = useContext(Display);
  const navigate = useNavigate();
  const [CartLengt, setCartLengt] = useState(() => {
    const length = localStorage.getItem("cartItemLength");
    return length ? JSON.parse(length) : 0;
  });
  useEffect(() => {
    localStorage.setItem("cartItemLength", JSON.parse(CartLengt));
    setCartLengt(cartItem.length);
  }, [cartItem]);

  const [WishlistLength, setWishlistLength] = useState(() => {
    const lengths = localStorage.getItem("wishlistLength");
    return lengths ? JSON.parse(lengths) : 0;
  });
  useEffect(() => {
    localStorage.setItem("wishlistLength", JSON.parse(WishlistLength));
    setWishlistLength(wishlistItem.length);
  }, [wishlistItem]);

  const location = useLocation();
  return (
    <header
      className={`block w-full px-8 ${
        location.pathname === "/" ? `pt-4 ` : `pt-0`
      } `}
    >
      <nav
        className={`justify-between px-8 py-4 font-Quicksand w-full fx-row ${
          location.pathname === "/"
            ? `bg-[#9538E2] text-white`
            : `bg-transparent text-black`
        } `}
      >
        <a href="/" className="text-xl font-bold">
          Gadget Heaven
        </a>
        <ul className="justify-center gap-6 -translate-x-12 fx-row">
          {Navigation.map((nav, index) => {
            return (
              <li key={nav + index}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-sm px-3 pt-2 pb-1 opacity-90 duration-200 transition-opacity hover:opacity-100 ${
                      isActive
                        ? "border-b-2 font-bold opacity-100"
                        : "border-none font-medium"
                    }`
                  }
                >
                  {nav.lable}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="gap-4 fx-row">
          <button
            onClick={() => {
              navigate("/dashbord");
              setDisplay("cart");
            }}
            className="w-btn"
          >
            <span>{CartLengt}</span>
            <BsCart3 />
          </button>
          <button
            onClick={() => {
              navigate("/dashbord");
              setDisplay("wishlist");
            }}
            className="w-btn "
          >
            <span>{WishlistLength}</span>
            <FaRegHeart />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
