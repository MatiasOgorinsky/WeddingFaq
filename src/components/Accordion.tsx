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
// text-align: center
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
    margin-bottom: 10px;
    width: 100%; 
    border-radius: 8px; /* Apply border-radius to all corners */
    overflow: hidden; /* Ensure rounded corners are displayed */
    
    
  }
`;
// addapt this const
const AccordionSummary = styled(MuiAccordionSummary)`
  && {

    padding: 10px;
    font-weight: bold;
    background-color:#FAF3F0;
  

  }
`;
// background:#FAF3F0;
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
const DownloadButton = styled(StyledButton)`

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
  promoCodeDetails?: {
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

  function downloadInvitation(item: FaqData) {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = invitation; // Set the href to the image URL
    anchor.download = 'invitation.jpg'; // Specify the desired filename

    // Trigger a click event on the anchor element to initiate the download
    anchor.click();

    // Clean up the temporary anchor element
    anchor.remove();
  }

  const openWazeLink = () => {
    window.open('https://waze.com/ul/hsv8z1u3yr', '_blank'); // Open the link in a new tab
  };

  return (
    <AccordionWrapper>
      {faqData.map((item, index) => (
        <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ borderRadius: '8px' }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`} >
            <Typography>{item.question[language as keyof typeof item.question]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer[language as keyof typeof item.answer]}</Typography>
            {item.address && (
              <p>{item.address?.[language as keyof typeof item.address]}</p>
            )}
            <p>{item.accordionDetails?.[language as keyof typeof item.accordionDetails]}</p>
            {item.promoCodeDetails && (
              <p>{item.promoCodeDetails?.[language as keyof typeof item.promoCodeDetails]}<b>grunwed</b></p>

            )}

            {item.iframeUrlParking && (
              <>
                {item.indicationText && (
                  <>

                    <StyledButton onClick={openWazeLink}>
                      {item.indicationText?.[language as keyof typeof item.indicationText]}
                    </StyledButton>
                  </>
                )}
                <iframe src={item.iframeUrlParking} width="100%" height="450" title="Map for Venue"></iframe>
                {item.address && (<p>closest train station : ranana west</p>)}
              </>
            )}
            {item.showInvitation && (
              <>
                <DownloadButton onClick={() => downloadInvitation(item)}>Download Invitation</DownloadButton>
                <img src={invitation} alt="image not found" width="90%" />
              </>
            )}
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
