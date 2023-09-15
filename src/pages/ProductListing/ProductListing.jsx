import React, { useCallback, useState, useRef, useEffect } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FilterCrossIcon from "../../assets/icons/gray-cross-icon.svg";
import FilterIcon from "../../assets/icons/filtericon.svg";
import ProductBanner from "../../assets/images/product-banner.png";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader";
import Size from "./components/Size/Size";
import ColorBox from "./components/ColorsBox/ColorBox";
import Price from "./components/Price/Price";
import ProductGallary from "./components/ProductGallary/ProductGallary";
import HeaderSorting from "./components/HeaderSorting/HeaderSorting";
import SelectedFilter from "./components/HeaderSelectedFiter/SelectedFilter";

import {
  categoryList,
  designerList,
  discountList,
  genderList,
  shippingList,
  shopList,
} from "../../Data/data";
import FilterData from "./components/FilterData/FilterData";
import Clearall from "./components/ClearAllFilter/Clearall";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_LIST } from "../../Redux/SagaAction/actions";
import ProductCardCM from "../../components/ProductCardCM/ProductCardCM";

const ProductListing = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {state} = useLocation()
  const [activeFilter, setIsActiveFilter] = useState(null);
  const [selectshopFilter, setSelectshopFilter] = useState([]);
  const [ischecked, setIschecked] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  let { productsList,ProductlistLoading,filter } = useSelector((state) => state.ProductSlice);
  const {specificAPIParams} = useSelector((e)=>e.GetCategorySlice)

  let totalcount = productsList?.length;

  console.log(productsList,"productsList")

  const handleChangePage = useCallback(
    (currentPage) => {
      setCurentPage(curentPage);
    },
    [curentPage]
  );
  const addFilterclass = () => {
    setIsActiveFilter(`filter-open`);
  };
  const { title } = useParams();
  useEffect(() => {
    dispatch({
      type: PRODUCT_LIST,
      payload: {
        page: curentPage,
        limit: 10,
        search: "",
        sortBy: "",
        sortKey: "",
        mainCategoryId : specificAPIParams ? specificAPIParams : "",
        categoryId : title ? title : ""
      },
    });
  }, [curentPage,title,specificAPIParams]);
  return (
    <>
      <div>
        <Container>
          {ProductlistLoading && <Loader />}
          <Breadcrumb>
            <Breadcrumb.Item href="/swanee">Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item href="/pernia">Listing</Breadcrumb.Item> */}
            <Breadcrumb.Item active>{state}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <div className="product-listing-wrapper">
        <Container>
          <div className="filter-text" onClick={addFilterclass}>
            <img src={FilterIcon} alt="filter-icon" />
            Filter
          </div>
          <div
            className={
              activeFilter
                ? "product-listing-box filter-open"
                : "product-listing-box"
            }
          >
            <div className="filter-listing">
              <div
                className="filter-cross-icon"
                onClick={() => setIsActiveFilter(null)}
              >
                <img src={FilterCrossIcon} alt="FilterCrossIcon" />
              </div>
              <Clearall
                setSelectshopFilter={setSelectshopFilter}
                selectshopFilter={selectshopFilter}
                ischecked={ischecked}
                setIschecked={setIschecked}
              />

              <div className="filter-wrapper">
                {/* <FilterData
                      selectshopFilter={selectshopFilter}
                      setSelectshopFilter={setSelectshopFilter}
                      data={shopList}
                      title={`${t("productlisting.shop")}`}
                      ischecked={ischecked}
                      setIschecked={setIschecked}
                    /> */}
                <FilterData
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  data={categoryList}
                  title={`${t("productlisting.category")}`}
                  filterTitle="category"
                  ischecked={ischecked}
                  setIschecked={setIschecked}
                />
                {/* <FilterData
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  data={genderList}
                  title={`${t("productlisting.gender")}`}
                  ischecked={ischecked}
                  setIschecked={setIschecked}
                /> */}

                <FilterData
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  title={`${t("productlisting.designer")}`}
                  filterTitle="designer"
                  data={designerList}
                  ischecked={ischecked}
                  setIschecked={setIschecked}
                />
                <Size
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  ischecked={ischecked}
                  filterTitle="size"
                  setIschecked={setIschecked}
                />
                <ColorBox
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  ischecked={ischecked}
                  filterTitle="color"
                  setIschecked={setIschecked}
                />
                
                <Price
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  ischecked={ischecked}
                  filterTitle="price"
                  setIschecked={setIschecked}
                />
                <FilterData
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  title={`${t("productlisting.discount")}`}
                  filterTitle="discount"
                  data={discountList}
                  ischecked={ischecked}
                  setIschecked={setIschecked}
                />
                <FilterData
                  selectshopFilter={selectshopFilter}
                  setSelectshopFilter={setSelectshopFilter}
                  title={`${t("productlisting.shippingtime")}`}
                  filterTitle="shippingtime"
                  data={shippingList}
                  ischecked={ischecked}
                  setIschecked={setIschecked}
                />
              </div>
            </div>

            <div className="product-right-content">
              <div className="product-list">
                <div className="product-banner">
                  <img src={ProductBanner} alt="ProductBanner" />
                </div>

                <div className="product-header">
                  <div className="title">
                    {state}
                    <span>({productsList?.length} Products)</span>
                  </div>
                  <HeaderSorting />
                </div>
              
                {filter && (
                  <SelectedFilter
                    setSelectshopFilter={setSelectshopFilter}
                    setIschecked={setIschecked}
                    selectshopFilter={selectshopFilter}
                  />
                )}
                {/* <ProductCardCM/> */}
             
                <ProductGallary categoryId={title} mainCategoryId={specificAPIParams}/>
              </div>
              <Pagination
                total={Math.ceil(totalcount / 10)}
                current={curentPage}
                onChangePage={handleChangePage}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductListing;
