import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/sharedComponents/footer/Footer";

import AuthForm from "../pages/auth/AuthForm";
import { HomeScreen } from "../pages/HomeScreen";

import ProductsRouter from "../routes/ProductsRouter";

export const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/*" element={<ProductsRouter />} />
      </Routes>
    </div>
  );
};
