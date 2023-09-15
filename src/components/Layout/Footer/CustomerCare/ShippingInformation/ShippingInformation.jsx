import React from "react";
import { Container } from "react-bootstrap";
import FooterContent from "../../FooterContent";

const ShippingInformation = () => {
  return (
    <div className="ShippingInformation">
      <Container>
        <div className="title mb-20">Shipping Information</div>
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">Shipping Information</div>
          </div>
          <FooterContent />
        </div>
      </Container>
    </div>
  );
};

export default ShippingInformation;
