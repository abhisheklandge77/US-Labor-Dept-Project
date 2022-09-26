import React, { useState } from "react";
import DataValidationFooter from "../DataValidationFooter/DataValidationFooter";
import DataValidationHeader from "../DataValidationHeader/DataValidationHeader";
import "./ValidationSoftware.css";

function ValidationSoftware() {
    const [useName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedValidationOption, setSelectedValidationOption] = useState("");

    return (
        <div className="data-validation-container">
            <DataValidationHeader title={"DATA VALIDATION"} subTitle={"Data Validation Software"} />
            <table className="data-validation-table">
                <th className="table-head" colSpan={2}>Validation Software</th>
                <tr>
                    <td className="input-label">Username</td>
                    <td className="input-field">
                        <input value={useName} onChange={(e) => setUserName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td className="input-label">Password</td>
                    <td className="input-field">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <div className="radio-group">
                            <div className="radio-input">
                                <input type="radio" id="benefits" name="validation-softwate" value="benefits" checked={selectedValidationOption === "benefits"} onChange={(e) => setSelectedValidationOption(e.target.value)} />
                                <label htmlFor="benefits">Benefits</label>
                            </div>
                            <div>
                                <input type="radio" id="tax" name="validation-softwate" value="tax" checked={selectedValidationOption === "tax"} onChange={(e) => setSelectedValidationOption(e.target.value)} />
                                <label htmlFor="tax">Tax</label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="btn-container">
                    <td colSpan={2}><button className="btn">Login</button>
                        <button className="btn">Clear Query</button>
                    </td>
                </tr>
            </table>
            <DataValidationFooter />
        </div>
    );
};

export default ValidationSoftware;