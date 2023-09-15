import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import DropdownForLocation from "../../DropdownForLocation/DropdownForLocation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input2 from "../Forms/Input/Input2";
import Button from "../Forms/Button/Button";
import { address } from "../../../Data/data";
import { ADD_EDIT_USER } from "../../../Redux/SagaAction/actions";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  fname: yup.string().required(),
  lname: yup.string().required(),
  phoneno: yup.number().required(),
  email: yup.string().email().required(),
  houseNo: yup.string().required(),
  landmark: yup.string().required(),
  city: yup.string().required(),
  state: yup.object().required(),
  zipcode: yup.string().required(),
  country: yup.object().required(),
});

const AddAddress = ({ show, setShow, title, editId }) => {
  const { t } = useTranslation();
  // let [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const [userData, setuserData] = useState([address]); // use [address] only for rendering one modal and address for showing details
  const [accountDetail, setAccountDetails] = useState(null);
  const {
    register,
    trigger,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const handleChange = (e) => {
    // setuserData({
    //   fname: e.target.name === "fname" ? e.target.defaultValue : e.target.defaultValue,
    //   email: e.target.name === "email" ? e.target.value :  e.target.value,
    // });
    // console.log("handlechange",userData);
    // setCity(eventkey);
    // console.log("handleChange", e.target.value);
  };
  const handleClose = () => {
    setShow(false);
    reset({
      fname: "",
      lname: "",
      phoneno: "",
      email: "",
      houseNo: "",
      landmark: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    });
  };

  const onSubmit = (data) => {
    if (data) {
      setAccountDetails(data);
      dispatch({
        type: ADD_EDIT_USER,
        payload: {
          addressId: "648961f3b8944a36464a9d73",
          houseNo: "1016-17 Gala empire, near drive-in road",
        },
      });
      reset({
        fname: "",
        lname: "",
        phoneno: "",
        email: "",
        houseNo: "",
        landmark: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      });
      handleClose();
    }
  };
  // useEffect(() => {
  //   // setNum(num++);
  //   // setuserData(address);

  // }, [editId]);

  return (
    <>
      {userData?.map((data, key, i) => {
        return (
          <Modal
            show={show}
            onHide={handleClose}
            centered
            className="custom-modal add-address-modal"
            size="lg"
            backdrop="static"
            keyboard={false}
            // key={i}
          >
            {/* {console.log("showAddress-----------------------")}
            {console.log("showEdit-----------------------", editId)} */}

            <Modal.Header closeButton>
              <div className="title">{title} </div>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <>
                  <div className="personal-detail">
                    <div className="address-title">
                      {`${t("myaccount.addaddress.personaldetail")}`}
                    </div>
                    <Row>
                      <Col lg="6">
                        <div className="input-wrapper">
                          <label> {`${t("signupmodal.fname")}`}</label>
                          <input
                            type="text"
                            text="fname"
                            name="fname"
                            defaultValue={
                              editId == data?.[key]?.addressId
                                ? data?.[key]?.customername
                                : " "
                            }
                            {...register("fname")}
                            className={
                              errors?.fname
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                            // autoFocus
                          />
                          {errors?.fname && (
                            <span className="error">
                              {t(`signupValidation.fname`)}
                            </span>
                          )}
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="input-wrapper">
                          <label> {`${t("signupmodal.lname")}`}</label>
                          <input
                            type="text"
                            {...register("lname")}
                            defaultValue={
                              editId == data?.addressId
                                ? data?.lname
                                : " "
                            }
                            name="lname"
                            className={
                              errors?.lname
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />
                          {errors.lname && (
                            <span className="error">
                              {t(`signupValidation.lname`)}
                            </span>
                          )}
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="input-wrapper">
                          <label> {`${t("signupmodal.email")}`}</label>
                          <input
                            type="text"
                            name="email"
                            defaultValue={
                              editId ==data?.[key]?.addressId ? data?.[key]?.email : ""
                            }
                            {...register("email")}
                            className={
                              errors?.email
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />

                          {errors.email && (
                            <span className="error">
                              {t(`signupValidation.email`)}
                            </span>
                          )}
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="input-wrapper">
                          <label> {`${t("signupmodal.phoneno")}`}</label>
                          <input
                            type="text"
                            {...register("phoneno")}
                            defaultValue={
                              editId ==data?.[key]?.addressId
                                ? data?.[key]?.mobilenumber
                                : ""
                            }
                            name="phoneno"
                            className={
                              errors.phoneno
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />
                          {errors.phoneno && (
                            <span className="error">
                              {t(`signupValidation.phoneno`)}
                            </span>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="address-detail">
                    <div className="address-title">
                      {`${t("myaccount.addaddress.addressdetail")}`}
                    </div>
                    <Row>
                      <Col lg="6">
                        <div className="input-wrapper">
                          <label>
                            {" "}
                            {`${t("myaccount.addaddress.houseno")}`}
                          </label>
                          <textarea
                            {...register("houseNo")}
                            defaultValue={
                              editId ==data?.[key]?.addressId
                                ? data?.[key]?.addressdetail
                                : ""
                            }
                            className={
                              errors.houseNo
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />

                          {errors.houseNo && (
                            <span className="error">
                              {t(`signupValidation.houseno`)}
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="input-wrapper">
                          <label>
                            {" "}
                            {`${t("myaccount.addaddress.landmark")}`}
                          </label>
                          <textarea
                            {...register("landmark")}
                            className={
                              errors.landmark
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />
                          {errors.landmark && (
                            <span className="error">
                              {t(`signupValidation.landmark`)}
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="input-wrapper">
                          <label> {`${t("myaccount.addaddress.city")}`}</label>
                          <input
                            type="text"
                            {...register("city")}
                            name="city"
                            className={
                              errors.city
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />
                          {errors.city && (
                            <span className="error">
                              {t(`signupValidation.city`)}
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="input-wrapper">
                          <label>
                            {" "}
                            {`${t("myaccount.addaddress.zipcode")}`}
                          </label>
                          <input
                            type="text"
                            {...register("zipcode")}
                            name="zipcode"
                            className={
                              errors.zipcode
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            onChange={handleChange}
                          />
                          {errors.zipcode && (
                            <span className="error">
                              {t(`signupValidation.zipcode`)}
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg="6">
                        <div
                          className={
                            errors.state
                              ? "input-wrapper error-wrapper"
                              : "input-wrapper"
                          }
                        >
                          <label> {`${t("myaccount.addaddress.state")}`}</label>
                          <DropdownForLocation
                            id={true}
                            name="state"
                            control={control}
                            isSearchable
                            className={
                              errors.state
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            options={[
                              { _id: 1, name: "Gujarat" },
                              { _id: 2, name: "Rajasthan" },
                              { _id: 3, name: "Uttar Pradesh" },
                              { _id: 4, name: "Maharashtra" },
                            ]}
                            register={register}
                          />
                          {errors.state && (
                            <span className="error">
                              {t(`signupValidation.state`)}
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg="6">
                        <div
                          className={
                            errors.country
                              ? "input-wrapper error-wrapper"
                              : "input-wrapper"
                          }
                        >
                          <label>
                            {" "}
                            {`${t("myaccount.addaddress.country")}`}
                          </label>
                          <DropdownForLocation
                            id={true}
                            className={
                              errors.country
                                ? "custom-input error-input"
                                : "custom-input"
                            }
                            name="country"
                            control={control}
                            isSearchable
                            options={[
                              { _id: 1, name: "India" },
                              { _id: 2, name: "Australia" },
                              { _id: 3, name: "Canada" },
                              { _id: 4, name: "USA" },
                            ]}
                            register={register}
                          />

                          {errors.country && (
                            <span className="error">
                              {t(`signupValidation.country`)}
                            </span>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </>
                <Button
                  commonClass="common-btn"
                  text={`${t("myaccount.personaldetail.save")}`}
                  type="submit"
                />
              </form>
            </Modal.Body>
          </Modal>
        );

        //  (
        //   <Modal
        //     show={showAddress}
        //     onHide={handleClose}
        //     centered
        //     className="custom-modal add-address-modal"
        //     size="lg"
        //     autoFocus
        //     backdrop="static"
        //     keyboard={false}
        //   >
        //     <Modal.Header closeButton>
        //       {title === "Edit Address" ? (
        //         <div className="title">{title} </div>
        //       ) : (
        //         <div className="title">{`${t(
        //           "myaccount.addaddress.title"
        //         )}`}</div>
        //       )}
        //     </Modal.Header>
        //     <Modal.Body>
        //       <form onSubmit={handleSubmit(onSubmit)}>
        //         <div className="personal-detail">
        //           <div className="address-title">
        //             {`${t("myaccount.addaddress.personaldetail")}`}
        //           </div>
        //           <Row>
        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("signupmodal.firstname")}`}</label>
        //                 <input
        //                   type="text"
        //                   text="fname"
        //                   {...register("fname")}
        //                   className={
        //                     errors.fname
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                   autoFocus
        //                 />
        //                 {errors.fname && (
        //                   <span className="error">
        //                     {t(`signupValidation.fname`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>

        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("signupmodal.lname")}`}</label>
        //                 <input
        //                   type="text"
        //                   {...register("lname")}
        //                   name="lname"
        //                   className={
        //                     errors.lname
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />

        //                 {errors.lname && (
        //                   <span className="error">
        //                     {t(`signupValidation.lname`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>

        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("signupmodal.email")}`}</label>
        //                 <input
        //                   type="text"
        //                   name="email"
        //                   {...register("email")}
        //                   className={
        //                     errors.email
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />

        //                 {errors.email && (
        //                   <span className="error">
        //                     {t(`signupValidation.email`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>

        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("signupmodal.phoneno")}`}</label>
        //                 <input
        //                   type="text"
        //                   {...register("phoneno")}
        //                   name="phoneno"
        //                   className={
        //                     errors.phoneno
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />
        //                 {errors.phoneno && (
        //                   <span className="error">
        //                     {t(`signupValidation.phoneno`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //           </Row>
        //         </div>

        //         <div className="address-detail">
        //           <div className="address-title">
        //             {`${t("myaccount.addaddress.addressdetail")}`}
        //           </div>
        //           <Row>
        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("myaccount.addaddress.houseNo")}`}</label>
        //                 <textarea
        //                   {...register("houseNo")}
        //                   className={
        //                     errors.houseNo
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />

        //                 {errors.houseNo && (
        //                   <span className="error">
        //                     {t(`signupValidation.houseNo`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label>
        //                   {" "}
        //                   {`${t("myaccount.addaddress.landmark")}`}
        //                 </label>
        //                 <textarea
        //                   {...register("landmark")}
        //                   className={
        //                     errors.landmark
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />
        //                 {errors.landmark && (
        //                   <span className="error">
        //                     {t(`signupValidation.landmark`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("myaccount.addaddress.city")}`}</label>
        //                 <input
        //                   type="text"
        //                   {...register("city")}
        //                   name="city"
        //                   className={
        //                     errors.city
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />
        //                 {errors.city && (
        //                   <span className="error">
        //                     {t(`signupValidation.city`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //             <Col lg="6">
        //               <div className="input-wrapper">
        //                 <label> {`${t("myaccount.addaddress.zipcode")}`}</label>
        //                 <input
        //                   type="text"
        //                   {...register("zipcode")}
        //                   name="zipcode"
        //                   className={
        //                     errors.zipcode
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                 />
        //                 {errors.zipcode && (
        //                   <span className="error">
        //                     {t(`signupValidation.zipcode`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //             <Col lg="6">
        //               <div
        //                 className={
        //                   errors.state
        //                     ? "input-wrapper error-wrapper"
        //                     : "input-wrapper"
        //                 }
        //               >
        //                 <label> {`${t("myaccount.addaddress.state")}`}</label>
        //                 <DropdownForLocation
        //                   id={true}
        //                   name="state"
        //                   control={control}
        //                   isSearchable
        //                   className={
        //                     errors.state
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                   options={[
        //                     { _id: 1, name: "Gujarat" },
        //                     { _id: 2, name: "Rajasthan" },
        //                     { _id: 3, name: "Uttar Pradesh" },
        //                     { _id: 4, name: "Maharashtra" },
        //                   ]}
        //                   register={register}
        //                 />
        //                 {errors.state && (
        //                   <span className="error">
        //                     {t(`signupValidation.state`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //             <Col lg="6">
        //               <div
        //                 className={
        //                   errors.country
        //                     ? "input-wrapper error-wrapper"
        //                     : "input-wrapper"
        //                 }
        //               >
        //                 <label> {`${t("myaccount.addaddress.country")}`}</label>
        //                 <DropdownForLocation
        //                   id={true}
        //                   className={
        //                     errors.country
        //                       ? "custom-input error-input"
        //                       : "custom-input"
        //                   }
        //                   name="country"
        //                   control={control}
        //                   isSearchable
        //                   options={[
        //                     { _id: 1, name: "India" },
        //                     { _id: 2, name: "Australia" },
        //                     { _id: 3, name: "Canada" },
        //                     { _id: 4, name: "USA" },
        //                   ]}
        //                   register={register}
        //                 />

        //                 {errors.country && (
        //                   <span className="error">
        //                     {t(`signupValidation.country`)}
        //                   </span>
        //                 )}
        //               </div>
        //             </Col>
        //           </Row>
        //         </div>
        //         <Button
        //           commonClass="common-btn"
        //           text={`${t("myaccount.personaldetail.save")}`}
        //           type="submit"
        //         />
        //       </form>
        //     </Modal.Body>
        //   </Modal>
        // );
      })}
    </>
  );
};

export default AddAddress;
