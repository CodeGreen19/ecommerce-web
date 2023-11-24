import axios from "axios";
const config = { headers: { "Content-Type": "application/json" } };
export const createProduct = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "NewProductRequest",
    });

    const { data } = await axios.post(`/api/product/create/new`, info, config);

    dispatch({
      type: "NewProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NewProductFail",
      payload: error.response.data.message,
    });
  }
};
export const updateProduct = (productId, info) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdatedProductRequest",
    });

    const { data } = await axios.post(
      `/api/product/update/${productId}`,
      info,
      config,
    );

    dispatch({
      type: "UpdatedProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UpdatedProductFail",
      payload: error.response.data.message,
    });
  }
};
export const allProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllProductRequest",
    });

    const { data } = await axios.get(`/api/product/all`, config);

    dispatch({
      type: "AllProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AllProductFail",
      payload: error.response.data.message,
    });
  }
};
export const singleProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "SingleProductRequest",
    });

    const { data } = await axios.get(`/api/product/single/${id}`, config);

    dispatch({
      type: "SingleProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "SingleProductFail",
      payload: error.response.data.message,
    });
  }
};

// add to cart
///add to cart
export const AddToCartItem = () => async (dispatch, getState) => {
  dispatch({
    type: "AddToCart",
    payload: {
      productId: "data.getSingleProduct._id",
      name: "data.getSingleProduct.name",
      price: "data.getSingleProduct.price",
      image: " data.getSingleProduct.images[0].url",
      stock: "data.getSingleProduct.stock",
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
