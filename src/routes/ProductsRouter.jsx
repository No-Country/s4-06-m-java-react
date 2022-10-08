import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsScreen from "../pages/ProductsScreen";
import UserAccountScreen from "../pages/UserAccountScreen";
import AdminControl from "../pages/AdminControl";
import AddressScreen from "../pages/AddressScreen/AddressScreen";

const ProductsRouter = () => {
  return (
    <div className="container-principal">
      <Routes>
        <Route path="products" element={<ProductsScreen />} />
        <Route path="profileUser" element={<UserAccountScreen />} />
        <Route path="admin" element={<AdminControl />} />
        <Route path="address" element={<AddressScreen />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
};

export default ProductsRouter;
