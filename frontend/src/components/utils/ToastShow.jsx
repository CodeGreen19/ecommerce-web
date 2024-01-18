import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const toastOptions = {
  style: {
    borderRadius: "1",
    background: "black",
    color: "white",
    boxShadow: "none",
  },
};

function ToastShow() {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.user);
  const { error: cartError, message: cartMessage } = useSelector(
    (state) => state.cart,
  );
  const { error: productError, message: productMessage } = useSelector(
    (state) => state.productDetail,
  );
  const { error: orderError, message: orderMessage } = useSelector(
    (state) => state.order,
  );

  useEffect(() => {
    if (error || productError || cartError || orderError) {
      toast.error(
        error || productError || cartError || orderError,
        toastOptions,
      );
      dispatch({ type: "clearError" });
    }
    if (message || productMessage || cartMessage || orderMessage) {
      toast.success(
        message || productMessage || cartMessage || orderMessage,
        toastOptions,
      );
      dispatch({ type: "clearMessage" });
    }
  }, [
    dispatch,
    error,
    productError,
    message,
    productMessage,
    cartMessage,
    cartError,
    orderError,
    orderMessage,
  ]);
  return (
    <div>
      <Toaster />
    </div>
  );
}

export default ToastShow;
