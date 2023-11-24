import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/user";
import { createProductReducer } from "./reducers/product";
import { optionsReducer } from "./reducers/options";

const store = configureStore({
  reducer: {
    user: authReducer,
    product: createProductReducer,
    options: optionsReducer,
  },
});

export default store;

// export const server = "https://mbaburgerwala.herokuapp.com/api/v1";
