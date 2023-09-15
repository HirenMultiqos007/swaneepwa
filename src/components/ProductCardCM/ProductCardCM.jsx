import React, { useState } from "react";
import { ReactComponent as WishListImage } from "../../assets/images/image.svg";
import { ReactComponent as MyWishlistIcon } from "../../assets/icons/black-wishlist-icon.svg";
import { useNavigate } from "react-router-dom";
import { checkout, productlisting } from "../../config/RoutingConsts";
import { useDispatch } from "react-redux";
import { getOderSummarySuccess } from "../../Redux/Slices/ProductSlice";

const ProductCardCM = ({
  data,
  key,
  Offer,
  mycart,
  categoryId,
  mainCategoryId,
  productDetails,
  productsList,
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = (f) => setHovered(f);
  const navigate = useNavigate();
  const [activeWishList, setActiveWishList] = useState(false);
  const dispatch = useDispatch();
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
  return (
    <>
      <div
        className={`image-box ${hovered === key ? "isActive" : ""}`}
        onMouseEnter={() => toggleHover(key)}
        onMouseLeave={() => toggleHover(-1)}
      >
        <div
          className="product-content"
          // onClick={() => {
          //   productDetails(data?.productName, data?.id);
          // }}
        >
          <div className="image-hover">
            <img
              src={data?.addVariant?.[0]?.productImages?.[0]?.image}
              alt="ProductImagess"
              onClick={() =>
                navigate(`${productlisting}/${data?.categoryId}/${data?.id}`)
              }
            />
          </div>
          <div className="image-content">
            {<h5> {data?.productName} </h5>}
            {/* {productsList && <h6>{data?.productName}</h6>} */}
            {productDetails || productsList && <p>{`${data?.sellerName ? data?.sellerName : "-"}`} </p>}
            {(productDetails || mycart) && <p>{data?.description}</p>}
            {(!Offer || mycart )&& (
              <div className="price">
                Starting from
                <span className="original-price">
                  ₹{data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice}
                </span>
                <span className="seller-price">
                  ₹{data?.addVariant?.[0]?.variantList?.[0]?.mrp}
                </span>
              </div>
            )}
            {Offer && (
              <>
                <button
                  type="submit"
                  className="custom-link"
                  onClick={() => {
                    handleCart(data);
                  }}
                >
                  Shop Now
                </button>
                <button type="submit" className="custom-link">
                  {data?.link}
                </button>
              </>
            )}
          </div>
        </div>
        {!Offer && (
          <div className="hover-icon">
            <div className="gradiant-bg">
              {/* {data?.addVariant?.map((active,index)=> {
                return (
                  <div className="gradiant-bg">
                    <WishListImage
                onClick={(e) => {
                  console.log(e,active)
                }}
              />
              </div>  
                )
              })} */}
              {activeWishList ? (
                <WishListImage

                // onClick={() => {
                //   AddWishList(data?.id)
                // }}
                />
              ) : (
                <MyWishlistIcon
                // onClick={() => {
                //   AddWishList(data?.id)
                // }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCardCM;
