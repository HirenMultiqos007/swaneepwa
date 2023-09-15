import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gallary } from "../../../../Data/data";
import { productlisting } from "../../../../config/RoutingConsts";
import { useNavigate } from "react-router-dom";

export const TopGallary = () => {
  const navigate = useNavigate();
  return (
    <div className="image-gallary pt-100 pb-50">
      <Container>
        <Row className="custom-row-space">
         
          {gallary?.map((gd, i) => {
            return (
              <Col lg="4" key={i}>
                <div className="image-box">
                  <div className="image-hover">
                    <img
                      src={gd?.addVariant?.[0]?.image}
                      alt={gd?.title}
                      onClick={() =>
                        navigate(`productlisting/${gd?.title}`,{state:gd?.title})
                      }
                    />
                  </div>
                  <div className="black-shadow image-content">
                    <h5>{gd?.title}</h5>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>

    
  );
};
