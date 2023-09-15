import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  myaddress,
  mywishlist,
  orderhistory,
  personaldetail,
  mynotification,
  mysettings,
} from "../../config/RoutingConsts";
import { ReactComponent as MyAccountIcon } from "../../assets/icons/myaccount-user.svg";
import { ReactComponent as MyOrderHistoryIcon } from "../../assets/icons/myaccount-order-histroy.svg";
import { ReactComponent as MyAddressIcon } from "../../assets/icons/myaccount-address.svg";
import { ReactComponent as MyWishlistIcon } from "../../assets/icons/myaccount-wishlist.svg";
import { ReactComponent as MyNotificationIcon } from "../../assets/icons/myaccount-notification.svg";
import { ReactComponent as MySettingsIcon } from "../../assets/icons/myaccount-setting.svg";
import { ReactComponent as MyLogoutIcon } from "../../assets/icons/myaccount-logout.svg";
import { useTranslation } from "react-i18next";
import MobileTabs from "../../pages/MyAccount/MobileTabs/MobileTabs";
import PersonalDetail from "../../pages/MyAccount/PersonalDetail";
import OrderHistory2 from "../../pages/MyAccount/OrderHistory";
import MyAddress2 from "../../pages/MyAccount/MyAddress";
import MyWishlist2 from "../../pages/MyAccount/MyWishlist";
import MyNotification2 from "../../pages/MyAccount/MyNotification";
import MySettings2 from "../../pages/MyAccount/MySettings";
import { removeLocalStore } from "../../helpers/localstore";
import { USER_LOGOUT, VIEW_USER_PERSONAL_DETAILS } from "../../Redux/SagaAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { tabs } from "../../Data/data";

const MyAccountLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(t("myaccount.personaldetails"));
  const [activeTab, setActiveTab] = useState(tabs[0].path);
  const { token } = useSelector((state) => state.AuthSlice);
  const handleTabChange = (path) => {
    setActiveTab(path);
  };

useEffect(()=> {
  if(location.pathname === "/personal-account"){
    dispatch({type : VIEW_USER_PERSONAL_DETAILS})
  }
},[location.pathname === "/personal-account"])

  const handleLogout = () => {
    dispatch({
      type: USER_LOGOUT
      // payload: {
      //   logout: token,
      // },
    });
  };

  return (
    <div className="my-account-pages">
      <Container>
        <div className="title">{`${t("myaccount.title")}`}</div>
        <div className="mobile-none">
          <Row>
            <Col lg="3">
              <ul className="sidebar">
                <li
                  onClick={() => {
                    navigate(personaldetail);
                  }}
                  id={`${t("myaccount.personaldetails")}`}
                  className={
                    location.pathname === "/personal-account"
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                >
                  <MyAccountIcon />
                  {`${t("myaccount.personaldetails")}`}
                </li>
                <li
                  onClick={() => {
                    navigate(orderhistory);
                  }}
                  className={
                    location.pathname === "/order-history"
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                  id={`${t("myaccount.orderhistory")}`}
                >
                  <MyOrderHistoryIcon />
                  {`${t("myaccount.orderhistory")}`}
                </li>
                <li
                  onClick={() => {
                    navigate(myaddress);
                  }}
                  id={`${t("myaccount.myaddress")}`}
                  className={
                    location.pathname === "/my-address"
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                >
                  <MyAddressIcon />
                  {`${t("myaccount.myaddress")}`}
                </li>
                <li
                  onClick={() => {
                    navigate(mywishlist);
                  }}
                  id={`${t("myaccount.mywishlist")}`}
                  className={
                    location.pathname === "/my-whishlist"
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                >
                  <MyWishlistIcon />
                  {`${t("myaccount.mywishlist")}`}
                </li>
                <li
                  onClick={() => {
                    navigate(mynotification);
                  }}
                  id={`${t("myaccount.notification")}`}
                  className={
                    location.pathname === "/my-notification"
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                >
                  <MyNotificationIcon />
                  {`${t("myaccount.notification")}`}{" "}
                  <label className="count">(6)</label>
                </li>
                <li
                  onClick={() => {
                    navigate(mysettings);
                  }}
                  className={
                    location.pathname === "/setting"
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                  id={`${t("myaccount.settings")}`}
                >
                  <MySettingsIcon />
                  {`${t("myaccount.settings")}`}
                </li>
                <li
                  className={
                    active === t("myaccount.logout")
                      ? "nav-item custom-li active"
                      : "nav-item custom-li"
                  }
                  onClick={() => {
                    handleLogout();
                  }}
                  id={`${t("myaccount.logout")}`}
                >
                  <MyLogoutIcon />
                  {`${t("myaccount.logout")}`}
                </li>
              </ul>
            </Col>
            <Col lg="9">
              <Outlet />
            </Col>
          </Row>
        </div>
        <div className="desktop-none">
          <MobileTabs tabs={tabs} />
        </div>
      </Container>
    </div>
  );
};

export default MyAccountLayout;
