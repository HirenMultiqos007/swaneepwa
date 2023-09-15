import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SlickSliderComp from "../../../../components/SlickSliderComp/SlickSliderComp";
import { checkout, productlisting } from "../../../../config/RoutingConsts";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getOderSummarySuccess,
  productListing,
} from "../../../../Redux/Slices/ProductSlice";
import { PRODUCT_LIST } from "../../../../Redux/SagaAction/actions";
import { offer } from "../../../../Data/data";
import Slider from "react-slick";
import ProductCardCM from "../../../../components/ProductCardCM/ProductCardCM";
export const Offer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productsList } = useSelector((e) => e.ProductSlice);
  const { mainData, specificAPIParams } = useSelector(
    (e) => e.GetCategorySlice
  );

  console.log(productsList, "productsList");
  const dispatch = useDispatch();
  const { title } = useLocation();
  console.log(title, "9999999999");
  // const [DataLimit, setDataLimit] = useState(10);
  const [curentPage, setCurentPage] = useState(1);
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
  useEffect(() => {
    if (specificAPIParams) {
      dispatch({
        type: PRODUCT_LIST,
        payload: { mainCategoryId: specificAPIParams },
      });
    }
  }, [specificAPIParams]);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1500,
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

  return (
    <div className="offer ptb">
      <Container>
        <div className="title-wraper">
          <h2>{`${t("homepage.offersfromdiscount.title")}`}</h2>
          <div
            className="custom-link view-link"
            onClick={() => {
              navigate(productlisting, { state: "ALL" });
            }}
          >{`${t("button.viewbtn")}`}</div>
        </div>
        <div>
          {productsList?.length === 0 && (
            <p className="no-data-found"> No data found</p>
          )}
          {[...productsList,...productsList]?.length <= 4 && (
            <div className="product-gallary-list">
              {productsList?.map((data, key) => {
                console.log(data, "dataaaaaaaaaa");
                return <ProductCardCM data={data} Offer />;
              })}
            </div>
          )}
          {[...productsList,...productsList]?.length > 4 && 
          <div className="custom-slider">
            <Slider
              {...settings}
              // slidesToShow={productsList?.length > 4 ? 4 : productsList?.length}
              // slidesToScroll={
              //   productsList?.length > 4 ? 4 : productsList?.length
              // }
            >
                {[...productsList,...productsList]?.map((list, index) => {
                  console.log(list, "list");
                  return <ProductCardCM data={list} Offer />;
                })}
            </Slider>
          </div>
          
          
          }
        </div>
      </Container>
    </div>
  );
};
