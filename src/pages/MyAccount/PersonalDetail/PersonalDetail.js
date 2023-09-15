import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../../../components/popup/Forms/Button/Button";
import Input2 from "../../../components/popup/Forms/Input/Input2";
import Swal from "sweetalert2";
import CameraImage from "../../../assets/icons/cameraimage.svg";
import NoImage from "../../../assets/icons/no-image.svg";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  EDIT_USER_DETAILS,
  VIEW_USER_PERSONAL_DETAILS,
} from "../../../Redux/SagaAction/actions";
import Loader from "../../../components/Loader";

const schema = yup.object().shape({
  firstName: yup.string().required("Please Enter First Name"),
  lastName: yup.string().required("Please Enter Last Name"),
  phoneNo: yup
    .string()
    // .matches(/^[6-9]\d{9}$/, {
    //   message: "Please enter valid number",
    //   excludeEmptyString: false,
    // })
    .required("Please Enter Phone Name")
    .min(6, "Minimum 6 Number")
    .max(16, "Maximum 16 Number"),
  email: yup
    .string()
    .email("Please enter Valid Email Address")
    .required("Please enter Email Address"),
});

const PersonalDetail = () => {
  const dispatch = useDispatch();
  const { logedinUser } = useSelector((state) => state.AuthSlice);
  // const verifyuser = JSON.parse(localStorage.getItem("UserData"));
  const [previewImage, setPreviewImage] = useState("");
  const [selectImage, setSelectImage] = useState(logedinUser?.profilePic);
  // const [errorPreview, setErrorPreview] = useState(null);
  const [userData, setuserData] = useState(logedinUser?.profilePic);
  const { viewProfileData, loading } = useSelector(
    (state) => state.ProductSlice
  );

  // const [inputFields, setInputFields] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   selectImage: "",
  // });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { t } = useTranslation();
  const first = useRef(null);

  useEffect(() => {
    if (viewProfileData) {
      setValue("firstName", viewProfileData?.firstName);
      setValue("lastName", viewProfileData?.lastName);
      setValue("email", viewProfileData?.email);
      setValue("phoneNo", viewProfileData?.phoneNo);
      // setValue("image",viewProfileData?.profilePic)
    }
  }, [viewProfileData]);

  const ImageUploadedToast = () => {
    toast.warning("*Image must be in .png, .jpeg, .jpg, .svg format", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const uploadImageHanlder = (e) => {
    if (e.target.files[0] === undefined) {
      // setErrorPreview(null);
    } else if (!/\.(jpe?g|png|svg)$/i.test(e.target.files[0]?.name)) {
      // setErrorPreview("*Image must be in .png, .jpeg, .jpg format");
      ImageUploadedToast();
    } else if (parseFloat(e?.target?.files[0]?.size) > 5242880) {
      // setErrorPreview("Image size should be less than 5MB.");
    } else {
      // setErrorPreview(null);
      setSelectImage(e?.target?.files[0]);
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreviewImage(e?.target?.result);
      };
      reader.readAsDataURL(e?.target?.files[0]);
    }
  };

  const onSubmit = (data) => {
    // console.log(data, "data");
    // reset();
    // setSelectImage(null);
    // setDisableBtn(true);
    const rawFormData = new FormData();
    rawFormData.append("firstName", data?.firstName);
    rawFormData.append("lastName", data?.lastName);
    rawFormData.append("email", data?.email);
    rawFormData.append("profilePic", selectImage);
    rawFormData.append("phoneNo", data?.phoneNo);
    dispatch({ type: EDIT_USER_DETAILS, payload: rawFormData }); //check
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="table-content">
          <div className="title-wraper">
            <div className="table-title">{`${t(
              "myaccount.personaldetail.title"
            )}`}</div>
          </div>
          <div className="content-wrapper">
            <Form
              className="profileform"
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <Row>
                <Col lg="12">
                  <div className="editprofile-box">
                    <div className="profile-image">
                      <img
                        src={
                          selectImage ? userData : viewProfileData?.profilePic
                        }
                        // {
                        // verifyuser?.data?.profilePic)
                        //   userData?.profileImage
                        //     ? userData?.profileImage
                        //     : dummyUserImage
                        // }
                        // {...register("image")}
                        alt=""
                        onClick={() => {
                          first.current.click();
                        }}
                        className={
                          errors?.selectImage
                            ? "custom-input error-input"
                            : "custom-input"
                        }
                      />

                      <input
                        type="file"
                        ref={first}
                        // name="file"
                        name="UpdateProfilePic"
                        className={
                          errors?.selectImage
                            ? "custom-input error-input"
                            : "custom-input"
                        }
                        onChange={(e) => {
                          uploadImageHanlder(e);
                          setuserData(
                            URL?.createObjectURL(e?.target?.files[0])
                          );
                        }}
                      />
                      <div
                        className="edit-icon"
                        onClick={() => {
                          first?.current?.click();
                        }}
                      >
                        <img src={CameraImage} alt="CameraImage" />
                      </div>
                    </div>
                    {/* {selectImage && (
                    <span className="error">{rrors?.selectImage?.message}</span>
                  )} */}
                  </div>
                </Col>

                <Col lg="6">
                  <div className="input-wrapper">
                    <label> {`${t("signupmodal.fname")}`}</label>
                    <input
                      type="text"
                      name="fname"
                      // defaultValue={
                      //   // verifyuser || logedinUser? verifyuser?.firstName:
                      //    logedinUser?.firstName}
                      {...register("firstName")}
                      className={
                        errors?.firstName?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                    />
                    {errors?.firstName?.message && (
                      <span className="error">
                        {errors?.firstName?.message}
                      </span>
                    )}
                  </div>
                </Col>

                <Col lg="6">
                  <div className="input-wrapper">
                    <label> {`${t("signupmodal.lname")}`}</label>
                    <input
                      type="text"
                      name="lastName"
                      // defaultValue={
                      //   // verifyuser || logedinUser? verifyuser?.lastName:
                      //   logedinUser?.lastName}
                      {...register("lastName")}
                      className={
                        errors?.lastName?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                    />
                    {errors?.lastName?.message && (
                      <span className="error">{errors?.lastName?.message}</span>
                    )}
                  </div>
                </Col>

                <Col lg="6">
                  <div className="input-wrapper">
                    <label> {`${t("signupmodal.email")}`}</label>
                    <input
                      type="email"
                      name="email"
                      // defaultValue={
                      //   // verifyuser || logedinUser? verifyuser?.email:
                      //    logedinUser?.email}
                      {...register("email")}
                      className={
                        errors?.email?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
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
                      {...register("phoneNo")}
                      // defaultValue={
                      //   // verifyuser || logedinUser? verifyuser?.phoneNo:
                      //    logedinUser?.phoneNo}
                      className={
                        errors?.phoneNo?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                      name="phoneNo"
                    />
                    {errors?.phoneNo?.message && (
                      <span className="error">{errors?.phoneNo?.message}</span>
                    )}
                  </div>
                </Col>
              </Row>
              <Button
                commonClass="common-btn"
                text={`${t("myaccount.personaldetail.save")}`}
                type="submit"
              />
            </Form>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default PersonalDetail;
