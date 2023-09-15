import React from 'react'
import { Container } from "react-bootstrap";
import FooterContent from "../../FooterContent";

const Occasions = () => {
    return (
        <div className="Occasions">
          <Container>
            <div className="title mb-20">Occasions
            </div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Occasions
                </div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default Occasions