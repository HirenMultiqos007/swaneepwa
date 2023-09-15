import React from 'react'
import { Container } from "react-bootstrap";
import FooterContent from '../../FooterContent';

const CelebrityCloset = () => {
    return (
        <div className="celebrityCloset">
          <Container>
            <div className="title mb-20">Celebrity Closet</div>
            <div className="table-content">
              <div className="title-wraper">
                <div className="table-title">Celebrity Closet</div>
              </div>
              <FooterContent />
            </div>
          </Container>
        </div>
      );
}

export default CelebrityCloset