import React from "react";
import "./Navbar.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from "../../assets/logo-us-labor-dept.svg";
import PersonIcon from '@mui/icons-material/Person';
import { USLaborTabs } from "../../UsLaborData";

function Navbar(props) {
  const { activeTab, setActiveTab } = props;

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo-US-Labor-Dept" />
        </div>
        <h3>U.S. DEPARTMENT OF LABOR</h3>
      </div>
      <div className="navbar-container">
        <Tabs value={activeTab} onChange={() => { }} className="navbar">
          {USLaborTabs.map((tab, index) => {
            return <Tab className="nav-tab" key={index} value={index} label={tab} onClick={() => setActiveTab(index)} />;
          })}
        </Tabs>
        <div className="user-icon">
          <PersonIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
