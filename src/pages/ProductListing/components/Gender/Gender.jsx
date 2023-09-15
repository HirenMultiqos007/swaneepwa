import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { genderList } from "../../../../Data/data";
import { setShopFilter } from "../../../../Redux/Slices/ProductSlice";

const Gender = ({selectshopFilter, setSelectshopFilter}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const [selectshopFilter, setSelectshopFilter] = useState([]);
  let { filter } = useSelector((state) => state?.ProductSlice);

  const handleFilter = (event, title) => {
    if (event.target.checked) {
      setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(setShopFilter([...filter, title]));
    }
  };
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.gender")}`}</div>
      </div>
      <div className="filter-list">
        <ul>
          {genderList?.map((gc, i) => {
            return (
              <li key={`gender${i}`}>
                <div className="custom-checkbox gray-bg">
                  <input
                    type="checkbox"
                    name="gender"
                    id={`gender${i}`}
                    onChange={(event)=>{handleFilter(event,gc?.title)}}
                  />
                  <label for={`gender${i}`}></label>
                </div>
                <div className="filter-inner-title">{gc?.title}</div>
                <span>({gc?.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Gender;
