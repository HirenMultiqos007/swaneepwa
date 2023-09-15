import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ReactComponent as InstagramIcon } from "../../../../assets/icons/instagram-red-icon.svg";
import SlickSliderComp from "../../../../components/SlickSliderComp/SlickSliderComp";
import { instagram } from "../../../../Data/data";
import { useNavigate } from "react-router-dom";
import { productlisting } from "../../../../config/RoutingConsts";

export const Instagram = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="shop-instagram ptb">
      <Container>
        <div className="insta-box">
          <div className="content">
            <InstagramIcon />
            <div className="title">{`${t(
              "homepage.shopinstagaram.title"
            )}`}</div>
            <button
              type="submit"
              className="common-btn"
              onClick={() =>
                navigate(`productlisting/${t(
                "homepage.shopinstagaram.title"
              )}`)
              }
            >{`${t("button.viewbtn")}`}</button>
          </div>
          <div className="custom-slider">
            <SlickSliderComp content={instagram} num={4} button={false} navigation={true} />
          </div>
        </div>
      </Container>
    </div>
  );
};
