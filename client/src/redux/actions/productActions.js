import axios from "axios";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_LOADING,
  ALL_PRODUCTS_SUCCESS,
} from "../types/productTypes";

export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_LOADING });

    const { data } = await axios.get("/api/products");
    console.log(data, "admin data");

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
