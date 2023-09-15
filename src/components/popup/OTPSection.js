import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/backarrow-icon.svg";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { USER_REVERIFY, USER_VERIFY } from "../../Redux/SagaAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { userpopupShowingCount } from "../../Redux/Slices/AuthSlice";

// 0 ---->>> signin
// 1 ---->>> signup
// 2 ---->>> Otp
// 3 ---->>> Forgotpasword
// 4 ---->>> ResetPassword

const OTPSection = ({
  showOtpModal,
  setShowOtpModal,
  onback,
  setShowSignup,
  setClickLogin,
  showModel,
}) => {
  const { Userdata, verifyError } = useSelector((state) => state.AuthSlice);
  console.log(verifyError, "OTPSection");
  const schema = yup.object().shape({
    otp: yup.string(),
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
  const [otp, setOtp] = useState(null);
  const [remainingTime, setRemainingTime] = useState(90);
  const dispatch = useDispatch();
  // const handleClose = () => {
  //   setShowOtpModal(false)
  //   // setClickLogin(false)
  //   reset()
  // };

  function handleChange(otp) {
    setOtp(otp);
  }
  // const handleBack = () => {
  //   setShowOtpModal(false);
  //   onback();
  // };
  const onSubmit = () => {
    // reset();
    // handleClose();
    dispatch({
      type: USER_VERIFY,
      payload: { email: Userdata, otp: +otp },
      callback: () => {
        dispatch(userpopupShowingCount(0));
        setOtp(null);
      },
    });
  };
  // useEffect(()=> {
  //   if(verifyError){
  //     setShowOtpModal(true)
  //     // setShowSignup(false)
  //   } else{
  //     reset()
  //     handleClose()
  //   }
  // },[verifyError])
  const resendOTP = () => {
    // user/resend-otp
    dispatch({
      type: USER_REVERIFY,
      payload: { email: Userdata },
      callback: () => {
        setOtp(null)
        setRemainingTime(90)
      },
    });
    // toast.success("New OTP sended to your email", {
    //   position: toast.POSITION.TOP_RIGHT,
    // });
  };
  const enterOTP = () => {
    toast.warning("Please fill OTP", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const containerStyle = {
    width: 50,
    height: 50,
    marginRight: 15,
  };

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);
  return (
    <>
      <Modal
        show={showModel}
        onHide={() => dispatch(userpopupShowingCount(0))}
        centered
        className="custom-modal"
        data-dismiss="modal"
        data-toggle="modal"
        id="EmailVerification"
        autoFocus
        backdrop="static"
        // keyboard={false}
        data-target="#ModalOTPSection"
      >
        {/* <div className="back-btn">
          <BackArrowIcon onClick={handleBack} className="cursor-pointer" />
        </div> */}
        <Modal.Header closeButton>
          <div className="title">Email Verification</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label>Enter OTP</label>
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                inputStyle={containerStyle}
                shouldAutoFocus
                isInputNum={true}
                isDisabled={remainingTime <= 0} // Disable when remainingTime is 0 or negative
                renderInput={(props) => <input {...props} />}
                inputType="number"
              />
              {/* <p className="mt-3  text-end"> */}

              <p className="mt-1">
                {Math.floor(remainingTime / 60)}:{remainingTime % 60} seconds
                left
              </p>
              {remainingTime <= 0 && <p>Time expired. Resend OTP.</p>}
              {/* {(otp?.length!==6) && <span className="error">Enter otp</span>} */}
            </div>
            <div className="input-wrapper">
              <button className="common-btn w-100" type="submit">
                Verify
              </button>
            </div>
          </form>
            {remainingTime <= 0 && 
          <div className="signup">
            Send OTP Again
              <div className="signup-link" onClick={resendOTP}>
                Resend OTP
              </div>
          </div>
            }
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default OTPSection;
