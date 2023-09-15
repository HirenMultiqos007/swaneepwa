import React from "react";

import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  // const userAvailable = checkLocalStore("user");
  // const userLogout = removeLocalStore("user")

  return (
    <>
      <div className="header">
        <HeaderTop />
        <HeaderMenu />

      </div>
    </>
  );
};

export default Header;
