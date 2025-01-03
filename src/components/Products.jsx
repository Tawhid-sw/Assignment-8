import React, { useContext, useEffect, useState } from "react";
import { Categories, ProductDetail } from "../contents/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorImage from "../assets/images/error.webp";

const Products = () => {
  const { categories } = useContext(Categories);
  const { setProductDetails } = useContext(ProductDetail);
  const [Product, setProducts] = useState([]);
  const URL = `https://raw.githubusercontent.com/Tawhid-sw/API/refs/heads/main/Gadget%20Haven%20Fake%20Data%20API.json`;

  const Productz = async () => {
    try {
      const Response = await axios.get(URL);
      setProducts(Response.data);
    } catch (error) {
      console.error(Error);
    }
  };
  useEffect(() => {
    Productz();
  }, []);
  const FilterProduct = Product.filter((product) => {
    if (categories === "allproduct") {
      return product;
    } else if (categories === "macbook") {
      return product.product_title.includes("MacBook");
    } else if (categories === "iphone") {
      return product.product_title.includes("iPhone");
    } else {
      return product.category === categories;
    }
  });
  console.log(FilterProduct.length);
  if (FilterProduct.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <img className="block max-w-full mt-40" src={ErrorImage} alt="error" />
        <h1 className="text-4xl font-bold text-center text-gray-700 font-Inter">
          No result found
        </h1>
      </div>
    );
  } else {
    return (
      <div className="w-[80%] grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] items-center gap-6">
        {FilterProduct.map((product, index) => {
          return (
            <div
              key={product.product_title + index}
              className="flex flex-col items-start w-full gap-2 p-4 bg-white border rounded-xl"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="object-cover bg-center border border-gray-200 rounded-lg aspect-video"
              />
              <h2 className="text-lg font-bold text-black font-Quicksand">
                {product.product_title}
              </h2>
              <p className="text-sm text-gray-500">Price : ${product.price}</p>
              <Link to={"/product-details"}>
                <button
                  onClick={() => {
                    setProductDetails(product);
                  }}
                  className="px-3 py-1 mt-2 text-sm font-bold transition-all duration-200 border text-prime rounded-3xl border-prime active:scale-95 hover:bg-prime hover:text-white font-Quicksand"
                >
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Products;
