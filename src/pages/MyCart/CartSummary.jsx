import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CartSummary = ({
  title,
  codeSaved,
  subTotal,
  setSubTotal,
  totalAmount,
  setTotalAmount,
}) => {
  let { cartItems, SubTotal, TotalAmount, promoCode, OrderProducts } =
    useSelector((state) => state.ProductSlice);
  // console.log("promoCode", promoCode);
console.log("orfedsre ",OrderProducts);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  useEffect(() => {
    // if (OrderProducts) {
    //   SubTotal = OrderProducts?.sellingPrice;
    //   TotalAmount = OrderProducts?.sellingPrice;
    // }
  }, []);
  return (
    <div className="table-content">
      <div className="title-wraper">
        <div className="table-title">{title}</div>
      </div>
      <div className="content-wrapper">
        <ul className="payment-detil-list">
          <li>
            <p>Sub Total</p>
            {/* {console.log("SubTotal",SubTotal)} */}
            {OrderProducts && title === "Payment" ? (
              <p>
                <b>₹ {formatNumber(OrderProducts?.sellingPrice)}</b>
              </p>
            ) : (
              <p>{SubTotal ? <b>₹ {formatNumber(SubTotal)}</b> : <b>₹ 0</b>}</p>
            )}
          </li>
          <li>
            <p>Discount</p>

            <p>
              <p>{promoCode ? <b>₹ 6,399</b> : <b>₹ 0 </b>}</p>
            </p>
          </li>
          <li>
            <p>Shipping Charge</p>
            <p>
              <b>₹ 0</b>
            </p>
          </li>
          <li>
            <p>
              <b>Total Amount</b>
            </p>
            {OrderProducts && title === "Payment" ? (
              <p>
                <b>₹ {formatNumber(OrderProducts?.sellingPrice)}</b>
              </p>
            ) : (
              <p>
                {TotalAmount > 0 ? (
                  <b>
                    ₹{" "}
                    {promoCode
                      ? formatNumber(TotalAmount - 6399)
                      : formatNumber(TotalAmount)}
                  </b>
                ) : (
                  <b>₹ 0 </b>
                )}
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartSummary;
