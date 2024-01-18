import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    AllUsersRequest: (state) => {
      state.loading = true;
    },
    AllUsersSuccess: (state, action) => {
      state.loading = false;
      state.allUsers = action.payload;
    },
    AllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    FavouriteRequest: (state) => {
      state.loading = true;
    },
    FavouriteSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    FavouriteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GetFavouriteRequest: (state) => {
      state.loading = true;
    },
    GetFavouriteSuccess: (state, action) => {
      state.loading = false;
      state.favourite = action.payload.info;
    },
    GetFavouriteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateRoleRequest: (state) => {
      state.loading = true;
    },
    UpdateRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UpdateRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DeleteUserRequest: (state) => {
      state.loading = true;
    },
    DeleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
);
