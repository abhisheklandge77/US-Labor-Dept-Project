import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AccordianMenu.css";

function AccordianMenu(props) {
  const { accordianDetails } = props;

  const renderNestedAccordian = (details) => {
    console.log("details::::", details);

    return details.map((record, index) => {
      return (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <p>{record?.label}</p>
          </AccordionSummary>
          <AccordionDetails>
            {renderAccordianDetails(record)}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  const renderAccordianDetails = (record) => {
    if (record?.children?.length) {

      return record?.children.map((d, i) => {
        if(d?.label){
            const arr = renderNestedAccordian(d?.children);
            return arr;
          }else{
              return <div key={i}><p>{d}</p></div>
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