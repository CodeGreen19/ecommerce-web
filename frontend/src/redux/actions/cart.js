import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

// add in bag
export const getCartAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetCartRequest",
    });

    const { data } = await axios.post(`/api/cart/all`, config);

    dispatch({
      type: "GetCartSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetCartFail",
      payload: error.response.data.message,
    });
  }
};
// add in bag
export const addToBagAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "AddToBagRequest",
    });

    const { data } = await axios.post(`/api/cart/addtobag`, info, config);

    dispatch({
      type: "AddToBagSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AddToBagFail",
      payload: error.response.data.message,
    });
  }
};
// add in bag
export const updateQtyAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdateQtyRequest",
    });

    const { data } = await axios.put(`/api/cart/qty`, info, config);

    dispatch({
      type: "UpdateQtySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UpdateQtyFail",
      payload: error.response.data.message,
    });
  }
};
// add in bag
export const deleteToBagAction = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteToBagRequest",
    });

    const { data } = await axios.delete(
      `/api/cart/delete/${userId}`,

      config,
    );

    dispatch({
      type: "DeleteToBagSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteToBagFail",
      payload: error.response.data.message,
    });
  }
};
