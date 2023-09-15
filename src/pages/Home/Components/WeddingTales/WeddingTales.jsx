import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import WeddingImage1 from "../../../../assets/images/homepage-wedding-image1.png";
import WeddingImage2 from "../../../../assets/images/homepage-wedding-image2.png";
import WeddingImage3 from "../../../../assets/images/homepage-wedding-image3.png";
import { productlisting } from "../../../../config/RoutingConsts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const WeddingTales = () => {
  const navigate = useNavigate();
  const { productsList } = useSelector((state) => state.ProductSlice);
  const { t } = useTranslation();

  return (
    <div className="wedding-tales ptb">
      <Container>
        <div className="title-wraper">
          <h2>{`${t("homepage.weddingtales.title")}`}</h2>
          <div
            className="custom-link view-link"
            onClick={() =>
              navigate(`productlisting/${productsList?.[0]?.categoryId}`,{state:productsList?.[0]?.categoryName})
            }
          >{`${t("button.viewbtn")}`}</div>
        </div>
        <Row>
          {/* {
                wedding.map((wc, i) => {
                    return (
                        <Col lg="6" key={i}>
                            <div className='image-box'>
                                <img src={wc.weddingImage} alt='image' />
                                <div className='image-content'>
                                    <h5>{wc.title}</h5>
                                    <button type="submit" className='custom-link'>{wc.link}</button>
                                </div>
                            </div>
                        </Col>
                    )
                })
            } */}
          <Col lg="6">
            <div className="image-box">
              <div className="image-hover">
                <img
                  src={WeddingImage1}
                  alt="WeddingImage1"
                  onClick={() => {
                    navigate(
                      `productlisting/${t("homepage.weddingtales.title")}`,{state:"Wedding Tales"}
                    );
                  }}
                />
              </div>
              <div className="image-content">
                <h5>Papa Don’t Preach by Shubhika</h5>
                <button
                  type="submit"
                  className="custom-link"
                  onClick={() => navigate(`checkout`)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="image-box">
              <div className="image-hover">
                <img
                  src={WeddingImage2}
                  alt="WeddingImage2"
                  onClick={() => {
                    navigate(
                      `productlisting/${t("homepage.weddingtales.title")}`,{state:"Wedding Tales"}
                    );
                  }}
                />
              </div>
              <div className="image-content">
                <h5>Papa Don’t Preach by Shubhika</h5>
                <button
                  type="submit"
                  className="custom-link"
                  onClick={() => navigate(`checkout`)}
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div
              className="image-box"
              style={{ marginLeft: "80px", marginTop: "100px" }}
            >
              <div className="image-hover">
                <img
                  src={WeddingImage3}
                  alt="WeddingImage3"
                  onClick={() => {
                    navigate(
                      `productlisting/${t("homepage.weddingtales.title")}`,{state:"Wedding Tales"}
                    );
                  }}
                />
              </div>
              <div className="image-content">
                <h5>Papa Don’t Preach by Shubhika</h5>
                <button
                  type="submit"
                  className="custom-link"
                  onClick={() => navigate(`checkout`)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
