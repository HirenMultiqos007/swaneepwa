import React, { useState, useEffect } from "react";
import "nouislider/distribute/nouislider.css";
import Nouislider from "nouislider-react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  checkItem,
  getPrice,
  setShopFilter,
} from "../../../../Redux/Slices/ProductSlice";
const Price = ({
  selectshopFilter,
  setSelectshopFilter,
  ischecked,
  setIschecked,
  filterTitle,
}) => {
  let { filterSelection } = useSelector((state) => state.ProductSlice);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [percent, setPercent] = useState("299");
  const [values, setValues] = useState([299, 105999]);
// console.log("filterSelectionfi",filterSelection?.price);
  const onChangeSlide = async (data) => {
    let value = data?.map(Number);
    value = [...new Set(value)];
    setValues([value[0], value[1]]);
    setSelectshopFilter((selectshopFilter) => [
      ...selectshopFilter,
      value[0],
      value[1],
    ]);
    dispatch(getPrice(value));

    // dispatch(setShopFilter([value]));
    // selectshopFilter.length > 3 &&
    //   setSelectshopFilter(
    //     selectshopFilter.filter(
    //       (item, index) => selectshopFilter.indexOf(item) === index
    //     )
    //   );
  };
  // const handleRemove = (value) => {
  //   setIschecked((oldValues) => {
  //     return oldValues.filter(
  //       (ischecked) => ischecked !== value[0] || value[1]
  //     );
  //   });
  // };

  // const handleSelect = async (data) => {
  //   let value = data.map(Number);
  //   value = [...new Set(value)];
  //   setIschecked([...ischecked, value]);
  //   await setSelectshopFilter((selectshopFilter) => [
  //     ...selectshopFilter,
  //     value,
  //   ]);

  // if (selectshopFilter.includes(value[0])) {
  // handleRemove(data);
  // await setSelectshopFilter((oldValues) => {
  //   return oldValues.filter(
  //     (selectshopFilter) => selectshopFilter !== data
  //   );
  // });
  // }
  // };
  useEffect(() => {
    if (filterSelection?.price?.length === 0) {
      setValues([299, 105999]);
    }
  }, [filterSelection?.price]);
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.price")}`}</div>
      </div>
      <div className="price-range">
        <Nouislider
          connect={true}
          range={{ min: 299, max: 105999 }}
          behaviour="drag"
          step={100}
          start={values}
          tooltips={true}
          
          onEnd={(data) => {
            onChangeSlide(data);
          }}
        />

        {percent && (
          <div className="price-text">
            <span>{`${t("productlisting.price")}`} :</span> ₹ {values[0]} -{" "}
            ₹ {values[1]}
          </div>
        )}
        {/* <p>
          <span>₹{values[0]}</span> -<span> ₹{values[1]}</span>
        </p> */}
      </div>
    </div>
  );
};

export default Price;
