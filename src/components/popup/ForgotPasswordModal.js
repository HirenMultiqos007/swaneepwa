import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/backarrow-icon.svg";
import ResetPasswordModal from "../popup/ResetPasswordModal.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Forms/Button/Button";
import Input2 from "./Forms/Input/Input2";
import { FORGOT_PASSWORD } from "../../Redux/SagaAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { userpopupShowingCount } from "../../Redux/Slices/AuthSlice";


const schema = yup.object().shape({
  email: yup.string().required("Please Enter Email Address").email("Enter Valid Email Address"),
});
const ForgotPasswordModal = ({
  showForgotModal,
  showModel,
  setShowForgotModal,
  onback,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClose = () => setShowForgotModal(false);
  const { t } = useTranslation();
  const [showResetModal, setShowResetModal] = useState(false);
  const [backbtn, setbackbtn] = useState(false);
  const { validEmail } = useSelector((state) => state.AuthSlice);

  const dispatch = useDispatch();
  const ResetModalShow = () => {
    handleClose();
    setShowResetModal(true);
  };
  // const handleBack = () => {
  //   setShowForgotModal(false);
  //   handleClose();
  //   setbackbtn(true);
  //   onback();
  // };

  const onSubmit = (data) => {
    if (data) {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: {
          email: data.email,
        },
        callback : ()=> dispatch(userpopupShowingCount(0))
      });
    }
    // ResetModalShow();
  };

  return (
    <>
      <Modal
        show={showModel}
        // onHide={()=> dispatch(userpopupShowingCount(0))}
        centered
        className="custom-modal"
        data-dismiss="modal"
        data-toggle="modal"
        id="forgotPassword"
        autoFocus
        backdrop="static"
        // keyboard={false}
        data-target="#ModalForgotPassword"
      >
        <div className="back-btn">
          <BackArrowIcon onClick={()=> dispatch(userpopupShowingCount(1))} className="cursor-pointer" />
        </div>
        <Modal.Header>
          <div className="title">{`${t("forgotmodal.title")}`}</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label> {`${t("signinmodal.email")}`}</label>
              <input
                type="text"
                {...register("email")}
                className={
                  errors.email
                    ? "custom-input password-field error-input"
                    : "custom-input password-field"
                }
                name="email"
                autoFocus
              />

              {errors?.email?.message && (
                <span className="error">{errors?.email?.message}</span>
              )}
            </div>
            <button className="common-btn w-100">
              {`${t("forgotmodal.resetpassword")}`}
            </button>
          </form>
        </Modal.Body>
      </Modal>
      {/* {validEmail && (
        <ResetPasswordModal
          show={showResetModal}
          setShow={setShowResetModal}
          onback={() => {
            setShowForgotModal(true);
          }}
        />
      )} */}
    </>
  );
};

export default ForgotPasswordModal;
