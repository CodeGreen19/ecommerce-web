import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

// create a new product
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

// update a specific product
export const updateProduct = (productId, info) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdatedProductRequest",
    });

    const { data } = await axios.put(
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
// update a specific product
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteProductRequest",
    });

    const { data } = await axios.delete(
      `/api/product/delete/${productId}`,
      config,
    );

    dispatch({
      type: "DeleteProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteProductFail",
      payload: error.response.data.message,
    });
  }
};
// get all products
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
// get all products
export const filteredProduct = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "FilteredProductRequest",
    });
    let filterUrl = `keyword=${info.keyword}&category=${info.category}&rating=${info.rating}&height=${info.height}&color=${info.color}&sizes=${info.sizes}&minPrice=${info.minPrice}&maxPrice=${info.maxPrice}`;
    const { data } = await axios.get(
      `/api/product/filter?${filterUrl}`,
      config,
    );

    dispatch({
      type: "FilteredProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FilteredProductFail",
      payload: error.response.data.message,
    });
  }
};

// get single product
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
// get single product
export const DetailProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductDetailRequest",
    });

    const { data } = await axios.get(`/api/product/single/${id}`, config);

    dispatch({
      type: "ProductDetailSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ProductDetailFail",
      payload: error.response.data.message,
    });
  }
};
// get single product
export const giveReviews = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "GiveReviewRequest",
    });

    const { data } = await axios.put(
      `/api/product/review/${info.id}`,
      info,
      config,
    );

    dispatch({
      type: "GiveReviewSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GiveReviewFail",
      payload: error.response.data.message,
    });
  }
};
