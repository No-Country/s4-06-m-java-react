import React from "react";
import { RouterApp } from "./router/RouterApp";
import { store } from "./store/";
import { Provider } from "react-redux";
import "./index.css";
import "./utils/utils.css";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};
