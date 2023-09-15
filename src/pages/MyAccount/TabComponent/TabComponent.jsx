import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";


export const TabComponent = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");
  
  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
      {children}
    </Tabs>
  );
};
