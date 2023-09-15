import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SlickSliderComp from "../../components/SlickSliderComp/SlickSliderComp";
import { ProductListing } from "../../Data/data";
import Button from "../../components/popup/Forms/Button/Button";
import { ReactComponent as IconDelete } from "../../assets/icons/icon-delete.svg";
import ProductImage from "../../assets/images/slide-image1.png";
import PromoCodeModal from "../../components/popup/PromoCodeModal";
import { checkout, home, productlisting } from "../../config/RoutingConsts";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartSuccess,
  incrementCartQuantity,
  decrementCartQuantity,
  addToWishlist,
  DeleteFromCartItemSuccess,
  CartSummarySubtotalSuccess,
  updatedCart,
  CartSummaryTotalAmountSuccess,
  savePromoCode,
  getOderSummarySuccess,
} from "../../Redux/Slices/ProductSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartSummary from "./CartSummary";
import {
  DELETE_CART_PRODUCT,
  PRODUCT_LIST,
  UPDATE_CART,
} from "../../Redux/SagaAction/actions";
import Loader from "../../components/Loader";
import Slider from "react-slick";
import ProductCardCM from "../../components/ProductCardCM/ProductCardCM";

function MyCart() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProduct, setIsproduct] = useState(5);
  const [codeSaved, setCodeSaved] = useState("");
  const [showPromoCode, setShowPromoCode] = useState(false);
  let [totalItem, setTotalItem] = useState(1);
  const [promo, setPromo] = useState(null);
  let [subTotal, setSubTotal] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  let { cartItems, productsList, loading, quantity, PromoCode } = useSelector(
    (state) => state.ProductSlice
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  useEffect(()=> {
    dispatch({type:PRODUCT_LIST })
  },[])

  let handleCartItemsCalled = null;
  // console.log(quantity, "quantity");

  const outOfstock = () => {
    toast.warning("product will be out of stock ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // const incrementCount = (data, qty) => {

  //   if (totalItem < data?.addVariant?.[0]?.variantList?.[0]?.availableQty) {
  //   if (totalItem >=1) {
  //     setTotalItem(data?.qty + 1);
  //     dispatch(incrementCartQuantity(qty +1));
  //   } else {
  //     setTotalItem(1);
  //   }
  //   } else {
  //     outOfstock();

  //   }
  // };

  const incrementCount = (data, qty) => {
    // if(data?.availableQty)
    cartItems = cartItems?.map((product) => {
      if (product?.id === data?.id && product?.sizeId === data?.sizeId) {
        if (qty < data?.availableQty) {
          return {
            ...product,
            qty: qty + 1,
            sellingPrice: (qty + 1) * data?.sellingPrice,
          };
        } else {
          outOfstock();
        }
      }
      return product;
    });
    dispatch(updatedCart(cartItems));
    // console.log("increment", cartItems);
    // dispatch({
    //   type: UPDATE_CART,
    //   payload: {
    //     ...cartItems,

    //     qty: totalItem++,
    //     sellingPrice: totalItem * data?.sellingPrice,
    //   },
    // });
    // dispatch(addToCartSuccess(data))
    // const updatedData=  cartItems?.map((product) => {
    //   if (product?.id === data) {
    //     return {
    //       ...product, qty: totalItem
    //       // dispatch(addToCartSuccess(...product, qty: totalItem))
    //     };
    //   }
    //   return product;
    // //   return product;
    // });

    //  dispatch(addToCartSuccess(updatedData))
    // console.log(updatedData, "--------update data");
  };
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const checkOutFailed = () => {
    toast.warn(`Please select product first`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const decrementCount = (data, qty) => {
    cartItems = cartItems?.map((product) => {
      if (product?.id === data?.id && product?.sizeId === data?.sizeId) {
        if (qty - 1 < data?.availableQty && qty > 1) {
          return {
            ...product,
            qty: qty - 1,
            sellingPrice: (qty - 1) * data?.mrp,
          };
        } else {
          outOfstock();
        }
      }
      return product;
    });
    dispatch(updatedCart(cartItems));

    // if (totalItem < data?.addVariant?.[0]?.variantList?.[0]?.availableQty) {
    //   if (totalItem > 1) {
    //     setTotalItem(totalItem--);
    //     // dispatch(decrementCartQuantity(qty - 1));
    //   } else {
    //     setTotalItem(1);
    //   }
    // } else {
    //   // outOfstock();
    // }
  };
  const handlePromoCode = () => {
    setShowPromoCode(true);
  };

  const handleDelete = (id) => {
    // console.log(id, "For delete Id");
    cartItems = cartItems?.filter((e) => e !== id);
    dispatch(DeleteFromCartItemSuccess(cartItems));
  };
  // useEffect(()=>{

  // },[cartItems])
  const CodeApplied = (code) => {
    if (code) {
      toast.success(`${code} code applied!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.warn(`Please copy code`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // new
  // const handleCartItems = () => {
  //   if (cartItems?.length === 0) {
  //     setSubTotal(0);
  //     setTotalAmount(0);
  // dispatch(CartSummarySubtotalSuccess(0));
  // }
  // setSubTotal(0);
  // setTotalAmount(0);
  // for (const colorVariant of cartItems) {
  //   setSubTotal((subTotal += colorVariant?.sellingPrice));
  //   if (codeSaved) {
  //     setTotalAmount((totalAmount += colorVariant?.sellingPrice) - 6399);
  //   } else {
  //     setTotalAmount((totalAmount += colorVariant?.sellingPrice));
  //   }
  // }
  // };
  //   cartItems?.map((data) => {
  //     setSubTotal(subTotal + data?.sellingPrice);
  //     console.log(subTotal,"subTotal of summary",data?.sellingPrice);
  //     // dispatch(CartSummarySubtotalSuccess(subTotal + data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice));
  //     setTotalAmount(totalAmount + data?.sellingPrice);
  //     if (codeSaved) {
  //       setTotalAmount(totalAmount + data?.sellingPrice - 6399);
  //     }
  // });

  // console.log(subTotal, "subTotal of summary");

  // check this dependency for rendering subTotal and TotalAmount

  // useEffect(() => {
  //   dispatch({
  //     type: PRODUCT_LIST,
  //   });
  //   if (!handleCartItemsCalled) {
  //     handleCartItems();
  //     handleCartItemsCalled = true;
  //   }

  //   return () => {};
  // }, []);
  // ------------- for codeSaved pending------------




  useEffect(() => {
    let subtotal = 0;
    let totalamount = 0;
    if (cartItems?.length !== 0) {
      for (const product of cartItems) {
        // setSubTotal((subtotal += product?.sellingPrice));

        // // if(codeSaved){
        // // setTotalAmount(totalamount += (product?.sellingPrice)-6399);
        // // }
        // // else {
        // setTotalAmount((totalamount += product?.sellingPrice));

        dispatch(
          CartSummarySubtotalSuccess((subtotal += product?.sellingPrice))
        );
        dispatch(
          CartSummaryTotalAmountSuccess((totalamount += product?.sellingPrice))
        );
        // }
        // getSubtotalAndTotalAmount(product);
        // console.log("totalAmount",totalamount );
      }
    } else {
      subtotal = 0;
      totalamount = 0;
      setSubTotal(subtotal);
      setTotalAmount(totalamount);
      dispatch(CartSummarySubtotalSuccess(0));
      dispatch(CartSummaryTotalAmountSuccess(0));
    }
  }, [cartItems]);
  return (
    <>
      {loading && <Loader />}
      <div className="my-cart pb-50">
        <Container>
          <Row>
            <Col xxl="8">
              <div className="title mb-30">My Cart</div>
              <ul className="product-cart-list">
                {cartItems.length !== 0 ? (
                  cartItems?.map((data, key) => {
                    return (
                      <li key={key}>
                        <div className="product-profile-group">
                          {data?.image ? (
                            <img src={data?.image} alt="product-images" />
                          ) : (
                            <img
                              src={data?.productImages?.[0]?.image}
                              alt="product-images"
                            />
                          )}
                          <div className="detail">
                            <h6>{data?.productName}</h6>
                            <p>{data?.description}</p>
                            <p className="text-black">
                              Product id: <span>{data?.id}</span>
                            </p>
                            <div className="flex-box">
                              <p className="text-black">
                                Color :<span> {data?.color} </span>
                              </p>
                              <p className="text-black">
                                Size :<span> {data?.size} </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="product-profile-right">
                          <div className="quantity-group">
                            <button
                              onClick={() => {
                                decrementCount(data, data?.qty);
                              }}
                              className="count min"
                              type="button"
                            ></button>
                            <input type="text" value={data?.qty} />
                            <button
                              onClick={() => {
                                // dispatch(updatedCart({qty :data?.qty, sizeId : data?.sizeId}))
                                incrementCount(data, data?.qty);
                              }}
                              className="count max"
                              type="button"
                            ></button>
                          </div>

                          <div className="price">
                            <span className="original-price">
                              ₹ {formatNumber(data?.sellingPrice)}
                            </span>
                          </div>

                          <div className="delete">
                            <IconDelete
                              onClick={() => {
                                handleDelete(data);
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <p className="text-center">This cart is empty</p>
                )}
              </ul>
            </Col>
            <Col xxl="4">
              <div className="table-content">
                <div className="title-wraper">
                  <div className="table-title">Promo Code</div>
                  <span className="text-red" onClick={handlePromoCode}>
                    View All
                  </span>
                  <PromoCodeModal
                    showPromoCode={showPromoCode}
                    setShowPromoCode={setShowPromoCode}
                    codeSaved={codeSaved}
                    setCodeSaved={setCodeSaved}
                  />
                </div>
                <div className="content-wrapper">
                  <form action="">
                    <div className="input-wrapper m-0">
                      <input
                        type="text"
                        name="fname"
                        className="custom-input"
                        placeholder="Have a Promo code"
                        value={promo ?? promo}
                      />
                      <Button
                        commonClass="common-btn black-btn m-0"
                        type="button"
                        text={"Apply"}
                        // disabled={promo ? "true" :"false"}
                        onClick={() => {
                          setPromo(PromoCode?.payload?.promoCode);
                          CodeApplied(PromoCode?.payload?.promoCode);
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <CartSummary
                title="Cart Summary"
                codeSaved={codeSaved}
                subTotal={subTotal}
                setSubTotal={setSubTotal}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
              <div className="payment-btn-group">
                <Button
                  commonClass="common-btn m-0"
                  type="button"
                  text={"Proceed To Checkout"}
                  onClick={() =>
                    cartItems.length != 0
                      ? (navigate(checkout),
                        dispatch(getOderSummarySuccess(null)))
                      : checkOutFailed()
                  }
                />
                <Button
                  commonClass="common-btn border-btn m-0"
                  type="button"
                  text={"Continue Shopping"}
                  onClick={() => (
                    navigate(home), dispatch(getOderSummarySuccess(null))
                  )}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {productsList.length!==0 && (
        <div className="trending-products ptb">
          <Container>
            <div className="title-wraper">
              <h2>Trending Products</h2>
              <div
                className="custom-link view-link"
                onClick={() => navigate(`/productlisting/Trending Products`)}
              >{`${t("button.viewbtn")}`}</div>
            </div>
            <div className="custom-slider">
              <Slider  {...settings}
                slidesToShow={
                  productsList?.length > 4 ? 4 : productsList?.length
                }
                slidesToScroll={
                  productsList?.length > 4 ? 4 : productsList?.length
                }>
                   {productsList?.map((list, index) => {
                  return <ProductCardCM data={list} mycart />;
                })}
              </Slider>
              {/* <SlickSliderComp
                content={productsList}
                num={5}
              /> */}
            </div>
          </Container>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
export default MyCart;
