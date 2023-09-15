import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { trackorder } from "../../../config/RoutingConsts";
import { useNavigate } from "react-router-dom";

const OrderDetail = ({
  data,
  isDelivered,
  setIsDelivered,
  isFilterActive,
  setFilterActive,
}) => {
  const { t } = useTranslation();
  const [imagezoom, setImagZoom] = useState(null);
  const [show, setShow] = useState(false);
  let [delivereddata, setDeliveredData] = useState([]);
  let [ontheway, setOnTheWay] = useState([]);
  const navigate = useNavigate();
  const ZoomImage = (image) => {
    setShow(true);
    setImagZoom(image);
  };
  useEffect(() => {
    if (isDelivered) {
      setDeliveredData(
        data.filter((el) => {
          return el.orderStatus === "Delivered";
        })
      );
    } else if (isFilterActive) {
      setOnTheWay(
        data.filter((el) => {
          return el.orderStatus === "Order Confirmed";
        })
      );
    } else {
      setDeliveredData([]);
      setOnTheWay([]);
    }
  }, [isDelivered, isFilterActive]);
  return (
    <>
      <ul className="order-details">
        {delivereddata?.length !== 0
          ? delivereddata?.map((od, i) => {
              return (
                <li key={i}>
                  <div className="top-details">
                    <div className="order-id">
                      <span>{`${t("myaccount.orderhistorys.orderid")}`}: </span>
                      {od.orderId}
                    </div>
                    <div className="delivery-date">
                      <span>
                        {`${t("myaccount.orderhistorys.deliverydate")}`}:{" "}
                      </span>
                      {od.orderData}
                    </div>
                    <div
                      className={`status ${
                        od.orderStatus === "Delivered" ? "text-green" : ""
                      } `}
                    >
                      <span>{`${t("myaccount.orderhistorys.status")}`}: </span>
                      {od.orderStatus}
                    </div>
                  </div>
                  <div className="separate" />
                  <div className="bottom-details">
                    <div className="product-details">
                      <div className="image-box">
                        <div className="image">
                          <img
                            src={od.OrderImage}
                            alt="product-image"
                            onClick={() => ZoomImage(od.OrderImage)}
                          />
                        </div>
                        <div className="content">
                          <div className="product-name">{od.productName}</div>
                          <div className="code">
                            <span>
                              {`${t("myaccount.orderhistorys.code")}`}:{" "}
                            </span>
                            {od.orderHistoryCode}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="qty text-green">
                      <span className="text-green">
                        {`${t("myaccount.orderhistorys.qty")}`}:{" "}
                      </span>
                      {od.qty}
                    </div>
                    <div className="price">
                      <span>{`${t("myaccount.orderhistorys.price")}`}: </span>
                      {od.price}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        od.btnText === "Track Order" &&
                          navigate(`/trackorder/${new Date()}`);
                      }}
                      className={`order-btn ${
                        od.btnText === "ReOrder" ? "re-order" : "track-order"
                      }`}
                    >
                      {od.btnText ||
                        `${t("myaccount.orderhistorys.trackorder")}`}
                    </button>
                  </div>
                </li>
              );
            })
          : ontheway?.length !== 0
          ? ontheway?.map((od, i) => {
              return (
                <li key={i}>
                  <div className="top-details">
                    <div className="order-id">
                      <span>{`${t("myaccount.orderhistorys.orderid")}`}: </span>
                      {od.orderId}
                    </div>
                    <div className="delivery-date">
                      <span>
                        {`${t("myaccount.orderhistorys.deliverydate")}`}:{" "}
                      </span>
                      {od.orderData}
                    </div>
                    <div
                      className={`status ${
                        od.orderStatus === "Delivered" ? "text-green" : ""
                      } `}
                    >
                      <span>{`${t("myaccount.orderhistorys.status")}`}: </span>
                      {od.orderStatus}
                    </div>
                  </div>
                  <div className="separate" />
                  <div className="bottom-details">
                    <div className="product-details">
                      <div className="image-box">
                        <div className="image">
                          <img
                            src={od.OrderImage}
                            alt="product-image"
                            onClick={() => ZoomImage(od.OrderImage)}
                          />
                        </div>
                        <div className="content">
                          <div className="product-name">{od.productName}</div>
                          <div className="code">
                            <span>
                              {`${t("myaccount.orderhistorys.code")}`}:{" "}
                            </span>
                            {od.orderHistoryCode}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="qty text-green">
                      <span className="text-green">
                        {`${t("myaccount.orderhistorys.qty")}`}:{" "}
                      </span>
                      {od.qty}
                    </div>
                    <div className="price">
                      <span>{`${t("myaccount.orderhistorys.price")}`}: </span>
                      {od.price}
                    </div>
                    <button
                      type="submit"
                      onClick={() => {
                        od.btnText === "Track Order" &&
                          // od.orderId
                          navigate(`/trackorder/${new Date()}`);
                      }}
                      className={`order-btn ${
                        od.btnText === "ReOrder" ? "re-order" : "track-order"
                      }`}
                    >
                      {od.btnText ||
                        `${t("myaccount.orderhistorys.trackorder")}`}
                    </button>
                  </div>
                </li>
              );
            })
          : data?.map((od, i) => {
              return (
                <li key={i}>
                  <div className="top-details">
                    <div className="order-id">
                      <span>{`${t("myaccount.orderhistorys.orderid")}`}: </span>
                      {od.orderId}
                    </div>
                    <div className="delivery-date">
                      <span>
                        {`${t("myaccount.orderhistorys.deliverydate")}`}:{" "}
                      </span>
                      {od.orderData}
                    </div>
                    <div
                      className={`status ${
                        od.orderStatus === "Delivered" ? "text-green" : ""
                      } `}
                    >
                      <span>{`${t("myaccount.orderhistorys.status")}`}: </span>
                      {od.orderStatus}
                    </div>
                  </div>
                  <div className="separate" />
                  <div className="bottom-details">
                    <div className="product-details">
                      <div className="image-box">
                        <div className="image">
                          <img
                            src={od.OrderImage}
                            alt="product-image"
                            onClick={() => ZoomImage(od.OrderImage)}
                          />
                        </div>
                        <div className="content">
                          <div className="product-name">{od.productName}</div>
                          <div className="code">
                            <span>
                              {`${t("myaccount.orderhistorys.code")}`}:{" "}
                            </span>
                            {od.orderHistoryCode}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="qty text-green">
                      <span className="text-green">
                        {`${t("myaccount.orderhistorys.qty")}`}:{" "}
                      </span>
                      {od.qty}
                    </div>
                    <div className="price">
                      <span>{`${t("myaccount.orderhistorys.price")}`}: </span>
                      {od.price}
                    </div>
                    <button
                      type="submit"
                      onClick={() => {
                        od.btnText === "Track Order" &&
                          navigate(`/trackorder/${new Date()}`);
                      }}
                      className={`order-btn ${
                        od.btnText === "ReOrder" ? "re-order" : "track-order"
                      }`}
                    >
                      {od.btnText ||
                        `${t("myaccount.orderhistorys.trackorder")}`}
                    </button>
                  </div>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default OrderDetail;
