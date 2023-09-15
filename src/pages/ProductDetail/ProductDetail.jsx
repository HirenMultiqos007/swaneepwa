import React, { useEffect, useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ProductListing } from "../../Data/data";
import SlickSliderComp from "../../components/SlickSliderComp/SlickSliderComp";
import Specification from "./Specification/Specification";
import Information from "./AdditionalInformation/Information";
import Disclaimer from "./Disclaimer/Disclaimer";
import Reviews from "./ProductReviews/Reviews";
import ProductZoom from "./ProductZoom/ProductZoom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_LIST,
  VIEW_PRODUCT,
  VIEW_REVIEW,
} from "../../Redux/SagaAction/actions";
import Loader from "../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import ProductCardCM from "../../components/ProductCardCM/ProductCardCM";

const ProductDetail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const { title: CategoryId, productId: mainCatalogId } = useParams();
  console.log(CategoryId, mainCatalogId, "JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ");

  let {
    productsList,
    viewProduct,
    ProductlistLoading,
    ProductDetailLoading,
    reviewLoading,
    loading,
    productId,
  } = useSelector((state) => state.ProductSlice);

  useEffect(() => {
    if (mainCatalogId) {
      dispatch({
        type: VIEW_PRODUCT,
        payload: mainCatalogId,
        callback: (e) => {
          setViewId(e?.addVariant?.[0]?._id);
          setViewSizeId(e?.addVariant?.[0]?.variantList?.[0]?.sizeId);
        },
      });
      dispatch({ type: PRODUCT_LIST, payload: { categoryId: CategoryId } });
    }
  }, [mainCatalogId]);

  console.log(productsList, "ABC");

  const [viewId, setViewId] = useState(null);
  const [viewSizeId, setViewSizeId] = useState(null);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
           slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };

  const AddedToCart = (title) => {
    toast.success(`${title} product Added to cart !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const existToCart = (title) => {
    toast.warn(`${title} already added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const CodeCopied = (code) => {
    toast.success(`${code} code copied !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const existCode = () => {
    toast.warn(`please copy again`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const AddedToWishlist = (title) => {
    toast.success(`${title} added to Wishlist!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // useEffect(() => {
  //   setColor(viewProduct?.addVariant?.[0]?.colorId);
  //   setSize(viewProduct?.addVariant?.[0]?.variantList?.[0]?.sizeId);
  //   // dispatch({
  //   //   type: VIEW_REVIEW,
  //   //   payload: { productId: CategoryId },
  //   // });
  //   // dispatch({
  //   //   type: PRODUCT_LIST,
  //   // });
  // }, [productId, viewProduct]);

  return (
    <>
      {(ProductlistLoading || reviewLoading || ProductDetailLoading) && (
        <Loader />
      )}
      <div className="pb-50">
        {viewProduct && (
          <ProductZoom
            viewId={viewId}
            setViewId={setViewId}
            viewSizeId={viewSizeId}
            setViewSizeId={setViewSizeId}
            viewProduct={viewProduct}
            AddedToCart={AddedToCart}
            existToCart={existToCart}
            CodeCopied={CodeCopied}
            existCode={existCode}
            AddedToWishlist={AddedToWishlist}
            setColor={setColor}
            setSize={setSize}
            color={color}
            size={size}
          />
        )}
      </div>
      <div className="product-features ptb">
        <Container>
          <Tabs defaultActiveKey="specifications" id="noanim-tab-example">
            <Tab eventKey="specifications" title="Specifications">
              <Specification />
            </Tab>
            {/* <Tab
              eventKey="additionalinformation"
              title="Additional Information"
            >
              <Information/>
            </Tab> */}
            {/* <Tab eventKey="disclaimer" title="Disclaimer">
              <Disclaimer/>
            </Tab> */}
            <Tab eventKey="reviews" title="Reviews">
              <Reviews />
            </Tab>
          </Tabs>
        </Container>
      </div>
      {productsList?.length !== 0 && (
        <div className="similar-product ptb">
          <Container>
            <div className="title-wraper">
              <h2>Similar Products</h2>
              <div
                className="custom-link view-link"
                onClick={() => navigate(`/productlisting/Similar Products`)}
              >{`${t("button.viewbtn")}`}</div>
            </div>
            <div className="custom-slider">
              <Slider
                {...settings}
                slidesToShow={
                  productsList?.length > 4 ? 4 : productsList?.length
                }
                slidesToScroll={
                  productsList?.length > 4 ? 4 : productsList?.length
                }
              >
                {productsList?.map((list, index) => {
                  return <ProductCardCM data={list} productDetails />;
                })}
                {/* <ProductCard
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
                              /> */}
              </Slider>
              {/* <SlickSliderComp content={productsList} num={5} isProduct={5} /> */}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
