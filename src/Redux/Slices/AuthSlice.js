// 0 ---->>> signin
// 1 ---->>> signup
// 2 ---->>> Otp
// 3 ---->>> Forgotpasword
// 4 ---->>> ResetPassword

import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { USER_LOGOUT } from "../SagaAction/actions";

const AuthSlice = createSlice({
  name: "users",
  initialState: {
    isloading: false,
    error: null,
    Userdata: null,
    logedinUser: {},
    isLogin: JSON.parse(localStorage.getItem("isLogin")) ?? null,
    validEmail: false,
    forgotpassword: "",
    resetpassword: {},
    logout: "",
    verifyuser: [],
    authToken: JSON.parse(localStorage.getItem("authToken")) ?? null,
    isEmailVerified: null,
    verifyError: null,
    currentActiveModel: null,
    preModel: [],
  },

  reducers: {
    userpopupShowingCount: (state, action) => {
      return { ...state, currentActiveModel: action.payload };
    },
    userRegisterRequest: (state, action) => {
      return { ...state, isloading: true, error: null };
    },
    userRegisterSuccess(state, action) {
      localStorage.setItem(
        "authToken",
        JSON.stringify(action?.payload?.meta?.tokenData)
      );
      localStorage.setItem("email", action?.payload?.data?.email);
      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   text: action.payload.meta.message,
      // });

      return {
        ...state,
        isloading: false,
        isLogin: false,
        isEmailVerified: action?.payload?.data?.isEmailVerified,
        Userdata: action?.payload?.data?.email,
        authToken: action?.payload?.meta?.tokenData,
        error: null,
      };
    },
    userRegisterFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action?.payload?.message,
      });
      return { ...state, isloading: false };
    },
    userLoginRequest: (state, action) => {
      return { ...state, isloading: true, error: null };
    },
    userLoginSuccess(state, action) {
      localStorage.setItem(
        "authToken",
        JSON.stringify(action?.payload?.meta?.tokenData)
      );
      localStorage.setItem("email", action?.payload?.data?.email);
      if (action?.payload?.data?.isEmailVerified === true) {
        localStorage.setItem(
          "isLogin",
          JSON.stringify(action?.payload?.data?.isEmailVerified)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          text: action?.payload?.meta?.message,
        });
      }
      return {
        ...state,
        isloading: false,
        Userdata: action?.payload?.data?.email,
        isLogin: action?.payload?.data?.isEmailVerified === true ? true : false,
        isEmailVerified: action?.payload?.data?.isEmailVerified,
        authToken: action?.payload?.meta?.tokenData,
        error: null,
      };
    },
    userLoginFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      return { ...state, isloading: false, error: action.payload.message };
    },
    userForgotPasswordRequest(state, action) {
      return { ...state, isloading: true, error: null };
    },
    userForgotPasswordSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.meta.message,
      });
      return {
        ...state,
        isloading: false,
        forgotpassword: action.payload,
        validEmail: true,
        error: null,
      };
    },
    userForgotPasswordFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      return {
        ...state,
        isloading: false,
        validEmail: false,
        error: action.payload,
      };
    },
    userResetPasswordRequest(state, action) {
      return { ...state, isloading: true, error: null };
    },
    userResetPasswordSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.meta.message,
      });
      return {
        ...state,
        isloading: false,
        resetpassword: action.payload,
        error: null,
      };
    },
    userResetPasswordFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      return { ...state, isloading: false, error: action.payload };
    },
    userLogoutRequest(state, action) {
      return { ...state, isloading: true, error: null };
    },
    userLogoutSuccess(state, action, authToken) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLogin");
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.meta.message,
      });
      // .then(() => {
      //   window.location.assign("/pernia");
      // });
      return {
        ...state,
        isloading: false,
        // logout: token,
        authToken: null,
        isLogin: false,
        error: null,
      };
    },
    userLogoutFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      // .then(() => {
      //   window.location.assign('/pernia')
      // });
      return { ...state, isloading: false, error: action.payload };
    },
    userVerifywithOTPRequest(state, action) {
      return { ...state, isloading: true, error: null };
    },
    userVerifywithOTPSuccess(state, action) {
      localStorage.setItem(
        "isLogin",
        JSON.stringify(action?.payload?.data?.isEmailVerified)
      );
      Swal.fire({
        position: "center",
        icon: "success",
        text: action?.payload?.meta?.message,
      });
      return {
        ...state,
        isloading: false,
        // verifyuser: action.payload,
        isLogin: true,
        error: null,
      };
    },
    userVerifywithOTPFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action?.payload?.message,
      });
      return { ...state, isloading: true };
    },
    userReVerifywithOTPRequest(state, action) {
      return { ...state, isloading: true, error: null };
    },
    userReVerifywithOTPSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.message,
      });
      return {
        ...state,
        isloading: false,
        // verifyuser: action.payload,
        isLogin: true,
        error: null,
      };
    },
    userReVerifywithOTPFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action?.payload?.message,
      });
      return { ...state, isloading: true };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(USER_LOGOUT, (state, action) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("email");
      localStorage.removeItem("isLogin");
      return {
        error: null,
        Userdata: null,
        loading: false,
        isLogin: false,
        authToken: null,
        isEmailVerified: null,
        currentActiveModel: null,
      };
    });
  },
});

export const {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userForgotPasswordFailure,
  userForgotPasswordRequest,
  userForgotPasswordSuccess,
  userLogoutFailure,
  userLogoutRequest,
  userLogoutSuccess,
  userResetPasswordFailure,
  userResetPasswordRequest,
  userResetPasswordSuccess,
  userVerifywithOTPRequest,
  userVerifywithOTPSuccess,
  userVerifywithOTPFailure,
  userReVerifywithOTPRequest,
  userReVerifywithOTPSuccess,
  userReVerifywithOTPFailure,
  userpopupShowingCount,
} = AuthSlice.actions;
export default AuthSlice.reducer;
