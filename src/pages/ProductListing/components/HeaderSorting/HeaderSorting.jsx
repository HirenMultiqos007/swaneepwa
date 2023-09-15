import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const HeaderSorting = () => {
  const { t } = useTranslation();
  const [selectSort, setSelectSort] = useState(t("productlisting.popular"));
  const handleSelect = (e) => {
    setSelectSort(e);
  };

  return (
    <div className="sort-by">
      <span>{`${t("productlisting.sortby")}`}:</span>
      <div className="custom-dropdown">
        <DropdownButton
          id="dropdown-basic-button"
          title={selectSort || t("productlisting.popular")}
          drop="down-centered"
          onSelect={(eventkey) => {
            handleSelect(eventkey)
          }}
        >
          <Dropdown.Item eventkey={`${t("productlisting.popular")}`} className="active">
            {`${t("productlisting.popular")}`}
          </Dropdown.Item>
          <Dropdown.Item eventKey={`${t("productlisting.latest")}`}>
            {`${t("productlisting.latest")}`}
          </Dropdown.Item>
          <Dropdown.Item eventKey={`${t("productlisting.lowtohigh")}`}>
            {`${t("productlisting.lowtohigh")}`}
          </Dropdown.Item>
          <Dropdown.Item eventKey={`${t("productlisting.highttolow")}`}>
            {`${t("productlisting.highttolow")}`}
          </Dropdown.Item>
          <Dropdown.Item eventKey={`${t("productlisting.discounthighttolow")}`}>
            {`${t("productlisting.discounthighttolow")}`}
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default HeaderSorting;
