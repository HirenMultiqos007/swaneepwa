import React, { useState } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import SlickSliderComp from '../../../../components/SlickSliderComp/SlickSliderComp'
import { ProductListing } from '../../../../Data/data'

function TrendingOffers() {
const [isProduct, setIsproduct] = useState(5);
  return (
    <div className='deals-day pt-100'>
      <Container>
        <Row>
          <Col lg="12">
            <div className="title-wraper">
              <h2>Trending Offers</h2>
              <div className="custom-link view-link">View All</div>
            </div>
            <div className="custom-slider">
              <SlickSliderComp
                content={ProductListing}
                num={5}
                isProduct={isProduct}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TrendingOffers