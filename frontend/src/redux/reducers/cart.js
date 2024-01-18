import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {},
  {
    GetCartRequest: (state) => {
      state.loading = true;
    },
    GetCartSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload.cartItems;
      state.summery = action.payload.summery;
    },
    GetCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    AddToBagRequest: (state) => {
      state.loading = true;
    },
    AddToBagSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AddToBagFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    StoredInBagRequest: (state) => {
      state.loading = true;
    },
    StoredInBagSuccess: (state, action) => {
      state.loading = false;
      state.storedInBag = action.payload;
    },
    StoredInBagFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateQtyRequest: (state) => {
      state.loading = true;
    },
    UpdateQtySuccess: (state, action) => {
      state.loading = false;
    },
    UpdateQtyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DeleteToBagRequest: (state) => {
      state.loading = true;
    },
    DeleteToBagSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteToBagFail: (state, action) => {
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
