import React, { useState } from "react";
import DataValidationFooter from "../DataValidationFooter/DataValidationFooter";
import DataValidationHeader from "../DataValidationHeader/DataValidationHeader";
import "./ResultsByPopulation.css";

function ResultsByPopulation() {
    const [populationType, setPopulationType] = useState("");
    const [validationYear, setValidationYear] = useState("");
    const [population, setPopulation] = useState("");
    const [includeStateComments, setIncludeStateComments] = useState("");


    return (
        <div className="data-validation-container">
            <DataValidationHeader title={"DATA VALIDATION REPORTS"} subTitle={"Results by Population"} />
            <table className="data-validation-table">
                <th className="table-head" colSpan={2}>Data Validation Report by Population</th>
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
                    <td className="input-label">Population</td>
                    <td className="input-field">
                        <select name="year" value={population}
                            onChange={(e) => setPopulation(e.target.value)}>
                            <option key={""} value="">First Choose Population TYpe</option>
                            <option key={"population 1"} value="population 1">population 1</option>
                        </select></td>
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
                <tr className="checkbox">
                    <td colSpan={2}>
                        <input type="checkbox" id="stateComments" name="stateComments" value={includeStateComments} onChange={(e) => setIncludeStateComments(e.target.value)} />
                        <label htmlFor="stateComments">Include State's Comments</label>
                    </td>
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

export default ResultsByPopulation;