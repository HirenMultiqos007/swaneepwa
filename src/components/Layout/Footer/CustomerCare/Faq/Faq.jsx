import React from "react";
import FooterContent from "../../FooterContent";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <div className="title mb-20">Faqs</div>
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">Faqs</div>
          </div>
          <FooterContent />
        </div>
      </Container>
    </div>
  );
};

export default Faq;
