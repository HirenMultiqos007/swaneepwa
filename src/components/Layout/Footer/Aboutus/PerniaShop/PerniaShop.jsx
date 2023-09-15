import React from 'react'
import FooterContent from "../../FooterContent";
import { Container } from "react-bootstrap";

const PerniaShop = () => {
    return (
        <div className="perniaShop">
          <Container>
            <div className="title mb-20">Swanee's Shop</div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Swanee's Shop</div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default PerniaShop