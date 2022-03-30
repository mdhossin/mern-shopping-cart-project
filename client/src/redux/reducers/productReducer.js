import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_LOADING,
  ALL_PRODUCTS_SUCCESS,
} from "../types/productTypes";

// get all product
export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_PRODUCTS_LOADING:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
