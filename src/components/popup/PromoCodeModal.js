import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./Forms/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { PROMO_CODE } from "../../Redux/SagaAction/actions";
import { savePromoCode } from "../../Redux/Slices/ProductSlice";

function PromoCodeModal({
  showPromoCode,
  setShowPromoCode,
  codeSaved,
  setCodeSaved,
}) {
  const dispatch = useDispatch();
  const [copiedCode, setCopiedCode] = useState("");
  let {promoCode} = useSelector((state) => state.ProductSlice);

  const handleCopy = (code) => {
    setCopiedCode(code);
    setShowPromoCode(false);
   
  };
  const handleCheck = async (event, code) => {
    if (event.target.checked) {
      await setCodeSaved(code);
    dispatch(savePromoCode(code));
    }
  };
  // console.log("promoCode",promoCode);
  return (
    <>
      <Modal
        show={showPromoCode}
        onHide={setShowPromoCode}
        className="promo-code-modal"
        autoFocus
        backdrop="static"
        // keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Promo Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="promo-code-form">
            <label className="promo-item">
              <input
                type="radio"
                checked={
                  promoCode === "DABC2055"? true :false
                }
                id="promo1"
                name="promo"
                onChange={(event) => {
                  handleCheck(event, "DABC2055");
                }}
              />
              <label className="promo-detail" for="promo1" name="promo">
                <h6>DABC2055</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <label className="check" for="promo1"></label>
              </label>
            </label>
            <label className="promo-item">
              <input
                type="radio"
                id="promo2"
                name="promo"
                checked={
                  promoCode == "DABC2056"? true :false
                }
                onChange={(event) => {
                  handleCheck(event, "DABC2056");
                }}
              />
              <label className="promo-detail" for="promo2" name="promo">
                <h6>DABC2056</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <label className="check" for="promo2"></label>
              </label>
            </label>
            <label className="promo-item">
              <input
                type="radio"
                id="promo3"
                name="promo"
                checked={
                  promoCode == "DABC2057"? true : false
                }
                onChange={(event) => {
                  handleCheck(event, "DABC2057");
                }}
              />
              <label className="promo-detail" for="promo3" name="promo">
                <h6>DABC2057</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <label
                  className="check"
                  for="promo3"
                  //   onChange={handleCopy("DABC2055")}
                ></label>
              </label>
            </label>
            {/* <div onChange={() => handleCopy("DABC2055")}> */}
            <Button
              commonClass="common-btn"
              text="Apply"
              type="button"
              onClick={() => handleCopy(promoCode)}
            />
            {/* </div> */}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PromoCodeModal;
