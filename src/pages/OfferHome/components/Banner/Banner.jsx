import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import BannerImage1 from '../../../../assets/images/offer-banner-image1.png'
import BannerImage2 from '../../../../assets/images/offer-banner-image2.png'
import OfferSaleImage from '../../../../assets/images/offer-sale-image.png'

function Banner() {
  return (
    <Container>
        <Row>
          <Col lg="12">
              <div className="offer-banner-image">
                <img src={OfferSaleImage} alt="offer-sale-image" className='offer-sale-image'/>
                <img src={BannerImage1} alt="banner-image" className='offer-banner-image1'/>
                <img src={BannerImage2} alt="banner-image" className='offer-banner-image2'/>
              </div>
          </Col>
        </Row>
    </Container>
  )
}

export default Banner