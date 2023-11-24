import { createReducer } from "@reduxjs/toolkit";
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

export const createProductReducer = createReducer(
  { initialState },
  {
    NewProductRequest: (state) => {
      state.loading = true;
    },
    NewProductSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    NewProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    AllProductRequest: (state) => {
      state.loading = true;
    },
    AllProductSuccess: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload.allProducts;
    },
    AllProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    SingleProductRequest: (state) => {
      state.loading = true;
    },
    SingleProductSuccess: (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload.singleProduct;
    },
    SingleProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdatedProductRequest: (state) => {
      state.loading = true;
    },
    UpdatedProductSuccess: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload.allProducts;
    },
    UpdatedProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
);
