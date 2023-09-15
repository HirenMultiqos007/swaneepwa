import { all } from "redux-saga/effects"
import AuthSaga from "./AuthSaga"
import ProductSaga from "./ProductSaga"
import userSaga from "./UserSaga"
import categorySaga from "./CategorySaga"


export default function* rootSaga() {
    yield all([
        AuthSaga(),
        ProductSaga(),
        userSaga(),
        categorySaga()
    ])
    // code after all-effect
  }