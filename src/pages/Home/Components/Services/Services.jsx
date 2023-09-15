import React from 'react'
import { services } from '../../../../Data/data'
import { Col, Container, Row } from 'react-bootstrap'


export const Services = () => {
    return (
        <div className='services'>
            <Container>
                <Row className='custom-row-space'>
                    {
                        services.map((sc, i) => {
                            return (
                                <Col lg="3" md="6" key={i}>
                                    <div className='service-box'>
                                        <div className='icon-wrapper'>
                                            <img src={sc?.PImages} alt={sc?.alt} />
                                            {/* {sc?.PImages} */}
                                        </div>
                                        <div className='service-content'>
                                            {sc.title}
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
