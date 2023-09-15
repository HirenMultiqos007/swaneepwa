import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { USER_LOGOUT } from "../SagaAction/actions";

export const UserSlice = createSlice({
  name: "product",
  initialState: {
    UserData: [],
    loading: false,
    UserUpdated: [],
    GuestUserData:[],
    viewProfileData: null
  },
  reducers: {
    userViewProfileDetailsRequest(state,action){
      return {...state,loading: true}
    },
    userViewProfileDetailsSuccess(state,action){
      return {...state,viewProfileData : action.payload, loading:false }
    },
    userViewProfileDetailsFailure(state,action){
      return {...state, loading:false}
    },
    updatedUserPersonalDetailsRequest(state) {
      return { ...state, loading: true };
    },
    updatedUserPersonalDetailsSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.meta.message,
      });
      return {
        ...state,
        UserUpdated: action.payload,
        loading: false,
      };
    },
    updatedUserPersonalDetailsFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
    getUserDetailRequest(state) {
      return { ...state, loading: true };
    },
    getUserDetailSuccess(state, action) {
      return {
        ...state,
        UserData: action.payload,
        loading: false,
      };
    },
    getUserDetailFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
    addEditUserDeatilsRequest(state) {
      return { ...state, loading: true };
    },
    addEditUserDeatilsSuccess(state, action) {
      return {
        ...state,
        UserData: action.payload,
        loading: false,
      };
    },
    addEditUserDeatilsFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
    addGuestUserDetailsRequest(state){
      return { ...state, loading: true };
    },
    addGuestUserDetailsSuccess(state,action){
      return {
        ...state,
        GuestUserData: action.payload,
        loading: false,
      };
    },
    addGuestUserDetailsFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(USER_LOGOUT, (state, action) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("email");
      localStorage.removeItem("isLogin");
      return {
        UserData: [],
        loading: false,
        UserUpdated: [],
        GuestUserData:[],
        viewProfileData: null
      };
    });
  },
});
export const {
  updatedUserPersonalDetailsRequest,
  updatedUserPersonalDetailsSuccess,
  updatedUserPersonalDetailsFailure,
  getUserDetailRequest,
  getUserDetailSuccess,
  getUserDetailFailure,
  addEditUserDeatilsRequest,
  addEditUserDeatilsSuccess,
  addEditUserDeatilsFailure,
  addGuestUserDetailsRequest,
  addGuestUserDetailsSuccess,
  addGuestUserDetailsFailure,
  userViewProfileDetailsFailure,
  userViewProfileDetailsRequest,
  userViewProfileDetailsSuccess
} = UserSlice.actions;
export default UserSlice.reducer;
