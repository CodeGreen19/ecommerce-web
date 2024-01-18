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

export const productReducer = createReducer(
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
    FilteredProductRequest: (state) => {
      state.loading = true;
    },
    FilteredProductSuccess: (state, action) => {
      state.loading = false;
      state.filteredProducts = action.payload.filteredProducts;
    },
    FilteredProductFail: (state, action) => {
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
    DeleteProductRequest: (state) => {
      state.loading = true;
    },
    DeleteProductSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    SearchOpen: (state) => {
      state.searchOpen = true;
    },
    SearchClose: (state) => {
      state.searchOpen = false;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
);
export const productDetailReducer = createReducer(
  {},
  {
    ProductDetailRequest: (state) => {
      state.loading = true;
    },
    ProductDetailSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload.singleProduct;
    },
    ProductDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GiveReviewRequest: (state) => {
      state.loading = true;
    },
    GiveReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GiveReviewFail: (state, action) => {
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
