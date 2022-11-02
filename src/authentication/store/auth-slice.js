import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    accessToken: "",
    refreshToken: "",
    user: null,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      localStorage.setItem(
        "auth",
        CryptoJS.AES.encrypt(JSON.stringify(state), "supersecret").toString()
      );
    },
    checkLoginStorage(state) {
      //get encrypted data from local storage
      let authData = localStorage.getItem("auth");
      //decrypt data this returns bytes
      authData = CryptoJS.AES.decrypt(authData, "supersecret");
      //convert bytes to string
      authData = authData.toString(CryptoJS.enc.Utf8);
      authData = JSON.parse(authData);
      state.isLoggedIn = authData.isLoggedIn;
      state.accessToken = authData.accessToken;
      state.refreshToken = authData.refreshToken;
      state.user = authData.user;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
