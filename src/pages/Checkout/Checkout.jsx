import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/popup/Forms/Button/Button";
import MyAddress from "../MyAccount/MyAddress/MyAddress";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import CartSummary from "../MyCart/CartSummary";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

function Checkout() {
  const [changeText, setChangeText] = useState(true);
  let [totalAmount, setTotalAmount] = useState(0);
  let [subTotal, setSubTotal] = useState(0);
  const [codeSaved, setCodeSaved] = useState("");
  let { cartItems,loading } = useSelector((state) => state.ProductSlice);
  const handleChange = () => {
    setChangeText(!changeText);
  };



  // useEffect(() => {
  //   let subtotal = 0;
  //   let totalamount = 0;
  //   if (cartItems?.length !== 0) {
  //     for (const product of cartItems) {
  //       setSubTotal((subtotal += product?.sellingPrice));
     
  //       setTotalAmount((totalamount += product?.sellingPrice));
      
  //     }
  //   } else {
  //     subtotal = 0;
  //     totalamount = 0;
  //     setSubTotal(subtotal);
  //     setTotalAmount(totalamount);
  //   }
  // }, [cartItems]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="checkout">
            <div className="pb-50">
              <Container>
                    <div className="title mb-20">Checkout</div>
                <Row>
                  <Col xxl="8" xl="8" lg="6" md="7">
                    {changeText ? <MyAddress /> : <PaymentMethod />}
                  </Col>
                  <Col xxl="4" xl="4" lg="6" md="5">
                    <CartSummary
                      title="Payment"
                      codeSaved="6,399"
                      totalAmount={totalAmount}
                      setTotalAmount={setTotalAmount}
                      subTotal={subTotal}
                      setSubTotal={setSubTotal}
                      // handleCartItems={handleCartItems}
                    />
                    {changeText && (
                      <div className="payment-btn-group">
                        <Button
                          commonClass="common-btn border-btn m-0"
                          type="button"
                          text={"Back"}
                        />

                        <Button
                          commonClass="common-btn m-0"
                          type="button"
                          text={"Make a Payment"}
                          onClick={() => handleChange()}
                        />
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
            {changeText && (
              <div className="ptb-50">
                <Container>
                  <OrderSummary />
                </Container>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;
