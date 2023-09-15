import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const MobileTabs = ({ tabs }) => {
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <div className="tabs sidebar">
        {tabs.map((tab, key) => {
          return (
            <>
              <div className={!toggle === true ? "is-active" : null} key={key}>
                <div
                  className="custom-li"
                  onClick={() => {
                    navigate(tab?.path);
                    setFirst(tab?.id);
                    handleToggle();
                  }}
                >
                  <input type="radio" name="tabs" id={tab?.id} />
                  {tab?.icon}
                  <label htmlFor={tab?.id}>{tab?.title}</label>
                </div>
                {tab?.id === first && <div className="tab">{tab?.content}</div>}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MobileTabs;

// import { NavLink, Route, Routes, Outlet } from 'react-router-dom'

// const MobileTabs = ({  tabs, handleTabChange }) => {

//     return (

/* <nav>
                {tabs.map((tab) => (

                    <NavLink
                        key={tab.id}
                        to={tab.path}
                        isActive={() => activeTab === tab.path}
                        onClick={() => handleTabChange(tab.path)}
                        onOverflow={'scroll'}
                        style={{ color: 'white',backgroundColor:"#e83647",margin:"10px",padding:"5px" }}
                    >
                        {tab.title}
                    </NavLink>

                ))}
                <div className="tab-content">
                    <Outlet />
                </div>
            </nav> */

//     )
//         }
// export default MobileTabs
