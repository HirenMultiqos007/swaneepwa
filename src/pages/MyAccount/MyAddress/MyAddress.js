/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icon.svg";
import LocationIcon from "../../../assets/icons/location-icon.svg";
import MobileIcon from "../../../assets/icons/mobile-icon.svg";
import EmailIcon from "../../../assets/icons/email-icon.svg";
import EditIcon from "../../../assets/icons/edit-icon.svg";
import DeleteIcon from "../../../assets/icons/delete-icon.svg";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import AddAddress from "../../../components/popup/AddAddress";
import DeleteModal from "../../../components/popup/DeleteModal";
import { address } from "../../../Data/data";
import { ADD_EDIT_USER, USER_DETAILS } from "../../../Redux/SagaAction/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";

const MyAddress = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const { loading } = useSelector((state) => state.ProductSlice);
  // const [showEdit, setShowEdit] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [addressTitle, setAddressTitle] = useState("");
  let [deleteId, setDeleteId] = useState(null);
  let [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  // const handleAddAddressPopup = () => {
  //   setAddressTitle("Add Address");
  //   setShowAddrss(true);
  //   setShowEdit(false);
  //   setEditId(null);
  // };

  // const handleEdit = (id) => {
  //   setAddressTitle("Edit Address");
  //   setShowAddrss(false);
  //   setShowEdit(true);
  //   setEditId(id);
  // };

  const handleDelete = (id) => {
    setshowDeleteModal(true);
    setDeleteId(id);
  };

  const showModal = (modalType, id) => {
    if (modalType === "Add Address") {
      setShow(true);
      setAddressTitle("Add Address");
      setEditId(id);
     
    } else if (modalType === "Edit Address") {
      setShow(true);
      setAddressTitle("Edit Address");
      setEditId(id);
    }
  };
  useEffect(() => {
    dispatch({
      type: USER_DETAILS,
      payload: { addressId: "648961f3b8944a36464a9d73" },
    });
  }, [USER_DETAILS]);

  return (
    <>
{loading?<Loader/>:
    <>
      <div className="table-content">
        <div className="add-address">
          <div className="title-wraper">
            <div className="table-title">{`${t(
              "myaccount.deliveryaddress.title"
            )}`}</div>
            <div
              className="icon-wrapper"
              onClick={() => {
                showModal("Add Address", null);
                // handleAddAddressPopup();
              }}
            >
              <PlusIcon />
              <span>{`${t("myaccount.deliveryaddress.addaddress")}`}</span>
            </div>
          </div>

          <div className="content-wrapper">
            <Row className="custom-row-space">
              {address?.map((ad, i) => {
                return (
                  <Col xl="6" key={i}>
                    <div className="graybg address-details">
                      <div className="address-inner">
                        <div className="custom-radio">
                          <input
                            type="radio"
                            id={ad?.addressId}
                            name="address"
                            
                          />
                          <label htmlFor={ad?.addressId}></label>
                        </div>

                        <div className="customer-detail">
                          <div className="customer-name">
                            {ad?.customername}
                          </div>
                          <div className="personal-info">
                            <div className="address-detail">
                              <img
                                src={LocationIcon}
                                style={{ marginTop: "3px" }}
                              />{" "}
                              <span>{ad?.addressdetail}</span>
                            </div>
                            <div className="contact-info">
                              <div className="contact">
                              <img src={MobileIcon} />  <span>{ad?.mobilenumber}</span>
                              </div>
                              <div className="mail-detail">
                                <img src={EmailIcon} /> <span>{ad.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="action">
                        <img
                          src={EditIcon}
                          className="cursor-pointer action-icon"
                          onClick={() => {
                            // handleEdit(ad?.addressId);
                            setEditId(ad?.addressId);
                            showModal("Edit Address", ad?.addressId);
                          }}
                        />
                        <img
                          src={DeleteIcon}
                          className="cursor-pointer action-icon"
                          onClick={() => handleDelete(ad?.addressId)}
                        />
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>

      <AddAddress
        show={show}
        setShow={setShow}
        title={addressTitle}
        editId={editId}
        // showModal={showModal}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setshowDeleteModal={setshowDeleteModal}
        deleteId={deleteId}
      />
    </>
}
    </>
  );
};

export default MyAddress;
