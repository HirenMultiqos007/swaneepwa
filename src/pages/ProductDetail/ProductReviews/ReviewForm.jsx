import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Row, Col } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSSR, useTranslation } from "react-i18next";
import { alignPropType } from "react-bootstrap/esm/types";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { ADD_REVIEW, VIEW_REVIEW } from "../../../Redux/SagaAction/actions";
import { viewProductReviewSuccess } from "../../../Redux/Slices/ProductSlice";
import GuestUser from "../../../components/popup/GuestUser";

const ReviewForm = () => {
  const { t } = useTranslation();
  const { viewProduct } = useSelector((state) => state.ProductSlice);
  const [rating, setRating] = useState(0);
  const [showGuest, setShowGuest] = useState(false);
  const [review, setReview] = useState(null);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    rating: yup.string(),
    review: yup.string().required(),
  });
  const handleClick = (rating) => {
    setRating(rating);
  };
  const onSubmit = (data) => {
    // const { rating } = data;
    const user = localStorage.getItem("authToken");

    if (user) {
      Object.assign(data, { productId: viewProduct?.id, rating });
      dispatch({
        type: ADD_REVIEW,
        payload: {
          data,
        },
      });
      dispatch({
        type: VIEW_REVIEW,
        payload: { productId: viewProduct?.id },
      });
      reset();
    } else {
      // guest user will give email to submit review

      setShowGuest(true);
      setReview(Object.assign(data, { productId: viewProduct?.id, rating }));

      // Object.assign(data, { productId: viewProduct?.id, rating });
      // dispatch({
      //   type: ADD_REVIEW,
      //   payload: {
      //     data,
      //   },
      // });
      dispatch({
        type: VIEW_REVIEW,
        payload: { productId: viewProduct?.id },
      });
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // useEffect(()=>{
  //      dispatch({
  //     type: VIEW_REVIEW,
  //     payload: { productId: viewProduct?.id },
  //   });
  // },[viewProduct?.id])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="review-title m-0">Add a Review</div>
        <div className="title-wraper review-heading">
          <span>Your Rating:</span>
          {/* <div className="star-rating">
          <input
          type="radio"
          id="5-stars"
          name="rating"
          value={5}
          {...register("rating")}
          />
          <label for="5-stars" className="star">
          &#9733;
          </label>
          <input
          type="radio"
          id="4-stars"
          name="rating"
          value={4}
          {...register("rating")}
          />
          <label for="4-stars" className="star">
          &#9733;
          </label>
          <input
          type="radio"
          id="3-stars"
          name="rating"
          value={3}
          {...register("rating")}
          />
          <label for="3-stars" className="star">
          &#9733;
          </label>
          <input
          type="radio"
          id="2-stars"
          name="rating"
          value={2}
          {...register("rating")}
          />
          <label for="2-stars" className="star">
          &#9733;
          </label>
          <input
          type="radio"
          id="1-star"
          name="rating"
          value={1}
          {...register("rating")}
          />
          <label for="1-star" className="star">
            &#9733;
            </label>
          </div> */}
          <Rating
            halfStar={true}
            halfStarCount={1}
            halfStarFraction={0.5}
            initialValue={rating}
            transition={true}
            fillColorArray={[
              "#f17a45",
              "#f19745",
              "#f1a545",
              "#f1b345",
              "#f1d045",
            ]}
            size={24}
            onClick={handleClick}
          />
        </div>

        <div className="input-wrapper">
          <textarea
            type="text"
            placeholder="Your Review"
            {...register("review")}
            className={
              errors.review ? "custom-input error-input" : "custom-input"
            }
            style={{ height: "120px" }}
          />
          {errors.review && (
            <span className="error">{t(`signupValidation.reviews`)}</span>
          )}
        </div>

        <div className="input-wrapper">
          <button className="common-btn" type="submit">
            Send
          </button>
        </div>
      </form>
      <GuestUser
        show={showGuest}
        setShow={setShowGuest}
        phoneNo={true}
        data={review}
      />
    </>
  );
};

export default ReviewForm;
