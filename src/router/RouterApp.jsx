import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/sharedComponents/footer/Footer";

import LoginScreen from "../pages/auth/LoginScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import { HomeScreen } from "../pages/HomeScreen";

import ProductsRouter from "../routes/ProductsRouter";

export const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/*" element={<ProductsRouter />} />
      </Routes>
    </div>
  );
};
