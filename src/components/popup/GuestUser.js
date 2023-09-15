import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/backarrow-icon.svg";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { ADD_REVIEW, GUEST_USER } from "../../Redux/SagaAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";

const GuestUser = ({ show, setShow, phoneNo, data }) => {
  //   const { Userdata } = useSelector((state) => state.AuthSlice);

  const schema = yup.object().shape({
    phoneno: yup.string().required(),
    email: yup.string().email("Enter Valid Email Address").required("Please Enter Email Address"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const handleBack = () => {
    setShow(false);
    handleClose();
  };
  const onSubmit = () => {
    console.log("submit", data);
    reset();
    handleClose();
    dispatch({
      type: ADD_REVIEW,
      payload: {
        data,
      },
    });
    // dispatch({type:GUEST_USER})
  };

  const containerStyle = {
    width: 50,
    height: 50,
    marginRight: 15,
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal"
        data-dismiss="modal"
        data-toggle="modal"
        id="GuestUser"
        autoFocus
        backdrop="static"
        // keyboard={false}
        data-target="#ModalGuestUser"
      >
        {/* <div className="back-btn">
          <BackArrowIcon onClick={handleBack} className="cursor-pointer" />
        </div> */}

        <Modal.Header closeButton>
          <div className="title">Guest User</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label> {`${t("signinmodal.email")}`}</label>
              <input
                type="text"
                {...register("email")}
                className={
                  errors?.email ? "custom-input error-input" : "custom-input"
                }
                name="email"
                autoFocus
              />
              {errors?.email && (
                <span className="error">{t(`signupValidation.email`)}</span>
              )}
            </div>
            {!phoneNo && (
              <div className="input-wrapper">
                <label>{`${t("signupmodal.phoneno")}`}</label>
                <input
                  type="text"
                  {...register("phoneo")}
                  className={
                    errors?.phoneno
                      ? "custom-input error-input"
                      : "custom-input"
                  }
                  name="phoneno"
                />
                {errors?.phoneno && (
                  <span className="error">{t(`signupValidation.phoneNo`)}</span>
                )}
              </div>
            )}

            <div className="input-wrapper">
              <button className="common-btn w-100" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default GuestUser;
