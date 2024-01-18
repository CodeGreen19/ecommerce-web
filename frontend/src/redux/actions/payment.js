import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

// add in bag
export const paymentAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "PaymentRequest",
    });

    const { data } = await axios.post(
      `api/payment/create-payment-intent`,
      config,
    );

    dispatch({
      type: "PaymentSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PaymentFail",
      payload: error.response.data.message,
    });
  }
};
