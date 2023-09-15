/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import BannerImg from "../../assets/images/hero-banner.png";
import { useTranslation } from "react-i18next";
import { Services } from "./Components/Services/Services";
import { Gentelmens } from "./Components/Gentelmens/Gentelmens";
import { Jewels } from "./Components/Jewels/Jewels";
import { Offer } from "./Components/Offer/Offer";
import { Instagram } from "./Components/Instagram/Instagram";
import { Buzz } from "./Components/Buzz/Buzz";
import { ImageGallary } from "./Components/ImageGallary/ImageGallary";
import { WeddingTales } from "./Components/WeddingTales/WeddingTales";
import { TopGallary } from "./Components/ImageGallaryTop/TopGallary";
import { TopSection } from "./Components/TopSection/TopSection";
import { useDispatch, useSelector } from "react-redux";
import { checkItem, productListing, removeAllfilter, setShopFilter } from "../../Redux/Slices/ProductSlice";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Loader from "../../components/Loader";
import { productlisting } from "../../config/RoutingConsts";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const { ProductlistLoading } = useSelector((state) => state.ProductSlice);
  const dispatch = useDispatch() ;
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    navs: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { t } = useTranslation();
  useEffect(()=>{
      dispatch(checkItem([]));
      dispatch(
        removeAllfilter()
      );
      dispatch(setShopFilter([]));
  },[])
  return (
    <>
      {/* <div className="hero">
        <div className="banner-desktop-none">
          <img src={BannerImg} alt="banner" />
        </div>
        <div
          className="image-wrapper banner-mobile-none"
          style={{ backgroundImage: `url(${BannerImg})` }}
        ></div>
        <TopSection />
      </div> */}

      {/* <div className="hero">

        <Slider {...settings}>
          <Container>
            <Row>
              <Col lg="6">
                <div className='hero-content'>
                  <div className='title'>{`${t('homepage.banner.caption')}`}</div>
                  <h1 dangerouslySetInnerHTML={{ __html: `${t('homepage.banner.title')}` }}></h1>
                  <button type='submit' className='common-btn'>{`${t('homepage.banner.btntxt')}`}</button>
                </div>
              </Col>
              <Col lg="6">
                <div className="banner-desktop-none">
                  <img src={BannerImg} alt="banner" />
                </div>
                <div
                  className="image-wrapper banner-mobile-none"
                  style={{ backgroundImage: `url(${BannerImg})` }}
                >
                </div>
              </Col>
            </Row>
          </Container>
        </Slider>
      </div> */}
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <>
          <div className="hero-banner">
              {ProductlistLoading && <Loader/>}
            <Slider {...settings}>
              {Array.from({ length: 3 }, (_, index) => (
                <div className="hero">
                  <div className="banner-desktop-none">
                    <img src={BannerImg} alt="banner" />
                  </div>
                  <div
                    className="image-wrapper banner-mobile-none"
                    style={{ backgroundImage: `url(${BannerImg})` }}
                    
                  ></div>

                  <Container>
                    <Row>
                      <Col lg="6">
                        <div className="hero-content">
                          <div className="title">{`${t(
                            "homepage.banner.caption"
                          )}`}</div>
                          <h1
                            dangerouslySetInnerHTML={{
                              __html: `${t("homepage.banner.title")}`,
                            }}
                          ></h1>
                          <button
                            type="submit"
                            className="common-btn"
                               onClick={() => navigate(`checkout`)}
                          >{`${t("homepage.banner.btntxt")}`}</button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
              {/* ---------- */}
              {/* <div className="hero">
                <div className="banner-desktop-none">
                  <img src={BannerImg} alt="banner" />
                </div>
                <div
                  className="image-wrapper banner-mobile-none"
                  style={{ backgroundImage: `url(${BannerImg})` }}
                ></div>

                <Container>
                  <Row>
                    <Col lg="6">
                      <div className="hero-content">
                        <div className="title">{`${t(
                          "homepage.banner.caption"
                        )}`}</div>
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: `${t("homepage.banner.title")}`,
                          }}
                        ></h1>
                        <button
                          type="submit"
                          className="common-btn"
                          onClick={() => navigate(productlisting)}
                        >{`${t("homepage.banner.btntxt")}`}</button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div> */}
              {/* --------- */}
              {/* <div className="hero">
                <div className="banner-desktop-none">
                  <img src={BannerImg} alt="banner" />
                </div>
                <div
                  className="image-wrapper banner-mobile-none"
                  style={{ backgroundImage: `url(${BannerImg})` }}
                ></div>
                <Container>
                  <Row>
                    <Col lg="6">
                      <div className="hero-content">
                        <div className="title">{`${t(
                          "homepage.banner.caption"
                        )}`}</div>
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: `${t("homepage.banner.title")}`,
                          }}
                        ></h1>
                        <button
                          type="submit"
                          className="common-btn"
                          onClick={() => navigate(productlisting)}
                        >
                          {`${t("homepage.banner.btntxt")}`}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div> */}
            </Slider>
          </div>

          <TopGallary />
          <WeddingTales />
          <ImageGallary />
          <Offer />
          <Buzz />
          {/* <Jewels /> */}
          {/* <Gentelmens /> */}
          <Instagram />
          <Services />
        </>
      {/* )} */}
    </>
  );
};

export default Home;
