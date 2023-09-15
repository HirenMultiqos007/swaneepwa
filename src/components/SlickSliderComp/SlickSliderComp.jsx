/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Slider from "react-slick";
import ProductGallary from "../../pages/ProductListing/components/ProductGallary/ProductGallary";
import ProductCard from "../../pages/ProductListing/components/ProductGallary/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  addToWishlist,
  setProductIdSuccess,
} from "../../Redux/Slices/ProductSlice";
import {
  PRODUCT_DATA,
  VIEW_PRODUCT,
  VIEW_REVIEW,
} from "../../Redux/SagaAction/actions";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { checkout } from "../../config/RoutingConsts";
import { getOderSummarySuccess } from "../../Redux/Slices/ProductSlice";
const SlickSliderComp = ({
  content,
  offerData,
  num,
  isProduct,
  homePage,
  shop,
  button,
  detail,
  navigation,
}) => {
  const dispatch = useDispatch();
  console.log(content,"HHHHHHHHH")
  const navigate = useNavigate();
  let { wishlistItems, viewProduct } = useSelector(
    (state) => state.ProductSlice
  );

  const [wishlistItem, setWishListItem] = useState(wishlistItems);

  // console.log("wiesh list",wishlistItem)
  const existToWishlist = (title) => {
    toast.warn(`${title} already added to wishlist!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const AddedToWishlist = (title) => {
    toast.success(`${title} added to Wishlist!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleDetail = (productName, id) => {
    try {
      dispatch(setProductIdSuccess(id));
      dispatch({ type: VIEW_PRODUCT, payload: id });
      // dispatch({ type: PRODUCT_DATA});
      // dispatch({
      //   type: VIEW_REVIEW,
      //   payload: { productId: id },
      // });
      viewProduct && navigate(`/productdetail/${id}`);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleCart = (data) => {
    let cart = null;
    cart = {
      id: data?.id,
      productName: data?.productName,
      description: data?.description,
      color: data?.addVariant?.[0]?.color,
      colorId: data?.addVariant?.[0]?.colorId,
      productImages: data?.addVariant?.[0]?.productImages,
      productSku: data?.addVariant?.[0]?.productSku,
      // variantList:s,
      size: data?.addVariant?.[0]?.variantList?.[0]?.size,
      sellingPrice: data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice,
      qty: 1,
      sizeId: data?.addVariant?.[0]?.variantList?.[0]?.sizeId,
      availableQty: data?.addVariant?.[0]?.variantList?.[0]?.availableQty,
      PLength: data?.addVariant?.[0]?.variantList?.[0]?.PLength,
      mrp: data?.addVariant?.[0]?.variantList?.[0]?.mrp,
      _id: data?.addVariant?.[0]?.variantList?.[0]?._id,
      orderSummary: true,
    };
    dispatch(getOderSummarySuccess(cart));
    return navigate(checkout);
  };
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: num,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  if (isProduct) {
    return (
      <>
        <Slider {...settings}>
          {content?.map((data, key) => {
            return (
              <>
                <ProductCard
                  data={data}
                  key={key}
                  wishlistItem={wishlistItem}
                  setWishListItem={setWishListItem}
                  // cart={cart}
                  // setCart={setCart}
                  // AddedToCart={AddedToCart}
                  // existToCart={existToCart}
                  existToWishlist={existToWishlist}
                  AddedToWishlist={AddedToWishlist}
                />
              </>
            );
          })}
        </Slider>

        {/* <Slider {...settings}>
          <Row>
          {content.map((sc, i) => {
            return (
              <Col lg="3">
              <div className="image-box" key={i}>
                <div className="image-hover">
                  <img src={sc?.photo} alt="image" />
                </div>
                <div className="image-content">
                  <h5>{sc?.title}</h5>
                  <button type="submit" className="custom-link">
                    {sc.link}
                  </button>
                  <p>{sc?.description}</p>
                </div>
                {sc?.label === "new" && (
                  <div className="offer-label">{sc?.label}</div>
                )}
              </div>
              </Col>
            );
          })}
          </Row>
        </Slider> */}

        <ToastContainer />
      </>
    );
  } else if (detail) {
    return (
      <>
        <Slider {...settings}>
          {content?.map((data, key) => {
            return (
              <>
                <ProductCard
                  data={data}
                  key={key}
                  detail={detail}
                  homePage={homePage}
                  wishlistItem={wishlistItem}
                  setWishListItem={setWishListItem}
                  // cart={cart}
                  // setCart={setCart}
                  // AddedToCart={AddedToCart}
                  // existToCart={existToCart}
                  existToWishlist={existToWishlist}
                  AddedToWishlist={AddedToWishlist}
                />
              </>
            );
          })}
        </Slider>
        <ToastContainer />
      </>
    );
  } else {
    return (
      <>
        <Slider {...settings}>
          {content?.map((sc, key) => {
            console.log(content,"content")
            return (
              <div className="image-box" key={key}>
                <div className="image-hover">
                  {sc?.addVariant?.[0]?.productImages?.[0]?.image ? (
                    <img
                      src={sc?.addVariant?.[0]?.productImages?.[0]?.image}
                      alt="product-images"
                      // onClick={() => {
                      //   navigation &&
                      //     navigate(`productlisting/${sc?.categoryName}`);
                      // }}
                      onClick={() => {
                        navigation && dispatch(setProductIdSuccess(sc?.id));
                        dispatch({ type: VIEW_PRODUCT, payload: sc?.id });
                        navigate(`/productdetail/${sc?.id}`);
                      }}
                    />
                  ) : (
                    <img
                      src={sc?.addVariant?.[0]?.image}
                      alt={sc?.productName}
                      onClick={() => {
                        navigation &&
                          navigate(`productlisting/${sc?.productName}`, {
                            state: sc?.productName,
                          });
                      }}
                    />
                  )}
               
                </div>
                <div className="image-content">
                  <h5>{sc?.productName}</h5>
                  {shop && (
                    <button
                      type="submit"
                      className="custom-link"
                      onClick={() => {
                        handleCart(sc);
                        // handleDetail(sc?.productName, sc?.id);
                      }}
                    >
                      Shop Now
                    </button>
                  )}
                  {button && (
                    <button type="submit" className="custom-link">
                      {sc?.link}
                    </button>
                  )}
                  {!homePage && <p>{sc?.description}</p>}
                </div>
                {sc?.label === "new" && (
                  <div className="offer-label">{sc?.label}</div>
                )}
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
};
export default SlickSliderComp;
