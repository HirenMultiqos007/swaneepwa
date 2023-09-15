import { createSlice, current } from "@reduxjs/toolkit";
import { USER_LOGOUT } from "../SagaAction/actions";
import Swal from "sweetalert2";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    filter: [],
    promoCode: null,
    wishlistItems: [],
    cartItems: [],
    cartItemQty: 1,
    checkedItems: [],
    productsList: [],
    viewProduct: [],
    productId: "",
    ViewReview: [],
    AddReview: [],
    loading: false,
    ProductlistLoading: false,
    ProductDetailLoading: false,
    reviewLoading: false,
    quantity: 1,
    SubTotal: null,
    TotalAmount: null,
    ProductDetailsData: [],
    OrderProducts:null,
    filterSelection: {
      category: [],
      designer: [],
      size: [],
      color: [],
      price: [],
      discount: [],
      shippingtime: [],
    },
  },

  reducers: {
    setShopFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
    removeShopFilter(state, action, filter, updatedFilter) {
      const remainingFilter = filter.filter(
        (item) => filter.item !== action.payload
        // filter.filter(a => a.id !== filter.id)
      );
      return {
        ...state,
        filter: filter.splice(filter, remainingFilter),
      };
    },
    savePromoCode(state, action) {
      return {
        ...state,
        promoCode: action.payload,
      };
    },
    addToWishlist(state, action) {
      return {
        ...state,
        wishlistItems: action.payload,
      };
    },

    incrementCartQuantity(state, action) {
      return {
        ...state,
        cartItemQty: action.payload,
      };
    },
    decrementCartQuantity(state, action) {
      return {
        ...state,
        cartItemQty: action.payload,
      };
    },
    checkItem(state, action) {
      return {
        ...state,
        checkedItems: action.payload,
      };
    },
    removeCheckItem(state, action, checkedItems, updatedFilter) {
      const remainingFilter = checkedItems?.filter(
        (item) => checkedItems?.item !== action.payload
      );
      return {
        ...state,
        checkedItems: checkedItems?.splice(checkedItems, remainingFilter),
      };
    },
    // productListing(state, action) {
    //   return {
    //     ...state,
    //     productsList: action.payload,
    //   };
    // },
    setProductIdRequest(state, action) {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    setProductIdSuccess(state, action) {
      return {
        ...state,
        productId: action.payload,
        loading: false,
      };
    },
    setProductIdFailure(state, action) {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
    setProductListRequest(state) {
      return { ...state, error: null, ProductlistLoading: true };
    },
    setProductListSuccess(state, action) {
      return {
        ...state,
        productsList: action.payload.data,
        ProductlistLoading: false,
      };
    },
    setProductListFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action?.payload?.message,
      });
      return {
        ...state,
        error: action.payload,
        ProductlistLoading: false,
      };
    },
    viewProductRequest(state) {
      return { ...state, error: null, ProductDetailLoading: true };
    },
    viewProductSuccess(state, action) {
      return {
        ...state,
        viewProduct: action.payload,
        ProductDetailLoading: false,
      };
    },
    viewProductFailure(state, action) {
      return {
        ...state,
        error: action.payload,
        ProductDetailLoading: false,
      };
    },
    addProductReviewRequest(state) {
      return { ...state, reviewLoading: true };
    },
    addProductReviewSuccess(state, action) {
      return {
        ...state,
        AddReview: action.payload,
        reviewLoading: false,
      };
    },
    addProductReviewFailure(state) {
      return {
        ...state,
        reviewLoading: false,
      };
    },
    viewProductReviewRequest(state) {
      return { ...state, reviewLoading: true };
    },
    viewProductReviewSuccess(state, action) {
      return {
        ...state,
        ViewReview: action.payload,
        reviewLoading: false,
      };
    },
    viewProductReviewFailure(state) {
      return {
        ...state,
        reviewLoading: false,
      };
    },
    CartSummarySubtotalRequest(state) {
      return { ...state, loading: true };
    },
    CartSummarySubtotalSuccess(state, action) {
      return {
        ...state,
        SubTotal: action.payload,
        loading: false,
      };
    },
    CartSummarySubtotalFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
    CartSummaryTotalAmountRequest(state) {
      return { ...state, loading: true };
    },
    CartSummaryTotalAmountSuccess(state, action) {
      return {
        ...state,
        TotalAmount: action.payload,
        loading: false,
      };
    },
    CartSummaryTotalAmountFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
    addToCartRequest(state, action) {
      return { ...state, loading: true };
    },
    addToCartSuccess(state, action) {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
    updatedCart(state, action) {
      // console.log(action?.payload, "HIREN");
      return {
        ...state,
        cartItems: action?.payload,
      };
      // cartItems?.map((product) => {
      //   return {
      //   cartItems: state?.cartItems?.map((product) => {
      // if (
      //   product?.colorVariantList?.variantList?.[0]?.sizeId ===
      //   action?.payload?.sizeId
      // ) {
      //   return {
      //     quantity: state?.quantity + action?.payload?.qty,
      //     // qty: state?.quantity + action?.payload?.qty,
      //   };
      // }
      // return product;
      //   })
      // }

      // return{
      //   ...state,
      //   quantity : state?.quantity + action?.payload
      //   // cartItems:action?.payload?.payload
      //   // cartItems:[...cartItems,action?.payload?.payload],
      // }
      // const updatedProducts = state.products.map((product) => {
      //   if (product.id === action.payload.productId) {
      //     return { ...product, qty: action.payload.newQty };
      //   }
      //   return product;
      // });

      // return { ...state, products: updatedProducts };
    },
    addToCartFailure(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
    DeleteFromCartItemRequest(state) {
      return { ...state, loading: true };
    },
    DeleteFromCartItemSuccess(state, action) {
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };
    },
    DeleteFRomCartItemFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
    getProductDataRequest(state) {
      return { ...state, loading: true };
    },
    getProductDataSuccess(state, action) {
      return {
        ...state,
        ProductDetailsData: action.payload.payload,
        loading: false,
      };
    },
    getProductDataFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },

    // new filter data
    getFilteredDataRequest(state, action) {
      return {
        ...state,
        loading: false,
      };
    },

    // working
    getFilteredDataSuccess(state, action) {
      let exact = current(state?.filterSelection);
      // console.log(
      //   {
      //     ...state,
      //     filterSelection: {
      //       ...exact,

      //       [action?.payload?.title]: [
      //         ...exact?.[action?.payload?.title],
      //         action?.payload?.select,
      //       ],
      //     },
      //   },
      //   "HELLO"
      // );
      return {
        ...state,
        filterSelection: {
          ...exact,
          [action?.payload?.title]: [
            ...exact?.[action?.payload?.title],
            action?.payload?.select,
          ],
        },
      };
    },
    removeFilteredData(state, action) {
      let exact = current(state?.filterSelection);
      return {
        ...state,
        filterSelection: {
          ...exact,
          [action?.payload?.name]: [
            ...exact?.[action?.payload?.name].filter(
              (e) => e !== action.payload?.value
            ),
          ],
        },
      };
    },
    getPrice(state, action) {
      return {
        ...state,
        filterSelection: {
          ...state?.filterSelection,
          price: [
            "₹ " + action.payload[0] + " " + "-" + " ₹ " + action.payload[1],
          ],
        },
      };
    },
    removeAllfilter(state) {
      return {
        ...state,
        filterSelection: {
          category: [],
          designer: [],
          size: [],
          color: [],
          price: [],
          discount: [],
          shippingtime: [],
        },
      };
    },
    getFilteredDataFailure(state, action) {
      return {
        ...state,
        loading: false,
      };
    },

    getOderSummaryRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getOderSummarySuccess(state, action) {
      // console.log("action.payload of order",action?.payload);
      return {
        ...state,
        loading: false,
        OrderProducts:action?.payload
      };
    },
    getOderSummaryFailure(state) {
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
        filter: [],
        promoCode: null,
        wishlistItems: [],
        cartItems: [],
        cartItemQty: 1,
        checkedItems: [],
        productsList: [],
        viewProduct: [],
        productId: "",
        ViewReview: [],
        AddReview: [],
        loading: false,
        SubTotal: null,
        TotalAmount: null,
        ProductDetailsData: [],
        filterSelection: {
          category: [],
          designer: [],
          size: [],
          price: [],
          color: [],
          discount: [],
          shippingtime: [],
        },
      };
    });
  },
});

export const {
  setShopFilter,
  removeShopFilter,
  savePromoCode,
  addToWishlist,
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  updatedCart,
  DeleteFromCartItemRequest,
  DeleteFromCartItemSuccess,
  DeleteFRomCartItemFailure,
  incrementCartQuantity,
  decrementCartQuantity,
  checkItem,
  productListing,
  setProductListFailure,
  setProductListSuccess,
  setProductListRequest,
  viewProductRequest,
  viewProductSuccess,
  viewProductFailure,
  setProductIdRequest,
  setProductIdSuccess,
  setProductIdFailure,
  addProductReviewRequest,
  addProductReviewSuccess,
  addProductReviewFailure,
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
  removeAllfilter,
  getPrice,
  removeFilteredData,
  getOderSummaryRequest,getOderSummarySuccess,getOderSummaryFailure
} = ProductSlice.actions;
export default ProductSlice.reducer;
