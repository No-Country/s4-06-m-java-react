import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url } from "../utils/constants/constants";
import {
  GET_PRODUCTS_BEGIN_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  REGISTER,
  LOGOUT,
  ADDDATAUSER,
  LOGIN,
} from "../actions/actions";

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  token: localStorage.getItem("token"),
  userData: JSON.parse(localStorage.getItem("dataUser")),
  allUsers: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isLoggedIn = !!state.token;

  /*i fetch all products here*/

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN_LOADING });
    try {
      const response = await axios.get(url);
      const products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      console.log(products);
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  /*i fetch all products here*/

  /*i singleProduct here */

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN_LOADING });

    try {
      const response = await axios.get(url);
      const singleProduct = response.data;

      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  /*i singleProduct here end */

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  /***********************************AUTH**********************************************/

  const Handlerlogin = (data) => {
    dispatch({ type: LOGIN, payload: data.token });
    localStorage.setItem("token", data.token);
  };

  const HandlerRegister = (data) => {
    dispatch({ type: REGISTER, payload: data.token });
  };

  const Handlerlogout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("token");
    localStorage.removeItem("dataUser");
  };

  const handlerUserData = (userData) => {
    dispatch({ type: ADDDATAUSER, payload: userData });
    localStorage.setItem("dataUser", JSON.stringify(userData));
  };

  /***********************************USERS**********************************************/

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        Handlerlogout,
        Handlerlogin,
        handlerUserData,
        HandlerRegister,
        isLoggedIn,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
