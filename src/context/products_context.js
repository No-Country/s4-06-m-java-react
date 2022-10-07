import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants/constants";
import {
  GET_PRODUCTS_BEGIN_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions/actions";

const initialState = {
  products: [],
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  token: null,
  isLoggedIn: false,
  userData: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      console.log(singleProduct);
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
    fetchProducts(url);
  }, []);

  /***********************************AUTH**********************************************/

  const Handlerlogin = (token) => {
    dispatch({ type: "LOGIN", payload: token });
  };

  const Handlerlogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handlerUserData = (userData) => {
    dispatch({ type: "ADDDATAUSER", payload: userData });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        Handlerlogout,
        Handlerlogin,
        handlerUserData,
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
