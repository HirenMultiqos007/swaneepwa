import React, { useCallback, useState } from "react";
import SearchCrossIcon from "../../../../assets/icons/gray-cross-icon.svg";
import SearchIcon from "../../../../assets/icons/dark-search-icon.svg";
import { ReactComponent as CrossIcon } from "../../../../assets/icons/black-cross-icon.svg";
import { useTranslation } from "react-i18next";
import { categoryList } from "../../../../Data/data";
import { useDispatch } from "react-redux";
import { setShopFilter } from "../../../../Redux/Slices/ProductSlice";
import Search from "../SearchForFilter/Search";

const Category = ({ selectshopFilter, setSelectshopFilter }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [categoryTitle, setCatergoryTitle] = useState([]);
  // const [searched, setSearched] = useState("");

  const handleCheck = (event, title) => {
    if (event.target.checked) {
      setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(setShopFilter([...selectshopFilter, title]));
    }
  };
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.category")}`}</div>
        <Search
          name="Categories"
          searchtitle="sddsssadsad"
        />
      </div>
      <div className="filter-list">
        <ul>
          {categoryList.map((cc, i) => {
            return (
              <li key={`category${i}`}>
                <div className="custom-checkbox gray-bg">
                  <input
                    type="checkbox"
                    id={`category${i}`}
                    onChange={(event) => {
                      handleCheck(event, cc.title);
                    }}
                  />
                  {setCatergoryTitle((categoryTitle) => [
                    ...categoryTitle,
                    cc.title,
                  ])}

                  <label for={`category${i}`}></label>
                </div>
                <div className="filter-inner-title">{cc.title}</div>
                <span>({cc.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
