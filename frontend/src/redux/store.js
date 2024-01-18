import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/user";
import { productDetailReducer, productReducer } from "./reducers/product";
import { optionsReducer } from "./reducers/options";
import { cartReducer } from "./reducers/cart";
import { orderReducer } from "./reducers/order";
import { paymentReducer } from "./reducers/payment";

const store = configureStore({
  reducer: {
    user: authReducer,
    product: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    options: optionsReducer,
    order: orderReducer,
    payment: paymentReducer,
  },
});

export default store;

// export const server = "https://mbaburgerwala.herokuapp.com/api/v1";
