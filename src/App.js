import React from "react";
import { RouterApp } from "./router/RouterApp";
import { store } from './store/'
import { Provider } from 'react-redux'

export const App = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};
