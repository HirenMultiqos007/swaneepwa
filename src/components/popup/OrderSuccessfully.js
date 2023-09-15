import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IconOrderSuccess } from "../../assets/icons/icon-order-successfully.svg";
import Button from "./Forms/Button/Button";
import { home } from "../../config/RoutingConsts";

function OrderSuccessfully({
  showOrderSuccessfully,
  setShowOrderSuccessfully,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={showOrderSuccessfully}
        onHide={setShowOrderSuccessfully}
        className="order-successfully-modal"
      >
        <Modal.Body>
          <div className="icon">
            <IconOrderSuccess />
          </div>
          <h2>Your Order is Successfully Placed.</h2>
          <p>
            Order ID: <span>87548877568</span>
          </p>
          <div className="modal-btn-group">
            <Button commonClass="common-btn" text="Track Order" />
            <Button
              commonClass="common-btn black-btn"
              text="Go Home"
              onClick={() => {
                navigate(home);
              }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderSuccessfully;
