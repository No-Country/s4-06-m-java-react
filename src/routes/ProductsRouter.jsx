import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import InputSearch from "../components/sharedComponents/inputSearch/InputSearch";
import { Nav } from "../components/sharedComponents/nav/Nav";
import ProductsScreen from "../pages/ProductsScreen";

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
