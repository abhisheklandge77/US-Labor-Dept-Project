import React from "react";
import SidePanel from "../SidePanel/SidePanel";
import TabsPanel from "../TabsPanel/TabsPanel";
import "./MainPanel.css";

function MainPanel({ activeTab }) {
    return (
        <div className="main-panel-container">
            <SidePanel />
            <TabsPanel activeTab={activeTab}/>
        </div>
    );
};

export default MainPanel;