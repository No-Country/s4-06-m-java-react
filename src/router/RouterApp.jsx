import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/sharedComponents/footer/Footer";

import AuthForm from "../pages/auth/AuthForm";
import { HomeScreen } from "../pages/HomeScreen";
import SingleProduct from "../pages/SingleProduct";
import { SingleUserScreen } from "../pages/SingleUserScreen";

import ProductsRouter from "../routes/ProductsRouter";

export const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/singleUser/:id" element={<SingleUserScreen />} />
        <Route path="/*" element={<ProductsRouter />} />
      </Routes>
    </div>
  );
};
