import React from "react";
import headerImage from "../../../assets/oui-header.jpg";
import infoIcon from "../../../assets/info-icon.jpg";
import "./DataValidationHeader.css";

function DataValidationHeader(props) {
    const { title, subTitle } = props;
    return (
        <div className="data-validation-header-container">
            <div className="header-container">
                <img src={headerImage} alt="data-validation-header" />
            </div>
            <div className="data-validation-title">
                <h2>{title}</h2>
            </div>
            <div className="data-validation-sub-title">
                <h3>{subTitle}</h3>
                <img src={infoIcon} alt="info-icon" />
            </div>
            <div className="underline"></div>
        </div>
    );
};

export default DataValidationHeader;