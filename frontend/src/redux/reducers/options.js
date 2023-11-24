import { createReducer } from "@reduxjs/toolkit";

export const optionsReducer = createReducer(
  {},
  {
    OptionRequest: (state, action) => {
      state.option = action.payload;
    },
  },
);
