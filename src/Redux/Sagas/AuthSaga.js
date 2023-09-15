//3.

import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";

import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_REVERIFY,
  USER_TOKEN,
  USER_VERIFY,
} from "../SagaAction/actions";
import {
  userRegisterFailure,
  userRegisterRequest,
  userRegisterSuccess,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userForgotPasswordRequest,
  userForgotPasswordSuccess,
  userForgotPasswordFailure,
  userResetPasswordRequest,
  userResetPasswordSuccess,
  userResetPasswordFailure,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutFailure,
  userVerifywithOTPRequest,
  userVerifywithOTPSuccess,
  userVerifywithOTPFailure,
  userReVerifywithOTPRequest,
  userReVerifywithOTPSuccess,
  userReVerifywithOTPFailure,
  userpopupShowingCount,
} from "../Slices/AuthSlice";
import requestApi from "../../utils/request";

// const navigate = useNavigate();

function* SignupData(params) {
  try {
    yield put(userRegisterRequest());
    const data = yield requestApi.post("signup", params.payload);
    yield put(userRegisterSuccess(data));
    if (typeof params.callback === "function") {
      yield params.callback();
    }
  } catch (e) {
    console.log(e,"EEEEEE")
    yield put(userRegisterFailure(e));
  }
}

function* LoginUser(params) {
  // const token = yield getUserToken();
  // yield dispatch({ type: 'USER_TOKEN', token });
  try {
    yield put(userLoginRequest());
    const data = yield requestApi.post("login", params.payload);
    yield put(userLoginSuccess(data));
    if(data?.data?.isEmailVerified){
      yield put(userpopupShowingCount(0))
    }
    if(data?.data?.isEmailVerified === 0) {
      yield put(userpopupShowingCount(3));
    } 
  } catch (e) {
    yield put(userLoginFailure(e));
  }
}

function* userForgotPassword(params) {
  try {
    yield put(userForgotPasswordRequest(params));
    const data = yield requestApi.post("forgot-password", params.payload);
    yield put(userForgotPasswordSuccess(data));
    if(typeof params.callback === "function" ){
      yield params.callback()
    }
  } catch (e) {
    yield put(userForgotPasswordFailure(e));
  }
}

function* userResetPassword(params) {
  try {
    yield put(userResetPasswordRequest());
    const data = yield requestApi.post(
      `reset-password/${params?.payload?.search}`,
      {confirmPassword:params.payload?.password,newPassword:params.payload?.password}
    );
    yield put(userResetPasswordSuccess(data));
    if(typeof params.callback === "function"){
      yield params.callback()
    }
  } catch (e) {
    yield put(userResetPasswordFailure(e));
  }
}
// function* userLogout(params) {
//   console.log("------------params", params);
//   try {
//     yield put(userLogoutRequest());
//     const data = yield requestApi.post("user/logout", params.payload);
//     yield put(userLogoutSuccess(data));
//   } catch (e) {
//     yield put(userLogoutFailure(e));
//   }
// }
function* userVerification(params) {
  try {
    yield put(userVerifywithOTPRequest());
    const data = yield requestApi.post("verify-user", params.payload);
    yield put(userVerifywithOTPSuccess(data));
    if(typeof params.callback === "function"){
      yield params.callback();
    }
  } catch (e) {
    yield put(userVerifywithOTPFailure(e));
  }
}
function* userReVerification(params) {
  try {
    yield put(userReVerifywithOTPRequest());
    const data = yield requestApi.post("resend-otp", params.payload);
    yield put(userReVerifywithOTPSuccess(data));
    if(typeof params.callback === "function"){
      yield params.callback();
    }
  } catch (e) {
    yield put(userReVerifywithOTPFailure(e));
  }
}
function* AuthSaga() {
  yield takeEvery(USER_REGISTER, SignupData);
  yield takeLatest(USER_LOGIN, LoginUser);
  yield takeLatest(USER_TOKEN, LoginUser);
  yield takeEvery(FORGOT_PASSWORD, userForgotPassword);
  yield takeEvery(RESET_PASSWORD, userResetPassword);
  // yield takeEvery(USER_LOGOUT, userLogout);
  yield takeEvery(USER_VERIFY, userVerification);
  yield takeEvery(USER_REVERIFY, userReVerification);
}

export default AuthSaga;
