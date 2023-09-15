import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { designerList } from "../../../../Data/data";
import Search from "../SearchForFilter/Search";
import { useDispatch, useSelector } from "react-redux";
import { setShopFilter } from "../../../../Redux/Slices/ProductSlice";

const Designer = ({ selectshopFilter, setSelectshopFilter }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  let { filter } = useSelector((state) => state?.ProductSlice);

  const handleCheck = (event, title) => {
  //  (filter){
    if (event.target.checked) {
      // setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(setShopFilter([...filter, title]));
    // }
   }
  };

  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.designer")}`}</div>
        <Search name="Designers" searchtitle="hello title of designer" />
      </div>
      <div className="filter-list">
        <ul>
          {designerList.map((dc, i) => {
            return (
              <li key={`designer${i}`}>
                <div class="custom-checkbox gray-bg">
                  <input
                    type="checkbox"
                    id={`designer${i}`}
                    onChange={(event) => {
                      handleCheck(event, dc.title);
                    }}
                  />
                  <label for={`designer${i}`}></label>
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

export default Designer;
