import {
  call,
  put,
  takeEvery,
  takeLatest,
  select,
  get,
} from "redux-saga/effects";
import {
  SHOP_FILTER,
  PROMO_CODE,
  REMOVE_FILTER,
  WISHLIST_ITEMS,
  ADD_TO_CART,
  CART_QTY,
  CHECKEDITEMS,
  PRODUCT_LIST,
  PRODUCT_ID,
  VIEW_PRODUCT,
  VIEW_REVIEW,
  ADD_REVIEW,
  CART_SUBTOTAL_PRICE,
  DELETE_CART_PRODUCT,
  CART_TOTAL_AMOUNT_PRICE,
  PRODUCT_DATA,
  FILTER_OBJECT,
  UPDATE_CART,
  ORDER_SUMMARY,
} from "../SagaAction/actions";
import {
  setShopFilter,
  getShopFilter,
  removeShopFilter,
  savePromoCode,
  addToWishlist,
  addToCart,
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  DeleteFromCartItemRequest,
  DeleteFromCartItemSuccess,
  DeleteFRomCartItemFailure,
  cartQuantity,
  incrementCartQuantity,
  decrementCartQuantity,
  checkItem,
  setProductListRequest,
  setProductListSuccess,
  setProductListFailure,
  viewProductRequest,
  viewProductSuccess,
  viewProductFailure,
  setProductIdRequest,
  setProductIdSuccess,
  setProductIdFailure,
  addProductReviewFailure,
  addProductReviewRequest,
  addProductReviewSuccess,
  viewProductReviewFailure,
  viewProductReviewSuccess,
  viewProductReviewRequest,
  CartSummarySubtotalRequest,
  CartSummarySubtotalSuccess,
  CartSummarySubtotalFailure,
  CartSummaryTotalAmountRequest,
  CartSummaryTotalAmountSuccess,
  CartSummaryTotalAmountFailure,
  getProductDataRequest,
  getProductDataSuccess,
  getProductDataFailure,
  getFilteredDataRequest,
  getFilteredDataSuccess,
  getFilteredDataFailure,
  getPrice,
  removeAllfilter,
  updatedCart,
  getOderSummaryRequest,
  getOderSummarySuccess,
  getOderSummaryFailure,
} from "../Slices/ProductSlice";
import requestApi from "../../utils/request";
import Swal from "sweetalert2";

function* setFilterShop(params) {
  yield put(setShopFilter(params));
}

function* RemoveProductFilter(params) {
  yield put(removeShopFilter(params));
}

function* CopyPromoCode(params) {
  yield put(savePromoCode(params));
}

function* SetWishlist(params) {
  yield put(addToWishlist(params));
}

function* setAddToCart(params) {
  try {
    yield put(addToCartRequest());

    yield put(addToCartSuccess(params));
  } catch (e) {
    yield put(addToCartFailure(e));
  }
}
function* getUpdatedCart(params) {
  yield put(updatedCart(params));
}
function* setCartQty(params) {
  yield put(incrementCartQuantity(params));
  yield put(decrementCartQuantity(params));
}
function* setCheckedItems(params) {
  yield put(checkItem(params));
}
function* setProductList(params) {
  try {
    yield put(setProductListRequest());
    const data = yield requestApi.post("product/list", params?.payload);
    yield put(setProductListSuccess(data));
  } catch (e) {
    yield put(setProductListFailure(e));
  }
}
function* viewProductDetails(params) {
  try {
    yield put(viewProductRequest());
    const {data} = yield requestApi.post(
      `product/view/${params?.payload}`
    );
    yield put(viewProductSuccess(data));
    if(typeof params?.callback === "function"){
      yield params?.callback(data)
    }
  } catch (e) {
    yield put(viewProductFailure(e));
  }
}
function* productIdDetail(params) {
  try {
    yield put(setProductIdRequest());
    yield put(setProductIdSuccess(params));
  } catch (e) {
    yield put(setProductIdFailure(e));
  }
}
function* addReviewDetails(params) {
  try {
    yield put(addProductReviewRequest());
    const data = yield requestApi.post("add-review", params.payload.data);
    yield put(addProductReviewSuccess(data));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Review Submitted",
      text: `Thank you for valuable feedback`,
    });
  } catch (e) {
    yield put(addProductReviewFailure(e));
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Warning",
      text: `${e.message.replace(/([a-z])([A-Z])/g, "$1 $2")}`,
    });
  }
}
function* productViewReview(params) {
  try {
    yield put(viewProductReviewRequest());
    const data = yield requestApi.post("list-review", params.payload);
    yield put(viewProductReviewSuccess(data?.data));
  } catch (e) {
    yield put(viewProductReviewFailure(e));
  }
}

function* ProductCartSummarySubTotal(params) {
  try {
    yield put(CartSummarySubtotalRequest());
    yield put(CartSummarySubtotalSuccess(params));
  } catch (e) {
    yield put(CartSummarySubtotalFailure(e));
  }
}
function* ProductCartSummaryTotalAmount(params) {
  try {
    yield put(CartSummaryTotalAmountRequest());
    yield put(CartSummaryTotalAmountSuccess(params));
  } catch (e) {
    yield put(CartSummaryTotalAmountFailure(e));
  }
}
function* deleteToCart(params) {
  // console.log(params, "deleteToCart =============");
  try {
    yield put(DeleteFromCartItemRequest());
    // const data = cartItems?.filter((e) => e !== params);
    yield put(DeleteFromCartItemSuccess(params));
  } catch (e) {
    yield put(DeleteFRomCartItemFailure(e));
  }
}
function* getProductData(params) {
  try {
    yield put(getProductDataRequest());
    yield put(getProductDataSuccess(params));
  } catch (e) {
    yield put(getProductDataFailure(e));
  }
} 

function* getFilteredData(params) {
  try {
    yield put(getFilteredDataRequest());
    yield put(getFilteredDataSuccess(params));
    // yield put (getPrice(params));
  } catch (e) {
    yield put(getFilteredDataFailure(e));
  }
}
function* setOrderSummary(params) {
  try {
    yield put(getOderSummaryRequest());
    yield put(getOderSummarySuccess(params));
  } catch (e) {
    yield put(getOderSummaryFailure(e));
  }
}
function* ProductSaga() {
  yield takeLatest(SHOP_FILTER, setFilterShop);
  yield takeLatest(REMOVE_FILTER, RemoveProductFilter);
  yield takeLatest(PROMO_CODE, CopyPromoCode);
  yield takeLatest(WISHLIST_ITEMS, SetWishlist);
  yield takeLatest(ADD_TO_CART, setAddToCart);
  yield takeLatest(DELETE_CART_PRODUCT, deleteToCart);
  yield takeLatest(CART_QTY, setCartQty);
  yield takeLatest(CHECKEDITEMS, setCheckedItems);
  yield takeLatest(PRODUCT_LIST, setProductList);
  yield takeLatest(PRODUCT_ID, productIdDetail);
  yield takeEvery(VIEW_PRODUCT, viewProductDetails);
  yield takeEvery(ADD_REVIEW, addReviewDetails);
  yield takeEvery(VIEW_REVIEW, productViewReview);
  yield takeEvery(CART_SUBTOTAL_PRICE, ProductCartSummarySubTotal);
  yield takeEvery(CART_TOTAL_AMOUNT_PRICE, ProductCartSummaryTotalAmount);
  yield takeEvery(PRODUCT_DATA, getProductData);
  yield takeEvery(FILTER_OBJECT, getFilteredData);
  yield takeEvery(UPDATE_CART, getUpdatedCart);
  yield takeEvery(ORDER_SUMMARY, setOrderSummary);
}

export default ProductSaga;
