import React from "react";
import { useTranslation } from "react-i18next";
import { shippingList } from "../../../../Data/data";
import { useDispatch } from "react-redux";
import { setShopFilter } from "../../../../Redux/Slices/ProductSlice";

const Shipping = ({ selectshopFilter, setSelectshopFilter }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleCheck = (event, title) => {
    if (event.target.checked) {
      setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(setShopFilter([...selectshopFilter, title]));
    }
  };
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t(
          "productlisting.shippingtime"
        )}`}</div>
      </div>
      <div className="filter-list">
        <ul>
          {shippingList?.map((sc, i) => {
            return (
              <li key={`shippingtime${i}`}>
                <div class="custom-checkbox gray-bg">
                  <input
                    type="checkbox"
                    id={`shippingtime${i}`}
                    onChange={(event) => {
                      handleCheck(event, sc?.title);
                    }}
                  />
                  <label for={`shippingtime${i}`}></label>
                </div>
                <div className="filter-inner-title">{sc?.title}</div>
                <span>({sc?.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Shipping;
