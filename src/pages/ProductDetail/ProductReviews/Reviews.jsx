import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { VIEW_REVIEW } from "../../../Redux/SagaAction/actions";
import { Rating } from "react-simple-star-rating";
import NoImage from "../../../assets/icons/no-image.svg";
import Loader from "../../../components/Loader";

const Reviews = () => {
  // const { loading } = useSelector((state) => state.ProductSlice);
  let { ViewReview } = useSelector((state) => state.ProductSlice);
  // const { viewProduct } = useSelector((state) => state.ProductSlice);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: VIEW_REVIEW,
  //     payload: { productId: viewProduct?.id },
  //   });
  // }, [])

  return (
    <>
    {/* {loading && <Loader/>} */}
      <Row>
        <Col lg="7">
          {ViewReview ? (
            <>
              <div className="review-title">{ViewReview?.length>3? "3": ViewReview?.length} Reviews</div>
              <ul>
                {ViewReview?.map((rc, i) => {
                  if(i<=2){
                  return (
                    <li className="review-box" key={i}>
                     
                      <div className="customer-image">
                        <img src={rc?.image} alt="" />
                      </div>
                      <div className="content">
                        <div className="name">{rc?.name}</div>
                        <div className="total-rating">
                          <Rating
                            halfStar={true}
                            halfStarCount={1}
                            halfStarFraction={0.5}
                            initialValue={rc?.rating}
                            transition={true}
                            fillColorArray={[
                              "#f17a45",
                              "#f19745",
                              "#f1a545",
                              "#f1b345",
                              "#f1d045",
                            ]}
                            size={24}
                            readonly
                          />
                        </div>
                        <p>{rc?.review}</p>
                      </div>
                    </li>
                  );
                  }
                })}
              </ul>
            </>
          ) : (
            <>
              <div className="review-title">No Reviews</div>
            </>
          )}
        </Col>

        <Col lg="5">
          <ReviewForm />
        </Col>
      </Row>
    </>
  );
};

export default Reviews;
