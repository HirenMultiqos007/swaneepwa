import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { discountList } from "../../../../Data/data";
import { useDispatch, useSelector } from "react-redux";
import { setShopFilter } from "../../../../Redux/Slices/ProductSlice";

const Discount = ({ selectshopFilter, setSelectshopFilter }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  let { filter } = useSelector((state) => state?.ProductSlice);
  const handleCheck = (event, title) => {
    if (event.target.checked) {
      setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(setShopFilter([...filter, title]));
    }
  };

  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.discount")}`}</div>
      </div>
      <div className="filter-list">
        <ul>
          {discountList?.map((dc, i) => {
            return (
              <li key={`discount${i}`}>
                <div class="custom-checkbox gray-bg">
                  <input
                    type="checkbox"
                    id={`discount${i}`}
                    onChange={(event) => {
                      handleCheck(event, dc.title);
                    }}
                  />
                  <label for={`discount${i}`}></label>
                </div>
                <div className="filter-inner-title">{dc.title}</div>
                <span>({dc.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Discount;
