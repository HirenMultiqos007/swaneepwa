import React, { useState } from "react";
import SearchCrossIcon from "../../../../assets/icons/gray-cross-icon.svg";
import SearchIcon from "../../../../assets/icons/dark-search-icon.svg";

const Search = ({ name, data, setSearched, searched }) => {
  const [active, setIsActive] = useState(null);
  const [searchValue, setSearchedValue] = useState("");
  const addclass = () => {
    setIsActive(`filter-search-expanded`);
  };
  const removeclass = () => {
    setIsActive(null);
    setSearchedValue("");
    setSearched([]);
  };

  const handleSearch = (event) => {
    data.map((i) => {
      i.title.toLowerCase() === event &&
        setSearched((searched) => [...searched, i]);
      !event && setSearched([]);
    });
    setSearchedValue(event);
  };

  return (
    <div className={`filter-search-filterSearchBox ${active}`}>
      <input
        type="text"
        className="filter-search-inputBox filter-search-hidden"
        placeholder={`Search for ${name}`}
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <span className="filter-search-iconSearch">
        <img
          src={SearchIcon}
          alt="SearchIcon"
          className="search-icon"
          onClick={addclass}
        />
        <img
          src={SearchCrossIcon}
          alt="SearchIcon"
          className="cross-icon"
          onClick={removeclass}
        />
      </span>
    </div>
  );
};

export default Search;
