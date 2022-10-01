import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/sharedComponents/footer/Footer";
import { HomeScreen } from "../pages/HomeScreen";
import ProductsRouter from "../routes/ProductsRouter";

export const RouterApp = () => {
  return (
    <div className="container-principal">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/*" element={<ProductsRouter />} />
      </Routes>
      <Footer />
    </div>
  );
};
