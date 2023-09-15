import React from 'react'
import { Container } from "react-bootstrap";
import FooterContent from '../../FooterContent';
const PrivacyPolicy = () => {
  return (
    <div className="privacyPolicy">
      <Container>
        <div className="title mb-20">Privacy policy</div>
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">Privacy policy</div>
          </div>
       <FooterContent/>
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy