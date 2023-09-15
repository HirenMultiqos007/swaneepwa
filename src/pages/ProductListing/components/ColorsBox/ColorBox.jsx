import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { colorList } from "../../../../Data/data";
import { useDispatch, useSelector } from "react-redux";
import {
  checkItem,
  getFilteredDataSuccess,
  removeFilteredData,
  setShopFilter,
} from "../../../../Redux/Slices/ProductSlice";
import { PRODUCT_DATA } from "../../../../Redux/SagaAction/actions";

const ColorBox = ({
  selectshopFilter,
  setSelectshopFilter,
  setViewSizeId,
  ischecked,
  setViewId,
  viewId,
  viewProduct,
  setIschecked,
  fixColor,
  color,
  setColor,
  size,
  setSize,
  // setSellingPrice,
  // sellingPrice,
  filterTitle,
}) => {
  let { ProductDetailsData, checkedItems, filter } = useSelector(
    (state) => state.ProductSlice
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(
    viewProduct?.addVariant?.[0]?.color
  );

  // const handleRemove = (color) => {
  //   // setIschecked((oldValues) => {
  //   //   return oldValues.filter((ischecked) => ischecked !== color);
  //   // });
  //   setIschecked(checkedItems?.filter((e) => e !== color));

  //   setSelectshopFilter(filter?.filter((e) => e !== color));

  //   dispatch(checkItem(checkedItems?.filter((e) => e !== color)));

  //   dispatch(setShopFilter(filter?.filter((e) => e !== color)));
  //   dispatch(removeFilteredData({ name: filterTitle, value: color }));
  // };

  // const handleSelect = async (color) => {
  //   setIschecked([...ischecked, color]);
  //   await setSelectshopFilter((selectshopFilter) => [
  //     ...selectshopFilter,
  //     color,
  //   ]);
  //   dispatch(checkItem([...checkedItems, color]));
  //   dispatch(setShopFilter([...filter, color]));
  //   dispatch(getFilteredDataSuccess({ select: color, title: filterTitle }));

  //   if (selectshopFilter?.includes(color)) {
  //     handleRemove(color);
  //     await setSelectshopFilter((oldValues) => {
  //       return oldValues.filter(
  //         (selectshopFilter) => selectshopFilter !== color
  //       );
  //     });
  //   }
  // };
  // // for product detail section
  // const handleFixColor = async (data, color) => {
  //   setSize(data?.variantList?.[0]?.sizeId);
  //   setSelectedColor(color);
  //   setColor(data?.colorId);
  //   // setSize()
  //   // setSize(data?.variantList?.[0]?.size);
  //   // setSellingPrice(true);
  //   dispatch({ type: PRODUCT_DATA, payload: data });
  //   dispatch(setShopFilter(color));
  //   if (selectedColor === color) {
  //     setSelectedColor("");
  //     // setSellingPrice(null);
  //   }
  // };
 

  // useEffect(() => {
  //   setSelectedColor(ProductDetailsData?.color);
  //   // setSize(size); 
  //   // setColor(ProductDetailsData?.colorId);

  //   // console.log("productsetColorsetColor",ProductDetailsData?.color);
  //   if (selectshopFilter?.length || selectshopFilter?.length === 0) {
  //     dispatch(setShopFilter(selectshopFilter));
  //   }
  // }, [viewProduct, selectshopFilter]);
    const [first, setfirst] = useState(0)
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">{`${t("productlisting.color")}`}</div>
      </div>
      <div className="filter-list">
      <ul className="size-list color-list">
        {viewProduct ? viewProduct?.map((colorData,index)=> {
          console.log(colorData,"MILIIIIIIII",viewId)
          return(
             <li
            key={colorData?._id}
            id={colorData?._id}
            onClick={()=> {
              setViewId(colorData?._id)
              setViewSizeId(colorData?.variantList?.[0]?.sizeId)
            }}
            className={(viewId === colorData?._id) ? "active" : null}
          >
            <div
              className="circle"
              style={{
                backgroundColor: colorData?.color?.toLowerCase()?.replace(/-/g, '')
              }}
            ></div>
          </li>
          )
        }) : colorList?.map((colorList,index)=>{
          return(
            <li
            key={index}
            className={(colorList?._id === first) ? "active" : null}
            onClick={()=> {
              setfirst(colorList?._id)
            }}
          >
            <div
              className="circle"
              style={{
                backgroundColor: colorList?.color?.toLowerCase()?.replace(/-/g, '')
              }}
            ></div>
          </li>
          )
        })}
        </ul>
      </div>
    </div>
  );
};

export default ColorBox;
