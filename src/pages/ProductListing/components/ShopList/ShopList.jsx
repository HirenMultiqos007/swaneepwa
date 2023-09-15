import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setShopFilter } from "../../../../Redux/Slices/ProductSlice";
import { shopList } from "../../../../Data/data";
const ShopList = ({selectshopFilter, setSelectshopFilter}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // let selectshopFilter = [];
  // const [selectshopFilter, setSelectshopFilter] = useState([]);
  // const [isChecked,setIsChecked] = useState(false)

  const handleCheck = (event, title) => {
    if (event.target.checked) {
      // setIsChecked(true)
      setSelectshopFilter((selectshopFilter) => [...selectshopFilter, title]);
      dispatch(setShopFilter([...selectshopFilter, title]));
    }
  };
// (selectshopFilter.length===0)??true
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.shop")}`}</div>
      </div>

      <div className="filter-list">
        <ul>
          {shopList.map((sc, i) => {
            return (
              <li key={`shop${i}`}>
                <div className="custom-checkbox gray-bg">
                  <input
                    type="checkbox"
                    id={`shop${i}`}
                    // checked= {isChecked}
                    onChange={(event) => {
                      handleCheck(event, sc.title);
                    }}
                  />
                  <label for={`shop${i}`}></label>
                </div>
                <div className="filter-inner-title">{sc.title}</div>
                <span>({sc.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopList;