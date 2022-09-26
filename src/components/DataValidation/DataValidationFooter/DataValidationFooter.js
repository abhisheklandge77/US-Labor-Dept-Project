import React from "react";
import "./DataValidationFooter.css";

function DataValidationFooter() {
    return (
        <div className="data-validation-footer-container">
            <div className="footer-underline"></div>
            <div className="footer-links">
                <a href="/home">Menu</a>
                <h3>|</h3>
                <a href="/feedback">Feedback</a>
                <h3>|</h3>
                <a href="/help">Help</a>
            </div>
        </div>
    );
};

export default DataValidationFooter;