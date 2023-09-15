import React from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const Specification = () => {
  const { viewProduct } = useSelector((state) => state.ProductSlice);

  return (
<>

      {/* <Tab eventKey="specifications" title="Specifications"> */}
        <p>
         {viewProduct?.description}
        </p>

        <Row className="features-wrapper">
      <>
          <Col lg="4">
          <div className="feature-box">
            Product Type
            <span>{viewProduct?.type}</span>
          </div>

          <div className="feature-box">
            Brand
            <span>{viewProduct.productName}</span>
          </div>

          <div className="feature-box">
            Product Code
            <span>{viewProduct?.addVariant?.[0]?.productSku}</span>
          </div>

          {/* <div className="feature-box">
            Combo
            <span>{data.combo}</span>
          </div> */}

          <div className="feature-box">
            Material
            <span>{viewProduct?.materialName}</span>
          </div>
        </Col>
        <Col lg="4">
          <div className="feature-box">
            Product Length
            <span>{viewProduct?.addVariant?.[0]?.variantList[0]?.PLength}</span>
          </div>
          <div className="feature-box">
              Product Weight
            <span>{viewProduct?.productWeight} gms</span>
          </div>
          {/* <div className="feature-box">
            Sales Package
            <span>{data.salesPackage}</span>
          </div> */}
        </Col></>
        </Row>
      {/* </Tab> */}
      </>
  );
};

export default Specification;
