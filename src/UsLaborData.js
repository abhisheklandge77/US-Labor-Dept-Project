import BenefitsModule from "./components/DataValidation/BenefitsModule/BenefitsModule";
import DueItemsByValidationYear from "./components/DataValidation/DueItemsByValidationYear/DueItemsByValidationYear";
import ResultsByPopulation from "./components/DataValidation/ResultsByPopulation/ResultsByPopulation";
import ResultsByValidationYear from "./components/DataValidation/ResultsByValidationYear/ResultsByValidationYear";
import TaxModule from "./components/DataValidation/TaxModule/TaxModule";
import ValidationSoftware from "./components/DataValidation/ValidationSoftware/ValidationSoftware";

export const USLaborTabs = [
    "Data Validation",
    "UIR",
    "BAM",
    "TPS",
    "User recertification",
    "Utilities"
];

export const USLaborData = {
    "Data Validation": [
        {
            label: "Data Validation",
            children: [
                { label: "Validation Software" },
                {
                    label: "Data Validation Reports",
                    children: [
                        {
                            label: "Results by Validation Year"
                        },
                        {
                            label: "Results by Population"
                        },
                        {
                            label: "Due Items by Validation Year"
                        }
                    ]
                },
                {
                    label: "Module 3",
                    children: [
                        {
                            label: "Benefits"
                        },
                        {
                            label: "Tax"
                        },
                    ]
                },
            ]
        }
    ],
    "UIR": [
        {label: "Report Timeliness"},
        {label: "OMB Approval"},
        {label: "Load Report Data  from ASCII File"},
        {
            label: "Data Entry",
            children: [
                {
                    label: "Claims Activity Regular",
                    children: [
                        { label: "205 Nonmonitary Determinations Activity [RB] [OMB No 1205-0154]" },
                        { label: "218 Benefit Rights and Experience [RB] [OMB No. 1205-0177]" }
                    ],
                },
                {
                    label: "Claims Activity Additional Benefit Programs",
                    children: [
                        {
                            label: "Extended Benefit (EB)",
                            children: [
                                { label: "207 Nonmonitary Determinations Activity [EB] [OMB No 1205-0154]" }
                            ],
                        },
                        {
                            label: "Temporary Extended Unemployment Compansation (TEUC)",
                            children: [
                                { label: "207 Nonmonitary Determinations Activity [EB] [OMB No 1205-0154]" },
                                { label: "218 Benefit Rights and Experience [EB] [OMB No. 1205-0177]" },
                                { label: "5130 Benefit Appeals [EB] [OMB No. 1205-0172]" },
                                { label: "5159 Claims and Payment Activities [EB] [OMB No. 1205-0010]" }
                            ],
                        },
                        {
                            label: "Emergency Unemployment Compansation 2008 (EUC 2008)",
                            children: [
                                { label: "207 Nonmonitary Determinations Activity [EB] [OMB No 1205-0154]" },
                                { label: "218 Benefit Rights and Experience [EB] [OMB No. 1205-0177]" }
                            ],
                        }
                    ]
                },
                {
                    label: "2020 Pandemic Assistance",
                    children: [
                        { label: "205 Nonmonitary Determinations Activity [RB] [OMB No 1205-0154]" },
                        { label: "218 Benefit Rights and Experience [RB] [OMB No. 1205-0177]" }
                    ],
                }
            ]
        }
    ],
    "BAM": [],
    "TPS": [],
    "User recertification": [],
    "Utilities": []
};

export const componentMap = {
    "Data Validation": {
        "Validation Software": <ValidationSoftware />,
        "Results by Validation Year": <ResultsByValidationYear />,
        "Results by Population": <ResultsByPopulation />,
        "Due Items by Validation Year": <DueItemsByValidationYear />,
        "Benefits": <BenefitsModule />,
        "Tax": <TaxModule />
    }
}
