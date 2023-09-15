import React from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { productAdditionalInfo } from "../../../Data/data";
const Information = () => {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since
      </p>

      <Row className="features-wrapper">
        {productAdditionalInfo.map((data, key) => {
          return (
            <Col lg="4">
              <div className="feature-box">
                Fit
                <span>{data.fit}</span>
              </div>

              <div className="feature-box">
                Composition
                <span>{data.composition}</span>
              </div>

              <div className="feature-box">
                Care
                <span>{data.care}</span>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Information;
