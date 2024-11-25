import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
    </>
  );
}

export default App;
