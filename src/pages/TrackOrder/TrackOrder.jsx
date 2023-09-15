import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ReactComponent as IconDelivered} from '../../assets/icons/icon-delivered.svg'
import {ReactComponent as IconOutDelivery} from '../../assets/icons/icon-out-delivery.svg'

function TrackOrder() {
  return (
    <div className='track-order'>
        <Container>
            <div className="title mb-20">Track Order</div>
            <Row>
                <Col xl="10">
                    <div className='table-content'>
                        <div className='title-wraper'>
                            <div className="table-title">Order ID</div>
                            <p><span className='text-red'>#589764996432</span> <span>Expected Delivery Date: <b>15 June, 2022</b></span> <span>10:25am, 10 June, 2022</span></p>
                        </div>
                        <div className='content-wrapper'>
                            <h6>Order Status</h6>
                            <ul className='tracking-progress-bar'>
                                <li className='completed'>
                                    <span className='icon'><IconDelivered/></span>
                                    <h6>Order Confirmed</h6>
                                    <p>Your order is confirmed and will to prepare soon</p>
                                    <p><span>11 June, 2022</span> <span>10:25 am</span></p>
                                </li>
                                <li className='completed'>
                                    <span className='icon'><IconDelivered/></span>
                                    <h6>Order Dispatched</h6>
                                    <p>Your order is confirmed and will to prepare soon</p>
                                    <p><span>11 June, 2022</span> <span>12:25 am</span></p>
                                </li>
                                <li className='inprogras'>
                                    <span className='icon'><IconOutDelivery/></span>
                                    <h6>Out for Delivery</h6>
                                    <p>Your order is confirmed and will to prepare soon</p>
                                    <p><span>12 June, 2022</span> <span>09:25 pm</span></p>
                                </li>
                                <li>
                                    <span className='icon'><IconDelivered/></span>
                                    <h6>Delivered</h6>
                                </li>
                            </ul>
                            <h6>Delivered to</h6>
                            <p className='m-0'><b>3418 Al Ouqsour, AR Ruwais District, 6558, Jeddah 23211, Saudi Arabia</b></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TrackOrder