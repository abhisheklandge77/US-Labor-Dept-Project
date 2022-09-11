import React, { useState } from "react";
import AccordianMenu from "../AccordianMenu/AccordianMenu";
import "./SidePanel.css";

function SidePanel() {
    const [searchText, setSearchText] = useState("");
    const accordianDetails = [
        {
            label: "Data Entry",
            children: [
                {
                    label: "Claims Activity Regular",
                    children: ["205 Nonmonitary Determinations Activity [RB] [OMB No 1205-0154]", "218 Benefit Rights and Experience [RB] [OMB No. 1205-0177]"],
                },
                {
                    label: "Claims Activity Additional Benefit Programs",
                    children: [
                        {
                            label: "Extended Benefit (EB)",
                            children: ["207 Nonmonitary Determinations Activity [EB] [OMB No 1205-0154]"],
                        },
                        {
                            label: "Temporary Extended Unemployment Compansation (TEUC)",
                            children: ["207 Nonmonitary Determinations Activity [EB] [OMB No 1205-0154]", "218 Benefit Rights and Experience [EB] [OMB No. 1205-0177]", "5130 Benefit Appeals [EB] [OMB No. 1205-0172]", "5159 Claims and Payment Activities [EB] [OMB No. 1205-0010]"],
                        },
                        {
                            label: "Emergency Unemployment Compansation 2008 (EUC 2008)",
                            children: ["207 Nonmonitary Determinations Activity [EB] [OMB No 1205-0154]", "218 Benefit Rights and Experience [EB] [OMB No. 1205-0177]"],
                        }
                    ]
                },
                {
                    label: "2020 Pandemic Assistance",
                    children: ["205 Nonmonitary Determinations Activity [RB] [OMB No 1205-0154]", "218 Benefit Rights and Experience [RB] [OMB No. 1205-0177]"],
                }
            ]
        }
    ];

    return (
        <div className="side-panel-container">
            <h3>AR - Applications Menu</h3>

            <div className="searchInput-container">
                <input className="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="&#x1F50E;&#xFE0E; Search" />
            </div>

            <div className="menu-container">
                <div className="menu-name">
                    <p>Report Timeliness</p>
                </div>
                <div className="menu-name">
                    <p>OMB Approval</p>
                </div>
                <div className="menu-name">
                    <p>Load Report Data  from ASCII File</p>
                </div>
                <AccordianMenu accordianDetails={accordianDetails} />
            </div>
        </div>
    );
}

export default SidePanel;
