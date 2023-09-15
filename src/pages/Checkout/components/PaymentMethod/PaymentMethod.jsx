import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../../../../components/popup/Forms/Button/Button";
import OrderSuccessfully from "../../../../components/popup/OrderSuccessfully";
import { trackorder } from "../../../../config/RoutingConsts";
import deleteIcon from "../../../../assets/icons/icon-delete.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Cards from "react-credit-cards";

import Swal from "sweetalert2";
function PaymentMethod() {
  const [showOrderSuccessfully, setShowOrderSuccessfully] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const schema = yup.object().shape({
    cardNumber: yup.number().required(),
    cardHolder: yup.string().strict().required(),
    cvv: yup.number().required(),
    expiryDate: yup.string().required(),
  });
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const {
    register,
    trigger,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handlePromoCode = () => {
    // setShowOrderSuccessfully(true);
    // navigate(`/trackorder/${new Date()}`);
  };
  const submitData = (data) => {
    setShowOrderSuccessfully(true);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payment completed",
      text: `Thank you ${data.cardHolder}`,
    });
    reset();
    navigate(`/trackorder/${new Date()}`);
    reset();
  };
  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setName(value);
  };
  return (
    <>
      <div className="table-content">
        <div className="title-wraper">
          <div className="table-title">Payment Method</div>
        </div>
        <div className="content-wrapper">
          <div className="payment-method-list">
            <div className="method debit-card">
              <div className="method-box">
                <div className="head">
                  <h6>
                    <div className="custom-radio">
                      <input type="radio" id="credit-form" name="payment" />
                      <label for="credit-form"></label>
                    </div>
                    Credit/Debit Card
                  </h6>
                </div>
                <div className="body">
                  {/* <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={cardNumber}
                  /> */}
                  <form
                    className="debit-card-form"
                    onSubmit={handleSubmit(submitData)}
                  >
                    <Row>
                      <Col xl="6" lg="12">
                        <div className="input-wrapper">
                          <label>Card Number</label>
                          {/* <input
                            type="number"
                            name="cardNumber"
                            {...register("cardNumber",{
                              // pattern:"[3-6][0-9 ]{15,18}",
                              pattern: {
                                value: /\d{3}\d{3}\d{3}\d{2}$/i,
                                message: "Entre com um CPF válido",
                                }
                            })}
                            data-exception="cc"
                            className={
                              errors.cardNumber
                                ? "error-input custom-input "
                                : "custom-input card-image"
                            }
                            // value={"4587 7854 2514 2536"}
                          /> */}

                          <input
                            type="tel"
                            name="number"
                            // placeholder="Card Number"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className={
                              errors.cardNumber
                                ? "error-input custom-input "
                                : "custom-input card-image"
                            }
                          />
                          {errors.cardNumber && (
                            <span className="error">
                              Please enter card Number
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col xl="6" lg="12">
                        <div className="input-wrapper">
                          <label>Card Holder</label>
                          {/* <input
                            type="text"
                            name="cardHolder"
                            {...register("cardHolder")}
                            className={
                              errors.cardHolder
                                ? "error-input custom-input"
                                : "custom-input"
                            }
                            // value={"Mark Jonsan"}
                          /> */}
                          <input
                            type="string"
                            name="Name"
                            // placeholder="Card Holder's Name"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className={
                              errors.cardHolder
                                ? "error-input custom-input "
                                : "custom-input"
                            }
                          />
                          {errors.cardHolder && (
                            <span className="error">Please enter Name</span>
                          )}
                        </div>
                      </Col>
                      <Col xl="6" lg="12">
                        <div className="input-wrapper">
                          <label>Expiry Date</label>
                          {/* <input
                            type="date"
                            min={disablePastDate()}
                            name="expiryDate"
                            {...register("expiryDate")}
                            className={
                              errors.expiryDate
                                ? "error-input custom-input"
                                : "custom-input"
                            }
                          /> */}{" "}
                          <input
                            type="string"
                            name="expiry"
                            // placeholder="Card Number"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className={
                              errors.expiryDate
                                ? "error-input custom-input "
                                : "custom-input"
                            }
                          />
                          {errors.expiryDate && (
                            <span className="error">
                              Kindly select expiry date
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col xl="6" lg="12">
                        <div className="input-wrapper">
                          <label>CVV</label>
                          {/* <input
                            type="password"
                            name="cvv"
                            {...register("cvv")}
                            className={
                              errors.cvv
                                ? "error-input custom-input"
                                : "custom-input"
                            }
                            // value={"Mark"}
                          /> */}

                          <input
                            type="number"
                            name="cvv"
                            // placeholder="cvv"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className={
                              errors.cvv
                                ? "error-input custom-input "
                                : "custom-input"
                            }
                          />
                          {errors.cvv && (
                            <span className="error">
                              Please enter cvv number
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg="12">
                        <div className="securely-label">
                          <div className="custom-checkbox gray-bg">
                            <input type="checkbox" id="Securely" />
                            <label for="Securely"></label>
                          </div>
                          <label for="Securely">
                            Securely save card and details
                          </label>
                        </div>
                      </Col>
                      <Col lg="12">
                        <Button
                          commonClass="common-btn m-0"
                          type="submit"
                          text={"Pay"}
                          // onClick={handlePromoCode}
                        />
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
              <div className="method-box">
                <div className="head">
                  <h6>
                    <div className="custom-radio">
                      <input type="radio" id="credit-detail" name="payment" />
                      <label for="credit-detail"></label>
                    </div>
                    4587 .... 2536
                  </h6>

                  <div className="delete">
                    <img src={deleteIcon} alt="deleteIcon" />
                  </div>
                </div>

                <div className="body">
                  <form action="" className="debit-card-form">
                    <Row>
                      <Col xl="6" lg="12">
                        <div className="input-wrapper">
                          <input
                            type="date"
                            name="date"
                            className="custom-input"
                            min={disablePastDate()}
                          />
                        </div>
                      </Col>
                      <Col xl="6" lg="12">
                        <div className="input-wrapper">
                          <input
                            type="password"
                            name="password"
                            class="custom-input"
                            // value={"Mark"}
                          />
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </div>
            <div className="method cod">
              <div className="method-box">
                <div className="head">
                  <h6>
                    <div className="custom-radio">
                      <input type="radio" id="cod" name="payment" />
                      <label for="cod"></label>
                    </div>
                    Case On Delivery
                  </h6>
                </div>
                <div className="body">
                  <form action="" className="debit-card-form mt-4">
                    <Row>
                      <Col>
                        <div class="input-wrapper">
                          <p>Pay the full amount when you receive your order</p>
                        </div>
                      </Col>
                      <Col lg="12">
                        <Button
                          commonClass="common-btn m-0"
                          text={"Pay"}
                          type="submit"
                          onClick={() => {
                            navigate(`/trackorder/${new Date()}`);
                          }}
                        />
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <OrderSuccessfully
            showOrderSuccessfully={showOrderSuccessfully}
            setShowOrderSuccessfully={setShowOrderSuccessfully}
          />
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
