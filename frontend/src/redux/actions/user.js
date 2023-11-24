import axios from "axios";
const config = { headers: { "Content-Type": "application/json" } };
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`/api/user/me`, {
      withCredentials: true,
    });

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

    const { data } = await axios.get(`/api/user/all`, config);

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
