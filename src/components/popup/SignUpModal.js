import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye-icon.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/icons/close-eye-icon.svg";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/backarrow-icon.svg";
import googleIcon from "../../assets/images/social-google.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginSocialGoogle } from "reactjs-social-login";

import { home } from "../../config/RoutingConsts";
import Button from "./Forms/Button/Button";
import Input2 from "./Forms/Input/Input2";
import { setLocalStore } from "../../helpers/localstore";
import { useDispatch, useSelector } from "react-redux";
import { USER_REGISTER } from "../../Redux/SagaAction/actions";
import { successSignupData, setLocaldata, userpopupShowingCount } from "../../Redux/Slices/AuthSlice";
import { requstApi } from "../../utils/request";
import OTPSection from "./OTPSection";

const SignUpModal = ({
  showSignup,
  showModel,
  setShowSignup,
  onback,
  clickLogin,
  clearFillData,
  setClearFillData,
}) => {
  console.log(clearFillData, "clearFillData");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [backbtn, setBtnBtn] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [clickSignupOtpOpen,setClickSignupOtpOpen] = useState(false)

  const { error, isEmailVerified, isLogin,verifyError } = useSelector(
    (action) => action.AuthSlice
  );
  console.log(error, "SignUpModal");
  const navigate = useNavigate();
  // const handleClose = () => {
  //   setShowSignup(false);
  // };
  const { t } = useTranslation();
  // const handleBack = () => {
  //   handleClose();
  //   setBtnBtn(true);
  //   onback();
  // };

  const schema = yup.object().shape({
    fname: yup.string().required("Enter Your First Name"),
    lname: yup.string().required("Enter Your Last Name"),
    phoneno: yup.string().required("Enter Your Phone Number").min(8,"Phone Number Must be Minimum 8 Characters").max(10,"Phone Number Must be Maximum 10 Characters"),
    email: yup.string().email("Enter Valid Email Address").required("Please Enter Email Address"),
    password: yup
      .string()
      .required("Please Enter Password")
      .min(8, "Password must have min 8 characters")
      .max(16, "Password must have max 16 characters"),
    confirmpassword: yup
      .string()
      .required("Please Enter Confirm Password")
      .min(8, "Confirm Password must have min 8 characters")
      // .max(15,"Password must be between 6 and 15 characters long ")
      .oneOf([yup.ref("password")], "Password does not match"),
    termsandconditions: yup.boolean().oneOf([true]),
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

  const onSubmit = (data) => {
    const { fname, email, password, lname, phoneno } = data;

    // setLocalStore("user", {
    //   firstName: fname,
    //   lastName: lname,
    //   email: email,
    //   phoneNo: phoneno,
    //   password: password,
    // });
    // setClickSignupOtpOpen(true)
    // handleClose();
    dispatch({
      type: USER_REGISTER,
      payload: {
        firstName: fname,
        lastName: lname,
        email: email,
        phoneNo: phoneno,
        password: password,
      },
      callback : () => {dispatch(userpopupShowingCount(3))}
    });
    // console.log(modelError,"modelError",!modelError === null,!modelError)
  };
  // console.log(clickLogin, "setClickLogin");
  // useEffect(() => {
  //   if (
  //     isEmailVerified === 0 &&
  //     isLogin === false &&
  //     error === null &&
  //     !clickLogin 
  //   ) {
  //     setShowOtpModal(true);
  //     setShowSignup(false);
  //     reset();
  //   }
  //   if (error) {
  //     setShowSignup(true);
  //     setClearFillData(false);
  //   } 
  //   // if(verifyError){
  //   //   setShowOtpModal(true);
  //   // }

  // }, [isEmailVerified, isLogin, error, clickLogin, setClearFillData]);

  useEffect(() => {
    if (clearFillData) {
      // alert("clearFillData")
      reset();
    }
  }, [clearFillData]);

  return (
    <>
      <Modal
        show={showModel}
        onHide={()=> dispatch(userpopupShowingCount(0))}
        centered 
        className="custom-modal"
        size="lg"
        // backdrop="static"
        // keyboard={false}
      >
        {/* <div className="back-btn">
          <BackArrowIcon onClick={handleBack} className="cursor-pointer" />
        </div> */}
        <Modal.Header closeButton>
          <div className="title">{`${t("signupmodal.title")}`}</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> {`${t("signupmodal.fname")}`}</label>
                  <input
                    type="text"
                    {...register("fname")}
                    className={
                      errors.fname?.message ? "custom-input error-input" : "custom-input"
                    }
                    autoFocus
                  />

                  {errors?.fname?.message && (
                    <span className="error">{errors.fname?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> {`${t("signupmodal.lname")}`}</label>
                  <input
                    type="text"
                    {...register("lname")}
                    className={
                      errors.lname ? "custom-input error-input" : "custom-input"
                    }
                  />
                  {errors.lname && (
                    <span className="error">{t(`signupValidation.lname`)}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> {`${t("signupmodal.email")}`}</label>
                  <input
                    type="text"
                    {...register("email")}
                    className={
                      errors?.email?.message ? "custom-input error-input" : "custom-input"
                    }
                    name="email"
                  />
                  {errors?.email?.message && (
                    <span className="error">{errors?.email?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> {`${t("signupmodal.phoneno")}`}</label>
                  <input
                    type="number"
                    {...register("phoneno")}
                    className={
                      errors.phoneno?.message 
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                    name="phoneno"
                  />
                  {errors.phoneno?.message && (
                    <span className="error">
                      {errors.phoneno?.message}
                    </span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> {`${t("signupmodal.password")}`}</label>
                  <div className="password-wrapper">
                    <input
                      type={toggle1 ? "text" : "password"}
                      {...register("password")}
                      className={
                        errors?.password
                          ? "custom-input error-input"
                          : "custom-input password-field"
                      }
                    />
                    {console.log(errors, "errors")}
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
                  {errors.password && (
                    <span className="error">
                      {errors?.password?.message}
                      {/* {t(`signupValidation.password`)} */}
                    </span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label>{`${t("signupmodal.confirmpassword")}`}</label>
                  <div className="password-wrapper">
                    <input
                      type={toggle2 ? "text" : "password"}
                      {...register("confirmpassword")}
                      className={
                        errors.confirmpassword
                          ? "custom-input error-input"
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
                  {errors.confirmpassword && (
                    <span className="error">
                      {errors?.confirmpassword?.message}
                      {/* {t(`signupValidation.confirmpassword`)} */}
                    </span>
                  )}
                </div>
              </Col>
            </Row>

            <div className="input-wrapper">
              <div className="signup terms-link">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="chk7421"
                    {...register("termsandconditions", {
                      required: true,
                    })}
                  />
                  <label for="chk7421"></label>
                </div>
                {`${t("signupmodal.iaccept")}`}
                <div className="signup-link">{`${t("signupmodal.terms")}`}</div>{" "}
                {`${t("signupmodal.and")}`}
                <div className="signup-link">{`${t(
                  "signupmodal.privacypolicy"
                )}`}</div>
              </div>
              {errors.termsandconditions && (
                <span className="error">
                  {t(`signupValidation.termsandconditions`)}
                </span>
              )}
            </div>

            <div className="input-wrapper">
              <button className="common-btn w-100">Verify Email</button>
            </div>
          </form>

          {/* <div className="social-login">
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
          </div> */}

          <div className="signup">
            {`${t("signupmodal.alredyaccount")}`}
            <div className="signup-link" onClick={() => dispatch(userpopupShowingCount(1)) }>{`${t(
              "signupmodal.signin"
            )}`}</div>
          </div>
          <div className="signup">
            {/* <div
              className="signup-link"
              onClick={() => {
                setShowOtpModal(true);
                setShowSignup(false);
              }}
            >
              Verify Email
            </div> */}
          </div>
        </Modal.Body>
      </Modal>


      {/* {isEmailVerified === 0 &&
      isLogin === false &&
      error === null &&
      !clickLogin &&  clickSignupOtpOpen &&( 
        <OTPSection
          showOtpModal={showOtpModal}
          setShowOtpModal={setShowOtpModal}
          setShowSignup={setShowSignup}
          onback={() => {
            setShowSignup(true);
            setShowOtpModal(false);
          }}
         
        />
      )} */}
    </>
  );
};

export default SignUpModal;
