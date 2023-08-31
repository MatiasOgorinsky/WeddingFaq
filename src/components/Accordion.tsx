import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, Typography } from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import invitation from '../images/invitation.jpeg'

const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const StyledButton = styled.button`
  border: none;
  padding: 5px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  background:none

`;
const CustomAccordion = styled(MuiAccordion)`
  && {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 100%; 
    
  }
`;
// addapt this const
const AccordionSummary = styled(MuiAccordionSummary)`
  && {
    background-color: #f0f0f0;
    padding: 10px;
    font-weight: bold;
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  && {
    padding: 10px;
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreOutlinedIcon)`
  && {
    color: #000;
  }
`;


export interface FaqData {
  question: {
    en: string;
    es: string;
    he?: string;
    da?: string;
  };
  answer: {
    en: string;
    es: string;
    he?: string;
    da?: string;
  };
  indicationText?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  accordionDetails?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  iframeUrlParking?: string;
  link?: string;
  address?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  showInvitation?: boolean;
}

const Accordion: React.FC<{ faqData: FaqData[] }> = ({ faqData }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const { language } = useContext(LanguageContext);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionWrapper>
      {faqData.map((item, index) => (
        <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
            <Typography>{item.question[language as keyof typeof item.question]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer[language as keyof typeof item.answer]}</Typography>
            {item.address && (
              <p>{item.address?.[language as keyof typeof item.address]}</p>
            )}
            <p>{item.accordionDetails?.[language as keyof typeof item.accordionDetails]}</p>
            {item.iframeUrlParking && (
              <>
                {item.indicationText && (
                  <>

                    <StyledButton>

                      {item.indicationText?.[language as keyof typeof item.indicationText]}
                    </StyledButton>
                  </>
                )}
                <iframe src={item.iframeUrlParking} width="100%" height="450" title="Map for Venue"></iframe>
                <p>closest train station : ranana west</p>
              </>
            )}
            {item.showInvitation && (<img src={invitation} alt="image not found" width="90%" />)}
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
