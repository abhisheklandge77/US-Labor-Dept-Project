import React from "react";
import { componentMap, USLaborTabs } from "../../UsLaborData";
import UnemploymentInsuranceReports from "../UnemploymentInsuranceReports/UnemploymentInsuranceReports";
import "./TabsPanel.css";

function TabsPanel({ activeTab, activeMenu }) {
    
  const renderTabPanel = (tabValue) => {
    switch (tabValue) {
      case 0:
        return componentMap[USLaborTabs[activeTab]][activeMenu];

      case 1:
        return <UnemploymentInsuranceReports />

      case 2:
        return <div><h2>BAM</h2></div>

      case 3:
        return <div><h2>TPS</h2></div>

      case 4:
        return <div><h2>User recertification</h2></div>

      case 5:
        return <div><h2>Utilities</h2></div>

      default: return <div><h2>Unknown</h2></div>
    }
  }

    return (
        <div className="tabs-panel-container">
            {renderTabPanel(activeTab)}
        </div>
    );
};

export default TabsPanel;