import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye-icon.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/icons/close-eye-icon.svg";
import googleIcon from "../../assets/images/social-google.svg";
import ForgotPasswordModal from "../popup/ForgotPasswordModal";
import SignUpModal from "./SignUpModal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import Home from "../../pages/Home/Home";
import Forms from "./Forms/Forms";
import Button from "./Forms/Button/Button";
import Input2 from "./Forms/Input/Input2";
import { getLocalStore } from "../../helpers/localstore";
import { useDispatch, useSelector } from "react-redux";
// import { successSignupData, setLocaldata } from "../../Redux/Slices/AuthSlice"
import Swal from "sweetalert2";
import { USER_LOGIN } from "../../Redux/SagaAction/actions";
import {
  userLoginSuccess, userpopupShowingCount,
} from "../../Redux/Slices/AuthSlice";
import OTPSection from "./OTPSection";

const schema = yup.object().shape({
  email:yup.string().required("Please Enter Email Address").email("Enter Valid Email Address"),
  password: yup
  .string()
  .required("Kindly Enter a Password")
    .min(8, "Password Must Have Minimum 8 Characters")
    .max(16, "Password Must have Maximum 16 Characters"),
});
const SignInModal = ({ showSignin, setShowSignin ,showModel}) => {
  const [toggle1, setToggle1] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClose = () => setShowSignin(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [googleRef, setGoogleRef] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [clickLogin,setClickLogin] = useState(false)
  const [clearFillData ,setClearFillData] = useState(false)
  const { t } = useTranslation();
  // const getUser = getLocalStore("user");
  const navigate = useNavigate();
  const ForgotPasswordModalShow = () => {
    handleClose();
    setShowForgotModal(true);
  };
// console.log(showSignup,"showSignup")
  // const SignUpModalShow = () => {
  //   handleClose();
  //   setClearFillData(true)
  //   setClickLogin(false)
  //   setShowSignup(true);
  // };
  // const {isLogin,isEmailVerified,verifyError} = useSelector((state) => state.AuthSlice);

  
  const onSubmit = (data) => {
    dispatch({
      type: USER_LOGIN,
      payload: {
        email: data?.email,
        password: data?.password,
      },
    });
    reset()
    // if (isEmailVerified === true) {
    //   reset();
    //   handleClose();
    //   navigate("/");
    // }
    // setShowSignup(false)
    // setShowOtpModal(true)
    // setClickLogin(true)
    // handleClose();
  };
  
  // useEffect(()=> {
  //   if(isEmailVerified === 0 && isLogin === false && clickLogin){
  //     setShowOtpModal(true);
  //     setShowSignup(false)
  //   }
  // },[isEmailVerified,clickLogin,isLogin === false])

  return (
    <>
      <Modal
        show={showModel}
        onHide={()=> dispatch(userpopupShowingCount(0))}
        centered
        className="custom-modal"
        autoFocus
        backdrop="static"
        // keyboard={false}
      >
        <Modal.Header closeButton>
          <div className="title">{`${t("signinmodal.title")}`}</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label> {`${t("signinmodal.email")}`}</label>
              <input
                type="text"
                {...register("email")}
                className={
                  errors?.email?.message ? "custom-input error-input" : "custom-input"
                }
                name="email"
                autoFocus
              />
              {errors?.email?.message && (
                <span className="error">{errors?.email?.message}</span>
              )}
            </div>

            <div className="input-wrapper">
              <label> {`${t("signinmodal.password")}`}</label>
              <div className="password-wrapper">
                <input
                  type={toggle1 ? "text" : "password"}
                  {...register("password", {
                    required: true,
                  })}
                  className={
                    errors?.password?.message
                      ? "custom-input password-field error-input"
                      : "custom-input password-field"
                  }
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
              {errors?.password?.message && (
                <span className="error">{errors?.password?.message}</span>
              )}
              <div className="forgot-link" onClick={()=> dispatch(userpopupShowingCount(4))}>
                {`${t("signinmodal.forgotpassword")}`}
              </div>
            </div>

            <div className="input-wrapper">
              <button className="common-btn w-100">
                {`${t("signinmodal.title")}`}{" "}
              </button>
            </div>
          </form>
          <div className="social-login">
            <div className="custom-border cursor-pointer">
              <LoginSocialGoogle
                client_id="707606064532-keecuokqlj16sduiu1aqsq075bprvlr2.apps.googleusercontent.com"
                onResolve={({ provider, data }) => {
                  setGoogleRef(data);
                }}
              >
                <img src={googleIcon} alt="GoogleIcon" />
          
              </LoginSocialGoogle>
            </div>
          </div>

          <div className="signup">
            {`${t("signinmodal.donthaveaccount")}`}{" "}
            <div className="signup-link" onClick={ () => dispatch(userpopupShowingCount(2))}>{`${t(
              "signinmodal.signup"
            )}`}</div>
          </div>
        </Modal.Body>
      </Modal>

      {/* <ForgotPasswordModal
        onback={() => {
          setShowSignin(true);
        }}
        showForgotModal={showForgotModal}
        setShowForgotModal={setShowForgotModal}
      /> */}

      {/* <SignUpModal
        onback={() => {
          return isEmailVerified ? setShowSignin(true) : null;
        }}
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        clickLogin={clickLogin}
        clearFillData={clearFillData}
        setClearFillData={setClearFillData}
      /> */}
      {/* {isEmailVerified === 0 && isLogin === false && clickLogin && 
      <OTPSection
      setClickLogin={setClickLogin}
      showOtpModal={showOtpModal}
      clickLogin={clickLogin}
      setShowOtpModal={setShowOtpModal}
      onback={() => {
        setShowSignup(true);
        setShowOtpModal(false);
      }}
    />
      } */}
      
    </>
  );
};

export default SignInModal;