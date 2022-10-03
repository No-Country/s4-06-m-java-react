import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import InputSearch from "../components/sharedComponents/inputSearch/InputSearch";

import ProductsScreen from "../pages/ProductsScreen";
import { Nav } from "../components/sharedComponents/nav/Nav";

const ProductsRouter = () => {
  return (
    <div className="container-principal">
      <Nav inputSearch={<InputSearch />} />
      <Routes>
        <Route path="products" element={<ProductsScreen />} />

        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
};

export default ProductsRouter;
