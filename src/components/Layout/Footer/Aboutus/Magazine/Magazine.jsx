import React from 'react'
import FooterContent from "../../FooterContent";
import { Container } from "react-bootstrap";

const Magazine = () => {
    return (
        <div className="Magazine">
          <Container>
            <div className="title mb-20">Magazine</div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Magazine</div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default Magazine