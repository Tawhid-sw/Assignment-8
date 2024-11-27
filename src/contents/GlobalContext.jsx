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

export const CartItem = createContext();
export const CartItems = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    const cart = localStorage.getItem("cartItem");
    return cart ? JSON.parse(cart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
  const AddItemToCart = (newItem) => {
    const ifItemExist = cartItem.find(
      (item) => item.product_id === newItem.product_id
    );

    // Item add condition
    if (ifItemExist) {
      alert("Already added");
    } else if (!newItem.availability) {
      alert("Product is out of stock");
    } else {
      setCartItem([...cartItem, newItem]);
    }
  };
  // Remove item
  const removeItem = (id) => {
    const UpdateList = cartItem.filter((item) => item.product_id !== id);
    setCartItem(UpdateList);
  };
  return (
    <CartItem.Provider
      value={{ cartItem, AddItemToCart, removeItem, setCartItem }}
    >
      {children}
    </CartItem.Provider>
  );
};

export const Display = createContext();
export const Displayed = ({ children }) => {
  const [display, setDisplay] = useState("cart");
  return (
    <Display.Provider value={{ display, setDisplay }}>
      {children}
    </Display.Provider>
  );
};
