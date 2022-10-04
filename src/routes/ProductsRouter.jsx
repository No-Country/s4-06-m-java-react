import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductBasic from "../components/products/ProductBasic";
import InputSearch from "../components/sharedComponents/inputSearch/InputSearch";
import ListCategories from "../components/sharedComponents/ListCategories/ListCategories";
import { Nav } from "../components/sharedComponents/nav/Nav";
import ProductsScreen from "../pages/ProductsScreen";

const ProductsRouter = () => {
  return (
    <div className="container-principal">
      <Nav inputSearch={<InputSearch />} />
      <p className="title-section">Nuestros Productos</p>
      <ListCategories/>
      <Routes>
        <Route path="/all" element={<ProductsScreen />} />
        <Route path="/*" element={<Navigate to="./all" />} />
        <Route path="/hombre" element={<ProductsScreen />} />
        <Route path="/hombre/:id" element={<ProductBasic/>} />
        <Route path="/niños/:id" element={<ProductBasic/>} />
        <Route path="/nino" element={<ProductsScreen/>} />
        <Route path="/mujer/:id" element={<ProductBasic/>} />
        <Route path="/mujer" element={<ProductsScreen/>} />
        <Route path="/ofertas/:id" element={<ProductBasic/>} />
        <Route path="/ofertas" element={<ProductsScreen/>} />
        <Route path="/all/:id" element={<ProductBasic/>} />
      </Routes>
    </div>
  );
};

export default ProductsRouter;
