import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as EyeIcon } from "../../../assets/icons/eye-icon.svg";
import { ReactComponent as CloseEyeIcon } from "../../../assets/icons/close-eye-icon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/popup/Forms/Button/Button";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";

const schema = yup.object().shape({
  currentpassword: yup
    .string()
    .min(4, "Kindly enter password of min 4 character")
    .required(),
  password: yup
    .string()
    .min(4, "Kindly enter password of min 4 character")
    .required(),
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password doesn't match"),
});

const MyNotification = () => {
  const { t } = useTranslation();
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const { loading } = useSelector((state) => state.ProductSlice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Password updated successfully",
      text: `Thank you `,
    });
    reset();
  };

  return (
    <>
    {loading?<Loader/>:
      <div className="table-content">
        <div className="title-wraper">
          <div className="table-title">{`${t("myaccount.settings")}`}</div>
        </div>
        <div className="content-wrapper">
          <div className="setting-box">
            <div className="notification-box">
              <div className="setting-title">{`${t(
                "myaccount.setting.changepassword"
              )}`}</div>
              <div className="graybg setting-content">
                <div className="left-content">
                  <div className="inner-title">Whatsapp Notification</div>
                  <span>All shipment and order updates</span>
                </div>

                <div className="custom-toggle">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="password-box">
              <div className="setting-title">{`${t(
                "myaccount.notification"
              )}`}</div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="chnagepassword-form"
              >
                <Row>
                  <Col xl="3" lg="6">
                    <div className="input-wrapper">
                      <label>
                        {" "}
                        {`${t("myaccount.setting.currentpassword")}`}
                      </label>
                      <div className="password-wrapper">
                        <input
                          type={toggle1 ? "text" : "password"}
                          {...register("currentpassword", {
                            required: true,
                          })}
                          className={
                            errors.currentpassword
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
                      {errors.currentpassword && (
                        <span className="error">
                          {t(`signupValidation.currentpassword`)}
                        </span>
                      )}
                    </div>
                  </Col>

                  <Col xl="3" lg="6">
                    <div className="input-wrapper">
                      <label> {`${t("resetmodal.newpassword")}`}</label>
                      <div className="password-wrapper">
                        <input
                          type={toggle2 ? "text" : "password"}
                          {...register("password", {
                            required: true,
                          })}
                          className={
                            errors.password
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
                      {errors.password && (
                        <span className="error">
                          {t(`signupValidation.password`)}
                        </span>
                      )}
                    </div>
                  </Col>

                  <Col xl="3" lg="6">
                    <div className="input-wrapper">
                      <label> {`${t("resetmodal.confirmpassword")}`}</label>
                      <div className="password-wrapper">
                        <input
                          type={toggle3 ? "text" : "password"}
                          {...register("confirmpassword", {
                            required: true,
                          })}
                          className={
                            errors.confirmpassword
                              ? "custom-input password-field error-input"
                              : "custom-input password-field"
                          }
                        />
                        <div
                          onClick={() => {
                            setToggle3(!toggle3);
                          }}
                          className="eye-icon"
                        >
                          {!toggle3 ? (
                            <CloseEyeIcon alt="eye" />
                          ) : (
                            <EyeIcon alt="eye" />
                          )}
                        </div>
                      </div>
                      {errors.confirmpassword && (
                        <span className="error">
                          {t(`signupValidation.confirmpassword`)}
                        </span>
                      )}
                    </div>
                  </Col>

                  <Col xl="3" lg="6">
                    <div className="input-wrapper">
                      <Button
                        commonClass="common-btn"
                        text={`${t("forgotmodal.resetpassword")}`}
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default MyNotification;
