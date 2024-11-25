import React, { createContext, useEffect, useState } from "react";

export const TextContent = createContext();
export const GlobalBannerText = ({ children }) => {
  const [Text, setText] = useState(() => {
    const text = localStorage.getItem("text");
    return text ? JSON.parse(text) : null;
  });
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(Text));
  }, [Text]);
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
  const [productDetails, setProductDetails] = useState(() => {
    const ProductInfo = localStorage.getItem("productInfo");
    return ProductInfo ? JSON.parse(ProductInfo) : null;
  });
  useEffect(() => {
    localStorage.setItem("productInfo", JSON.stringify(productDetails));
  }, [productDetails]);
  return (
    <ProductDetail.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductDetail.Provider>
  );
};
