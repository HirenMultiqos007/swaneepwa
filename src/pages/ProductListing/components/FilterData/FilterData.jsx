import React, { useCallback, useState, useRef, useEffect } from "react";
import SearchCrossIcon from "../../../../assets/icons/gray-cross-icon.svg";
import SearchIcon from "../../../../assets/icons/dark-search-icon.svg";
import { ReactComponent as CrossIcon } from "../../../../assets/icons/black-cross-icon.svg";
import { useTranslation } from "react-i18next";
import { categoryList } from "../../../../Data/data";
import { useSelector, useDispatch } from "react-redux";
import {
  setShopFilter,
  checkItem,
  getFilteredDataSuccess,
  removeFilteredData,
} from "../../../../Redux/Slices/ProductSlice";
import Search from "../SearchForFilter/Search";
import { string } from "yup";

// import { FITER_OBJECT } from "../../../../Redux/SagaAction/actions";

const FilterData = ({
  selectshopFilter,
  setSelectshopFilter,
  title,
  data,
  ref,
  ischecked,
  setIschecked,
  filterTitle,
}) => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState([]);
  const { t } = useTranslation();
  let { checkedItems ,filter,filterSelection,productsList} = useSelector((state) => state?.ProductSlice);

  // categoryName

  const handleRemove = (title) => {
    setIschecked(checkedItems.filter((e) => e !== title));
    setSelectshopFilter(filter.filter((e) => e !== title));
    dispatch(checkItem(checkedItems.filter((e) => e !== title)));
    dispatch(setShopFilter(filter.filter((e) => e !== title)));
    dispatch(removeFilteredData({ name: filterTitle, value: title })); //new
  };
  const handleCheck = async (event, title) => {
    if (event.target.checked) {
      await setIschecked([...ischecked, title]);
      setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(checkItem([...checkedItems, title]));
      dispatch(setShopFilter([...filter, title]));
      dispatch(getFilteredDataSuccess({ select: title, title: filterTitle }));
    } else {
      handleRemove(title);
      // dispatch(removeFilteredData({ filterTitle,title}));
      await setSelectshopFilter((oldValues) => {
        return oldValues.filter(
          (selectshopFilter) => selectshopFilter !== title
        );
      });
    }
  };

  useEffect(() => {
    if (selectshopFilter?.length || selectshopFilter?.length === 0)
      dispatch(setShopFilter(selectshopFilter));
  }, [selectshopFilter]);
  // searched
  return (
    <>
      <div className="filter-box">
        <div className="filter-header">
          <div className="filter-title">{title}</div>
          {(title === t("productlisting.category") ||
            title === t("productlisting.designer")) && (
            <Search
              name={title}
              data={data}
              setSearched={setSearched}
              searched={searched}
            />
          )}
        </div>
        <div className="filter-list">
          <ul>
            {/* {(!searched)? searched?.map((cc,i)=>{
                <li key={`${title}${i}`}>
                <div className="custom-checkbox gray-bg">
                  <input
                    checked={ischecked.includes(cc.title)}
                    type="checkbox" 
                    id={`${title}${i}`}
                    onChange={(event) => {
                      handleCheck(event, cc.title);
                    }}
                  />
                  <label for={`${title}${i}`}></label>
                </div>
                <div className="filter-inner-title">{cc?.title}</div>
                <span>({cc.count})</span>
              </li>
            }): */}
            {searched?.length !== 0
              ? searched?.map((cc, i) => {
                  return (
                    <li key={`${title}${i}`}>
                      <div className="custom-checkbox gray-bg">
                        <input
                          checked={
                            checkedItems?.includes(cc?.title)
                            // ||
                            // checkedItems?.includes(cc.title)
                          }
                          type="checkbox"
                          id={`${title}${i}`}
                          onChange={(event) => {
                            handleCheck(event, cc?.title);
                          }}
                        />
                        <label htmlFor={`${title}${i}`}></label>
                      </div>
                      <div className="filter-inner-title">{cc?.title}</div>
                      <span>({cc?.count})</span>
                    </li>
                  );
                })
              : data?.map((cc, i) => {
                  return (
                    <li key={`${title}${i}`}>
                      <div className="custom-checkbox gray-bg">
                        <input
                          checked={
                            checkedItems?.includes(cc?.title)
                            // ||
                            // checkedItems?.includes(cc.title)
                          }
                          type="checkbox"
                          id={`${title}${i}`}
                          onChange={(event) => {
                            handleCheck(event, cc?.title);
                          }}
                        />
                        
                        <label htmlFor={`${title}${i}`}></label>
                      </div>
                      <div className="filter-inner-title">{cc?.title}</div>
                      <span>({cc?.count})</span>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterData;
