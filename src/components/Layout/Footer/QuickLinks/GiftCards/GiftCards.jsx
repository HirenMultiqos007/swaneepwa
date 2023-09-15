import React from 'react'
import { Container } from "react-bootstrap";
import FooterContent from "../../FooterContent";

const GiftCards = () => {
    return (
        <div className="giftCards">
          <Container>
            <div className="title mb-20">Gift Cards</div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Gift Cards</div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default GiftCards