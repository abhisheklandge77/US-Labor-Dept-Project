import React, { useState } from "react";
import SidePanel from "../SidePanel/SidePanel";
import TabsPanel from "../TabsPanel/TabsPanel";
import "./MainPanel.css";

function MainPanel({ activeTab }) {
    const [activeMenu, setActiveMenu] = useState("");

    return (
        <div className="main-panel-container">
            <SidePanel activeTab={activeTab} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            <TabsPanel activeTab={activeTab} activeMenu={activeMenu}/>
        </div>
    );
};

export default MainPanel;