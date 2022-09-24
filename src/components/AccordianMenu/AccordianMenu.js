import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AccordianMenu.css";

function AccordianMenu(props) {
  const { accordianDetails, activeMenu, setActiveMenu } = props;

  const renderNestedAccordian = (details) => {
    if (details.length) {
      return details.map((record, index) => {
        if (record?.children?.length) {
          return (<Accordion key={index} className="accordian">
            <AccordionSummary className="accordian-title" onClick={() => setActiveMenu("")} expandIcon={<ExpandMoreIcon />} >
              <p>{record?.label}</p>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
              {renderNestedAccordian(record?.children)}
            </AccordionDetails>
          </Accordion>)
        } else {
          return <AccordionDetails className={activeMenu === record?.label ? "active-menu menu": "menu"} onClick={() => setActiveMenu(record?.label)}>
            {record?.label}
            </AccordionDetails>
        }
      })
    }
  };

  return (
    <div className="accordian-menu-container">
      {
        renderNestedAccordian(accordianDetails)
      }
    </div>
  );
}

export default AccordianMenu;