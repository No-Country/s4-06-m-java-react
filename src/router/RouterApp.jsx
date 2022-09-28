import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/sharedComponents/footer/Footer";
import { Nav } from "../components/sharedComponents/nav/Nav";
import { AuthScreen } from "../pages/AuthScreen";
import { HomeScreen } from "../pages/HomeScreen";

export const RouterApp = () => {
  return (
    <div className="container-principal">
      {/*  nav compartido entre todas las paginas */}

      <Nav />

      {/* routes pagehome , prooductPage , detailsProduct */}

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>

      {/* footer compartido entre todas las paginas */}

      <Footer />
    </div>
  );
};
