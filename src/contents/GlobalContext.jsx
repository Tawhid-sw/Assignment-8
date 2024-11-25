import React, { createContext, useState } from "react";

export const TextContent = createContext();
export const GlobalBannerText = ({ children }) => {
  const [Text, setText] = useState("");
  return (
    <TextContent.Provider value={{ Text, setText }}>
      {children}
    </TextContent.Provider>
  );
};

export const Categories = createContext();
export const SelectCategories = ({ children }) => {
  const [categories, setCategories] = useState("allproduct");
  return (
    <Categories.Provider value={{ categories, setCategories }}>
      {children}
    </Categories.Provider>
  );
};

export const ProductDetail = createContext();
export const ProductDetailsContext = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);
  return (
    <ProductDetail.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductDetail.Provider>
  );
};
