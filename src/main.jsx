import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import {
  GlobalBannerText,
  SelectCategories,
  ProductDetailsContext,
  CartItems,
  WishlistItems,
  Displayed,
} from "./contents/GlobalContext";

createRoot(document.getElementById("root")).render(
  <SelectCategories>
    <GlobalBannerText>
      <ProductDetailsContext>
        <CartItems>
          <WishlistItems>
            <Displayed>
              <RouterProvider router={router} />
            </Displayed>
          </WishlistItems>
        </CartItems>
      </ProductDetailsContext>
    </GlobalBannerText>
  </SelectCategories>
);
