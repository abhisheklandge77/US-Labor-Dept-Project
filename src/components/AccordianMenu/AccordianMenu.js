import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AccordianMenu.css";

function AccordianMenu(props) {
  const { accordianDetails } = props;

  const renderNestedAccordian = (details) => {

    return details.map((record, index) => {
      return (
        <Accordion key={index} className="accordian">
          <AccordionSummary className="accordian-title" expandIcon={<ExpandMoreIcon />} >
            <p>{record?.label}</p>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            {renderAccordianDetails(record)}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  const renderAccordianDetails = (record) => {
    if (record?.children?.length) {
      if (record?.children[0]?.label) {
        const arr = renderNestedAccordian(record?.children);
        return arr;
      } else {
        return record?.children.map((d, i) => {
          return <div key={i}><p>{d}</p></div>
        })
      }
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