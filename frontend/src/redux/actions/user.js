import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`/api/user/me`, config);

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get(`/api/user/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
export const allUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllUsersRequest",
    });

    const { data } = await axios.get(
      `/api/user/all`,

      { withCredentials: true },
    );
    dispatch({
      type: "AllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "AllUsersFail",
      payload: error.response.data.message,
    });
  }
};
export const favouriteAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "FavouriteRequest",
    });

    const { data } = await axios.put(`/api/user/favourite/${info}`, config);
    dispatch({
      type: "FavouriteSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FavouriteFail",
      payload: error.response.data.message,
    });
  }
};
export const getFavouriteAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetFavouriteRequest",
    });

    const { data } = await axios.get(`/api/user/favourite/all`, config);
    dispatch({
      type: "GetFavouriteSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetFavouriteFail",
      payload: error.response.data.message,
    });
  }
};

/// admin actions
export const deleteUserAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteUserRequest",
    });

    const { data } = await axios.delete(`/api/user/delete/${id}`, config);
    dispatch({
      type: "DeleteUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const updateRoleAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdateRoleRequest",
    });

    const { data } = await axios.put(
      `/api/user/update/${info.id}`,
      info,
      config,
    );
    dispatch({
      type: "UpdateRoleSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UpdateRoleFail",
      payload: error.response.data.message,
    });
  }
};
