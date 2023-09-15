import React from "react";
import { Container } from "react-bootstrap";
import FooterContent from "../../FooterContent";

const Exclusive = () => {
  return (
    <div className="exclusive">
      <Container>
        <div className="title mb-20">Exclusive</div>
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">Exclusive</div>
          </div>
          <FooterContent />
        </div>
      </Container>
    </div>
  );
};

export default Exclusive;
