import React, { useState } from "react";
import DataValidationFooter from "../DataValidationFooter/DataValidationFooter";
import DataValidationHeader from "../DataValidationHeader/DataValidationHeader";
import "./DueItemsByValidationYear.css";

function DueItemsByValidationYear() {
    const [populationType, setPopulationType] = useState("");
    const [validationYear, setValidationYear] = useState("");

    return (
        <div className="data-validation-container">
            <DataValidationHeader title={"DATA VALIDATION REPORTS"} subTitle={"Due Items by Validation Year"} />
            <table className="data-validation-table">
                <th className="table-head" colSpan={2}>Data Validation Due Items by Validation Year</th>
                <tr>
                    <td className="input-label">Population type</td>
                    <td className="input-field">
                        <select name="population" value={populationType}
                            onChange={(e) => setPopulationType(e.target.value)}>
                            <option key={""} value="">--Select--</option>
                            <option key={"Benefits"} value="Benefits">Benefits</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="input-label">Validation Year</td>
                    <td className="input-field">
                        <select name="year" value={validationYear}
                            onChange={(e) => setValidationYear(e.target.value)}>
                            <option key={""} value="">--Select--</option>
                            <option key={"2022"} value="2022">2022</option>
                        </select></td>
                </tr>
                <tr className="btn-container">
                    <td colSpan={2}><button className="btn">Submit Query</button>
                        <button className="btn">Clear Query</button>
                    </td>
                </tr>
            </table>
            <DataValidationFooter />
        </div>
    );
};

export default DueItemsByValidationYear;