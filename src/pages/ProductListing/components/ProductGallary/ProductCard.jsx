import React, { useEffect, useState } from "react";
import OfferLabel from "../OfferLabel/OfferLabel";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as WishListImage } from "../../../../assets/images/image.svg";
import { ReactComponent as MyWishlistIcon } from "../../../../assets/icons/black-wishlist-icon.svg";
import { ReactComponent as CartIcon } from "../../../../assets/icons/black-cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  setProductIdSuccess,
} from "../../../../Redux/Slices/ProductSlice";
import {
  PRODUCT_DATA,
  VIEW_PRODUCT,
  VIEW_REVIEW,
} from "../../../../Redux/SagaAction/actions";

const ProductCard = ({
  data,
  key,
  wishlistItem,
  setWishListItem,
  cart,
  setCart,
  wishlist,
  AddedToCart,
  existToCart,
  existToWishlist,
  AddedToWishlist,
  OfferHome,
  detail,
  homePage,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let [subTotal, setSubTotal] = useState(0);
  // let [totalAmount, setTotalAmount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const toggleHover = (f) => setHovered(f);
  // const [wishlistItem, setWishListItem] = useState([]);
  const [wished, setWished] = useState(false);
  // const {id} = useParams()
  let { wishlistItems, viewProduct, ProductDetailsData } = useSelector(
    (state) => state.ProductSlice
  );
  // const { cartItems } = useSelector((state) => state.ProductSlice);

  const handleWishlist = (data) => {
    const checkWish = wishlistItems?.some((i) => {
      return i?.id === data?.id;
    });
    let wishItem
    if (!checkWish) {
          wishItem = {
          id: data?.id,
          addVariant: [
            {
              productSku: data?.addVariant?.[0]?.productSku,
              color: data?.addVariant?.[0]?.color,
              colorId: data?.addVariant?.[0]?.colorId,
              productImages:
                data?.addVariant?.[0]?.productImages,
              variantList: [
                {
                  PLength:
                    data?.addVariant?.[0]?.variantList?.[0]
                      ?.PLength,
                  mrp: data?.addVariant?.[0]?.variantList?.[0]
                    ?.mrp,
                  sellingPrice:
                    data?.addVariant?.[0]?.variantList?.[0]
                      ?.sellingPrice,
                  size: data?.addVariant?.[0]?.variantList?.[0]
                    ?.size,
                  sizeId:
                    data?.addVariant?.[0]?.variantList?.[0]
                      ?.sizeId,
                  availableQty:
                    data?.addVariant?.[0]?.variantList?.[0]
                      ?.availableQty,
                },
              ],
            },
          ],
          categoryId: data?.categoryId,
          categoryName: data?.categoryName,
          countryId: data?.countryId,
          description: data?.description,
          gst: data?.gst,
          mainCategoryId: data?.mainCategoryId,
          mainCategoryName: data?.mainCategoryName,
          materialId: data?.materialId,
          materialName: data?.materialName,
          productName: data?.productName,
          productWeight: data?.productWeight,
          type: data?.type,
          status: data?.status,
          sellerName: data?.sellerName,
        };
        console.log("data wish",wishlistItem);
      // }
      setWishListItem((wishlistItem) => [...wishlistItem, wishItem]);
      dispatch(addToWishlist([...wishlistItem, wishItem]));
      AddedToWishlist(data?.productName);
    } else {
      // existToWishlist(data?.productName);
      return {};
    }
  



      // let wishItem;
      // if (wishlistItems?.length === 0) {
      
      //   wishItem = {
      //     id: data?.id,
      //     addVariant: [
      //       {
      //         productSku: data?.addVariant?.[0]?.productSku,
      //         color: data?.addVariant?.[0]?.color,
      //         colorId: data?.addVariant?.[0]?.colorId,
      //         productImages:
      //           data?.addVariant?.[0]?.productImages,
      //         variantList: [
      //           {
      //             PLength:
      //               data?.addVariant?.[0]?.variantList?.[0]
      //                 ?.PLength,
      //             mrp: data?.addVariant?.[0]?.variantList?.[0]
      //               ?.mrp,
      //             sellingPrice:
      //               data?.addVariant?.[0]?.variantList?.[0]
      //                 ?.sellingPrice,
      //             size: data?.addVariant?.[0]?.variantList?.[0]
      //               ?.size,
      //             sizeId:
      //               data?.addVariant?.[0]?.variantList?.[0]
      //                 ?.sizeId,
      //             availableQty:
      //               data?.addVariant?.[0]?.variantList?.[0]
      //                 ?.availableQty,
      //           },
      //         ],
      //       },
      //     ],
      //     categoryId: data?.categoryId,
      //     categoryName: data?.categoryName,
      //     countryId: data?.countryId,
      //     description: data?.description,
      //     gst: data?.gst,
      //     mainCategoryId: data?.mainCategoryId,
      //     mainCategoryName: data?.mainCategoryName,
      //     materialId: data?.materialId,
      //     materialName: data?.materialName,
      //     productName: data?.productName,
      //     productWeight: data?.productWeight,
      //     type: data?.type,
      //     status: data?.status,
      //     sellerName: data?.sellerName,
      //   };
      //   dispatch(addToWishlist([wishItem]));
      //   AddedToWishlist(data?.productName);
      //   setWished(true);
      // }
    //  else{

    // let wishItem;
    // let checkWish = wishlistItems?.some((i) => {
      // return i?.sizeId === size && i?.id === data?.id;
    //   return i?.id !== data?.id;
    // });

    // console.log("checkWish wishlist",checkWish);
    // if (!checkWish) {
    //   dispatch(addToWishlist([...wishlistItems, data]));
    //   AddedToWishlist(data?.productName);
    // } else {
    //   return {};
    // }

    // -----------work  (pre set for [0]----------
    // const checkWish = false
    // data?.map((i) => {

    // wishlistItems?.some((i) => {
    //   return i?.addVariant?.map((j) => {
    //     return j?.variantList?.map((k) => {
    //       data?.addVariant?.map((list) => {
    //         list?.variantList?.map((variant) => {
    //           if (!checkWish) {
    //             wishItem = {
    //               id: data?.id,
    //               addVariant: [
    //                 {
    //                   productSku: list?.productSku,
    //                   color: list?.color,
    //                   colorId: list?.colorId,
    //                   productImages: list?.productImages,
    //                   variantList: [
    //                     {
    //                       PLength: variant?.PLength,
    //                       mrp: variant?.mrp,
    //                       sellingPrice: variant?.sellingPrice,
    //                       size: variant?.size,
    //                       sizeId: variant?.sizeId,
    //                       availableQty: variant?.availableQty,
    //                     },
    //                   ],
    //                 },
    //               ],
    //               categoryId: data?.categoryId,
    //               categoryName: data?.categoryName,
    //               countryId: data?.countryId,
    //               description: data?.description,
    //               gst: data?.gst,
    //               mainCategoryId: data?.mainCategoryId,
    //               mainCategoryName: data?.mainCategoryName,
    //               materialId: data?.materialId,
    //               materialName: data?.materialName,
    //               productName: data?.productName,
    //               productWeight: data?.productWeight,
    //               type: data?.type,
    //               status: data?.status,
    //               sellerName: data?.sellerName,
    //             };
    //             dispatch(addToWishlist([...wishlistItems, wishItem]));
    //             // AddedToWishlist(data?.productName);
    //             setWished(true);
    //           }
    //         });
    //       });

    //       //----- not needed
    //       // else {
    //       //   dispatch(addToWishlist([...wishlistItems, data]));
    //       //   return false;
    //       // }
    //       setWishListItem((wishlistItem) => [...wishlistItem, wishItem]);
    //       dispatch(addToWishlist([...wishlistItem, wishItem]));
    //       AddedToWishlist(data?.productName);
    //     });
    //   });
    // });
    // }
    // else {
    //   // existToWishlist(data?.productName);
    //   return {};
    // }
  // }
  };
  const formatNumber = (num) => {
    return num?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const productDetails = (productName, id) => {
    try {
      dispatch(setProductIdSuccess(id));
      dispatch({ type: VIEW_PRODUCT, payload: id });
      // dispatch({ type: PRODUCT_DATA});
      // dispatch({
      //   type: VIEW_REVIEW,
      //   payload: { productId: viewProduct?.id },
      // });
      viewProduct && navigate(`/productdetail/${id}`);
    } catch (err) {
      console.log("error", err);
    }
  };
  // const handleCart = (data) => {
  //   const checkCart = cartItems?.some((i) => {
  //     return i?.id === data?.id;
  //   });
  //   if (!checkCart) {
  //     setCart((cart) => [...cart, data]);
  //     setCart((cartItems) =>
  //       cartItems?.map((element) => ({
  //         ...element,
  //         qty: 1,
  //       }))
  //     );
  //     dispatch(addToCart([...cart, data]));
  //     // dispatch()
  //     console.log("mrp",data);
  //     AddedToCart(data?.productName);
  //   } else {
  //     existToCart(data?.productName);
  //     return {};
  //   }
  // };

  const maxLength = 80;
  const shortenedText =
    data?.description?.length > maxLength
      ? data?.description?.substring(0, maxLength - 3) + "..."
      : data?.description;

  useEffect(() => {
    wishlistItems?.map((index) => {
      return index?.id == data?.id && setWished(true);
    });
  }, [wishlistItems, data?.id]);

  return (
    <>
      <div
        className={`image-box ${hovered === key ? "isActive" : ""}`}
        onMouseEnter={() => toggleHover(key)}
        onMouseLeave={() => toggleHover(-1)}
        key={key}
      >
        <div
          className="product-content"
          onClick={() => {
            productDetails(data?.productName, data?.id);
          }}
        >
          <div className="image-hover">
            {detail ? (
              <img src={data?.image} alt="ProductImage" />
            ) : (
              <img
                src={data?.addVariant?.[0]?.productImages?.[0]?.image}
                alt="ProductImagess"
              />
            )}
            {/* {data?.addVariant?.map((image, i) => {
              return image?.color === "Red" ? (
                <img
                  src={image?.productImages?.[0]?.image}
                  alt="ProductImage"
                  key={i}
                />
              ) : (

                <img
                  src={image?.productImages?.[0]?.image}
                  alt="ProductImage"
                  key={i}
                />
            
              );
            })} */}
          </div>

          {!detail && (
            <div className="image-content">
              <h6>{data?.productName}</h6>
              <p>{`${data?.sellerName ? data?.sellerName : "-"}`} </p>
              {wishlist ? (
                <div className="price">
                  Starting from
                  <span className="original-price">
                    ₹
                    {formatNumber(
                      data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice
                    )}
                  </span>
                  <span className="seller-price">
                    ₹ {formatNumber(data?.addVariant?.[0]?.variantList?.[0]?.mrp)}
                  </span>
                </div>
              ) : (
                <div className="price">
                  Starting from
                  <span className="original-price">
                    ₹{" "}
                    {formatNumber(
                      data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice
                    )}
                  </span>
                  {/* <span className="seller-price">
                  ₹{data?.addVariant?.[0]?.variantList?.[0]?.mrp}
                </span> */}
                </div>
              )}
              {data?.discountPrice && (
                <OfferLabel offer={data?.discountPrice} />
              )}
            </div>
          )}
        </div>
        {/* {!wishlist && ( */}
        <div className="hover-icon">
          <div className="gradiant-bg">
            {!wished ? (
              <MyWishlistIcon
                onClick={() => {
              
                  handleWishlist(data);
                }}
              />
            ) : (
              <WishListImage
                onClick={() => {
                  handleWishlist(data);
                }}
              />
            )}
          </div>
        </div>
        {/*  )} */}
      </div>
    </>

    // <div
    // className={`image-box ${hovered === key ? "isActive" : ""}`}
    // onMouseEnter={() => toggleHover(key)}
    // onMouseLeave={() => toggleHover(-1)}
    // key={key}
    // >
    // <div
    //   className="product-content"
    //   onClick={() => {
    //     navigate(`/productdetail/${data?.id}`);
    //   }}
    // >
    //   <div className="image-hover">
    //     <img src={data?.photo} alt="ProductImage" />
    //   </div>
    //   <div className="image-content">
    //     <h6>{data?.productName}</h6>
    //     <p>{data?.description}</p>
    //     <div className="price">
    //       <span className="original-price">₹ {data?.price}</span>
    //       <span className="seller-price">₹ {data?.sellerPrice}</span>
    //     </div>
    //     <OfferLabel offer={data?.discountPrice} />
    //   </div>
    // </div>
    // {!wishlist && (
    //   <div className="hover-icon">
    //     <div className="gradiant-bg">
    //       {/* {wishlistItems?.map((i) => {
    //         if (i?.id === data?.id) {
    //           setWished(true);
    //         }
    //       })} */}
    //       {!wished ? (
    //         <img
    //           src={data?.wishIcon}
    //           alt="WishListIcon"
    //           onClick={() => handleWishlist(data)}
    //         />
    //       ) : (
    //         <WishListImage onClick={() => handleWishlist(data)} />
    //       )}
    //     </div>
    //     <div className="gradiant-bg">
    //       <img
    //         src={data?.cartIcon}
    //         alt="CartIcon"
    //         onClick={() => handleCart(data)}
    //       />
    //     </div>
    //   </div>
    // )}
    // </div>
  );
};

export default ProductCard;
