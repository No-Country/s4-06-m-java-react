import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./css/global.css";
import "./css/colors.css";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </BrowserRouter>
);
