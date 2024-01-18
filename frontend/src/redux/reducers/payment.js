import { createReducer } from "@reduxjs/toolkit";

export const paymentReducer = createReducer(
  {},
  {
    PaymentRequest: (state) => {
      state.loading = true;
    },
    PaymentSuccess: (state, action) => {
      state.loading = false;
      state.clientSecret = action.payload.clientSecret;
    },
    PaymentFail: (state, action) => {
      state.loading = false;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
);
