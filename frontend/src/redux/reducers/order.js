import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer(
  {},
  {
    NewOrderRequest: (state) => {
      state.loading = true;
    },
    NewOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    NewOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    MyOrdersRequest: (state) => {
      state.loading = true;
    },
    MyOrdersSuccess: (state, action) => {
      state.loading = false;
      state.myOrders = action.payload.orders;
    },
    MyOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    AllOrderRequest: (state) => {
      state.loading = true;
    },
    AllOrderSuccess: (state, action) => {
      state.loading = false;
      state.adminOrders = action.payload.orders;
    },
    AllOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateStatusRequest: (state) => {
      state.loading = true;
    },
    UpdateStatusSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UpdateStatusFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DeleteOrderRequest: (state) => {
      state.loading = true;
    },
    DeleteOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteOrderFail: (state, action) => {
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
