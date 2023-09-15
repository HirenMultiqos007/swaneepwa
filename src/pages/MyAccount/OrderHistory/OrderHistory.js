/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useState } from "react";
import FilterIcon from "../../../assets/icons/filter-icon.svg";
import PlusIcon from "../../../assets/icons/black-plus-icon.svg";
import WhiteCrossIcon from "../../../assets/icons/white-cross-icon.svg";
import CrossIcon from "../../../assets/icons/cross-icon.svg";
import productImage from "../../../assets/images/product1.png";
import { useTranslation } from "react-i18next";
import ImagePreview from "../../../components/ImagePreview/ImagePreview";
import Pagination from "../../../components/Pagination/Pagination";
import { OrderDetailData } from "../../../Data/data";
import OrderDetail from "./OrderDetail";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";

const OrderHistory = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState("");
  const [isFilterActive, setFilterActive] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  const [imagezoom, setImagZoom] = useState(null);
  const [show, setShow] = useState(false);
  const { loading } = useSelector((state) => state.ProductSlice);

  const handleChangePage = useCallback(
    (currentPage) => {
      setCurentPage(curentPage);
    },
    [curentPage]
  );

  const addfilterclass = () => {
    setIsActive(`is-active`);
  };

  const removefilterclass = () => {
    setIsActive("");
  };

  const addfilterlistclass = () => {
    setFilterActive((e) => !e);
  };

  const clearFilter = () => {
    setFilterActive(false);
    setIsDelivered(false);
  };

  const ZoomImage = (image) => {
    setShow(true);
    setImagZoom(image);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="table-content">
            <div className="title-wraper">
              <div className="table-title">{`${t(
                "myaccount.orderhistorys.title"
              )}`}</div>
              <div className="icon-wrapper" onClick={addfilterclass}>
                <img src={FilterIcon} alt="FilterIcon" />
                <span>{`${t("myaccount.orderhistorys.filter")}`}</span>
              </div>
            </div>

            <div className={`title-wraper filter-wrape ${isActive}`}>
              <ul className="filter-list">
                <li
                  className={`graybg ${isFilterActive ? "active" : ""}`}
                  onClick={addfilterlistclass}
                >
                  <span>On the way</span>

                  <img src={PlusIcon} className="plus-icon" alt="PlusIcon" />
                  <img
                    src={WhiteCrossIcon}
                    className="WhiteCrossIcon"
                    alt="WhiteCrossIcon"
                  />
                </li>
                <li
                  className={`graybg ${isDelivered ? "active" : ""}`}
                  onClick={(e) => {
                    setIsDelivered((e) => !e);
                  }}
                >
                  <span>Delivered</span>

                  <img src={PlusIcon} className="plus-icon" alt="PlusIcon" />
                  <img
                    src={WhiteCrossIcon}
                    className="WhiteCrossIcon"
                    alt="WhiteCrossIcon"
                  />
                </li>
              </ul>

              <div className="clear-list">
                <span onClick={() => clearFilter()}> Clear Filters</span>
                <div className="icon-wrapper" onClick={removefilterclass}>
                  <img src={CrossIcon} alt="CrossIcon" />
                </div>
              </div>
            </div>

            <div className="content-wrapper">
              <OrderDetail
                data={OrderDetailData}
                isDelivered={isDelivered}
                setIsDelivered={setIsDelivered}
                isFilterActive={isFilterActive}
                setFilterActive={setFilterActive}
              />
            </div>
          </div>
          <Pagination total={30} current={3} onChangePage={handleChangePage} />
          <ImagePreview imagezoom={imagezoom} show={show} setShow={setShow} />
        </>
      )}
    </>
  );
};

export default OrderHistory;
