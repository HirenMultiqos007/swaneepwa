import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SlickSliderComp from "../../../../components/SlickSliderComp/SlickSliderComp";
import { data } from "../../../../Data/data";
export const TopSection = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero-content">

            <div className="custom-slider">
              <SlickSliderComp content={data} num={1} />
            </div>

            
            <div className="title">{`${t("homepage.banner.caption")}`}</div>
            <h1
              dangerouslySetInnerHTML={{
                __html: `${t("homepage.banner.title")}`,
              }}
            ></h1>
            <button type="submit" className="common-btn">{`${t(
              "homepage.banner.btntxt"
            )}`}</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
