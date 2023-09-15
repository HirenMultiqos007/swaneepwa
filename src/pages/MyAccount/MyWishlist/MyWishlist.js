import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import ProductCard from "../../ProductListing/components/ProductGallary/ProductCard";
import Pagination from "../../../components/Pagination/Pagination";
import { ProductListing } from "../../../Data/data";
import { useCallback } from "react";
import { useState } from "react";
import { addToWishlist } from "../../../Redux/Slices/ProductSlice";
import Loader from "../../../components/Loader";

const MyWishlist = () => {
  const { t } = useTranslation();
  const [wishlistItem, setWishListItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const { loading, wishlistItems } = useSelector((state) => state.ProductSlice);

  const handleChangePage = useCallback(
    (currentPage) => {
      setCurentPage(curentPage);
    },
    [curentPage]
  );
  let totalcount = wishlistItems?.length;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="table-content">
            <div className="title-wraper">
              <div className="table-title">{`${t(
                "myaccount.wishlist.title"
              )}`}</div>
            </div>
            <div className="content-wrapper my-wishlist-tab">
              {wishlistItems?.length !== 0 ? (
                wishlistItems?.map((data, i) => {
                  return (
                    <ProductCard
                      data={data}
                      key={i}
                      wishlistItem={wishlistItem}
                      setWishListItem={setWishListItem}
                      cart={cart}
                      setCart={setCart}
                      wishlist="true"
                    />
                  );
                })
              ) : (
                <p className="text-center">No data Found</p>
                // <p className=" no-data-found">No data Found</p>
              )}
            </div>
            {wishlistItems?.length !== 0 && (
              <Pagination
                total={Math.ceil(totalcount / 10)}
                current={curentPage}
                onChangePage={handleChangePage}
              />
            )}
            {/* {wishlistItems.length !== 0 && <Pagination total={5} current={2} onChangePage={handleChangePage} />} */}
          </div>
        </>
      )}
    </>
  );
};

export default MyWishlist;
