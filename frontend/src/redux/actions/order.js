import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

// add in bag
export const orderAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "NewOrderRequest",
    });

    const { data } = await axios.post(`/api/order/create`, info, config);

    dispatch({
      type: "NewOrderSuccess",
      payload: data,
    });
    let newData = {
      qty: data.order.qty,
      ammount: data.order.price,
      orderId: data.order._id,
    };
    // payment method -------
    const { data: getUrl } = await axios.post(
      `/api/payment/checkout`,
      newData,
      config,
    );
    window.open(getUrl.url, "_self");
    // payment method -------
  } catch (error) {
    dispatch({
      type: "NewOrderFail",
      payload: error.response.data.message,
    });
  }
};
export const myOrdersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "MyOrdersRequest",
    });

    const { data } = await axios.get(`/api/order/myorders`, config);

    dispatch({
      type: "MyOrdersSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "MyOrdersFail",
      payload: error.response.data.message,
    });
  }
};
export const updateStatusAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdateStatusRequest",
    });

    const { data } = await axios.put(
      `/api/order/update/${info.id}`,
      info,
      config,
    );

    dispatch({
      type: "UpdateStatusSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UpdateStatusFail",
      payload: error.response.data.message,
    });
  }
};
export const deleteOrderAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteOrderRequest",
    });

    const { data } = await axios.delete(`/api/order/delete/${id}`, config);

    dispatch({
      type: "DeleteOrderSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteOrderFail",
      payload: error.response.data.message,
    });
  }
};

// admin orders
export const AllOrderAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllOrderRequest",
    });

    const { data } = await axios.get(`/api/order/all`, config);

    dispatch({
      type: "AllOrderSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AllOrderFail",
      payload: error.response.data.message,
    });
  }
};
