import React, { useEffect } from "react";
import { ReactComponent as CrossIcon } from "../../../../assets/icons/black-cross-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  checkItem,
  getPrice,
  setShopFilter,
  removeFilteredData,
} from "../../../../Redux/Slices/ProductSlice";

const SelectedFilter = ({
  setSelectshopFilter,
  setIschecked,
  selectshopFilter,
}) => {
  const dispatch = useDispatch();
  let { filter ,checkedItems,filterSelection} = useSelector((state) => state.ProductSlice);


  let flattenedFilterSelection = {
    ...filterSelection,
    category: filterSelection?.category?.flat(),
    designer: filterSelection?.designer?.flat(),
    size: filterSelection?.size?.flat(),
    // price: filterSelection.price,
    color: filterSelection?.color?.flat(),
    discount: filterSelection?.discount?.flat(),
    shippingtime: filterSelection?.shippingtime?.flat(),
  };
  let flattenedArray = Object.entries(flattenedFilterSelection)?.flat();
  // console.log("flattenedArrayflattenedArrayflattenedArrayflattenedArray",flattenedFilterSelection);
  // console.log("filterSelectionfilterSelection", flattenedArray);
  const minPrice = Math.min(...flattenedFilterSelection?.price);
  const maxPrice = Math.max(...flattenedFilterSelection?.price);
  const priceRange = `${minPrice} - ${maxPrice}`;
  // console.log("priceRange", priceRange);
  const handleRemove = (name, value) => {
    // console.log({ name, value });
    dispatch(removeFilteredData({ name, value }));
    // flattenedArray = flattenedArray?.filter((e) => e !== name);
    // // filter = filter?.filter((e) => e !== name);
    // console.log("flattenedArrayflattenedArray",flattenedArray);
    // // dispatch(getPrice(value));
    // // dispatch(getFilteredDataSuccess({ select: name, title: filterTitle }));
    // dispatch(setShopFilter(filter?.filter((e) => e !== name)));
    checkedItems = checkedItems?.filter((e) => e !== value);
    setIschecked([...checkedItems]);
    // setSelectshopFilter([...filter]);

    dispatch(checkItem([...checkedItems]));
    // dispatch(setShopFilter([...filter]));
  };
  useEffect(() => {
   
  }, [flattenedArray]);
  // useEffect(() => {
  //  filter = filter?.filter(
  //     (item, index) => filter?.indexOf(item) === index
  //   );
  //   console.log("filter",filter);
  // }, [filter]);

  return (
    <div className="filter-select-items">
      <ul>
        {Array.isArray(flattenedArray) &&
          flattenedArray?.map((i, key, need) => {
      
            return (
              key % 2 !== 0 &&
              i?.length > 0 && (
                <>
                  {i?.map((e, index) => {
                    return (
                      <li key={index}>
                     
                        <span>{ e} </span>
                        <CrossIcon
                          onClick={() => {
                            console.log(need[key - 1]);
                            handleRemove(need[key - 1], e);
                          }}
                        />
                      </li>
                    );
                  })}
                </>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default SelectedFilter;
