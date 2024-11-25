import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Statistcs from "../pages/Statistcs";
import Dashbord from "../pages/Dashbord";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/statistcs",
        element: <Statistcs />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
