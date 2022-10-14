import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { SingleUserScreen } from "../pages/SingleUserScreen";
import AuthForm from "../pages/auth/AuthForm";
import SingleProduct from "../pages/SingleProduct";
import ProductsRouter from "../routes/ProductsRouter";
import { CartScreen } from "../pages/CartScreen";

export const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/singleUser/:id" element={<SingleUserScreen />} />
        <Route path="/*" element={<ProductsRouter />} />
      </Routes>
    </div>
  );
};
