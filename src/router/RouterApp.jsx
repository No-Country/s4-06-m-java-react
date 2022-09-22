import { Route, Routes } from "react-router-dom";
import { AuthScreen } from "../pages/AuthScreen";
import { HomeScreen } from "../pages/HomeScreen";

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>
    </>
  );
};
