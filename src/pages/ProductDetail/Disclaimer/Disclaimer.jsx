import React from "react";
import { disclaimerList } from "../../../Data/data";
const Disclaimer = () => {
  return (
    <>
      <ul className="disclaimer-list">
        {disclaimerList.map((dc, i) => {
          return (
            <li key={i}>
              <span>{dc?.description}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Disclaimer;
