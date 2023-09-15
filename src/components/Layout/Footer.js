import React from "react";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/icons/whatsup-icon.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail-icon.svg";
import { ReactComponent as FBIcon } from "../../assets/icons/fb-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as TwiterIcon } from "../../assets/icons/twiter-icon.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icons/pinterest-icon.svg";
import AppStore from "../../assets/images/app-store.svg";
import GooglePlay from "../../assets/images/google-play.svg";
import {
  bestSeller,
  celebritycloset,
  exclusive,
  faq,
  giftCards,
  magazine,
  occasions,
  offers,
  perniapopupshop,
  personalStyling,
  privacypolicy,
  purplestylelab,
  returnsAndExchange,
  shipingInformation,
  studiolocatore,
  termsConditions,
} from "../../config/RoutingConsts";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const navigateToTerms = () => {
  //   navigate('/terms-conditions'); // Replace with your actual route
  // };
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xxl="2" lg="4">
            <div className="footer-wrapper">
              <h3>{`${t("footer.aboutus.title")}`}</h3>
              <div className="footer-link">
                <ul>
                  <li>
                    <NavLink to={purplestylelab}>{`${t(
                      "footer.aboutus.purplestylelabs"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={perniapopupshop}>{`${t(
                      "footer.aboutus.perniaspopupshow"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to ={studiolocatore}>{`${t("footer.aboutus.studiolocator")}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={magazine}>{`${t("footer.aboutus.magazine")}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={perniapopupshop}>{`${t(
                      "footer.aboutus.perniaspopupblog"
                    )}`}</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="2" lg="4">
            <div className="footer-wrapper">
              <h3>{`${t("footer.quicklinks.title")}`}</h3>
              <div className="footer-link">
                <ul>
                  <li>
     
                    <NavLink to={bestSeller}>{`${t(
                      "footer.quicklinks.bestsellers"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to ={exclusive}>{`${t("footer.quicklinks.exclusive")}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={offers}>{`${t("footer.quicklinks.offers")}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={giftCards}>{`${t("footer.quicklinks.giftcards")}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={celebritycloset}>{`${t(
                      "footer.quicklinks.celebritycloset"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={personalStyling}>{`${t(
                      "footer.quicklinks.personalstyling"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={occasions}>{`${t("footer.quicklinks.occasions")}`}</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="2" lg="4">
            <div className="footer-wrapper">
              <h3>{`${t("footer.customercare.title")}`}</h3>
              <div className="footer-link">
                <ul>
                  <li>
                    <NavLink to={shipingInformation}>{`${t(
                      "footer.customercare.shippinginformation"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={returnsAndExchange}>{`${t(
                      "footer.customercare.returnsexchange"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={termsConditions}
                      // onClick={() => navigate(termsConditions)}
                    >{`${t("footer.customercare.termsconditions")}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={privacypolicy}>{`${t(
                      "footer.customercare.privacypolicies"
                    )}`}</NavLink>
                  </li>
                  <li>
                    <NavLink to={faq}>{`${t(
                      "footer.customercare.faqs"
                    )}`}</NavLink>
                  </li>
                  {/* <li>
                    <NavLink>{`${t("footer.customercare.contactus")}`}</NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="3" lg="6">
            <div className="footer-wrapper">
              <div className="contact-us">
                <h3>{`${t("footer.contactus.title")}`}</h3>
                <div className="footer-link">
                  <ul>
                    <li>
                      <a href="tel:+91 78478 48484">
                        <PhoneIcon />
                        +91 78478 48484
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://web.whatsapp.com/">
                        <WhatsAppIcon /> +91 84880 70070
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Customercare@swanee.com">
                        <MailIcon />
                        Customercare@swanee.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="follow-us">
                <h3>{`${t("footer.followus.title")}`}</h3>
                <ul>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/MultiQoS/"
                    >
                      <FBIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/multiqos/"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/multiqos"
                    >
                      <TwiterIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://pinrest.com/"
                    >
                      <PinterestIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="3" lg="6">
            <div className="footer-wrapper">
              <h3>{`${t("footer.popupshopapp.title")}`}</h3>
              <p>{`${t("footer.popupshopapp.message")}`}</p>

              <Form className="mail-subscribe">
                <InputGroup>
                  <Form.Control
                    placeholder={`${t("footer.popupshopapp.emailtext")}`}
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={() => {
                      alert("Link sent !");
                    }}
                  >{`${t(
                    "footer.popupshopapp.emailbtntext"
                  )}`}</InputGroup.Text>
                </InputGroup>
              </Form>

              <div className="play-store">
                <a
                  href="https://twitter.com/"
                  onClick={() => {
                    window.open("https://twitter.com/");
                  }}
                >
                  <img src={AppStore} alt="app-store" />
                </a>
                <a
                  href="https://www.google.com/"
                  onClick={() => {
                    window.open("https://www.google.com/");
                  }}
                >
                  <img src={GooglePlay} alt="google-play" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
