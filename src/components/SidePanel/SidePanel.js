import React, { useEffect, useState } from "react";
import { USLaborData, USLaborTabs } from "../../UsLaborData";
import AccordianMenu from "../AccordianMenu/AccordianMenu";
import "./SidePanel.css";

function SidePanel({ activeTab, activeMenu, setActiveMenu }) {
    const [searchText, setSearchText] = useState("");
    const [UsLaborDetails, setUSLaborDetails] = useState(USLaborData[USLaborTabs[activeTab]]);

    const filteredData = [];
    const filterUSLaborDataBySearchText = (data, text) => {
        if (data?.length) {
            data.forEach(field => {
                if (field.label.toLowerCase().includes(text.toLowerCase())) {
                    filteredData.push(field);
                }
                if (field?.children?.length) {
                    filterUSLaborDataBySearchText(field.children, text);
                }
            })
        }
        return filteredData;
    };

    useEffect(() => {
        if (searchText) {
            const filteredUSLaborData = filterUSLaborDataBySearchText(USLaborData[USLaborTabs[activeTab]], searchText);

            setUSLaborDetails(filteredUSLaborData);
        } else {
            setUSLaborDetails(USLaborData[USLaborTabs[activeTab]]);
        }
    }, [searchText, activeTab]);

    const renderSideMenus = (activeTab) => {
        switch (USLaborTabs[activeTab]) {
            case "Data Validation": return (<div className="menu-container">
                <AccordianMenu accordianDetails={UsLaborDetails} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>);

            case "UIR": return (
                <div className="menu-container">
                    <AccordianMenu accordianDetails={UsLaborDetails} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
            );

            case "BAM": return <div></div>;

            case "TPS": return <div></div>;

            case "User recertification": return <div></div>;

            case "Utilities": return <div></div>;

            default: return null;
        }
    };

    return (
        <div className="side-panel-container">
            <h3>AR - Applications Menu</h3>

            <div className="searchInput-container">
                <input className="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="&#x1F50E;&#xFE0E; Search" />
            </div>
            {renderSideMenus(activeTab)}
        </div>
    );
}

export default SidePanel;
