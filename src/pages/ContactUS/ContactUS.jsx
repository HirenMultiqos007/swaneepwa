import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../../components/popup/Forms/Button/Button'
import ContactBannerImage from '../../assets/images/contact-banner-image.png'
import {ReactComponent as IconMobile} from '../../assets/icons/mobile-icon.svg'
import {ReactComponent as IconEmail} from '../../assets/icons/email-icon.svg'
import {ReactComponent as IconLocation} from '../../assets/icons/location-icon.svg'

function ContactUS() {
  return (
    <div className='contact-us'>
        <div className='contact-us-content'>
            <Container>
                <Row>
                    <Col xxl="4" xl="6" lg="6" className='contact-left-col'>
                        <div className='title'>Contact US</div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                        <ul className='contact-us-list'>
                            <li>
                                <IconMobile/>
                                <div>
                                    <span>Phone</span>
                                    <Link className='link'>99999 99999</Link>
                                </div>
                            </li>
                            <li>
                                <IconEmail/>
                                <div>
                                    <span>Email</span>
                                    <Link className='link'>mark.jonsan@gmail.com</Link>
                                </div>
                            </li>
                            <li>
                                <IconLocation/>
                                <div>
                                    <span>Address</span>
                                    <div className='link address'>3418 Al Ouqour, AR Ruwais District, 6558 Jeddah 23211, Saudi Arabia</div>
                                </div>
                            </li>
                        </ul>
                        <div className='contact-banner'>
                            <img src={ContactBannerImage} alt="banner-image" />
                        </div>
                    </Col>
                    <Col xxl="8" xl="6" lg="6" className='contact-right-col'>
                        <div className='table-content'>
                            <div className='title-wraper'>
                                <div className=''>Get In Touch</div>
                            </div>
                            <div className='content-wrapper'>
                                <form action="" className='content-form'>
                                    <Row>
                                        <Col xxl="4" xl="6" lg="12">
                                            <div class="input-wrapper">
                                                <label>First Name</label>
                                                <input type="text" name="text" className="custom-input" placeholder='Enter Your First Name'/>
                                            </div>
                                        </Col>
                                        <Col xxl="4" xl="6" lg="12">
                                            <div class="input-wrapper">
                                                <label>Last Name</label>
                                                <input type="text" name="text" className="custom-input"  placeholder='Enter Your Last Name'/>
                                            </div>
                                        </Col>
                                        <Col xxl="4" xl="6" lg="12">
                                            <div class="input-wrapper">
                                                <label>Email Address</label>
                                                <input type="text" name="email" className="custom-input" placeholder='Enter Your Email Address'/>
                                            </div>
                                        </Col>
                                        <Col xxl="4" xl="6" lg="12">
                                            <div class="input-wrapper">
                                                <label>Phone No</label>
                                                <input type="text" name="email" className="custom-input" placeholder='Enter Your Phone No'/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xxl="8" lg="12">
                                            <div class="input-wrapper">
                                                <label>Phone No</label>
                                                <textarea name="" id="" cols="30" rows="3" className="custom-input"  placeholder='Write Your message...'></textarea>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <Button commonClass='common-btn m-0' text={'Send'} type='button'/>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>  
  )
}

export default ContactUS