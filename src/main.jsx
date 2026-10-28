import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { CartProvider } from "./Context/Cart.jsx";
import { ProductsProvider } from "./Context/Products.jsx";
import { CustomerAuthProvider } from "./Context/CustomerAuth.jsx";

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CustomerAuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CustomerAuthProvider>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>
);