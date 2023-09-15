import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_EDIT_USER, EDIT_USER_DETAILS, USER_DETAILS,GUEST_USER, VIEW_USER_PERSONAL_DETAILS } from "../SagaAction/actions";
import {
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
  userViewProfileDetailsRequest,
  userViewProfileDetailsFailure,
  userViewProfileDetailsSuccess,
} from "../Slices/UserSlice";
import requestApi from "../../utils/request";


function* updatedPersonalDetail(params){
  try {
    yield put(updatedUserPersonalDetailsRequest());
    const data = yield requestApi.post("edit-profile", params.payload);
    // console.log("getUserDetailSuccess",data);
    yield put(updatedUserPersonalDetailsSuccess(data));
  }
  catch (e) {
    yield put(updatedUserPersonalDetailsFailure(e));
  }
}
function* setUserDetails(params) {
  try {
    yield put(getUserDetailRequest());
    const data = yield requestApi.post("view-address", params.payload);
    // console.log("getUserDetailSuccess",data);
    yield put(getUserDetailSuccess(data));
  }
  catch (e) {
    yield put(getUserDetailFailure(e));
  }
}

function* updateUserDetail(params){
  try {
    yield put(addEditUserDeatilsRequest());
    const data = yield requestApi.post("add-edit-address", params.payload);
    // console.log("addEditUserDeatilsSuccess",data);
    yield put(addEditUserDeatilsSuccess(data));
  }
  catch (e) {
    yield put(addEditUserDeatilsFailure(e));
  }
}
function* addGuestUserDeatils(params){
  try {
    yield put(addGuestUserDetailsRequest());
    const data = yield requestApi.post("/", params.payload);
    console.log("addGuestUserDetailsSuccess",data);
    yield put(addGuestUserDetailsSuccess(data));
  }
  catch (e) {
    yield put(addGuestUserDetailsFailure(e));
  }
}

function* viewUserPersonalDetails(params){
  try {
    yield put(userViewProfileDetailsRequest());
    const {data} = yield requestApi.post("view-profile", params.payload);
    yield put(userViewProfileDetailsSuccess(data));
  }
  catch (e) {
    yield put(userViewProfileDetailsFailure(e));
  }
}

function* userSaga() {
  yield takeLatest(EDIT_USER_DETAILS,updatedPersonalDetail)
  yield takeLatest(USER_DETAILS, setUserDetails);
  yield takeLatest (ADD_EDIT_USER,updateUserDetail);
  yield takeLatest (GUEST_USER,addGuestUserDeatils);
  yield takeLatest(VIEW_USER_PERSONAL_DETAILS,viewUserPersonalDetails)
  
}

export default userSaga;
