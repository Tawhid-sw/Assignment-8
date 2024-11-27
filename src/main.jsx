import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import {
  GlobalBannerText,
  SelectCategories,
  ProductDetailsContext,
  CartItems,
  Displayed,
} from "./contents/GlobalContext";

createRoot(document.getElementById("root")).render(
  <SelectCategories>
    <GlobalBannerText>
      <ProductDetailsContext>
        <CartItems>
          <Displayed>
            <RouterProvider router={router} />
          </Displayed>
        </CartItems>
      </ProductDetailsContext>
    </GlobalBannerText>
  </SelectCategories>
);
