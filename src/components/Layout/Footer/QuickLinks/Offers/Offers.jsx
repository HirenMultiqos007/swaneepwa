import React from 'react'
import { Container } from "react-bootstrap";
import FooterContent from "../../FooterContent";

const Offers = () => {
    return (
        <div className="offers">
          <Container>
            <div className="title mb-20">Offers</div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Offers</div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default Offers