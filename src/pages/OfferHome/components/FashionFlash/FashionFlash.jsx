import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OfferImage from '../../../../assets/images/offer-image.png'
import OfferImage2 from '../../../../assets/images/offer-image2.png'

function FashionFlash() {
  return (
    <div className='deals-day pt-100'>
      <Container>
        <Row>
          <Col lg="6" md="6" className='mb-30'>
            <Link className='offer-link'>
              <img src={OfferImage} alt="offer-image" />
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Link className='offer-link'>
              <img src={OfferImage2} alt="offer-image" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FashionFlash