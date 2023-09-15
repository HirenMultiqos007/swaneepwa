import React from 'react'
import FooterContent from "../../FooterContent";
import { Container } from "react-bootstrap";

const StudioLocator = () => {
    return (
        <div className="StudioLocator">
          <Container>
            <div className="title mb-20">Studio Locator</div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Studio Locator</div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default StudioLocator