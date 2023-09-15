import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/backarrow-icon.svg";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye-icon.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/icons/close-eye-icon.svg";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Forms/Button/Button";
import Input2 from "./Forms/Input/Input2";
import { RESET_PASSWORD } from "../../Redux/SagaAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { userpopupShowingCount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  password: yup.string().required("Please Enter Password.").min(8,"Minimum 8 Characters Required.").max(16,"Maximum 16 Characters Required."),
  confirmpassword: yup
    .string()
    .required("Please Enter ConfirmPassword.")
    .oneOf([yup.ref("password"), null], "Password Doesn't Match."),
});

const ResetPasswordModal = ({ show, setShow, onback,showModel ,search}) => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [backbtn, setBtnBtn] = useState(false);
  const dispatch = useDispatch();
  const [showForgotModal, setShowForgotModal] = useState(false);
  // const { userToken } = useSelector((state) => state.AuthSlice);
const navigate = useNavigate()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
  });
  const onSubmit = (data) => {
    console.log()
    if (data) {
      dispatch({
        type: RESET_PASSWORD,

        payload: {
          password: data?.password,
          search:search.replace("?","")
        },
        callback : ()=> {
          dispatch(userpopupShowingCount(0))
          navigate("/")
          reset()
        }
      });
    }
    // handleClose();
  };
  // const handleClose = () => setShow(false);
  const { t } = useTranslation();

  // const handleBack = () => {
  //   handleClose();
  //   setBtnBtn(true);
  //   onback();
  // };
  // useEffect(() => {
  //   reset(user);
  // }, [user]);
  return (
    <>
      <Modal
        show={showModel}
        // onHide={handleClose}
        centered
        className="custom-modal"
        autoFocus
        backdrop="static"
        // keyboard={false}
      >
        {/* <div className="back-btn">
          <BackArrowIcon onClick={()=> dispatch(userpopupShowingCount(4))} className="cursor-pointer" />
        </div> */}
        <Modal.Header >
          <div className="title">{`${t("resetmodal.title")}`}</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label> {`${t("resetmodal.newpassword")}`}</label>
              <div className="password-wrapper">
                <input
                  type={toggle1 ? "text" : "password"}
                  name="password"
                  {...register('password')}
                  // {...register("password", {
                  //   required: true,
                  // })}
                  className={
                    errors?.password
                      ? "custom-input password-field error-input"
                      : "custom-input password-field"
                  }
                  autoFocus
                />
                <div
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                  className="eye-icon"
                >
                  {!toggle1 ? (
                    <CloseEyeIcon alt="eye" />
                  ) : (
                    <EyeIcon alt="eye" />
                  )}
                </div>
              </div>

              {/* {errors?.password && (
                <span className="error">{t(`signupValidation.password`)}</span>
              )} */}
              {errors?.password?.message && <span style={{color:"red"}}>{errors?.password?.message}</span>}
            </div>

            <div className="input-wrapper">
              <label> {`${t("resetmodal.confirmpassword")}`}</label>
              <div className="password-wrapper">
                <input
                  type={toggle2 ? "text" : "password"}
                  name = "confirmpassword"
                  {...register('confirmpassword')}
                  // {...register("confirmpassword", {
                  //   required: true,
                  // })}
                  className={
                    errors?.confirmpassword
                      ? "custom-input password-field error-input"
                      : "custom-input password-field"
                  }
                />
                <div
                  onClick={() => {
                    setToggle2(!toggle2);
                  }}
                  className="eye-icon"
                >
                  {!toggle2 ? (
                    <CloseEyeIcon alt="eye" />
                  ) : (
                    <EyeIcon alt="eye" />
                  )}
                </div>
              </div>
              {/* {errors?.confirmpassword && (
                <span className="error">
                  {t(`signupValidation.confirmpassword`)}
                </span>
              )} */}
              {errors?.confirmpassword?.message && <span style={{color:'red'}}>{errors?.confirmpassword?.message}</span>}
            </div>
            <button className="common-btn w-100">
              {`${t("forgotmodal.resetpassword")}`}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResetPasswordModal;
