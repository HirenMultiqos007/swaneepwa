import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkItem,
  setShopFilter,
  removeFilteredData,
  getFilteredDataSuccess,
  removeAllfilter,
} from "../../../../Redux/Slices/ProductSlice";
import { useTranslation } from "react-i18next";

const Clearall = ({
  selectshopFilter,
  setSelectshopFilter,
  ref,
  setIschecked,
  ischecked,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { filterSelection } = useSelector((state) => state.ProductSlice);
  // const handleCheckAllChange = (e) => {
  //   if (e.target.checked) {
  //     const allCountries = country.map((c) => c.countryName);
  //     setChecked(allCountries);
  //   } else {
  //     setChecked([]);
  //   }
  // };

  return (
    <>
      <div
        className="clear-all"
        onClick={() => {
          setSelectshopFilter([]);
          setIschecked([]);
          dispatch(checkItem([]));
          dispatch(removeAllfilter());
          // dispatch(setShopFilter([]));
        }}
      >
        {`${t("productlisting.clearall")}`}
      </div>
    </>
  );
};

export default Clearall;
