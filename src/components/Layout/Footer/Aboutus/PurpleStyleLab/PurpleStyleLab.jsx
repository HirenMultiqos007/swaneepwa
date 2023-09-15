import React from "react";
import FooterContent from "../../FooterContent";
import { Container } from "react-bootstrap";

const PurpleStyleLab = () => {
  return (
    <div className="PurpleStyleLab">
      <Container>
        <div className="title mb-20">Purple Style Lab</div>
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">Purple Style Lab</div>
          </div>
          <FooterContent />
        </div>
      </Container>
    </div>
  );
};

export default PurpleStyleLab;
