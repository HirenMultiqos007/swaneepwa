import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import  perniaLogo  from "../../../assets/images/pernia-logo.svg";
import { ReactComponent as SeachIcon } from "../../../assets/icons/search-icon.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/gray-cross-icon.svg";
import { ReactComponent as MyAccountIcon } from "../../../assets/icons/myaccount-icon.svg";
import { ReactComponent as WhishlistIcon } from "../../../assets/icons/whishlist-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/icons/cart-icon.svg";
import {
  home,
  mycart,
  mywishlist,
  personaldetail,
} from "../../../config/RoutingConsts";
import { checkLocalStore, removeLocalStore } from "../../../helpers/localstore";
import SignInModal from "../../popup/SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { userpopupShowingCount } from "../../../Redux/Slices/AuthSlice";
import SignUpModal from "../../popup/SignUpModal";
import OTPSection from "../../popup/OTPSection";
import ForgotPasswordModal from "../../popup/ForgotPasswordModal";
import ResetPasswordModal from "../../popup/ResetPasswordModal";
import { GET_MAIN_CATEGORY, PRODUCT_LIST } from "../../../Redux/SagaAction/actions";


const HeaderTop = () => {
  const { t } = useTranslation();
  const {search} = useLocation()
  
  // const userAvailable = checkLocalStore("user");
  // const userLogout = removeLocalStore("user");
  // const [activetab, setactivetab] = useState(t("header.new"));
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const { cartItems } = useSelector((state) => state.ProductSlice);
  const {isEmailVerified,isLogin} = useSelector((state) => state.AuthSlice);
  
  const [active, setActive] = useState(t("myaccount.mywishlist"));
  const {currentActiveModel} = useSelector ((action) => action.AuthSlice)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const signInModalShow = () => {
    if (isLogin === true) {
      navigate(personaldetail);
    } else {
      dispatch(userpopupShowingCount(1))
      // setShowSignin(true);
    }
  };

  useEffect(()=> {
    if(search){
      dispatch(userpopupShowingCount(5))
    }
  },[search])

  useEffect(() => {
    if (!isOpen) {
      document.documentElement
        .querySelector("body")
        .classList.add("mobile-open");
    } else {
      document.documentElement
        .querySelector("body")
        .classList.remove("mobile-open");
    }
  }, [isOpen]);

  return (
    <>
      <div className="header-top">
        <Link className="header-desktop-none" to={home}>
          <img src={perniaLogo} className="logo" onClick={()=> {
            dispatch({type: GET_MAIN_CATEGORY,callback:(e)=> {
              dispatch({type: PRODUCT_LIST, payload :{mainCategoryId : e} })
            }})
          }}/>
        </Link>
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <i></i>
        </div>
        <Container>
          <div className="header-wrapper">
            <Link className="hidden-sm-tablet" to={home}>
            <img src={perniaLogo} className="logo" onClick={()=> {
            dispatch({type: GET_MAIN_CATEGORY,callback:(e)=> {
              dispatch({type: PRODUCT_LIST, payload :{mainCategoryId : e} })
            }})
          }} />
            </Link>
            <div className="header-top-right">
              <div className="search-form">
                <div className={`searchPanelMobile ${isActive ? "is-active" : ""}`}>
                  <div className="mobileMenuBlock">
                    <input
                      name="search-field"
                      type="text"
                      className="input"
                      placeholder={`${t("header.searchplaceholder")}`}
                    />
                    <button
                      type="button"
                      aria-label="Close"
                      className="btn-close"
                      onClick={() => setIsActive(!isActive)}
                    ></button>
                  </div>
                </div>
                <div className="d-block d-sm-block  d-xl-none d-xxl-none">
                  <SeachIcon
                    alt="search-icon"
                    onClick={() => setIsActive(!isActive)}
                  />
                </div>
                <div className="hidden-sm-tablet">
                  <div className="search-box">
                    <SeachIcon alt="search-icon" className="search-icon" />
                    <input
                      name="search-field"
                      type="text"
                      className="search-form-input"
                      aria-invalid="false"
                      aria-required="false"
                      placeholder={`${t("header.searchplaceholder")}`}
                    />
                    <CrossIcon
                      alt="cross-icon"
                      className="cross-icon search-icon"
                    />
                  </div>
                </div>
              </div>
              <div
                className="user-name hidden-sm-tablet"
                style={{cursor:"pointer"}}
                 onClick={() => window.open(process.env.REACT_APP_SHARE_URL)}
              >{`${t("header.becomeseller")}`}</div>
              <MyAccountIcon
                onClick={signInModalShow}
                className="cursor-pointer"
              />
              <WhishlistIcon
                onClick={() => {
                  if(isLogin === true){
                    navigate(mywishlist);
                  }
                  setActive(t("myaccount.mywishlist"));
                }}
                id={`${t("myaccount.mywishlist")}`}
                className={
                    active === t("myaccount.mywishlist")
                      ? "cursor-pointer active"
                      : "cursor-pointer"
                  }
              />
              <div className="cart cursor-pointer">
                <CartIcon onClick={() => navigate(mycart)} />
                <span className="bagde">{cartItems?.length}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {currentActiveModel === 1 && 
      <SignInModal showModel={currentActiveModel ===1} />
      }
      {currentActiveModel === 2 && 
        <SignUpModal showModel = { currentActiveModel === 2 }/>
      }
        {currentActiveModel === 3 && 
         <OTPSection showModel = {currentActiveModel === 3}/>
      }
      {currentActiveModel === 4 && 
        <ForgotPasswordModal
        showModel = {currentActiveModel === 4}
      /> 
      } 
      {currentActiveModel === 5 && 
        <ResetPasswordModal search = {search}
        showModel = {currentActiveModel === 5}
      /> 
      } 
    </>
  );
};

export default HeaderTop;
