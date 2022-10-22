import React, { useState } from "react";
import "./UnemploymentInsuranceReports.css";

function UnemploymentInsuranceReports() {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div className="uir-container">
            <h2 className="uir-title"><p>UNEMPLOYMENT INSURANCE REPORTS</p></h2>
            <div className="uir-form">
                <table>
                    <tbody>
                    <tr>
                        <td className="table-cell label">Enter your user name</td>
                        <td className="table-cell"><input value={userName} onChange={(e) => setUserName(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="table-cell label">Enter your password</td>
                        <td className="table-cell"><input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/></td>
                    </tr>
                    </tbody>
                </table>
                <div className="uir-button-conatiner">
                    <button>Submit</button>
                    <button onClick={() => {
                        setUserName("");
                        setPassword("");
                    }}>Clear</button>
                </div>
            </div>
            <div className="uir-links">
                <a href="/home">Home</a>
                <a href="/feedback">Feedback</a>
                <a href="/help">Help</a>
            </div>
        </div>
    )
};

export default UnemploymentInsuranceReports;