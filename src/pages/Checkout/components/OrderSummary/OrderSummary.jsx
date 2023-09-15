import React from "react";
import ProductImage from "../../../../assets/images/slide-image1.png";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

function OrderSummary() {
  const { cartItems, OrderProducts } = useSelector(
    (state) => state.ProductSlice
  );
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  // console.log("orderSummary", OrderProducts);
  return (
    <>
      <Row>
        <Col xxl="6" xl="8" lg="">
          {/* {   console.log("orderSummaryorderSummary")} */}
          {(OrderProducts || cartItems?.length !== 0) && (
            <>
              <h6 className="mb-30">Order Summary</h6>
              <ul className="product-cart-list order-summary-list">
                {OrderProducts?.orderSummary == true ? (
                  <li>
                    <div className="product-profile-group">
                      <img
                        src={OrderProducts?.productImages?.[0]?.image}
                        alt="product-images"
                      />

                      <div className="detail">
                        <h6>{OrderProducts?.productName}</h6>
                        <p>{OrderProducts?.description}</p>
                        <div className="flex-box">
                          <p className="text-black">
                            Color :<span> {OrderProducts?.color} </span>
                          </p>
                          <p className="text-black">
                            Size :<span> {OrderProducts?.size} </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="product-info">
                      <p className="text-light-green">
                        QTY: {OrderProducts?.qty}
                      </p>
                      <div className="price">
                        <span className="original-price">
                          ₹ {formatNumber(OrderProducts?.sellingPrice)}
                        </span>
                        {OrderProducts?.discountPrice && (
                          <span className="text-red">
                            {OrderProducts?.discountPrice}% OFF
                          </span>
                        )}
                        <span className="seller-price">
                          ₹ {formatNumber(OrderProducts?.mrp)}
                        </span>
                      </div>
                    </div>
                  </li>
                ) : (
                  cartItems?.map((data, key) => {
                    return (
                      <li key={key}>
                        {console.log("my cart", cartItems)}
                        <div className="product-profile-group">
                          {data?.addVariant?.[0]?.image ? (
                            <img
                              // src={data?.addVariant?.[0]?.image}
                              src={data?.productImages?.[0]?.image}
                              alt="product-images"
                            />
                          ) : (
                            <img
                              src={data?.productImages?.[0]?.image}
                              alt="product-images"
                            />
                          )}
                          <div className="detail">
                            <h6>{data?.productName}</h6>
                            <p>{data?.description}</p>
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
                        <div className="product-info">
                          <p className="text-light-green">QTY: {data?.qty}</p>
                          <div className="price">
                            <span className="original-price">
                              ₹ {formatNumber(data?.sellingPrice)}
                            </span>
                            {data?.discountPrice && (
                              <span className="text-red">
                                {data?.discountPrice}% OFF
                              </span>
                            )}
                            <span className="seller-price">
                              ₹ {formatNumber(data?.mrp)}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </>
          )}
        </Col>
      </Row>
    </>
  );
}

export default OrderSummary;
