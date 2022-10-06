import React, { useState } from "react";
import DataValidationFooter from "../DataValidationFooter/DataValidationFooter";
import DataValidationHeader from "../DataValidationHeader/DataValidationHeader";
import "./BenefitsModule.css";

function BenefitsModule() {
    const [useName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [organization, setOrganization] = useState("");

    return (
        <div className="data-validation-container">
            <DataValidationHeader title={"DATA VALIDATION"} subTitle={"Benefits Module 3"} />
            <table className="data-validation-table">
                <th className="table-head" colSpan={2}>Login</th>
                <tr>
                        <td className="input-label">Organization</td>
                        <td className="oragnization-input-field">
                            <select name="population" value={organization}
                                onChange={(e) => setOrganization(e.target.value)}>
                                <option key={""} value="">--Select--</option>
                                <option key={"National Office"} value="National Office">National Office</option>
                            </select>
                        </td>
                    </tr>
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
                <tr className="btn-container">
                    <td colSpan={2}><button className="btn">Submit</button>
                        <button className="btn">Clear</button>
                    </td>
                </tr>
            </table>
            <div className="back-link"><a href="/back">Back to Top</a></div>
            <DataValidationFooter />
        </div>
    );
};

export default BenefitsModule;