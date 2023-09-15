import React from "react";
import { Container } from "react-bootstrap";
import FooterContent from "../../FooterContent";

const BestSeller = () => {
  return (
    <div className="bestSeller">
      <Container>
        <div className="title mb-20">Best Seller</div>
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">Best Seller</div>
          </div>
          <FooterContent />
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
