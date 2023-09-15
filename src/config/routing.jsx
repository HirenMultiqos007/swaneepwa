import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import {
  home,
  myaddress,
  mywishlist,
  orderhistory,
  personaldetail,
  mynotification,
  mysettings,
  productdetail,
  productlisting,
  mycart,
  checkout,
  trackorder,
  termsConditions,
  contactus,
  offerhome,
  termsconditios,
  privacypolicy,
  shipingInformation,
  returnsAndExchange,
  faq,
  celebritycloset,
  bestSeller,
  exchange,
  exclusive,
  offers,
  giftCards,
  personalStyling,
  occasions,
  purplestylelab,
  perniapopupshop,
  studiolocatore,
  magazine,
} from "./RoutingConsts";
import PersonalDetail from "../pages/MyAccount/PersonalDetail/PersonalDetail";
import OrderHistory from "../pages/MyAccount/OrderHistory/OrderHistory";
import MyAddress from "../pages/MyAccount/MyAddress/MyAddress";
import MyWishlist from "../pages/MyAccount/MyWishlist/MyWishlist";
import MyNotification from "../pages/MyAccount/MyNotification/MyNotification";
import MySettings from "../pages/MyAccount/MySettings/MySettings";
import NotFound from "../pages/NotFound";
import MyAccountLayout from "../components/Layout/MyaccountLayout";
import ProductListing from "../pages/ProductListing";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import MyCart from "../pages/MyCart/MyCart";
import Checkout from "../pages/Checkout/Checkout";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import ContactUS from "../pages/ContactUS/ContactUS";
import OfferHome from "../pages/OfferHome/OfferHome";

import ProtectedRoute from "./ProtectedRoute";
import TermsConditions from "../components/Layout/Footer/CustomerCare/TermsConditions";
import PrivacyPolicy from "../components/Layout/Footer/CustomerCare/PrivacyPolicy";

import ReturnsAndExchange from "../components/Layout/Footer/CustomerCare/ReturnsAndExchange";
import Faq from "../components/Layout/Footer/CustomerCare/Faq";
import CelebrityCloset from "../components/Layout/Footer/QuickLinks/CelebrityCloset";
import BestSeller from "../components/Layout/Footer/QuickLinks/BestSeller";
import ShippingInformation from "../components/Layout/Footer/CustomerCare/ShippingInformation";
import Exclusive from "../components/Layout/Footer/QuickLinks/Exclusive/Exclusive";
import Offers from "../components/Layout/Footer/QuickLinks/Offers/Offers";
import PersonalStyling from "../components/Layout/Footer/QuickLinks/PersonalStyling";
import Occasions from '../components/Layout/Footer/QuickLinks/Occasions';
import GiftCards from "../components/Layout/Footer/QuickLinks/GiftCards";
import PurpleStyleLab from "../components/Layout/Footer/Aboutus/PurpleStyleLab";
import PerniaShop from "../components/Layout/Footer/Aboutus/PerniaShop";
import StudioLocator from "../components/Layout/Footer/Aboutus/StudioLocator";
import Magazine from "../components/Layout/Footer/Aboutus/Magazine";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={home} element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path={productlisting} element={<ProductListing />} /> */}
          <Route
            path={productlisting}
            element={<ProductListing />}
          />
          <Route
            path={`${productlisting}/:title`}
            element={<ProductListing />}
          />
          <Route
            path={`${productlisting}/:title/:productId`}
            element={<ProductDetail />}
          />
          <Route path={mycart} element={<MyCart />} />
          <Route path={checkout} element={<Checkout />} />
          <Route path={`${trackorder}/:id`} element={<TrackOrder />} />
          
          {/* About us */}
          <Route path={purplestylelab} element={<PurpleStyleLab />} />
          <Route path={perniapopupshop} element={<PerniaShop />} />
          <Route path={studiolocatore} element={<StudioLocator/>} />
          <Route path={magazine} element={<Magazine />} />

          
          {/*--  QuickLinks-- */}
          <Route path={bestSeller} element={<BestSeller />} />
          <Route path={exclusive} element={<Exclusive />} />
          <Route path={offers} element={<Offers/>} />
          <Route path={giftCards} element={<GiftCards />} />{" "}
          <Route path={celebritycloset} element={<CelebrityCloset />} />
          <Route path={personalStyling} element={<PersonalStyling />} />{" "}
          <Route path={occasions} element={<Occasions/>} />

          {/* --customer care section-- */}
          <Route path={`${termsConditions}`} element={<TermsConditions />} />
          <Route path={`${privacypolicy}`} element={<PrivacyPolicy />} />
          <Route
            path={`${shipingInformation}`}
            element={<ShippingInformation />}
          />
          <Route
            path={`${returnsAndExchange}`}
            element={<ReturnsAndExchange />}
          />
          <Route path={`${faq}`} element={<Faq />} />
          <Route path={contactus} element={<ContactUS />} />
          {/* ----- */}
          <Route path={offerhome} element={<OfferHome />} />
          <Route element={<MyAccountLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route path={personaldetail} element={<PersonalDetail />} />
              <Route path={orderhistory} element={<OrderHistory />} />
              <Route path={myaddress} element={<MyAddress />} />
              <Route path={mywishlist} element={<MyWishlist />} />
              <Route path={mynotification} element={<MyNotification />} />
              <Route path={mysettings} element={<MySettings />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
